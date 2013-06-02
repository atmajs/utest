(function() {
	
	var TestSuite = global.UTest;
		
	include.exports = {
		process: function(config, done) {

			cfg_prepair(config);
			
			if (arr_isEmpty(config.nodeScripts) && arr_isEmpty(config.domScripts)) {
				cfg_loadConfig(config);
			}
			
			
			
			var configs = cfg_split(config);
			
			if (configs.length === 0) {
				done('No scripts to test');
				return;
			}
			
			
			new RunnerSuite(configs).run(done);
			
			//var Runner = config.browser ? RunnerClient : RunnerNode;
			//
			//new Runner(config).run(done);
		}
	};
	
	

	
	// import utils.js
	// import Runner.js
	// import RunnerClient.js
	// import RunnerNode.js
	
	// import Suite.js
	
		
		
}());