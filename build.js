/**
 *	IncludeJSBuild
 *
 *	``` $ includejs build.js ```
 **/

/**
 *
 *	```/lib/utest.browser.js```
 *	Browser testing suite - is loaded with ijs server controller
 **/


/**
 *
 *	```/lib/utest.node.js```
 *  - nodejs testing - direct action "test"
 *	- nodejs testing - client for browser
 **/

/**
 *
 *	```/lib/env/**```
 *  - server for utest browser slave
 **/


global.config = {
	'settings': {
		io: {
			extensions: {
				js: ['condcomments:read', 'importer:read']
			}
		}
	},
	'import': {
		files: 'builds/**',
		output: 'lib/'
	},
	'copy': {
		files: {
			'src/env/HttpTestHandler.js': 'lib/env/HttpTestHandler.js',
			'src/env/template.mask': 'lib/env/template.mask'
		}		
	},
	'install':{
		action: 'custom',
		script: 'install'
	},
	'infinite': {
		action: 'watch',
		files: 'src/**',
		actions: ['import', 'copy', 'install']
	},
	
	'defaults': ['import', 'copy', 'install']
};
