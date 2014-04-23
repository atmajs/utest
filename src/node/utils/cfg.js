var cfg_prepairSettings,
	cfg_loadConfig,
	cfg_runConfigurationScript,
	cfg_hasScripts,
	cfg_getScripts,
	cfg_parseSuites,
	cfg_getEnv,
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
		
		
		if (/\.[\w]+$/.test(script) === false) 
			script += '.test';
		
		if (!io.File.exists(base.combine(script))) {
			
			if (/\/?test.?\//.test(script) === false) {
				script = net.Uri.combine('test/', script);
				
				if (!io.File.exists(base.combine(script))) 
					return;
			}
		}
		
		cfg_addScript(
			script,
			setts.base,
			setts.nodeScripts,
			setts.domScripts,
			
			// if not defined, executor will be resolved from the path
			(setts.browser && 'dom') || (setts.node && 'node')
		);
		
		var ext = /\.\w{1,5}$/.exec(script)
		if (ext && ext[0] === '.test') {
			script = script.replace(/\.\w{1,5}$/, '.js');
			
			if (io.File.exists(base.combine(script))) 
				setts.env.push(script);
		}
		
	
		
	}; // cfg_prepair
	
	
	cfg_runConfigurationScript = function($script, done){
		if ($script == null) 
			return done();
		
		if (typeof $script === 'function') 
			return $script(done);
		
		if (typeof $script === 'string') {
			
			include
				.js($script + '::Script')
				.done(function(resp){
					
					if (!(resp && resp.Script && resp.Script.process)) {
						logger
							.error('<configuration script>', $script)
							.error(' is not loaded or `process` function not implemented')
							;
						
						done();
					}
					resp.Script.process(done);
				});
				
			return;
		}
		
		logger.error('Invalid configuration script', $config);
		done();
	}
	
	
	/**
	 * base: [String]
	 * env: [String]
	 * tests: String | [String]
	 */
	cfg_loadConfig = function(baseConfig) {
		
		var path = baseConfig.config;
			
		if (path == null) {
			path = /test.?[\\\/]?$/.test(baseConfig.base)
				? 'config.js'
				: 'test/config.js';
				
			path = net.Uri.combine(baseConfig.base, path);
		}
		
		var file = new io.File(path);
		
		if (file.exists() === false) 
			return {};
		
		
		return require(file.uri.toLocalFile());
	}
	
	cfg_getScripts = function(baseConfig, config) {
		
		if (config.tests) {
			
			var tests = config.tests,
				base = baseConfig.base,
				nodeScripts = baseConfig.nodeScripts,
				domScripts = baseConfig.domScripts,
				executor = baseConfig.exec;
				
			cfg_addScript(tests, base, nodeScripts, domScripts, executor);
		}
		
		baseConfig.suites = cfg_parseSuites(config.suites, baseConfig.base);
	};
	
	cfg_hasScripts = function(config) {
		if (!config)
			return false;
		
		if (arr_isEmpty(config.nodeScripts) === false)
			return true;
		
		if (arr_isEmpty(config.domScripts) === false)
			return true;
		
		
		return false;
	};
	
	cfg_parseSuites = function(suites, base) {
		var array = [],
			key, x, config;
		
		for (key in suites) {
			x = suites[key];
			
			config = {
				base: x.base || base,
				exec: x.exec,
				env: x.env,
				nodeScripts: [],
				domScripts: []
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
	
	cfg_getEnv = function(setts, config) {
		
		if (typeof config.env === 'string')
			config.env = [ config.env ];
		
		if (Array.isArray(config.env)) 
			setts.env = ruqq.arr.distinct(setts.env.concat(config.env));
			
		if (!cfg_hasScripts(setts) || config.suites == null) 
			return;
		
		var path = (setts.nodeScripts && setts.nodeScripts[0]) || (setts.domScripts && setts.domScripts[0]),
			suite = suite_getForPath(config.suites, path)
			;
		
		if (suite && suite.env) {
			
			if (typeof suite.env === 'string') 
				suite.env = [ suite.env ];
			
			if (Array.isArray(suite.env)) 
				setts.env = ruqq.arr.distinct(setts.env.concat(suite.env));
		}
		
	};
	
	
	cfg_split = function(config) {
		// split config per executor
		var configs = [];
		if (!arr_isEmpty(config.domScripts) && !config.node) {
			configs.push({
				exec: 'browser',
				env: config.env,
				scripts: config.domScripts,
				base: config.base,
			});
		}
		
		if (!arr_isEmpty(config.nodeScripts) && !config.browser) {
			configs.push({
				exec: 'node',
				env: config.env,
				scripts: config.nodeScripts,
				base: config.base,
			});
		}
		
		if (config.suites) {
			
			ruqq.arr.each(config.suites, function(suite){
				configs = configs.concat(cfg_split(suite));
			});
			
		}
		
		return configs;
	}
	
	
		
	watch = function(base, resources, callback) {
		watch = function(){};
		
		
		base = new net.Uri(base);
		ruqq.arr.each(resources, function(url){
			
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
					logger.log(' - file changed - '.green, file.uri.file.bold);
					io.File.clearCache(file.uri.toLocalFile());
					callback();
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
		
		
		if ('dom' === executor)
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
	
}());