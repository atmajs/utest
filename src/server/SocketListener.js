var SocketListener = (function(){
	
	
	var Pipe = function(socket, event) {
		var slice = Array.prototype.slice,
			args;
		return function() {
			Log('Socket.Pipe', event, 95);
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
			
			console.log('\tNode Client Connected'.green);
			
			this.socket = socket
	
			.on('disconnect', this.disconnected)
			.on('client:utest', function(config, done) {
	
				var clients = io.of('/utest-browser').clients();
	
				if (clients.length === 0) {
					var message = 'No Slaves Captured - navigate to http://localhost:%1/utest/'.format(port || 5777)
					socket.emit('server:error', message);
					return;
				}
	
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
	
			});
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

	
}());
