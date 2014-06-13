var cfg_runConfigurationScript;

(function(){
	
	cfg_runConfigurationScript = function(type, config, done){
		var $script = config && config.$config && config.$config[type];
		if ($script == null) 
			return done();
			
		
		if (typeof $script === 'function'){
			$script(done);
			if ($script.length === 0) 
				done();
			
			return;
		}
		
		if (typeof $script === 'string') {
			
			include
				.instance(config.base || (process.cwd() + '/'))
				.js($script + '::Script')
				.done(function(resp){
					var Script = resp.Script;
					if (Script == null || Script.process == null) {
						logger
							.error('<configuration script>', $script)
							.error(' is not loaded or `process` function not implemented')
							;
						
						done();
						return;
					}
					if (Script.process.length === 0) {
						Script.process();
						done();
						return;
					}
					Script.process(done);
				});
				
			return;
		}
		
		console.error('Invalid configuration script', config);
		done();
	};
	
}());