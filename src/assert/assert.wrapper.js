

global.assert = wrapAssertFns(wrapAssert(global.assert));

obj_extend(assert, {
	total: 0,
	failed: 0,
	callbacks: 0,
	timeouts: [],
	
	reset: function(){
		
		this.callbacks = 0;
		this.failed = 0;
		this.total = 0;
		
		this.timeouts = [];
	},
	
	callback: function(callback){
		this.callbacks++;
		
		var that = this;
		return function(){
			that.callbacks--;
			
			return callback.apply(this, arguments);
		};
	}
});

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

function wrapFn(assert, key) {
	var original = key == null ? assert : assert[key];
	
	return function(){
		assert.total++;
		try {
			original.apply(this, arguments);
		} catch(e) {
			assert.failed++;
			
			assert.onfailure && assert.onfailure({
				actual: e.actual,
				expected: e.expected,
				stack: e.stack,
				message: e.message
			});
			return;
		}
		
		assert.onsuccess && assert.onsuccess();
	};
}
