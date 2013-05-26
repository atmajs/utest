(function(){
	
	// import assert.js
	
	var total = 0,
		failed = 0,
		util = require('util');
	
	Object.defineProperty(assert, 'total', {
		get: function(){
			return total;
		},
		set: function(x){
			total = x;
		}
	});
	Object.defineProperty(assert, 'failed', {
		get: function(){
			return failed;
		},
		set: function(x){
			failed = x;
		}
	});


	for (var key in assert) {
		if (typeof assert[key] !== 'function') {
			continue;
		}
		
		if (key[0].toLowerCase() !== key[0]){
			// Class Function Definition
			continue;
		}
		
		assert[key] = wrapp(assert, key);
	}
	
	
	function wrapp(assert, key) {
		var original = assert[key];
		
		return function(){
			total++;
			
			try {
				original.apply(this, arguments);
			} catch(e) {
				failed++;
				console.error('Actual: %1 \nExpected: %2 \nStack: %3'.format(e.actual, e.expected, e.stack));
				return;
			}
			
			util.print(' |'.green.bold);
		};
	}
}());