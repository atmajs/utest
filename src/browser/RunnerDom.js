var RunnerDom = (function() {
	
	var _configs,
		_configIndex,
		_socket,
		_stats,
		_onComplete,
		_runners;
	
	
	function cfg_runNext() {
		if (++_configIndex > _configs.length - 1) {
			_onComplete(_stats);
			return;
		}
		
		var runner = new RunnerDom(_configs[_configIndex]).run(cfg_runNext);
		_runners.push(runner);
	}
	
	return Class({
		Static: {
			run: function(configs, socket, callback){
				state = state_busy;
			
				_runners = [];
				_socket = socket;
				_configs = arr_isArray(configs) ? configs : [configs];
				_onComplete = callback;
				_stats = {};
				_configIndex = _scriptIndex = -1;
			
				_socket.emit('browser:utest:start', {
					userAgent: window.browserInfo
				});
			
				assert.reset();		
				cfg_runNext();
			},
			getResources: function(){
				var resources = [];
				
				for (var i = 0, x, imax = _runners.length; i < imax; i++){
					x = _runners[i];
					
					if (x.resources) {
						resources = resources.concat(x.resources);
					}
				}
				
				return resources;
			},
			getCurrentConfigs: function(){
				return _configs;
			}
		},
		
		// Class
		Construct: function(config){
			this.config = config;
			this.scripts = config.scripts;
			Class.bind(this, 'process', 'processSingle', 'singleComplete');
		},
		run: function(callback) {
			this.onComplete = callback;
			this.index = -1;
			this.stats = [];
			
			TestSuite.clear();
			include_clearCache();

			_socket.emit('browser:utest:suite:start', {
				url: this.config.name
			});
			
			if (!(this.scripts && this.scripts.length)) {
				console.warn('Suite has not test scripts');
				callback();
				return this;
			}
			
			this.loadEnv(this.process);
			return this;
		},
		
		loadEnv: function(callback){
			if (arr_isArray(this.config.env) === false) {
				callback();
				return;
			}
			
			if (typeof include === 'undefined') {
				script_insertMany(this.config.env, callback);
				return;
			}
			
			var resource = include.instance();
			
			ruqq.arr.each(this.config.env, function(x){
				resource.js(x);
			});
			
			resource.done(function(resp){
				setTimeout(function(){
					for (var lib in resp) {
						var exports = resp[lib];
						
						if (exports != null) {
							window[lib] = exports;
						}
					}
					
					callback(resp);
				});
			});
		},

		process: function() {

			if (++this.index > this.scripts.length - 1) {
				this.resources = script_getResources();
				this.onComplete(this);
				return;
			}
			
			var path = this.scripts[this.index];
			
			_socket.emit('browser:utest:script',{
				script: path
			});
			
			include_reset();
			TestSuite.clear();
			
			script_insert({path: path}, this.processSingle);
			
		},
		
		processSingle: function(force){
			
			var that = this;
			
			include_ready(function(){
				TestSuite.run(that.singleComplete);
			});
		},

		singleComplete: function() {
			this.stats.push({
				url: this.scripts[this.index],
				total: assert.total,
				failed: assert.failed,
				timeouts: assert.timeouts,
				callbacks: assert.callbacks,
			});

			//var message = '\nTotal: %1. Failed: %2'.format(assert.total, assert.failed);
			//console.log(message[assert.failed ? 'red' : 'green'].bold);
			//console.log('\n');

			this.process();
		},
	});

}());