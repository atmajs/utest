var RunnerNode = (function() {

	function resource_clear(resource) {
		
		var bin = include.getResources();
		
		
		for (var type in bin) {
			for(var key in bin[type]){
				if (bin[type][key] === resource){
					delete bin[type][key];
					break;
				}
			}
		}
		
		if (resource.includes) {
			ruqq.arr.each(resource.includes, function(data){
				resource_clear(data.resource);
			});
		}
	}
	
	function resource_aggrIncludes(resource, aggr) {
		if (resource.url && aggr.indexOf(resource.url) === -1) {
			aggr.push(resource.url);
		}
		if (resource.includes) {
			ruqq.arr.each(resource.includes, function(data){
				resource_aggrIncludes(data.resource, aggr);
			});
		}
	}
	
	function suite_loadEnv(runner, suite, callback) {
		var base = suite.base,
			env = suite.env;
		
		if (env == null) {
			callback();
			return;
		}
		
		if (typeof env === 'string') 
			env = [ env ];
		
		
		if (Array.isArray(env) === false) {
			logger.warn('"env" property should be an array of strings', env);
			callback();
			return;
		}
		
		var resource = include
			.instance(io.env.currentDir.toDir());
		
		base = new net.Uri(base);
		ruqq.arr.each(env, function(x){
			var	parts = x.split('::'),
				src = parts[0],
				alias = parts[1],
				uri = base.combine(src[0] === '/' ? src.substring(1) : src)
				;
			if (io.File.exists(uri) === false) {
				logger.warn('Resource from Env - 404 -', x);
				return;
			}
			
			var path = uri.toString();
			if (alias) 
				path += '::' + alias;
			
			resource.inject(path);
		});
		
		resource.done(function(resp){
			
			setTimeout(function(){
				var key, lib;
				for(key in resp) {
					lib = resp[key];
					
					if (lib == null) {
						
						if (global[key] == null) {
							logger
								.log('<utest:Environment> Loaded dependency has no exports `%s`.'.yellow.bold, key)
								.log('yellow<Should it be global variables, to bold<dismiss> this error use smth like this:>'.color)
								.log('`{ env: [ "someLib.js::globalVarName" ] }`'.bold)
								;
						}
						continue;
					}
					
					global[key] = lib;
				}
				
				callback(resp);
			});
		});
		
		runner.envResource = resource;
	}
	
	var _suites = null,
		_suite = null,
		_suiteIndex = -1,
		
		_runner = null;
		
		
	function suite_next(callback) {
		_suite = _suites[++_suiteIndex];
		
		if (_suite == null){
			
			_runner.onComplete(_runner.stats);
			return;
		}
		
		_runner.files = _suite.files;
		_runner.config = _suite;
		
		suite_loadEnv(_runner, _suite, callback);
	}

	return Class({
		Base: Runner,
		Construct: function() {
			assert.onsuccess = this.onSuccess.bind(this);
			assert.onfailure = this.onFailure.bind(this);
			
			Class.bind(this, 'singleComplete', 'runTests', 'process');
			
			_runner = this;
		},
		run: function() {
			if (status_ready !== this.status && status_blank !== this.status) {
				logger.warn('Node is busy ... ', this.status);
				return;
			}
			this.status = status_prepair;
			this.runTests();
		},
		
		
		runTests: function() {
			
			this.index = -1;
			this.status = status_testing;
			this.stats = [];
			this.clearResources();
			
			_suites = this.suites;
			_suiteIndex = -1;
			
			suite_next(this.process);
		},

		singleComplete: function() {
			this.stats.push({
				url: this.files[this.index].uri.toString(),
				total: assert.total,
				failed: assert.failed,
				timeouts: assert.timeouts,
				errors: assert.errors,
				callbacks: assert.callbacks,
			});

			this.process();
		},
		process: function() {
			if (++this.index > this.files.length - 1) {
				this.index = -1;
				suite_next(this.process);
				return;
			}
			
			assert.reset();
			TestSuite.clear();

			var that = this,
				url = this.files[this.index].uri.toString();

			
			this.notifyTest(url);

			var incl = include
				.cfg('path', _suite.base)
				.instance(url)
				.js(url)
				.done(function(resp) {
				
				process.nextTick(function() {
					TestSuite.run(that.singleComplete);
				});
			});

			this.resources.push(incl);
		},

		clearResources: function() {
			this.resources && ruqq.arr.each(this.resources, resource_clear);
			this.envResource && resource_clear(this.envResource);
			
			this.resources = [];
			this.envResource = null;
		},

		getResources: function() {
			var arr = [];
			
			this.envResource &&
				resource_aggrIncludes(this.envResource, arr);
		
			ruqq.arr.aggr(this.resources, arr, resource_aggrIncludes);
			return arr;
		}
	});

}());