

global.assert = assert;

obj_extend(assert, {
	total: 0,
	failed: 0,
	errors: 0,
	timeouts: [],
	
	reset: function(){
		
		this.callbacks.length = 0;
		this.timeouts.length = 0;
		
		this.failed = 0;
		this.total = 0;
		this.errors = 0;
	},
	
	// @obsolete
	callback: function(callback){
		return this.await(callback);
	}
});

//> events
(function(assert){
	
	assert.on('start', function(){
		assert.total++;
	});
	
	assert.on('success', function(){
		
		assert.onsuccess && assert.onsuccess();
	});
	
	assert.on('fail', function(error){
		
		// force stack calculation
		// (otherwise stack is not sent from browsers to the server)
		error.stack = error.stack;
		
		
		assert.failed++;
		assert.onfailure && assert.onfailure(error);
	});
	
}(assert));

/** GLOBALS */
global.eq = assert.equal;
global.notEq = assert.notEqual;
global.deepEq = assert.deepEqual;
global.notDeepEq = assert.notDeepEqual;
global.strictEq = assert.strictEqual;
global.notStrictEq = assert.notStrictEqual;

// <!---

function obj_extend(target, source) {
	for (var key in source) {
		target[key] = source[key];
	}
	return target;
}
