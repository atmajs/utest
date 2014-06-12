(function(global){
	
	var _tests = [],
		_index = -1,
		_listeners = {},
		
		// default options
		_options = {
			timeout: 1500,
			errorableCallbacks: false,
		},
		_testsDone;
	
	var RESERVED = ['$before', '$after', '$teardown', '$config', '$run'];
	
	// import utils/object.js
	// import utils/syntax.js
	
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
	
	function async(callback, name, msTimeout) {
		var isTimeouted = false,
			isProcessed = false,
			// http requests are busy, take some more time
			jam = 5,
			fn = function(){
				clearTimeout(timeout);
				if (isTimeouted || isProcessed) 
					return;
				isProcessed = true;
				callback.apply(null, arguments);
			};
		var timeout = wait(),
			future = {
				fn: fn,
				id: timeout
			};
		
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
			return setTimeout(onTimeout, msTimeout || _options.timeout);
		}
		
		return future;
	}
	
	
	function runCase(ctx, fn, done, teardown, key) {
		
		if (fn != null && typeof fn === 'object') {
			
			var sub = new UTest(key, fn, ctx);
			sub.run(teardownDelegate(ctx, teardown, done));
			return;
		}
		
		var asyncData;
		try {
			
			var args = _Array_slice.call(ctx.arguments || []),
				onComplete = teardownDelegate(ctx, teardown, done),
				asyncData,
				result;
			
			if (is_Function(fn) === false) {
				onComplete();
				return;
			}
			
			if (case_isAsync(fn)) {
				asyncData = async(
					onComlete
					, key
					, ctx.$conig && ctx.$config.timeout
				);
				args.unshift(asyncData.fn);
				
				result = fn.apply(ctx, args);
				return;
			}
			result = fn.apply(ctx, args);
			
			
			onComplete();
		} catch(error){
			
			if (asyncData)
				clearTimeout(asyncData.id);

			error.stack = assert.prepairStack(error.stack);
			
			console.error(error.stack);
			
			assert.errors++;
			done();
			
		}
		
		
		function try_waitDeferred(dfr) {
			if (is_Deferred(dfr) === false) 
				return;
			
			if (asyncData == null){
				asyncData = async(
					onComlete
					, key
					, ctx.$conig && ctx.$config.timeout
				);
			}
			result
				.fail(function(){
					var msg = logger.formatMessage(
						'Test case `%s` rejected' , key
					);
					eq_(error, null);
				})
				.done(function(){
					if (arguments.length !== 0) 
						ctx.arguments = arguments;
				})
				.always(asyncData.fn);
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
		
		Extends: [ UTestServer, UTestConfiguration ],
		Construct: function(mix, suite, parent){
			if (this instanceof UTest === false) 
				return new UTest(mix, suite, parent);
			
			var name = mix;
			if (typeof mix !== 'string' && suite == null) {
				suite = mix;
				name = 'UTest'
			}
			
			if (typeof suite === 'function') 
				suite = syntax_Mocha(suite);
			
			
			this.name = name;
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
			
			if (parent == null) 
				_tests.push(this);
			return this;
		},
		
		run: function(callback){
			
			this.processed = [];
			this.errors = 0;
			//this.snapshot = {
			//	total: assert.total,
			//	failed: assert.failed
			//};
			
			this.onComplete = callback;
			
			this.handleRanges();
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
		handleRanges: function(){
			var keys = Object.keys(this.suite),
				start, end;
				
			keys.forEach(function(x, index){
				switch(x[0]) {
					case '[':
						if (start != null) {
							logger.warn('Range is already started at `%s` (skipp)', keys[start]);
							return;
						}
						start = index;
						break;
					case ']':
						if (end != null) {
							logger.warn('Range is already closed at `%s` (enlarge)', keys[end]);
						}
						end = index;
						break;
				}
			});
			if (start == null && end == null) 
				return;
			if (start == null) 
				start = 0;
			if (end == null) 
				end = keys.length - 1;
			
			logger.log('Range: from bold<green<%s>> to bold<green<%s>>'.color, keys[start], keys[end]);
			
			var range = {},
				suite = this.suite;
			keys.slice(start, end + 1).forEach(function(key){
				range[key] = suite[key];
			});
			
			RESERVED.forEach(function(key){
				if (suite[key] != null) 
					range[key] = suite[key];
			})
			
			this.suite = range;
		},
		
		Self: {
			_start: function(){
				runCase(this.proto, this.suite.$before, this._nextCase);	
			},
			_nextCase: function(){
				
				if (arguments.length > 0) {
					var index = 0;
					if (this.$cfg('errorableCallbacks') === true) {
						assert.equal(arguments[0], null);
						index = 1;
					}
					this.proto.arguments = _Array_slice.call(arguments, index);
				}
				
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
					this.processed.push(key);
					
					var case_ = this.suite[key];
					if (case_ == null) 
						continue;
					
					var message = ('   ' + key + ': ').bold;
					if (typeof case_ === 'object') 
						message = message.bg_cyan;
					
					console.log('');
					console.print(message);
					runCase(this.proto, case_, this._nextCase, this.suite.$teardown, key);
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


