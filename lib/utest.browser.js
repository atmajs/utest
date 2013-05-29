
// source ../.reference/libjs/class/lib/class.js
(function(global){
	
	
	// source ../src/util/array.js
	function arr_each(array, callback) {
		
		if (array instanceof Array) {
			for (var i = 0, imax = array.length; i < imax; i++){
				callback(array[i], i);
				
			}
			return;
		}
		
		callback(array);
	
	}
	
	if (typeof Array.isArray !== 'function') {
		Array.isArray = function(array){
			if (array instanceof Array){
				return true;
			}
			
			if (array == null || typeof array !== 'object') {
				return false;
			}
			
			
			return array.length !== void 0 && typeof array.slice === 'function';
		};
	}
	// source ../src/util/proto.js
	
	
	var class_inherit = (function() {
		
		function proto_extend(proto, source) {
			if (source == null) {
				return;
			}
			if (typeof proto === 'function') {
				proto = proto.prototype;
			}
		
			for (var key in source) {
				proto[key] = source[key];
			}
		}
	
		function inherit(_class, _base, _extends, original) {
			var prototype = original,
				proto = original;
	
			prototype.constructor = _class.prototype.constructor;
	
			if (_extends != null) {
				proto['__proto__'] = {};
	
				arr_each(_extends, function(x) {
					proto_extend(proto['__proto__'], x);
				});
				proto = proto['__proto__'];
			}
	
			if (_base != null) {
				proto['__proto__'] = _base.prototype;
			}
	
			_class.prototype = prototype;
		}
	
	
		// browser that doesnt support __proto__ 
		function inherit_protoLess(_class, _base, _extends, original) {
			if (_base != null) {
				var proto = {},
					tmp = function() {};
	
				tmp.prototype = _base.prototype;
	
				_class.prototype = new tmp();
				_class.prototype.constructor = _class;
			}
	
			proto_extend(_class.prototype, original);
	
	
			if (_extends != null) {
				arr_each(_extends, function(x) {
					var a = {};
					proto_extend(a, x);
					
					delete a.constructor;
					for (var key in a) {
						_class.prototype[key] = a[key];
					}
				});
			}
		}
	
		return '__proto__' in Object.prototype === true ? inherit : inherit_protoLess;
	
	}());
	
	
	var class_inheritStatics = function(_class, mix){
		if (mix == null) {
			return;
		}
		
		if (typeof mix === 'function') {
			for (var key in mix) {
				if (typeof mix[key] === 'function' && mix.hasOwnProperty(key) && _class[key] == null) {
					_class[key] = mix[key];
				}
			}
			return;
		}
		
		if (Array.isArray(mix)) {
			var imax = mix.length,
				i = 0;
			
			// backwards for proper inhertance flow
			while (imax-- !== 0) {
				class_inheritStatics(_class, mix[i++]);
			}
			return;
		}
		
		if (mix.Static) {
			mix = mix.Static;
			for (var key in mix) {
				if (mix.hasOwnProperty(key) && _class[key] == null) {
					_class[key] = mix[key];
				}
			}
			return;
		}
	}
	// source ../src/util/object.js
	function obj_inherit(target /* source, ..*/ ) {
		if (typeof target === 'function') {
			target = target.prototype;
		}
		var i = 1,
			imax = arguments.length,
			source, key;
		for (; i < imax; i++) {
	
			source = typeof arguments[i] === 'function' ? arguments[i].prototype : arguments[i];
	
			for (key in source) {
				
				if ('Static' === key) {
					if (target.Static != null) {
						
						for (key in target.Static) {
							target.Static[key] = target.Static[key];
						}
						
						continue;
					}
				}
				
				target[key] = source[key];
			}
		}
		return target;
	}
	
	// source ../src/xhr/XHR.js
	var XHR = {};
	
	arr_each(['get', 'del'], function(key){
		XHR[key] = function(path, sender){
			
			this.promise[key](path)
			.then(function(error, response){
				
				if (error) {
					sender.onError(error, response);
					return;
				}
				
				sender.onSuccess(response);
			});
			
		}
	})
	
	arr_each(['post', 'put'], function(key){
		XHR[key] = function(path, data, cb){
			this.promise[key](path, data)
			
			.then(function(error, response){
				cb(error, response);
			});
		};
	});
	
	
	//
	//var User = Class({
	//	Store: Remote('/user/:id'),
	//	Defaults: {
	//		name: 'None'
	//	},
	//	Validation: [Validation.notEmpty],
	//	
	//	greet: Class.Contract(Class.Validation.isValid, function(){
	//		console.log('name', name);
	//	})
	//})
	//
	//
	//var UserCollection = Class.Collection(User, {
	//	Store: Remote('/users/?:country')
	//});
	//
	//var UserCollection = Class.Collection(User, {
	//	Store: Remote('/users/?country=?:country')
	//});
	//
	//var user = User.fetch(123, function(){})
	//	user.save();
	//	user.delete();
	//
	//var users = UserCollection.fetch({ country: 'Germany' });
	//
	//	users.save();
	//	users.delete({city: 'Lepzig'});
	//
	//
	//
	
	// source ../src/xhr/promise.js
	/*
	 *  Copyright 2012-2013 (c) Pierre Duquesne <stackp@online.fr>
	 *  Licensed under the New BSD License.
	 *  https://github.com/stackp/promisejs
	 */
	
	(function(exports) {
	
	    function bind(func, context) {
	        return function() {
	            return func.apply(context, arguments);
	        };
	    }
	
	    function Promise() {
	        this._callbacks = [];
	    }
	
	    Promise.prototype.then = function(func, context) {
	        var f = bind(func, context);
	        if (this._isdone) {
	            f(this.error, this.result);
	        } else {
	            this._callbacks.push(f);
	        }
	    };
	
	    Promise.prototype.done = function(error, result) {
	        this._isdone = true;
	        this.error = error;
	        this.result = result;
	        for (var i = 0; i < this._callbacks.length; i++) {
	            this._callbacks[i](error, result);
	        }
	        this._callbacks = [];
	    };
	
	    function join(funcs) {
	        var numfuncs = funcs.length;
	        var numdone = 0;
	        var p = new Promise();
	        var errors = [];
	        var results = [];
	
	        function notifier(i) {
	            return function(error, result) {
	                numdone += 1;
	                errors[i] = error;
	                results[i] = result;
	                if (numdone === numfuncs) {
	                    p.done(errors, results);
	                }
	            };
	        }
	
	        for (var i = 0; i < numfuncs; i++) {
	            funcs[i]()
	                .then(notifier(i));
	        }
	
	        return p;
	    }
	
	    function chain(funcs, error, result) {
	        var p = new Promise();
	        if (funcs.length === 0) {
	            p.done(error, result);
	        } else {
	            funcs[0](error, result)
	                .then(function(res, err) {
	                funcs.splice(0, 1);
	                chain(funcs, res, err)
	                    .then(function(r, e) {
	                    p.done(r, e);
	                });
	            });
	        }
	        return p;
	    }
	
	    /*
	     * AJAX requests
	     */
	
	    function _encode(data) {
	        var result = "";
	        if (typeof data === "string") {
	            result = data;
	        } else {
	            var e = encodeURIComponent;
	            for (var k in data) {
	                if (data.hasOwnProperty(k)) {
	                    result += '&' + e(k) + '=' + e(data[k]);
	                }
	            }
	        }
	        return result;
	    }
	
	    function new_xhr() {
	        var xhr;
	        if (window.XMLHttpRequest) {
	            xhr = new XMLHttpRequest();
	        } else if (window.ActiveXObject) {
	            try {
	                xhr = new ActiveXObject("Msxml2.XMLHTTP");
	            } catch (e) {
	                xhr = new ActiveXObject("Microsoft.XMLHTTP");
	            }
	        }
	        return xhr;
	    }
	
	    function ajax(method, url, data, headers) {
	        var p = new Promise();
	        var xhr, payload;
	        data = data || {};
	        headers = headers || {};
	
	        try {
	            xhr = new_xhr();
	        } catch (e) {
	            p.done(-1, "");
	            return p;
	        }
	
	        payload = _encode(data);
	        if (method === 'GET' && payload) {
	            url += '?' + payload;
	            payload = null;
	        }
	
	        xhr.open(method, url);
	        xhr.setRequestHeader('Content-type',
	            'application/x-www-form-urlencoded');
	        for (var h in headers) {
	            if (headers.hasOwnProperty(h)) {
	                xhr.setRequestHeader(h, headers[h]);
	            }
	        }
	
	        function onTimeout() {
	            xhr.abort();
	            p.done(exports.promise.ETIMEOUT, "");
	        };
	
	        var timeout = exports.promise.ajaxTimeout;
	        if (timeout) {
	            var tid = setTimeout(onTimeout, timeout);
	        }
	
	        xhr.onreadystatechange = function() {
	            if (timeout) {
	                clearTimeout(tid);
	            }
	            if (xhr.readyState === 4) {
	                if (xhr.status === 200) {
	                    p.done(null, xhr.responseText);
	                } else {
	                    p.done(xhr.status, xhr.responseText);
	                }
	            }
	        };
	
	        xhr.send(payload);
	        return p;
	    }
	
	    function _ajaxer(method) {
	        return function(url, data, headers) {
	            return ajax(method, url, data, headers);
	        };
	    }
	
	    var promise = {
	        Promise: Promise,
	        join: join,
	        chain: chain,
	        ajax: ajax,
	        get: _ajaxer('GET'),
	        post: _ajaxer('POST'),
	        put: _ajaxer('PUT'),
	        del: _ajaxer('DELETE'),
	
	        /* Error codes */
	        ENOXHR: 1,
	        ETIMEOUT: 2,
	
	        /**
	         * Configuration parameter: time in milliseconds after which a
	         * pending AJAX request is considered unresponsive and is
	         * aborted. Useful to deal with bad connectivity (e.g. on a
	         * mobile network). A 0 value disables AJAX timeouts.
	         *
	         * Aborted requests resolve the promise with a ETIMEOUT error
	         * code.
	         */
	        ajaxTimeout: 0
	    };
	
	    if (typeof define === 'function' && define.amd) {
	        /* AMD support */
	        define(function() {
	            return promise;
	        });
	    } else {
	        exports.promise = promise;
	    }
	
	    
	})(XHR);
	
	// source ../src/business/route.js
	
	var Route = (function(){
		
		
		function Route(route){
			this.route = route_parse(route);
		};
		
		Route.prototype = {
			constructor: Route,
			create: function(object){
				var path, query;
				
				path = route_interpolate(this.route.path, object, '/');
				if (path == null) {
					return null;
				}
				
				if (this.route.query) {
					query = route_interpolate(this.route.query, object, '&');
					if (query == null) {
						return null;
					}
				}
				
				return path + (query ? '?' + query : '');
			}
		};
		
		var regexp_pathByColon = /^([^:\?]*)(\??):(\??)([\w]+)$/,
			regexp_pathByBraces = /^([^\{\?]*)(\{(\??)([\w]+)\})?([^\s]*)?$/;
		
		function parse_single(string) {
			var match = regexp_pathByColon.exec(string),
				optional,
				parts;
			
			if (match) {
				return {
					optional: (match[2] || match[3]) === '?',
					parts: [match[1], match[4]]
				};
			}
			
			match = regexp_pathByBraces.exec(string);
			
			if (match) {
				return {
					optional: match[3] === '?',
					parts: [match[1], match[4], match[5]]
				};
			}
			
			console.error('Paths breadcrumbs should be match by regexps');
			return { parts: [string] };
		}
		
		function parse_path(path, delimiter) {
			var parts = path.split(delimiter),
				key, value;
			
			for (var i = 0, imax = parts.length; i < imax; i++){
				parts[i] = parse_single(parts[i]);
			}
			
			return parts;
		}
		
		function route_parse(route) {
			var question = /[^\:\{]\?[^:]/.exec(route),
				query = null;
			
			if (question){
				question = question.index + 1;
				query = route.substring(question + 1);
				route = route.substring(0, question);
			}
			
			
			return {
				path: parse_path(route, '/'),
				query: query == null ? null : parse_path(query, '&')
			};
		}
		
		/** - route - [] */
		function route_interpolate(breadcrumbs, object, delimiter) {
			var route = [],
				value,
				key,
				parts;
			
			
			for (var i = 0, imax = breadcrumbs.length; i < imax; i++){
				x = breadcrumbs[i];
				parts = x.parts.slice(0);
				
				if (parts[1] == null) {
					// is not an interpolated breadcrumb
					route.push(parts[0]);
					continue;
				}
				
				key = parts[1];
				parts[1] = object[key];
				
				if (parts[1] == null){
				
					if (!x.optional) {
						console.error('Object has no value, for not optional part - ', key);
						return null;
					}
					
					continue;
				}
				
				route.push(parts.join(''));
			}
			
			return route.join(delimiter);
		}
		
		
		return Route;
	}());
	
	// source ../src/store/Deferred.js
	var DeferredProto = {
		isAsync: true,
			
		_done: null,
		_fail: null,
		_always: null,
		_isResolved: false,
		_isRejected: false,
		
		deferr: function(){
			this._isRejected = false;
			this._isResolved = false;
		},
		
		resolve: function() {
			this._fail = null;
			this._isResolved = true;
	
			var cbs = this._done,
				imax = cbs && cbs.length,
				i = 0;
			if (cbs) {
				while (imax-- !== 0) {
					cbs[i++](this);
				}
				this._done = null;
			}
	
			cbs = this._always;
			imax = cbs && cbs.length,
			i = 0;
			if (cbs) {
				while (imax-- !== 0) {
					cbs[i++](this);
				}
				this._always = null;
			}
	
			return this;
		},
		reject: function() {
			this._done = null;
			this._isRejected = true;
	
			var cbs = this._fail,
				imax = cbs && cbs.length,
				i = 0;
			if (cbs) {
				while (imax-- !== 0) {
					cbs[i++](this);
				}
				this._fail = null;
			}
	
			cbs = this._always;
			imax = cbs && cbs.length,
			i = 0;
			if (cbs) {
				while (imax-- !== 0) {
					cbs[i++](this);
				}
				this._always = null;
			}
	
			return this;
		},
	
		done: function(callback) {
			
			if (this._isResolved)
				callback(this);
			else
				(this._done || (this._done = []))
					.push(callback);
	
	
			return this;
		},
		fail: function(callback) {
			
			if (this._isRejected)
				callback(this);
			else
				(this._fail || (this._fail = []))
					.push(callback);
	
	
			return this;
		},
		always: function(callback) {
			if (this._isRejected || this._isResolved)
				callback(this);
			else
				(this._always || (this._always = []))
					.push(callback);
	
			return this;
		},
	};
	// source ../src/store/Store.js
	var StoreProto = {
		
		instance: null,
		
		// Serialization
		deserialize: function(json) {
			for (var key in json) {
				this[key] = json[key];
			}
			return this;
		},
		serialize: function() {
			return JSON.stringify(this);
		},
		
		
		// Abstract
		
		fetch: null,
		onSuccess: null,
		onError: null,
		
		Static: {
			fetch: function(data){
				return new this().fetch(data);
			}
		}
	};
	// source ../src/store/Remote.js
	var Remote = (function(){
		
		var XHRRemote = function(route){
			this.route = new Route(route);
		}
		
		obj_inherit(XHRRemote, StoreProto, DeferredProto, {
			
			fetch: function(data){
				XHR.get(this.route.create(data || this), this);
				return this;
			},
			
			save: function(callback){
				XHR.post(this.route.create(this), this.serialize(), callback);
			},
			
			onSuccess: function(response){
				var json = JSON.parse(response);
				
				this.deserialize(json);
				this.resolve(this);
			},
			onError: function(error){
				this.reject({
					error: error,
					//responseText: xhr.responseText
				});
			}
			
			
		});
		
		
		
		return function(route){
			
			return new XHRRemote(route);
			
		};
		
	}());
	
	// source ../src/Class.js
	var Class = function(data) {
		var _base = data.Base,
			_extends = data.Extends,
			_static = data.Static,
			_construct = data.Construct,
			_class = null,
			_store = data.Store,
			key;
	
		if (_base != null) {
			delete data.Base;
		}
		if (_extends != null) {
			delete data.Extends;
		}
		if (_static != null) {
			delete data.Static;
		}
		if (_construct != null) {
			delete data.Construct;
		}
		
		if (_store != null) {
			delete data.Store;
		}
		
		if (_extends == null) {
			_extends = _store;
		}else{
			if (Array.isArray(_extends)) {
				_extends.push(_store);
			}else{
				_extends = [_extends, _store];
			}
		}
	
	
		if (_base == null && _extends == null) {
			if (_construct == null) {
				_class = function() {};
			} else {
				_class = _construct;
			}
	
			data.constructor = _class.prototype.constructor;
	
			if (_static != null) {
				for (key in _static) {
					_class[key] = _static[key];
				}
			}
	
			_class.prototype = data;
			return _class;
	
		}
	
		_class = function() {
	
			if (_extends != null) {
				var isarray = _extends instanceof Array,
					length = isarray ? _extends.length : 1,
					x = null;
				for (var i = 0; isarray ? i < length : i < 1; i++) {
					x = isarray ? _extends[i] : _extends;
					if (typeof x === 'function') {
						x.apply(this, arguments);
					}
				}
			}
	
			if (_base != null) {
				_base.apply(this, arguments);
			}
	
			if (_construct != null) {
				var r = _construct.apply(this, arguments);
				if (r != null) {
					return r;
				}
			}
			return this;
		};
	
		if (_static != null) {
			for (key in _static) {
				_class[key] = _static[key];
			}
		}
		
		if (_base != null) {
			class_inheritStatics(_class, _base);
		}
		
		if (_extends != null) {
			class_inheritStatics(_class, _extends);
		}
	
	
		class_inherit(_class, _base, _extends, data);
	
	
		data = null;
		_static = null;
	
		return _class;
	};
	// source ../src/Class.Static.js
	/**
	 * Can be used in Constructor for binding class's functions to class's context
	 * for using, for example, as callbacks
	 */
	Class.bind = function(cntx) {
		var arr = arguments,
			i = 1,
			length = arguments.length,
			key;
	
		for (; i < length; i++) {
			key = arr[i];
			cntx[key] = cntx[key].bind(cntx);
		}
		return cntx;
	};
	
	Class.Remote = Remote;
	
	
	
	
	global.Class = Class;
	
}((typeof window === 'undefined' || window.document == null) 
	&& typeof global !== 'undefined' ? global : window));
// source ../src/UTest.js
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
			console.error(error.stack || error);
			
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
			//this.snapshot = {
			//	total: assert.total,
			//	failed: assert.failed
			//};
			
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
			}
		}
	});
	
	global.UTest = UTest;
	
	
}(this));



