module.exports = {

    suites: {
        'generic': {
            exec: 'node',
            tests: 'test/*.spec.ts'
        },

        'server': {
            exec: 'dom',
            tests: 'test/server/*.spec.ts'
        },
        'dom': {
            exec: 'dom',
            tests: 'test/dom/**.spec.ts'
        },
        'benchmark': {
            exec: 'node',
            tests: 'test/benchmark/**.spec.ts'
        }
    }
};
