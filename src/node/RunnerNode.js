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
	
	function suite_loadEnv(suite, callback) {
		var base = suite.base,
			env = suite.env;
			
		if (env == null) {
			callback();
			return;
		}
		if (Array.isArray(env) === false) {
			console.warn('"env" property should be an array of strings', env);
			callback();
			return;
		}
		
		var resource = include.instance();
		
		base = new net.URI(base);
		ruqq.arr.each(env, function(x){
			var	parts = x.split('::'),
				src = parts[0],
				alias = parts[1],
				file = new io.File(base.combine(src));
			if (file.exists() === false) {
				console.log('Resource from Env - 404 -', x);
				return;
			}
			
			var path = file.uri.toString();
			if (alias) {
				path += '::' + alias;
			}
			
			resource.inject(path);
		});
		
		
		resource.done(function(resp){
			setTimeout(function(){
				for (var lib in resp) {
					global[lib] = resp[lib];
				}
				
				callback(resp);
			});
		});
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
		
		suite_loadEnv(_suite, callback);
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
				console.warn('Node is busy ... ', this.status);
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
			this.resources = [];
		},

		getResources: function() {
			return ruqq.arr.aggr(this.resources, [], resource_aggrIncludes);
		}
	});

}());