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
		cfg_appendScript(cfg.tests, config.scripts, config.base);
	}
}

function cfg_appendScript(path, scripts, base) {
	if (Array.isArray(path)) {
		ruqq.arr.each(path, function(x){
			cfg_appendScript(x, scripts);
		});
		return;
	}
	
	if (~path.indexOf('*')) {
		new io.Directory(base).readFiles(path).files.forEach(function(file){
			var url = file.uri.toRelativeString(base);
			
			scripts.push(url);
		});
		return;
	}
	
	scripts.push(path);
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
			io.File.watcher.watch(file, callback);
		}
	});
}