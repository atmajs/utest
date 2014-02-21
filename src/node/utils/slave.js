var slave_start;

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
				
				
				var url = 'http://%1:%2/utest/'.format(HOST, PORT);
				
				require('openurl').open(url, callback);
			}, 0);
		});
		
	};
	
	
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