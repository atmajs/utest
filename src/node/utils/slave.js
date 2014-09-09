var slave_start,
	slave_openBrowser;

(function(){
	
	var PORT = 5777,
		HOST = '127.0.0.1'
		;
	
	slave_start = function(callback){
		
		app.runAction('shell', {
			command: {
				command: 'atma server',
				detached: true
			}
		}, function(error){
			
			if (error) 
				return callback(error);
			
			ensurePortIsBusy(function(error){
				
				if (error) 
					return callback(error);
				
				
				
				slave_openBrowser(callback);
			}, 0);
		});
		
	};
	
	slave_openBrowser = function(callback) {
		var url = 'http://%1:%2/utest/'.format(HOST, PORT);
		var spawn = require('child_process').spawn,
			commands = {
				darwin: 'open',
				win32: 'explorer.exe',
				linux: 'xdg-open'
			};
		
		spawn(commands[process.platform], [ url ]);
		callback();
		
	}
	
	function ensurePortIsBusy(callback, tries) {
		
		if (tries > 10) 
			return callback('<server not responding>');
		
		if (tries > 3) 
			logger.warn('<Checking server>', tries);
		
		net_portIsAvailable(HOST, PORT, function(state){
			
			if (state === false) 
				return callback();
			
			
			setTimeout(function(){
				ensurePortIsBusy(callback, ++tries);
			}, 300);
		});
	}
	
}());