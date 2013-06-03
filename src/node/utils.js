function cfg_prepair(config) {
		
	var base = config.base;
	if (base) {
		base = new net.URI(net.URI.combine(base, '/'));
		if (base.isRelative()){
			base = io.env.currentDir.combine(base);
		}
	}else{
		base = io.env.currentDir;
	}
	
	config.base = net.URI.combine(base.toDir(), '/');
	config.nodeScripts = [];
	config.domScripts = [];
	
	
	var script = config.script || (config.args && config.args[0]);
	if (script) {
		if (/\.[\w]+$/.test(script) === false) {
			script += '.test';
		}
		
		var uri = new net.URI(base).combine(script),
			file = new io.File(uri);
		if (file.exists() === false) {
			
			if (/\/?test.?\//.test(script) === false) {
				script = net.URI.combine('test/', script);
				file.uri = new net.URI(base).combine(script);
				
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
				if (new io.File(new net.URI(base).combine(script)).exists()) {
					(config.env || (config.env = [])).push(script);
				}	
			}
			
			
		}else{
			console.warn('Defined script not exists - ', config.script || config.args[0]);
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
		path = net.URI.combine(config.base, /test.?[\\\/]?$/.test(config.base) ? 'config.js' : 'test/config.js');
	}
	
	var file = new io.File(path);
	
	if (file.exists() === false) {
		return;
	}
	
	cfg = require(file.uri.toLocalFile());
		
	if (Array.isArray(cfg.env)) {
		var array = (baseConfig.env || []).concat(cfg.env);
		
		baseConfig.env = ruqq.arr.distinct(array);
	}

	if (arr_isEmpty(baseConfig.scripts) && cfg.tests) {
		
		var tests = cfg.tests,
			base = baseConfig.base,
			nodeScripts = baseConfig.nodeScripts,
			domScripts = baseConfig.domScripts,
			executor = baseConfig.exec;
			
		cfg_addScript(tests, base, nodeScripts, domScripts, executor);
	}
	
	baseConfig.suites = cfg_parseSuites(cfg.suites, baseConfig.base);
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
	
	
	base = new net.URI(base);
	ruqq.arr.each(resources, function(url){
		
		var uri = new net.URI(url);
		if (uri.isRelative()) {
			uri = base.combine(uri);
		}
		var file = new io.File(uri);
		
		if (file.exists()) {
			io.File.watcher.watch(file, function(){
				console.log(' - file changed - ', file.uri.file);
				callback();
			});
		}
	});
}