var RunnerClient = Class({
	Base: Runner,
	run: function(done) {
		
		this.run = this.runTests;
		
		var that = this,
			confit = this.config,
			port = config.port || 5777,
			util = require('util'),
			io_client = require('socket.io-client'),
			io_url = 'http://localhost:%1/node'.format(port),
			socket = io_client.connect(io_url, {
				'connect timeout': 2000
			});

		this.socket = socket;
		this.status = status_connecting;

		socket
			.on('connect', function() {
			Log('utest - connected to server - ', 90);

			that.status = status_connected;
			that.runTests();
		})

		.on('error', function() {
			done(
				'Test server connection error - http://localhost:%1/test'
				.format(port));
		})

		.on('server:utest:end', this.onComplete.bind(this))

		.on('server:error', function(message) {
			done(message);
		})

		.on('server:log', function(type, args) {
			var fn = console[type] || console.log;

			fn.apply(console, args);
		})

		.on('slave:start', function(stats) {
			var message = '\n#{browser.name} #{browser.version}'.bold;
			console.log(message.format(stats.userAgent));
			console.log('');
		})
			.on('slave:end', function(stats) {
			console.log('\nSlave completed'[stats.failed ? 'red' : 'green']);
		})

		.on('slave:error', function(error) {
			console.error(error);
		})

		.on('slave:assert:failure', function(args) {
			
			var stack = args[args.length - 1];
			if (stack && stack.stack) {
				args.splice(args.length - 1);
				
				if (stack.file) {
					var uri = new net.URI(that.config.base).combine(stack.file),
						source = new io.File(uri).read().split(/[\r\n]+/g),
						line = source[stack.line],
						code = line && line.trim();
					
					console.log('\n');
					console.log('bold{cyan{ >> }} bold{red{ %1 }}'.colorize().format(code));
					
				}
				stack = stack.stack;
				args.push('\n');
				args.push(stack);
			}
			
			console.error.apply(console, args);

		})

		.on('slave:assert:success', function() {
			util.print(' |'.green.bold);
		});
	},

	runTests: function() {
		console.log('.. running tests');
		switch (this.status) {
			case status_blank:
			case status_connected:
			case status_ready:
				this.status = status_testing;
				this.socket.emit('client:utest', this.config);
				return;
		}
		console.warn('Server is not ready');
	}
});