(function() {

	window.onerror = function(message, file, lineNumber) {
		var lines = [];
		lines.push('Message: ' + message);
		lines.push('File: ' + file + ':' + lineNumber);
		console.error(lines.join('\n'));
	};
	
	// import notify.js
	// import utils/array.js
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
		
		////state = state_busy;
		////assert.reset();
		////TestSuite.clear();
		////
		////include_clearCache();
		////
		////socket.emit('browser:utest:start', {
		////	userAgent: window.browserInfo
		////});
		////
		////
		////for (var i = 0, imax = config.scripts.length; i < imax; i++) {
		////	script_insert({
		////		path: config.scripts[i]
		////	}, i == imax - 1 ? utest_end : null);
		////}
	}

	//////function utest_end(force) {
	//////	if (force !== true && typeof include !== 'undefined') {
	//////		
	//////		include_ready(function(){
	//////			utest_end(true);
	//////		});
	//////		return;
	//////	}
	//////	
	//////	// findout resources for watcher
	//////	// do this here, as TestScripts could also add/remove scripts
	//////	var resources = script_getResources();
	//////	
	//////	TestSuite.run(function(){
	//////		
	//////		socket.emit('browser:utest:end', {
	//////			total: assert.total,
	//////			failed: assert.failed,
	//////			timeouts: assert.timeouts,
	//////			callbacks: assert.callbacks,
	//////			
	//////			userAgent: window.browserInfo,
	//////			resources: resources
	//////		});
	//////		
	//////		state = state_ready;
	//////	});
	//////}

	
}());