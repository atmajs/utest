
(function(){
	var __env = 'node';
	
	// source ../src/vars.js
	
	var _Array_slice = Array.prototype.slice;
	// end:source ../src/vars.js
	
	// source ../src/utils/array.js
	function arr_isArray(array) {
		return !!(array != null && array.length != null && typeof array.splice === 'function');
	}
	
	function arr_isEmpty(array) {
		if (arr_isArray(array) === false)
			return true;
			
		return !array.length;
	}
	// end:source ../src/utils/array.js
	// source ../src/utils/transport.jam.js
	var transport_isBusy;
	
	(function(){
		
		if ('node' === __env) 
			return node();
		
		if ('dom' === __env) 
			return dom();
		
		
		function node(){
			transport_isBusy = function(){
				return false;
			};
		}
		function dom(){
			
			transport_isBusy = function(win){
				return xhr_isBusy(win) || dom_isReady(win) === false;
			};
			
			//= private
			//= Initialize
			xhr_createListener(window);
		}
		
		
		function dom_isReady(win){
			if (frame_isReady(win) === false) 
				return false;
			
			var i = win.frames.length;
			while ( --i > -1) {
				if (frame_isReady(win.frames[i]) === false) 
					return false;
			}
			return true;
		}
		
		function frame_isReady(frame){
			try {
				// `readyState` fallback
				if ('__utest_isLoading' in frame)
					return frame.__utest_isLoading;
				
				return (frame.document || frame.contentDocument).readyState === 'complete';
			} catch(error){
				// cross-origin ?
				return false;
			}
		}
	}());
	// end:source ../src/utils/transport.jam.js
	
	// source ../src/UTest.js
	(function(global){
		
		var _tests = [],
			_index = -1,
			_listeners = {},
			_options = {
				timeout: 1500
			},
			_testsDone;
		
		var RESERVED = ['$before', '$after', '$teardown', '$config', '$run'];
		
		// source utils/object.js
		
		function obj_getProperty(obj, property) {
			var chain = property.split('.'),
				imax = chain.length,
				i = -1;
			
			while(++i<imax) {
				if (obj == null) 
					return null;
				
				obj = obj[chain[i]];
			}
			return obj;
		}
		
		
		// end:source utils/object.js
		
		// source UTest.config.js
		
		var UTestConfiguration = (function(){
			
			
			var Configurations = {
				http: {
					service: function(routes, done){
						http_config('http.service', routes, done);
					},
					config: function(configDir, done) {
						http_config('http.config', configDir, done);
					},
					include: function(pckg, done){
						http_config('include', pckg, done);
					},
					
					eval: function(fn, done){
						http_config('eval', fn.toString(), done);
					}
				}
				
			};
			
			function http_config(args){
				var args = Array.prototype.slice.call(arguments);
				
				
				args.splice(1, 0, null); // populate later with current configuration
				
				args.unshift('>server:utest:action');
				
				UTest
					.getSocket(function(socket, config){
						
						args[2] = (UTest.getConfig && UTest.getConfig()) || config;
						socket
							.emit
							.apply(socket, args)
							;	
					});
			}
			
			function configurate(key, args, done) {
				var fn = obj_getProperty(Configurations, key);
				if (fn == null) {
					return done('<utest:config> Undefined configuration' + key);
				}
				
				fn(args, done)
			}
			
			return {
				
				configurate: function(cfg, done){
					
					if (cfg == null) 
						return done();
					
					var await = new Class.Await;
					
					
					for(var key in cfg){
						
						configurate(key, cfg[key], await.delegate());
					}
					
					await
						.fail(function(error){
							console.error('<utest:configurate> ', error);
						})
						.always(done);
				}
			};
				
		}());
		// end:source UTest.config.js
		// source UTest.page.js
		var UTestPage;
		
		(function(){
			
			var _iframe;
			
			UTestPage = {
				request: function(url, method, headers, data, callback){
					
					if (_iframe) {
						_iframe.parentNode.removeChild(_iframe);
						_iframe = null;
					}
					
					request(url, method, headers, data, function(error, response, headers){
						
						if (error) {
							callback(error);
							return;
						}
						if (response == null) {
							callback('Server not responded');
							return;
						}
						
						var html;
						if (typeof response === 'string') 
							html = response;
						
						if (html == null) {
							callback(null, response, headers);
							return;
						}
						
						
						var base = '/utest/';
						if (/https?:/.test(url)) {
							url.lastIndexOf('/');
							base = /https?:\/\/[^\/]+/.exec(url)[0];
						}
						
						if (/<\s*head[^>]*>/i.test(html)) {
							// no head
							var index = html.indexOf('>');
							if (index !== -1) {
								
								html = html.substring(0, index + 1)
									+ '<head><base href="'
									+ base
									+ '" /></head>'
									+ html.substring(index + 1)
									;
							}
						}
						else {
							html = html.replace(/(head[^>]*>)/i, '$1 <base href="' + base + '" />');
						}
						
						_iframe = document.createElement('iframe');
						
						document
							.body
							.appendChild(_iframe);
							
						var _doc = _iframe.contentDocument,
							_win = _iframe.contentWindow
							;
							
						/* expose Atma and jQuery */
						_win.Class = Class;
						_win.include = include;
						_win.mask = mask;
						_win.Compo = mask.Compo;
						_win.jmask = mask.jmask;
						_win.jQuery = _win.$ = $;
						_win.__utest_isLoading = true;
						
						
						var listener = xhr_createListener(_win);
						
						$(_iframe).load(function(){
							include.allDone(function(){
								listener.done(function(){
									_win.__utest_isLoading = false;
									
									//setTimeout(function(){
										callback(null, _doc, _win, headers);
									//});
								});
							});
						})
						
						_doc.open();
						_setHistoryPath(_win, url);
						
						_doc.write(html);
						_doc.close();
						
					})
				}
			};
			
			function _setHistoryPath(win, path){
				if (win.history == null || win.history.pushState == null) 
					return;
				
				
				
				var a;
				a = document.createElement('a');
				a.href = path;
				
				path = ''
					+ win.parent.location.protocol
					+ '//'
					+ win.parent.location.host
					+ a.pathname
					+ a.search
					+ a.hash
					;
				
				win.history.pushState(null, null, path);
			}
			
			function request(url, method, headers, data, callback) {
				
				headers = headers || {};
				if (/https?:/.test(url)) {
					// cross-origin
					headers['x-remote'] = url;
					url = '/utest/server/proxy';
				}
				
				$
					.ajax({
						url: url,
						cache: false,
						contentType: data && 'application/json; charset=utf-8',
						data: data && JSON.stringify(data),
						type: (method || 'get').toUpperCase(),
						headers: headers
					})
					.done(function(response, status, xhr){
						callback(null, response, xhr.getAllResponseHeaders());
					})
					.fail(function(xhr, textStatus){
						callback({
							responseText: xhr.responseText,
							statusCode: xhr.statusCode(),
							headers: xhr.getAllResponseHeaders()
						});
					})
			}
			
		}());
		// end:source UTest.page.js
		// source UTest.server.js
		var UTestServer;
		
		(function(){
			
			UTestServer = {
				
				Static: {
					server: {
						render: function(template /* [, ?model|params, ?ctr, callback] */){
							
							var model,
								include,
								ctr,
								callback;
							
							// @Obsolete - use `model`, `controller`, `include` in single params object
							var args = _Array_slice.call(arguments, 1),
								dfr = new Class.Deferred()
								;
							
							if (typeof args[args.length - 1] === 'function') 
								callback = args.pop();
							
							model = args.shift();
							ctr = args.shift();
							
							// @obsolete workaround
							if (model.include) {
								include = model.include;
								ctr = model.controller;
								
								model = model.model;
							} else if (model.model) {
								ctr = model.controller;
								model = model.model;
							}
							
							
							
							UTestPage.request('/utest/server/render', 'post', {
								template: template,
								model: model,
								controller: ctr,
								include: include
							}, done);
							
							function done(error, doc, win) {
								
								if (callback) 
									callback(error, doc, win);
								
								if (error) {
									dfr.reject(error);
									return;
								}
									
								dfr.resolve(doc, win);
							}
							
							return dfr
						},
						
						request: function(mix /* [, method, data, callback] */){
							var url = mix,
								method,
								data,
								headers,
								callback
								;
							if (typeof mix !== 'string') {
								url = mix.url;
								method = mix.method;
								data = mix.data;
								headers = mix.headers;
							}
							
							var args = _Array_slice.call(arguments, 1),
								dfr = new Class.Deferred()
								;
							
							if (typeof args[args.length - 1] === 'function') 
								callback = args.pop();
							
							if (args.length > 0) 
								method = args.shift();
							
							if (args.length > 0) 
								data = args.shift();
								
							UTestPage.request(url, method, headers, data, done);
							
							function done(error, doc, win){
								if (callback) 
									callback(error, doc, win);
								
								if (error) {
									dfr.reject(error);
									return;
								}
								
								dfr.resolve(doc, win);
							}
							
							return dfr;
						}
					}
				}
			};
			
		}());
		// end:source UTest.server.js
		
		
		function nextUTest() {
			if (++_index > _tests.length - 1) {
				_testsDone();
				
				return;
			}
			
			var test = _tests[_index];
			
			test.run(nextUTest);
		}
		
		function teardownDelegate(ctx, teardown, done) {
			if (teardown == null) {
				return done;
			}
			return function(){
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
				if (transport_isBusy(window) && --jam > 0) {
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
				
				var args = Array.prototype.slice.call(ctx.arguments || []);
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
				
				this.errors++;
				
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
						this.proto.arguments = Array.prototype.slice.call(arguments);
					
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
		
		
	}(this));
	
	
	
	// end:source ../src/UTest.js
	// source ../src/assert/assert.node.js
	(function(global){
		
		// source /.reference/atma/assertion/lib/assert.embed.js
		var assert;
		(function(global, exports){
			
			(function(){
				// source /src/exports.js
				// source /src/scope-vars.js
				
				
				var _Array_slice = Array.prototype.slice,
				
					assert = {};
				// end:source /src/scope-vars.js
					
				// source /src/utils/is.js
				function is_Array(ar) {
					return Array.isArray(ar);
				}
				
				function is_Boolean(arg) {
					return typeof arg === 'boolean';
				}
				
				function is_Null(arg) {
					return arg === null;
				}
				
				function is_NullOrUndefined(arg) {
					return arg == null;
				}
				
				function is_Number(arg) {
					return typeof arg === 'number';
				}
				
				function is_String(arg) {
					return typeof arg === 'string';
				}
				
				function is_Symbol(arg) {
					return typeof arg === 'symbol';
				}
				
				function is_Undefined(arg) {
					return arg === void 0;
				}
				
				function is_RegExp(re) {
					return obj_typeof(re) === 'RegExp';
				}
				
				function is_Object(arg) {
					return typeof arg === 'object' && arg !== null;
				}
				
				function is_Date(d) {
					return obj_typeof(d) === 'Date';
				}
				
				function is_Error(e) {
					return obj_typeof(e) === 'Error' || e instanceof Error;
				}
				
				function is_Function(arg) {
					return typeof arg === 'function';
				}
				
				function is_Buffer(buff){
					if (typeof Buffer === 'undefined') 
						return false;
					
					return buff instanceof Buffer;
				}
				
				function is_Arguments(x){
					return obj_typeof(x) === 'Arguments';
				}
				
				function is_Primitive(arg) {
					return arg === null
						|| typeof arg === 'boolean'
						|| typeof arg === 'number'
						|| typeof arg === 'string'
						|| typeof arg === 'symbol'
						|| typeof arg === 'undefined'
						;
				}
				// end:source /src/utils/is.js
				// source /src/utils/object.js
				var obj_typeof,
					obj_inherit,
					obj_extend,
					obj_keys
					;
					
				
				(function(){
				
					
					obj_typeof = function(x) {
						return Object
							.prototype
							.toString
							.call(x)
							.replace('[object ', '')
							.replace(']', '');
					};
					
					obj_inherit = function(Ctor, base) {
						
						function temp(){}
						temp.prototype = base.prototype;
						
						Ctor.prototype = new temp;
					};
				
					obj_keys = Object.keys
						? Object.keys
						: getKeys;
					
					obj_extend = function(target, source){
						if (target == null) 
							target = {};
							
						if (source == null) 
							return target;
						
						for(var key in source){
							target[key] = source[key];
						}
						
						return target;
					};
					
					// private
					
					function getKeys(obj) {
						var keys = [];
						for(var key in keys)
							keys.push(key);
						
						return keys;
					}
					
				}());
				
				// end:source /src/utils/object.js
				// source /src/utils/string.js
				function str_truncate(str, length) {
					
					if (is_String(str) == false) 
						return str;
					
					return str.length < length
						? str
						: str.slice(0, length)
						;
				}
				// end:source /src/utils/string.js
				// source /src/utils/stack.js
				var stack_prepair;
				
				(function(){
					
					stack_prepair = function(stack) {
						var lines = stack.split('\n'),
							startIndex = 1, endIndex = lines.length
							;
						
						var rgx_start = /(^([ \t]*at )?[\w\.]*assert[_\.])|(^([ \t]*at )?\w+\.assert)/i,
							rgx_end = /(^([ \t]*at )?runCase)/i
							;
						
						var i = 0, 
							imax = lines.length;
						
						while ( ++i < imax ){
							if (rgx_start.test(lines[i])) 
								startIndex = i + 1;
							
							if (rgx_end.test(lines[i])) {
								endIndex = i;
								break;
							}
						}
						
						lines.splice(endIndex);
						lines.splice(1, startIndex - 1);
						
						
						return lines.join('\n');
					};
					
				}());
				// end:source /src/utils/stack.js
				
				// source /src/error.js
				var fail;
				
				(function() {
				
					fail = function(actual, expected, message, operator, stackStartFunction) {
						
						var error = new AssertionError({
							message: message,
							actual: actual,
							expected: expected,
							operator: operator,
							stackStartFunction: stackStartFunction
						});
						
						throw error;
					};
				
					assert.AssertionError = AssertionError;
					assert.fail = fail;
					assert.prepairStack = stack_prepair;
					
					
					// private
				
					// {message, actual, expected }
					function AssertionError(options) {
						this.name = 'AssertionError';
						this.actual = options.actual;
						this.expected = options.expected;
						this.operator = options.operator;
				
						if (options.message) {
							this.message = options.message;
							this.generatedMessage = false;
						} else {
							this.message = getMessage(this);
							this.generatedMessage = true;
						}
						
						var stackStartFunction = options.stackStartFunction || fail;
				
						if (Error.captureStackTrace) {
							Error.captureStackTrace(this, stackStartFunction);
						} else {
							
							this.stack = new Error().stack;
						}
						
						this.stack = stack_prepair(this.stack);
					};
					obj_inherit(AssertionError, Error);
				
					function getMessage(error) {
						var str_actual = JSON.stringify(error.actual, replacer),
							str_expected = JSON.stringify(error.expected, replacer);
				
						return str_truncate(str_actual, 128) + ' ' + error.operator + ' ' + str_truncate(str_expected, 128);
					}
				
				
					function replacer(key, value) {
						if (is_Undefined(value))
							return '' + value;
				
						if (is_Number(value) && (isNaN(value) || !isFinite(value)))
							return value.toString();
				
						if (is_Function(value) || is_RegExp(value))
							return value.toString();
				
						return value;
					}
					
					
				
				}());
				// end:source /src/error.js
				
				// source /src/assert/exception.js
				(function() {
				
					assert.throws = function(mix, /*optional*/ error, /*optional*/ message) {
						_throws.apply(this, [true].concat(_Array_slice.call(arguments)));
					};
				
				
					assert.doesNotThrow = function(mix, /*optional*/ message) {
						_throws.apply(this, [false].concat(_Array_slice.call(arguments)));
					};
				
					assert.ifError = function(err) {
						if (err) 
							throw err;
					};
				
					// private
					function _throws(shouldThrow, mix, expected, message) {
						var actual,
							fn, args;
						
						if (is_Array(mix)) {
							var arr = _Array_slice.call(mix);
							fn = arr.shift();
							args = arr;
						}
						
						if (is_Function(mix)) {
							fn = mix;
							args = [];
						}
						
				
						if (is_String(expected)) {
							message = expected;
							expected = null;
						}
				
						try {
							fn.apply(null, args);
						} catch (error) {
							actual = error;
						}
						
						message = ''
							+ (expected && expected.name && (' (' + expected.name + ').') || '.')
							+ ((message && (' ' + message)) || '.') 
				
						
						if (shouldThrow === true && actual == null) 
							fail(actual, expected, 'Missing expected exception' + message);
						
						if (shouldThrow === false && expectedException(actual, expected)) 
							fail(actual, expected, 'Got unwanted exception' + message);
						
				
						if ((shouldThrow && actual && expected && !expectedException(actual, expected)) || (!shouldThrow && actual)) 
							throw actual;
						
					}
					
					function expectedException(actual, expected) {
						
						if (!actual || !expected) 
							return false;
						
						if (is_RegExp(expected)) 
							return expected.test(actual);
						
						if (actual instanceof expected) 
							return true;
				
						if (expected.call({}, actual) === true) 
							return true;
						
						return false;
					}
				
				}());
				// end:source /src/assert/exception.js
				// source /src/assert/callback.js
				(function() {
					
					assert.callbacks = [];
					assert.await = assert_await;
					assert.avoid = assert_avoid;
					
					function assert_await() {
						
						var fn, name, ctx, count;
						
						var i = arguments.length,
							x;
						while( --i > -1) {
							x = arguments[i];
							switch(typeof x) {
								case 'function':
									fn = x;
									break;
								case 'object':
									ctx = x;
									break;
								case 'number':
									count = x;
									break;
								case 'string':
									name = x;
									break;
							}
						}
						
						if (this.callbacks == null) 
							this.callbacks = [];
						
						if (isNaN(count) || count < 1) 
							count = 1;
						
						var cbs = this.callbacks,
							obj = {
								count: count,
								name: name,
								stack: stack_prepair((new Error).stack)
							};
						
						cbs.push(obj);
						return function(){
							
							if (--obj.count === 0) 
								cbs.splice(cbs.indexOf(obj), 1);
							
							if (typeof fn !== 'function') 
								return null;
							
							return fn.apply(ctx, arguments);
						}
					}
					
					function assert_avoid() {
						var name = 'function',
							count = 0,
							ctx,
							fn;
							
						
						var i = arguments.length,
							x;
						while( --i > -1) {
							x = arguments[i];
							switch(typeof x) {
								case 'function':
									fn = x;
									break;
								case 'object':
									ctx = x;
									break;
								case 'number':
									count = x;
									break;
								case 'string':
									name = x;
									break;
							}
						}
						
						var cbs = this.callbacks;
						if (cbs == null)
							cbs = this.callbacks = [];
				
						return function(mix) {
							
							if (--count < 0) {
									
								var obj = {
									count: count,
									name: '<avoid>' + (name || ''),
									argument: mix
								};
								
								cbs.push(obj);
							}
							
				
							fn && fn.apply(ctx, arguments)
						};
					}
				}());
				// end:source /src/assert/callback.js
				// source /src/assert/equal.js
				(function() {
				
					assert.ok = function ok(value, message) {
						if (!value)
							fail(value, true, message, '==', ok);
					};
				
					
					var equal,
						notEqual,
						strictEqual,
						notStrictEqual
						;
					
					equal = 
					assert.equal =
					function equal(actual, expected, message) {
						if (actual != expected)
							fail(actual, expected, message, '==', equal);
					};
				
					notEqual = 
					assert.notEqual =
					function notEqual(actual, expected, message) {
						if (actual == expected)
							fail(actual, expected, message, '!=', notEqual);
					};
				
					strictEqual = 
					assert.strictEqual =
					function strictEqual(actual, expected, message) {
						if (actual !== expected)
							fail(actual, expected, message, '===', strictEqual);
				
					};
				
					notStrictEqual = 
					assert.notStrictEqual =
					function notStrictEqual(actual, expected, message) {
						if (actual === expected)
							fail(actual, expected, message, '!==', notStrictEqual);
				
					};
					
					assert.eq_ = equal;
					assert.notEq_ = notEqual;
					assert.strictEq_ = strictEqual;
					assert.notStrictEq_ = notStrictEqual;
				
				}());
				// end:source /src/assert/equal.js
				// source /src/assert/deepEqual.js
				(function() {
					
					var deepEqual,
						notDeepEqual
						;
					
					assert.deepEqual =
					deepEqual =
					function deepEqual(actual, expected, message) {
						
						if (_deepEqual(actual, expected) === false) 
							fail(actual, expected, message, 'deepEqual', deepEqual);
					};
				
					
					assert.notDeepEqual =
					notDeepEqual =
					function notDeepEqual(actual, expected, message) {
						
						if (_deepEqual(actual, expected) === true) 
							fail(actual, expected, message, 'notDeepEqual', notDeepEqual);
					};
					
					
					assert.deepEq_ = deepEqual;
					assert.notDeepEq_ = notDeepEqual;
					
					function _deepEqual(a, b) {
						
						if (a === b) 
							return true;
						
						if (is_Arguments(a)) 
							a = _Array_slice.call(a);
						
						if (is_Arguments(a)) 
							a = _Array_slice.call(a);
							
						
						var AType = obj_typeof(a);
						
						switch(AType){
							case 'Number':
							case 'Boolean':
							case 'String':
								return a == b;
							
							case 'RegExp':
							case 'Date':
								return (a).toString() === (b).toString();
						}
						
						if (is_Buffer(a) && is_Buffer(b)) {
							if (a.length != b.length)
								return false;
						 
							for (var i = 0; i < a.length; i++) {
							  if (a[i] != b[i])
								return false;
							}
						 
							return true;
						}
						
						if (!is_Object(a) && !is_Object(b)) 
							return a === b;
						
						return objEquiv(a, b);
					}
				
				
					function objEquiv(a, b) {
						
						var ka = obj_keys(a).sort(),
							kb = obj_keys(b).sort(),
							key, i;
					
						if (ka.length != kb.length)
							return false;
						
						i = ka.length;
						while ( --i !== -1) {
							if (ka[i] != kb[i])
								return false;
						}
						
						i = ka.length
						while (--i !== -1) {
							key = ka[i];
							
							if (!_deepEqual(a[key], b[key]))
								return false;
						}
						
						return true;
					}
				
				
				}());
				// end:source /src/assert/deepEqual.js
				// source /src/assert/has.js
				(function() {
					
					var has,
						hasNot;
				
					has =
					assert.has =
					function has(actual, expected, message) {
						_performHas(actual, expected, true, message, has);
					};
				
					hasNot = 
					assert.hasNot =
					function hasNot(actual, expected, message) {
						_performHas(actual, expected, false, message, hasNot);
					}
					
					assert.has_ = has;
					assert.hasNot_ = hasNot;
				
					// = private
					var OPERATOR = '\u2287';
				
					var t_Date = 'Date',
						t_Array = 'Array',
						t_Object = 'Object',
						t_String = 'String',
						t_RegExp = 'RegExp',
						t_Number = 'Number',
						t_Boolean = 'Boolean',
						t_Function = 'Function',
						t_NullOrUndefined = '<undefined>',
						t_Reference = '<reference-check>';
				
					function obj_typeof(x) {
						var type = Object
							.prototype
							.toString
							.call(x)
							.replace('[object ', '')
							.replace(']', '');
				
						switch (type) {
							case t_Date:
							case t_Array:
							case t_String:
							case t_RegExp:
							case t_Boolean:
							case t_Number:
							case t_Function:
								return type;
							case t_Object:
								if (typeof x.length === 'number'
									&& typeof x.splice === 'function'
									&& typeof x.indexOf === 'function') {
									// Array-Alike
									return t_Array;
								}
								
								return t_Object;
							case 'Null':
							case 'Undefined':
								return t_NullOrUndefined;
				
							default:
								// Not supported type.
								// Not possible to run `contains` check
								// -> perform simple `==` comparison
								return t_Reference;
						}
					}
				
					function _performHas(actual, expected, expectedResult, message, stackStartFunction) {
				
						var result = _has(actual, expected);
						if (result === expectedResult) 
							return;
						
				
						if (expectedResult === false && result !== true) {
							// structur missmatch
							return;
						}
						
						if (typeof result === 'string') 
							message = '(' + result + ') ' + (message || '');
						
						fail(actual, expected, message, OPERATOR, stackStartFunction);
					}
				
					function _has(a, b) {
				
						var AType = obj_typeof(a),
							BType = obj_typeof(b);
				
						var _AType, _BType;
				
						switch (AType) {
							case t_String:
								if (t_String === BType) 
									return a.indexOf(b) !== -1
										|| ('Not a substring of ' + a);
								
								if (t_RegExp === BType) 
									return b.test(a) || ('RegExp failed: ' + a);
								
				
								return 'Unexpected types: String-' + BType;
				
							case t_RegExp:
							case t_Date:
							case t_Number:
							case t_Boolean:
							case t_Function:
								return (a).toString() === (b).toString()
									|| ('Unexpected value: ' + a);
				
							case t_Reference:
								return a === b
									|| ('Reference check');
				
							case t_Object:
								if (t_String === BType) 
									return b in a
										|| ('Property expected:' + b);
								
								if (t_Object === BType) {
									for (var key in b) {
										if (key in a === false) 
											return 'Property expected: ' + key;
										
				
										_AType = obj_typeof(a[key]);
										_BType = obj_typeof(b[key]);
				
										if (_BType === t_NullOrUndefined) {
											// property existance
											continue;
										}
										if (_AType !== _BType) 
											return 'Type missmatch: ' + _AType + '-' + _BType;
										
										if (t_String === _AType) {
											if (a[key] !== b[key]) 
												return 'Unexpected value: ' + a[key];
											
											continue;
										}
				
										var result = _has(a[key], b[key]);
										if (result !== true) 
											return result;
									}
									return true;
								}
				
								return 'Unexpected types: Object-' + BType;
						}
				
						if (t_Array === AType) {
				
							switch (BType) {
								case t_Number:
								case t_String:
								case t_Boolean:
									return a.indexOf(b) !== -1
										|| ('Array should contain: ' + b);
				
								case t_Date:
								case t_RegExp:
								case t_Function:
									var val = (b).toString();
									return a.some(function(x) {
										return (x).toString() === val;
									}) || ('Array should contain: ' + val);
				
								case t_Array:
									var ib = 0,
										ibmax = b.length,
										ia,
										iamax = a.length;
									bloop: for (; ib < ibmax; ib++) {
				
										_BType = obj_typeof(b[ib]);
				
										switch (_BType) {
											case t_String:
											case t_Number:
											case t_Boolean:
											case t_RegExp:
											case t_Date:
											case t_Function:
												var result = _has(a, b[ib])
												if (result !== true) 
													return result;
												
												continue bloop;
				
											case t_Object:
											case t_Array:
												ia = 0;
												for (; ia < iamax; ia++) {
				
													if (_BType !== obj_typeof(a[ia])) 
														continue;
													
													if (_has(a[ia], b[ib]) === true) 
														break;
													
												}
				
												if (ia === iamax) 
													return _BType + ' is not a subset';
												
												continue bloop;
										}
									}
									return true;
							}
						}
				
						return 'Unexpected types: ' + AType + '-' + BType;
					}
				
				}());
				// end:source /src/assert/has.js
				// source /src/assert/is.js
				(function(){
					
					var is,
						isNot
						;
					
					
					is =
					assert.is =
					function is(actual, expected, message) {
						_performCheck(actual, expected, true, message, is);
					};
				
					isNot =
					assert.isNot =
					function isNot(actual, expected, message) {
						_performCheck(actual, expected, false, message, isNot);
					};
					
					
					assert.is_ = is;
					assert.isNot_ = isNot;
					
				
					
					function _performCheck(actual, expected, expectedResult, message, stackStartFunction) {
						var result = _is(actual, expected);
						if (result === expectedResult) 
							return;
						
						fail(actual, expected, message, '~~', stackStartFunction);
					}
					
					
					function _is(a, b){
						
						if (b == null) 
							return a == b;
						
						if (typeof b === 'string') {
							var AType = obj_typeof(a);
							
							switch(b) {
								case 'Object':
									return a != null && typeof a === 'object';
							}
							
							
							return  AType === b;
						}
						
						if (typeof b === 'function') 
							return a instanceof b;
						
						if (typeof b === 'object' && b.constructor) 
							return _is(a, b.constructor)
						
						return false;
					}
					
				}());
				// end:source /src/assert/is.js
				// source /src/assert/jquery.js
				(function(){
					assert.setDOMLibrary = setDOMLibrary;
					
					var $ = global.$ || global.jQuery || global.Zepto || global.Kimbo;
					if ($ == null) 
						return;
					
					setDOMLibrary($);
					
					function setDOMLibrary($) {
						
						[
							'eq_',
							'notEq_',
							
							'deepEq_',
							'notDeepEq_',
							
							'has_',
							'hasNot_',
							
							'is_',
							'isNot_'
						]
						.forEach(function(key){
							
							$.fn[key] = function assert_jquery(mix){
								var args = _Array_slice.call(arguments),
									message
									;
									
								if (is_Array(mix)) {
									message = args[args.length - 1];
									args = mix;
								}
								
								
								switch(key){
									case 'has_':
									case 'hasNot_':
										var selector = args[0];
										if (typeof selector !== 'string') 
											break;
										
										if (this[selector] != null && args.length !== 1) 
											break;
										
										var count = args[1],
											$els = this.find(selector);
										if ($els.length === 0) 
											$els = this.filter(selector);
										
										if ('has_' === key) {
											
											if (isNaN(count)) {
												assert_do('notEq_', $els.length, 0, message);
												return this;
											}
											
											assert_do('eq_', $els.length, count, message);
										}
										
										if ('hasNot_' === key) {
											
											if (isNaN(count)) {
												assert_do('eq_', $els.length, 0, message);
												return this;
											}
											
											assert_do('notEq_', $els.length, count, message);
										}
										
										return this;
									
									
								}
								
								var expected = args.pop(),
									fn = args.shift()
									;
									
								if (typeof fn === 'string') {
									
									assert_byProperty(key, this, fn, args, expected, message);
									return this;
								}
								
								if (typeof fn === 'function') {
									
									assert_byFunction(key, this, fn, expected, message);
									return this;
								}
								
								return this;
							};
							
							
							function assert_byProperty(key, $, prop, args, expected, message) {
								var val = $[prop];
								
								if (typeof val === 'function') 
									val = val.apply($, args);
								
								assert[key](val, expected, message);
							}
							
							function assert_byFunction(key, $, fn, expected, message) {
								var val = fn($);
								
								assert[key](val, expected, message);
							}
							
							function assert_do(key, actual, expected, message){
								
								assert[key](actual, expected, message);
							}
							
						});
						
					}
					
					
				}());
				// end:source /src/assert/jquery.js
				
				// source /src/listeners.js
				(function(){
					
					// wrap functions
					(function(lib, emit){
						
						for (var key in lib) {
							if (typeof lib[key] !== 'function') 
								continue;
							
							switch(key){
								case 'callback':
								case 'await':
								case 'avoid':
								case 'fail':
								case 'prepairStack':
									continue;
							}
							
							if (key[0] === key[0].toUpperCase()) 
								continue;
							
							lib[key] = wrapFn(lib[key]);
						}
						
						
						function wrapFn(fn) {
							return function assert_wrapFn(){
								
								var result;
								emit('start');
								
								try {
									result = fn.apply(this, arguments);
								} catch(error) {
									
									if (emit('fail', error) === false) 
										throw error;
									
									return null;
								}
								
								emit('success');
								
								return result;
							};
						}
						
					}(assert, emit));
					
					assert.on = function assert_on(type, listener) {
						
						if (_events[type] == null) 
							_events[type] = [];
						
						_events[type].push(listener);
					};
					
					assert.off = function assert_off(type, listener){
						
						var cbs = _events[type];
						if (cbs == null) 
							return;
						
						
						if (listener == null) {
							cbs.length = 0;
							return;
						}
						
						var i = cbs.length;
						while ( --i !== -1 ) {
							if (cbs[i] === listener)
								cbs.splice(i, 1);
						}
					};
					
					
					// = private
					
					
					var _events = {};
					
					function emit(type) {
							
						var cbs = _events[type];
						if (cbs == null) 
							return false;
						
						var i = cbs.length;
						if (i === 0) 
							return false;
						
						var args = _Array_slice.call(arguments, 1),
							fn;
							
						while ( --i !== -1 ) {
							
							fn = cbs[i];
							fn.apply(null, args);
						}
						
						return true;
					}
						
					
				}());
				// end:source /src/listeners.js
				
				exports.assert = obj_extend(assert.ok, assert);
				// end:source /src/exports.js
			}());
			
			assert = exports.assert;	
		}(global, {}));
		
		
		// end:source /.reference/atma/assertion/lib/assert.embed.js
		// source wrapper.js
		
		
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
			callback: function assert_callback(callback){
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
		
		/* GLOBALS */
		
		global.eq_ = assert.equal;
		global.notEq_ = assert.notEqual;
		global.deepEq_ = assert.deepEqual;
		global.notDeepEq_ = assert.notDeepEqual;
		global.strictEq_ = assert.strictEqual;
		global.notStrictEq_ = assert.notStrictEqual;
		global.has_ = assert.has;
		global.hasNot_ = assert.hasNot;
		global.is_ = assert.is;
		global.isNot_ = assert.isNot;
		
		
		// obsolete for underscored
		global.eq = assert.equal;
		global.notEq = assert.notEqual;
		global.deepEq = assert.deepEqual;
		global.notDeepEq = assert.notDeepEqual;
		global.strictEq = assert.strictEqual;
		global.notStrictEq = assert.notStrictEqual;
		global.has = assert.has;
		global.hasNot = assert.hasNot;
		global.is = assert.is;
		global.isNot = assert.isNot;
		
		// <!---
		
		function obj_extend(target, source) {
			for (var key in source) {
				target[key] = source[key];
			}
			return target;
		}
		
		// end:source wrapper.js
		
		
		assert.resolveData = function(stackData, base){
			
			var data = Object.extend({}, stackData),
				stack = stackData.stack.split('\n').splice(1),
				rgx_http = /http:\/\/([^\/]+)\//,
				rgx_local = RegExp.fromString(base.replace('file:///','')),
				rgx_file = /([^\(@]+\:\d+\:\d+)\)?$/;
			
			
			stack = ruqq.arr.map(stack, function(x){
				return x
						.replace(rgx_http, '')
						.replace(rgx_local, '')
						.replace('at ', '');
			});
			
			var file = rgx_file.exec(stack[0].trim());
			if (file) {
				var parts = file[1].split(':');
				
				data.file = parts[0];
				data.line = parts[1] << 0;
				data.col = parts[2] << 0;
			}else{
				console.warn('Filepath could not be parsed from', stack[0].trim());
			}
			
			
			data.stack = stack.join('\n');
			return data;
		};
		
	}(this));
	// end:source ../src/assert/assert.node.js
	// source ../src/node/action.js
	(function() {
		
		var _suite,
			_configs
			;
		
		var TestSuite = global.UTest;
			
		include.exports = {
			process: function(setts, done) {
				
				io.File.disableCache();
				logger.cfg('logCaller', false);
	
				var arg = setts.script || app.config.$cli.args[1],
					config;
			
				cfg_prepairSettings(setts, arg);
				
				config = cfg_loadConfig(setts);
					
				cfg_getEnv(setts, config);
				
				if (cfg_hasScripts(setts) === false) {
					cfg_getScripts(setts, config);
					
					
					if (arg && !(config.suites && config.suites[arg])) 
						return done('Argument is not resolved as a script, nor as a suite name: ' + arg);
					
					
					if (arg) {
						var suites = config.suites;
						for (var key in suites) {
							if (key !== arg)
								delete suites[key];
						}
						
						setts.suites = cfg_parseSuites(suites, setts.base);
					}
				}
				
				
				_configs = cfg_split(setts);
				
				if (_configs.length === 0) 
					return done('No scripts to test');
				
				
				var $before = config.$config && config.$config.$before,
					$after = config.$config && config.$config.$after
					;
				
				
				
				_suite = new RunnerSuite(_configs, setts);
				
				cfg_runConfigurationScript($before, function(){
					
					_suite.run(function(exitCode){
						
						cfg_runConfigurationScript($after, function(){
							
							process.exit(exitCode);
						});
					});	
				})
				
			
				
			}
		};
		
		
		
		// source utils/slave.js
		var slave_start;
		
		(function(){
			
			var PORT = 5777,
				HOST = '127.0.0.1'
				;
			
			slave_start = function(callback){
				
				app.runAction('shell', {
					command: {
						command: 'atma server',
						detached: true
					}
				}, function(error){
					
					if (error) 
						return callback(error);
					
					ensurePortIsBusy(function(error){
						
						if (error) 
							return callback(error);
						
						
						var url = 'http://%1:%2/utest/'.format(HOST, PORT);
						
						require('openurl').open(url, callback);
					}, 0);
				});
				
			};
			
			
			function ensurePortIsBusy(callback, tries) {
				
				if (tries > 10) 
					return callback('<server not responding>');
				
				if (tries > 3) 
					logger.warn('<Checking server>', tries);
				
				net_portIsAvailable(HOST, PORT, function(state){
					
					if (state === false) 
						return callback();
					
					
					setTimeout(function(){
						ensurePortIsBusy(callback, ++tries);
					}, 300);
				});
			}
			
		}());
		// end:source utils/slave.js
		// source utils/net.js
		var net_portIsAvailable;
		
		
		(function() {
		
			var TIMEOUT = 500;
		
			net_portIsAvailable = function(host, port, callback) {
		
				var socket = new (require('net').Socket),
					opened;
		
		
				socket.on('connect', function() {
					socket.end();
		
					opened = true;
				});
		
		
				socket.setTimeout(TIMEOUT)
				socket.on('timeout', function() {
					opened = false;
					socket.destroy()
				});
		
				socket.on('error', function(exception) {
					opened = false;
				});
		
				socket.on('close', function() {
					callback(opened === false);
				});
		
				socket.connect(port, host);
			};
		
		}());
		// end:source utils/net.js
		// source utils/io.js
		var io_connect,
			io_reset;
			
		(function(){
			
			var dfr, client;
			
			io_clean = function(){
				
				if (dfr == null) 
					return;
				
				if (dfr._resolved == null) {
					dfr = null;
					return;
				}
				
				var socket = dfr._resolved[0];
				
				socket.socket.disconnectSync();
				dfr = null;
			};
			
			io_connect = function(config){
				
				if (dfr) 
					return dfr;
				
				dfr = new Class.Deferred();
				
				
				if (client == null) 
					client = getClient();
				
				var port = config.port || 5777,
					url = 'http://localhost:%1/node'.format(port),
					
					socket = client.connect(url, {
						'connect timeout': 2000,
						'force new connection': true
					});
				
				socket
					.on('connect', function() {
						dfr.resolve(socket)
					})
			
					.on('error', function(error) {
						
						socket.socket.disconnectSync();
						socket.socket.removeAllListeners();
						
						dfr.reject(error);
					})
					
				
				return dfr;
			};
			
			
			function getClient(){
				//@ HACKY - io client workaround
				
				var _io = global.io;
				delete global.io;
				
				var client = require('socket.io-client');
				
				global.io = _io;
				
				return client;
			}
			
		}());
		// end:source utils/io.js
		// source utils/cfg.js
		var cfg_prepairSettings,
			cfg_loadConfig,
			cfg_runConfigurationScript,
			cfg_hasScripts,
			cfg_getScripts,
			cfg_parseSuites,
			cfg_getEnv,
			cfg_split,
			
			watch
			;
		
		(function(){
			
			cfg_prepairSettings = function(setts, script) {
					
				var base = setts.base;
				if (base) {
					base = new net.Uri(net.Uri.combine(base, '/'));
					
					if (base[0] === '/')
						// relative to CWD
						base = base.substring(1);
					
					
					if (base.isRelative())
						base = io.env.currentDir.combine(base);
					
				}
				else {
					base = io.env.currentDir;
				}
				
				setts.base = net.Uri.combine(base.toDir(), '/');
				setts.nodeScripts = [];
				setts.domScripts = [];
				setts.env = [];
				
				
				if (script == null) 
					return;
				
				if (script.indexOf('*') !== -1) {
					
					cfg_addScript(
						script,
						setts.base,
						setts.nodeScripts,
						setts.domScripts,
						(setts.browser && 'dom') || (setts.node && 'node')
					);
					return;
				}
				
				
				if (/\.[\w]+$/.test(script) === false) 
					script += '.test';
				
				if (!io.File.exists(base.combine(script))) {
					
					if (/\/?test.?\//.test(script) === false) {
						script = net.Uri.combine('test/', script);
						
						if (!io.File.exists(base.combine(script))) 
							return;
					}
				}
				
				cfg_addScript(
					script,
					setts.base,
					setts.nodeScripts,
					setts.domScripts,
					
					// if not defined, executor will be resolved from the path
					(setts.browser && 'dom') || (setts.node && 'node')
				);
				
				var ext = /\.\w{1,5}$/.exec(script)
				if (ext && ext[0] === '.test') {
					script = script.replace(/\.\w{1,5}$/, '.js');
					
					if (io.File.exists(base.combine(script))) 
						setts.env.push(script);
				}
				
			
				
			}; // cfg_prepair
			
			
			cfg_runConfigurationScript = function($script, done){
				if ($script == null) 
					return done();
				
				if (typeof $script === 'function') 
					return $script(done);
				
				if (typeof $script === 'string') {
					
					include
						.js($script + '::Script')
						.done(function(resp){
							
							if (!(resp && resp.Script && resp.Script.process)) {
								logger
									.error('<configuration script>', $script)
									.error(' is not loaded or `process` function not implemented')
									;
								
								done();
							}
							resp.Script.process(done);
						});
						
					return;
				}
				
				logger.error('Invalid configuration script', $config);
				done();
			}
			
			
			/**
			 * base: [String]
			 * env: [String]
			 * tests: String | [String]
			 */
			cfg_loadConfig = function(baseConfig) {
				
				var path = baseConfig.config;
					
				if (path == null) {
					path = /test.?[\\\/]?$/.test(baseConfig.base)
						? 'config.js'
						: 'test/config.js';
						
					path = net.Uri.combine(baseConfig.base, path);
				}
				
				var file = new io.File(path);
				
				if (file.exists() === false) 
					return {};
				
				
				return require(file.uri.toLocalFile());
			}
			
			cfg_getScripts = function(baseConfig, config) {
				
				if (config.tests) {
					
					var tests = config.tests,
						base = baseConfig.base,
						nodeScripts = baseConfig.nodeScripts,
						domScripts = baseConfig.domScripts,
						executor = baseConfig.exec;
						
					cfg_addScript(tests, base, nodeScripts, domScripts, executor);
				}
				
				baseConfig.suites = cfg_parseSuites(config.suites, baseConfig.base);
			};
			
			cfg_hasScripts = function(config) {
				if (!config)
					return false;
				
				if (arr_isEmpty(config.nodeScripts) === false)
					return true;
				
				if (arr_isEmpty(config.domScripts) === false)
					return true;
				
				
				return false;
			};
			
			cfg_parseSuites = function(suites, base) {
				var array = [],
					key, x, config;
				
				for (key in suites) {
					x = suites[key];
					
					config = {
						base: x.base || base,
						exec: x.exec,
						env: x.env,
						nodeScripts: [],
						domScripts: []
					};
					
					if (x.tests == null) {
						logger.error('Suite %s has no `tests`', key);
						continue;
					}
					
					cfg_addScript(
						x.tests,
						config.base,
						config.nodeScripts,
						config.domScripts,
						config.exec
					);
					
					
					array.push(config);
				}
				return array;
			};
			
			cfg_getEnv = function(setts, config) {
				
				if (typeof config.env === 'string')
					config.env = [ config.env ];
				
				if (Array.isArray(config.env)) 
					setts.env = ruqq.arr.distinct(setts.env.concat(config.env));
					
				if (!cfg_hasScripts(setts) || config.suites == null) 
					return;
				
				var path = (setts.nodeScripts && setts.nodeScripts[0]) || (setts.domScripts && setts.domScripts[0]),
					suite = suite_getForPath(config.suites, path)
					;
				
				if (suite && suite.env) {
					
					if (typeof suite.env === 'string') 
						suite.env = [ suite.env ];
					
					if (Array.isArray(suite.env)) 
						setts.env = ruqq.arr.distinct(setts.env.concat(suite.env));
				}
				
			};
			
			
			cfg_split = function(config) {
				// split config per executor
				var configs = [];
				if (!arr_isEmpty(config.domScripts) && !config.node) {
					configs.push({
						exec: 'browser',
						env: config.env,
						scripts: config.domScripts,
						base: config.base,
					});
				}
				
				if (!arr_isEmpty(config.nodeScripts) && !config.browser) {
					configs.push({
						exec: 'node',
						env: config.env,
						scripts: config.nodeScripts,
						base: config.base,
					});
				}
				
				if (config.suites) {
					
					ruqq.arr.each(config.suites, function(suite){
						configs = configs.concat(cfg_split(suite));
					});
					
				}
				
				return configs;
			}
			
			
				
			watch = function(base, resources, callback) {
				watch = function(){};
				
				
				base = new net.Uri(base);
				ruqq.arr.each(resources, function(url){
					
					url = url.replace(/^\/utest\//i, '');
					
					var uri = new net.Uri(url);
					if (uri.isRelative()) {
						uri = base.combine(uri);
					}
					
					var file = new io.File(uri);
					if (file.uri == null) {
						// some virtual files does not expose uri property
						return;
					}
					
					if (file.exists()) {
						io.watcher.watch(file.uri.toLocalFile(), function(){
							logger.log(' - file changed - '.green, file.uri.file.bold);
							io.File.clearCache(file.uri.toLocalFile());
							callback();
						});
					}
					else {
						var path = file.uri.toLocalFile();
						
						if (/\.reference\//i.test(path)) 
							return;
						
						if (/socket\.io/i.test(path)) 
							return;
						
						logger.warn('<utest: watcher> File 404 - ', path);
					}
				});
			};
			
			//= private
			
			function cfg_addScript(path, base, nodeScripts, domScripts, executor, forceAsPath) {
				
				if (Array.isArray(path)) {
					path.forEach(function(x){
						cfg_addScript(x, base, nodeScripts, domScripts, executor, forceAsPath);
					});
					return;
				}
				
				if (forceAsPath !== true && ~path.indexOf('*')) {
					// asPath here is actually to prevent recursion in case if
					// file, which is resolved by globbing, contains '*'
					
					var files = io
						.glob
						.readFiles(net.Uri.combine(base, path));
					
					if (files.length === 0) {
						logger.warn('<No files found. Base %s. Search %s', base, path);
					}
					
					files
						.forEach(function(file){
							path = file.uri.toRelativeString(base);
							
							cfg_addScript(path, base, nodeScripts, domScripts, executor, true);
						});
					return;
				}
				
				if (executor == null)
					executor = path_isForBrowser(path) ? 'dom' : 'node';
				
				
				if ('dom' === executor || 'browser' === executor)
					domScripts.push(path);
					
				if ('node' === executor)
					nodeScripts.push(path);
			}
			
			function path_isForNode(path) {
				return /\-node\.[\w]+$/.test(path) || /\/node\//.test(path);
			}
			
			function path_isForBrowser(path) {
				return /\-dom\.[\w]+$/.test(path) || /\/dom\//.test(path);
			}
			
			
			function path_matchTests(test, path){
				if (Array.isArray(test)) {
					return test.some(function(x){
						return path_matchTests(x, path);
					});
				}
				
				if (typeof test !== 'string') 
					return false;
				
				if (test.indexOf('*') === -1) {
					var a = test.toLowerCase(),
						b = path.toLowerCase()
						;
					return a.indexOf(b) !== -1 || b.indexOf(a) !== -1;
				}
			
				return io.glob.matchPath(test, path);
			}
			
			function suite_getForPath(suites, path){
				var key, suite;
				for(key in suites){
					suite = suites[key];
					
					if (path_matchTests(suite.tests, path)) 
						return suite;
				}
				
			}
			
		}());
		// end:source utils/cfg.js
		// source utils/logger.js
		(function(){
			
			var util = require('util');
			
			console.print = function(){
				var message = Array.prototype.slice.call(arguments).join(' ');
				
				util.print(message);
			};
			
		}());
		// end:source utils/logger.js
		
		// source Runner.js
		var status_blank = 1,
			status_connecting = 2,
			status_connected = 3,
			status_prepair = 4;
			status_testing = 5,
			status_ready = 6,
			util = require('util');
			
		
		var Runner = (function() {
		
			
			function utest_resolveFiles(config) {
				var files = [];
				
				if (arr_isArray(config)) {
					for (var i = 0, x, imax = config.length; i < imax; i++){
						x = config[i];
						
						files = files.concat(utest_resolveFiles(x));
					}
					return files;
				}
				
				var scripts = config.scripts,
					base = config.base;
				
				base = new net.Uri(base);
				
				for (var i = 0, x, imax = scripts.length; i < imax; i++){
					x = new net.Uri(scripts[i]);
					
					if (x.isRelative()) {
						x = base.combine(x);
					}
					
					x = new io.File(x);
					
					if (x.exists() === false) {
						console.error('File - 404 - ', x.uri.toLocalFile());
						continue;
					}
					files.push(x);
				}
				return files;
			}
			
		
			return Class({
				Base: Class.EventEmitter,
				Construct: function(config) {
					this.config = config;
					this.status = status_blank;
					this.files = utest_resolveFiles(config);
					
					this.suites = arr_isArray(config) ? config : [config];
					
					ruqq.arr.each(this.suites, function(x){
						x.files = utest_resolveFiles(x);
					});
				},
				notifyTest: function(url){
					logger.log('Test: ', url.replace(this.config.base, '').cyan.bold);
				},
				onComplete: function(stats) {
					this.status = status_ready;
		
					function count(key) {
						return ruqq.arr.aggr(stats, 0, function(x, aggr) {
							if (x.error) {
								logger.error(x.error);
								return 0;
							}
							
							if (x[key] == null) 
								return aggr;
							
							if (typeof x[key] === 'object' && 'length' in x[key]) {
								return x[key].length + aggr;
							}
							
							return x[key] + aggr;
						});
					}
					function aggr(key) {
						return ruqq.arr.aggr(stats, [], function(x, aggr){
							if (x[key] == null) 
								return;
							
							if (typeof x[key] === 'object' && 'length' in x[key]) {
								aggr.push.apply(aggr, x[key]);
								return;
							}
							aggr.push(x[key]);
						})
					}
		
					var total = count('total'),
						failed = count('failed'),
						timeouts = count('timeouts'),
						callbacks = count('callbacks'),
						errors = count('errors'),
						browsers = stats.length;
		
					if (total === 0) {
						console.error('No assertions');
						failed++;
					}
					
					if (errors > 0) {
						failed++;
					}
					
					if (callbacks !== 0 || timeouts !== 0) {
						
						if (callbacks) 
							logger
								.error('Expected callbacks were not fired. More info...')
								.log(aggr('callbacks'))
								;
								
						if (timeouts) 
							logger
								.error('Asynchronous suites were not completed. More info...')
								.log(aggr('timeouts'))
								;
						
						
						!failed && failed++;
					}
					
		
					logger
						.log('\n\nDone. '[failed ? 'red' : 'green'].bold)
						.log(
							'bold<Assertions>: bold<green<%1>>(bold<red<%2>>)'
								.format(Math.max(total - failed, 0), failed)
								.color)
						.log(
							'bold<Timeouts>: bold<%1<%2>>'
								.format(timeouts ? 'red' : 'green', timeouts)
								.color)
						.log(
							'bold<Failed Callbacks>: bold<green<%1>>'
								.format(callbacks)
								.color)
						;
		
					this.failed = failed;
					this.stats = stats;
					
					this.trigger('complete', this);
					
				},
				
				getResources: function(){
					if (this.stats == null) 
						return [];
					
					
					var resources = this.stats.resources || (this.stats[0] && this.stats[0].resources);
		
					if (resources == null && this.getResources) 
						resources = this.getResources();
						
					return resources || [];
				},
				
				// assertion events
				
				onFailure: function(data){
					if (!data.stack) {
						logger.error('Unknown exception - ', data);
						return;
					}
					
					var base = this.suites[0].base || '';
					
					data = assert.resolveData(data, base);
					
					logger.log('');
					
					if (data.file && data.line != null) {
						
						var path = data
								.file
								.replace(/(\/)?utest\//i, '$1')
								.replace(/\?.+/, '')
								.replace(/^\//, ''),
								
							uri = new net.Uri(base).combine(path),
							source = new io.File(uri).read(),
							lines = source.split(/\r\n|\r|\n/g),
							line = lines[data.line - 1],
							code = line && line.trim()
							;
						
						if ('actual' in data || 'expected' in data) {
							var msg = '%s bold<red<↔>> %s';
											
							logger.log(msg.color, data.actual, data.expected);
						}
						
						if (data.message) 
							logger.log(' :: '.red.bold + data.message.yellow);
							
						logger
							.log('  bold<%1>'.color.format(path))
							.log('  bold<cyan< → >> bold<%1 |> bold<red< %2 >>'.color.format(data.line + 1, code))
							.log('');
						
						
						return;
					}
						
					
					logger
						.error(data.message)
						.error(data.stack);
					
				},
				
				onSuccess: function(){
					util.print(' |'.green.bold);
				}
			});
		
			
		}());
		// end:source Runner.js
		// source RunnerClient.js
		var RunnerClient = Class({
			Base: Runner,
			run: function(done) {
				
				
				this.status = status_connecting;
				
				var that = this,
					config = this.config,
					port = config.port || 5777
					;
					
				
				io_connect(this.config)
				
					.fail(function(error){
						
						io_clean();
						
						if (that.startServer === true) {
								
							var msg = 'Test server connection error - http://localhost:%1/utest';
							done(msg.format(port));
							return;
						}
						
						
						that.startServer = true;
						logger.log('<utest:server not started> bold<green<starting...>>'.color)
						
						slave_start(function(error){
							
							if (error) 
								return done('Failed to start server: ' + error);
							
							that.run(done);
						})
						
					})
					
					.done(function(socket){
						
						logger.log('<server> connected'.green.bold);
						
						that.socket = socket;
						
						
						socket
							.on('server:utest:end', function(){
								that.onComplete.apply(that, arguments);
							})
					
							.on('server:error', function(message) {
								that.socket.socket.disconnectSync();
								
								logger.error(message);
								done(1);
							})
					
							.on('server:log', function(type, args) {
								var fn = console[type] || console.log;
								fn.apply(console, args);
							})
					
							.on('slave:start', function(stats) {
								var message = '#{browser.name} #{browser.version}'.bold;
								logger
									.log(message.format(stats.userAgent))
									.log('');
							})
							.on('slave:end', function(stats) {
								logger.log('Slave completed'[stats.failed ? 'red' : 'green']);
							})
					
							.on('slave:error', function(error) {
								logger.error(error);
							})
							
							.on('slave:utest:script', function(info){
								that.notifyTest(info.script);
							})
					
							.on('slave:assert:failure', function(args) {
								var data = args[0];
								
								that.onFailure(data);
								
							})
					
							.on('slave:assert:success', that.onSuccess.bind(that))
							;
						
						
						// RUN
						
						that.status = status_connected;
						that.run = that.runTests;
						that.run();
					});
		
			},
		
			runTests: function() {
				logger.log(' -  running tests  -  ', Date.format(new Date(), 'HH:mm:ss'));
				
				switch (this.status) {
					case status_blank:
					case status_connected:
					case status_ready:
						this.status = status_testing;
						this.socket.emit('client:utest', this.suites);
						return;
				}
				logger.warn('Server is not ready', this.status);
			}
		});
		// end:source RunnerClient.js
		// source RunnerNode.js
		var RunnerNode = (function() {
		
			function resource_clear(resource) {
				
				var bin = include.getResources();
				
				
				for (var type in bin) {
					for(var key in bin[type]){
						if (bin[type][key] === resource){
							delete bin[type][key];
							break;
						}
					}
				}
				
				if (resource.includes) {
					ruqq.arr.each(resource.includes, function(data){
						resource_clear(data.resource);
					});
				}
			}
			
			function resource_aggrIncludes(resource, aggr) {
				if (resource.url && aggr.indexOf(resource.url) === -1) {
					aggr.push(resource.url);
				}
				if (resource.includes) {
					ruqq.arr.each(resource.includes, function(data){
						resource_aggrIncludes(data.resource, aggr);
					});
				}
			}
			
			function suite_loadEnv(runner, suite, callback) {
				var base = suite.base,
					env = suite.env;
				
				if (env == null) {
					callback();
					return;
				}
				
				if (typeof env === 'string') 
					env = [ env ];
				
				
				if (Array.isArray(env) === false) {
					logger.warn('"env" property should be an array of strings', env);
					callback();
					return;
				}
				
				var resource = include
					.instance(io.env.currentDir.toDir());
				
				base = new net.Uri(base);
				ruqq.arr.each(env, function(x){
					var	parts = x.split('::'),
						src = parts[0],
						alias = parts[1],
						file = new io.File(base.combine(src[0] === '/' ? src.substring(1) : src))
						;
					if (file.exists() === false) {
						logger.warn('Resource from Env - 404 -', x);
						return;
					}
					
					var path = file.uri.toString();
					if (alias) 
						path += '::' + alias;
					
					resource.inject(path);
				});
				
				resource.done(function(resp){
					
					setTimeout(function(){
						var key, lib;
						for(key in resp) {
							lib = resp[key];
							
							if (lib == null) {
								
								if (global[key] == null) {
									logger
										.log('<utest:Environment> Loaded dependency has no exports `%s`.'.yellow.bold, key)
										.log('yellow<Should it be global variables, to bold<dismiss> this error use smth like this:>'.color)
										.log('`{ env: [ "someLib.js::globalVarName" ] }`'.bold)
										;
								}
								continue;
							}
							
							global[key] = lib;
						}
						
						callback(resp);
					});
				});
				
				runner.envResource = resource;
			}
			
			var _suites = null,
				_suite = null,
				_suiteIndex = -1,
				
				_runner = null;
				
				
			function suite_next(callback) {
				_suite = _suites[++_suiteIndex];
				
				if (_suite == null){
					
					_runner.onComplete(_runner.stats);
					return;
				}
				
				_runner.files = _suite.files;
				_runner.config = _suite;
				
				suite_loadEnv(_runner, _suite, callback);
			}
		
			return Class({
				Base: Runner,
				Construct: function() {
					assert.onsuccess = this.onSuccess.bind(this);
					assert.onfailure = this.onFailure.bind(this);
					
					Class.bind(this, 'singleComplete', 'runTests', 'process');
					
					_runner = this;
				},
				run: function() {
					if (status_ready !== this.status && status_blank !== this.status) {
						logger.warn('Node is busy ... ', this.status);
						return;
					}
					this.status = status_prepair;
					this.runTests();
				},
				
				
				runTests: function() {
					
					this.index = -1;
					this.status = status_testing;
					this.stats = [];
					this.clearResources();
					
					_suites = this.suites;
					_suiteIndex = -1;
					
					suite_next(this.process);
				},
		
				singleComplete: function() {
					this.stats.push({
						url: this.files[this.index].uri.toString(),
						total: assert.total,
						failed: assert.failed,
						timeouts: assert.timeouts,
						errors: assert.errors,
						callbacks: assert.callbacks,
					});
		
					this.process();
				},
				process: function() {
					if (++this.index > this.files.length - 1) {
						this.index = -1;
						suite_next(this.process);
						return;
					}
					
					assert.reset();
					TestSuite.clear();
		
					var that = this,
						url = this.files[this.index].uri.toString();
		
					
					this.notifyTest(url);
		
					var incl = include
						.cfg('path', _suite.base)
						.instance(url)
						.js(url)
						.done(function(resp) {
						
						process.nextTick(function() {
							TestSuite.run(that.singleComplete);
						});
					});
		
					this.resources.push(incl);
				},
		
				clearResources: function() {
					this.resources && ruqq.arr.each(this.resources, resource_clear);
					this.envResource && resource_clear(this.envResource);
					
					this.resources = [];
					this.envResource = null;
				},
		
				getResources: function() {
					var arr = [];
					
					this.envResource &&
						resource_aggrIncludes(this.envResource, arr);
				
					ruqq.arr.aggr(this.resources, arr, resource_aggrIncludes);
					return arr;
				}
			});
		
		}());
		// end:source RunnerNode.js
		
		// source Suite.js
		var RunnerSuite = Class({
			Construct: function(configs, settings) {
				
				/**
				 *	this.watch
				 *	this.base
				 */
				this.handleConfig(configs);
		
				this.base = settings.base;
				this.watch = settings.watch;
				
				logger(90).log('RunnerSuite:', configs, settings);
			},
			
			closeSockets: function(){
				ruqq.arr.each(this.runners, function(x){
					x.socket && x.socket.socket && x.socket.socket.disconnectSync();
				});
			},
			
			getFailed: function(){
				return ruqq.arr.aggr(this.runners, 0, function(x, aggr) {
					return aggr + x.failed;
				});
			},
			
			getResources: function(){
				return ruqq.arr.aggr(this.runners, [], function(x, aggr) {
					return aggr.concat(x.getResources());
				});
			},
			
			Self: {
				
				onComplete: function(){
					
					if (this.watch !== true) {
						
						this.closeSockets();
						
						var failed = this.getFailed();
						
						logger
							.log('')
							.log(failed === 0 ? 'Success'.green.bold : 'Failed'.red.bold);
						
						this.callback(failed);
						return;
					}
					
					closeSocketsOnExit(this);
					watch(this.base, this.getResources(), this.runTests);
					logger.log(' - watcher active'.yellow);
				},
				
				process: function(){
					var runner = this.runners[++this.index];
					
					if (runner == null) {
						this.onComplete();
						return;
					}
					runner.run(this.callback);
				},
				
				runTests: function(){
					this.index = -1;
					this.process();
				},
			},
			run: function(done){
				this.callback = done;
				this.runners = [];
				
				
				if (this.cfgBrowser) 
					this.runners.push(new RunnerClient(this.cfgBrowser));
				
				if (this.cfgNode)
					this.runners.push(new RunnerNode(this.cfgNode));
					
				this.runners.forEach(function(runner){
					runner.on('complete', this.process);
				}, this);
				
				this.runTests();
			},
			
			
			
			handleConfig: function(mix) {
				if (Array.isArray(mix)) {
					for (var i = 0, imax = mix.length; i < imax; i++) {
						this.handleSingle(mix[i]);
					}
					return;
				}
				this.handleSingle(mix);
			},
			handleSingle: function(config) {
				
				if (this.base == null && config.base) {
					this.base = config;
				}
				
				if (this.watch == null && config.watch) {
					this.watch = config.watch;
				}
		
				if ('browser' === config.exec || 'dom' === config.exec) {
					cfg_add(this, 'cfgBrowser', config);
					return;
				}
		
				cfg_add(this, 'cfgNode', config);
			}
		});
		
		function cfg_add(that, prop, value) {
			if (that[prop] == null) {
				that[prop] = value;
				return;
			}
			if (Array.isArray(that[prop])) {
				that[prop].push(value);
				return;
			}
		
			that[prop] = [that[prop], value];
		}
		function closeSocketsOnExit(suite) {
			closeSocketsOnExit = function() {};
		
			var readLine = require('readline');
			if (process.platform === 'win32') {
				var rl = readLine.createInterface({
					input: process.stdin,
					output: process.stdout
				});
		
				rl.on('SIGINT', function() {
					process.emit('SIGINT');
				});
		
			}
		
			process.on('SIGINT', function() {
				suite.closeSockets();
				process.exit();
			});
		
		}
		// end:source Suite.js
		
		// source utest.extend.js
		
		
		UTest.getSocket = function(callback){
			
			var cfg = _suite.cfgNode || _suite.cfgBrowser;
			
			io_connect(cfg)
				.done(function(socket){
					
					callback(socket, cfg);
				})
				.fail(function(error){
					
					logger
						.error('<Exit> server connection is not established.', error)
						.log('Executed `atma server`?'.bold)
						;
				});
		};
		
		UTest.getConfig = Runner.getCurrentConfigs;
		// end:source utest.extend.js
			
	}());
	// end:source ../src/node/action.js

}());


// source ../vendor/sinon.js
// source sinon.js
/*jslint eqeqeq: false, onevar: false, forin: true, nomen: false, regexp: false, plusplus: false*/
/*global module, require, __dirname, document*/
/**
 * Sinon core utilities. For internal use only.
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @license BSD
 *
 * Copyright (c) 2010-2013 Christian Johansen
 */
"use strict";

var sinon = (function (buster) {
    var div = typeof document != "undefined" && document.createElement("div");
    var hasOwn = Object.prototype.hasOwnProperty;

    function isDOMNode(obj) {
        var success = false;

        try {
            obj.appendChild(div);
            success = div.parentNode == obj;
        } catch (e) {
            return false;
        } finally {
            try {
                obj.removeChild(div);
            } catch (e) {
                // Remove failed, not much we can do about that
            }
        }

        return success;
    }

    function isElement(obj) {
        return div && obj && obj.nodeType === 1 && isDOMNode(obj);
    }

    function isFunction(obj) {
        return typeof obj === "function" || !!(obj && obj.constructor && obj.call && obj.apply);
    }

    function mirrorProperties(target, source) {
        for (var prop in source) {
            if (!hasOwn.call(target, prop)) {
                target[prop] = source[prop];
            }
        }
    }

    function isRestorable (obj) {
        return typeof obj === "function" && typeof obj.restore === "function" && obj.restore.sinon;
    }

    var sinon = {
        wrapMethod: function wrapMethod(object, property, method) {
            if (!object) {
                throw new TypeError("Should wrap property of object");
            }

            if (typeof method != "function") {
                throw new TypeError("Method wrapper should be function");
            }

            var wrappedMethod = object[property];

            if (!isFunction(wrappedMethod)) {
                throw new TypeError("Attempted to wrap " + (typeof wrappedMethod) + " property " +
                                    property + " as function");
            }

            if (wrappedMethod.restore && wrappedMethod.restore.sinon) {
                throw new TypeError("Attempted to wrap " + property + " which is already wrapped");
            }

            if (wrappedMethod.calledBefore) {
                var verb = !!wrappedMethod.returns ? "stubbed" : "spied on";
                throw new TypeError("Attempted to wrap " + property + " which is already " + verb);
            }

            // IE 8 does not support hasOwnProperty on the window object.
            var owned = hasOwn.call(object, property);
            object[property] = method;
            method.displayName = property;

            method.restore = function () {
                // For prototype properties try to reset by delete first.
                // If this fails (ex: localStorage on mobile safari) then force a reset
                // via direct assignment.
                if (!owned) {
                    delete object[property];
                }
                if (object[property] === method) {
                    object[property] = wrappedMethod;
                }
            };

            method.restore.sinon = true;
            mirrorProperties(method, wrappedMethod);

            return method;
        },

        extend: function extend(target) {
            for (var i = 1, l = arguments.length; i < l; i += 1) {
                for (var prop in arguments[i]) {
                    if (arguments[i].hasOwnProperty(prop)) {
                        target[prop] = arguments[i][prop];
                    }

                    // DONT ENUM bug, only care about toString
                    if (arguments[i].hasOwnProperty("toString") &&
                        arguments[i].toString != target.toString) {
                        target.toString = arguments[i].toString;
                    }
                }
            }

            return target;
        },

        create: function create(proto) {
            var F = function () {};
            F.prototype = proto;
            return new F();
        },

        deepEqual: function deepEqual(a, b) {
            if (sinon.match && sinon.match.isMatcher(a)) {
                return a.test(b);
            }
            if (typeof a != "object" || typeof b != "object") {
                return a === b;
            }

            if (isElement(a) || isElement(b)) {
                return a === b;
            }

            if (a === b) {
                return true;
            }

            if ((a === null && b !== null) || (a !== null && b === null)) {
                return false;
            }

            var aString = Object.prototype.toString.call(a);
            if (aString != Object.prototype.toString.call(b)) {
                return false;
            }

            if (aString == "[object Array]") {
                if (a.length !== b.length) {
                    return false;
                }

                for (var i = 0, l = a.length; i < l; i += 1) {
                    if (!deepEqual(a[i], b[i])) {
                        return false;
                    }
                }

                return true;
            }

            if (aString == "[object Date]") {
                return a.valueOf() === b.valueOf();
            }

            var prop, aLength = 0, bLength = 0;

            for (prop in a) {
                aLength += 1;

                if (!deepEqual(a[prop], b[prop])) {
                    return false;
                }
            }

            for (prop in b) {
                bLength += 1;
            }

            return aLength == bLength;
        },

        functionName: function functionName(func) {
            var name = func.displayName || func.name;

            // Use function decomposition as a last resort to get function
            // name. Does not rely on function decomposition to work - if it
            // doesn't debugging will be slightly less informative
            // (i.e. toString will say 'spy' rather than 'myFunc').
            if (!name) {
                var matches = func.toString().match(/function ([^\s\(]+)/);
                name = matches && matches[1];
            }

            return name;
        },

        functionToString: function toString() {
            if (this.getCall && this.callCount) {
                var thisValue, prop, i = this.callCount;

                while (i--) {
                    thisValue = this.getCall(i).thisValue;

                    for (prop in thisValue) {
                        if (thisValue[prop] === this) {
                            return prop;
                        }
                    }
                }
            }

            return this.displayName || "sinon fake";
        },

        getConfig: function (custom) {
            var config = {};
            custom = custom || {};
            var defaults = sinon.defaultConfig;

            for (var prop in defaults) {
                if (defaults.hasOwnProperty(prop)) {
                    config[prop] = custom.hasOwnProperty(prop) ? custom[prop] : defaults[prop];
                }
            }

            return config;
        },

        format: function (val) {
            return "" + val;
        },

        defaultConfig: {
            injectIntoThis: true,
            injectInto: null,
            properties: ["spy", "stub", "mock", "clock", "server", "requests"],
            useFakeTimers: true,
            useFakeServer: true
        },

        timesInWords: function timesInWords(count) {
            return count == 1 && "once" ||
                count == 2 && "twice" ||
                count == 3 && "thrice" ||
                (count || 0) + " times";
        },

        calledInOrder: function (spies) {
            for (var i = 1, l = spies.length; i < l; i++) {
                if (!spies[i - 1].calledBefore(spies[i]) || !spies[i].called) {
                    return false;
                }
            }

            return true;
        },

        orderByFirstCall: function (spies) {
            return spies.sort(function (a, b) {
                // uuid, won't ever be equal
                var aCall = a.getCall(0);
                var bCall = b.getCall(0);
                var aId = aCall && aCall.callId || -1;
                var bId = bCall && bCall.callId || -1;

                return aId < bId ? -1 : 1;
            });
        },

        log: function () {},

        logError: function (label, err) {
            var msg = label + " threw exception: "
            sinon.log(msg + "[" + err.name + "] " + err.message);
            if (err.stack) { sinon.log(err.stack); }

            setTimeout(function () {
                err.message = msg + err.message;
                throw err;
            }, 0);
        },

        typeOf: function (value) {
            if (value === null) {
                return "null";
            }
            else if (value === undefined) {
                return "undefined";
            }
            var string = Object.prototype.toString.call(value);
            return string.substring(8, string.length - 1).toLowerCase();
        },

        createStubInstance: function (constructor) {
            if (typeof constructor !== "function") {
                throw new TypeError("The constructor should be a function.");
            }
            return sinon.stub(sinon.create(constructor.prototype));
        },

        restore: function (object) {
            if (object !== null && typeof object === "object") {
                for (var prop in object) {
                    if (isRestorable(object[prop])) {
                        object[prop].restore();
                    }
                }
            }
            else if (isRestorable(object)) {
                object.restore();
            }
        }
    };

    
    return sinon;
}());

// source spy.js
/**
  * @depend ../sinon.js
  * @depend call.js
  */
/*jslint eqeqeq: false, onevar: false, plusplus: false*/
/*global module, require, sinon*/
/**
  * Spy functions
  *
  * @author Christian Johansen (christian@cjohansen.no)
  * @license BSD
  *
  * Copyright (c) 2010-2013 Christian Johansen
  */
"use strict";

(function (sinon) {
    var push = Array.prototype.push;
    var slice = Array.prototype.slice;
    var callId = 0;

    
    function spy(object, property) {
        if (!property && typeof object == "function") {
            return spy.create(object);
        }

        if (!object && !property) {
            return spy.create(function () { });
        }

        var method = object[property];
        return sinon.wrapMethod(object, property, spy.create(method));
    }

    function matchingFake(fakes, args, strict) {
        if (!fakes) {
            return;
        }

        var alen = args.length;

        for (var i = 0, l = fakes.length; i < l; i++) {
            if (fakes[i].matches(args, strict)) {
                return fakes[i];
            }
        }
    }

    function incrementCallCount() {
        this.called = true;
        this.callCount += 1;
        this.notCalled = false;
        this.calledOnce = this.callCount == 1;
        this.calledTwice = this.callCount == 2;
        this.calledThrice = this.callCount == 3;
    }

    function createCallProperties() {
        this.firstCall = this.getCall(0);
        this.secondCall = this.getCall(1);
        this.thirdCall = this.getCall(2);
        this.lastCall = this.getCall(this.callCount - 1);
    }

    var vars = "a,b,c,d,e,f,g,h,i,j,k,l";
    function createProxy(func) {
        // Retain the function length:
        var p;
        if (func.length) {
            eval("p = (function proxy(" + vars.substring(0, func.length * 2 - 1) +
                ") { return p.invoke(func, this, slice.call(arguments)); });");
        }
        else {
            p = function proxy() {
                return p.invoke(func, this, slice.call(arguments));
            };
        }
        return p;
    }

    var uuid = 0;

    // Public API
    var spyApi = {
        reset: function () {
            this.called = false;
            this.notCalled = true;
            this.calledOnce = false;
            this.calledTwice = false;
            this.calledThrice = false;
            this.callCount = 0;
            this.firstCall = null;
            this.secondCall = null;
            this.thirdCall = null;
            this.lastCall = null;
            this.args = [];
            this.returnValues = [];
            this.thisValues = [];
            this.exceptions = [];
            this.callIds = [];
            if (this.fakes) {
                for (var i = 0; i < this.fakes.length; i++) {
                    this.fakes[i].reset();
                }
            }
        },

        create: function create(func) {
            var name;

            if (typeof func != "function") {
                func = function () { };
            } else {
                name = sinon.functionName(func);
            }

            var proxy = createProxy(func);

            sinon.extend(proxy, spy);
            delete proxy.create;
            sinon.extend(proxy, func);

            proxy.reset();
            proxy.prototype = func.prototype;
            proxy.displayName = name || "spy";
            proxy.toString = sinon.functionToString;
            proxy._create = sinon.spy.create;
            proxy.id = "spy#" + uuid++;

            return proxy;
        },

        invoke: function invoke(func, thisValue, args) {
            var matching = matchingFake(this.fakes, args);
            var exception, returnValue;

            incrementCallCount.call(this);
            push.call(this.thisValues, thisValue);
            push.call(this.args, args);
            push.call(this.callIds, callId++);

            try {
                if (matching) {
                    returnValue = matching.invoke(func, thisValue, args);
                } else {
                    returnValue = (this.func || func).apply(thisValue, args);
                }
            } catch (e) {
                push.call(this.returnValues, undefined);
                exception = e;
                throw e;
            } finally {
                push.call(this.exceptions, exception);
            }

            push.call(this.returnValues, returnValue);

            createCallProperties.call(this);

            return returnValue;
        },

        getCall: function getCall(i) {
            if (i < 0 || i >= this.callCount) {
                return null;
            }

            return sinon.spyCall(this, this.thisValues[i], this.args[i],
                                    this.returnValues[i], this.exceptions[i],
                                    this.callIds[i]);
        },

        calledBefore: function calledBefore(spyFn) {
            if (!this.called) {
                return false;
            }

            if (!spyFn.called) {
                return true;
            }

            return this.callIds[0] < spyFn.callIds[spyFn.callIds.length - 1];
        },

        calledAfter: function calledAfter(spyFn) {
            if (!this.called || !spyFn.called) {
                return false;
            }

            return this.callIds[this.callCount - 1] > spyFn.callIds[spyFn.callCount - 1];
        },

        withArgs: function () {
            var args = slice.call(arguments);

            if (this.fakes) {
                var match = matchingFake(this.fakes, args, true);

                if (match) {
                    return match;
                }
            } else {
                this.fakes = [];
            }

            var original = this;
            var fake = this._create();
            fake.matchingAguments = args;
            push.call(this.fakes, fake);

            fake.withArgs = function () {
                return original.withArgs.apply(original, arguments);
            };

            for (var i = 0; i < this.args.length; i++) {
                if (fake.matches(this.args[i])) {
                    incrementCallCount.call(fake);
                    push.call(fake.thisValues, this.thisValues[i]);
                    push.call(fake.args, this.args[i]);
                    push.call(fake.returnValues, this.returnValues[i]);
                    push.call(fake.exceptions, this.exceptions[i]);
                    push.call(fake.callIds, this.callIds[i]);
                }
            }
            createCallProperties.call(fake);

            return fake;
        },

        matches: function (args, strict) {
            var margs = this.matchingAguments;

            if (margs.length <= args.length &&
                sinon.deepEqual(margs, args.slice(0, margs.length))) {
                return !strict || margs.length == args.length;
            }
        },

        printf: function (format) {
            var spy = this;
            var args = slice.call(arguments, 1);
            var formatter;

            return (format || "").replace(/%(.)/g, function (match, specifyer) {
                formatter = spyApi.formatters[specifyer];

                if (typeof formatter == "function") {
                    return formatter.call(null, spy, args);
                } else if (!isNaN(parseInt(specifyer), 10)) {
                    return sinon.format(args[specifyer - 1]);
                }

                return "%" + specifyer;
            });
        }
    };

    function delegateToCalls(method, matchAny, actual, notCalled) {
        spyApi[method] = function () {
            if (!this.called) {
                if (notCalled) {
                    return notCalled.apply(this, arguments);
                }
                return false;
            }

            var currentCall;
            var matches = 0;

            for (var i = 0, l = this.callCount; i < l; i += 1) {
                currentCall = this.getCall(i);

                if (currentCall[actual || method].apply(currentCall, arguments)) {
                    matches += 1;

                    if (matchAny) {
                        return true;
                    }
                }
            }

            return matches === this.callCount;
        };
    }

    delegateToCalls("calledOn", true);
    delegateToCalls("alwaysCalledOn", false, "calledOn");
    delegateToCalls("calledWith", true);
    delegateToCalls("calledWithMatch", true);
    delegateToCalls("alwaysCalledWith", false, "calledWith");
    delegateToCalls("alwaysCalledWithMatch", false, "calledWithMatch");
    delegateToCalls("calledWithExactly", true);
    delegateToCalls("alwaysCalledWithExactly", false, "calledWithExactly");
    delegateToCalls("neverCalledWith", false, "notCalledWith",
        function () { return true; });
    delegateToCalls("neverCalledWithMatch", false, "notCalledWithMatch",
        function () { return true; });
    delegateToCalls("threw", true);
    delegateToCalls("alwaysThrew", false, "threw");
    delegateToCalls("returned", true);
    delegateToCalls("alwaysReturned", false, "returned");
    delegateToCalls("calledWithNew", true);
    delegateToCalls("alwaysCalledWithNew", false, "calledWithNew");
    delegateToCalls("callArg", false, "callArgWith", function () {
        throw new Error(this.toString() + " cannot call arg since it was not yet invoked.");
    });
    spyApi.callArgWith = spyApi.callArg;
    delegateToCalls("callArgOn", false, "callArgOnWith", function () {
        throw new Error(this.toString() + " cannot call arg since it was not yet invoked.");
    });
    spyApi.callArgOnWith = spyApi.callArgOn;
    delegateToCalls("yield", false, "yield", function () {
        throw new Error(this.toString() + " cannot yield since it was not yet invoked.");
    });
    // "invokeCallback" is an alias for "yield" since "yield" is invalid in strict mode.
    spyApi.invokeCallback = spyApi.yield;
    delegateToCalls("yieldOn", false, "yieldOn", function () {
        throw new Error(this.toString() + " cannot yield since it was not yet invoked.");
    });
    delegateToCalls("yieldTo", false, "yieldTo", function (property) {
        throw new Error(this.toString() + " cannot yield to '" + property +
            "' since it was not yet invoked.");
    });
    delegateToCalls("yieldToOn", false, "yieldToOn", function (property) {
        throw new Error(this.toString() + " cannot yield to '" + property +
            "' since it was not yet invoked.");
    });

    spyApi.formatters = {
        "c": function (spy) {
            return sinon.timesInWords(spy.callCount);
        },

        "n": function (spy) {
            return spy.toString();
        },

        "C": function (spy) {
            var calls = [];

            for (var i = 0, l = spy.callCount; i < l; ++i) {
                var stringifiedCall = "    " + spy.getCall(i).toString();
                if (/\n/.test(calls[i - 1])) {
                    stringifiedCall = "\n" + stringifiedCall;
                }
                push.call(calls, stringifiedCall);
            }

            return calls.length > 0 ? "\n" + calls.join("\n") : "";
        },

        "t": function (spy) {
            var objects = [];

            for (var i = 0, l = spy.callCount; i < l; ++i) {
                push.call(objects, sinon.format(spy.thisValues[i]));
            }

            return objects.join(", ");
        },

        "*": function (spy, args) {
            var formatted = [];

            for (var i = 0, l = args.length; i < l; ++i) {
                push.call(formatted, sinon.format(args[i]));
            }

            return formatted.join(", ");
        }
    };

    sinon.extend(spy, spyApi);

    spy.spyCall = sinon.spyCall;

    

    sinon.spy = spy;
    
}(sinon));

// source call.js
/**
  * @depend ../sinon.js
  * @depend match.js
  */
/*jslint eqeqeq: false, onevar: false, plusplus: false*/
/*global module, require, sinon*/
/**
  * Spy calls
  *
  * @author Christian Johansen (christian@cjohansen.no)
  * @author Maximilian Antoni (mail@maxantoni.de)
  * @license BSD
  *
  * Copyright (c) 2010-2013 Christian Johansen
  * Copyright (c) 2013 Maximilian Antoni
  */
"use strict";

(function (sinon) {
    
    function throwYieldError(proxy, text, args) {
        var msg = sinon.functionName(proxy) + text;
        if (args.length) {
            msg += " Received [" + slice.call(args).join(", ") + "]";
        }
        throw new Error(msg);
    }

    var slice = Array.prototype.slice;

    var callProto = {
        calledOn: function calledOn(thisValue) {
            if (sinon.match && sinon.match.isMatcher(thisValue)) {
                return thisValue.test(this.thisValue);
            }
            return this.thisValue === thisValue;
        },

        calledWith: function calledWith() {
            for (var i = 0, l = arguments.length; i < l; i += 1) {
                if (!sinon.deepEqual(arguments[i], this.args[i])) {
                    return false;
                }
            }

            return true;
        },

        calledWithMatch: function calledWithMatch() {
            for (var i = 0, l = arguments.length; i < l; i += 1) {
                var actual = this.args[i];
                var expectation = arguments[i];
                if (!sinon.match || !sinon.match(expectation).test(actual)) {
                    return false;
                }
            }
            return true;
        },

        calledWithExactly: function calledWithExactly() {
            return arguments.length == this.args.length &&
                this.calledWith.apply(this, arguments);
        },

        notCalledWith: function notCalledWith() {
            return !this.calledWith.apply(this, arguments);
        },

        notCalledWithMatch: function notCalledWithMatch() {
            return !this.calledWithMatch.apply(this, arguments);
        },

        returned: function returned(value) {
            return sinon.deepEqual(value, this.returnValue);
        },

        threw: function threw(error) {
            if (typeof error === "undefined" || !this.exception) {
                return !!this.exception;
            }

            return this.exception === error || this.exception.name === error;
        },

        calledWithNew: function calledWithNew(thisValue) {
            return this.thisValue instanceof this.proxy;
        },

        calledBefore: function (other) {
            return this.callId < other.callId;
        },

        calledAfter: function (other) {
            return this.callId > other.callId;
        },

        callArg: function (pos) {
            this.args[pos]();
        },

        callArgOn: function (pos, thisValue) {
            this.args[pos].apply(thisValue);
        },

        callArgWith: function (pos) {
            this.callArgOnWith.apply(this, [pos, null].concat(slice.call(arguments, 1)));
        },

        callArgOnWith: function (pos, thisValue) {
            var args = slice.call(arguments, 2);
            this.args[pos].apply(thisValue, args);
        },

        "yield": function () {
            this.yieldOn.apply(this, [null].concat(slice.call(arguments, 0)));
        },

        yieldOn: function (thisValue) {
            var args = this.args;
            for (var i = 0, l = args.length; i < l; ++i) {
                if (typeof args[i] === "function") {
                    args[i].apply(thisValue, slice.call(arguments, 1));
                    return;
                }
            }
            throwYieldError(this.proxy, " cannot yield since no callback was passed.", args);
        },

        yieldTo: function (prop) {
            this.yieldToOn.apply(this, [prop, null].concat(slice.call(arguments, 1)));
        },

        yieldToOn: function (prop, thisValue) {
            var args = this.args;
            for (var i = 0, l = args.length; i < l; ++i) {
                if (args[i] && typeof args[i][prop] === "function") {
                    args[i][prop].apply(thisValue, slice.call(arguments, 2));
                    return;
                }
            }
            throwYieldError(this.proxy, " cannot yield to '" + prop +
                "' since no callback was passed.", args);
        },

        toString: function () {
            var callStr = this.proxy.toString() + "(";
            var args = [];

            for (var i = 0, l = this.args.length; i < l; ++i) {
                args.push(sinon.format(this.args[i]));
            }

            callStr = callStr + args.join(", ") + ")";

            if (typeof this.returnValue != "undefined") {
                callStr += " => " + sinon.format(this.returnValue);
            }

            if (this.exception) {
                callStr += " !" + this.exception.name;

                if (this.exception.message) {
                    callStr += "(" + this.exception.message + ")";
                }
            }

            return callStr;
        }
    };

    callProto.invokeCallback = callProto.yield;

    function createSpyCall(spy, thisValue, args, returnValue, exception, id) {
        if (typeof id !== "number") {
            throw new TypeError("Call id is not a number");
        }
        var proxyCall = sinon.create(callProto);
        proxyCall.proxy = spy;
        proxyCall.thisValue = thisValue;
        proxyCall.args = args;
        proxyCall.returnValue = returnValue;
        proxyCall.exception = exception;
        proxyCall.callId = id;

        return proxyCall;
    };
    createSpyCall.toString = callProto.toString; // used by mocks

    sinon.spyCall = createSpyCall;
    
}(sinon));


// source stub.js
/**
 * @depend ../sinon.js
 * @depend spy.js
 */
/*jslint eqeqeq: false, onevar: false*/
/*global module, require, sinon*/
/**
 * Stub functions
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @license BSD
 *
 * Copyright (c) 2010-2013 Christian Johansen
 */
"use strict";

(function (sinon) {
    
    function stub(object, property, func) {
        if (!!func && typeof func != "function") {
            throw new TypeError("Custom stub should be function");
        }

        var wrapper;

        if (func) {
            wrapper = sinon.spy && sinon.spy.create ? sinon.spy.create(func) : func;
        } else {
            wrapper = stub.create();
        }

        if (!object && !property) {
            return sinon.stub.create();
        }

        if (!property && !!object && typeof object == "object") {
            for (var prop in object) {
                if (typeof object[prop] === "function") {
                    stub(object, prop);
                }
            }

            return object;
        }

        return sinon.wrapMethod(object, property, wrapper);
    }

    function getChangingValue(stub, property) {
        var index = stub.callCount - 1;
        var values = stub[property];
        var prop = index in values ? values[index] : values[values.length - 1];
        stub[property + "Last"] = prop;

        return prop;
    }

    function getCallback(stub, args) {
        var callArgAt = getChangingValue(stub, "callArgAts");

        if (callArgAt < 0) {
            var callArgProp = getChangingValue(stub, "callArgProps");

            for (var i = 0, l = args.length; i < l; ++i) {
                if (!callArgProp && typeof args[i] == "function") {
                    return args[i];
                }

                if (callArgProp && args[i] &&
                    typeof args[i][callArgProp] == "function") {
                    return args[i][callArgProp];
                }
            }

            return null;
        }

        return args[callArgAt];
    }

    var join = Array.prototype.join;

    function getCallbackError(stub, func, args) {
        if (stub.callArgAtsLast < 0) {
            var msg;

            if (stub.callArgPropsLast) {
                msg = sinon.functionName(stub) +
                    " expected to yield to '" + stub.callArgPropsLast +
                    "', but no object with such a property was passed."
            } else {
                msg = sinon.functionName(stub) +
                            " expected to yield, but no callback was passed."
            }

            if (args.length > 0) {
                msg += " Received [" + join.call(args, ", ") + "]";
            }

            return msg;
        }

        return "argument at index " + stub.callArgAtsLast + " is not a function: " + func;
    }

    var nextTick = (function () {
        if (typeof process === "object" && typeof process.nextTick === "function") {
            return process.nextTick;
        } else if (typeof setImmediate === "function") {
            return setImmediate;
        } else {
            return function (callback) {
                setTimeout(callback, 0);
            };
        }
    })();

    function callCallback(stub, args) {
        if (stub.callArgAts.length > 0) {
            var func = getCallback(stub, args);

            if (typeof func != "function") {
                throw new TypeError(getCallbackError(stub, func, args));
            }

            var callbackArguments = getChangingValue(stub, "callbackArguments");
            var callbackContext = getChangingValue(stub, "callbackContexts");

            if (stub.callbackAsync) {
                nextTick(function() {
                    func.apply(callbackContext, callbackArguments);
                });
            } else {
                func.apply(callbackContext, callbackArguments);
            }
        }
    }

    var uuid = 0;

    sinon.extend(stub, (function () {
        var slice = Array.prototype.slice, proto;

        function throwsException(error, message) {
            if (typeof error == "string") {
                this.exception = new Error(message || "");
                this.exception.name = error;
            } else if (!error) {
                this.exception = new Error("Error");
            } else {
                this.exception = error;
            }

            return this;
        }

        proto = {
            create: function create() {
                var functionStub = function () {

                    callCallback(functionStub, arguments);

                    if (functionStub.exception) {
                        throw functionStub.exception;
                    } else if (typeof functionStub.returnArgAt == 'number') {
                        return arguments[functionStub.returnArgAt];
                    } else if (functionStub.returnThis) {
                        return this;
                    }
                    return functionStub.returnValue;
                };

                functionStub.id = "stub#" + uuid++;
                var orig = functionStub;
                functionStub = sinon.spy.create(functionStub);
                functionStub.func = orig;

                functionStub.callArgAts = [];
                functionStub.callbackArguments = [];
                functionStub.callbackContexts = [];
                functionStub.callArgProps = [];

                sinon.extend(functionStub, stub);
                functionStub._create = sinon.stub.create;
                functionStub.displayName = "stub";
                functionStub.toString = sinon.functionToString;

                return functionStub;
            },

            resetBehavior: function () {
                var i;

                this.callArgAts = [];
                this.callbackArguments = [];
                this.callbackContexts = [];
                this.callArgProps = [];

                delete this.returnValue;
                delete this.returnArgAt;
                this.returnThis = false;

                if (this.fakes) {
                    for (i = 0; i < this.fakes.length; i++) {
                        this.fakes[i].resetBehavior();
                    }
                }
            },

            returns: function returns(value) {
                this.returnValue = value;

                return this;
            },

            returnsArg: function returnsArg(pos) {
                if (typeof pos != "number") {
                    throw new TypeError("argument index is not number");
                }

                this.returnArgAt = pos;

                return this;
            },

            returnsThis: function returnsThis() {
                this.returnThis = true;

                return this;
            },

            "throws": throwsException,
            throwsException: throwsException,

            callsArg: function callsArg(pos) {
                if (typeof pos != "number") {
                    throw new TypeError("argument index is not number");
                }

                this.callArgAts.push(pos);
                this.callbackArguments.push([]);
                this.callbackContexts.push(undefined);
                this.callArgProps.push(undefined);

                return this;
            },

            callsArgOn: function callsArgOn(pos, context) {
                if (typeof pos != "number") {
                    throw new TypeError("argument index is not number");
                }
                if (typeof context != "object") {
                    throw new TypeError("argument context is not an object");
                }

                this.callArgAts.push(pos);
                this.callbackArguments.push([]);
                this.callbackContexts.push(context);
                this.callArgProps.push(undefined);

                return this;
            },

            callsArgWith: function callsArgWith(pos) {
                if (typeof pos != "number") {
                    throw new TypeError("argument index is not number");
                }

                this.callArgAts.push(pos);
                this.callbackArguments.push(slice.call(arguments, 1));
                this.callbackContexts.push(undefined);
                this.callArgProps.push(undefined);

                return this;
            },

            callsArgOnWith: function callsArgWith(pos, context) {
                if (typeof pos != "number") {
                    throw new TypeError("argument index is not number");
                }
                if (typeof context != "object") {
                    throw new TypeError("argument context is not an object");
                }

                this.callArgAts.push(pos);
                this.callbackArguments.push(slice.call(arguments, 2));
                this.callbackContexts.push(context);
                this.callArgProps.push(undefined);

                return this;
            },

            yields: function () {
                this.callArgAts.push(-1);
                this.callbackArguments.push(slice.call(arguments, 0));
                this.callbackContexts.push(undefined);
                this.callArgProps.push(undefined);

                return this;
            },

            yieldsOn: function (context) {
                if (typeof context != "object") {
                    throw new TypeError("argument context is not an object");
                }

                this.callArgAts.push(-1);
                this.callbackArguments.push(slice.call(arguments, 1));
                this.callbackContexts.push(context);
                this.callArgProps.push(undefined);

                return this;
            },

            yieldsTo: function (prop) {
                this.callArgAts.push(-1);
                this.callbackArguments.push(slice.call(arguments, 1));
                this.callbackContexts.push(undefined);
                this.callArgProps.push(prop);

                return this;
            },

            yieldsToOn: function (prop, context) {
                if (typeof context != "object") {
                    throw new TypeError("argument context is not an object");
                }

                this.callArgAts.push(-1);
                this.callbackArguments.push(slice.call(arguments, 2));
                this.callbackContexts.push(context);
                this.callArgProps.push(prop);

                return this;
            }
        };

        // create asynchronous versions of callsArg* and yields* methods
        for (var method in proto) {
            // need to avoid creating anotherasync versions of the newly added async methods
            if (proto.hasOwnProperty(method) &&
                method.match(/^(callsArg|yields|thenYields$)/) &&
                !method.match(/Async/)) {
                proto[method + 'Async'] = (function (syncFnName) {
                    return function () {
                        this.callbackAsync = true;
                        return this[syncFnName].apply(this, arguments);
                    };
                })(method);
            }
        }

        return proto;

    }()));

    sinon.stub = stub;
    
}(sinon));

// source mock.js
/**
 * @depend ../sinon.js
 * @depend stub.js
 */
/*jslint eqeqeq: false, onevar: false, nomen: false*/
/*global module, require, sinon*/
/**
 * Mock functions.
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @license BSD
 *
 * Copyright (c) 2010-2013 Christian Johansen
 */
"use strict";

(function (sinon) {
    var push = [].push;

    
    function mock(object) {
        if (!object) {
            return sinon.expectation.create("Anonymous mock");
        }

        return mock.create(object);
    }

    sinon.mock = mock;

    sinon.extend(mock, (function () {
        function each(collection, callback) {
            if (!collection) {
                return;
            }

            for (var i = 0, l = collection.length; i < l; i += 1) {
                callback(collection[i]);
            }
        }

        return {
            create: function create(object) {
                if (!object) {
                    throw new TypeError("object is null");
                }

                var mockObject = sinon.extend({}, mock);
                mockObject.object = object;
                delete mockObject.create;

                return mockObject;
            },

            expects: function expects(method) {
                if (!method) {
                    throw new TypeError("method is falsy");
                }

                if (!this.expectations) {
                    this.expectations = {};
                    this.proxies = [];
                }

                if (!this.expectations[method]) {
                    this.expectations[method] = [];
                    var mockObject = this;

                    sinon.wrapMethod(this.object, method, function () {
                        return mockObject.invokeMethod(method, this, arguments);
                    });

                    push.call(this.proxies, method);
                }

                var expectation = sinon.expectation.create(method);
                push.call(this.expectations[method], expectation);

                return expectation;
            },

            restore: function restore() {
                var object = this.object;

                each(this.proxies, function (proxy) {
                    if (typeof object[proxy].restore == "function") {
                        object[proxy].restore();
                    }
                });
            },

            verify: function verify() {
                var expectations = this.expectations || {};
                var messages = [], met = [];

                each(this.proxies, function (proxy) {
                    each(expectations[proxy], function (expectation) {
                        if (!expectation.met()) {
                            push.call(messages, expectation.toString());
                        } else {
                            push.call(met, expectation.toString());
                        }
                    });
                });

                this.restore();

                if (messages.length > 0) {
                    sinon.expectation.fail(messages.concat(met).join("\n"));
                } else {
                    sinon.expectation.pass(messages.concat(met).join("\n"));
                }

                return true;
            },

            invokeMethod: function invokeMethod(method, thisValue, args) {
                var expectations = this.expectations && this.expectations[method];
                var length = expectations && expectations.length || 0, i;

                for (i = 0; i < length; i += 1) {
                    if (!expectations[i].met() &&
                        expectations[i].allowsCall(thisValue, args)) {
                        return expectations[i].apply(thisValue, args);
                    }
                }

                var messages = [], available, exhausted = 0;

                for (i = 0; i < length; i += 1) {
                    if (expectations[i].allowsCall(thisValue, args)) {
                        available = available || expectations[i];
                    } else {
                        exhausted += 1;
                    }
                    push.call(messages, "    " + expectations[i].toString());
                }

                if (exhausted === 0) {
                    return available.apply(thisValue, args);
                }

                messages.unshift("Unexpected call: " + sinon.spyCall.toString.call({
                    proxy: method,
                    args: args
                }));

                sinon.expectation.fail(messages.join("\n"));
            }
        };
    }()));

    var times = sinon.timesInWords;

    sinon.expectation = (function () {
        var slice = Array.prototype.slice;
        var _invoke = sinon.spy.invoke;

        function callCountInWords(callCount) {
            if (callCount == 0) {
                return "never called";
            } else {
                return "called " + times(callCount);
            }
        }

        function expectedCallCountInWords(expectation) {
            var min = expectation.minCalls;
            var max = expectation.maxCalls;

            if (typeof min == "number" && typeof max == "number") {
                var str = times(min);

                if (min != max) {
                    str = "at least " + str + " and at most " + times(max);
                }

                return str;
            }

            if (typeof min == "number") {
                return "at least " + times(min);
            }

            return "at most " + times(max);
        }

        function receivedMinCalls(expectation) {
            var hasMinLimit = typeof expectation.minCalls == "number";
            return !hasMinLimit || expectation.callCount >= expectation.minCalls;
        }

        function receivedMaxCalls(expectation) {
            if (typeof expectation.maxCalls != "number") {
                return false;
            }

            return expectation.callCount == expectation.maxCalls;
        }

        return {
            minCalls: 1,
            maxCalls: 1,

            create: function create(methodName) {
                var expectation = sinon.extend(sinon.stub.create(), sinon.expectation);
                delete expectation.create;
                expectation.method = methodName;

                return expectation;
            },

            invoke: function invoke(func, thisValue, args) {
                this.verifyCallAllowed(thisValue, args);

                return _invoke.apply(this, arguments);
            },

            atLeast: function atLeast(num) {
                if (typeof num != "number") {
                    throw new TypeError("'" + num + "' is not number");
                }

                if (!this.limitsSet) {
                    this.maxCalls = null;
                    this.limitsSet = true;
                }

                this.minCalls = num;

                return this;
            },

            atMost: function atMost(num) {
                if (typeof num != "number") {
                    throw new TypeError("'" + num + "' is not number");
                }

                if (!this.limitsSet) {
                    this.minCalls = null;
                    this.limitsSet = true;
                }

                this.maxCalls = num;

                return this;
            },

            never: function never() {
                return this.exactly(0);
            },

            once: function once() {
                return this.exactly(1);
            },

            twice: function twice() {
                return this.exactly(2);
            },

            thrice: function thrice() {
                return this.exactly(3);
            },

            exactly: function exactly(num) {
                if (typeof num != "number") {
                    throw new TypeError("'" + num + "' is not a number");
                }

                this.atLeast(num);
                return this.atMost(num);
            },

            met: function met() {
                return !this.failed && receivedMinCalls(this);
            },

            verifyCallAllowed: function verifyCallAllowed(thisValue, args) {
                if (receivedMaxCalls(this)) {
                    this.failed = true;
                    sinon.expectation.fail(this.method + " already called " + times(this.maxCalls));
                }

                if ("expectedThis" in this && this.expectedThis !== thisValue) {
                    sinon.expectation.fail(this.method + " called with " + thisValue + " as thisValue, expected " +
                        this.expectedThis);
                }

                if (!("expectedArguments" in this)) {
                    return;
                }

                if (!args) {
                    sinon.expectation.fail(this.method + " received no arguments, expected " +
                        sinon.format(this.expectedArguments));
                }

                if (args.length < this.expectedArguments.length) {
                    sinon.expectation.fail(this.method + " received too few arguments (" + sinon.format(args) +
                        "), expected " + sinon.format(this.expectedArguments));
                }

                if (this.expectsExactArgCount &&
                    args.length != this.expectedArguments.length) {
                    sinon.expectation.fail(this.method + " received too many arguments (" + sinon.format(args) +
                        "), expected " + sinon.format(this.expectedArguments));
                }

                for (var i = 0, l = this.expectedArguments.length; i < l; i += 1) {
                    if (!sinon.deepEqual(this.expectedArguments[i], args[i])) {
                        sinon.expectation.fail(this.method + " received wrong arguments " + sinon.format(args) +
                            ", expected " + sinon.format(this.expectedArguments));
                    }
                }
            },

            allowsCall: function allowsCall(thisValue, args) {
                if (this.met() && receivedMaxCalls(this)) {
                    return false;
                }

                if ("expectedThis" in this && this.expectedThis !== thisValue) {
                    return false;
                }

                if (!("expectedArguments" in this)) {
                    return true;
                }

                args = args || [];

                if (args.length < this.expectedArguments.length) {
                    return false;
                }

                if (this.expectsExactArgCount &&
                    args.length != this.expectedArguments.length) {
                    return false;
                }

                for (var i = 0, l = this.expectedArguments.length; i < l; i += 1) {
                    if (!sinon.deepEqual(this.expectedArguments[i], args[i])) {
                        return false;
                    }
                }

                return true;
            },

            withArgs: function withArgs() {
                this.expectedArguments = slice.call(arguments);
                return this;
            },

            withExactArgs: function withExactArgs() {
                this.withArgs.apply(this, arguments);
                this.expectsExactArgCount = true;
                return this;
            },

            on: function on(thisValue) {
                this.expectedThis = thisValue;
                return this;
            },

            toString: function () {
                var args = (this.expectedArguments || []).slice();

                if (!this.expectsExactArgCount) {
                    push.call(args, "[...]");
                }

                var callStr = sinon.spyCall.toString.call({
                    proxy: this.method || "anonymous mock expectation",
                    args: args
                });

                var message = callStr.replace(", [...", "[, ...") + " " +
                    expectedCallCountInWords(this);

                if (this.met()) {
                    return "Expectation met: " + message;
                }

                return "Expected " + message + " (" +
                    callCountInWords(this.callCount) + ")";
            },

            verify: function verify() {
                if (!this.met()) {
                    sinon.expectation.fail(this.toString());
                } else {
                    sinon.expectation.pass(this.toString());
                }

                return true;
            },

            pass: function(message) {
              sinon.assert.pass(message);
            },
            fail: function (message) {
                var exception = new Error(message);
                exception.name = "ExpectationError";

                throw exception;
            }
        };
    }());

    
    sinon.mock = mock;
    
}(sinon));

// end:source ../vendor/sinon.js