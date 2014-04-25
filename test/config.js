module.exports = {
	
	suites: {
		'generic': {
			exec: 'node',
			tests: 'test/*.test'
		},
		
		'server': {
			exec: 'dom',
			tests: 'test/server/*.test'
		}
	}
};