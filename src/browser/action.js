(function() {

	window.onerror = function(message, file, lineNumber) {
		var lines = [];
		lines.push('Message: ' + message);
		lines.push('File: ' + file + ':' + lineNumber);
		
		message = lines.join('\n');
		console.error(message);
		
		socket.emit('browser:utest:error', {
			error: message
		});
		
		//-state = state_ready;
	};
	
	// import notify.js
	// import utils/logger.js
	// import utils/script.js
	// import utils/include.js
	
	// import RunnerDom.js
	// import utest.extend.js
	
	var TestSuite = window.UTest,
		state_ready = 1,
		state_busy = 2,
		state = state_ready,
		configuration = new Class.Await,
		socket = io.connect(location.protocol + '//' + location.host + '/utest-browser')
			.on('connect', function(){
				console.log('browser:connected to utest-browser socket');
				notify('connect');
			})
			.on('server:utest:handshake', function(done) {
				console.log('browser:handshake');
				done({
					userAgent: window.browserInfo,
					ready: state
				});
			})
			.on('server:utest', utest_start)
			;

	



	function utest_start(config) {
		
		if (!config) {
			socket.emit('browser:utest:end', {
				error: 'No scripts to be tested'
			});
			return;
		}
		
		state = state_busy;
		
		if (configuration._wait > 0) {
			configuration.always(utest_start.bind(null, config));
			return;
		}
		
		RunnerDom.run(config, socket, function(){
				
				state = state_ready;
			
				var resources = RunnerDom.getResources();
				
				socket.emit('browser:utest:end', {
					total: assert.total,
					failed: assert.failed,
					timeouts: assert.timeouts,
					callbacks: assert.callbacks,
					errors: assert.errors,
					
					userAgent: window.browserInfo,
					resources: resources
				});
				
				
			
		});
		
	}
	
	
	function server_configurate(action){
		var args = Array.prototype.slice.call(arguments);
		
		args.unshift('>server:utest:action');
		args.push(configuration.delegate());
		
		socket
			.emit
			.apply(socket, args)
			;
	}
	


	
}());