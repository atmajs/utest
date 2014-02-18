
include
	.load('utest.mask')
	.done(function(resp){
		
		include.exports = atma.server.HttpPage({
			template: resp.load.utest,	
			master: '',
			
			onRenderStart: function(){
				
				this.model = {
					scripts: scripts_resolve()
				};
			}
		});

	})

var scripts_resolve;
(function() {
	
	var appConfig = app.config;

	scripts_resolve = function(scripts) {
		if (scripts == null) 
			scripts = [];
		
		add_source(scripts, '/socket.io/socket.io.js');
		add_source(scripts, '/.reference/atma_toolkit/node_modules/atma-utest/lib/utest.browser.js');

		var routes = appConfig.defaultRoutes;
		if (routes) 
			add_script(scripts, 'include.routes(' + JSON.stringify(routes, null, 4) + ')');
		

		add_script(scripts, 'include.cfg({ path: "/utest/" })');
		return scripts;
	}


	function add_source(collection, path) {
		collection.push({
			path: path
		});
	}

	function add_script(collection, script) {
		collection.push({
			script: script
		});
	}
	
}());