// source ../src/assert/assert.browser.js
(function(global){
	
	// source assert.js
	// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
	//
	// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
	//
	// Copyright (c) 2011 Jxck
	//
	// Originally from node.js (http://nodejs.org)
	// Copyright Joyent, Inc.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a copy
	// of this software and associated documentation files (the 'Software'), to
	// deal in the Software without restriction, including without limitation the
	// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
	// sell copies of the Software, and to permit persons to whom the Software is
	// furnished to do so, subject to the following conditions:
	//
	// The above copyright notice and this permission notice shall be included in
	// all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
	// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	(function(global) {
	
	// Object.create compatible in IE
	var create = Object.create || function(p) {
	  if (!p) throw Error('no type');
	  function f() {};
	  f.prototype = p;
	  return new f();
	};
	
	// UTILITY
	var util = {
	  inherits: function(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    ctor.prototype = create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  }
	};
	
	var pSlice = Array.prototype.slice;
	
	// from https://github.com/substack/node-deep-equal
	var Object_keys = typeof Object.keys === 'function'
	    ? Object.keys
	    : function (obj) {
	        var keys = [];
	        for (var key in obj) keys.push(key);
	        return keys;
	    }
	;
	
	// 1. The assert module provides functions that throw
	// AssertionError's when particular conditions are not met. The
	// assert module must conform to the following interface.
	
	var assert = ok;
	
	global['assert'] = assert;
	
	if (typeof module === 'object' && typeof module.exports === 'object') {
	  module.exports = assert;
	};
	
	// 2. The AssertionError is defined in assert.
	// new assert.AssertionError({ message: message,
	//                             actual: actual,
	//                             expected: expected })
	
	assert.AssertionError = function AssertionError(options) {
	  this.name = 'AssertionError';
	  this.message = options.message;
	  this.actual = options.actual;
	  this.expected = options.expected;
	  this.operator = options.operator;
	  var stackStartFunction = options.stackStartFunction || fail;
	
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, stackStartFunction);
	  }
	};
	
	// assert.AssertionError instanceof Error
	util.inherits(assert.AssertionError, Error);
	
	function replacer(key, value) {
	  if (value === undefined) {
	    return '' + value;
	  }
	  if (typeof value === 'number' && (isNaN(value) || !isFinite(value))) {
	    return value.toString();
	  }
	  if (typeof value === 'function' || value instanceof RegExp) {
	    return value.toString();
	  }
	  return value;
	}
	
	function truncate(s, n) {
	  if (typeof s == 'string') {
	    return s.length < n ? s : s.slice(0, n);
	  } else {
	    return s;
	  }
	}
	
	assert.AssertionError.prototype.toString = function() {
	  if (this.message) {
	    return [this.name + ':', this.message].join(' ');
	  } else {
	    return [
	      this.name + ':',
	      truncate(JSON.stringify(this.actual, replacer), 128),
	      this.operator,
	      truncate(JSON.stringify(this.expected, replacer), 128)
	    ].join(' ');
	  }
	};
	
	// At present only the three keys mentioned above are used and
	// understood by the spec. Implementations or sub modules can pass
	// other keys to the AssertionError's constructor - they will be
	// ignored.
	
	// 3. All of the following functions must throw an AssertionError
	// when a corresponding condition is not met, with a message that
	// may be undefined if not provided.  All assertion methods provide
	// both the actual and expected values to the assertion error for
	// display purposes.
	
	function fail(actual, expected, message, operator, stackStartFunction) {
	  throw new assert.AssertionError({
	    message: message,
	    actual: actual,
	    expected: expected,
	    operator: operator,
	    stackStartFunction: stackStartFunction
	  });
	}
	
	// EXTENSION! allows for well behaved errors defined elsewhere.
	assert.fail = fail;
	
	// 4. Pure assertion tests whether a value is truthy, as determined
	// by !!guard.
	// assert.ok(guard, message_opt);
	// This statement is equivalent to assert.equal(true, !!guard,
	// message_opt);. To test strictly for the value true, use
	// assert.strictEqual(true, guard, message_opt);.
	
	function ok(value, message) {
	  if (!!!value) fail(value, true, message, '==', assert.ok);
	}
	assert.ok = ok;
	
	// 5. The equality assertion tests shallow, coercive equality with
	// ==.
	// assert.equal(actual, expected, message_opt);
	
	assert.equal = function equal(actual, expected, message) {
	  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
	};
	
	// 6. The non-equality assertion tests for whether two objects are not equal
	// with != assert.notEqual(actual, expected, message_opt);
	
	assert.notEqual = function notEqual(actual, expected, message) {
	  if (actual == expected) {
	    fail(actual, expected, message, '!=', assert.notEqual);
	  }
	};
	
	// 7. The equivalence assertion tests a deep equality relation.
	// assert.deepEqual(actual, expected, message_opt);
	
	assert.deepEqual = function deepEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected)) {
	    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
	  }
	};
	
	function _deepEqual(actual, expected) {
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	
	//  } else if (Buffer.isBuffer(actual) && Buffer.isBuffer(expected)) {
	//    if (actual.length != expected.length) return false;
	//
	//    for (var i = 0; i < actual.length; i++) {
	//      if (actual[i] !== expected[i]) return false;
	//    }
	//
	//    return true;
	//
	  // 7.2. If the expected value is a Date object, the actual value is
	  // equivalent if it is also a Date object that refers to the same time.
	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();
	
	  // 7.3 If the expected value is a RegExp object, the actual value is
	  // equivalent if it is also a RegExp object with the same source and
	  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
	  } else if (actual instanceof RegExp && expected instanceof RegExp) {
	    return actual.source === expected.source &&
	           actual.global === expected.global &&
	           actual.multiline === expected.multiline &&
	           actual.lastIndex === expected.lastIndex &&
	           actual.ignoreCase === expected.ignoreCase;
	
	  // 7.4. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (typeof actual != 'object' && typeof expected != 'object') {
	    return actual == expected;
	
	  // 7.5 For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected);
	  }
	}
	
	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}
	
	function isArguments(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	}
	
	function objEquiv(a, b) {
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return _deepEqual(a, b);
	  }
	  try {
	    var ka = Object_keys(a),
	        kb = Object_keys(b),
	        key, i;
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!_deepEqual(a[key], b[key])) return false;
	  }
	  return true;
	}
	
	// 8. The non-equivalence assertion tests for any deep inequality.
	// assert.notDeepEqual(actual, expected, message_opt);
	
	assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected)) {
	    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
	  }
	};
	
	// 9. The strict equality assertion tests strict equality, as determined by ===.
	// assert.strictEqual(actual, expected, message_opt);
	
	assert.strictEqual = function strictEqual(actual, expected, message) {
	  if (actual !== expected) {
	    fail(actual, expected, message, '===', assert.strictEqual);
	  }
	};
	
	// 10. The strict non-equality assertion tests for strict inequality, as
	// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);
	
	assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
	  if (actual === expected) {
	    fail(actual, expected, message, '!==', assert.notStrictEqual);
	  }
	};
	
	function expectedException(actual, expected) {
	  if (!actual || !expected) {
	    return false;
	  }
	
	  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
	    return expected.test(actual);
	  } else if (actual instanceof expected) {
	    return true;
	  } else if (expected.call({}, actual) === true) {
	    return true;
	  }
	
	  return false;
	}
	
	function _throws(shouldThrow, block, expected, message) {
	  var actual;
	
	  if (typeof expected === 'string') {
	    message = expected;
	    expected = null;
	  }
	
	  try {
	    block();
	  } catch (e) {
	    actual = e;
	  }
	
	  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
	            (message ? ' ' + message : '.');
	
	  if (shouldThrow && !actual) {
	    fail(actual, expected, 'Missing expected exception' + message);
	  }
	
	  if (!shouldThrow && expectedException(actual, expected)) {
	    fail(actual, expected, 'Got unwanted exception' + message);
	  }
	
	  if ((shouldThrow && actual && expected &&
	      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
	    throw actual;
	  }
	}
	
	// 11. Expected to throw an error:
	// assert.throws(block, Error_opt, message_opt);
	
	assert.throws = function(block, /*optional*/error, /*optional*/message) {
	  _throws.apply(this, [true].concat(pSlice.call(arguments)));
	};
	
	// EXTENSION! This is annoying to write outside this module.
	assert.doesNotThrow = function(block, /*optional*/message) {
	  _throws.apply(this, [false].concat(pSlice.call(arguments)));
	};
	
	assert.ifError = function(err) { if (err) {throw err;}};
	
	if (typeof define === 'function' && define.amd) {
	  define('assert', function () {
	    return assert;
	  });
	}
	
	})(this);
	
	// source assert.wrapper.js
	
	
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
	
	
}(this));
// source ../src/browser/detect.js
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
// source ../src/browser/action.js
(function() {

	window.onerror = function(message, file, lineNumber) {
		var lines = [];
		lines.push('Message: ' + message);
		lines.push('File: ' + message + ':' + lineNumber);
		console.error(lines.join('\n'));
	};
	
	// source notify.js
	function notify(state) {
		
		switch (state) {
			case 'connect':
				$('<div>').text('connected to server').appendTo('body');
				break;
		}
		
	}
	// source utils/logger.js
	(function() {
	
		for (var key in console) {
			if (typeof console[key] !== 'function') {
				continue;
			}
			console[key] = logger_create(key);
		}
	
		assert.onfailure = function() {
			socket.emit('browser:assert:failure', Array.prototype.slice.call(arguments));
		}
		assert.onsuccess = function() {
			socket.emit('browser:assert:success', Array.prototype.slice.call(arguments));
		}
	
		function logger_create(key) {
	
			var original = console[key];
			return function() {
				var args = [];
	
				for (var i = 0, x, imax = arguments.length; i < imax; i++) {
					args[i] = logger_dimissCircular(arguments[i]);
				}
	
				socket.emit('browser:log', key, args);
	
				return original.apply(console, args);
			};
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
				//path += (~path.indexOf('?') ? '&' : '?') + Date.now();
	
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
	
		include = include.instance();
	};

	var TestSuite = window.UTest,
		state_ready = 1,
		state_busy = 2,
		state = state_ready,
		socket = io.connect('/browser')
			.on('connect', function(){
				notify('connect');
			})
			.on('server:utest:handshake', function(done) {
				done({
					userAgent: window.browserInfo,
					ready:state
				});
			})
			.on('server:utest', utest_start);

	



	function utest_start(config) {
		
		if (!config || !config.scripts) {
			socket.emit('browser:utest:end', {
				error: 'No scripts to be tested'
			});
			return;
		}
		state = state_busy;
		assert.reset();
		TestSuite.clear();

		include_clearCache();
		
		socket.emit('browser:utest:start', {
			userAgent: window.browserInfo
		});


		for (var i = 0, imax = config.scripts.length; i < imax; i++) {
			script_insert({
				path: config.scripts[i]
			}, i == imax - 1 ? utest_end : null);
		}
	}

	function utest_end(force) {
		if (force !== true && typeof include !== 'undefined') {
			
			include_ready(function(){
				utest_end(true);
			});
			return;
		}
		
		// findout resources for watcher
		// do this here, as TestSuites could also add/remove scripts
		var resources = script_getResources();
		
		TestSuite.run(function(){
			
			socket.emit('browser:utest:end', {
				total: assert.total,
				failed: assert.failed,
				timeouts: assert.timeouts,
				callbacks: assert.callbacks,
				
				userAgent: window.browserInfo,
				resources: resources
			});
			
			state = state_ready;
		});
	}

	
}());

