var SocketListener = (function(){
	
	var wait_COUNT = 10,
		wait_DURATION = 1000;
	
	var Pipe = function(socket, event) {
		var slice = Array.prototype.slice,
			args;
		return function() {
			logger(90).log('Socket.Pipe'.green.bold, event);
			args = slice.call(arguments);
			args.unshift(event);
			socket.emit.apply(socket, args);
		};
	}
	
	var Logger = Class({
		Construct: function(socket) {
	
			for (var key in console) {
				this[key] = create(key);
			}
	
			function create(key) {
				var original = console[key],
					args;
				return function() {
					args = Array.prototype.slice.call(arguments);
	
					socket.emit('server:log', key, args);
					original.apply(console, args);
				};
			}
	
		}
	});
	
	var __socket, __config;
	
	return Class({
		Construct: function(socket, io, port) {
			
			logger.log('\tNode Client Connected'.green);
			
			this.socket = socket
				.on('disconnect', this.disconnected)
				.on('client:utest', function(config, done) {
					
					client_tryTest(io, socket, config, done, port, 0);
				})
				.on('>server:utest:action', Actions.run)
				;
		},
		
		disconnected: function() {
			__config = null;
		},
		
		Static: {
			getCurrentConfig: function(){
				return __config;
			}
		}
	});

	function client_tryTest(io, socket, config, done, port, retryCount){
		var clients = io.of('/utest-browser').clients(),
			message;
		
		if (clients.length === 0) {
			
			if (++retryCount <= wait_COUNT) {
				
				message = 'Waiting for some slaves: %1/%2'
					.format(retryCount, wait_COUNT);
				
				socket.emit('server:log', 'warn', [message]);
				
				setTimeout(function(){
					
					client_tryTest(io, socket, config, done, port, retryCount);
				}, wait_DURATION);
				
				return;
			}
			
			message = 'No Slaves Captured - navigate to http://localhost:%1/utest/'
				.format(port || 5777);
				
			socket.emit('server:error', message);
			return;
		}

		client_doTest(clients, socket, config, done);
	}
	
	function client_doTest(clients, socket, config, done){
		
		var utest = new ServerUTest(clients, new Logger(socket));

		utest
			.on('slave:start', Pipe(socket, 'slave:start'))
			.on('slave:end', Pipe(socket, 'slave:end'))
			.on('slave:error', Pipe(socket, 'slave:error'))
			.on('server:utest:end', Pipe(socket, 'server:utest:end'))
			.on('browser:utest:script', Pipe(socket, 'slave:utest:script'))

			.on('browser:assert:failure', Pipe(socket, 'slave:assert:failure'))
			.on('browser:assert:success', Pipe(socket, 'slave:assert:success'))
			
		;

		__config = config;
		
		utest.run(config, done);
	}
	
}());
