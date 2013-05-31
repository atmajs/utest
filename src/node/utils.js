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
	config.scripts = [];
	
	
	var script = config.script || (config.args && config.args[0]);
	if (script) {
		if (/\.[\w]+$/.test(script) === false) {
			script += '.test';
		}
		
		var uri = new net.URI(base).combine(script),
			file = new io.File(uri);
		if (file.exists() == false) {
			
			if (/\/?test.?\//.test(script) === false) {
				script = net.URI.combine('test/', script);
				file.uri = new net.URI(base).combine(script);
				
				if (file.exists() == false) {
					script = null;
				} 
			}
			
		}
		
		if (script == null) {
			console.warn('Defined script not exists - ', config.script || config.args[0]);
		}else {
			config.scripts.push(script);
		}
	
	}
	
}


/**
 * env: [String]
 * test: String | [String]
 */
function cfg_loadConfig(config) {
	var path = config.config;
	if (path == null) {
		path = net.URI.combine(config.base, /test.?[\\\/]?$/.test(config.base) ? 'config.js' : 'test/config.js');
	}
	
	var file = new io.File(path);
	
	if (file.exists() === false) {
		return;
	}
	
	cfg = require(file.uri.toLocalFile());
		
	if (Array.isArray(cfg.env)) {
		config.env = cfg.env;
	}

	if (config.scripts.length === 0 && cfg.tests) {
		cfg_appendScript(cfg.tests, config);
	}
}

function cfg_appendScript(path, config, asPath) {
	var scripts = config.scripts,
		base = config.base,
		isBrowser = !!config.browser;
		
	if (Array.isArray(path)) {
		ruqq.arr.each(path, function(x){
			cfg_appendScript(x, config);
		});
		return;
	}
	
	if (asPath !== true && ~path.indexOf('*')) {
		// asPath here is actually to prevent recursion in case if
		// file, which is resolved by globbing, contains '*'
		new io.Directory(config.base).readFiles(path).files.forEach(function(file){
			path = file.uri.toRelativeString(config.base);
			
			cfg_appendScript(path, config, true);
		});
		return;
	}
	
	if (isBrowser && path_isForNode(path)) 
		return;
	
	
	if (isBrowser === false && path_isForBrowser(path)) 
		return;
	
	scripts.push(path);
}

function path_isForNode(path) {
	return /\-node\.[\w]+$/.test(path) || /\/node\//.test(path);
}
function path_isForBrowser(path) {
	return /\-dom\.[\w]+$/.test(path) || /\/dom\//.test(path);
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
				console.log(' - file change - ', file.uri.file);
				callback();
			});
		}
	});
}