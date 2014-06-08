(function() {
	/**
	 *	Atma.Toolkit Action entry
	 */
	var _suite,
		_configs
		;
	
	var TestSuite = global.UTest;
		
	include.exports = {
		process: function(setts, done) {
			
			io.File.disableCache();
			logger.cfg('logCaller', false);

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
			
			if (_configs.length === 0) {
				logger.log('<config>', config);
				return done('No scripts to test');
			}
			
			global.include = include.instance(setts.base);
			
			
			var $before = config.$config && config.$config.$before,
				$after = config.$config && config.$config.$after
				;
			
			_suite = new RunnerSuite(_configs, setts);
			
			cfg_runConfigurationScript($before, function(){
				_suite.run(function(exitCode){
					cfg_runConfigurationScript($after, function(){
						process.exit(exitCode);
					});
				});	
			});
		}
	};
	
	
	
	// import utils/slave.js
	// import utils/net.js
	// import utils/io.js
	// import utils/cfg.js
	// import utils/logger.js
	
	// import Runner.js
	// import RunnerClient.js
	// import RunnerNode.js
	// import RunnerFork.js
	
	// import Suite.js
	
	// import utest.extend.js
		
}());