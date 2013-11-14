
var BrowserTunnel = Class({
	Base: Class.EventEmitter,
	Construct: function(socket, logger) {
		var that = this;

		this.socket = socket
			.on('browser:log', function(type, args) {

				(logger[type] || logger.log).apply(logger, args);
	
			})
	
			.on('browser:utest:start', function(stats) {
				that.trigger('start', stats);
			})
	
			.on('browser:utest:end', function(result) {
				that.result = result;
				that.trigger('end', this, result);
			})
			.on('>server:utest:action', function(){
				var args = Array
					.prototype
					.slice
					.call(arguments)
					;
				args
					.unshift('action')
					;
				
				that.trigger.apply(that, args);
			})
			.on('browser:utest:script', this.pipe('browser:utest:script'))
			.on('browser:assert:success', this.pipe('browser:assert:success'))
			.on('browser:assert:failure', this.pipe('browser:assert:failure'))
			;
		
	},

	run: function(config) {

		var socket = this.socket,
			that = this;

		socket.emit('server:utest:handshake', function(stats) {
			logger(90).log('UTest.tunnel - handshake - '.cyan.bold, stats);

			if (stats.ready === 1) {
				socket.emit('server:utest', config);
				return;
			}
			that.result = {
				error: 'Slave is busy'
			};

			that.trigger('error', that, {
				message: 'Slave is busy'
			});
		});


	},

	dispose: function() {
		this.socket.removeAllListeners();
		this.socket = null;
	}
});
