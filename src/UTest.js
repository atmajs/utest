(function(global){
	
	var _tests = [],
		_index = -1,
		_listeners = {},
		_options = {
			timeout: 1500
		},
		_testsDone;
		
	
	function nextUTest() {
		if (++_index > _tests.length - 1) {
			_testsDone();
			
			return;
		}
		
		var test = _tests[_index];
		
		test.run(nextUTest);
	}
	
	function teardownDelegate(teardown, done) {
		if (teardown == null) {
			return done;
		}
		return function(){
			runCase(teardown, done);
		};
	}
	
	function async(callback, name) {
		var isTimeouted = false,
			fn = function(){
				clearTimeout(timeout);
				!isTimeouted && callback();
			};
		
		var timeout = setTimeout(function(){
			console.error('Async Suite Timeout - ', name);
			
			isTimeouted = true;
			assert.timeouts.push(name);
			callback();
		}, _options.timeout);
		
		return fn;
	}
	
	
	function runCase(fn, done, teardown, key) {
		try {
				
			if (typeof fn === 'function') {
				if (case_isAsync(fn)) {
					fn( //
					async( //
					teardownDelegate(teardown, done), key));
					return;
				}
				
				fn();
			}
			teardownDelegate(teardown, done)();	
		
		} catch(error){
			console.error(error);
			this.errors++;
			done();
			
		}
	}
	
	function case_isAsync(fn) {
		return /^\s*function\s*([\w]+)?\s*\([\s]*[\w]+/.test(fn.toString());
	}
	
	var UTest = Class({
		Construct: function(suite){
			
			if (this instanceof UTest === false) {
				return new UTest(suite);
			}
			
			this.suite = suite;
			this.processed = [];
			
			Class.bind(this, 'nextCase');
			
			_tests.push(this);
			return this;
		},
		
		run: function(callback){
			
			this.processed = [];
			this.errors = 0;
			this.onComplete = callback;
			
			runCase(this.suite.before, this.nextCase);
		},
		nextCase: function(){
			for (var key in this.suite) {
				if (~this.processed.indexOf(key)) {
					continue;
				}
				
				// reserved
				if (['before','after','teardown'].indexOf(key) !== -1) {
					continue;
				}
				
				if (typeof this.suite[key] !== 'function') {
					continue;
				}
				
				this.processed.push(key);
				
				runCase(this.suite[key], this.nextCase, this.suite.teardown, key);
				
				return;
			}
			
			var that = this;
			runCase(this.suite.after, function(){
				UTest.trigger('complete', that);
				that.onComplete();
			});
		},
		
		Static: {
			clear: function(){
				_tests = [];
				_listeners = {};
			},
			run: function(callback){
				_index = -1;
				_testsDone = callback;
				
				nextUTest();
			},
			on: function(event, callback){
				switch (event) {
					case 'complete':
						if (UTest.isBusy() === false) {
							callback();
							return;
						}
						break;
				}
				
				var fns = (_listeners[event] || (_listeners[event] = []));
				fns.push(callback);
			},
			trigger: function(event){
				var fns = _listeners[event];
				if (fns == null || !fns.length) {
					return;
				}
				
				var args = Array.prototype.slice.call(arguments, 1);
				for (var i = 0, x, imax = fns.length; i < imax; i++){
					x = fns[i];
					x.apply(null, args);
				}
			},
			isBusy: function(){
				return _index < _tests.length;
			},
			cfg: function(options){
				for (var key in options) {
					_options[key] = options[key];
				}
			}
		}
	});
	
	global.UTest = UTest;
	
	
}(this));


