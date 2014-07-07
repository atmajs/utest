var RunnerClient = Class({
	Base: Runner,
	Construct: function(){
		this.suites.forEach(function(suite){
			
			var key, val, cfg = suite.$config;
			for(key in cfg){
				val = cfg[key];
				if (typeof val === 'function') {
					cfg[key] = val.toString();
				}
			}
		});
	},
	run: function(done) {
		
		
		this.status = status_connecting;
		
		var that = this,
			config = this.config,
			port = config.port || 5777
			;
			
		
		io_connect(this.config)
		
			.fail(function(error){
				
				io_clean();
				
				if (that.startServer === true) {
						
					var msg = 'Test server connection error - http://localhost:%1/utest';
					done(msg.format(port));
					return;
				}
				
				
				that.startServer = true;
				logger.log('<utest:server not started> bold<green<starting...>>'.color)
				
				slave_start(function(error){
					
					if (error) 
						return done('Failed to start server: ' + error);
					
					that.run(done);
				})
				
			})
			
			.done(function(socket){
				
				logger.log('<server> connected'.green.bold);
				
				that.socket = socket;
				
				
				socket
					.on('error', function(error){
						logger.error('Socket error', error);
						io_clean();
					})
					.on('server:utest:end', function(){
						that.onComplete.apply(that, arguments);
					})
					.on('server:error', function(message) {
						that.socket.disconnect();
						
						logger.error(message);
						done(1);
					})
					.on('server:log', function(type, args) {
						var fn = console[type] || console.log;
						fn.apply(console, args);
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