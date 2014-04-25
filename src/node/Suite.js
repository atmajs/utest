var RunnerSuite = Class({
	Construct: function(configs, settings) {
		
		/**
		 *	this.watch
		 *	this.base
		 */
		this.handleConfig(configs);

		this.base = settings.base;
		this.watch = settings.watch;
		
		logger(90).log('RunnerSuite:', configs, settings);
	},
	
	closeSockets: function(){
		ruqq.arr.each(this.runners, function(x){
			x.socket && x.socket.socket && x.socket.socket.disconnectSync();
		});
	},
	
	getFailed: function(){
		return ruqq.arr.aggr(this.runners, 0, function(x, aggr) {
			return aggr + x.failed;
		});
	},
	
	getResources: function(){
		return ruqq.arr.aggr(this.runners, [], function(x, aggr) {
			return aggr.concat(x.getResources());
		});
	},
	
	Self: {
		
		onComplete: function(){
			
			if (this.watch !== true) {
				
				this.closeSockets();
				
				var failed = this.getFailed();
				
				logger
					.log('')
					.log(failed === 0 ? 'Success'.green.bold : 'Failed'.red.bold);
				
				this.callback(failed);
				return;
			}
			
			closeSocketsOnExit(this);
			watch(this.base, this.getResources(), this.runTests);
			logger.log(' - watcher active'.yellow);
		},
		
		process: function(){
			var runner = this.runners[++this.index];
			
			if (runner == null) {
				this.onComplete();
				return;
			}
			runner.run(this.callback);
		},
		
		runTests: function(){
			this.index = -1;
			this.process();
		},
	},
	run: function(done){
		this.callback = done;
		this.runners = [];
		
		
		if (this.cfgBrowser) 
			this.runners.push(new RunnerClient(this.cfgBrowser));
		
		if (this.cfgNode)
			this.runners.push(new RunnerNode(this.cfgNode));
			
		this.runners.forEach(function(runner){
			runner.on('complete', this.process);
		}, this);
		
		this.runTests();
	},
	
	
	
	handleConfig: function(mix) {
		if (Array.isArray(mix)) {
			for (var i = 0, imax = mix.length; i < imax; i++) {
				this.handleSingle(mix[i]);
			}
			return;
		}
		this.handleSingle(mix);
	},
	handleSingle: function(config) {
		
		if (this.base == null && config.base) {
			this.base = config;
		}
		
		if (this.watch == null && config.watch) {
			this.watch = config.watch;
		}

		if ('browser' === config.exec || 'dom' === config.exec) {
			cfg_add(this, 'cfgBrowser', config);
			return;
		}

		cfg_add(this, 'cfgNode', config);
	}
});

function cfg_add(that, prop, value) {
	if (that[prop] == null) {
		that[prop] = value;
		return;
	}
	if (Array.isArray(that[prop])) {
		that[prop].push(value);
		return;
	}

	that[prop] = [that[prop], value];
}
function closeSocketsOnExit(suite) {
	closeSocketsOnExit = function() {};

	var readLine = require('readline');
	if (process.platform === 'win32') {
		var rl = readLine.createInterface({
			input: process.stdin,
			output: process.stdout
		});

		rl.on('SIGINT', function() {
			process.emit('SIGINT');
		});

	}

	process.on('SIGINT', function() {
		suite.closeSockets();
		process.exit();
	});

}