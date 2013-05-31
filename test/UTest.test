
var TestSuite = UTest;


(function(){
	var flow = [],
		teardowns = 0;
	
	TestSuite({
		
		'first': function(){
			flow.push(1);
		},
		'second': function(){
			flow.push(2);
		},
		'async': function(done){
			setTimeout(function(){
				
				flow.push(3);
				done();
			},1000);
		},
		
		before: function(){
			flow.push(0);
		},
		after: function(){

			assert.deepEqual(flow, [0, 1, 2, 3]);
			assert.equal(teardowns, 3);

		},
		teardown: function(){
			teardowns++;
		}
	});
	
}())