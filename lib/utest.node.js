"use strict";

(function(){
	var __env = 'node';
	var __global = global;

	(function(){
		global.sinon = require('sinon');
	}());

	(function(){
		global.assert = require('assertion');
	}());

	(function(){
		global.DomTest = require('domtest');
	}());


	// source /src/vars.js
	
	var _Array_slice = Array.prototype.slice,
		mask = global.mask;
		
		
	RegExp.prototype.toJSON = RegExp.prototype.toString;
	
	// end:source /src/vars.js

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
	// source /src/utils/process.es6
	"use strict";
	
	var process_toggle;
	(function () {
		/**
	  * params:
	  *  	- id: string
	  * 		- action: string enum, start|stop
	  * 		- command: string
	  * 		- commands: Array<string>
	  * 		- cwd: string (default current cwd)
	  */
		process_toggle = function (params, done) {
			var id = params.id,
			    process = __process[id];
			if (params.action === "stop") {
	
				if (process != null) {
					delete __process[id];
					process.kill(done);
				}
				done(new Error("Process not found to stop"));
				return;
			}
	
			if (process != null) {
				return done(new Error("Process with id is active"));
			}
	
			var options = {
				cwd: params.cwd,
				command: params.command,
				detached: params.detached,
				matchReady: toRegexp(params.matchReady),
				silent: params.silent === void 0 ? params.silent : false };
	
			process = __process[id] = new atma.shell.Process(options);
			process.always(function () {
				delete __process[id];
			}).on("process_exception", function (data) {
				return done(data.error);
			}).on("process_ready", function () {
				return done(null, process);
			});
	
			process.run();
		};
	
		var __process = {};
	
		function toRegexp(str) {
			if (str == null || str[0] !== "/") {
				return null;
			}
			var last = str.lastIndexOf("/");
			var rgx = str.substring(1, last);
			var flags = str.substring(last + 1);
			return new RegExp(rgx, flags);
		}
	})();
	//# sourceMappingURL=process.es6.map
	// end:source /src/utils/process.es6

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
			return /^(function)?\s*\([\w\s,]*(done|next)/.test(str);
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
	// source /src/assert/assert.node.js
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
	
	
		assert.resolveData = function(stackData, base){
	
			var data = Object.extend({}, stackData),
				stack = stackData.stack.split('\n').splice(1),
				rgx_http = /http:\/\/([^\/]+)\//,
				rgx_local = RegExp.fromString(base.replace('file:///','')),
				rgx_file = /([^\(@]+\:\d+(\:\d+)?)\)?$/;
	
			if (stack.length === 0) {
				delete data.stack;
				return data;
			}
	
			stack = stack.map(function(x){
				return x
						.replace(rgx_http, '')
						.replace(rgx_local, '')
						.replace('at ', '');
			});
			var i = -1,
				imax = stack.length,
				file;
			while (++i < imax ){
				var path = stack[i].trim();
				if (path.indexOf('assert') > -1)
					continue;
	
				file = rgx_file.exec(path);
				if (file != null)
					break;
			}
	
			if (file) {
				var parts = file[1].split(/:(?![\/\\])/);
	
				data.file = parts[0];
				data.line = parts[1] << 0;
				data.col = parts[2] << 0;
			}else{
				console.warn('Filepath could not be parsed from', stack[0].trim());
			}
	
	
			data.stack = stack.join('\n');
			return data;
		};
	
	}(__global));
	// end:source /src/assert/assert.node.js
	// source /src/node/action.js
	(function() {
		/**
		 *	Atma.Toolkit Action entry
		 */
		var _suite,
			_configs
			;
	
		var TestSuite = global.UTest;
	
		include.exports = {
			help: {
				desciption: 'Start uTest runner. To run test(s) in browser refer to #browser-runner section',
				arguments: {
					'<empty>': 'Load from `test/config.js`',
					'[arg]': 'Check for a test filename in `test/**` or for a suite name',
					'-browser': 'When testing single file, run it in browsers environment',
					'-watch': 'Watch for any file change and rerun the tests',
					'-config path': 'Override default configuration path. @default: `test/config.js`'
				},
				examples: {
					'`atma test`': 'Load suites from `test/config.js` and run tests',
					'`atma test foo`': 'Check for `test/foo.test`, when not exists, load `test/config.js` and check for a suite with a name `foo`'
				},
				'# browser  runner': [
					'1) Start http server: `$ atma server`',
					'2) Navigate with any browser(s) to `http://localhost:5777/utest/`',
					'Now browser slaves are ready to except tests'
				],
				'# configuration file': {
					description: 'CommonJS module which exports suite(s) for the runner in json format',
					exports: 'Suite | Array<Suite> | Object',
					'# Suite':  {
						exec: 'String`dom|node`',
						env: 'ScriptPath | Array<ScriptPath> :: IncludeJS alias feature can be used',
						tests: 'String|GlobPattern - path to test(s)',
						fork: 'ConfigPath - run in seperate thread another test configuration',
						cwd: 'WorkingPath - for `fork`'
					},
					'# Object': {
						'suites': 'Suite | Array<Suite>',
						'$config': {
							'$before': 'Function<?onComplete> | ScriptPath',
							'$after': 'Function<?onComplete> | ScriptPath'
						}
					},
	
					'- simple suites array example': [
						{
							exec: 'dom',
							env: [
								'src/foo.js::Foo'
							],
							tests: 'src/browser/**.test'
						},{
							exec: 'node',
							env: 'src/foo.js::Foo',
							tests: 'src/node/**.test'
						}
					]
				}
			},
			process: function(setts, done) {
	
				// configurate
				io.File.disableCache();
				logger.cfg('logCaller', false);
				process.env.ENV = 'test';
				process.env.NODE_ENV = 'test';
	
	
				var arg = setts.script || app.config.$cli.args[1],
					config;
	
				cfg_prepairSettings(setts, arg);
	
				config = cfg_loadConfig(setts);
				if (cfg_hasScripts(setts)) {
					// running via cli or atma-action, take `env`/`$config` from config
					cfg_suiteInfoFromConfig(setts, config);
				}
				else {
	
					// Parse all from suites, as no scripts via cli or atma-action
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
				if (_configs.length === 0) {
					logger.log('<config>', config);
					return done('No scripts to test');
				}
	
	
				include = global.include = include
					.instance(setts.base)
					.setBase(setts.base)
					;
	
				_suite = new RunnerSuite(_configs, setts);
				// run configuration only if has suites, otherwise configuration will be run by the root suite
				var cfg = config.suites && config,
					runCfg = cfg_runConfigurationScript;
	
				runCfg('$before', cfg, function(){
					_suite.run(function(exitCode){
						runCfg('$after', cfg, function(){
							process.exit(exitCode);
						});
					});
				});
			}
		};
	
		process.on('uncaughtException', function(error){
			console.error(error.stack || error);
	
			if (_suite.watch) {
				return;
			}
			process.exit(1);
		});
	
		process.on('unhandledRejection', function(error){
			console.error(error.stack || error);
	
			if (_suite.watch) {
				return;
			}
			process.exit(1);
		});
	
		// source utils/slave.js
		var slave_start,
			slave_openBrowser;
		
		(function(){
			
			var PORT = 5777,
				HOST = '127.0.0.1'
				;
			
			slave_start = function(callback){
				
				app.runAction('shell', {
					command: {
						command: 'atma server',
						detached: true
					},
					parallel: true
				}, function(error){
					if (error) 
						return callback(error);
					
					ensurePortIsBusy(function(error){
						
						if (error) 
							return callback(error);
						
						
						
						slave_openBrowser(callback);
					}, 0);
				});
				
			};
			
			slave_openBrowser = function(callback) {
				var url = 'http://%1:%2/utest/'.format(HOST, PORT);
				var spawn = require('child_process').spawn,
					commands = {
						darwin: 'open',
						win32: 'explorer.exe',
						linux: 'xdg-open'
					};
				
				spawn(commands[process.platform], [ url ]);
				callback();
				
			}
			
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
			io_clean
			;
			
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
				
				socket.disconnect();
				dfr = null;
			};
			
			io_connect = function(config){
				
				if (dfr) 
					return dfr;
				
				dfr = new Class.Deferred();
				
				
				if (client == null) 
					client = require('socket.io-client');
				
				var port = config.port || 5777,
					url = 'http://localhost:%1/node'.format(port),
					
					socket = client.connect(url, {
						reconnection: true,
						reconnectionDelay: 1000,
						reconnectionDelayMax: 2000,
								
						'connect timeout': 2000,
						'force new connection': true
					});
				
				socket
					.on('connect', function() {
						dfr.resolve(socket)
					})
			
					.on('connect_error', function(error) {
						
						socket.disconnect();
						socket.removeAllListeners();
						
						dfr && dfr.reject(error);
					})
					
				
				return dfr;
			};
			
		}());
		// end:source utils/io.js
		// source utils/cfg.js
		var cfg_prepairSettings,
			cfg_loadConfig,
			cfg_hasScripts,
			cfg_getScripts,
			cfg_parseSuites,
			cfg_suiteInfoFromConfig,
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
		
		
			/**
			 * base: [String]
			 * env: [String]
			 * tests: String | [String]
			 */
			cfg_loadConfig = function(baseConfig) {
		
				var path = baseConfig.config;
		
				if (path == null) {
					path = /\/test.?[\\\/]?$/.test(baseConfig.base)
						? 'config.js'
						: 'test/config.js';
		
					path = net.Uri.combine(baseConfig.base, path);
				}
		
				var file = new io.File(path);
				if (file.exists() === false)
					return { error: '404 ' + path };
		
		
				return suite_normalize(require(file.uri.toLocalFile()));
		
			}
		
			cfg_getScripts = function(baseConfig, config) {
		
				if (config.tests) {
					// root object, should not have suites
					var tests = config.tests,
						base = baseConfig.base,
						nodeScripts = baseConfig.nodeScripts,
						domScripts = baseConfig.domScripts,
						executor = baseConfig.exec;
		
					cfg_addScript(tests, base, nodeScripts, domScripts, executor);
		
		
					baseConfig.env = config.env;
					baseConfig.$config = config.$config;
				}
		
				baseConfig.suites = cfg_parseSuites(config.suites, baseConfig.base);
			};
		
			cfg_hasScripts = function(config) {
				if (!config)
					return false;
		
				if (!arr_isEmpty(config.nodeScripts))
					return true;
		
				if (!arr_isEmpty(config.domScripts))
					return true;
		
				return false;
			};
		
			cfg_parseSuites = function(suites, base) {
				var array = [],
					key, x, config;
		
				for (key in suites) {
					x = suites[key];
		
					if (x.fork) {
						array.push(x);
						continue;
					}
					config = {
						base: x.base || base,
						exec: x.exec,
						env: x.env,
						nodeScripts: [],
						domScripts: [],
						$config: x.$config
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
		
			cfg_suiteInfoFromConfig = function(setts, config) {
				setts.env = arr_distinctConcat(
					setts.env, config.env
				);
				if (config.suites == null) {
					setts.$config = config.$config;
					setts.exec = config.exec;
					recalculateExecScripts(setts);
					return;
				}
		
				var path = first(setts.nodeScripts) || first(setts.domScripts),
					suite = suite_getForPath(config.suites, path);
				if (suite) {
					setts.env = arr_distinctConcat(
						setts.env, suite.env
					);
					setts.$config = suite.$config;
					setts.exec = suite.exec;
					recalculateExecScripts(setts);
				}
				// private
				function first(arr){
					return arr && arr[0];
				}
				function recalculateExecScripts(config){
					var exec = config.exec,
						from, to;
					if (exec === 'dom' && config.nodeScripts.length) {
						from = 'nodeScripts';
						to = 'domScripts';
					}
					if (exec === 'node' && config.domScripts.length) {
						from = 'domScripts';
						to = 'nodeScripts';
					}
					if (from == null)
						return;
		
					config[to] = config[to].concat(config[from]);
					config[from].length = 0;
				}
			};
		
		
			cfg_split = function(config) {
				if (config.fork)
					return [ config ];
		
				// split config per executor
				var configs = [];
				if (!arr_isEmpty(config.domScripts) && !config.node) {
					configs.push({
						exec: 'browser',
						env: config.env,
						scripts: config.domScripts,
						base: config.base || config.cwd,
						$config: config.$config
					});
				}
		
				if (!arr_isEmpty(config.nodeScripts) && !config.browser) {
					configs.push({
						exec: 'node',
						env: config.env,
						scripts: config.nodeScripts,
						base: config.base || config.cwd,
						$config: config.$config
					});
				}
		
				if (config.suites) {
					config.suites.forEach(function(suite){
						configs = configs.concat(cfg_split(suite));
					});
		
				}
		
				return configs;
			}
		
		
		
			watch = function(base, resources, callback) {
				watch = function(){};
		
		
				base = new net.Uri(base);
				resources.forEach(function(url){
		
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
							var path = file.uri.toLocalFile();
							io.File.clearCache(path);
		
							var sys = require('path').normalize(path);
							delete require.cache[sys];
		
							callback(path);
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
			function suite_normalize(config){
				normalize(config);
		
				var suites = config.suites;
				if (suites) {
		
					if (arr_isArray(suites)) {
						logger.warn('Use object{SUITE_NAME:CONFIG}. Normalizing the array...');
						var obj = {};
						suites.forEach(function(suite, index){
							obj[index] = suite;
						});
						suites = obj;
					}
		
					for(var key in suites){
						normalize(suites[key], key);
					}
				}
				// private
				function normalize(x, name){
					if (typeof x.env === 'string')
						x.env = [ x.env ];
		
					if (name != null)
						x.name = x.name || name;
				}
				return config;
			}
		
		}());
		// end:source utils/cfg.js
		// source utils/logger.js
		var log_clearStd,
			log_stringDiff;
		(function(){
			
			var diff = null;
			
			console.print = function(){
				var message = Array.prototype.slice.call(arguments).join(' ');
				
				process.stdout.write(message);
			};
			
			log_clearStd = function(){
				process.stdout.write('\u001b[2J');//'\033[2J');
				process.stdout.write('\u001bc');//'\033c');
			};
			
			log_stringDiff = function(a, b){
				diff = require('diff');
				log_stringDiff = function(a, b){
					var str = diff
						.diffWordsWithSpace(a, b)
						.map(function(x){
							var val = x.value;
							if (x.added || x.removed) {
								if (/^[ ]*$/.test(val)) {
									val = val[x.added ? 'bg_green' : 'bg_red'];
								}
								else if (/^\s*$/.test(val)) {
									val = val
										.split('')
										.map(function(x){
											var code = x.charCodeAt(0);
											if (code === 13) {
												return '\\r\r';
											}
											if (code === 10) {
												return '\\n\n';
											}
											if (x === ' ') {
												return x[x.added ? 'bg_green' : 'bg_red'];
											}
											return '[' + code + ']'.bg_cyan;
										})
										.join('');
									
								}
							}
							if (x.added) 
								return val.green;
							if (x.removed) 
								return val.red;
							
							return val;
						})
						.join('');
					
					logger.log(str);
				};
				log_stringDiff(a, b);
			};
			
		}());
		// end:source utils/logger.js
	
		// source Runner.js
		var status_blank = 1,
			status_connecting = 2,
			status_connected = 3,
			status_prepair = 4,
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
		
				if (config.fork) {
					// no sub files
					return [];
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
		
					this.suites.forEach(function(x){
						x.files = utest_resolveFiles(x);
					});
				},
				notifyTest: function(url){
					var name = url.replace(this.config.base, '');
					logger.log('Test: ', ('bold<cyan<' + name + '>>').color);
				},
				onComplete: function(stats) {
					this.status = status_ready;
		
					function count(key) {
						var sum = 0;
		
						stats.forEach(function(x) {
							if (x.error) {
								logger.error(x.error);
								return;
							}
		
							if (x[key] == null)
								return;
		
							if (typeof x[key] === 'object' && 'length' in x[key]) {
								sum += x[key].length;
								return;
							}
		
							sum += x[key];
						});
						return sum;
					}
					function aggr(key) {
						var aggr = [];
						stats.forEach(function(x){
							if (x[key] == null)
								return;
		
							if (typeof x[key] === 'object' && 'length' in x[key]) {
								aggr.push.apply(aggr, x[key]);
								return;
							}
							aggr.push(x[key]);
						});
						return aggr;
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
						.log('\n\nbold<%1<Done.>>'
							.format(failed ? 'red' : 'green')
							.color)
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
		
					if (data.stack == null) {
						data.stack = ''
					}
		
					var base = this.suites[0].base || '';
		
		
					data = assert.resolveData(data, base);
					logger.log('');
		
					if ('actual' in data || 'expected' in data) {
						var actual = data.actual,
							expect = data.expected;
		
						if (typeof expect === 'string'
								&& typeof actual === 'string'
								&& expect.length > 20
								&& actual.length > 10
								) {
		
							log_stringDiff(expect, actual);
						} else {
							var msg = '%s bold<red<↔>> %s';
							logger.log(msg.color, data.actual, data.expected);
						}
					}
		
					if (data.message && data.generatedMessage !== true)
						logger.log(' bold<red<::>> '.color + data.message.yellow);
		
					if (data.file && data.line != null) {
		
						var path = data
								.file
								.replace(/(\/)?utest\//i, '$1')
								.replace(/\?.+/, '')
								.replace(/^\//, ''),
		
							uri = new net.Uri(base).combine(path);
		
						if (io.File.exists(uri)) {
							var source = io.File.read(uri),
								lines = source.split(/\r\n|\r|\n/g),
								line = lines[data.line - 1],
								code = line && line.trim()
								;
							logger
								.log('  bold<%1>'.color.format(path))
								.log('  bold<cyan< → >> bold<%1 |> bold<red< %2 >>'.color.format(data.line + 1, code))
								.log('');
						}
		
						return;
					}
				},
		
				onSuccess: function(){
					process.stdout.write('bold<green< |>>'.color);
				}
			});
		
		
		}());
		// end:source Runner.js
		// source RunnerClient.js
		var RunnerClient = Class({
			Base: Runner,
			Construct: function(){
				this.suites.forEach(function(suite){
					
					var key, val, cfg = suite.$config;
					for(key in cfg){
						val = cfg[key];
						if (typeof val === 'function') {
							cfg[key] = val.toString();
						}
					}
				});
			},
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
						
						logger.log('bold<green<server connected>>'.color);
						
						that.socket = socket;
						
						
						socket
							.on('error', function(error){
								logger.error('Socket error', error);
								io_clean();
							})
							.on('server:utest:end', function(){
								that.onComplete.apply(that, arguments);
							})
							.on('server:error', function(message) {
								that.socket.disconnect();
								
								logger.error(message);
								done(1);
							})
							.on('server:log', function(type, args) {
								var fn = console[type] || console.log;
								fn.apply(console, args);
							})
							.on('slave:start', function(stats) {
								var message = 'bold<#{browser.name} #{browser.version}>';
								logger
									.log(message.format(stats.userAgent).color)
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
				logger.log(
					'bold<-->--bold<-->--bold<-->--bold<--> yellow<client>'.color
					, 'bold<%1>'.format(Date.format(new Date(), 'HH:mm:ss')).color
					, '\n'
				);
				
				var cli = app.config.$cli;
				if (this.startServer) 
					cli.params.workerAutostart = false;
				
				switch (this.status) {
					case status_blank:
					case status_connected:
					case status_ready:
						this.status = status_testing;
						this.socket.emit('client:utest', this.suites, cli);
						return;
				}
				logger.warn('Server is not ready', this.status);
			}
		});
		// end:source RunnerClient.js
		// source RunnerNode.es6
		"use strict";
	
	var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) { _arr.push(_step.value); if (i && _arr.length === i) break; } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } };
	
	var RunnerNode;
	(function () {
		RunnerNode = Class({
			Base: Runner,
			Construct: function Construct() {
				assert.onsuccess = this.onSuccess.bind(this);
				assert.onfailure = this.onFailure.bind(this);
	
				Class.bind(this, "singleComplete", "runTests", "process");
	
				_runner = this;
			},
			run: function run() {
				if (status_ready !== this.status && status_blank !== this.status) {
					logger.warn("Node is busy ... ", this.status);
					return;
				}
				this.status = status_prepair;
				this.runTests();
			},
			Self: {
				runTests: function runTests() {
	
					this.index = -1;
					this.status = status_testing;
					this.stats = [];
					this.clearResources();
	
					_suites = this.suites;
					_suiteIndex = -1;
	
					suite_next(this.process);
				},
				process: (function (_process) {
					var _processWrapper = function process() {
						return _process.apply(this, arguments);
					};
	
					_processWrapper.toString = function () {
						return _process.toString();
					};
	
					return _processWrapper;
				})(function () {
					// go to next suite, otherwise process file from current one
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
	
					var incl = include.cfg("path", _suite.base).instance(url).js(url).done(function (resp) {
	
						process.nextTick(function () {
							TestSuite.run(that.singleComplete);
						});
					});
	
					this.resources.push(incl);
				}),
				singleComplete: function singleComplete() {
					this.stats.push({
						url: this.files[this.index].uri.toString(),
						total: assert.total,
						failed: assert.failed,
						timeouts: assert.timeouts,
						errors: assert.errors,
						callbacks: assert.callbacks });
	
					this.process();
				} },
			clearResources: function clearResources() {
				this.resources && this.resources.forEach(resource_clear);
				this.envResource && resource_clear(this.envResource);
	
				this.resources = [];
				this.envResource = null;
			},
			getResources: function getResources() {
				var arr = [];
	
				this.envResource && resource_aggrIncludes(this.envResource, arr);
	
				this.resources.forEach(function (resource) {
					resource_aggrIncludes(resource, arr);
				});
				return arr;
			}
		});
	
		function resource_clear(resource) {
	
			var bin = include.getResources();
	
			for (var type in bin) {
				for (var key in bin[type]) {
					if (bin[type][key] === resource) {
						delete bin[type][key];
						break;
					}
				}
			}
	
			if (resource.includes) {
				resource.includes.forEach(function (data) {
					resource_clear(data.resource);
				});
			}
	
			if (typeof require !== "undefined" && require.cache) {
				for (var key in require.cache) {
					delete require.cache[key];
				}
			}
		}
	
		function resource_aggrIncludes(resource, aggr) {
			if (resource.url && aggr.indexOf(resource.url) === -1) {
				aggr.push(resource.url);
			}
			if (resource.includes) {
				resource.includes.forEach(function (data) {
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
	
			if (typeof env === "string") {
				env = [env];
			}
			if (Array.isArray(env) === false) {
				logger.warn("\"env\" property should be an array of strings", env);
				callback();
				return;
			}
			if (env.length === 0) {
				callback();
				return;
			}
	
			var resource = include.instance(base).setBase(base);
	
			base = new net.Uri(base);
			var pckg = env.map(function (x) {
				var _x$split = x.split("::");
	
				var _x$split2 = _slicedToArray(_x$split, 2);
	
				var src = _x$split2[0];
				var alias = _x$split2[1];
				var uri = base.combine(src[0] === "/" ? src.substring(1) : src);
	
				return [uri, alias];
			}).filter(function (arr) {
				var _arr = _slicedToArray(arr, 1);
	
				var uri = _arr[0];
	
				if (io.File.exists(uri) === false) {
					logger.warn("Resource from Environment - 404 -", uri.toLocalFile());
					return false;
				}
				return true;
			}).map(function (arr) {
				var _arr = _slicedToArray(arr, 2);
	
				var uri = _arr[0];
				var alias = _arr[1];
	
				return uri.toString() + (alias ? "::" + alias : "");
			});
	
			resource.inject(pckg).done(function (resp) {
				return setTimeout(function () {
					Object.keys(resp).filter(function (key) {
						return key !== "load";
					}).forEach(function (key) {
						var lib = resp[key];
						if (lib != null) {
							global[key] = lib;
							return;
						}
	
						if (global[key] != null) {
							return;
						}
						var injected = eval("typeof " + key + " !== 'undefined' && " + key);
						if (injected) {
							global[key] = injected;
							return;
						}
						logger.log("<utest:Environment> Loaded dependency has no exports `%s`.".yellow, key).log("yellow<Should it be global variables, to bold<dismiss> this error use smth like this:>".color).log("`{ env: [ \"someLib.js::globalVarName\" ] }`");
					});
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
	
			if (_suite == null) {
				_runner.onComplete(_runner.stats);
				return;
			}
	
			_runner.files = _suite.files;
			_runner.config = _suite;
			fn_waterfall(function (done) {
				cfg_runConfigurationScript("$after", _suites[_suiteIndex - 1], done);
			}, function (done) {
				suite_loadEnv(_runner, _suite, done);
			}, function (done) {
				cfg_runConfigurationScript("$before", _suite, done);
			}, callback);
		}
	})();
	//# sourceMappingURL=RunnerNode.es6.map
		// end:source RunnerNode.es6
		// source RunnerFork.js
		var RunnerFork = Class({
			Base: Runner,
			failed: 0,
			run: function(done) {
				
				var self = this,
					cfgPath = this.config.fork,
					base = this.config.cwd,
					Fork = require('child_process').fork
					;
				
				logger
					.log('\t\t\t\t>'.bg_yellow)
					.log('Fork'.bg_yellow.black, 'bold<%1>'.format(net.Uri.combine(base, cfgPath)).color)
					.log('\t\t\t\t>'.bg_yellow)
					.log('');
				
				var child = Fork(process.mainModule.filename, [
					'test',
					'--config',
					cfgPath
				], {
					cwd: net.Uri.combine(process.cwd(), base)
				});
				
				child.on('exit', function(code){
					self.failed = code;
					logger.log('Fork done'[ code != 0 ? 'bg_red' : 'bg_green']);
					done(code !== 0 ? code : null);
				});
			}
		});
		// end:source RunnerFork.js
	
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
		
			forks: null,
			cfgNode: null,
			cfgBrowser: null,
		
			closeSockets: function(){
				this.runners.forEach(function(x){
					x.socket && x.socket && x.socket.disconnect();
				});
			},
		
			getFailed: function(){
				return this.runners.reduce(function(aggr, x) {
					return aggr + (x.failed || 0);
				}, 0);
			},
		
			getResources: function(){
				return this.runners.reduce(function(aggr, x) {
					return aggr.concat(x.getResources());
				}, []);
			},
		
			Self: {
		
				onComplete: function(){
		
					if (this.watch !== true) {
		
						this.closeSockets();
		
						var failed = this.getFailed();
		
						logger
							.log('')
							.log(failed === 0 ? 'bold<green<Success>>'.color : 'bold<red<Failed>>'.color);
		
						this.callback(failed);
						return;
					}
		
					closeSocketsOnExit(this);
		
					var self = this;
					watch(this.base, this.getResources(), function(path){
		
						log_clearStd();
		
						var date = new Date;
						logger.log((date.getHours()
							+ ':'
							+ date.getMinutes()
							+ ':'
							+ date.getSeconds()).bg_cyan
							+ ' modified ' + ('bold<%1>'.format(path).color));
						self.runTests();
					});
					logger.log(' - watcher active.'.yellow);
				},
		
				process: function(){
					var runner = this.runners[++this.index];
		
					if (runner == null) {
						this.onComplete();
						return;
					}
					runner.run(this.process);
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
		
				if (this.forks) {
					var runners = this.forks.map(function(cfg) {
						return new RunnerFork(cfg);
					});
					this.runners = this.runners.concat(runners);
				}
		
				this.runners.forEach(function(runner){
					runner.on('complete', this.process);
				}, this);
		
				if (this.watch)
					log_clearStd();
		
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
		
				if (this.base == null && config.base)
					this.base = config.base;
		
				if (this.watch == null && config.watch)
					this.watch = config.watch;
		
				if ('browser' === config.exec || 'dom' === config.exec) {
					cfg_add(this, 'cfgBrowser', config);
					return;
				}
		
				if (typeof config.fork === 'string') {
					if (this.forks == null)
						this.forks = [];
		
					this.forks.push(config);
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
				rl.write('\n');
				global.rl = rl;
			}
		
			process.on('SIGINT', function() {
				suite.closeSockets();
				process.exit(0);
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
						.log('bold<Executed `atma server`?>'.color)
						;
				});
		};
		
		UTest.getConfig = Runner.getCurrentConfigs;
		// end:source utest.extend.js
	
	}());
	// end:source /src/node/action.js


	
}());