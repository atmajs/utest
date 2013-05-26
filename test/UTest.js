
var TestSuite = UTest;

debugger;
include.js('/src/utest/browser/src/UTest.js').done(function(){
	
	console.log('asdasd');
	
	var flow = [];
	
	TestSuite({
		'first': function(){
			flow.push(1);
		},
		'second': function(){
			flow.push(2);
		},
		'third': function(done){
			setTimeout(function(){
				
				flow.push(3);
				done();
			},1000);
		},
		
		after: function(){
			assert.deepEqual(flow, [1,2, 3]);
		}
	});
	
})