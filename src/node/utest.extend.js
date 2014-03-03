

UTest.getSocket = function(callback){
	
	var cfg = _suite.cfgNode || _suite.cfgBrowser;
	
	io_connect(cfg)
		.done(function(socket){
			
			callback(socket, cfg);
		})
		.fail(function(error){
			
			logger
				.error('<Exit> server connection is not established.', error)
				.log('Executed `atma server`?'.bold)
				;
		});
};

UTest.getConfig = Runner.getCurrentConfigs;