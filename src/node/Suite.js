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

	forks: null,
	cfgNode: null,
	cfgBrowser: null,

	closeSockets: function(){
		this.runners.forEach(function(x){
			x.socket && x.socket && x.socket.disconnect();
		});
	},

	getFailed: function(){
		return this.runners.reduce(function(aggr, x) {
			return aggr + (x.failed || 0);
		}, 0);
	},

	getResources: function(){
		return this.runners.reduce(function(aggr, x) {
			return aggr.concat(x.getResources());
		}, []);
	},

	Self: {

		onComplete: function(){

			if (this.watch !== true) {

				this.closeSockets();

				var failed = this.getFailed();

				logger
					.log('')
					.log(failed === 0 ? 'bold<green<Success>>'.color : 'bold<red<Failed>>'.color);

				this.callback(failed);
				return;
			}

			closeSocketsOnExit(this);

			var self = this;
			watch(this.base, this.getResources(), function(path){

				log_clearStd();

				var date = new Date;
				logger.log((date.getHours()
					+ ':'
					+ date.getMinutes()
					+ ':'
					+ date.getSeconds()).bg_cyan
					+ ' modified ' + ('bold<%1>'.format(path).color));
				self.runTests();
			});
			logger.log(' - watcher active.'.yellow);
		},

		process: function(){
			var runner = this.runners[++this.index];

			if (runner == null) {
				this.onComplete();
				return;
			}
			runner.run(this.process);
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

		if (this.forks) {
			var runners = this.forks.map(function(cfg) {
				return new RunnerFork(cfg);
			});
			this.runners = this.runners.concat(runners);
		}

		this.runners.forEach(function(runner){
			runner.on('complete', this.process);
		}, this);

		if (this.watch)
			log_clearStd();

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

		if (this.base == null && config.base)
			this.base = config.base;

		if (this.watch == null && config.watch)
			this.watch = config.watch;

		if ('browser' === config.exec || 'dom' === config.exec) {
			cfg_add(this, 'cfgBrowser', config);
			return;
		}

		if (typeof config.fork === 'string') {
			if (this.forks == null)
				this.forks = [];

			this.forks.push(config);
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
		rl.write('\n');
		global.rl = rl;
	}

	process.on('SIGINT', function() {
		suite.closeSockets();
		process.exit(0);
	});

}