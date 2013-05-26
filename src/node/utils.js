function prepairConfig(config) {
		
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
	
		
	if (config.args && !config.script) {
		config.script = config.args[0];
	}
	
	if (config.scripts == null && config.script) {
		config.scripts = [config.script];
	}
	
	
	return config;
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