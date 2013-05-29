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


function assert_stackData(stack) {
	var data = {};
	if (!stack) {
		return data;
	}
	
	stack = stack.split('\n').splice(2, 6);
	for (var i = 0, x, imax = stack.length; i < imax; i++){
		stack[i] = stack[i].replace(/http:\/\/([^\/]+)\//, '').replace('at ', '');
	}
	var file = /\(([^\(]+)\)[\t ]*$/.exec(stack[0]);
	if (file) {
		var parts = file[1].split(':');
		
		data.file = parts[0];
		data.line = parts[1] << 0;
		data.col = parts[2] << 0;
	}
	
	data.stack = stack.join('\n');
	
	return data;
}
