var RunnerDom;
(function() {
	RunnerDom = Class({
		Static: {
			run: function(configs, socket, callback){
				
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
			getCurrentConfig: function(){
				return _configs[_configIndex];
			}
		},
		
		Construct: function(config){
			this.config = config;
			this.scripts = config.scripts;
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
			
			var resource = include.instance('/utest/');
			
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
		
		Self: {
		
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
				
				path = '/utest/' + path;
				
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
					errors: assert.errors,
					callbacks: assert.callbacks,
				});
	
				this.process();
			}
		}
	});
	
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
		
		var config = _configs[_configIndex];
		_socket.emit('browser:utest:beforestart', {
			config: config
		}, function(){
			
			_runners.push(new RunnerDom(config).run(cfg_runNext));
		});
	}
}());