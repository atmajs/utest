var RunnerClient = Class({
	Base: Runner,
	run: function(done) {
		
		
		this.status = status_connecting;
		
		var that = this,
			config = this.config,
			port = config.port || 5777
			;
			
		logger.log('>> connecting'.red.bold);
		io_connect(this.config)
		
			.fail(function(error){
				
				logger.log('>> failed'.green.bold);
				
				io_clean();
				
				if (that.starting === true) {
						
					var msg = 'Test server connection error - http://localhost:%1/utest';
					done(msg.format(port));
					return;
				}
				
				
				that.starting = true;
				logger.log('<utest:server not started> green<starting...>'.colorize)
				
				slave_start(function(error){
					
					if (error) 
						return done('Server-Slave failed: ' + error);
					
					that.run(done);
				})
				
			})
			
			.done(function(socket){
				
				logger.log('>> connected'.green.bold);
				
				that.socket = socket;
				
				
				socket
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
			
					.on('slave:assert:success', that.onSuccess.bind(that))
					;
				
				
				// RUN
				
				that.status = status_connected;
				that.run = that.runTests;
				that.run();
			});

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
		logger.warn('Server is not ready', this.status);
	}
});