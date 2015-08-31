module.exports = {
	
	suites: {
		'generic': {
			exec: 'node',
			tests: 'test/*.test'
		},
		
		'server': {
			exec: 'dom',
			tests: 'test/server/*.test'
		},
		'dom': {
			exec: 'dom',
			tests: 'test/dom/**.test'
		},
		'benchmark': {
			exec: 'node',
			tests: 'test/benchmark/**.test'
		}
	}
};