var RunnerSuite = Class({
	Construct: function(configs, settings) {
		
		/**
		 *	this.watch
		 *	this.base
		 */
		this.handleConfig(configs);

		this.base = settings.base;
		this.watch = settings.watch;
		
		Log('RunnerSuite:', JSON.stringify(configs), settings, 90);
		
		Class.bind(this, 'onComplete', 'process', 'runTests');
	},
	
	onComplete: function(){
		
		if (this.watch !== true) {
			
			this.closeSockets();
			process.exit(this.getFailed());
			
		}
		
		watch(this.base, this.getResources(), this.runTests);
		console.log(' - watcher active'.yellow);
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
	
	process: function(){
		var runner = this.runners[++this.index];
		
		if (runner == null) {
			this.onComplete();
			return;
		}
		runner.run(this.callback);
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
	
	runTests: function(){
		this.index = -1;
		this.process();
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
			console.log('WWWWAAATCH')
		}

		if (config.exec === 'browser') {
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