var slave_start;

(function(){
	
	var PORT = 5777,
		HOST = '127.0.0.1'
		;
	
	slave_start = function(callback){
		
		logger.log('<start> atma.toolkit server');
		app.runAction('shell', {
			command: {
				command: 'atma server',
				detached: true
			}
		}, function(error){
			
			if (error) 
				return callback('<not possible to start an Atma.js server');
			
			ensurePortIsBusy(function(error){
				
				if (error) 
					return callback(error);
				
				
				require('openurl')
					.open(String.format('http://%1:%2/utest/', HOST, PORT), function(){
						
						logger.log('>>>'.green.bold);
						setTimeout(function(){
							logger.log('>>>'.cyan.bold);
							callback();
						}, 1000);
					});
				
				
				
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