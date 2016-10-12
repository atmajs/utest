var SocketListener;
(function(){
	SocketListener = Class({
		Construct: function(socket, io, port) {
			
			if (__config) {
				socket.emit('server:error', 'Server is busy');
				socket.disconnect();
				return;
			}
			
			logger.log('<Node Client Connected>'.green);
			
			this.socket = socket
				.on('disconnect', this.disconnected)
				.on('client:utest', function(configs, $cli, done) {
					client_tryTest(io, socket, configs, $cli, done, port, 0);
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
	
	// private
	
	var wait_COUNT = 10,
		wait_DURATION = 1000;
	
	var Pipe = function(socket, event) {
		var slice = Array.prototype.slice,
			args;
		return function() {
			logger(90).log('bold<green<Socket.Pipe>>'.color, event);
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
	

	function client_tryTest(io, socket, configs, $cli, done, port, retryIndex){
		__config = configs;
		
		var nsp = io.of('/utest-browser'),
			connections = nsp.connected,
			message
			;
			
		if (Object.keys(connections).length === 0) {
			
			if (retryIndex === 0 && $cli.params.workerAutostart) {
				var url = 'http://%1:%2/utest/'.format('localhost', 5777);
				var spawn = require('child_process').spawn,
					commands = {
						darwin: 'open',
						win32: 'explorer.exe',
						linux: 'xdg-open'
					};
				
				spawn(commands[process.platform], [ url ]);
			}
			
			if (++retryIndex <= wait_COUNT) {
				
				message = '> Waiting for some slaves: %1/%2'
					.format(retryIndex, wait_COUNT);
				
				socket.emit('server:log', 'warn', [message]);
				
				setTimeout(function(){
					
					client_tryTest(io, socket, configs, $cli, done, port, retryIndex);
				}, wait_DURATION);
				
				return;
			}
			
			__config = null;
			
			message = 'No Slaves Captured - navigate to http://localhost:%1/utest/'
				.format(port || 5777);
			socket.emit('server:error', message);
			socket.disconnect();
			return;
		}
		
		var clients = [];
		for(var key in connections){
			clients.push(connections[key]);
		}
		client_doTest(clients, socket, configs, done);
	}
	
	
	function client_doTest(clients, socket, config, done){
		// clean resources cache
		include.getResources().js = {};
		
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
