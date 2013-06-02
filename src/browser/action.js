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

	var TestSuite = window.UTest,
		state_ready = 1,
		state_busy = 2,
		state = state_ready,
		socket = io.connect('/browser')
			.on('connect', function(){
				notify('connect');
			})
			.on('server:utest:handshake', function(done) {
				done({
					userAgent: window.browserInfo,
					ready: state
				});
			})
			.on('server:utest', utest_start);

	



	function utest_start(config) {
		
		if (!config || !config.scripts) {
			socket.emit('browser:utest:end', {
				error: 'No scripts to be tested'
			});
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
					
					userAgent: window.browserInfo,
					resources: resources
				});
				
				
			
		});
		
	}


	
}());