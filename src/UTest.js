(function(global){
	
	var _tests = [],
		_index = -1,
		_listeners = {},
		_options = {
			timeout: 1500
		},
		_testsDone;
	
	var RESERVED = ['$before', '$after', '$teardown', '$config', '$run'];
	
	// import utils/object.js
	
	// import UTest.config.js
	// import UTest.page.js
	// import UTest.server.js
	
	
	function nextUTest() {
		if (++_index > _tests.length - 1) {
			_testsDone();
			
			return;
		}
		
		var test = _tests[_index];
		
		test.run(nextUTest);
	}
	
	function teardownDelegate(ctx, teardown, done) {
		if (teardown == null) 
			return done;
		
		return function(){
			ctx.arguments = arguments;
			runCase(ctx, teardown, done);
		};
	}
	
	function async(callback, name) {
		var isTimeouted = false,
			jam = 5,
			fn = function(){
				clearTimeout(timeout);
				!isTimeouted && callback.apply(null, arguments);
			};
		var timeout = wait();
		
		function onTimeout() {
			if (transport_isBusy(global) && --jam > 0) {
				timeout = future.timeout = wait();
				console.log('<transport jam> bold<%d> yellow<%s>'.color, jam, name);
				return;
			}
			
			console.error('Async Suite Timeout - ', name);
			isTimeouted = true;
			assert.timeouts.push(name);
			callback();
		}
		
		function wait() {
			return setTimeout(onTimeout, _options.timeout);
		}
		
		var future = {
			fn: fn,
			id: timeout
		};
		
		return future;
	}
	
	
	function runCase(ctx, fn, done, teardown, key) {
		
		var asyncData;
		try {
			
			var args = _Array_slice.call(ctx.arguments || []);
			if (typeof fn === 'function') {
				
				if (case_isAsync(fn)) {
					asyncData = async(teardownDelegate(ctx, teardown, done), key);
					args.unshift(asyncData.fn);
					
					fn.apply(ctx, args);
					return;
				}
				
				fn.apply(ctx, args);
			}
			teardownDelegate(ctx, teardown, done)();
		} catch(error){
			
			if (asyncData)
				clearTimeout(asyncData.id);

			error.stack = assert.prepairStack(error.stack);
			
			console.error(error.stack);
			
			assert.errors++;
			done();
			
		}
	}
	
	function case_isAsync(fn) {
		return /^\s*function\s*([\w]+)?\s*\([\w\s,]*(done|next)/.test(fn.toString());
	}
	
	var UTestProto = {
		// stores data exposed by the async Case
		arguments: null,
		$run: function(key, done){
			runCase(this.proto, this.suite[key], done || function(){}, null, key);
		}
	};
	
	var UTestProtoDelegate = function(instance, suite){
		var proto = {},
			key;
		for (key in UTestProto) {
			
			if (typeof UTestProto[key] === 'function') {
				proto[key] = UTestProto[key].bind(instance);
				continue;
			}
			proto[key] = UTestProto[key];
		}
		
		for (key in suite) {
			proto[key] = suite[key];
		}
		return proto;
	};
	
	var UTest = Class({
		
		Extends: UTestServer,
		Construct: function(suite){
			
			if (this instanceof UTest === false) {
				return new UTest(suite);
			}
			
			this.suite = suite;
			this.processed = [];
			this.proto = UTestProtoDelegate(this, suite);
			
			// @obsolete properties
			['before', 'after', 'teardown', 'config']
				.forEach(function(key){
					if (suite[key] == null) 
						return;
					
					console.warn('<UTest>', key, 'property is deprecated. Use: $' + key);
					
					suite['$' + key] = suite[key];
					delete suite[key];
				});
			
			_tests.push(this);
			return this;
		},
		
		configurate: function(done){
			UTestConfiguration.configurate(this.suite.$config, done);
		},
		
		run: function(callback){
			
			this.processed = [];
			this.errors = 0;
			//this.snapshot = {
			//	total: assert.total,
			//	failed: assert.failed
			//};
			
			this.onComplete = callback;
			
			this.handleBangs();
			this.configurate(this._start);
		},
		
		handleBangs: function(){
			var has = ruqq.arr.any(Object.keys(this.suite), function(x){
				return x[0] === '!';
			});
			
			if (!has)
				return;
			
			for (var key in this.suite) {
				// reserved
				if (RESERVED.indexOf(key) !== -1) {
					continue;
				}
				
				if (key[0] !== '!') {
					delete this.suite[key];
				}
			}
		},
		
		Self: {
			_start: function(){
				runCase(this.proto, this.suite.$before, this._nextCase);	
			},
			_nextCase: function(){
				
				if (arguments.length > 0) 
					this.proto.arguments = _Array_slice.call(arguments);
				
				for (var key in this.suite) {
					if (~this.processed.indexOf(key)) {
						continue;
					}
					
					// reserved
					if (RESERVED.indexOf(key) !== -1) {
						continue;
					}
					
					if (key.substring(0,2) === '//') {
						console.warn(key.substring(2), '(skipped)'.bold);
						this.processed.push(key);
						continue;
						
					}
					
					if (typeof this.suite[key] !== 'function') {
						continue;
					}
					
					this.processed.push(key);
					
					console.log('');
					console.print(('   ' + key + ': ').bold);
					runCase(this.proto, this.suite[key], this._nextCase, this.suite.$teardown, key);
					
					return;
				}
				
				var that = this;
				runCase(this.proto, this.suite.$after, function(){
					UTest.trigger('complete', that);
					that.onComplete();
				});
			}
		},
		Static: {
			stats: function(){
				return {
					suites: _tests.length
				};
			},
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
			},
			
			configurate: function($config, done){
				UTestConfiguration.configurate($config, done);
			}
		}
	});
	
	global.UTest = UTest;
	
	
}(__global));


