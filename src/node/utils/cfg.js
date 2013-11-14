function cfg_prepair(config, arg) {
		
	var base = config.base;
	if (base) {
		base = new net.Uri(net.Uri.combine(base, '/'));
		if (base.isRelative()){
			base = io.env.currentDir.combine(base);
		}
	}else{
		base = io.env.currentDir;
	}
	
	config.base = net.Uri.combine(base.toDir(), '/');
	config.nodeScripts = [];
	config.domScripts = [];
	
	
	var script = arg;
	if (script) {
		if (/\.[\w]+$/.test(script) === false) {
			script += '.test';
		}
		
		var uri = new net.Uri(base).combine(script),
			file = new io.File(uri);
		if (file.exists() === false) {
			
			if (/\/?test.?\//.test(script) === false) {
				script = net.Uri.combine('test/', script);
				file.uri = new net.Uri(base).combine(script);
				
				if (file.exists() === false) 
					script = null;
				
			}else{
				script = null;
			}
			
		}
		
		if (script) {
			
			var nodeScripts = config.nodeScripts,
				domScripts = config.domScripts,
				executor = null;
				
			if (config.browser)
				executor = 'dom';
			
			if (config.node)
				executor = 'node';
				
			
			cfg_addScript(script, config.base, nodeScripts, domScripts, executor);
			
			var ext = /\.\w{1,5}$/.exec(script)
			if (ext && ext[0] === '.test') {
				script = script.replace(/\.\w{1,5}$/, '.js');
				if (new io.File(new net.Uri(base).combine(script)).exists()) {
					(config.env || (config.env = [])).push(script);
				}	
			}
			
			
		}
	}
	
}


/**
 * base: [String]
 * env: [String]
 * tests: String | [String]
 */
function cfg_loadConfig(baseConfig) {
	
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

function cfg_getEnv(baseConfig, config) {
	
	if (typeof config.env === 'string')
		config.env = [config.env];
	
	if (baseConfig.env == null)
		baseConfig.env = [];
	
	if (Array.isArray(config.env)) 
		baseConfig.env = ruqq.arr.distinct(baseConfig.env.concat(config.env));
}

function cfg_getScripts(baseConfig, config) {
	
	if (config.tests) {
		
		var tests = config.tests,
			base = baseConfig.base,
			nodeScripts = baseConfig.nodeScripts,
			domScripts = baseConfig.domScripts,
			executor = baseConfig.exec;
			
		cfg_addScript(tests, base, nodeScripts, domScripts, executor);
	}
	
	baseConfig.suites = cfg_parseSuites(config.suites, baseConfig.base);
}

function cfg_hasScripts(config) {
	if (!config)
		return false;
	
	if (arr_isEmpty(config.nodeScripts) === false)
		return true;
	
	if (arr_isEmpty(config.domScripts) === false)
		return true;
	
	
	return false;
}

function cfg_parseSuites(suites, base) {
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
		
		
		cfg_addScript(x.tests, config.base, config.nodeScripts, config.domScripts, config.exec);
		
		
		array.push(config);
	}
	return array;
}

function cfg_addScript(path, base, nodeScripts, domScripts, executor, forceAsPath) {
	
	if (Array.isArray(path)) {
		ruqq.arr.each(path, function(x){
			cfg_addScript(x, base, nodeScripts, domScripts, executor, forceAsPath);
		});
		return;
	}
	
	if (forceAsPath !== true && ~path.indexOf('*')) {
		// asPath here is actually to prevent recursion in case if
		// file, which is resolved by globbing, contains '*'
		new io.Directory(base).readFiles(path).files.forEach(function(file){
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


function cfg_split(config) {
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


	
function watch(base, resources, callback) {
	watch = function(){};
	
	
	base = new net.Uri(base);
	ruqq.arr.each(resources, function(url){
		
		var uri = new net.Uri(url);
		if (uri.isRelative()) {
			uri = base.combine(uri);
		}
		var file = new io.File(uri);
		
		if (file.exists()) {
			io.watcher.watch(file.uri.toLocalFile(), function(){
				logger.log(' - file changed - '.green, file.uri.file.bold);
				io.File.clearCache(file.uri.toLocalFile());
				callback();
			});
		}
	});
}