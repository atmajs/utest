(function(global){
	
	// import assert.js
	// import assert.wrapper.js
	
	var util = require('util');
	
	
	function wrapFn(assert, key) {
		var original = key == null ? assert : assert[key];
		
		return function(){
			assert.total++;
			
			try {
				original.apply(this, arguments);
			} catch(e) {
				assert.failed++;
				console.error('Actual: %1 \nExpected: %2 \nStack: %3'.format(e.actual, e.expected, e.stack));
				return;
			}
			
			util.print(' |'.green.bold);
		};
	}
}(this));