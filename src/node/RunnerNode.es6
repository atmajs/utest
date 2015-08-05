var RunnerNode;
(function() {
	RunnerNode = Class({
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
		Self: {
			runTests: function() {

				this.index = -1;
				this.status = status_testing;
				this.stats = [];
				this.clearResources();

				_suites = this.suites;
				_suiteIndex = -1;

				suite_next(this.process);
			},
			process: function() {
				// go to next suite, otherwise process file from current one
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

		if (typeof env === 'string') {
			env = [ env ];
		}
		if (Array.isArray(env) === false) {
			logger.warn('"env" property should be an array of strings', env);
			callback();
			return;
		}
		if (env.length === 0) {
			callback();
			return;
		}

		var resource = include
				.instance(base)
				.setBase(base)
				;

		base = new net.Uri(base);
		var pckg = env
			.map(x => {
				var	[src, alias] = x.split('::'),
					uri = base.combine(src[0] === '/' ? src.substring(1) : src)
					;
				return [uri, alias]
			})
			.filter(arr => {
				var [uri] = arr;
				if (io.File.exists(uri) === false) {
					logger.warn('Resource from Environment - 404 -', uri.toLocalFile());
					return false;
				}
				return true
			})
			.map(arr => {
				var [uri, alias] = arr;
				return uri.toString() + (alias ? '::' + alias : '');
			});

		resource
			.inject(pckg)
			.done((resp) => setTimeout(() => {
				Object
					.keys(resp)
					.filter(key => key !== 'load')
					.forEach(key => {
						var lib = resp[key];
						if (lib != null) {
							global[key] = lib;
							return;
						}

						if (global[key] != null) {
							return;
						}
						var injected = eval(`typeof ${key} !== 'undefined' && ${key}`);
						if (injected) {
							global[key] = injected;
							return;
						}
						logger
							.log('<utest:Environment> Loaded dependency has no exports `%s`.'.yellow.bold, key)
							.log('yellow<Should it be global variables, to bold<dismiss> this error use smth like this:>'.color)
							.log('`{ env: [ "someLib.js::globalVarName" ] }`'.bold)
							;
					});
				callback(resp);
			}));

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
		fn_waterfall(
			function(done) {
				cfg_runConfigurationScript(
					'$after', _suites[_suiteIndex - 1], done
				);
			},
			function(done) {
				suite_loadEnv(_runner, _suite, done);
			},
			function(done){
				cfg_runConfigurationScript(
					'$before', _suite, done
				);
			},
			callback
		);
	}
}());