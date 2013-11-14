

UTest.getSocket = function(callback){
	
	var cfg = _suite.cfgNode || _suite.cfgBrowser;
	
	io_connect(cfg)
		.done(callback)
		.reject(function(error){
			
			logger.error('<Exit> sockets could not be connected');
			
			callback();
		})
		;
};