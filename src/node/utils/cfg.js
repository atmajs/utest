var cfg_prepairSettings,
	cfg_loadConfig,
	cfg_hasScripts,
	cfg_getScripts,
	cfg_parseSuites,
	cfg_suiteInfoFromConfig,
	cfg_split,

	watch
	;

(function(){

	cfg_prepairSettings = function(setts, script) {

		var base = setts.base;
		if (base) {
			base = new net.Uri(net.Uri.combine(base, '/'));

			if (base[0] === '/')
				// relative to CWD
				base = base.substring(1);


			if (base.isRelative())
				base = io.env.currentDir.combine(base);

		}
		else {
			base = io.env.currentDir;
		}

		setts.base = net.Uri.combine(base.toDir(), '/');
		setts.nodeScripts = [];
		setts.domScripts = [];
		setts.env = [];


		if (script == null)
			return;

		if (script.indexOf('*') !== -1) {

			cfg_addScript(
				script,
				setts.base,
				setts.nodeScripts,
				setts.domScripts,
				(setts.browser && 'dom') || (setts.node && 'node')
			);
			return;
		}

        function resolveFileByName (path) {
            var ext = /\.[\w]+$/;
            if (ext.test(path)) {
                return resolveFileByNameWithExtension(path);
            }
            let extensions = [
                '.test',
                '.test.js',
                '.test.ts',
                '.spec.js',
                '.spec.ts',
            ];
            for (let i = 0; i < extensions.length; i++) {
                let x = resolveFileByNameWithExtension(path + extensions[i]);
                if (x) {
                    return x;
                }
            }
            return null;
        }
        function resolveFileByNameWithExtension(path) {
            if (io.File.exists(base.combine(path))) {
                return path;
            }
            var testFolder = net.Uri.combine('test/', scripts);
            if (io.File.exists(base.combine(testFolder))) {
                return testFolder;
            }
            return null;
        }

        script = resolveFileByName(script);
        if (script == null) {
            return;
        }

		cfg_addScript(
			script,
			setts.base,
			setts.nodeScripts,
			setts.domScripts,

			// if not defined, executor will be resolved from the path
			(setts.browser && 'dom') || (setts.node && 'node')
		);

        // Consider to remove: add same-name js file to env to be preloaded.
		var ext = /\.\w{1,5}$/.exec(script)
		if (ext && ext[0] === '.test') {
			script = script.replace(/\.\w{1,5}$/, '.js');

			if (io.File.exists(base.combine(script)))
				setts.env.push(script);
		}



	}; // cfg_prepair


	/**
	 * base: [String]
	 * env: [String]
	 * tests: String | [String]
	 */
	cfg_loadConfig = function(baseConfig) {

		var path = baseConfig.config;

		if (path == null) {
			path = /\/test.?[\\\/]?$/.test(baseConfig.base)
				? 'config.js'
				: 'test/config.js';

			path = net.Uri.combine(baseConfig.base, path);
		}

		var file = new io.File(path);
		if (file.exists() === false)
			return { error: '404 ' + path };


		return suite_normalize(require(file.uri.toLocalFile()));

	}

	cfg_getScripts = function(baseConfig, config) {

		if (config.tests) {
			// root object, should not have suites
			var tests = config.tests,
				base = baseConfig.base,
				nodeScripts = baseConfig.nodeScripts,
				domScripts = baseConfig.domScripts,
				executor = baseConfig.exec;

			cfg_addScript(tests, base, nodeScripts, domScripts, executor);


			baseConfig.env = config.env;
			baseConfig.$config = config.$config;
		}

		baseConfig.suites = cfg_parseSuites(config.suites, baseConfig.base);
	};

	cfg_hasScripts = function(config) {
		if (!config)
			return false;

		if (!arr_isEmpty(config.nodeScripts))
			return true;

		if (!arr_isEmpty(config.domScripts))
			return true;

		return false;
	};

	cfg_parseSuites = function(suites, base) {
		var array = [],
			key, x, config;

		for (key in suites) {
			x = suites[key];

			if (x.fork) {
				array.push(x);
				continue;
			}
			config = {
				base: x.base || base,
				exec: x.exec,
				env: x.env,
				nodeScripts: [],
				domScripts: [],
				$config: x.$config
			};

			if (x.tests == null) {
				logger.error('Suite %s has no `tests`', key);
				continue;
			}

			cfg_addScript(
				x.tests,
				config.base,
				config.nodeScripts,
				config.domScripts,
				config.exec
			);


			array.push(config);
		}
		return array;
	};

	cfg_suiteInfoFromConfig = function(setts, config) {
		setts.env = arr_distinctConcat(
			setts.env, config.env
		);
		if (config.suites == null) {
			setts.$config = config.$config;
			setts.exec = config.exec;
			recalculateExecScripts(setts);
			return;
		}

		var path = first(setts.nodeScripts) || first(setts.domScripts),
			suite = suite_getForPath(config.suites, path);
		if (suite) {
			setts.env = arr_distinctConcat(
				setts.env, suite.env
			);
			setts.$config = suite.$config;
			setts.exec = suite.exec;
			recalculateExecScripts(setts);
		}
		// private
		function first(arr){
			return arr && arr[0];
		}
		function recalculateExecScripts(config){
			var exec = config.exec,
				from, to;
			if (exec === 'dom' && config.nodeScripts.length) {
				from = 'nodeScripts';
				to = 'domScripts';
			}
			if (exec === 'node' && config.domScripts.length) {
				from = 'domScripts';
				to = 'nodeScripts';
			}
			if (from == null)
				return;

			config[to] = config[to].concat(config[from]);
			config[from].length = 0;
		}
	};


	cfg_split = function(config) {
		if (config.fork)
			return [ config ];

		// split config per executor
		var configs = [];
		if (!arr_isEmpty(config.domScripts) && !config.node) {
			configs.push({
				exec: 'browser',
				env: config.env,
				scripts: config.domScripts,
				base: config.base || config.cwd,
				$config: config.$config
			});
		}

		if (!arr_isEmpty(config.nodeScripts) && !config.browser) {
			configs.push({
				exec: 'node',
				env: config.env,
				scripts: config.nodeScripts,
				base: config.base || config.cwd,
				$config: config.$config
			});
		}

		if (config.suites) {
			config.suites.forEach(function(suite){
				configs = configs.concat(cfg_split(suite));
			});

		}

		return configs;
	}



	watch = function(base, resources, callback) {
		watch = function(){};


		base = new net.Uri(base);
		resources.forEach(function(url){

			url = url.replace(/^\/utest\//i, '');

			var uri = new net.Uri(url);
			if (uri.isRelative()) {
				uri = base.combine(uri);
			}

			var file = new io.File(uri);
			if (file.uri == null) {
				// some virtual files does not expose uri property
				return;
			}

			if (file.exists()) {
				io.watcher.watch(file.uri.toLocalFile(), function(){
					var path = file.uri.toLocalFile();
					io.File.clearCache(path);

					var sys = require('path').normalize(path);
					delete require.cache[sys];

					callback(path);
				});
			}
			else {
				var path = file.uri.toLocalFile();

				if (/\.reference\//i.test(path))
					return;

				if (/socket\.io/i.test(path))
					return;

				logger.warn('<utest: watcher> File 404 - ', path);
			}
		});
	};

	//= private

	function cfg_addScript(path, base, nodeScripts, domScripts, executor, forceAsPath) {

		if (Array.isArray(path)) {
			path.forEach(function(x){
				cfg_addScript(x, base, nodeScripts, domScripts, executor, forceAsPath);
			});
			return;
		}

		if (forceAsPath !== true && ~path.indexOf('*')) {
			// asPath here is actually to prevent recursion in case if
			// file, which is resolved by globbing, contains '*'

			var files = io
				.glob
				.readFiles(net.Uri.combine(base, path));

			if (files.length === 0) {
				logger.warn('<No files found. Base %s. Search %s', base, path);
			}

			files
				.forEach(function(file){
					path = file.uri.toRelativeString(base);

					cfg_addScript(path, base, nodeScripts, domScripts, executor, true);
				});
			return;
		}

		if (executor == null)
			executor = path_isForBrowser(path) ? 'dom' : 'node';


		if ('dom' === executor || 'browser' === executor)
			domScripts.push(path);

		if ('node' === executor)
			nodeScripts.push(path);
	}

	function path_isForNode(path) {
		return /\-node\.[\w]+$/.test(path) || /\/node\//.test(path);
	}

	function path_isForBrowser(path) {
		return /\-dom\.[\w]+$/.test(path) || /\/dom\//.test(path);
	}


	function path_matchTests(test, path){
		if (Array.isArray(test)) {
			return test.some(function(x){
				return path_matchTests(x, path);
			});
		}

		if (typeof test !== 'string')
			return false;

		if (test.indexOf('*') === -1) {
			var a = test.toLowerCase(),
				b = path.toLowerCase()
				;
			return a.indexOf(b) !== -1 || b.indexOf(a) !== -1;
		}

		return io.glob.matchPath(test, path);
	}

	function suite_getForPath(suites, path){
		var key, suite;
		for(key in suites){
			suite = suites[key];

			if (path_matchTests(suite.tests, path))
				return suite;
		}
	}
	function suite_normalize(config){
		normalize(config);

		var suites = config.suites;
		if (suites) {

			if (arr_isArray(suites)) {
				logger.warn('Use object{SUITE_NAME:CONFIG}. Normalizing the array...');
				var obj = {};
				suites.forEach(function(suite, index){
					obj[index] = suite;
				});
				suites = obj;
			}

			for(var key in suites){
				normalize(suites[key], key);
			}
		}
		// private
		function normalize(x, name){
			if (typeof x.env === 'string')
				x.env = [ x.env ];

			if (name != null)
				x.name = x.name || name;
		}
		return config;
	}

}());