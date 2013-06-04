(function() {
	
	var TestSuite = global.UTest;
		
	include.exports = {
		process: function(setts, done) {

			var arg = setts.script || (setts.args && setts.args[0]),
				config;
		
			cfg_prepair(setts, arg);
			
			config = cfg_loadConfig(setts);
			
			cfg_getEnv(setts, config);
			
			if (cfg_hasScripts(setts) === false) {
				cfg_getScripts(setts, config);
				
				if (arg) {
					setts.suites = setts.suites && setts.suites[arg];
					
					if (!setts.suites) {
						done('Argument is not resolved as script, nor as suite name: ' + arg);
						return;
					}
					setts.nodeScripts = [];
					setts.domScripts = [];
				}
					
			}
			
			
			
			
			var configs = cfg_split(setts);
			
			if (configs.length === 0) {
				done('No scripts to test');
				return;
			}
			
			new RunnerSuite(configs, setts).run(done);
			
		}
	};
	
	

	
	// import utils.js
	// import Runner.js
	// import RunnerClient.js
	// import RunnerNode.js
	
	// import Suite.js
	
		
		
}());