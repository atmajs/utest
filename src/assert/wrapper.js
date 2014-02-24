

global.assert = assert = wrapAssertFns(wrapAssert(assert));

obj_extend(assert, {
	total: 0,
	failed: 0,
	errors: 0,
	timeouts: [],
	
	reset: function(){
		
		this.callbacks.length = 0;
		this.failed = 0;
		this.total = 0;
		this.errors = 0;
		
		this.timeouts = [];
	},
	
	// @obsolete
	callback: function(callback){
		return this.await(callback);
	}
});

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

function wrapAssert(original) {
	var fn;
	fn = wrapFn(original);
	fn.prototype = original.prototype;
	
	return obj_extend(fn, original);
}

function wrapAssertFns(assert) {
		
	for (var key in assert) {
		if (typeof assert[key] !== 'function') {
			continue;
		}
	
		if (key[0].toLowerCase() !== key[0]) {
			// Class Function Definition
			continue;
		}
	
		assert[key] = wrapFn(assert, key);
	}
	return assert;
}

function wrapFn(assertFn, key) {
	var original = key == null ? assertFn : assertFn[key];
	
	return function(){
		assert.total++;
		try {
			original.apply(this, arguments);
		} catch(error) {
			assert.failed++;
			
			assert.onfailure && assert.onfailure(error);
			return;
		}
		
		assert.onsuccess && assert.onsuccess();
	};
}


