var RunnerClient = Class({
	Base: Runner,
	Construct: function(){
		
	},
	run: function(done) {
		
		this.run = this.runTests;
		
		//@ HACKY - io client workaround
		var _io = global.io;
		delete global.io;
		
		var that = this,
			config = this.config,
			port = config.port || 5777,
			util = require('util'),
			io_client = require('socket.io-client'),
			io_url = 'http://localhost:%1/node'.format(port),
			socket = io_client.connect(io_url, {
				'connect timeout': 2000
			});

		global.io = _io;
			
		this.socket = socket;
		this.status = status_connecting;

		socket
			.on('connect', function() {
			logger(90).log('utest - connected to server - ');

			that.status = status_connected;
			that.runTests();
		})

		.on('error', function() {
			var msg = 'Test server connection error - http://localhost:%1/utest';
			done(msg.format(port));
		})

		.on('server:utest:end', function(){
			that.onComplete.apply(that, arguments);
		})

		.on('server:error', function(message) {
			that.socket.socket.disconnectSync();
			done(message);
		})

		.on('server:log', function(type, args) {
			var fn = logger[type] || logger.log;
			fn.apply(logger, args);
		})

		.on('slave:start', function(stats) {
			var message = '#{browser.name} #{browser.version}'.bold;
			logger
				.log(message.format(stats.userAgent))
				.log('');
		})
		.on('slave:end', function(stats) {
			logger.log('Slave completed'[stats.failed ? 'red' : 'green']);
		})

		.on('slave:error', function(error) {
			logger.error(error);
		})
		
		.on('slave:utest:script', function(info){
			that.notifyTest(info.script);
		})

		.on('slave:assert:failure', function(args) {
			var data = args[0];
			
			that.onFailure(data);
			
		})

		.on('slave:assert:success', that.onSuccess.bind(that));
	},

	runTests: function() {
		logger.log(' -  running tests  -  ', Date.format(new Date(), 'HH:mm:ss'));
		
		switch (this.status) {
			case status_blank:
			case status_connected:
			case status_ready:
				this.status = status_testing;
				this.socket.emit('client:utest', this.suites);
				return;
		}
		logger.warn('Server is not ready');
	}
});