(function() {
	
	var _suite;
	
	var TestSuite = global.UTest;
		
	include.exports = {
		process: function(setts, done) {

			var arg = setts.script || app.config.cli.args[1],
				config;
		
			cfg_prepair(setts, arg);
			
			config = cfg_loadConfig(setts);
			
			cfg_getEnv(setts, config);
			
			if (cfg_hasScripts(setts) === false) {
				cfg_getScripts(setts, config);
				
				
				if (arg && !(config.suites && config.suites[arg])) 
					return done('Argument is not resolved as script, nor as suite name: ' + arg);
				
				
				if (arg) {
					var suites = config.suites;
					for (var key in suites) {
						if (key !== arg)
							delete suites[key];
					}
					
					setts.suites = cfg_parseSuites(suites, setts.base);
				}
			}
			
			
			var configs = cfg_split(setts);
			
			if (configs.length === 0) 
				return done('No scripts to test');
			
			
			return _suite = new RunnerSuite(configs, setts).run(function(){
				logger.log('>> done', arguments);
				done.apply(this, arguments);
			});
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