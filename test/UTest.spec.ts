import { UTest as Fn } from '../src/UTest'


UTest({
    'is function' () {
        is_(Fn, 'Function')
    },
    'should process' () {
        var flow = [],
            teardowns = 0;

        let suite = new Fn({
            'first': assert.await(() => flow.push(1)),

            '$before': function(){
                flow.push(0);
            },
            '$after': assert.await(function(){
                flow.push(2);
            }),
            '$teardown': function(){
                teardowns++;
            }
        });

        suite.run(assert.await('Must be called sync'));

        deepEq_(flow, [ 0, 1, 2 ]);
        eq_(teardowns, 1);
    },

    'should process only by query' () {
        var flow = [];

        let suite = new Fn({
            'one': () => flow.push(1),
            'two': () => flow.push(2),
            'three': () => flow.push(3)
        });

        suite.run({ query: 'tw.'});
        deepEq_(flow, [ 2 ]);

    }
})
