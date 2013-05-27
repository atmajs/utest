(function(global){
	
	// import assert.js
	// import assert.wrapper.js
	

	
	
	function wrapFn(assert, key) {
		var original = key == null ? assert : assert[key],
			message;
		
		return function(){
			assert.total++;
			try {
				original.apply(this, arguments);
			} catch(e) {
				assert.failed++;
				
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
	
}(this));