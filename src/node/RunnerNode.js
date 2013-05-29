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
	


	return Class({
		Base: Runner,
		Construct: function() {
			Class.bind(this, 'singleComplete', 'runTests');
		},
		run: function(done) {
			if (status_ready !== this.status && status_blank !== this.status) {
				console.warn('Node is busy ... ', this.status);
				return;
			}
			this.status = status_prepair;
			
			var that = this;
			
			this.loadEnv(this.config.base, this.config.env, function(env){
				Log('Environment Loaded', env && Object.keys(env), 90);
				that.runTests();
			});
			
		},
		
		loadEnv: function(base, env, callback){
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
				var file = new io.File(base.combine(x));
				if (file.exists() === false) {
					console.log('Resource from Env - 404 -', x);
					return;
				}
				
				resource.inject(file.uri.toString());
			});
			
			
			resource.done(function(resp){
				setTimeout(function(){
					callback(resp);
				});
			});
		},
		
		runTests: function() {
			console.log('>> runTests');
			
			console.log('>> continue');

			this.index = -1;
			this.status = status_testing;
			this.stats = [];
			this.clearResources();
			this.process();
			
			//
			//-global.UTest = TestSuite;
		},

		singleComplete: function() {
			this.stats.push({
				url: this.files[this.index].uri.toString(),
				total: assert.total,
				failed: assert.failed,
				timeouts: assert.timeouts,
				callbacks: assert.callbacks,
			});

			//var message = '\nTotal: %1. Failed: %2'.format(assert.total, assert.failed);
			//console.log(message[assert.failed ? 'red' : 'green'].bold);
			console.log('\n');

			this.process();
		},
		process: function() {
			if (++this.index > this.files.length - 1) {
				this.onComplete(this.stats);
				return;
			}
			
			assert.reset();
			TestSuite.clear();

			var that = this,
				url = this.files[this.index].uri.toString();

			
			console.log('\nTest:' + (url.length > 23 ? '...' + url.substr(-20) : url).bold);

			var incl = include
				.cfg('path', config.base)
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