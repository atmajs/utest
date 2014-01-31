(function() {
	
	var _suite,
		_configs
		;
	
	var TestSuite = global.UTest;
		
	include.exports = {
		process: function(setts, done) {

			var arg = setts.script || app.config.$cli.args[1],
				config;
		
			cfg_prepairSettings(setts, arg);
			
			config = cfg_loadConfig(setts);
				
			cfg_getEnv(setts, config);
			
			if (cfg_hasScripts(setts) === false) {
				cfg_getScripts(setts, config);
				
				
				if (arg && !(config.suites && config.suites[arg])) 
					return done('Argument is not resolved as a script, nor as a suite name: ' + arg);
				
				
				if (arg) {
					var suites = config.suites;
					for (var key in suites) {
						if (key !== arg)
							delete suites[key];
					}
					
					setts.suites = cfg_parseSuites(suites, setts.base);
				}
			}
			
			
			_configs = cfg_split(setts);
			
			if (_configs.length === 0) 
				return done('No scripts to test');
			
			
			var $before = config.$config && config.$config.$before,
				$after = config.$config && config.$config.$after
				;
			
			
			
			_suite = new RunnerSuite(_configs, setts);
			
			cfg_runConfigurationScript($before, function(){
				
				_suite.run(function(){
					logger.log('>> completed'.cyan.bold, arguments);
					
					cfg_runConfigurationScript($after, function(){
						done.apply(this, arguments);	
					});
				});	
			})
			
		
			
		}
	};
	
	

	// import utils/io.js
	// import utils/cfg.js
	// import utils/logger.js
	
	// import Runner.js
	// import RunnerClient.js
	// import RunnerNode.js
	
	// import Suite.js
	
	// import utest.extend.js
		
}());