logger.cfg({
	formatMessage: false,
	transport: {
		type: 'console'
	}
});


(function(){
	var global = window;
	var __env = 'dom';
	var __global = window;


	// source /src/vars.js
	
	var _Array_slice = Array.prototype.slice,
		mask = global.mask;
		
		
	RegExp.prototype.toJSON = RegExp.prototype.toString;
	
	// end:source /src/vars.js

	// source /src/assert/assert.browser.js
	(function(global){
		
		// source wrapper.js
		var assert = global.assert;
		
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
				if (Object.defineProperty) {
					Object.defineProperty(error, 'stack', {
						value: error.stack,
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(error, 'message', {
						value: error.message,
						enumerable: true,
						configurable: true
					});
				}
		
		
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
	
	}(this));
	// end:source /src/assert/assert.browser.js
	// source /src/patch/jquery.js
	(function(){
		/* Make jQuery to support DocumentFragment`s */
		
		var _jQuery = global.jQuery;
		_jQuery.noConflict();
		
		function Wrapper (frag) {
			var args = Array.prototype.slice.call(arguments);
			if (frag != null && typeof frag === 'object' && frag.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
				args[0] = frag.childNodes;
			}
			
			return _jQuery.apply(global, args);
		};
		Wrapper.prototype = _jQuery.prototype;
		
		for(var key in _jQuery) {
			Wrapper[key] = _jQuery[key];
		}
		
		global.$ = Wrapper;
	}());
	// end:source /src/patch/jquery.js

	// source /src/utils/xhr.js
	var xhr_createListener,
		xhr_isBusy;
	
	(function(){
		
		xhr_createListener = function(win){
			
			if (KEY in win) 
				return win[KEY];
			
			return win[KEY] = wrapXhr(win);
		};
		
		xhr_isBusy = function(win){
			if (win == null) 
				win = window;
			
			if (KEY in win === false) 
				return false;
			
			if (win[KEY].isBusy()) 
				return true;
			
			if (win.parent !== win) 
				return xhr_isBusy(win);
			
			return false;
		};
		
		// private
		var KEY = 'XMLHttpRequestListener__';
		
		function wrapXhr(win){
			if (win.parent !== win) 
				xhr_createListener(win.parent);
			
			
			var XHR = win.XMLHttpRequest,
				dfr = new Class.Deferred,
				counter__ = 0,
				send__ = XHR.prototype.send
				;
			dfr.resolve();
			XHR.prototype.send = onSend;
			
			function onSend() {
				if (this.responseType !== 'arraybuffer') {
					// socket.io fix
					
					dfr.defer();
					this.addEventListener('readystatechange', function() {
						if(this.readyState == XMLHttpRequest.DONE) 
							--counter__;
						
						onComplete();
					}, false);
					++counter__;
				}
				send__.apply(this, arguments);
			}
			
			function onComplete() {
				if (counter__ > 0) 
					return;
				
				if (win.parent === win) {
					dfr.resolve();
					return;
				}
				
				if (win.parent[KEY]) {
					win
						.parent
						[KEY]
						.done(dfr.resolveDelegate())
						;
				}
			}
			
			function onready(callback){
				if (dfr_isBusy(dfr)) {
					dfr.done(onready.bind(null, callback));
					return;
				}
				
				if (win.parent === win) {
					callback();
					return;
				}
				
				var pxhr_listener = win.parent[KEY];
				if (pxhr_listener == null || pxhr_listener.isBusy() === false) {
					callback();
					return;
				}
				
				pxhr_listener.done(onready.bind(null, callback));
			}
			
			return {
				isBusy: dfr_isBusy.bind(null, dfr),
				done: onready
			};
		}
		
		function dfr_isBusy(dfr){
			return dfr._resolved == null && dfr._rejected == null;
		}
		
	}());
	// end:source /src/utils/xhr.js
	// source /src/utils/array.js
	var arr_isArray,
		arr_isEmpty,
		arr_distinctConcat;
	
	(function(){
	
		arr_isArray = function(array) {
			return array != null
				&& typeof array.length === 'number'
				&& typeof array.splice === 'function'
				;
		};
	
		arr_isEmpty = function(array) {
			if (arr_isArray(array) === false)
				return true;
	
			return array.length === 0;
		};
	
		arr_distinctConcat = function(a, b){
			if (b == null)
				return a;
			if (a == null)
				return b;
	
			var arr = a.concat(b);
			var out = [], hash = {};
			arr.forEach(function(x){
				if (hash[x] === true) {
					return;
				}
				hash[x] = true;
				out.push(x);
			});
			return out;
		}
	}());
	
	// end:source /src/utils/array.js
	// source /src/utils/cfg.js
	var cfg_runConfigurationScript;
	
	(function(){
		
		cfg_runConfigurationScript = function(type, config, done){
			var $script = config && config.$config && config.$config[type];
			if ($script == null) 
				return done();
				
			
			if (typeof $script === 'function'){
				$script(done);
				if ($script.length === 0) 
					done();
				
				return;
			}
			
			if (typeof $script === 'string') {
				
				include
					.instance(config.base || (process.cwd() + '/'))
					.js($script + '::Script')
					.done(function(resp){
						var Script = resp.Script;
						if (Script == null || Script.process == null) {
							logger
								.error('<configuration script>', $script)
								.error(' is not loaded or `process` function not implemented')
								;
							
							done();
							return;
						}
						if (Script.process.length === 0) {
							Script.process();
							done();
							return;
						}
						Script.process(done);
					});
					
				return;
			}
			
			console.error('Invalid configuration script', config);
			done();
		};
		
	}());
	// end:source /src/utils/cfg.js
	// source /src/utils/fn.js
	var fn_waterfall;
	(function(){
		
		fn_waterfall = function(){
			var fns = Array.prototype.slice.call(arguments),
				done = fns.pop(),
				imax = fns.length,
				i = -1;
				
			function next(){
				if (++i > imax - 1) 
					return done();
				
				fns[i](next);
			}
			next();
		};
		
	}());
	// end:source /src/utils/fn.js

	// source /src/utils/location.js
	var location_pushHistory,
		location_pushSearch;
	
	(function(){
		location_pushSearch = function(path, win){
			win = win || window;
			
			var q = path.indexOf('?');
			if (q === -1) {
				trySetHash(path, win);
				return;
			}
			if (win.history == null || win.history.pushState == null) 
				return;
			
			try {
				win.history.pushState({}, '', path.substring(q));
			} catch(error){}
		};
		
		location_pushHistory = function(path, win){
			win = win || window;
			
			if (win.history == null || win.history.pushState == null) {
				trySetHash(path, win);
				return;
			}
			
			var a;
			a = document.createElement('a');
			a.href = path;
			
			path = ''
				+ win.top.location.protocol
				+ '//'
				+ win.top.location.host
				+ a.pathname
				+ a.search
				+ a.hash
				;
			
			try {
				win.history.pushState(null, null, path);
			} catch(error){}
		}
	
		function trySetHash(url, win){
			var index = url.indexOf('#');
			if (index === -1)
				return;
			win.location.hash = url.substring(index + 1);
	
		}
	}());
	// end:source /src/utils/location.js
	// source /src/utils/transport.jam.js
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
					return frame.__utest_isLoading === false;
				
				return (frame.document || frame.contentDocument).readyState === 'complete';
			} catch(error){
				// cross-origin ?
				return false;
			}
		}
	}());
	// end:source /src/utils/transport.jam.js

	// source /src/UTest.es6
	"use strict";
	
	(function (global) {
	
		var _tests = [],
		    _index = -1,
		    _listeners = {},
		   
	
		// default options
		_options = {
			timeout: 3000,
			errorableCallbacks: false,
			breakOnError: false,
	
			// master server configurations, in browser runners
			"http.config": null,
			"http.eval": null,
			"http.include": null,
			"http.service": null,
			"http.process": null,
			"util.process": null },
		    _testsDone;
	
		var RESERVED = ["$teardown", "$config", "$before", "$after", "$run"];
	
		// source utils/object.js
		var obj_getProperty, obj_defaults;
		(function () {
	
			obj_getProperty = function (obj, property) {
				var chain = property.split("."),
				    imax = chain.length,
				    i = -1;
	
				while (++i < imax) {
					if (obj == null) return null;
	
					obj = obj[chain[i]];
				}
				return obj;
			};
			obj_defaults = function (target, defaults_, limit) {
				if (target == null) target = {};
	
				for (var key in defaults_) {
					if (target[key] != null) continue;
					if (limit != null && limit.indexOf(key) === -1) continue;
	
					target[key] = defaults_[key];
				}
				return target;
			};
		})();
	
		// end:source utils/object.js
		// source utils/syntax.js
		// TEST interfaces
	
		var syntax_Mocha;
		(function () {
	
			syntax_Mocha = function (init) {
				suite = {};
	
				global.it = it;
				global.before = before;
				global.beforeEach = beforeEach;
				global.after = after;
				global.afterEach = afterEach;
				global.describe = describe;
				init();
				return suite;
			};
	
			var suite;
			function describe(name, fn) {
				var root = suite;
				root[name] = syntax_Mocha(fn);
				suite = root;
			}
			function it(name, fn) {
				suite[name] = fn;
			}
			function before(fn) {
				suite.$before = fn;
			}
			function after(fn) {
				suite.$after = fn;
			}
			function afterEach(fn) {
				suite.$teardown = fn;
			}
			function beforeEach(fn) {
				suite.$teardown = fn;
			}
		})();
		// end:source utils/syntax.js
		// source utils/is.js
		var is_Deferred, is_Function, is_Object;
		(function () {
	
			is_Deferred = function (x) {
				return x != null && typeof x === "object" && is_Function(x.then);
			};
			is_Function = function (x) {
				return typeof x === "function";
			};
			is_Object = function (x) {
				return x != null && typeof x === "object";
			};
		})();
		// end:source utils/is.js
	
		// source UTest.config.es6
		"use strict";
	
		var UTestConfiguration;
	
		(function () {
			UTestConfiguration = {
				$cfg: function $cfg(key) {
					var cfg = this.suite.$config;
					if (cfg == null || cfg[key] == null) {
						return _options[key];
					}return cfg[key];
				},
				configurate: function configurate() {
					var cfg,
					    done,
					    x,
					    xtype,
					    i = arguments.length;
					while (--i > -1) {
						x = arguments[i];
						xtype = typeof x;
	
						if ("function" === xtype) done = x;
	
						if ("object" === xtype && x != null) cfg = x;
					}
					if (cfg == null) cfg = this.suite.$config;
	
					if (cfg == null) {
						done && done();
						return;
					}
	
					var await = new Class.Await();
					for (var key in cfg) {
						if (_options.hasOwnProperty(key) === false) {
							logger.warn("Unknown key `%s`, support:", key, Object.keys(_options));
							continue;
						}
	
						perform(key, cfg[key], await.delegate());
					}
	
					await.fail(function (error) {
						return console.error("<utest:configurate> ", error);
					}).always(done);
				}
			};
	
			var Configurations = {
				http: {
					service: function service(routes, done) {
						http_config("http.service", routes, done);
					},
					config: function config(configDir, done) {
						http_config("http.config", configDir, done);
					},
					include: function include(pckg, done) {
						http_config("include", pckg, done);
					},
	
					eval: function evaluate(fn, done) {
						http_config("eval", fn.toString(), done);
					},
					process: function process(params, done) {
						http_config("process", params, done);
					}
				},
				util: {
					process: function process(params, done) {
						process_toggle(params, done);
					}
				}
			};
	
			function http_config() {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}
	
				args.splice(1, 0, null); // populate later with current configuration
				args.unshift(">server:utest:action");
	
				UTest.getSocket(function (socket, config) {
	
					args[2] = UTest.getConfig && UTest.getConfig() || config;
					socket.emit.apply(socket, args);
				});
			}
	
			function perform(key, args, done) {
				var fn = obj_getProperty(Configurations, key);
				if (typeof fn !== "function") {
					return done();
				}fn(args, done);
			}
		})();
		/*?cfg, done */
		//# sourceMappingURL=UTest.config.es6.map
		// end:source UTest.config.es6
		// source UTest.page.js
		var UTestPage;
	
		(function () {
	
			var _iframe;
	
			UTestPage = {
				request: (function (_request) {
					var _requestWrapper = function request(_x, _x2, _x3, _x4, _x5) {
						return _request.apply(this, arguments);
					};
	
					_requestWrapper.toString = function () {
						return _request.toString();
					};
	
					return _requestWrapper;
				})(function (url, method, headers, data, callback) {
	
					if (_iframe) {
						_iframe.parentNode.removeChild(_iframe);
						_iframe = null;
					}
	
					request(url, method, headers, data, function (error, response, headers) {
	
						if (error) {
							callback(error);
							return;
						}
						if (response == null) {
							callback("Server not responded");
							return;
						}
	
						var html;
						if (typeof response === "string") html = response;
	
						if (html == null) {
							callback(null, response, headers);
							return;
						}
	
						var base = "/utest/";
						if (data != null && data.base) {
							base = data.base;
						} else if (/https?:/.test(url)) {
							base = url;
						} else {
							base += url;
						}
	
						if (/<\s*head[^>]*>/i.test(html) === false) {
							// no head
							var index = html.indexOf(">");
							if (index !== -1) {
	
								html = html.substring(0, index + 1) + "<head><base href=\"" + base + "\" /></head>" + html.substring(index + 1);
							}
						} else {
							html = html.replace(/(head[^>]*>)/i, "$1 <base href=\"" + base + "\" />");
						}
	
						_iframe = document.createElement("iframe");
	
						document.body.appendChild(_iframe);
	
						var _doc = _iframe.contentDocument,
						    _win = _iframe.contentWindow;
	
						_win.__utest_isLoading = true;
						_win.domain = window.domain;
	
						var listener = xhr_createListener(_win);
	
						$(_iframe).on("load", function () {
							if (_win.include) {
								_win.include.allDone(process);
							} else {
								process();
							}
							function process() {
								listener.done(function () {
									_win.__utest_isLoading = false;
									callback(null, _doc, _win, headers);
								});
							}
						});
	
						location_pushSearch(url);
						_doc.open();
	
						// Mozilla throws NS_ERROR_FAILURE. workaround with querystring only
						//- location_pushHistory(url, _win);
	
						_doc.write(html);
						_doc.close();
					});
				})
			};
	
			function request(url, method, headers, data, callback) {
	
				headers = headers || {};
				if (/https?:/.test(url)) {
					// cross-origin
					headers["x-remote"] = url;
					url = "/utest/server/proxy";
				}
				var contentType,
				    body = data;
				if (body && typeof body !== "string") {
					body = JSON.stringify(body);
					contentType = "application/json; charset=utf-8";
				}
	
				$.ajax({
					url: url,
					cache: false,
					contentType: contentType,
					data: body,
					type: (method || "get").toUpperCase(),
					headers: headers
				}).done(function (response, status, xhr) {
					callback(null, response, xhr.getAllResponseHeaders());
				}).fail(function (xhr, textStatus) {
					callback({
						responseText: xhr.responseText,
						statusCode: xhr.status,
						headers: xhr.getAllResponseHeaders()
					});
				});
			}
		})();
		// end:source UTest.page.js
		// source UTest.server.js
		var UTestServer;
	
		(function () {
	
			UTestServer = {
	
				Static: {
					server: {
						render: function render(template /* [, params, callback] */) {
	
							var args = _Array_slice.call(arguments, 1),
							    dfr = new Class.Deferred(),
							    callback;
	
							if (typeof args[args.length - 1] === "function") {
								callback = args.pop();
							}
	
							var params = args.shift() || {},
							    model = params.model,
							    scripts = params.scripts,
							    controller = params.controller;
	
							UTestPage.request("/utest/server/render", "post", null, {
								template: template,
								model: model,
								controller: controller,
								scripts: scripts,
								base: "/utest/"
							}, done);
	
							function done(error, doc, win) {
	
								if (callback) callback(error, doc, win);
	
								if (error) {
									dfr.reject(error);
									return;
								}
	
								dfr.resolve(doc, win);
							}
	
							return dfr;
						},
	
						request: function request(mix /* [, method, data, callback] */) {
							var url = mix,
							    method,
							    data,
							    headers,
							    callback;
							if (typeof mix !== "string") {
								url = mix.url;
								method = mix.method;
								data = mix.data;
								headers = mix.headers;
							}
	
							var args = _Array_slice.call(arguments, 1),
							    dfr = new Class.Deferred();
	
							if (typeof args[args.length - 1] === "function") callback = args.pop();
	
							if (args.length > 0) method = args.shift();
	
							if (args.length > 0) data = args.shift();
	
							UTestPage.request(url, method, headers, data, done);
	
							function done(error, doc, win) {
								if (callback) callback(error, doc, win);
	
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
		})();
		// end:source UTest.server.js
		// source UTest.benchmark.es6
		"use strict";
	
		var UTestBenchmark;
	
		(function () {
			var _benchmark;
			var TIMEOUT = 10000;
	
			UTestBenchmark = {
				Static: {
					benchmark: function benchmark(model) {
						return _benchmark(model);
					},
					benchmarkVersions: function benchmarkVersions(model) {
						return _benchmark(model);
					}
				}
			};
	
			function _benchmark(model) {
				if (model.$config == null) {
					model.$config = {};
				}
				var utest = {
					$config: {
						timeout: model.$config.timeout || TIMEOUT
					},
					$before: _pipeDelegate(model, [Before.loadBenchmarkLibrary, Before.loadVersions, Before.configurate]),
					$after: model.$after
				};
				var SKIP = ["$config", "$before", "$after", "$teardown"];
				for (var suite in model) {
					if (SKIP.indexOf(suite) !== -1) {
						continue;
					}
					utest[suite] = _benchmarkDelegate(model, suite, model[suite]);
				}
				return UTest(utest);
			}
	
			var Before = {
				loadBenchmarkLibrary: function loadBenchmarkLibrary(model, next) {
					if (typeof require === "function") {
						_benchmark = require("benchmark");
						next();
						return;
					}
					include.instance().js(model.$config.benchmarkPath || "/.reference/atma_toolkit/node_modules/benchmark/benchmark.js").done(function (resp) {
						_benchmark = resp.benchmark || global.Benchmark;
						next();
					});
				},
				loadVersions: function loadVersions(model, next) {
					var versions = model.$config.versions;
					if (versions == null) {
						next();
						return;
					}
	
					model.$config.versionRepository = {};
	
					var keyValues = [],
					    key,
					    index = -1;
					for (key in versions) {
						keyValues.push({
							version: key,
							path: versions[key],
							alias: getAlias(versions[key])
						});
					}
					function getAlias(path) {
						var i = path.indexOf("::");
						if (i !== -1) {
							return path.substring(i + 2);
						}
						i = path.lastIndexOf("/");
						return path.substring(i + 1, path.lastIndexOf("."));
					}
					function load(resp) {
						var current;
	
						if (resp != null) {
							current = keyValues[index];
	
							var library = resp[current.alias];
							if (library == null) {
								for (var key in resp) {
									library = resp[key];
								}
							}
							if (library == null) {
								library = global[current.alias];
							}
	
							if (library == null) {
								throw Error("Module in 'versions' is not loaded. Version: " + current.version + " in " + current.path);
							}
							model.$config.versionRepository[current.version] = library;
						}
						if (++index >= keyValues.length) {
							next();
							return;
						}
						current = keyValues[index];
						include.instance().js(current.path).done(load);
					}
					load();
				},
				configurate: function configurate(model, next) {
					var $before = model.$config.$before;
					if ($before == null) {
						next();
						return;
					}
					if ($before.length === 0) {
						$before();
						next();
						return;
					}
					$before(next);
				}
			};
	
			function _pipeDelegate(model, arr) {
				return function (done) {
					var index = -1,
					    imax = arr.length;
					function next() {
						if (++index >= imax) {
							done();
							return;
						}
						var fn = arr[index];
						if (fn == null) {
							next();
							return;
						}
						fn(model, next);
					}
					next();
				};
			}
	
			function _benchmarkDelegate(model, name, fns) {
				return function (done) {
	
					var suite = new _benchmark.Suite(name, {
						onError: assert.avoid("Benchamrk.OnError")
					});
	
					for (var key in fns) {
						suite.add(key, _getFn(key, fns));
					}
					suite.on("start", function () {
						return logger.log(("Benchmark started 'bold<" + name + ">'").color);
					}).on("cycle", function (event) {
						return logger.log(event.target.toString());
					}).on("teardown", model.$teardown).on("complete", function (event) {
						Array.prototype.slice.call(suite.sort(function (a, b) {
							a = a.stats;b = b.stats;
							return a.mean + a.moe > b.mean + b.moe ? 1 : -1;
						})).map(function (x) {
							return x.toString();
						}).forEach(function (x, i) {
							return logger.log(("bold<green<" + (i + 1) + ".>> " + x).color);
						});
	
						// Fake some test to make the benchmark pass, as for now, benchmarks do not perform any unit tests;
						assert.equal(true, true);
						done(suite);
					});
	
					suite.run(model.$config.benchmarkOptions);
				};
	
				function _getFn(key, fns) {
					var verRepo = model.$config.versionRepository;
					if (verRepo == null) {
						return fns[key];
					}
					var match = /^[\d+\.]+/.exec(key);
					var version = match && match[0] || key;
					var lib = verRepo[version];
					if (lib == null) {
						throw Error("Version Library is not defined " + version);
					}
	
					var fn = fns[key];
					return function () {
						fn(lib);
					};
				}
			}
		})();
		//# sourceMappingURL=UTest.benchmark.es6.map
		// end:source UTest.benchmark.es6
	
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
			}return function () {
				ctx.arguments = arguments;
				runCase(ctx, teardown, done);
			};
		}
	
		function async(callback, name, msTimeout) {
			var isTimeouted = false,
			    isProcessed = false,
			   
			// in case http requests are busy, take some more time
			jam = 5,
			    fn = function fn() {
				clearTimeout(timeout);
				if (isTimeouted || isProcessed) {
					return;
				}isProcessed = true;
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
					console.log("<transport jam> bold<%d> yellow<%s>".color, jam, name);
					return;
				}
	
				console.error("Async Suite Timeout - ", name);
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
	
			if (fn != null && typeof fn === "object") {
	
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
					asyncData = async(onComplete, key, ctx.$config && ctx.$config.timeout);
					args.unshift(asyncData.fn);
	
					result = fn.apply(ctx, args);
	
					tryWait_Deferred(result);
					return;
				}
				result = fn.apply(ctx, args);
				if (tryWait_Deferred(result)) return;
	
				onComplete();
			} catch (error) {
	
				if (asyncData) clearTimeout(asyncData.id);
	
				if (error.name === "AssertionError") {
					assert.fail(error);
					done();
					return;
				}
	
				error.stack = assert.prepairStack(error.stack);
	
				var msg = error.stack || error;
	
				console.error(error.toString());
				if (error.stack) {
					console.error(error.stack);
				}
	
				assert.errors++;
				done();
			}
	
			function tryWait_Deferred(dfr) {
				if (is_Deferred(dfr) === false) {
					return false;
				}if (asyncData == null) {
					asyncData = async(onComplete, key, ctx.$config && ctx.$config.timeout);
				}
				function onFail(error) {
					if (error && error.name === "AssertionError" && assert.onfailure) {
						assert.fail(error);
						return;
					}
					var msg = logger.formatMessage("Test case red<bold<`%s`>> rejected".color, key);
					logger.log(msg);
					if (error.stack) {
						logger.log(error.stack);
					} else {
						logger.log(error.toString());
					}
					eq_(error, null);
					asyncData.fn();
				}
				function onSuccess(error) {
					eq_(result._rejected, null);
					if (arguments.length !== 0) ctx.arguments = arguments;
					asyncData.fn();
				}
				result.then(onSuccess, onFail);
				if (is_Function(result["catch"])) {
					result["catch"](onFail);
				}
				return true;
			}
		}
	
		function case_isAsync(fn) {
			if (fn.length === 0) {
				return false;
			}
			var str = fn.toString();
			str = str.replace(fn.name, "").trim();
			return /^(async )?(function)?\s*\([\w\s,]*(done|next)/.test(str);
		}
	
		var UTestProto = {
			// stores data exposed by the async Case
			arguments: null,
			$run: function $run(key, done) {
				runCase(this.proto, this.suite[key], done || function () {}, null, key);
			}
		};
	
		var UTestProtoDelegate = function UTestProtoDelegate(instance, suite) {
			var proto = {},
			    key;
			for (key in UTestProto) {
	
				if (typeof UTestProto[key] === "function") {
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
	
			Extends: [UTestServer, UTestConfiguration, UTestBenchmark],
			Construct: function Construct(mix, suite, parent) {
				if (this instanceof UTest === false) {
					return new UTest(mix, suite, parent);
				}var name = mix;
				if (typeof mix !== "string" && suite == null) {
					suite = mix;
					name = "UTest";
				}
	
				if (typeof suite === "function") suite = syntax_Mocha(suite);
	
				if (parent != null) {
					suite.$config = obj_defaults(suite.$config, parent.$config, ["timeout", "errorableCallbacks"]);
				}
				this.name = name;
				this.suite = suite;
				this.processed = [];
				this.proto = UTestProtoDelegate(this, suite);
	
				// @obsolete properties
				["before", "after", "teardown", "config"].forEach(function (key) {
					if (suite[key] == null) return;
	
					console.warn("<UTest>", key, "property is deprecated. Use: $" + key);
	
					suite["$" + key] = suite[key];
					delete suite[key];
				});
	
				if (parent == null) _tests.push(this);
				return this;
			},
	
			run: function run(callback) {
	
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
	
			handleBangs: function handleBangs() {
	
				var has = rewriteDeep(this.suite);
				if (has) {
					clearObject(this.suite);
				}
	
				function rewriteDeep(obj) {
					var has = false;
					Object.keys(obj).forEach(function (key) {
						var val = obj[key];
						if (key[0] === "!") {
							has = true;
							if (is_Object(val) && hasBang(val) === false) {
								forceDeep(val);
							}
							return;
						}
	
						if (key[0] !== "!" && is_Object(val) && hasBang(val)) {
							delete obj[key];
							key = "!" + key;
							obj[key] = val;
							rewriteDeep(val);
							has = true;
						}
					});
					return has;
				}
				function forceDeep(obj) {
					var key, val;
					for (key in obj) {
						if (RESERVED.indexOf(key) !== -1) continue;
						if (key.substring(0, 2) === "//") continue;
	
						val = obj[key];
						delete obj[key];
						obj["!" + key] = val;
						if (is_Object(val)) {
							forceDeep(val);
						}
					}
				}
				function clearObject(obj) {
					Object.keys(obj).forEach(function (key) {
						if (RESERVED.indexOf(key) !== -1) return;
	
						if (key[0] !== "!") {
							delete obj[key];
							return;
						}
						if (is_Object(obj[key])) clearObject(obj[key]);
					});
				}
				function hasBang(obj) {
					return Object.keys(obj).some(function (key) {
	
						if (key[0] === "!") return true;
	
						var val = obj[key];
						if (is_Object(val)) return hasBang(val);
	
						return false;
					});
				}
			},
			handleRanges: function handleRanges() {
				var keys = Object.keys(this.suite),
				    start,
				    end;
	
				keys.forEach(function (x, index) {
					switch (x[0]) {
						case "[":
							if (start != null) {
								logger.warn("Range is already started at `%s` (skipp)", keys[start]);
								return;
							}
							start = index;
							break;
						case "]":
							if (end != null) {
								logger.warn("Range is already closed at `%s` (enlarge)", keys[end]);
							}
							end = index;
							break;
					}
				});
				if (start == null && end == null) {
					return;
				}if (start == null) start = 0;
				if (end == null) end = keys.length - 1;
	
				logger.log("Range: from bold<green<%s>> to bold<green<%s>>".color, keys[start], keys[end]);
	
				var range = {},
				    suite = this.suite;
				keys.slice(start, end + 1).forEach(function (key) {
					range[key] = suite[key];
				});
	
				RESERVED.forEach(function (key) {
					if (suite[key] != null) range[key] = suite[key];
				});
	
				this.suite = range;
			},
	
			Self: {
				_start: function _start() {
					runCase(this.proto, this.suite.$before, this._nextCase);
				},
				_nextCase: function _nextCase() {
	
					if (arguments.length > 0) {
						var index = 0;
						if (this.$cfg("errorableCallbacks") === true) {
							assert.equal(arguments[0], null);
							index = 1;
						}
						this.proto.arguments = _Array_slice.call(arguments, index);
					}
	
					var breakOnError = this.$cfg("breakOnError");
					if (breakOnError) {
						breakOnError = assert.failed !== 0 || assert.errors !== 0 || assert.timeouts.length !== 0;
					}
	
					for (var key in this.suite) {
						if (breakOnError) break;
	
						if (~this.processed.indexOf(key)) continue;
	
						// reserved
						if (RESERVED.indexOf(key) !== -1) continue;
	
						if (key.substring(0, 2) === "//") {
							console.warn(key.substring(2), "bold<(skipped)>".color);
							this.processed.push(key);
							continue;
						}
						this.processed.push(key);
	
						var case_ = this.suite[key];
						if (case_ == null) continue;
	
						var message = logger.formatMessage("   bold<%s>: ".color, key);
						if (typeof case_ === "object") message = message.bg_cyan;
	
						console.log("");
						console.print(message);
						runCase(this.proto, case_, this._nextCase, this.suite.$teardown, key);
						return;
					}
	
					var that = this;
					runCase(this.proto, this.suite.$after, function () {
						UTest.trigger("complete", that);
						that.onComplete();
					});
				}
			},
			Static: {
				stats: function stats() {
					return {
						suites: _tests.length
					};
				},
				clear: function clear() {
					_tests = [];
					_listeners = {};
				},
				run: function run(callback) {
					_index = -1;
					_testsDone = callback;
	
					nextUTest();
				},
				on: function on(event, callback) {
					switch (event) {
						case "complete":
							if (UTest.isBusy() === false) {
								callback();
								return;
							}
							break;
					}
	
					var fns = _listeners[event] || (_listeners[event] = []);
					fns.push(callback);
				},
				trigger: function trigger(event) {
					var fns = _listeners[event];
					if (fns == null || !fns.length) {
						return;
					}
	
					var args = Array.prototype.slice.call(arguments, 1);
					for (var i = 0, x, imax = fns.length; i < imax; i++) {
						x = fns[i];
						x.apply(null, args);
					}
				},
				isBusy: function isBusy() {
					return _index < _tests.length;
				},
				cfg: function cfg(options) {
					for (var key in options) {
						_options[key] = options[key];
					}
				},
	
				configurate: function configurate($config, done) {
					UTestConfiguration.configurate($config, done);
				},
	
				domtest: (function () {
					if (typeof DomTest !== "undefined") {
						return DomTest;
					}
					return require("domtest");
				})()
			}
		});
	
		global.UTest = UTest;
	})(__global);
	//# sourceMappingURL=UTest.es6.map
	// end:source /src/UTest.es6

	// source /src/browser/detect.js
	(function() {
	
		window.browserInfo = window.browserInfo || {};
		
		if (typeof navigator == 'undefined') {
			return;
		}
	
		var info = browserInfo,
			ua = navigator.userAgent,
			
			_object,
			_prop1,
			_prop2;
	
		function use(container, prop1, prop2) {
			_object = container;
			_prop1 = prop1;
			_prop2 = prop2;
		}
	
		function has(str, value, regexp) {
			if (ua.indexOf(str) == -1) {
				return false;
			}
			_object[_prop1] = value;
	
			if (regexp && _prop2) {
				var match = regexp.exec(ua);
				if (match && match.length > 1) {
					_object[_prop2] = match[1];
				}
			}
			return true;
		}
	
	
		use(info.platform = {}, 'name');
		if (!( //
		has('Windows', 'win') || //
		has('Mac', 'mac') || //
		has('Linux', 'linux') || //
		has('iPhone', 'iphone') || //
		has('Android', 'android'))) {
			info.platform.name = 'unknown'
		}
	
		use(info.browser = {}, 'name', 'version')
		if (!( //
		has('MSIE', 'msie', /MSIE (\d+(\.\d+)*)/) || //
		has('Firefox', 'firefox', /Firefox\/(\d+(\.\d+)*)/) || //
		has('Safari', 'safari', /Version\/(\d+(\.\d+)*)/) || //
		has('Opera', 'opera', /Version\/? ?(\d+(\.\d+)*)/))) {
			info.browser.name = 'unknown';
			info.browser.version = 0;
		}
		has('Chrome', 'chrome', /Chrome\/(\d+(\.\d+)*)/);
	
	
		use(info.engine = {}, 'name', 'version');
		if (!( //
		has('Trident', 'trident', /Trident\/(\d+(\.\d+)*)/) || //
		has('Gecko', 'gecko', /rv:(\d+(\.\d+)*)/) || //
		has('Presto', 'presto', /Presto\/(\d+(\.\d+)*)/) || //
		has('Opera', 'opera', /Version\/? ?(\d+(\.\d+)*)/))) {
			info.engine.name = 'unknown';
			info.engine.version = 0;
		}
		has('WebKit', 'webkit', /WebKit\/(\d+(\.\d+)*)/);
	
	}());
	// end:source /src/browser/detect.js
	// source /src/browser/action.js
	(function() {
	
		window.onerror = function(message, file, lineNumber) {
			var lines = [];
			lines.push('Message: ' + message);
			lines.push('File: ' + file + ':' + lineNumber);
			
			message = lines.join('\n');
			console.error(message);
			
			socket.emit('browser:utest:error', {
				error: message
			});
		};
	
		window.addEventListener('unhandledrejection', function(event) {
			var error = event.reason;
			var message = error.stack || error.message || JSON.stringify(error);
			console.error(message);		
			socket.emit('browser:utest:error', {
				error: message
			});
		});
		
		// source notify.js
		var notify;
		(function(){
			var _compo;
			
			
			
			
			notify = function (state) {
				if (_compo == null) {
					_compo = $('.utest-server-status').compo();
				}
				_compo.scope.status = state;
			};
			
		}());
		
		// end:source notify.js
		// source utils/logger.js
		(function() {
		
			var orig_log = console.log;
		
			console.print = function(){
				orig_log.apply(console, arguments);
			};
		
			for (var key in console) {
				if (typeof console[key] !== 'function') {
					continue;
				}
				console[key] = logger_create(key);
			}
		
			assert.onfailure = function() {
				socket.emit('browser:assert:failure', Arguments_dismissCircular(arguments));
			}
			assert.onsuccess = function() {
				socket.emit('browser:assert:success', Arguments_dismissCircular(arguments));
			}
		
			function logger_create(key) {
		
				var original = console[key];
				return function() {
					var args = Arguments_dismissCircular(arguments);
		
					if (socket) {
						socket.emit('browser:log', key, args);
					}
					return original.apply(console, args);
				};
			}
		
			function Arguments_dismissCircular(arguments_) {
				var arr = [],
					imax = arguments_.length,
					i = -1;
				while( ++i < imax ) {
					arr[i] = logger_dimissCircular(arguments_[i]);
				}
				return arr;
			}
		
			var logger_dimissCircular = (function() {
				var cache;
		
				function clone(mix) {
					if (mix == null) {
						return null;
					}
		
		
					var cloned;
		
					if (mix instanceof Array) {
						cloned = [];
						for (var i = 0, imax = mix.length; i < imax; i++) {
							cloned[i] = clone(mix[i]);
						}
						return cloned;
					}
		
					if (typeof mix === 'object') {
						var type = Object.prototype.toString.call(mix);
						if (type.indexOf('[object HTML') === 0) 
							return '[dom ' + mix.tagName + ']';
						
						if (~cache.indexOf(mix)) {
							return '[object Circular]';
						}
						cache.push(mix);
		
						cloned = {};
						for (var key in mix) {
							cloned[key] = clone(mix[key]);
						}
						return cloned;
					}
		
					return mix;
				}
		
				return function(mix) {
					if (typeof mix === 'object' && mix != null) {
						cache = [];
						mix = clone(mix);
						cache = null;
					}
		
					return mix;
				};
			}());
		
		}());
		// end:source utils/logger.js
		// source utils/script.js
		var script_insert = (function() {
		
			function scriptLoadedDelegate(callback) {
				return function scriptLoaded(event) {
					if (event && event.type === 'error') {
						console.error('Script cannt be loaded', event.target.src);
					}
		
					callback && callback();
				};
			}
		
		
			return function(data, callback) {
		
				var path = data.path,
					code = data.code,
					tag = document.createElement('script');
		
				callback = scriptLoadedDelegate(callback);
		
				tag.type = 'text/javascript';
		
				if (path) {
					//
					path += (~path.indexOf('?') ? '&' : '?') + Date.now();
		
					tag.src = path;
		
					if ('onreadystatechange' in tag) {
						tag.onreadystatechange = function() {
							switch (this.readyState) {
								case 'complete':
								case 'loaded':
									callback();
									break;
							}
						};
					} else {
						tag.onload = tag.onerror = callback;
					}
				} else {
					tag.innerHTML = code;
				}
		
				var head = document.querySelector('head');
		
				head.appendChild(tag);
			}
		}());
		
		var script_insertMany = function(bundle, callback){
			if (!(arr_isArray(bundle) && bundle.length)) {
				callback();
				return;
			}
			
			for (var i = 0, x, imax = bundle.length; i < imax; i++){
				x = bundle[i];
				
				script_insert({path: x}, i === imax - 1 ? callback : null);
			}
		}
		
		var script_getResources = (function() {
		
		
			return function() {
				var scripts = document.querySelectorAll('script'),
					resources = [];
		
				for (var i = 0, x, imax = scripts.length; i < imax; i++) {
					x = scripts[i].getAttribute('src');
		
					if (x) {
						resources.push(x);
					}
				}
				return resources;
			};
		}());
		// end:source utils/script.js
		// source utils/include.js
		var include_ready = (function() {
			var callback;
		
			function defer() {
				include.done(function() {
					setTimeout(check);
				});
			}
		
			function check() {
				if (typeof include === 'undefined') {
					callback();
					return;
				}
				if (include.state == null || include.state > 3) {
					callback();
					return;
				}
		
				defer();
			}
		
			return function(fn) {
				callback = fn;
		
				check();
			};
		}());
		
		var include_clearCache = function() {
			if (typeof include === 'undefined') {
				return;
			}
		
			var resources = include.getResources(),
				scripts = document.querySelectorAll('head > script');
			
			// @TODO - remove only scripts from resources
			for (var i = 0, x, imax = scripts.length; i < imax; i++){
				x = scripts[i];
				x.parentNode.removeChild(x);
			}
			
			for (var key in resources) {
				resources[key] = {};
			}
			
			if (window.location.search.indexOf('nocache') === -1) 
				include.cfg('version', +(new Date));
			
			include = include.instance();
		};
		
		var include_reset = function(){
			if (typeof include === 'undefined' || include.instance == null) {
				return;
			}
			
			include = include.instance();
		}
		// end:source utils/include.js
		
		// source RunnerDom.js
		var RunnerDom;
		(function() {
			RunnerDom = Class({
				Static: {
					run: function(configs, socket, callback){
		
						_runners = [];
						_socket = socket;
						_configs = arr_isArray(configs) ? configs : [configs];
						_onComplete = callback;
						_stats = {};
						_configIndex = _scriptIndex = -1;
		
						_socket.emit('browser:utest:start', {
							userAgent: window.browserInfo
						});
		
						assert.reset();
						cfg_runNext();
					},
					getResources: function(){
						var resources = [];
		
						for (var i = 0, x, imax = _runners.length; i < imax; i++){
							x = _runners[i];
		
							if (x.resources) {
								resources = resources.concat(x.resources);
							}
						}
		
						return resources;
					},
					getCurrentConfig: function(){
						return _configs[_configIndex];
					}
				},
		
				Construct: function(config){
					this.config = config;
					this.scripts = config.scripts;
		
					var key, val, cfg = config.$config;
					for(key in cfg){
						val = cfg[key];
						if (/^function\s*\(/.test(val)) {
							cfg[key] = eval('(' + val + ')');
						}
					}
		
				},
				run: function(callback) {
					this.onComplete = callback;
					this.index = -1;
					this.stats = [];
		
					TestSuite.clear();
					include_clearCache();
		
					_socket.emit('browser:utest:suite:start', {
						url: this.config.name
					});
		
					if (!(this.scripts && this.scripts.length)) {
						console.warn('Suite has not test scripts');
						callback();
						return this;
					}
		
					suite_prepair(this, this.process);
					return this;
				},
		
				Self: {
		
					process: function() {
		
						if (++this.index > this.scripts.length - 1) {
							this.resources = script_getResources();
							this.onComplete(this);
							return;
						}
		
						var path = this.scripts[this.index];
		
						_socket.emit('browser:utest:script',{
							script: path
						});
		
						include_reset();
						TestSuite.clear();
		
						path = '/utest/' + path;
		
						script_insert({path: path}, this.processSingle);
		
					},
		
					processSingle: function(force){
		
						var that = this;
		
						include_ready(function(){
							TestSuite.run(that.singleComplete);
						});
					},
		
					singleComplete: function() {
						this.stats.push({
							url: this.scripts[this.index],
							total: assert.total,
							failed: assert.failed,
							timeouts: assert.timeouts,
							errors: assert.errors,
							callbacks: assert.callbacks,
						});
		
						this.process();
					}
				}
			});
		
			var _configs,
				_configIndex,
				_socket,
				_stats,
				_onComplete,
				_runners;
		
		
			function cfg_runNext() {
				if (++_configIndex > _configs.length - 1) {
					_onComplete(_stats);
					return;
				}
		
				var config = _configs[_configIndex];
				_socket.emit('browser:utest:beforestart', {
					config: config
				}, function(){
		
					_runners.push(new RunnerDom(config).run(cfg_runNext));
				});
			}
		
			function suite_prepair(runner, callback) {
				var suite = runner.config;
		
				fn_waterfall(
					function(done) {
						cfg_runConfigurationScript(
							'$after', _configs[_configIndex - 1], done
						);
					},
					function(done) {
						suite_loadEnv(runner, suite, done);
					},
					function(done){
						cfg_runConfigurationScript(
							'$before', suite, done
						);
					},
					callback
				);
			}
			function suite_loadEnv(runner, suite, done) {
				if (arr_isArray(suite.env) === false) {
					done();
					return;
				}
		
				if (typeof include === 'undefined') {
					script_insertMany(suite.env, done);
					return;
				}
		
				var resource = include
					.instance('/utest/')
					;
		
				suite.env.forEach(function(x){
					resource.js(x);
				});
		
				resource.done(function(resp){
					setTimeout(function(){
						for (var lib in resp) {
							var exports = resp[lib];
		
							if (exports != null) {
								window[lib] = exports;
							}
						}
		
						done(resp);
					});
				});
			}
		}());
		// end:source RunnerDom.js
		// source utest.extend.js
		
		
		UTest.getSocket = function(callback){
			
			callback(socket);
		};
		
		UTest.getConfig = RunnerDom.getCurrentConfig;
		// end:source utest.extend.js
		
		var TestSuite = window.UTest,
			state_ready = 1,
			state_busy = 2,
			state = state_ready,
			configuration = new Class.Await,
			socket = io.connect(location.protocol + '//' + location.host + '/utest-browser')
				.on('connect', function(){
					notify('connected');
				})
				.on('disconnect', function(){
					notify('disconnected');
				})
				.on('server:utest:handshake', function(done) {
					console.log('browser:handshake');
					done({
						userAgent: window.browserInfo,
						ready: state
					});
				})
				.on('server:utest', utest_start)
				;
	
		
	
	
	
		function utest_start(config) {
			
			if (!config) {
				socket.emit('browser:utest:end', {
					error: 'No scripts to be tested'
				});
				return;
			}
			
			state = state_busy;
			
			if (configuration._wait > 0) {
				configuration.always(utest_start.bind(null, config));
				return;
			}
			
			RunnerDom.run(config, socket, function(){
					
					state = state_ready;
				
					var resources = RunnerDom.getResources();
					
					socket.emit('browser:utest:end', {
						total: assert.total,
						failed: assert.failed,
						timeouts: assert.timeouts,
						callbacks: assert.callbacks,
						errors: assert.errors,
						
						userAgent: window.browserInfo,
						resources: resources
					});
					
					
				
			});
			
		}
		
		
		function server_configurate(action){
			var args = Array.prototype.slice.call(arguments);
			
			args.unshift('>server:utest:action');
			args.push(configuration.delegate());
			
			socket
				.emit
				.apply(socket, args)
				;
		}
		
	
	
		
	}());
	// end:source /src/browser/action.js


}());
