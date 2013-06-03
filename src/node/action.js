(function() {
	
	var TestSuite = global.UTest;
		
	include.exports = {
		process: function(setts, done) {

			cfg_prepair(setts);
			
			if (arr_isEmpty(setts.nodeScripts) && arr_isEmpty(setts.domScripts)) {
				cfg_loadConfig(setts);
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