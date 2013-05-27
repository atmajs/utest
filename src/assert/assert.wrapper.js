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

var total = 0,
	failed = 0;


global.assert = wrapAssertFns(wrapAssert(global.assert));
	


obj_extend(assert, {
	get total() {
		return total;
	},
	set total(x) {
		total = x;
	},

	get failed() {
		return failed;
	},
	set failed(x) {
		failed = x;
	},

	timeouts: [],
	
	callbacks: 0,
	
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
			
			return callbacks.apply(this, arguments);
		};
	}
});
