var io_connect = (function(){
	
	var dfr;
	
	
	return function(config){
		
		if (dfr) 
			return dfr;
		
		dfr = new Class.Deferred();
		
		//@ HACKY - io client workaround
		var _io = global.io;
		delete global.io;
		
		var port = config.port || 5777,
			
			io_client = require('socket.io-client'),
			io_url = 'http://localhost:%1/node'.format(port),
			
			socket = io_client.connect(io_url, {
				'connect timeout': 2000
			});
			
		global.io = _io;
		
		socket
			.on('connect', function() {
				dfr.resolve(socket)
			})
	
			.on('error', function(error) {
				dfr.reject(error);
			})
			
		
		return dfr;
	};
}());