
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
		
		var packageBaseDir = (function(){
			var path = 'file://' + __dirname;
			var i = path.indexOf('atma-utest');
			path = path.substring(0, i) + 'atma-utest/';
			return path;
		}());
		
		
		([
			'node_modules/atma-logger/lib/browser.min.js',
			'node_modules/assertion/lib/assert.js',
			'node_modules/jquery/dist/jquery.min.js',
			'node_modules/sinon/pkg/sinon.js',
			'node_modules/maskjs/lib/mask.js',
			'node_modules/atma-class/lib/class.js',
			'node_modules/includejs/lib/include.js',
			'node_modules/domtest/lib/domtest.js',
			'lib/utest.browser.js',
		])
		.map(function(x){
			if (io.File.exists(packageBaseDir + x) == false) {
				return '/.reference/atma_toolkit/' + x;
			}
			return '/.reference/atma_toolkit/node_modules/atma-utest/' + x;
		})
		.forEach(function(x){
			add_source(scripts, x);
		});


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