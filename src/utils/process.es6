var process_toggle;
(function(){
	/**
	 * params:
	 *  	- id: string
	 * 		- action: string enum, start|stop
	 * 		- command: string
	 * 		- commands: Array<string>
	 * 		- cwd: string (default current cwd)
	 */
	process_toggle = function (params, done) {
		var id = params.id,
			process = __process[id];
		if (params.action === 'stop') {
			
			if (process != null) {
				delete __process[id];
				process.kill(done);
			}
			done(new Error('Process not found to stop'));
			return;
		}
		
		if (process != null) {
			return done(new Error('Process with id is active'));
		}
		
		var options = {
			cwd       : params.cwd,
			command   : params.command,
			detached  : params.detached,
			matchReady: toRegexp(params.matchReady),
			silent    : params.silent === void 0 ? params.silent : false,
			
		};
		
		process = __process[id] = new atma.shell.Process(options);
		process
			.always(function(){
				delete __process[id];
			})
			.on('process_exception', data => done(data.error))
			.on('process_ready', () => done(null, process))
			;
		
		
		process.run();
	};
	
	var __process = {};
	
	function toRegexp(str) {
		if (str == null || str[0] !== '/') {
			return null;
		}
		var last = str.lastIndexOf('/');
		var rgx = str.substring(1, last);
		var flags = str.substring(last + 1);
		return new RegExp(rgx, flags);
	}
}());