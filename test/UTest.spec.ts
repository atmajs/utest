import { UTest as Fn } from '../builds/export-utest-node'


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

    '!should process only by query' () {
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

// Fn({
	
// 	'firsty': assert.await(function(){
// 		flow.push(1);
// 	}),
// 	'async': function(done){
		
// 		setTimeout(function(){
// 			flow.push(2);
// 			done();
// 		},100);
// 	},
// 	'third': function(){
// 		flow.push(3);
// 	},
	
// 	'pass through variables': function(done){
// 		flow.push(4);
// 		setTimeout(function(){
// 			done('foo', 10);
// 		}, 100)
// 	},
	
// 	'expect variables': function(done, fooVar, numVar){
		
// 		flow.push(5);
// 		eq_(fooVar, 'foo');
// 		eq_(numVar, 10);
		
// 		done();
// 	},
	
// 	'$before': function(){
// 		flow.push(0);
// 	},
// 	'$after': assert.await(function(){

// 		deepEq_(flow, [0, 1, 2, 3, 4, 5]);
// 		eq_(teardowns, 5);

// 	}),
	
// 	'$teardown': function(){
// 		teardowns++;
// 	}
// });
