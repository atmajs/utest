(function(){
	
	// import assert.js
	
	var total = 0,
		failed = 0;
	
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
		var original = assert[key],
			message;
		
		return function(){
			total++;
			
			try {
				original.apply(this, arguments);
			} catch(e) {
				failed++;
				
				message = [];
				if (e.actual) {
					// assert.js exception
					message.push('Actual: ' + e.actual);
					message.push('Expected: ' + e.expected);
					message.push('Stack: ' + e.stack);
				}else{
					message.push('Message: ' + e.toString());
					message.push('Stack: ' + e.stack);
				}
				
				assert.onfailure && assert.onfailure(message.join('\n'));
				return;
			}
			
			assert.onsuccess && assert.onsuccess();
		};
	}
	
}());