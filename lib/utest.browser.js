
// source ../.reference/atma/class/lib/class.js
// source /src/license.txt
/*!
 * ClassJS v1.0.49
 * Part of the Atma.js Project
 * http://atmajs.com/
 *
 * MIT license
 * http://opensource.org/licenses/MIT
 *
 * (c) 2012, 2014 Atma.js and other contributors
 */
// end:source /src/license.txt
// source /src/umd.js
(function(root, factory){
	"use strict";

	var _global = typeof window === 'undefined' || window.navigator == null
			? global
			: window
			,
		_exports
		;

    
	_exports = root || _global;
    

    function construct(){

        return factory(_global, _exports);
    };

    
    if (typeof define === 'function' && define.amd) {
        return define(construct);
    }
    
	// Browser OR Node
    construct();
	
	if (typeof module !== 'undefined') 
		module.exports = _exports.Class;
	
}(this, function(global, exports){
	"use strict";
// end:source /src/umd.js
	
	// source /src/vars.js
	var _Array_slice = Array.prototype.slice,
		_Array_sort = Array.prototype.sort,
		
		_cfg = {
			ModelHost: null, // @default: Class.Model
		};
		
	
	var str_CLASS_IDENTITY = '__$class__';
	// end:source /src/vars.js
	
	// source /src/util/is.js
	function is_Function(x) {
		return typeof x === 'function';
	}
	
	function is_Object(x) {
		return x != null &&  typeof x === 'object';
	}
	
	function is_Array(x) {
		return x != null
			&& typeof x.length === 'number'
			&& typeof x.slice === 'function';
	}
	
	function is_String(x) {
		return typeof x === 'string';
	}
	
	function is_notEmptyString(x) {
		return typeof x === 'string' && x !== '';
	}
	
	function is_rawObject(obj) {
		if (obj == null) 
			return false;
		
		if (typeof obj !== 'object')
			return false;
		
		return obj.constructor === Object;
	}
	
	function is_NullOrGlobal(ctx){
		return ctx === void 0 || ctx === global;
	}
	// end:source /src/util/is.js
	// source /src/util/array.js
	function arr_each(array, callback) {
		
		if (arr_isArray(array)) {
			for (var i = 0, imax = array.length; i < imax; i++){
				callback(array[i], i);
			}
			return;
		}
		
		callback(array);
	}
	
	function arr_isArray(array) {
		return array != null
			&& typeof array === 'object'
			&& typeof array.length === 'number'
			&& typeof array.splice === 'function';
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
	// end:source /src/util/array.js
	// source /src/util/class.js
	var class_register,
		class_get,
		
		class_patch,
		
		class_stringify,
		class_parse,
		class_properties
		
		;
	
	(function(){
		
		class_register = function(namespace, class_){
			
			obj_setProperty(
				_cfg.ModelHost || Class.Model,
				namespace,
				class_
			);
		};
		
		class_get = function(namespace){
			
			return obj_getProperty(
				_cfg.ModelHost || Class.Model,
				namespace
			);
		};
		
		class_patch = function(mix, Proto){
			
			var class_ = is_String(mix)
				? class_get(mix)
				: mix
				;
				
			// if DEBUG
			!is_Function(class_)
				&& console.error('<class:patch> Not a Function', mix);
			// endif
				
			Proto.Base = class_;
			
			class_ = Class(Proto);
			
			if (is_String(mix)) 
				class_register(mix, class_);
			
			return class_;
		};
		
		class_stringify = function(class_){
			
			return JSON.stringify(class_, stringify);
		};
		
		class_parse = function(str){
			
			return JSON.parse(str, parse);
		};
		
		class_properties = function(Ctor) {
			return getProperties(Ctor);
		};
		
		// private
		
		function stringify(key, val) {
			
			if (val == null || typeof val !== 'object') 
				return val;
			
			var current = this,
				obj = current[key]
				;
			
			if (obj[str_CLASS_IDENTITY] && obj.toJSON) {
				
				return stringifyMetaJSON(obj[str_CLASS_IDENTITY], val)
				
				////val[str_CLASS_IDENTITY] = obj[str_CLASS_IDENTITY];
				////return val;
			}
			
			
			return val;
		}
		
		function stringifyMetaJSON(className, json){
			var out = {};
			out['json'] = json;
			out[str_CLASS_IDENTITY] = className;
			
			return out;
		}
		
		function parse(key, val) {
			
			var Ctor;
			
			if (val != null && typeof val === 'object' && val[str_CLASS_IDENTITY]) {
				Ctor = Class(val[str_CLASS_IDENTITY]);
			
				if (typeof Ctor === 'function') {
					
					val = new Ctor(val.json);
				} else {
					
					console.error('<class:parse> Class was not registered', val[str_CLASS_IDENTITY]);
				}
			}
			
			return val;
		}
		
		function getProperties(proto, out){
			if (typeof proto === 'function')
				proto = proto.prototype;
			
			if (out == null) 
				out = {};
			
			var type,
				key
	        for(key in proto){
	            type = proto[key] == null
					? null
					: typeof proto[key]
					;
					
	            if (type === 'function')
					continue;
				
				var c = key.charCodeAt(0);
				if (c === 95 && key !== '_id')
					// _
					continue;
				
				if (c >= 65 && c <= 90)
					// A-Z
					continue;
				
	            out[key] = type;
	        }
	        
	        if (proto.__proto__) 
	            getProperties(proto.__proto__, out);
	        
	        return out;
	    }
		
	}());
	// end:source /src/util/class.js
	// source /src/util/proto.js
	var class_inherit,
		class_inheritStatics,
		class_extendProtoObjects
		;
	
	(function(){
		
		var PROTO = '__proto__';
		
		var _toString = Object.prototype.toString,
			_isArguments = function(args){
				return _toString.call(args) === '[object Arguments]';
			};
		
		
		class_inherit = PROTO in Object.prototype
			? inherit
			: inherit_protoLess
			;
		
		class_inheritStatics = function(_class, mix){
			if (mix == null) 
				return;
			
			if (is_Function(mix)) {
				for (var key in mix) {
					if (is_Function(mix[key]) && mix.hasOwnProperty(key) && _class[key] == null) {
						_class[key] = mix[key];
					}
				}
				return;
			}
			
			if (Array.isArray(mix)) {
				var imax = mix.length,
					i = -1;
				
				
				while ( ++i < imax ) {
					class_inheritStatics(_class, mix[i]);
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
		};
		
		
		class_extendProtoObjects = function(proto, _base, _extends){
			var key,
				protoValue;
				
			for (key in proto) {
				protoValue = proto[key];
				
				if (!is_rawObject(protoValue))
					continue;
				
				if (_base != null){
					if (is_rawObject(_base.prototype[key])) 
						obj_defaults(protoValue, _base.prototype[key]);
				}
				
				if (_extends != null) {
					arr_each(_extends, function(x){
						x = proto_getProto(x);
						
						if (is_rawObject(x[key])) 
							obj_defaults(protoValue, x[key]);
					});
				}
			}
		}
		
		// PRIVATE
		function proto_extend(proto, source) {
			if (source == null) 
				return;
			
			if (typeof proto === 'function') 
				proto = proto.prototype;
			
			if (typeof source === 'function') 
				source = source.prototype;
			
			var key, val;
			for (key in source) {
				val = source[key];
				if (val != null) 
					proto[key] = val;
			}
		}
		
		function proto_override(super_, fn) {
	        var proxy;
			
			if (super_) {
				proxy = function(mix){
					
					var args = arguments.length === 1 && _isArguments(mix)
						? mix
						: arguments
						;
					
					return  fn_apply(super_, this, args);
				}
			} else{
				
				proxy = fn_doNothing;
			}
			
	        
	        return function(){
	            this['super'] = proxy;
	            
	            return fn_apply(fn, this, arguments);
	        };
	    }
	
		function inherit(_class, _base, _extends, original, _overrides) {
			
			var prototype = original,
				proto = original;
	
			prototype.constructor = _class.prototype.constructor;
	
			if (_extends != null) {
				proto[PROTO] = {};
	
				arr_each(_extends, function(x) {
					proto_extend(proto[PROTO], x);
				});
				proto = proto[PROTO];
			}
	
			if (_base != null) 
				proto[PROTO] = _base.prototype;
			
			if (_overrides != null) {
				for (var key in _overrides) {
					prototype[key] = proto_override(prototype[key], _overrides[key]);
				}
			}
			
			_class.prototype = prototype;
		}
	
	
		// browser that doesnt support __proto__ 
		function inherit_protoLess(_class, _base, _extends, original, _overrides) {
			
			if (_base != null) {
				var tmp = function() {};
	
				tmp.prototype = _base.prototype;
	
				_class.prototype = new tmp();
				_class.prototype.constructor = _class;
			}
			
			if (_extends != null) {
				arr_each(_extends, function(x) {
					
					delete x.constructor;
					proto_extend(_class, x);
				});
			}
			
			if (_overrides != null) {
				var prototype = _class.prototype;
				for (var key in _overrides) {
					prototype[key] = proto_override(prototype[key], _overrides[key]);
				}
			}
			
			
			proto_extend(_class, original); 
		}
		
			
		function proto_getProto(mix) {
			
			return is_Function(mix)
				? mix.prototype
				: mix
				;
		}
		
	}());
	// end:source /src/util/proto.js
	// source /src/util/json.js
	// Create from Complex Class Instance a lightweight json object
	
	var json_proto_toJSON,
		json_proto_arrayToJSON
		;
		
	(function(){
		
		json_proto_toJSON = function(){
			
			var object = this,
				json = {},
				
				key, val;
			
			for (key in object){
				// _ (private)
				if (key.charCodeAt(0) === 95)
					continue;
	
				if ('Static' === key || 'Validate' === key)
					continue;
	
				val = object[key];
	
				if (val == null)
					continue;
	
				switch (typeof val) {
					case 'function':
						continue;
					case 'object':
						
						var toJSON = val.toJSON;
						if (toJSON == null) 
							break;
						
						if (toJSON === json_proto_toJSON || toJSON === json_proto_arrayToJSON) {
							json[key] = val.toJSON();
							continue;
						}
						
						break;
				}
	
				json[key] = val;
			}
			
			// make mongodb's _id property not private
			if (object._id != null)
				json._id = object._id;
			
			return json;	
		};
		
		json_proto_arrayToJSON =  function() {
			var array = this,
				imax = array.length,
				i = 0,
				output = new Array(imax),
				
				x;
	
			for (; i < imax; i++) {
	
				x = array[i];
				
				if (x != null && typeof x === 'object') {
					
					var toJSON = x.toJSON;
					if (toJSON === json_proto_toJSON || toJSON === json_proto_arrayToJSON) {
						
						output[i] = x.toJSON();
						continue;
					}
					
					if (toJSON == null) {
						
						output[i] = json_proto_toJSON.call(x);
						continue;
					}
				}
				
				output[i] = x;
			}
	
			return output;
		};
		
	}());
	// end:source /src/util/json.js
	// source /src/util/object.js
	
	var obj_inherit,
		obj_getProperty,
		obj_setProperty,
		obj_defaults,
		obj_extend,
		
		obj_validate
		;
	
	(function(){
		
		obj_inherit = function(target /* source, ..*/ ) {
			if (is_Function(target)) 
				target = target.prototype;
			
			var i = 1,
				imax = arguments.length,
				source, key;
			for (; i < imax; i++) {
		
				source = is_Function(arguments[i])
					? arguments[i].prototype
					: arguments[i]
					;
		
				for (key in source) {
					
					if ('Static' === key) {
						if (target.Static != null) {
							
							for (key in source.Static) {
								target.Static[key] = source.Static[key];
							}
							
							continue;
						}
					}
					
					
					target[key] = source[key];
					
				}
			}
			return target;
		}
		
		
		
		obj_getProperty = function(obj, property) {
			var chain = property.split('.'),
				imax = chain.length,
				i = -1;
			while ( ++i < imax ) {
				if (obj == null) 
					return null;
				
				obj = obj[chain[i]];
			}
			return obj;
		};
		
		
		obj_setProperty = function(obj, property, value) {
			var chain = property.split('.'),
				imax = chain.length,
				i = -1,
				key;
		
			while ( ++i <  imax - 1) {
				key = chain[i];
				
				if (obj[key] == null) 
					obj[key] = {};
				
				obj = obj[key];
			}
		
			obj[chain[i]] = value;
		};
		
		obj_defaults = function(target, defaults) {
			for (var key in defaults) {
				if (target[key] == null) 
					target[key] = defaults[key];
			}
			return target;
		};
		
		obj_extend = function(target, source) {
			for (var key in source) {
				if (source[key] != null) 
					target[key] = source[key];
			}
			return target;
		};
		
		(function(){
			obj_validate = function(a, b) {
				if (a == null) 
					return 'Instance is undefined';
				
				if (b == null) 
					b = a.Validate;
				
				if (b == null) 
					return 'Validation object is undefined';
				
				
				return checkObject(a, b, a);
			};
			
			// private
			// a** - payload
			// b** - expect
			
			function checkObject(a, b, ctx) {
				var error,
					optional,
					key, aVal;
				for(key in b){
					
					switch(key.charCodeAt(0)) {
						case 63:
							// ? (optional)
							aVal = a[key.substring(1)]
							//! Exept falsy value
							if (!aVal) 
								continue;
							
							error = checkProperty(aVal, b[key], ctx);
							
							if (error) 
								return error + ': ' + key;
							
							continue;
						case 45:
							// - (unexpect)
							if (a[key.substring(1)] != null) 
								return 'Unexpected argument: ' + key;
							
							continue;
					}
						
					aVal = a[key];
					if (aVal == null) 
						return 'Argument expected: ' + key;
					
					error = checkProperty(aVal, b[key], ctx);
					if (error != null) 
						return error + ': ' + key;
				}
			}
			
			function checkProperty(aVal, bVal, ctx) {
				if (bVal == null) 
					return null;
				
				if (typeof bVal === 'function') {
					var error = bVal.call(ctx, aVal);
					if (error == null || error === true) 
						return;
					
					if (error === false) 
						return 'Invalid argument';
					
					return error;
				}
				
				if (aVal == null) 
					return 'Expected argument is undefined';
				
				if (typeof bVal === 'string') {
					switch(bVal) {
						case 'string':
							return typeof aVal !== 'string' || aVal.length === 0
								? 'String expected'
								: null;
						case 'number':
							return typeof aVal !== 'number'
								? 'Number expected'
								: null;
					}
				}
				
				if (bVal instanceof RegExp) {
					return bVal.test(aVal) === false
						? 'Invalid argument'
						: null;
				}
				
				if (Array.isArray(bVal)) {
					if (Array.isArray(aVal) === false) 
						return 'Array expected';
					
					var i = -1,
						imax = aVal.length,
						error;
					while ( ++i < imax ){
						error = checkObject(aVal[i], bVal[0])
						
						if (error) 
							return 'Invalid item <' + i + '> ' + error;
					}
					
					return null;
				}
				
				if (typeof aVal !== typeof bVal) 
					return 'Type missmatch';
				
				
				if (typeof aVal === 'object') 
					return checkObject(aVal, bVal);
				
				
				return null;
			}
		}());
	}());
	// end:source /src/util/object.js
	// source /src/util/patchObject.js
	var obj_patch;
	
	(function(){
		
		function walk_mutator(obj, data, fn) {
			for (var key in data) 
				fn(obj_getProperty(obj, key), data[key], key);
			
		}
		
		function walk_modifier(obj, data, fn){
			for(var key in data)
				obj_setProperty(
					obj,
					key,
					fn(obj_getProperty(obj, key), data[key], key)
				);
		}
		
		function fn_IoC(){
			var fns = arguments;
			return function(val, mix, prop){
				for (var i = 0, fn, imax = fns.length; i < imax; i++){
					fn = fns[i];
					if (fn(val, mix, prop) === false) 
						return;
				}
			}
		}
		
		function arr_checkArray(val, mix, prop) {
			if (arr_isArray(val) === false) {
				// if DEBUG
				console.warn('<patch> property is not an array', prop);
				// endif
				return false;
			}
		}
		
		function arr_push(val, mix, prop){
			if (mix.hasOwnProperty('$each')) {
				for (var i = 0, imax = mix.$each.length; i < imax; i++){
					val.push(mix.$each[i]);
				}
				return;
			}
			val.push(mix);
		}
		
		function arr_pop(val, mix, prop){
			 val[mix > 0 ? 'pop' : 'shift']();
		}
		function arr_pull(val, mix, prop) {
			return console
				.error('<patch> pull Not Implemented');
		
			arr_remove(val, function(item){
				return query_match(item, mix);
			});
		}
		
		function val_inc(val, mix, key){
			return val + mix;
		}
		function val_set(val, mix, key){
			return mix;
		}
		function val_unset(){
			return void 0;
		}
		
		function val_bit(val, mix){
			if (mix.or) 
				return val | mix.or;
			
			if (mix.and) 
				return val & mix.and;
			
			return val;
		}
		
		var fn_WALKER = 0,
			fn_MODIFIER = 1
			;
			
		var patches = {
			'$push': [walk_mutator, fn_IoC(arr_checkArray, arr_push)],
			'$pop': [walk_mutator, fn_IoC(arr_checkArray, arr_pop)],
			'$pull': [walk_mutator, fn_IoC(arr_checkArray, arr_pull)],
			
			'$inc': [walk_modifier, val_inc],
			'$set': [walk_modifier, val_set],
			'$unset': [walk_modifier, val_unset],
			'$bit': [walk_modifier, val_unset],
		};
		
		obj_patch = function(obj, patch){
			
			for(var key in patch){
				
				var patcher = patches[key];
				
				if (patcher) 
					patcher[fn_WALKER](obj, patch[key], patcher[fn_MODIFIER]);
				else
					console.error('Unknown or not implemented patcher', key);
				
			}
			return obj;
		};
		
	}());
	// end:source /src/util/patchObject.js
	// source /src/util/function.js
	function fn_proxy(fn, ctx) {
	
		return function() {
			return fn_apply(fn, ctx, arguments);
		};
	}
	
	function fn_apply(fn, ctx, _arguments){
		
		switch (_arguments.length) {
			case 0:
				return fn.call(ctx);
			case 1:
				return fn.call(ctx, _arguments[0]);
			case 2:
				return fn.call(ctx,
					_arguments[0],
					_arguments[1]);
			case 3:
				return fn.call(ctx,
					_arguments[0],
					_arguments[1],
					_arguments[2]);
			case 4:
				return fn.call(ctx,
					_arguments[0],
					_arguments[1],
					_arguments[2],
					_arguments[3]);
			case 5:
				return fn.call(ctx,
					_arguments[0],
					_arguments[1],
					_arguments[2],
					_arguments[3],
					_arguments[4]
					);
		};
		
		return fn.apply(ctx, _arguments);
	}
	
	function fn_isFunction(fn){
		return typeof fn === 'function';
	}
	
	function fn_createDelegate(fn /* args */) {
		var args = _Array_slice.call(arguments, 1);
		return function(){
			if (arguments.length > 0) 
				args = args.concat(_Array_slice.call(arguments));
			
			return fn_apply(fn, null, args);
		};
	}
	
	function fn_doNothing(){}
	// end:source /src/util/function.js
	
	
	// source /src/xhr/XHR.js
	var XHR = {};
	
	(function(){
		
		// source promise.js
		/*
		 *  Copyright 2012-2013 (c) Pierre Duquesne <stackp@online.fr>
		 *  Licensed under the New BSD License.
		 *  https://github.com/stackp/promisejs
		 */
		
		(function(exports) {
		
		    var ct_URL_ENCODED = 'application/x-www-form-urlencoded',
		        ct_JSON = 'application/json';
		    
		    var e_NO_XHR = 1,
		        e_TIMEOUT = 2,
		        e_PRAPAIR_DATA = 3;
		        
		    function Promise() {
		        this._callbacks = [];
		    }
		
		    Promise.prototype.then = function(func, context) {
		        var p;
		        if (this._isdone) {
		            p = func.apply(context, this.result);
		        } else {
		            p = new Promise();
		            this._callbacks.push(function () {
		                var res = func.apply(context, arguments);
		                if (res && typeof res.then === 'function')
		                    res.then(p.done, p);
		            });
		        }
		        return p;
		    };
		
		    Promise.prototype.done = function() {
		        this.result = arguments;
		        this._isdone = true;
		        for (var i = 0; i < this._callbacks.length; i++) {
		            this._callbacks[i].apply(null, arguments);
		        }
		        this._callbacks = [];
		    };
		
		    function join(promises) {
		        var p = new Promise();
		        var results = [];
		
		        if (!promises || !promises.length) {
		            p.done(results);
		            return p;
		        }
		
		        var numdone = 0;
		        var total = promises.length;
		
		        function notifier(i) {
		            return function() {
		                numdone += 1;
		                results[i] = Array.prototype.slice.call(arguments);
		                if (numdone === total) {
		                    p.done(results);
		                }
		            };
		        }
		
		        for (var i = 0; i < total; i++) {
		            promises[i].then(notifier(i));
		        }
		
		        return p;
		    }
		
		    function chain(funcs, args) {
		        var p = new Promise();
		        if (funcs.length === 0) {
		            p.done.apply(p, args);
		        } else {
		            funcs[0].apply(null, args).then(function() {
		                funcs.splice(0, 1);
		                chain(funcs, arguments).then(function() {
		                    p.done.apply(p, arguments);
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
		        var p = new Promise(),
		            contentType = headers && headers['Content-Type'] || promise.contentType;
		        
		        var xhr,
		            payload;
		        
		
		        try {
		            xhr = new_xhr();
		        } catch (e) {
		            p.done(e_NO_XHR, "");
		            return p;
		        }
		        if (data) {
		            
		            if ('GET' === method) {
		                
		                url += '?' + _encode(data);
		                data = null;
		            } else {
		                
		                
		                switch (contentType) {
		                    case ct_URL_ENCODED:
		                        data = _encode(data);
		                        break;
		                    case ct_JSON:
		                        try {
		                            data = JSON.stringify(data);
		                        } catch(error){
		                            
		                            p.done(e_PRAPAIR_DATA, '');
		                            return p;
		                        }
		                    default:
		                        // @TODO notify not supported content type
		                        // -> fallback to url encode
		                        data = _encode(data);
		                        break;
		                }
		            }
		            
		        }
		        
		        xhr.open(method, url);
		        
		        if (data) 
		            xhr.setRequestHeader('Content-Type', contentType);
		        
		        for (var h in headers) {
		            if (headers.hasOwnProperty(h)) {
		                xhr.setRequestHeader(h, headers[h]);
		            }
		        }
		
		        function onTimeout() {
		            xhr.abort();
		            p.done(e_TIMEOUT, "", xhr);
		        }
		
		        var timeout = promise.ajaxTimeout;
		        if (timeout) {
		            var tid = setTimeout(onTimeout, timeout);
		        }
		
		        xhr.onreadystatechange = function() {
		            if (timeout) {
		                clearTimeout(tid);
		            }
		            if (xhr.readyState === 4) {
		                var err = (!xhr.status ||
		                           (xhr.status < 200 || xhr.status >= 300) &&
		                           xhr.status !== 304);
		                p.done(err, xhr.responseText, xhr);
		            }
		        };
		
		        xhr.send(data);
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
		        patch: _ajaxer('PATCH'),
		
		        /* Error codes */
		        ENOXHR: e_NO_XHR,
		        ETIMEOUT: e_TIMEOUT,
		        E_PREPAIR_DATA: e_PRAPAIR_DATA,
		        /**
		         * Configuration parameter: time in milliseconds after which a
		         * pending AJAX request is considered unresponsive and is
		         * aborted. Useful to deal with bad connectivity (e.g. on a
		         * mobile network). A 0 value disables AJAX timeouts.
		         *
		         * Aborted requests resolve the promise with a ETIMEOUT error
		         * code.
		         */
		        ajaxTimeout: 0,
		        
		        
		        contentType: ct_JSON
		    };
		
		    if (typeof define === 'function' && define.amd) {
		        /* AMD support */
		        define(function() {
		            return promise;
		        });
		    } else {
		        exports.promise = promise;
		    }
		
		})(this);
		
		// end:source promise.js
		
	}.call(XHR));
	
	arr_each(['get'], function(key){
		XHR[key] = function(path, sender){
			
			this
				.promise[key](path)
				.then(function(errored, response, xhr){
					
					if (errored) {
						sender.onError(errored, response, xhr);
						return;
					}
					
					sender.onSuccess(response);
				});
			
		};
	});
	
	arr_each(['del', 'post', 'put', 'patch'], function(key){
		XHR[key] = function(path, data, cb){
			this
				.promise[key](path, data)
				.then(function(error, response, xhr){
					cb(error, response, xhr);
				});
		};
	});
	
	
	// end:source /src/xhr/XHR.js
	
	// source /src/business/Serializable.js
	function Serializable(data) {
		
		if (this === Class || this == null || this === global) {
			
			var Ctor = function(data){
				Serializable.call(this, data);
			};
			
			Ctor.prototype._props = data;
			
			//- 
			//obj_extend(Ctor.prototype, Serializable.prototype);
			
			return Ctor;
		}
		
		if (data != null) {
			
			if (this.deserialize) 
				this.deserialize(data);
			else
				Serializable.deserialize(this, data);
			
		}
		
	}
	
	Serializable.serialize = function(instance) {
			
		if (is_Function(instance.toJSON)) 
			return instance.toJSON();
		
		
		return json_proto_toJSON.call(instance);
	};
	
	Serializable.deserialize = function(instance, json) {
			
		if (is_String(json)) {
			try {
				json = JSON.parse(json);
			}catch(error){
				console.error('<json:deserialize>', json);
				return instance;
			}
		}
		
		if (is_Array(json) && is_Function(instance.push)) {
			instance.length = 0;
			for (var i = 0, imax = json.length; i < imax; i++){
				instance.push(json[i]);
			}
			return instance;
		}
		
		var props = instance._props,
			key,
			val,
			Mix;
		
		for (key in json) {
			
			val = json[key];
			
			if (props != null) {
				Mix = props.hasOwnProperty(key) 
					? props[key]
					: null
					;
				if (Mix != null) {
					
					if (is_Function(Mix)) {
						instance[key] = val instanceof Mix
							? val
							: new Mix(val)
							;
						continue;
					}
					
					var deserialize = Mix.deserialize;
					
					if (is_Function(deserialize)) {
						instance[key] = deserialize(val);
						continue;
					}
					
				}
			}
			
			instance[key] = val;
		}
		
		return instance;
	}
	
	
	
	// end:source /src/business/Serializable.js
	// source /src/business/Route.js
	/**
	 *	var route = new Route('/user/:id');
	 *
	 *	route.create({id:5}) // -> '/user/5'
	 */
	var Route = (function(){
		
		
		function Route(route){
			this.route = route_parse(route);
		}
		
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
			},
			
			hasAliases: function(object){
				
				var i = 0,
					imax = this.route.path.length,
					alias
					;
				for (; i < imax; i++){
					alias = this.route.path[i].parts[1];
					
					if (alias && object[alias] == null) {
						return false;
					}
				}
				
				return true;
			}
		};
		
		var regexp_pathByColon = /^([^:\?]*)(\??):(\??)([\w]+)$/,
			regexp_pathByBraces = /^([^\{\?]*)(\{(\??)([\w]+)\})?([^\s]*)?$/;
		
		function parse_single(string) {
			var match = regexp_pathByColon.exec(string);
			
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
			
			console.error('Paths breadcrumbs should be matched by regexps');
			return { parts: [string] };
		}
		
		function parse_path(path, delimiter) {
			var parts = path.split(delimiter);
			
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
				key,
				parts;
			
			
			for (var i = 0, x, imax = breadcrumbs.length; i < imax; i++){
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
	// end:source /src/business/Route.js
	// source /src/business/Deferred.js
	function Deferred(){}
	
	(function(){
		
		Deferred.prototype = {
			_isAsync: true,
				
			_done: null,
			_fail: null,
			_always: null,
			_resolved: null,
			_rejected: null,
			
			defer: function(){
				this._rejected = null;
				this._resolved = null;
			},
			
			resolve: function() {
				var done = this._done,
					always = this._always
					;
				
				this._resolved = arguments;
				
				dfr_clearListeners(this);
				arr_callOnce(done, this, arguments);
				arr_callOnce(always, this, [ this ]);
				
				return this;
			},
			
			reject: function() {
				var fail = this._fail,
					always = this._always
					;
				
				this._rejected = arguments;
				
				dfr_clearListeners(this);
				arr_callOnce(fail, this, arguments);
				arr_callOnce(always, this, [ this ]);
		
				return this;
			},
			
			resolveDelegate: function(){
				return fn_proxy(this.resolve, this);
			},
			
			rejectDelegate: function(){
				return fn_proxy(this.reject, this);
			},
			
			then: function(onSuccess, onError){
				return this.done(onSuccess).fail(onError);
			},
			
			done: function(callback) {
				
				return dfr_bind(
					this,
					this._resolved,
					this._done || (this._done = []),
					callback
				);
			},
			
			fail: function(callback) {
				
				return dfr_bind(
					this,
					this._rejected,
					this._fail || (this._fail = []),
					callback
				);
			},
			
			always: function(callback) {
				
				return dfr_bind(
					this,
					this._rejected || this._resolved,
					this._always || (this._always = []),
					callback
				);
			},
		};
	
		// PRIVATE
		
		function dfr_bind(dfr, arguments_, listeners, callback){
			if (callback == null) 
				return dfr;
			
			if ( arguments_ != null) 
				fn_apply(callback, dfr, arguments_);
			else 
				listeners.push(callback);
			
			return dfr;
		}
		
		function dfr_clearListeners(dfr) {
			dfr._done = null;
			dfr._fail = null;
			dfr._always = null;
		}
		
		function arr_callOnce(arr, ctx, args) {
			if (arr == null) 
				return;
			
			var imax = arr.length,
				i = -1,
				fn;
			while ( ++i < imax ) {
				fn = arr[i];
				
				if (fn) 
					fn_apply(fn, ctx, args);
			}
			arr.length = 0;
		}
		
	}());
	// end:source /src/business/Deferred.js
	// source /src/business/EventEmitter.js
	var EventEmitter = (function(){
	 
		function Emitter() {
			this._listeners = {};
		}
	 
		
	    Emitter.prototype = {
	        constructor: Emitter,
			
	        on: function(event, callback) {
	            if (callback != null){
					(this._listeners[event] || (this._listeners[event] = [])).push(callback);
				}
				
	            return this;
	        },
	        once: function(event, callback){
				if (callback != null) {
					callback._once = true;
					(this._listeners[event] || (this._listeners[event] = [])).push(callback);
				}
				
	            return this;
	        },
			
			pipe: function(event){
				var that = this,
					args;
				return function(){
					args = _Array_slice.call(arguments);
					args.unshift(event);
					
					fn_apply(that.trigger, that, args);
				};
			},
	        
	        trigger: function() {
	            var args = _Array_slice.call(arguments),
	                event = args.shift(),
	                fns = this._listeners[event],
	                fn, imax, i = 0;
	                
	            if (fns == null)
					return this;
				
				for (imax = fns.length; i < imax; i++) {
					fn = fns[i];
					fn_apply(fn, this, args);
					
					if (fn._once === true){
						fns.splice(i, 1);
						i--;
						imax--;
					}
				}
			
	            return this;
	        },
	        off: function(event, callback) {
				var listeners = this._listeners[event];
	            if (listeners == null)
					return this;
				
				if (arguments.length === 1) {
					listeners.length = 0;
					return this;
				}
				
				var imax = listeners.length,
					i = -1;
					
				while (++i < imax) {
					
					if (listeners[i] === callback) {
						
						listeners.splice(i, 1);
						i--;
						imax--;
					}
					
				}
			
	            return this;
			}
	    };
	    
	    return Emitter;
	    
	}());
	
	// end:source /src/business/EventEmitter.js
	



	// source /src/Class.js
	var Class = function(mix) {
		
		var namespace,
			data;
		
		if (is_String(mix)) {
			namespace = mix;
			
			if (arguments.length === 1) 
				return class_get(mix);
			
			
			data = arguments[1];
			data[str_CLASS_IDENTITY] = namespace;
		} else {
			data = mix;
		}
		
		
		var _base = data.Base,
			_extends = data.Extends,
			_static = data.Static,
			_construct = data.Construct,
			_class = null,
			_store = data.Store,
			_self = data.Self,
			_overrides = data.Override,
			
			key;
	
		if (_base != null) 
			delete data.Base;
		
		if (_extends != null) 
			delete data.Extends;
		
		if (_static != null) 
			delete data.Static;
		
		if (_self != null) 
			delete data.Self;
		
		if (_construct != null) 
			delete data.Construct;
		
		
		if (_store != null) {
			
			if (_extends == null) {
				_extends = _store;
			} else if (is_Array(_extends)) {
				_extends.unshift(_store)
			} else {
				_extends = [_store, _extends];
			}
			
			delete data.Store;
		}
		
		if (_overrides != null) 
			delete data.Override;
		
		if (data.toJSON === void 0) 
			data.toJSON = json_proto_toJSON;
		
	
		if (_base == null && _extends == null && _self == null) {
			
			_class = _construct == null
				? function() {}
				: _construct
				;
			
			data.constructor = _class.prototype.constructor;
	
			if (_static != null) {
				for (key in _static) {
					_class[key] = _static[key];
				}
			}
	
			_class.prototype = data;
			
			if (namespace != null) 
				class_register(namespace, _class);
			
			return _class;
		}
	
		_class = function() {
			
			//// consider to remove 
			////if (this instanceof _class === false) 
			////	return new (_class.bind.apply(_class, [null].concat(_Array_slice.call(arguments))));
			
		
			if (_extends != null) {
				var isarray = _extends instanceof Array,
					
					imax = isarray ? _extends.length : 1,
					i = 0,
					x = null;
				for (; i < imax; i++) {
					x = isarray
						? _extends[i]
						: _extends
						;
					if (typeof x === 'function') {
						fn_apply(x, this, arguments);
					}
				}
			}
	
			if (_base != null) {
				fn_apply(_base, this, arguments);
			}
			
			if (_self != null && is_NullOrGlobal(this) === false) {
				
				for (var key in _self) {
					this[key] = fn_proxy(_self[key], this);
				}
			}
	
			if (_construct != null) {
				var r = fn_apply(_construct, this, arguments);
				if (r != null) {
					return r;
				}
			}
			
			this['super'] = null;
			
			return this;
		};
		
		if (namespace != null) 
			class_register(namespace, _class);
	
		if (_static != null) {
			for (key in _static) {
				_class[key] = _static[key];
			}
		}
		
		if (_base != null) 
			class_inheritStatics(_class, _base);
		
		if (_extends != null) 
			class_inheritStatics(_class, _extends);
		
	
		class_extendProtoObjects(data, _base, _extends);
		class_inherit(_class, _base, _extends, data, _overrides);
	
	
		data = null;
		_static = null;
	
		return _class;
	};
	// end:source /src/Class.js
	
	// source /src/business/Await.js
	var Await = (function(){
		
		return Class({
			Base: Deferred,
		
			_wait: 0,
			_timeout: null,
			_result: null,
			_resolved: [],
			
			Construct: function(/* promises <optional> */){
				var imax = arguments.length,
					i = -1,
					dfr
					;
				while ( ++i < imax ){
					dfr = arguments[i];
					if (dfr != null && typeof dfr.done === 'function') 
						await_deferredDelegate(this, null, dfr);
				}
			},
			
			delegate: function(name, errorable) {
				return await_createDelegate(this, name, errorable);
			},
		
			deferred: function(name) {
				
				return await_deferredDelegate(
					this,
					name,
					new Deferred);
			},
		
			Static: {
		
				TIMEOUT: 2000
			}
		});
	
		function await_deferredDelegate(await, name, dfr){
			var delegate = await_createDelegate(await, name, true),
				args
			;
			return dfr
				.done(function(){
					args = _Array_slice.call(arguments);
					args.unshift(null);
					
					delegate.apply(null, args);
				})
				.fail(function(error){
					
					delegate(error);
				})
				;
		}
		
		function await_createDelegate(await, name, errorable){
			if (errorable == null) 
				errorable = true;
			
			if (await._timeout)
				clearTimeout(await._timeout);
	
			await.defer();
			await._wait++;
	
			if (name){
				if (!await._result)
					await._result = {};
				
				if (name in await._result) 
					console.warn('<await>', name, 'already awaiting');
				
				await._result[name] = null;
			}
			
			var delegate = fn_createDelegate(await_listener, await, name, errorable)
				;
	
			await._timeout = setTimeout(delegate, Await.TIMEOUT);
	
			return delegate;
		}
		
		function await_listener(await, name, errorable /* .. args */ ) {
			
			if (arguments.length === 0) {
				// timeout
				await._wait = 0;
				await.reject('408: Timeout');
				return;
			}
			
			if (await._wait === 0) 
				return;
			
			var result = await._result;
			
			if (name) {
				var args = _Array_slice.call(arguments, 3);
				
				result[name] = {
					error: errorable ? args.shift() : null,
					arguments: args
				};
			} else if (errorable && arguments[3] != null) {
				
				if (result == null) 
					result = await._result = {};
				
				result.__error = arguments[3];
			}
			
			if (--await._wait === 0) {
				clearTimeout(await._timeout);
				
				var error = result && result.__error
					;
				var val,
					key;
				
				if (error == null) {
					for(key in result){
						
						val = result[key];
						error = val && val.error;
						
						if (error) 
							break;
					}
				}
				
				if (error) {
					await.reject(error, result);
					return;
				}
				
				await.resolve(result);
			}
		}
	
	}());
	// end:source /src/business/Await.js
	
	// source /src/store/Store.js
	var StoreProto = {
		
		
		// Abstract
		
		fetch: null,
		save: null,
		del: null,
		onSuccess: null,
		onError: null,
		
		Static: {
			fetch: function(data){
				return new this().fetch(data);
			}
		}
	};
	// end:source /src/store/Store.js
	// source /src/store/events.js
	var storageEvents_onBefore,
		storageEvents_onAfter,
		storageEvents_remove,
		storageEvents_overridenDefer
		;
		
	(function(){
		
		
		var event_START = 'start',
			event_SUCCESS = 'fulfilled',
			event_FAIL = 'rejected';
		
		var events_ = new EventEmitter,
			hasBeforeListeners_,
			hasAfterListeners_
			;
		
		storageEvents_onBefore = function(callback){
			events_.on(event_START, callback);
			hasBeforeListeners_ = true;
		};
		
		storageEvents_onAfter = function(onSuccess, onFailure){
			events_
				.on(event_SUCCESS, onSuccess)
				.on(event_FAIL, onFailure)
				;
			hasAfterListeners_ = true;
		};
		
		storageEvents_remove = function(callback){
			events_
				.off(event_SUCCESS, callback)
				.off(event_FAIL, callback)
				.off(event_START, callback)
				;
		};
		
		storageEvents_overridenDefer = function(type){
			
			Deferred.prototype.defer.call(this);
			
			if (hasBeforeListeners_) 
				emit([event_START, this, type]);
			
			if (hasAfterListeners_) 
				this.always(listenerDelegate(this, type));
			
			return this;
		};
		
		// PRIVATE
		
		function listenerDelegate(sender, type) {
			return function(){
				var isSuccess = sender._rejected == null,
					arguments_ = isSuccess 
						? sender._resolved
						: sender._rejected
						,
					event = isSuccess
						? event_SUCCESS
						: event_FAIL
					;
				emit([event, sender, type].concat(arguments_));
			};
		}
		
		
		function emit(arguments_/* [ event, sender, .. ]*/){
			events_.trigger.apply(events_, arguments_);
		}
		
		
	}());
	// end:source /src/store/events.js
	// source /src/store/Remote.js
	Class.Remote = (function(){
	
		var str_CONTENT_TYPE = 'content-type',
			str_JSON = 'json'
			;
			
		var XHRRemote = function(route){
			this._route = new Route(route);
		};
		
		obj_inherit(XHRRemote, StoreProto, Serializable, Deferred, {
			
			defer: storageEvents_overridenDefer,
			
			serialize: function(){
				
				return is_Array(this)
					? json_proto_arrayToJSON.call(this)
					: json_proto_toJSON.call(this)
					;
			},
			
			deserialize: function(json){
				return Serializable.deserialize(this, json);
			},
			
			fetch: function(data){
				this.defer('fetch');
				
				XHR.get(this._route.create(data || this), this);
				return this;
			},
			
			save: function(callback){
				this.defer('save');
				
				var json = this.serialize(),
					path = this._route.create(this),
					method = this._route.hasAliases(this)
						? 'put'
						: 'post'
					;
				
				XHR[method](path, json, resolveDelegate(this, callback, 'save'));
				return this;
			},
			
			patch: function(json){
				this.defer('patch');
				
				obj_patch(this, json);
				
				XHR.patch(
					this._route.create(this),
					json,
					resolveDelegate(this)
				);
				return this;
			},
			
			del: function(callback){
				this.defer('del');
				
				var json = this.serialize(),
					path = this._route.create(this)
					;
				
				XHR.del(path, json, resolveDelegate(this, callback));
				return this;
			},
			
			onSuccess: function(response){
				parseFetched(this, response);
			},
			onError: function(errored, response, xhr){
				reject(this, response, xhr);
			}
			
			
		});
		
		function parseFetched(self, response){
			var json;
				
			try {
				json = JSON.parse(response);	
			} catch(error) {
				
				reject(self, error);
				return;
			}
			
			
			self.deserialize(json);
			self.resolve(self);
		}
		
		function reject(self, response, xhr){
			var obj;
			if (typeof response === 'string' && is_JsonResponse(xhr)) {
				try {
					obj = JSON.parse(response);
				} catch (error) {
					obj = error;
				}
			}
			
			self.reject(obj || response);
		}
		
		function is_JsonResponse(xhr){
			var header = xhr.getResponseHeader(str_CONTENT_TYPE);
			
			return header != null
				&&  header.toLowerCase().indexOf(str_JSON) !== -1;
		}
		
		function resolveDelegate(self, callback, action){
			
			return function(error, response, xhr){
					
					if (is_JsonResponse(xhr)) {
						try {
							response = JSON.parse(response);
						} catch(error){
							console.error('<XHR> invalid json response', response);
							
							return reject(self, error, xhr);
						}
					}
					
					// @obsolete -> use deferred
					if (callback) 
						callback(error, response);
					
					if (error) 
						return reject(self, response, xhr);
					
					if ('save' === action && is_Object(response)) {
						
						if (is_Array(self)) {
							
							var imax = self.length,
								jmax = response.length,
								i = -1
								;
							
							while ( ++i < imax && i < jmax){
								
								Serializable.deserialize(self[i], response[i]);
							}
							
						} else {
							self.deserialize(response);
						}
						
						return self.resolve(self);
					}
					
					self.resolve(response);
			};
		}
		
		function Remote(route){
			
			return new XHRRemote(route);
		};
		
		Remote.onBefore = storageEvents_onBefore;
		Remote.onAfter = storageEvents_onAfter;
		
		arr_each(['get', 'post', 'put', 'delete'], function(method){
			
			Remote[method] = function(url, obj){
				
				var json = obj;
				if (obj.serialize != null) 
					json = obj.serialize();
				
				if (json == null && obj.toJSON) 
					json = obj.toJSON();
				
				var dfr = new Deferred();
				XHR[method](url, json, resolveDelegate(dfr));
				
				return dfr;
			};
		});
		
		return Remote;
	}());
	// end:source /src/store/Remote.js
	// source /src/store/LocalStore.js
	Class.LocalStore = (function(){
		
		var LocalStore = function(route){
			this._route = new Route(route);
		};
		
		obj_inherit(LocalStore, StoreProto, Serializable, Deferred, {
			
			serialize: function(){
				
				var json = is_Array(this)
					? json_proto_arrayToJSON.call(this)
					: json_proto_toJSON.call(this)
					;
				
				return JSON.stringify(json);
			},
			deserialize: function(json){
				return Serializable.deserialize(this, json);
			},
			fetch: function(data){
				
				var path = this._route.create(data || this),
					object = localStorage.getItem(path);
				
				if (object == null) {
					this.resolve(this);
					return this;
				}
				
				if (is_String(object)){
					try {
						object = JSON.parse(object);
					} catch(e) {
						this.onError(e);
					}
				}
				
				this.deserialize(object);
				
				return this.resolve(this);
			},
			
			save: function(callback){
				var path = this._route.create(this),
					store = this.serialize();
				
				localStorage.setItem(path, store);
				callback && callback();
				return this;
			},
			
			del: function(mix){
				
				if (mix == null && arguments.length !== 0) {
					console.error('<localStore:del> - selector is specified, but is undefined');
					return this;
				}
				
				// Single
				if (arr_isArray(this) === false) {
					store_del(this._route, mix || this);
					return this;
				}
				
				// Collection
				if (mix == null) {
					
					for (var i = 0, imax = this.length; i < imax; i++){
						this[i] = null;
					}
					this.length = 0;
					
					store_del(this._route, this);
					return this;
				}
				
				var array = this.remove(mix);
				if (array.length === 0) {
					// was nothing removed
					return this;
				}
				
				return this.save();
			},
			
			onError: function(error){
				this.reject({
					error: error
				});
			}
			
			
		});
		
		function store_del(route, data){
			var path = route.create(data);
			
			localStorage.removeItem(path);
		}
		
		var Constructor = function(route){
			
			return new LocalStore(route);
		};
		
		Constructor.prototype = LocalStore.prototype;
		
		
		return Constructor;
	
	}());
	// end:source /src/store/LocalStore.js
	

	// source /src/Class.Static.js
	/**
	 * Can be used in Constructor for binding class's functions to class's context
	 * for using, for example, as callbacks
	 *
	 * @obsolete - use 'Self' property instead
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
	
	Class.cfg = function(mix, value){
		
		if (is_String(mix)) {
			
			if (arguments.length === 1) 
				return _cfg[mix];
			
			_cfg[mix] = value;
			return;
		}
		
		if (is_Object(mix)) {
			
			for(var key in mix){
				
				Class.cfg(key, mix[key]);
			}
		}
	};
	
	
	
	Class.Model = {};
	Class.Serializable = Serializable;
	Class.Deferred = Deferred;
	Class.EventEmitter = EventEmitter;
	Class.Await = Await;
	Class.validate = obj_validate;
	
	Class.stringify = class_stringify;
	Class.parse = class_parse;
	Class.patch = class_patch;
	Class.properties = class_properties;
	// end:source /src/Class.Static.js
	
	// source /src/collection/Collection.js
	Class.Collection = (function(){
		
		// source ArrayProto.js
		
		var ArrayProto = (function(){
		
			function check(x, mix) {
				if (mix == null)
					return false;
				
				if (typeof mix === 'function') 
					return mix(x);
				
				if (typeof mix === 'object'){
					
					if (x.constructor === mix.constructor && x.constructor !== Object) {
						return x === mix;
					}
					
					var value, matcher;
					for (var key in mix) {
						
						value = x[key];
						matcher = mix[key];
						
						if (typeof matcher === 'string') {
							var c = matcher[0],
								index = 1;
							
							if ('<' === c || '>' === c){
								
								if ('=' === matcher[1]){
									c +='=';
									index++;
								}
								
								matcher = matcher.substring(index);
								
								switch (c) {
									case '<':
										if (value >= matcher)
											return false;
										continue;
									case '<=':
										if (value > matcher)
											return false;
										continue;
									case '>':
										if (value <= matcher)
											return false;
										continue;
									case '>=':
										if (value < matcher)
											return false;
										continue;
								}
							}
						}
						
						// eqeq to match by type diffs.
						if (value != matcher) 
							return false;
						
					}
					return true;
				}
				
				console.warn('No valid matcher', mix);
				return false;
			}
		
			var ArrayProto = {
				length: 0,
				push: function(/*mix*/) {
					var imax = arguments.length,
						i = -1;
					while ( ++i < imax ) {
						
						this[this.length++] = create(this._ctor, arguments[i]);
					}
					
					return this;
				},
				pop: function() {
					var instance = this[--this.length];
			
					this[this.length] = null;
					return instance;
				},
				shift: function(){
					if (this.length === 0) 
						return null;
					
					
					var first = this[0],
						imax = this.length - 1,
						i = 0;
					
					for (; i < imax; i++){
						this[i] = this[i + 1];
					}
					
					this[imax] = null;
					this.length--;
					
					return first;
				},
				unshift: function(mix){
					this.length++;
					
					var imax = this.length;
					
					while (--imax) {
						this[imax] = this[imax - 1];
					}
					
					this[0] = create(this._ctor, mix);
					return this;
				},
				
				splice: function(index, count /* args */){
					
					var length = this.length;
					var i, imax, y;
					
					// clear range after length until index
					if (index >= length) {
						count = 0;
						for (i = length, imax = index; i < imax; i++){
							this[i] = void 0;
						}
					}
					
					var	rm_count = count,
						rm_start = index,
						rm_end = index + rm_count,
						add_count = arguments.length - 2,
						
						new_length = length + add_count - rm_count;
					
					
					// move block
					
					var block_start = rm_end,
						block_end = length,
						block_shift = new_length - length;
					
					if (0 < block_shift) {
						// move forward
						
						i = block_end;
						while (--i >= block_start) {
							
							this[i + block_shift] = this[i];
							
						}
		
					}
					
					if (0 > block_shift) {
						// move backwards
						
						i = block_start;				
						while (i < block_end) {
							this[i + block_shift] = this[i];
							i++;
						}
					}
					
					// insert
					
					i = rm_start;
					y = 2;
					for (; y < arguments.length; y) {
						this[i++] = create(this._ctor, arguments[y++]);
					}
					
					
					this.length = new_length;
					return this;
				},
				
				slice: function(){
					return fn_apply(_Array_slice, this, arguments);
				},
				
				sort: function(fn){
					_Array_sort.call(this, fn);
					return this;
				},
				
				reverse: function(){
					var array = _Array_slice.call(this),
						imax = this.length,
						i = -1
						;
					while( ++i < imax) {
						this[i] = array[imax - i - 1];
					}
					return this;
				},
				
				toString: function(){
					return _Array_slice.call(this, 0).toString()
				},
				
				each: forEach,
				forEach: forEach,
				
				
				where: function(mix){
					
					var collection = new this.constructor();
					
					for (var i = 0, x, imax = this.length; i < imax; i++){
						x = this[i];
						
						if (check(x, mix)) {
							collection[collection.length++] = x;
						}
					}
					
					return collection;
				},
				remove: function(mix){
					var index = -1,
						array = [];
					for (var i = 0, imax = this.length; i < imax; i++){
						
						if (check(this[i], mix)) {
							array.push(this[i]);
							continue;
						}
						
						this[++index] = this[i];
					}
					for (i = ++index; i < imax; i++) {
						this[i] = null;
					}
					
					this.length = index;
					return array;
				},
				first: function(mix){
					if (mix == null)
						return this[0];
					
					var i = this.indexOf(mix);
					return i !== -1
						? this[i]
						: null;
						
				},
				last: function(mix){
					if (mix == null)
						return this[this.length - 1];
					
					var i = this.lastIndexOf(mix);
					return i !== -1
						? this[i]
						: null;
				},
				indexOf: function(mix, index){
					if (mix == null)
						return -1;
					
					if (index != null) {
						if (index < 0) 
							index = 0;
							
						if (index >= this.length) 
							return -1;
						
					}
					else{
						index = 0;
					}
					
					
					var imax = this.length;
					for(; index < imax; index++) {
						if (check(this[index], mix))
							return index;
					}
					return -1;
				},
				lastIndexOf: function(mix, index){
					if (mix == null)
						return -1;
					
					if (index != null) {
						if (index >= this.length) 
							index = this.length - 1;
						
						if (index < 0) 
							return -1;
					}
					else {
						index = this.length - 1;
					}
					
					
					for (; index > -1; index--) {
						if (check(this[index], mix))
							return index;
					}
					
					return -1;
				},
				
				map: function(fn){
					
					var arr = [],
						imax = this.length,
						i = -1;
					while( ++i < imax ){
						arr[i] = fn(this[i]);
					}
					return arr;
				},
				
				filter: function(fn, ctx){
					var coll = new this.constructor(),
						imax = this.length,
						i = -1;
					while ( ++i < imax ){
						if (fn.call(ctx || this, this[i])) {
							coll.push(this[i]);
						}
					}
					return coll;
				}
			};
			
			
			function forEach(fn, ctx){
				
				var imax = this.length,
					i = -1
					;
				while( ++i < imax ) {
					
					fn.call(ctx || this, this[i], i);
				}
				return this;
			}
			
			
			return ArrayProto;
		}());
		
		// end:source ArrayProto.js
		
		function create(Constructor, mix) {
			
			if (mix instanceof Constructor) 
				return mix;
			
			return new Constructor(mix);
		}
		
		var CollectionProto = {
			toArray: function(){
				var array = new Array(this.length);
				for (var i = 0, imax = this.length; i < imax; i++){
					array[i] = this[i];
				}
				
				return array;
			},
			
			toJSON: json_proto_arrayToJSON
		};
		
		function Collection(/* (ClassName, Child, Proto) (Child, Proto) */) {
			var length = arguments.length,
				Proto = arguments[length - 1],
				Child = arguments[length - 2],
				
				className
				;
			
			if (length > 2) 
				className = arguments[0];
			
			
			Proto._ctor = Child;
			obj_inherit(Proto, CollectionProto, ArrayProto);
			
			return className == null
				? Class(Proto)
				: Class(className, Proto)
				;
		}
		
		
		return Collection;
	}());
	// end:source /src/collection/Collection.js
	
	// source /src/fn/fn.js
	(function(){
		
		// source memoize.js
		
		
		function args_match(a, b) {
			if (a.length !== b.length) 
				return false;
			
			var imax = a.length,
				i = 0;
			
			for (; i < imax; i++){
				if (a[i] !== b[i])
					return false;
			}
			
			return true;
		}
		
		function args_id(store, args) {
		
			if (args.length === 0)
				return 0;
		
			
			for (var i = 0, imax = store.length; i < imax; i++) {
				
				if (args_match(store[i], args))
					return i + 1;
			}
			
			store.push(args);
			return store.length;
		}
		
		
		function fn_memoize(fn) {
		
			var _cache = {},
				_args = [];
				
			return function() {
		
				var id = args_id(_args, arguments);
		
				
				return _cache[id] == null
					? (_cache[id] = fn_apply(fn, this, arguments))
					: _cache[id];
			};
		}
		
		
		function fn_resolveDelegate(cache, cbs, id) {
			
			return function(){
				cache[id] = arguments;
				
				for (var i = 0, x, imax = cbs[id].length; i < imax; i++){
					x = cbs[id][i];
					fn_apply(x, this, arguments);
				}
				
				cbs[i] = null;
				cache = null;
				cbs = null;
			};
		}
		
		function fn_memoizeAsync(fn) {
			var _cache = {},
				_cacheCbs = {},
				_args = [];
				
			return function(){
				
				var args = _Array_slice.call(arguments),
					callback = args.pop();
				
				var id = args_id(_args, args);
				
				if (_cache[id]){
					fn_apply(callback, this, _cache[id])
					return; 
				}
				
				if (_cacheCbs[id]) {
					_cacheCbs[id].push(callback);
					return;
				}
				
				_cacheCbs[id] = [callback];
				
				args = _Array_slice.call(args);
				args.push(fn_resolveDelegate(_cache, _cacheCbs, id));
				
				fn_apply(fn, this, args);
			};
		}
		
			
			
		
		// end:source memoize.js
		
		Class.Fn = {
			memoize: fn_memoize,
			memoizeAsync: fn_memoizeAsync
		};
		
	}());
	// end:source /src/fn/fn.js
	
	exports.Class = Class;
	
}));
// end:source ../.reference/atma/class/lib/class.js
// source ../.reference/atma/include/lib/include.js

// source ../src/head.js
(function (root, factory) {
    'use strict';

	var _global, _exports, _document;
	
	if (typeof exports !== 'undefined' && (root === exports || root == null)){
		// raw nodejs module
    	_global = _exports = global;
    }
	
	if (_global == null) {
		_global = typeof window === 'undefined' ? global : window;
	}
	if (_exports == null) {
		_exports = root || _global;
	}
	
	_document = _global.document;
	
	
	factory(_global, _exports, _document);

}(this, function (global, exports, document) {
    'use strict';

// end:source ../src/head.js

	// source ../src/1.scope-vars.js 
	
	/**
	 *	.cfg
	 *		: path :=	root path. @default current working path, im browser window.location;
	 *		: eval := in node.js this conf. is forced
	 *		: lockedToFolder := makes current url as root path
	 *			Example "/script/main.js" within this window.location "{domain}/apps/1.html"
	 *			will become "{domain}/apps/script/main.js" instead of "{domain}/script/main.js"
	 */
	
	var bin = {
			js: {},
			css: {},
			load: {}
		},
		isWeb = !! (global.location && global.location.protocol && /^https?:/.test(global.location.protocol)),
		reg_subFolder = /([^\/]+\/)?\.\.\//,
		cfg = {
			path: null,
			loader: null,
			version: null,
			lockedToFolder: null,
			sync: null,
			eval: document == null
		},
		handler = {},
		hasOwnProp = {}.hasOwnProperty,
		emptyResponse = {
			load: {}
		},
		__array_slice = Array.prototype.slice,
		
		XMLHttpRequest = global.XMLHttpRequest;
	
		
	// end:source ../src/1.scope-vars.js 
	// source ../src/2.Helper.js
	var Helper = { /** TODO: improve url handling*/
		
		reportError: function(e) {
			console.error('IncludeJS Error:', e, e.message, e.url);
			typeof handler.onerror === 'function' && handler.onerror(e);
		}
		
	},
	
		XHR = function(resource, callback) {
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				xhr.readyState === 4 && callback && callback(resource, xhr.responseText);
			};
	
			xhr.open('GET', typeof resource === 'object' ? resource.url : resource, true);
			xhr.send();
		};
	
	// end:source ../src/2.Helper.js
	
	// source ../src/utils/fn.js
	function fn_proxy(fn, ctx) {
		
		return function(){
			fn.apply(ctx, arguments);
		};
		
	}
	
	function fn_doNothing(fn) {
		typeof fn === 'function' && fn();
	}
	// end:source ../src/utils/fn.js
	// source ../src/utils/object.js
	function obj_inherit(target /* source, ..*/ ) {
		if (typeof target === 'function') {
			target = target.prototype;
		}
		var i = 1,
			imax = arguments.length,
			source, key;
		for (; i < imax; i++) {
	
			source = typeof arguments[i] === 'function'
				? arguments[i].prototype
				: arguments[i];
	
			for (key in source) {
				target[key] = source[key];
			}
		}
		return target;
	}
	
	function obj_getProperty(obj, property) {
		var chain = property.split('.'),
			length = chain.length,
			i = 0;
		for (; i < length; i++) {
			if (obj == null) {
				return null;
			}
	
			obj = obj[chain[i]];
		}
		return obj;
	}
	// end:source ../src/utils/object.js
	// source ../src/utils/array.js
	function arr_invoke(arr, args, ctx) {
	
		if (arr == null || arr instanceof Array === false) {
			return;
		}
	
		for (var i = 0, length = arr.length; i < length; i++) {
			if (typeof arr[i] !== 'function') {
				continue;
			}
			if (args == null) {
				arr[i].call(ctx);
			}else{
				arr[i].apply(ctx, args);
			}
		}
	
	}
	
	function arr_ensure(obj, xpath) {
		if (!xpath) {
			return obj;
		}
		var arr = xpath.split('.'),
			imax = arr.length - 1,
			i = 0,
			key;
	
		for (; i < imax; i++) {
			key = arr[i];
			obj = obj[key] || (obj[key] = {});
		}
	
		key = arr[imax];
		return obj[key] || (obj[key] = []);
	}
	// end:source ../src/utils/array.js
	// source ../src/utils/path.js
	var path_getDir,
		path_getFile,
		path_getExtension,
		path_resolveCurrent,
		path_normalize,
		path_win32Normalize,
		path_resolveUrl,
		path_combine,
		path_isRelative
		;
		
	(function(){
	
		
		path_getDir = function(path) {
			return path.substring(0, path.lastIndexOf('/') + 1);
		};
			
		path_getFile = function(path) {
			path = path
				.replace('file://', '')
				.replace(/\\/g, '/')
				.replace(/\?[^\n]+$/, '');
			
			if (/^\/\w+:\/[^\/]/i.test(path)){
				// win32 drive
				return path.substring(1);
			}
			return path;
		};
		
		path_getExtension = function(path) {
			var query = path.indexOf('?');
			if (query === -1) {
				return path.substring(path.lastIndexOf('.') + 1);
			}
			
			return path.substring(path.lastIndexOf('.', query) + 1, query);
		};
		
		path_resolveCurrent = function() {
		
			if (document == null) {
				return typeof module === 'undefined'
					? '' 
					: path_win32Normalize(module.parent.filename);
			}
			var scripts = document.getElementsByTagName('script'),
				last = scripts[scripts.length - 1],
				url = last && last.getAttribute('src') || '';
			
			if (url[0] === '/') {
				return url;
			}
			
			var location = window
				.location
				.pathname
				.replace(/\/[^\/]+\.\w+$/, '');
			
			if (location[location.length - 1] !== '/') {
				location += '/';
			}
			
			return location + url;
		};
		
		path_normalize = function(path) {
			return path.replace(/\\/g, '/').replace(/\/{2,}/g, '/');
		};
		
		path_win32Normalize = function(path){
			path = path.replace(/\\/g, '/');
			if (path.substring(0, 5) === 'file:'){
				return path;
			}
		
			return 'file:///' + path;
		};
		
		path_resolveUrl = function(url, parent) {
			if (cfg.path && url[0] === '/') {
				url = cfg.path + url.substring(1);
			}
		
			switch (url.substring(0, 5)) {
				case 'file:':
				case 'http:':
					return url;
			}
		
			if (url.substring(0, 2) === './') {
				url = url.substring(2);
			}
		
		
			if (url[0] === '/') {
				if (isWeb === false || cfg.lockedToFolder === true) {
					url = url.substring(1);
				}
			} else if (parent != null && parent.location != null) {
				url = parent.location + url;
			}
		
		
			while (url.indexOf('../') !== -1) {
				url = url.replace(reg_subFolder, '');
			}
		
			return url;
		};
		
		path_isRelative = function(path) {
			var c = path.charCodeAt(0);
			
			switch (c) {
				case 47:
					// /
					return false;
				case 102:
					// f
				case 104:
					// h
					return /^file:|https?:/.test(path) === false;
			}
			
			return true;
		};
		
		path_combine = function() {
			var out = '',
				imax = arguments.length,
				i = -1,
				x
				;
			while ( ++i < imax ){
				x = arguments[i];
				if (!x) 
					continue;
				
				x = path_normalize(x);
				
				if (out === '') {
					out = x;
					continue;
				}
				
				if (out[out.length - 1] !== '/') 
					out += '/'
				
				if (x[0] === '/') 
					x = x.substring(1);
				
				out += x;
			}
			
			return out;
		}
		
	}());
		
	
	// end:source ../src/utils/path.js
	// source ../src/utils/tree.js
	var tree_resolveUsage;
	
	
	(function(){
		
		tree_resolveUsage = function(resource, usage){
			var use = [],
				imax = usage.length,
				i = -1,
				
				obj, path, name, index
				;
			while( ++i < imax ) {
				
				name = path = usage[i];
				index = path.indexOf('.');
				if ( index !== -1) {
					name = path.substring(0, index);
					path = path.substring(index + 1);
				}
				
				obj = use_resolveExports(name, resource.parent);
				
				if (name !== path) 
					obj = obj_getProperty(obj, path);
				
				// if DEBUG
				(typeof obj === 'object' && obj == null)
					&& console.warn('<include:use> Used resource has no exports', name, resource.url);
				// endif
				
				
				use[i] = obj;
			}
			
			return use;
		};
		
		
		function use_resolveExports(name, resource){
			
			if (resource == null) {
				// if DEBUG
				console.warn('<include:use> Not Found. Ensure to have it included before with correct alias', name);
				// endif
				return;
			}
			
			
			var includes = resource.includes,
				i = -1,
				imax = includes.length,
				
				include, exports
				;
				
			while( ++i < imax) {
				include = includes[i];
				
				if (include.route.alias === name) 
					return include.resource.exports;
			}
			
			return use_resolveExports(name, resource.parent);
		}
		
		
	}());
	// end:source ../src/utils/tree.js
	
	// source ../src/2.Routing.js
	var RoutesLib = function() {
	
		var routes = {},
			regexpAlias = /([^\\\/]+)\.\w+$/;
	
		
			
		return {
			/**
			 *	@param route {String} = Example: '.reference/libjs/{0}/{1}.js'
			 */
			register: function(namespace, route, currentInclude) {
				
				if (typeof route === 'string' && path_isRelative(route)) {
					var res = currentInclude || include,
						location = res.location || path_getDir(res.url || path_resolveCurrent());
						
					if (path_isRelative(location)) {
						location = '/' + location;
					}
					
					route = location + route;
				}
	
				routes[namespace] = route instanceof Array ? route : route.split(/[\{\}]/g);
	
			},
	
			/**
			 *	@param {String} template = Example: 'scroller/scroller.min?ui=black'
			 */
			resolve: function(namespace, template) {
				var questionMark = template.indexOf('?'),
					aliasIndex = template.indexOf('::'),
					alias,
					path,
					params,
					route,
					i,
					x,
					length,
					arr;
					
				
				if (aliasIndex !== -1){
					alias = template.substring(aliasIndex + 2);
					template = template.substring(0, aliasIndex);
				}
				
				if (questionMark !== -1) {
					arr = template.substring(questionMark + 1).split('&');
					params = {};
					
					for (i = 0, length = arr.length; i < length; i++) {
						x = arr[i].split('=');
						params[x[0]] = x[1];
					}
	
					template = template.substring(0, questionMark);
				}
	
				template = template.split('/');
				route = routes[namespace];
				
				if (route == null){
					return {
						path: template.join('/'),
						params: params,
						alias: alias
					};
				}
				
				path = route[0];
				
				for (i = 1; i < route.length; i++) {
					if (i % 2 === 0) {
						path += route[i];
					} else {
						/** if template provides less "breadcrumbs" than needed -
						 * take always the last one for failed peaces */
						
						var index = route[i] << 0;
						if (index > template.length - 1) {
							index = template.length - 1;
						}
						
						
						
						path += template[index];
						
						if (i === route.length - 2){
							for(index++; index < template.length; index++){
								path += '/' + template[index];
							}
						}
					}
				}
	
				return {
					path: path,
					params: params,
					alias: alias
				};
			},
	
			/**
			 *	@arg includeData :
			 *	1. string - URL to resource
			 *	2. array - URLs to resources
			 *	3. object - {route: x} - route defines the route template to resource,
			 *		it must be set before in include.cfg.
			 *		example:
			 *			include.cfg('net','scripts/net/{name}.js')
			 *			include.js({net: 'downloader'}) // -> will load scipts/net/downloader.js
			 *	@arg namespace - route in case of resource url template, or namespace in case of LazyModule
			 *
			 *	@arg fn - callback function, which receives namespace|route, url to resource and ?id in case of not relative url
			 *	@arg xpath - xpath string of a lazy object 'object.sub.and.othersub';
			 */
			each: function(type, includeData, fn, namespace, xpath) {
				var key;
	
				if (includeData == null) {
					return;
				}
	
				if (type === 'lazy' && xpath == null) {
					for (key in includeData) {
						this.each(type, includeData[key], fn, null, key);
					}
					return;
				}
				if (includeData instanceof Array) {
					for (var i = 0; i < includeData.length; i++) {
						this.each(type, includeData[i], fn, namespace, xpath);
					}
					return;
				}
				if (typeof includeData === 'object') {
					for (key in includeData) {
						if (hasOwnProp.call(includeData, key)) {
							this.each(type, includeData[key], fn, key, xpath);
						}
					}
					return;
				}
	
				if (typeof includeData === 'string') {
					var x = this.resolve(namespace, includeData);
					if (namespace){
						namespace += '.' + includeData;
					}
					
					fn(namespace, x, xpath);
					return;
				}
				
				console.error('Include Package is invalid', arguments);
			},
	
			getRoutes: function(){
				return routes;
			},
			
			parseAlias: function(route){
				var path = route.path,
					result = regexpAlias.exec(path);
				
				return result && result[1];
			}
		};
		
	};
	
	var Routes = RoutesLib();
	
	
	/*{test}
	
	console.log(JSON.stringify(Routes.resolve(null,'scroller.js::Scroller')));
	
	Routes.register('lib', '.reference/libjs/{0}/lib/{1}.js');
	console.log(JSON.stringify(Routes.resolve('lib','scroller::Scroller')));
	console.log(JSON.stringify(Routes.resolve('lib','scroller/scroller.mobile?ui=black')));
	
	Routes.register('framework', '.reference/libjs/framework/{0}.js');
	console.log(JSON.stringify(Routes.resolve('framework','dom/jquery')));
	
	
	*/
	// end:source ../src/2.Routing.js
	// source ../src/3.Events.js
	var Events = (function(document) {
		if (document == null) {
			return {
				ready: fn_doNothing,
				load: fn_doNothing
			};
		}
		var readycollection = [];
	
		function onReady() {
			Events.ready = fn_doNothing;
	
			if (readycollection == null) {
				return;
			}
	
			arr_invoke(readycollection);
			readycollection = null;
		}
	
		/** TODO: clean this */
	
		if ('onreadystatechange' in document) {
			document.onreadystatechange = function() {
				if (/complete|interactive/g.test(document.readyState) === false) {
					return;
				}
				onReady();
			};
		} else if (document.addEventListener) {
			document.addEventListener('DOMContentLoaded', onReady);
		}else {
			window.onload = onReady;
		}
	
	
		return {
			ready: function(callback) {
				readycollection.unshift(callback);
			}
		};
	})(document);
	
	// end:source ../src/3.Events.js
    // source ../src/6.ScriptStack.js
    /** @TODO Refactor loadBy* {combine logic} */
    
    var ScriptStack = (function() {
    
    	var head,
    		currentResource,
    		stack = [],
    		
    		_cb_complete = [],
    		_paused;
    		
    		
    	function loadScript(url, callback) {
    		//console.log('load script', url);
    		var tag = document.createElement('script');
    		tag.type = 'text/javascript';
    		tag.src = url;
    
    		if ('onreadystatechange' in tag) {
    			tag.onreadystatechange = function() {
    				(this.readyState === 'complete' || this.readyState === 'loaded') && callback();
    			};
    		} else {
    			tag.onload = tag.onerror = callback;
    		}
    		
    		;(head || (head = document.getElementsByTagName('head')[0])).appendChild(tag);
    	}
    
    	function loadByEmbedding() {
    		if (_paused) {
    			return;
    		}
    		
    		if (stack.length === 0){
    			trigger_complete();
    			return;
    		}
    
    		if (currentResource != null) {
    			return;
    		}
    
    		var resource = (currentResource = stack[0]);
    
    		if (resource.state === 1) {
    			return;
    		}
    
    		resource.state = 1;
    
    		global.include = resource;
    		global.iparams = resource.route.params;
    
    
    		function resourceLoaded(e) {
    
    
    			if (e && e.type === 'error') {
    				console.log('Script Loaded Error', resource.url);
    			}
    
    			var i = 0,
    				length = stack.length;
    
    			for (; i < length; i++) {
    				if (stack[i] === resource) {
    					stack.splice(i, 1);
    					break;
    				}
    			}
    
    			if (i === length) {
    				console.error('Loaded Resource not found in stack', resource);
    				return;
    			}
    
    			if (resource.state !== 2.5) 
    				resource.readystatechanged(3);
    			currentResource = null;
    			loadByEmbedding();
    		}
    
    		if (resource.source) {
    			__eval(resource.source, resource);
    
    			resourceLoaded();
    			return;
    		}
    
    		loadScript(resource.url, resourceLoaded);
    	}
    	
    	function processByEval() {
    		if (_paused) {
    			return;
    		}
    		
    		if (stack.length === 0){
    			trigger_complete();
    			return;
    		}
    		
    		if (currentResource != null) {
    			return;
    		}
    
    		var resource = stack[0];
    
    		if (resource.state < 2) {
    			return;
    		}
    
    		currentResource = resource;
    
    		resource.state = 1;
    		global.include = resource;
    
    		//console.log('evaling', resource.url, stack.length);
    		__eval(resource.source, resource);
    
    		for (var i = 0, x, length = stack.length; i < length; i++) {
    			x = stack[i];
    			if (x === resource) {
    				stack.splice(i, 1);
    				break;
    			}
    		}
    
    		if (resource.state !== 2.5) 
    			resource.readystatechanged(3);
    		currentResource = null;
    		processByEval();
    
    	}
    	
    	
    	function trigger_complete() {
    		var i = -1,
    			imax = _cb_complete.length;
    		while (++i < imax) {
    			_cb_complete[i]();
    		}
    		
    		_cb_complete.length = 0;
    	}
    
    	
    
    	return {
    		load: function(resource, parent, forceEmbed) {
    
    			this.add(resource, parent);
    
    			if (!cfg.eval || forceEmbed) {
    				loadByEmbedding();
    				return;
    			}
    
    			// was already loaded, with custom loader for example
    			if (resource.source) {
    				resource.state = 2;
    				processByEval();
    				return;
    			}
    
    			XHR(resource, function(resource, response) {
    				if (!response) {
    					console.error('Not Loaded:', resource.url);
    				}
    
    				resource.source = response;
    				resource.state = 2;
    
    				processByEval();
    			});
    		},
    		
    		add: function(resource, parent){
    			
    			if (resource.priority === 1) 
    				return stack.unshift(resource);
    			
    			
    			if (parent == null) 
    				return stack.push(resource);
    				
    			
    			var imax = stack.length,
    				i = -1
    				;
    			// move close to parent
    			while( ++i < imax){
    				if (stack[i] === parent) 
    					return stack.splice(i, 0, resource);
    			}
    			
    			// was still not added
    			stack.push(resource);
    		},
    		
    		/* Move resource in stack close to parent */
    		moveToParent: function(resource, parent) {
    			var length = stack.length,
    				parentIndex = -1,
    				resourceIndex = -1,
    				i;
    
    			for (i = 0; i < length; i++) {
    				if (stack[i] === resource) {
    					resourceIndex = i;
    					break;
    				}
    			}
    
    			if (resourceIndex === -1) {
    				return;
    			}
    
    			for (i= 0; i < length; i++) {
    				if (stack[i] === parent) {
    					parentIndex = i;
    					break;
    				}
    			}
    
    			if (parentIndex === -1) {
    				return;
    			}
    
    			if (resourceIndex < parentIndex) {
    				return;
    			}
    
    			stack.splice(resourceIndex, 1);
    			stack.splice(parentIndex, 0, resource);
    
    
    		},
    		
    		pause: function(){
    			_paused = true;
    		},
    		
    		resume: function(){
    			_paused = false;
    			
    			if (currentResource != null) 
    				return;
    			
    			this.touch();
    		},
    		
    		touch: function(){
    			var fn = cfg.eval
    				? processByEval
    				: loadByEmbedding
    				;
    			fn();
    		},
    		
    		complete: function(callback){
    			if (_paused !== true && stack.length === 0) {
    				callback();
    				return;
    			}
    			
    			_cb_complete.push(callback);
    		}
    	};
    })();
    
    // end:source ../src/6.ScriptStack.js
    
	// source ../src/4.IncludeDeferred.js 
	
	/**
	 * STATES:
	 * 0: Resource Created
	 * 1: Loading
	 * 2: Loaded - Evaluating
	 * 2.5: Paused - Evaluating paused
	 * 3: Evaluated - Childs Loading
	 * 4: Childs Loaded - Completed
	 */
	
	var IncludeDeferred = function() {
		this.callbacks = [];
		this.state = -1;
	};
	
	IncludeDeferred.prototype = { /**	state observer */
	
		on: function(state, callback, sender, mutator) {
			if (this === sender && this.state === -1) {
				callback(this);
				return this;
			}
			
			// this === sender in case when script loads additional
			// resources and there are already parents listeners
			
			if (mutator == null) {
				mutator = (this.state < 3 || this === sender)
					? 'unshift'
					: 'push'
					;
			}
			
			state <= this.state ? callback(this) : this.callbacks[mutator]({
				state: state,
				callback: callback
			});
			return this;
		},
		readystatechanged: function(state) {
	
			var i, length, x, currentInclude;
	
			if (state > this.state) {
				this.state = state;
			}
	
			if (this.state === 3) {
				var includes = this.includes;
	
				if (includes != null && includes.length) {
					for (i = 0; i < includes.length; i++) {
						if (includes[i].resource.state !== 4) {
							return;
						}
					}
				}
	
				this.state = 4;
			}
	
			i = 0;
			length = this.callbacks.length;
	
			if (length === 0){
				return;
			}
	
			//do not set asset resource to global
			if (this.type === 'js' && this.state === 4) {
				currentInclude = global.include;
				global.include = this;
			}
	
			for (; i < length; i++) {
				x = this.callbacks[i];
				if (x == null || x.state > this.state) {
					continue;
				}
	
				this.callbacks.splice(i,1);
				length--;
				i--;
	
				/* if (!DEBUG)
				try {
				*/
					x.callback(this);
				/* if (!DEBUG)
				} catch(error){
					console.error(error.toString(), 'file:', this.url);
				}
				*/
	
				if (this.state < 4){
					break;
				}
			}
	
			if (currentInclude != null){
				global.include = currentInclude;
			}
		},
	
		/** assets loaded and DomContentLoaded */
	
		ready: function(callback) {
			var that = this;
			return this.on(4, function() {
				Events.ready(function(){
					that.resolve(callback);
				});
			}, this);
		},
	
		/** assets loaded */
		done: function(callback) {
			var that = this;
			return this.on(4, function(){
				that.resolve(callback);
			}, this);
		},
		resolve: function(callback) {
			var includes = this.includes,
				length = includes == null
					? 0
					: includes.length
					;
	
			if (length > 0 && this.response == null){
				this.response = {};
	
				var resource,
					route;
	
				for(var i = 0, x; i < length; i++){
					x = includes[i];
					resource = x.resource;
					route = x.route;
	
					if (typeof resource.exports === 'undefined'){
						continue;
					}
	
					var type = resource.type;
					switch (type) {
					case 'js':
					case 'load':
					case 'ajax':
	
						var alias = route.alias || Routes.parseAlias(route),
							obj = type === 'js'
								? this.response :
								(this.response[type] || (this.response[type] = {}))
								;
	
						if (alias) {
							obj[alias] = resource.exports;
							break;
						}
						
						console.warn('Resource Alias is Not defined', resource);
						break;
					}
	
				}
			} 
			
			var response = this.response || emptyResponse;
			
			if (this._use) 
				return callback.apply(null, [response].concat(this._use));
			
			callback(response);
		}
	};
	
	// end:source ../src/4.IncludeDeferred.js 
	// source ../src/5.Include.js 
	var Include = (function(IncludeDeferred) {
	
		function Include() {
			IncludeDeferred.call(this);
		}
	
		stub_release(Include.prototype);
		
		obj_inherit(Include, IncludeDeferred, {
			
			isBrowser: true,
			isNode: false,
			
			setCurrent: function(data) {
	
				var resource = new Resource('js', {
					path: data.id
				}, data.namespace, null, null, data.id);
	
				if (resource.state < 3) {
					console.error("<include> Resource should be loaded", data);
				}
	
				/**@TODO - probably state shoulb be changed to 2 at this place */
				resource.state = 3;
				global.include = resource;
	
			},
			
			cfg: function(arg) {
				switch (typeof arg) {
				case 'object':
					var key, value;
					for (key in arg) {
						value = arg[key];
	
						switch(key){
							case 'loader':
								for(var x in value){
									CustomLoader.register(x, value[x]);
								}
								break;
							case 'modules':
								if (value === true){
									enableModules();
								}
								break;
							default:
								cfg[key] = value;
								break;
						}
	
					}
					break;
				case 'string':
					if (arguments.length === 1) {
						return cfg[arg];
					}
					if (arguments.length === 2) {
						cfg[arg] = arguments[1];
					}
					break;
				case 'undefined':
					return cfg;
				}
				return this;
			},
			routes: function(mix) {
				if (mix == null) {
					return Routes.getRoutes();
				}
				
				if (arguments.length === 2) {
					Routes.register(mix, arguments[1]);
					return this;
				}
				
				for (var key in mix) {
					Routes.register(key, mix[key]);
				}
				return this;
			},
			promise: function(namespace) {
				var arr = namespace.split('.'),
					obj = global;
				while (arr.length) {
					var key = arr.shift();
					obj = obj[key] || (obj[key] = {});
				}
				return obj;
			},
			register: function(_bin) {
				
				var key,
					info,
					infos,
					imax,
					i;
				
				for (key in _bin) {
					infos = _bin[key];
					imax = infos.length;
					i = -1;
					
					while ( ++i < imax ) {
						
						info = infos[i];
						
						var id = info.id,
							url = info.url,
							namespace = info.namespace,
							parent = info.parent && incl_getResource(info.parent, 'js'),
							resource = new Resource(),
							state = info.state
							;
						if (! (id || url)) 
							continue;
						
						if (url) {
							if (url[0] === '/') {
								url = url.substring(1);
							}
							resource.location = path_getDir(url);
						}
						
						
						resource.state = state == null
							? (key === 'js' ? 3 : 4)
							: state
							;
						resource.namespace = namespace;
						resource.type = key;
						resource.url = url || id;
						resource.parent = parent;
	
						switch (key) {
						case 'load':
						case 'lazy':
							var container = document.querySelector('#includejs-' + id.replace(/\W/g, ''));
							if (container == null) {
								console.error('"%s" Data was not embedded into html', id);
								break;
							}
							resource.exports = container.innerHTML;
							if (CustomLoader.exists(resource)){
								
								resource.state = 3;
								CustomLoader.load(resource, function(resource, response){
									
									resource.exports = response;
									resource.readystatechanged(4);
								});
							}
							break;
						}
						
						//
						(bin[key] || (bin[key] = {}))[id] = resource;
					}
				}
			},
			/**
			 *	Create new Resource Instance,
			 *	as sometimes it is necessary to call include. on new empty context
			 */
			instance: function(url) {
				var resource;
				if (url == null) {
					resource = new Include();
					resource.state = 4;
					
					return resource;
				}
				
				resource = new Resource();
				resource.state = 4;
				resource.location = path_getDir(url);
				
				return resource;
			},
	
			getResource: incl_getResource,
			getResources: function(){
				return bin;
			},
	
			plugin: function(pckg, callback) {
	
				var urls = [],
					length = 0,
					j = 0,
					i = 0,
					onload = function(url, response) {
						j++;
	
						embedPlugin(response);
	
						if (j === length - 1 && callback) {
							callback();
							callback = null;
						}
					};
				Routes.each('', pckg, function(namespace, route) {
					urls.push(route.path[0] === '/' ? route.path.substring(1) : route.path);
				});
	
				length = urls.length;
	
				for (; i < length; i++) {
					XHR(urls[i], onload);
				}
				return this;
			},
			
			client: function(){
				if (cfg.server === true) 
					stub_freeze(this);
				
				return this;
			},
			
			server: function(){
				if (cfg.server !== true) 
					stub_freeze(this);
				
				return this;
			},
			
			use: function(){
				if (this.parent == null) {
					console.error('<include.use> Parent resource is undefined');
					return this;
				}
				
				this._use = tree_resolveUsage(this, arguments);
				
				return this;
			},
			
			pauseStack: fn_proxy(ScriptStack.pause, ScriptStack),
			resumeStack: fn_proxy(ScriptStack.resume, ScriptStack),
			
			allDone: function(callback){
				ScriptStack.complete(function(){
					
					var pending = include.getPending('js'),
						await = pending.length;
					if (await === 0) {
						callback();
						return;
					}
					
					var i = -1,
						imax = await;
					while( ++i < imax ){
						pending[i].on(4, check);
					}
					
					function check() {
						if (--await < 1) 
							callback();
					}
				});
			},
			
			getPending: function(type){
				var resources = [],
					res, key, id;
				
				for(key in bin){
					if (type != null && type != key) 
						continue;
					
					for (id in bin[key]){
						res = bin[key][id];
						if (res.state < 4)
							resources.push(res);
					}
				}
				
				return resources;
			}
		});
		
		
		return Include;
	
		
		// >> FUNCTIONS
		
		function incl_getResource(url, type) {
			var id = url;
			
			if (url.charCodeAt(0) !== 47) {
				// /
				id = '/' + id;
			}
	
			if (type != null){
				return bin[type][id];
			}
	
			for (var key in bin) {
				if (bin[key].hasOwnProperty(id)) {
					return bin[key][id];
				}
			}
			return null;
		}
		
		
		function embedPlugin(source) {
			eval(source);
		}
		
		function enableModules() {
			if (typeof Object.defineProperty === 'undefined'){
				console.warn('Browser do not support Object.defineProperty');
				return;
			}
			Object.defineProperty(global, 'module', {
				get: function() {
					return global.include;
				}
			});
	
			Object.defineProperty(global, 'exports', {
				get: function() {
					var current = global.include;
					return (current.exports || (current.exports = {}));
				},
				set: function(exports) {
					global.include.exports = exports;
				}
			});
		}
		
		function includePackage(resource, type, mix){
			var pckg = mix.length === 1 ? mix[0] : __array_slice.call(mix);
			
			if (resource instanceof Resource) {
				return resource.include(type, pckg);
			}
			return new Resource('js').include(type, pckg);
		}
		
		function createIncluder(type) {
			return function(){
				return includePackage(this, type, arguments);
			};
		}
		
		function doNothing() {
			return this;
		}
		
		function stub_freeze(include) {
			include.js =
			include.css =
			include.load =
			include.ajax =
			include.embed =
			include.lazy =
			include.inject =
				doNothing;
		}
		
		function stub_release(proto) {
			var fns = ['js', 'css', 'load', 'ajax', 'embed', 'lazy'],
				i = fns.length;
			while (--i !== -1){
				proto[fns[i]] = createIncluder(fns[i]);
			}
			
			proto['inject'] = proto.js;
		}
		
	}(IncludeDeferred));
	
	// end:source ../src/5.Include.js 
	// source ../src/7.CustomLoader.js
	var CustomLoader = (function() {
	
		// source loader/json.js
			
		var JSONParser = {
			process: function(source, res){
				try {
					return JSON.parse(source);
				} catch(error) {
					console.error(error, source);
					return null;
				}
			}
		};
		
		
		// end:source loader/json.js
	
		cfg.loader = {
			json : JSONParser
		};
		
		function loader_isInstance(x) {
			if (typeof x === 'string')
				return false;
			
			return typeof x.ready === 'function' || typeof x.process === 'function';
		}
		
		function createLoader(url) {
			var extension = path_getExtension(url),
				loader = cfg.loader[extension];
	
			if (loader_isInstance(loader)) {
				return loader;
			}
	
			var path = loader,
				namespace;
	
			if (typeof path === 'object') {
				// is route {namespace: path}
				for (var key in path) {
					namespace = key;
					path = path[key];
					break;
				}
			}
	
			return (cfg.loader[extension] = new Resource(
				'js',
				Routes.resolve(namespace, path),
				namespace,
				null,
				null,
				null,
				1
			));
		}
		
		function loader_completeDelegate(callback, resource) {
			return function(response){
				callback(resource, response);
			};
		}
		
		function loader_process(source, resource, loader, callback) {
			if (loader.process == null) {
				callback(resource, source);
				return;
			}
			
			var delegate = loader_completeDelegate(callback, resource),
				syncResponse = loader.process(source, resource, delegate);
			
			// match also null
			if (typeof syncResponse !== 'undefined') {
				callback(resource, syncResponse);
			}
		}
		
		function tryLoad(resource, loader, callback) {
			if (typeof resource.exports === 'string') {
				loader_process(resource.exports, resource, loader, callback);
				return;
			}
			
			function onLoad(resource, response){
				loader_process(response, resource, loader, callback);
			}
			
			if (loader.load) 
				return loader.load(resource, onLoad);
			
			XHR(resource, onLoad);
		}
	
		return {
			load: function(resource, callback) {
	
				var loader = createLoader(resource.url);
				
				if (loader.process) {
					tryLoad(resource, loader, callback);
					return;
				}
				
				loader.on(4, function() {
					tryLoad(resource, loader.exports, callback);
				}, null, 'push');
			},
			exists: function(resource) {
				if (!resource.url) {
					return false;
				}
	
				var ext = path_getExtension(resource.url);
	
				return cfg.loader.hasOwnProperty(ext);
			},
			
			/**
			 *	IHandler:
			 *	{ process: function(content) { return _handler(content); }; }
			 *
			 *	Url:
			 *	 path to IHandler
			 */
			register: function(extension, handler){
				if (typeof handler === 'string'){
					var resource = include;
					if (resource.location == null) { 
						resource = {
							location: path_getDir(path_resolveCurrent())
						};
					}
	
					handler = path_resolveUrl(handler, resource);
				}
	
				cfg.loader[extension] = handler;
			}
		};
	}());
	
	// end:source ../src/7.CustomLoader.js
	// source ../src/8.LazyModule.js
	var LazyModule = {
		create: function(xpath, code) {
			var arr = xpath.split('.'),
				obj = global,
				module = arr[arr.length - 1];
			while (arr.length > 1) {
				var prop = arr.shift();
				obj = obj[prop] || (obj[prop] = {});
			}
			arr = null;
	
			Object.defineProperty(obj, module, {
				get: function() {
	
					delete obj[module];
					try {
						var r = __eval(code, global.include);
						if (!(r == null || r instanceof Resource)){
							obj[module] = r;
						}
					} catch (error) {
						error.xpath = xpath;
						Helper.reportError(error);
					} finally {
						code = null;
						xpath = null;
						return obj[module];
					}
				}
			});
		}
	};
	// end:source ../src/8.LazyModule.js
	// source ../src/9.Resource.js
	var Resource = (function(Include, Routes, ScriptStack, CustomLoader) {
	
		function process(resource) {
			var type = resource.type,
				parent = resource.parent,
				url = resource.url;
				
			if (document == null && type === 'css') {
				resource.state = 4;
				
				return resource;
			}
	
			if (CustomLoader.exists(resource) === false) {
				switch (type) {
					case 'js':
					case 'embed':
						ScriptStack.load(resource, parent, type === 'embed');
						break;
					case 'ajax':
					case 'load':
					case 'lazy':
						XHR(resource, onXHRCompleted);
						break;
					case 'css':
						resource.state = 4;
	
						var tag = document.createElement('link');
						tag.href = url;
						tag.rel = "stylesheet";
						tag.type = "text/css";
						document.getElementsByTagName('head')[0].appendChild(tag);
						break;
				}
			} else {
				
				if ('js' === type || 'embed' === type) {
					ScriptStack.add(resource, resource.parent);
				}
				
				CustomLoader.load(resource, onXHRCompleted);
			}
	
			return resource;
		}
	
		function onXHRCompleted(resource, response) {
			if (!response) {
				console.warn('Resource cannt be loaded', resource.url);
				//- resource.readystatechanged(4);
				//- return;
			}
	
			switch (resource.type) {
				case 'js':
				case 'embed':
					resource.source = response;
					resource.state = 2;
					ScriptStack.touch();
					return;
				case 'load':
				case 'ajax':
					resource.exports = response;
					break;
				case 'lazy':
					LazyModule.create(resource.xpath, response);
					break;
				case 'css':
					var tag = document.createElement('style');
					tag.type = "text/css";
					tag.innerHTML = response;
					document.getElementsByTagName('head')[0].appendChild(tag);
					break;
			}
	
			resource.readystatechanged(4);
		}
	
		var Resource = function(type, route, namespace, xpath, parent, id, priority) {
			Include.call(this);
			
			this.childLoaded = fn_proxy(this.childLoaded, this);
	
			var url = route && route.path;
	
			if (url != null) {
				this.url = url = path_resolveUrl(url, parent);
			}
	
			
			this.type = type;
			this.xpath = xpath;
			this.route = route;
			this.parent = parent;
			this.priority = priority;
			this.namespace = namespace;
	
			if (id == null && url) {
				id = (url[0] === '/' ? '' : '/') + url;
			}
	
	
			var resource = bin[type] && bin[type][id];
			if (resource) {
	
				if (resource.state < 4 && type === 'js') {
					ScriptStack.moveToParent(resource, parent);
				}
	
				return resource;
			}
	
			if (url == null) {
				this.state = 3;
				this.location = path_getDir(path_resolveCurrent());
				return this;
			}
	
			this.state = 0;
			this.location = path_getDir(url);
	
	
	
			(bin[type] || (bin[type] = {}))[id] = this;
	
			if (cfg.version) {
				this.url += (this.url.indexOf('?') === -1 ? '?' : '&') + 'v=' + cfg.version;
			}
	
			return process(this);
	
		};
	
		Resource.prototype = obj_inherit(Resource, Include, {
			childLoaded: function(child) {
				var resource = this,
					includes = resource.includes;
				if (includes && includes.length) {
					if (resource.state < 3) {
						// resource still loading/include is in process, but one of sub resources are already done
						return;
					}
					for (var i = 0; i < includes.length; i++) {
						if (includes[i].resource.state !== 4) {
							return;
						}
					}
				}
				resource.readystatechanged(4);
			},
			create: function(type, route, namespace, xpath, id) {
				var resource;
	
				this.state = this.state >= 3 ? 3 : 2;
				this.response = null;
	
				if (this.includes == null) {
					this.includes = [];
				}
	
				resource = new Resource(type, route, namespace, xpath, this, id);
	
				this.includes.push({
					resource: resource,
					route: route
				});
	
				return resource;
			},
			include: function(type, pckg) {
				var that = this;
				Routes.each(type, pckg, function(namespace, route, xpath) {
	
					if (that.route != null && that.route.path === route.path) {
						// loading itself
						return;
					}
					
					that
						.create(type, route, namespace, xpath)
						.on(4, that.childLoaded);
	
				});
	
				return this;
			},
			
			pause: function(){
				this.state = 2.5;
				
				var that = this;
				return function(){
					
					that.readystatechanged(3);
				};
			},
			
			getNestedOfType: function(type){
				return resource_getChildren(this.includes, type);
			}
		});
	
		return Resource;
	
		
		function resource_getChildren(includes, type, out) {
			if (includes == null) {
				return null;
			}
			
			if (out == null) {
				out = [];
			}
			
			for (var i = 0, x, imax = includes.length; i < imax; i++){
				x = includes[i].resource;
				
				if (type === x.type) {
					out.push(x);
				}
				
				if (x.includes != null) {
					resource_getChildren(x.includes, type, out);
				}
			}
			
			return out;
		}
		
	}(Include, Routes, ScriptStack, CustomLoader));
	// end:source ../src/9.Resource.js
	
	// source ../src/10.export.js
	
	exports.include = new Include();
	
	exports.includeLib = {
		Routes: RoutesLib,
		Resource: Resource,
		ScriptStack: ScriptStack,
		registerLoader: CustomLoader.register
	};
	// end:source ../src/10.export.js
}));

// source ../src/global-vars.js

function __eval(source, include) {
	"use strict";
	
	var iparams = include && include.route.params;

	/* if !DEBUG
	try {
	*/
		return eval.call(window, source);
	
	/* if !DEBUG
	} catch (error) {
		error.url = include && include.url;
		//Helper.reportError(error);
		console.error(error);
	}
	*/
	
}
// end:source ../src/global-vars.js
// end:source ../.reference/atma/include/lib/include.js
// source ../.reference/atma/ruqq/lib/dom/jquery.js
/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m=a.document,n="2.1.0",o=function(a,b){return new o.fn.init(a,b)},p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};o.fn=o.prototype={jquery:n,constructor:o,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=o.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return o.each(this,a,b)},map:function(a){return this.pushStack(o.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},o.extend=o.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||o.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(o.isPlainObject(d)||(e=o.isArray(d)))?(e?(e=!1,f=c&&o.isArray(c)?c:[]):f=c&&o.isPlainObject(c)?c:{},g[b]=o.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},o.extend({expando:"jQuery"+(n+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===o.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isPlainObject:function(a){if("object"!==o.type(a)||a.nodeType||o.isWindow(a))return!1;try{if(a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=o.trim(a),a&&(1===a.indexOf("use strict")?(b=m.createElement("script"),b.text=a,m.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":k.call(a)},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?o.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),o.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||o.guid++,f):void 0},now:Date.now,support:l}),o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=o.type(a);return"function"===c||o.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);o.find=t,o.expr=t.selectors,o.expr[":"]=o.expr.pseudos,o.unique=t.uniqueSort,o.text=t.getText,o.isXMLDoc=t.isXML,o.contains=t.contains;var u=o.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(o.isFunction(b))return o.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return o.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return o.filter(b,a,c);b=o.filter(b,a)}return o.grep(a,function(a){return g.call(b,a)>=0!==c})}o.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?o.find.matchesSelector(d,a)?[d]:[]:o.find.matches(a,o.grep(b,function(a){return 1===a.nodeType}))},o.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(o(a).filter(function(){for(b=0;c>b;b++)if(o.contains(e[b],this))return!0}));for(b=0;c>b;b++)o.find(a,e[b],d);return d=this.pushStack(c>1?o.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?o(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=o.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof o?b[0]:b,o.merge(this,o.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:m,!0)),v.test(c[1])&&o.isPlainObject(b))for(c in b)o.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=m.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=m,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):o.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(o):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),o.makeArray(a,this))};A.prototype=o.fn,y=o(m);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};o.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&o(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),o.fn.extend({has:function(a){var b=o(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(o.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?o(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&o.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?o.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(o(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(o.unique(o.merge(this.get(),o(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}o.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return o.dir(a,"parentNode")},parentsUntil:function(a,b,c){return o.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return o.dir(a,"nextSibling")},prevAll:function(a){return o.dir(a,"previousSibling")},nextUntil:function(a,b,c){return o.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return o.dir(a,"previousSibling",c)},siblings:function(a){return o.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return o.sibling(a.firstChild)},contents:function(a){return a.contentDocument||o.merge([],a.childNodes)}},function(a,b){o.fn[a]=function(c,d){var e=o.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=o.filter(d,e)),this.length>1&&(C[a]||o.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return o.each(a.match(E)||[],function(a,c){b[c]=!0}),b}o.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):o.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){o.each(b,function(b,c){var d=o.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&o.each(arguments,function(a,b){var c;while((c=o.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?o.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},o.extend({Deferred:function(a){var b=[["resolve","done",o.Callbacks("once memory"),"resolved"],["reject","fail",o.Callbacks("once memory"),"rejected"],["notify","progress",o.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return o.Deferred(function(c){o.each(b,function(b,f){var g=o.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&o.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?o.extend(a,d):d}},e={};return d.pipe=d.then,o.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&o.isFunction(a.promise)?e:0,g=1===f?a:o.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&o.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;o.fn.ready=function(a){return o.ready.promise().done(a),this},o.extend({isReady:!1,readyWait:1,holdReady:function(a){a?o.readyWait++:o.ready(!0)},ready:function(a){(a===!0?--o.readyWait:o.isReady)||(o.isReady=!0,a!==!0&&--o.readyWait>0||(H.resolveWith(m,[o]),o.fn.trigger&&o(m).trigger("ready").off("ready")))}});function I(){m.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),o.ready()}o.ready.promise=function(b){return H||(H=o.Deferred(),"complete"===m.readyState?setTimeout(o.ready):(m.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},o.ready.promise();var J=o.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===o.type(c)){e=!0;for(h in c)o.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,o.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(o(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};o.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=o.expando+Math.random()}K.uid=1,K.accepts=o.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,o.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(o.isEmptyObject(f))o.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,o.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{o.isArray(b)?d=b.concat(b.map(o.camelCase)):(e=o.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!o.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?o.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}o.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),o.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;
while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=o.camelCase(d.slice(5)),P(f,d,e[d]));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=o.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),o.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||o.isArray(c)?d=L.access(a,b,o.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=o.queue(a,b),d=c.length,e=c.shift(),f=o._queueHooks(a,b),g=function(){o.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:o.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),o.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?o.queue(this[0],a):void 0===b?this:this.each(function(){var c=o.queue(this,a,b);o._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&o.dequeue(this,a)})},dequeue:function(a){return this.each(function(){o.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=o.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===o.css(a,"display")||!o.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=m.createDocumentFragment(),b=a.appendChild(m.createElement("div"));b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";l.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return m.activeElement}catch(a){}}o.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=o.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof o!==U&&o.event.triggered!==b.type?o.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n&&(l=o.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=o.event.special[n]||{},k=o.extend({type:n,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&o.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),o.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n){l=o.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||o.removeEvent(a,n,r.handle),delete i[n])}else for(n in i)o.event.remove(a,n+b[j],c,d,!0);o.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,p=[d||m],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||m,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+o.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[o.expando]?b:new o.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:o.makeArray(c,[b]),n=o.event.special[q]||{},e||!n.trigger||n.trigger.apply(d,c)!==!1)){if(!e&&!n.noBubble&&!o.isWindow(d)){for(i=n.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||m)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:n.bindType||q,l=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),l&&l.apply(g,c),l=k&&g[k],l&&l.apply&&o.acceptData(g)&&(b.result=l.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||n._default&&n._default.apply(p.pop(),c)!==!1||!o.acceptData(d)||k&&o.isFunction(d[q])&&!o.isWindow(d)&&(h=d[k],h&&(d[k]=null),o.event.triggered=q,d[q](),o.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=o.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=o.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=o.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((o.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?o(e,this).index(i)>=0:o.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||m,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[o.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new o.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=m),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&o.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return o.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=o.extend(new o.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?o.event.trigger(e,null,b):o.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},o.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},o.Event=function(a,b){return this instanceof o.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?Z:$):this.type=a,b&&o.extend(this,b),this.timeStamp=a&&a.timeStamp||o.now(),void(this[o.expando]=!0)):new o.Event(a,b)},o.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z,this.stopPropagation()}},o.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){o.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!o.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.focusinBubbles||o.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){o.event.simulate(b,a.target,o.event.fix(a),!0)};o.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),o.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return o().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=o.guid++)),this.each(function(){o.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,o(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){o.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){o.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?o.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return o.nodeName(a,"table")&&o.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)o.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=o.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&o.nodeName(a,b)?o.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}o.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=o.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||o.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===o.type(e))o.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;o.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===o.inArray(e,d))&&(i=o.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f,g,h=o.event.special,i=0;void 0!==(c=a[i]);i++){if(o.acceptData(c)&&(f=c[L.expando],f&&(b=L.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?o.event.remove(c,e):o.removeEvent(c,e,b.handle);L.cache[f]&&delete L.cache[f]}delete M.cache[c[M.expando]]}}}),o.fn.extend({text:function(a){return J(this,function(a){return void 0===a?o.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?o.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||o.cleanData(ob(c)),c.parentNode&&(b&&o.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(o.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return o.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(o.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,o.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,n=k-1,p=a[0],q=o.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(c=o.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=o.map(ob(c,"script"),kb),g=f.length;k>j;j++)h=c,j!==n&&(h=o.clone(h,!0,!0),g&&o.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,o.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&o.contains(i,h)&&(h.src?o._evalUrl&&o._evalUrl(h.src):o.globalEval(h.textContent.replace(hb,"")))}return this}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){o.fn[a]=function(a){for(var c,d=[],e=o(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),o(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d=o(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:o.css(d[0],"display");return d.detach(),e}function tb(a){var b=m,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||o.contains(a.ownerDocument,a)||(g=o.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e=m.documentElement,f=m.createElement("div"),g=m.createElement("div");g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",f.appendChild(g);function h(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",e.appendChild(f);var d=a.getComputedStyle(g,null);b="1%"!==d.top,c="4px"===d.width,e.removeChild(f)}a.getComputedStyle&&o.extend(l,{pixelPosition:function(){return h(),b},boxSizingReliable:function(){return null==c&&h(),c},reliableMarginRight:function(){var b,c=g.appendChild(m.createElement("div"));return c.style.cssText=g.style.cssText=d,c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.innerHTML="",b}})}(),o.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:0,fontWeight:400},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=o.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=o.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=o.css(a,"border"+R[f]+"Width",!0,e))):(g+=o.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=o.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===o.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):f[g]||(e=S(d),(c&&"none"!==c||!e)&&L.set(d,"olddisplay",e?c:o.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}o.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=o.camelCase(b),i=a.style;return b=o.cssProps[h]||(o.cssProps[h]=Fb(i,h)),g=o.cssHooks[b]||o.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(o.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||o.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=o.camelCase(b);return b=o.cssProps[h]||(o.cssProps[h]=Fb(a.style,h)),g=o.cssHooks[b]||o.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||o.isNumeric(f)?f||0:e):e}}),o.each(["height","width"],function(a,b){o.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&zb.test(o.css(a,"display"))?o.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===o.css(a,"boxSizing",!1,e),e):0)}}}),o.cssHooks.marginRight=yb(l.reliableMarginRight,function(a,b){return b?o.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),o.each({margin:"",padding:"",border:"Width"},function(a,b){o.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(o.cssHooks[a+b].set=Gb)}),o.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(o.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=o.css(a,b[g],!1,d);return f}return void 0!==c?o.style(a,b,c):o.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?o(this).show():o(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}o.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(o.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?o.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=o.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){o.fx.step[a.prop]?o.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[o.cssProps[a.prop]]||o.cssHooks[a.prop])?o.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},o.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},o.fx=Kb.prototype.init,o.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(o.cssNumber[a]?"":"px"),g=(o.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(o.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,o.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=o.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&S(a),p=L.get(a,"fxshow");c.queue||(h=o._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,o.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=o.css(a,"display"),"none"===j&&(j=tb(a.nodeName)),"inline"===j&&"none"===o.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;n=!0}l[d]=p&&p[d]||o.style(a,d)}if(!o.isEmptyObject(l)){p?"hidden"in p&&(n=p.hidden):p=L.access(a,"fxshow",{}),f&&(p.hidden=!n),n?o(a).show():k.done(function(){o(a).hide()}),k.done(function(){var b;L.remove(a,"fxshow");for(b in l)o.style(a,b,l[b])});for(d in l)g=Ub(n?p[d]:0,d,k),d in p||(p[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=o.camelCase(c),e=b[d],f=a[c],o.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=o.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=o.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:o.extend({},b),opts:o.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=o.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return o.map(k,Ub,j),o.isFunction(j.opts.start)&&j.opts.start.call(a,j),o.fx.timer(o.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}o.Animation=o.extend(Xb,{tweener:function(a,b){o.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),o.speed=function(a,b,c){var d=a&&"object"==typeof a?o.extend({},a):{complete:c||!c&&b||o.isFunction(a)&&a,duration:a,easing:c&&b||b&&!o.isFunction(b)&&b};return d.duration=o.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in o.fx.speeds?o.fx.speeds[d.duration]:o.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){o.isFunction(d.old)&&d.old.call(this),d.queue&&o.dequeue(this,d.queue)},d},o.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=o.isEmptyObject(a),f=o.speed(b,c,d),g=function(){var b=Xb(this,o.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=o.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&o.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=o.timers,g=d?d.length:0;for(c.finish=!0,o.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),o.each(["toggle","show","hide"],function(a,b){var c=o.fn[b];o.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),o.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){o.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),o.timers=[],o.fx.tick=function(){var a,b=0,c=o.timers;for(Lb=o.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||o.fx.stop(),Lb=void 0},o.fx.timer=function(a){o.timers.push(a),a()?o.fx.start():o.timers.pop()},o.fx.interval=13,o.fx.start=function(){Mb||(Mb=setInterval(o.fx.tick,o.fx.interval))},o.fx.stop=function(){clearInterval(Mb),Mb=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(a,b){return a=o.fx?o.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=m.createElement("input"),b=m.createElement("select"),c=b.appendChild(m.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=m.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var Yb,Zb,$b=o.expr.attrHandle;o.fn.extend({attr:function(a,b){return J(this,o.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){o.removeAttr(this,a)})}}),o.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?o.prop(a,b,c):(1===f&&o.isXMLDoc(a)||(b=b.toLowerCase(),d=o.attrHooks[b]||(o.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=o.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void o.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=o.propFix[c]||c,o.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&o.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?o.removeAttr(a,c):a.setAttribute(c,c),c}},o.each(o.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||o.find.attr;$b[b]=function(a,b,d){var e,f;
return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;o.fn.extend({prop:function(a,b){return J(this,o.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[o.propFix[a]||a]})}}),o.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!o.isXMLDoc(a),f&&(b=o.propFix[b]||b,e=o.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),l.optSelected||(o.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;o.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=o.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?o.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(o.isFunction(a)?function(c){o(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=o(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;o.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=o.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,o(this).val()):a,null==e?e="":"number"==typeof e?e+="":o.isArray(e)&&(e=o.map(e,function(a){return null==a?"":a+""})),b=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=o.valHooks[e.type]||o.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),o.extend({valHooks:{select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&o.nodeName(c.parentNode,"optgroup"))){if(b=o(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=o.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=o.inArray(o(d).val(),f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(a,b){return o.isArray(b)?a.checked=o.inArray(o(a).val(),b)>=0:void 0}},l.checkOn||(o.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){o.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),o.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=o.now(),dc=/\?/;o.parseJSON=function(a){return JSON.parse(a+"")},o.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&o.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=m.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(o.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,o.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=o.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&o.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":o.parseJSON,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,o.ajaxSettings),b):tc(o.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=o.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?o(l):o.event,n=o.Deferred(),p=o.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(n.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=o.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=o.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===o.active++&&o.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(o.lastModified[d]&&v.setRequestHeader("If-Modified-Since",o.lastModified[d]),o.etag[d]&&v.setRequestHeader("If-None-Match",o.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(o.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(o.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?n.resolveWith(l,[r,x,v]):n.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--o.active||o.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return o.get(a,b,c,"json")},getScript:function(a,b){return o.get(a,void 0,b,"script")}}),o.each(["get","post"],function(a,b){o[b]=function(a,c,d,e){return o.isFunction(c)&&(e=e||d,d=c,c=void 0),o.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){o.fn[b]=function(a){return this.on(b,a)}}),o._evalUrl=function(a){return o.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},o.fn.extend({wrapAll:function(a){var b;return o.isFunction(a)?this.each(function(b){o(this).wrapAll(a.call(this,b))}):(this[0]&&(b=o(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(o.isFunction(a)?function(b){o(this).wrapInner(a.call(this,b))}:function(){var b=o(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=o.isFunction(a);return this.each(function(c){o(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){o.nodeName(this,"body")||o(this).replaceWith(this.childNodes)}).end()}}),o.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},o.expr.filters.visible=function(a){return!o.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(o.isArray(b))o.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==o.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}o.param=function(a,b){var c,d=[],e=function(a,b){b=o.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=o.ajaxSettings&&o.ajaxSettings.traditional),o.isArray(a)||a.jquery&&!o.isPlainObject(a))o.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=o.prop(this,"elements");return a?o.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!o(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=o(this).val();return null==c?null:o.isArray(c)?o.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),o.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=o.ajaxSettings.xhr();a.ActiveXObject&&o(a).on("unload",function(){for(var a in Dc)Dc[a]()}),l.cors=!!Fc&&"withCredentials"in Fc,l.ajax=Fc=!!Fc,o.ajaxTransport(function(a){var b;return l.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort"),f.send(a.hasContent&&a.data||null)},abort:function(){b&&b()}}:void 0}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return o.globalEval(a),a}}}),o.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),o.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=o("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),m.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||o.expando+"_"+cc++;return this[a]=!0,a}}),o.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=o.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||o.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&o.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||m;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=o.buildFragment([a],b,e),e&&e.length&&o(e).remove(),o.merge([],d.childNodes))};var Ic=o.fn.load;o.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h),a=a.slice(0,h)),o.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&o.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?o("<div>").append(o.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},o.expr.filters.animated=function(a){return o.grep(o.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return o.isWindow(a)?a:9===a.nodeType&&a.defaultView}o.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=o.css(a,"position"),l=o(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=o.css(a,"top"),i=o.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),o.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},o.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){o.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,o.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===o.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),o.nodeName(a[0],"html")||(d=a.offset()),d.top+=o.css(a[0],"borderTopWidth",!0),d.left+=o.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-o.css(c,"marginTop",!0),left:b.left-d.left-o.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!o.nodeName(a,"html")&&"static"===o.css(a,"position"))a=a.offsetParent;return a||Jc})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;o.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),o.each(["top","left"],function(a,b){o.cssHooks[b]=yb(l.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?o(a).position()[b]+"px":c):void 0})}),o.each({Height:"height",Width:"width"},function(a,b){o.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){o.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return o.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?o.css(b,c,g):o.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),o.fn.size=function(){return this.length},o.fn.andSelf=o.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return o});var Lc=a.jQuery,Mc=a.$;return o.noConflict=function(b){return a.$===o&&(a.$=Mc),b&&a.jQuery===o&&(a.jQuery=Lc),o},typeof b===U&&(a.jQuery=a.$=o),o});
// end:source ../.reference/atma/ruqq/lib/dom/jquery.js
// source ../.reference/atma/mask/lib/mask.js
// source /src/license.txt
/*!
 * MaskJS v0.8.12
 * Part of the Atma.js Project
 * http://atmajs.com/
 *
 * MIT license
 * http://opensource.org/licenses/MIT
 *
 * (c) 2012, 2014 Atma.js and other contributors
 */
// end:source /src/license.txt
// source /src/umd-head.js
(function (root, factory) {
    'use strict';
    
    var _global = typeof window === 'undefined' || window.navigator == null
		? global
		: window,
		
		_exports, _document;

    
	if (typeof exports !== 'undefined' && (root == null || root === exports || root === _global)){
		// raw commonjs module
        root = exports;
    }
	
    
    _document = _global.document;
	_exports = root || _global;
    

    function construct(){

        return factory(_global, _exports, _document);
    };

    
    if (typeof define === 'function' && define.amd) {
        return define(construct);
    }
    
	// Browser OR Node
    return construct();

}(this, function (global, exports, document) {
    'use strict';

// end:source /src/umd-head.js



	// source /src/scope-vars.js
	var regexpWhitespace = /\s/g,
		regexpEscapedChar = {
			"'": /\\'/g,
			'"': /\\"/g,
			'{': /\\\{/g,
			'>': /\\>/g,
			';': /\\>/g
		},
		hasOwnProp = {}.hasOwnProperty,
		listeners = null,
		
		__cfg = {
			
			/*
			 * Relevant to node.js only, to enable compo caching
			 */
			allowCache: true
		};
		
	var _Array_slice = Array.prototype.slice;
	
	// end:source /src/scope-vars.js
    // source /src/util/is.js
    var is_Function,
        is_Array
        ;
    
    (function(){
    
        is_Function = function(x){
            return typeof x === 'function';
        };
        
        is_Array = function(x){
            return x != null
                && typeof x === 'object'
                && typeof x.length === 'number'
                && typeof x.splice === 'function'
                ;
        };
        
    }());
    
    // end:source /src/util/is.js
	// source /src/util/util.js
	
	/**
	 * - arr (Array) - array that was prepaired by parser -
	 *  every even index holds interpolate value that was in #{some value}
	 * - model: current model
	 * - type (String const) (node | attr): tell custom utils what part we are
	 *  interpolating
	 * - cntx (Object): current render context object
	 * - element (HTMLElement):
	 * type node - this is a container
	 * type attr - this is element itself
	 * - name
	 *  type attr - attribute name
	 *  type node - undefined
	 *
	 * -returns Array | String
	 *
	 * If we rendere interpolation in a TextNode, then custom util can return not only string values,
	 * but also any HTMLElement, then TextNode will be splitted and HTMLElements will be inserted within.
	 * So in that case we return array where we hold strings and that HTMLElements.
	 *
	 * If custom utils returns only strings, then String will be returned by this function
	 *
	 */
	
	function util_interpolate(arr, type, model, ctx, element, controller, name) {
		var imax = arr.length,
			i = -1,
			array = null,
			string = '',
			even = true,
			
			utility,
			value,
			index,
			key,
			handler;
	
		while ( ++i < imax ) {
			if (even === true) {
				if (array == null){
					string += arr[i];
				} else{
					array.push(arr[i]);
				}
			} else {
				key = arr[i];
				value = null;
				index = key.indexOf(':');
	
				if (index === -1) {
					value = obj_getPropertyEx(key,  model, ctx, controller);
					
				} else {
					utility = index > 0
						? str_trim(key.substring(0, index))
						: '';
						
					if (utility === '') {
						utility = 'expression';
					}
	
					key = key.substring(index + 1);
					handler = custom_Utils[utility];
					value = handler(key, model, ctx, element, controller, name, type);
				}
	
				if (value != null){
	
					if (typeof value === 'object' && array == null){
						array = [string];
					}
	
					if (array == null){
						string += value;
					} else {
						array.push(value);
					}
	
				}
			}
	
			even = !even;
		}
	
		return array == null
			? string
			: array
			;
	}
	
	// end:source /src/util/util.js
    // source /src/util/attr.js
    function attr_extend(target, source) {
        if (target == null) 
            target = {};
        
        if (source == null) 
            return target;
        
        for (var key in source) {
            
            if (key === 'class' && typeof target[key] === 'string') {
                target[key] += ' ' + source[key];
                continue;
            }
            
            target[key] = source[key];
        }
        
        return target;
    }
    // end:source /src/util/attr.js
	// source /src/util/template.js
	function Template(template) {
		this.template = template;
		this.index = 0;
		this.length = template.length;
	}
	
	Template.prototype = {
		skipWhitespace: function () {
	
			var template = this.template,
				index = this.index,
				length = this.length;
	
			for (; index < length; index++) {
				if (template.charCodeAt(index) > 32 /*' '*/) {
					break;
				}
			}
	
			this.index = index;
	
			return this;
		},
	
		skipToAttributeBreak: function () {
	
			var template = this.template,
				index = this.index,
				length = this.length,
				c;
			do {
				c = template.charCodeAt(++index);
				// if c == # && next() == { - continue */
				if (c === 35 && template.charCodeAt(index + 1) === 123) {
					// goto end of template declaration
					this.index = index;
					this.sliceToChar('}');
					this.index++;
					return;
				}
			}
			while (c !== 46 && c !== 35 && c !== 62 && c !== 123 && c !== 32 && c !== 59 && index < length);
			//while(!== ".#>{ ;");
	
			this.index = index;
		},
		sliceToChar: function (c) {
			var template = this.template,
				index = this.index,
				start = index,
				isEscaped = false,
				value, nindex;
	
			while ((nindex = template.indexOf(c, index)) > -1) {
				index = nindex;
				if (template.charCodeAt(index - 1) !== 92 /*'\\'*/) {
					break;
				}
				isEscaped = true;
				index++;
			}
	
			value = template.substring(start, index);
	
			this.index = index;
	
			return isEscaped ? value.replace(regexpEscapedChar[c], c) : value;
		}
	
	};
	
	// end:source /src/util/template.js
    
	// source /src/util/array.js
	var arr_pushMany;
	
	(function(){
		
		arr_pushMany = function(arr, arrSource){
			if (arrSource == null || arr == null) 
				return;
			
			var il = arr.length,
				jl = arrSource.length,
				j = -1
				;
			while( ++j < jl ){
				arr[il + j] = arrSource[j];
			}
		};
		
	}());
	// end:source /src/util/array.js
	// source /src/util/string.js
	function str_trim(str) {
	
		var length = str.length,
			i = 0,
			j = length - 1,
			c;
	
		for (; i < length; i++) {
			c = str.charCodeAt(i);
			if (c < 33) {
				continue;
			}
			break;
	
		}
		
		for (; j >= i; j--) {
			c = str.charCodeAt(j);
			if (c < 33) {
				continue;
			}
			break;
		}
	
		return i === 0 && j === length - 1
			? str
			: str.substring(i, j + 1);
	}
	// end:source /src/util/string.js
    // source /src/util/object.js
    var obj_extend,
        obj_getProperty,
        obj_getPropertyEx,
        obj_toDictionary
        ;
    
    
    (function(){
        obj_extend = function(target, source) {
        
            if (target == null) {
                target = {};
            }
            for (var key in source) {
    
                target[key] = source[key];
            }
            return target;
        };
        
            
        obj_getProperty = function(obj, path) {
            if (path === '.') 
                return obj;
            
            var value = obj,
                props = path.split('.'),
                i = -1,
                imax = props.length;
        
            while (value != null && ++i < imax) {
                value = value[props[i]];
            }
        
            return value;
        };
            
            
        obj_getPropertyEx = function(path, model, ctx, controller){
            if (path === '.') 
                return model;
        
            var props = path.split('.'),
                value = model,
                i = -1,
                imax = props.length,
                key = props[0],
                start_i
                ;
            
            if ('$c' === key) {
                value = controller;
                i++;
            }
            
            else if ('$a' === key) {
                value = controller && controller.attr;
                i++;
            }
            
            else if ('$u' === key) {
                value = customUtil_$utils;
                i++;
            }
            
            else if ('$ctx' === key) {
                value = ctx;
                i++;
            }
            
            start_i = i;
            while (value != null && ++i < imax) 
                value = value[props[i]];
            
            if (value == null && start_i === -1) {
                var $scope;
                while (true){
                    
                    if (controller == null) 
                        break;
                    
                    $scope = controller.scope;
                    if ($scope != null) {
                        value = getProperty($scope, props, 0, imax);
                        if (value != null) 
                            return value;
                    }
                    
                    controller = controller.parent;
                }
            }
            
            return value;
        };
        
        
        obj_toDictionary = function(obj){
            var array = [],
                i = 0,
                key
                ;
            for(key in obj){
                array[i++] = {
                    key: key,
                    value: obj[key]
                };
            }
            return array;
        };
        
        
        // = private
        
        function getProperty(obj, props, i, imax) {
            var value = obj;
            
            while(i < imax && value != null){
                value = value[props[i]];
                i++;
            }
            
            return value;
        }
    }());
    
    // end:source /src/util/object.js
	// source /src/util/function.js
	
	function fn_proxy(fn, ctx) {
	
		return function() {
			return fn_apply(fn, ctx, arguments);
		};
	}
	
	function fn_apply(fn, ctx, _arguments){
		
		switch (_arguments.length) {
			case 0:
				return fn.call(ctx);
			case 1:
				return fn.call(ctx, _arguments[0]);
			case 2:
				return fn.call(ctx,
					_arguments[0],
					_arguments[1]);
			case 3:
				return fn.call(ctx,
					_arguments[0],
					_arguments[1],
					_arguments[2]);
			case 4:
				return fn.call(ctx,
					_arguments[0],
					_arguments[1],
					_arguments[2],
					_arguments[3]);
		};
		
		return fn.apply(ctx, _arguments);
	}
	
	
	function fn_doNothing(){
		
	}
	// end:source /src/util/function.js
    
	// source /src/custom/exports.js
	var custom_Utils,
		custom_Statements,
		custom_Attributes,
		custom_Tags,
		custom_Tags_defs,
		
		customUtil_get,
		customUtil_$utils,
		customUtil_register,
		
		customTag_register
		;
		
	(function(){
		
		initialize();
		
		// source tag.js
		(function(repository){
			
			customTag_register = function(name, Handler){
				
				if (Handler != null && typeof Handler === 'object') {
					//> static
					Handler.__Ctor = wrapStatic(Handler);
				}
				
				repository[name] = Handler;
			};
			
			
			function wrapStatic(proto) {
				function Ctor(node, parent) {
					this.tagName = node.tagName;
					this.attr = node.attr;
					this.expression = node.expression;
					this.nodes = node.nodes;
					this.nextSibling = node.nextSibling;
					this.parent = parent;
					this.components = null;
				}
				
				Ctor.prototype = proto;
				
				return Ctor;
			}
			
		}(custom_Tags));
		// end:source tag.js
		// source util.js
		
		(function(repository) {
			
			customUtil_$utils = {};
		
			customUtil_register = function(name, mix) {
		
				if (is_Function(mix)) {
					repository[name] = mix;
					return;
				}
		
				repository[name] = createUtil(mix);
		
				if (mix.arguments === 'parsed')
					customUtil_$utils[name] = mix.process;
		
			};
		
			customUtil_get = function(name) {
				return name != null ? repository[name] : repository;
			};
		
			// = private
		
			function createUtil(obj) {
		
				if (obj.arguments !== 'parsed')
					return fn_proxy(obj.process || processRawFn, obj);
		
				return processParsedDelegate(obj.process);
			}
		
		
			function processRawFn(expr, model, ctx, element, controller, attrName, type) {
				if ('node' === type) {
		
					this.nodeRenderStart(expr, model, ctx, element, controller);
					return this.node(expr, model, ctx, element, controller);
				}
		
				// asume 'attr'
		
				this.attrRenderStart(expr, model, ctx, element, controller, attrName);
				return this.attr(expr, model, ctx, element, controller, attrName);
			}
		
		
			function processParsedDelegate(fn) {
		
				return function(expr, model, ctx, element, controller) {
					
					var args = ExpressionUtil
							.evalStatements(expr, model, ctx, controller);
		
					return fn.apply(null, args);
				};
			}
		
		}(custom_Utils));
		// end:source util.js
		
		function initialize() {
				
			custom_Utils = {
				expression: function(value, model, ctx, element, controller){
					return ExpressionUtil.eval(value, model, ctx, controller);
				},
			};
			
			custom_Statements = {};
			
			custom_Attributes = {
				'class': null,
				id: null,
				style: null,
				name: null,
				type: null
			};
			
			custom_Tags = {
				/*
				 * Most common html tags
				 * http://jsperf.com/not-in-vs-null/3
				 */
				div: null,
				span: null,
				input: null,
				button: null,
				textarea: null,
				select: null,
				option: null,
				h1: null,
				h2: null,
				h3: null,
				h4: null,
				h5: null,
				h6: null,
				a: null,
				p: null,
				img: null,
				table: null,
				td: null,
				tr: null,
				pre: null,
				ul: null,
				li: null,
				ol: null,
				i: null,
				b: null,
				strong: null,
				form: null
			};
			
			// use on server to define reserved tags and its meta info
			custom_Tags_defs = {};
		}
		
	}());
	
	// end:source /src/custom/exports.js
	
	// source /src/expression/exports.js
	/**
	 * ExpressionUtil
	 *
	 * Helper to work with expressions
	 **/
	
	var ExpressionUtil = (function(){
	
		// source 1.scope-vars.js
		
		var index = 0,
			length = 0,
			cache = {},
			template, ast;
		
		var op_Minus = '-', //1,
			op_Plus = '+', //2,
			op_Divide = '/', //3,
			op_Multip = '*', //4,
			op_Modulo = '%', //5,
			
			op_LogicalOr = '||', //6,
			op_LogicalAnd = '&&', //7,
			op_LogicalNot = '!', //8,
			op_LogicalEqual = '==', //9,
			op_LogicalEqual_Strict = '===', // 111
			op_LogicalNotEqual = '!=', //11,
			op_LogicalNotEqual_Strict = '!==', // 112
			op_LogicalGreater = '>', //12,
			op_LogicalGreaterEqual = '>=', //13,
			op_LogicalLess = '<', //14,
			op_LogicalLessEqual = '<=', //15,
			op_Member = '.', // 16
		
			punc_ParantheseOpen = 20,
			punc_ParantheseClose = 21,
			punc_Comma = 22,
			punc_Dot = 23,
			punc_Question = 24,
			punc_Colon = 25,
		
			go_ref = 30,
			go_string = 31,
			go_number = 32;
		
		var type_Body = 1,
			type_Statement = 2,
			type_SymbolRef = 3,
			type_FunctionRef = 4,
			type_Accessor = 5,
			type_Value = 6,
		
		
			type_Number = 7,
			type_String = 8,
			type_UnaryPrefix = 9,
			type_Ternary = 10;
		
		var state_body = 1,
			state_arguments = 2;
		
		
		var precedence = {};
		
		precedence[op_Member] = 1;
		
		precedence[op_Divide] = 2;
		precedence[op_Multip] = 2;
		
		precedence[op_Minus] = 3;
		precedence[op_Plus] = 3;
		
		precedence[op_LogicalGreater] = 4;
		precedence[op_LogicalGreaterEqual] = 4;
		precedence[op_LogicalLess] = 4;
		precedence[op_LogicalLessEqual] = 4;
		
		precedence[op_LogicalEqual] = 5;
		precedence[op_LogicalEqual_Strict] = 5;
		precedence[op_LogicalNotEqual] = 5;
		precedence[op_LogicalNotEqual_Strict] = 5;
		
		
		precedence[op_LogicalAnd] = 6;
		precedence[op_LogicalOr] = 6;
		
		// end:source 1.scope-vars.js
		// source 2.ast.js
		var Ast_Body,
			Ast_Statement,
			Ast_Value,
			Ast_FunctionRef,
			Ast_SymbolRef,
			Ast_Accessor,
			Ast_UnaryPrefix,
			Ast_TernaryStatement
			;
			
		
		(function(){
			
			Ast_Body = function(parent) {
				this.parent = parent;
				this.type = type_Body;
				this.body = [];
				this.join = null;
			};
			
			
			Ast_Statement = function(parent) {
				this.parent = parent;
			};
			Ast_Statement.prototype = {
				constructor: Ast_Statement,
				type: type_Statement,
				join: null,
				body: null
			};
			
			
			Ast_Value = function(value) {
				this.type = type_Value;
				this.body = value;
				this.join = null;
			};
			
			
			Ast_FunctionRef = function(parent, ref) {
				this.parent = parent;
				this.type = type_FunctionRef;
				this.body = ref;
				this.arguments = [];
				this.next = null;
			}
			Ast_FunctionRef.prototype = {
				constructor: Ast_FunctionRef,
				newArgument: function() {
					var body = new Ast_Body(this);
					this.arguments.push(body);
			
					return body;
				}
			};
			
			
			Ast_SymbolRef = function(parent, ref) {
				this.parent = parent;
				this.type = type_SymbolRef;
				this.body = ref;
				this.next = null;
			};
			
			Ast_Accessor = function(parent, astRef){
				this.parent = parent;
				this.body = astRef;
				this.next = null;
			};
			
			
			Ast_UnaryPrefix = function(parent, prefix) {
				this.parent = parent;
				this.prefix = prefix;
			};
			Ast_UnaryPrefix.prototype = {
				constructor: Ast_UnaryPrefix,
				type: type_UnaryPrefix,
				body: null
			};
			
			
			Ast_TernaryStatement = function(assertions){
				this.body = assertions;
				this.case1 = new Ast_Body(this);
				this.case2 = new Ast_Body(this);
			};
			Ast_TernaryStatement.prototype = {
				constructor: Ast_TernaryStatement,
				type: type_Ternary,
				case1: null,
				case2: null
			};
		
		}());
		// end:source 2.ast.js
		// source 2.ast.utils.js
		var ast_handlePrecedence,
			ast_append;
			
		(function(){
			
				
			ast_append = function(current, next) {
				if (null == current) 
					console.error('<Mask:Ast> Current undefined', next);
				
				var type = current.type;
			
				if (type_Body === type){
					current.body.push(next);
					return next;
				}
			
				if (type_Statement === type || type_UnaryPrefix === type){
					return current.body = next;
				}
			
				if (type_SymbolRef === type || type_FunctionRef === type){
					return current.next = next;
				}
			
				console.error('Unsupported - append:', current, next);
				return next;
			};
			
			
			ast_handlePrecedence = function(ast) {
				if (ast.type !== type_Body){
					
					if (ast.body != null && typeof ast.body === 'object')
						ast_handlePrecedence(ast.body);
					
					return;
				}
			
				var body = ast.body,
					i = 0,
					length = body.length,
					x, prev, array;
			
				for(; i < length; i++){
					ast_handlePrecedence(body[i]);
				}
			
			
				for(i = 1; i < length; i++){
					x = body[i];
					prev = body[i-1];
			
					if (precedence[prev.join] > precedence[x.join])
						break;
					
				}
			
				if (i === length)
					return;
				
			
				array = [body[0]];
				for(i = 1; i < length; i++){
					x = body[i];
					prev = body[i-1];
					
					var prec_Prev = precedence[prev.join];
					if (prec_Prev > precedence[x.join] && i < length - 1){
						
						var start = i,
							nextJoin,
							arr;
						
						// collect all with join smaller or equal to previous
						// 5 == 3 * 2 + 1 -> 5 == (3 * 2 + 1);
						while (++i < length){
							nextJoin = body[i].join;
							if (nextJoin == null) 
								break;
							
							if (prec_Prev <= precedence[nextJoin])
								break;
						}
						
						arr = body.slice(start, i + 1);
						x = ast_join(arr);
						ast_handlePrecedence(x);
					}
			
					array.push(x);
				}
			
				ast.body = array;
			
			};
		
			// = private
			
			function ast_join(bodyArr){
				if (bodyArr.length === 0)
					return null;
				
				var body = new Ast_Body(bodyArr[0].parent);
			
				body.join = bodyArr[bodyArr.length - 1].join;
				body.body = bodyArr;
			
				return body;
			}
		
			
		}());
		// end:source 2.ast.utils.js
		// source 3.util.js
		var _throw,
		
			util_resolveRef
			;
		
		(function(){
			
			util_resolveRef = function(astRef, model, ctx, controller) {
				var current = astRef,
					key = astRef.body,
					
					object,
					value,
					args,
					i,
					imax
					;
				
				if ('$c' === key) {
					value = controller;
					
					var next = current.next,
						nextBody = next != null && next.body;
						
					if (nextBody != null && value[nextBody] == null){
							
						if (next.type === type_FunctionRef
								&& typeof Compo.prototype[nextBody] === 'function') {
							// use fn from prototype if possible, like `closest`
							object = controller;
							value = Compo.prototype[nextBody];
							current = next;
						} else {
							// find the closest controller, which has the property
							while (true) {
								value = value.parent;
								if (value == null) 
									break;
								
								if (value[nextBody] == null) 
									continue;
								
								object = value;
								value = value[nextBody];
								current = next;
								break;
							}
						}
					}
					
				}
				
				else if ('$a' === key) 
					value = controller && controller.attr;
				
				else if ('$u' === key) 
					value = customUtil_$utils;
				
				
				else if ('$ctx' === key) 
					value = ctx;
				
				else {
					// dynamic resolver
					
					if (model != null) {
						object = model;
						value = model[key];
					}
					
					// @TODO - deprecate this for predefined accessors '$c' ...
					
					////// remove
					//////if (value == null && ctx != null) {
					//////	object = ctx;
					//////	value = ctx[key];
					//////}
				
					//////if (value == null && controller != null) {
					//////	do {
					//////		object = controller;
					//////		value = controller[key];
					//////	} while (value == null && (controller = controller.parent) != null);
					//////}
					
					if (value == null) {
						
						while (controller != null) {
							object = controller.scope;
							
							if (object != null) 
								value = object[key];
							
							if (value != null) 
								break;
							
							controller = controller.parent;
						} 
					}
				}
				
			
				if (value != null) {
					do {
						if (current.type === type_FunctionRef) {
							
							args = [];
							i = -1;
							imax = current.arguments.length;
							
							while( ++i < imax )
								args[i] = expression_evaluate(current.arguments[i], model, ctx, controller);
							
							value = value.apply(object, args);
						}
			
						if (value == null || current.next == null) 
							break;
						
			
						current = current.next;
						key = current.body;
						object = value;
						value = value[key];
			
						
						if (value == null) 
							break;
			
					} while (true);
				}
			
				if (value == null){
					if (current == null || current.next != null){
						_throw('Mask - Accessor error - ', key);
					}
				}
			
				return value;
			};
		
			
			_throw = function(message, token) {
				console.error('Expression parser:', message, token, template.substring(index));
			};
			
			
		}());
		
		
		// end:source 3.util.js
		// source 4.parser.helper.js
		function parser_skipWhitespace() {
			var c;
			while (index < length) {
				c = template.charCodeAt(index);
				if (c > 32) {
					return c;
				}
				index++;
			}
			return null;
		}
		
		
		function parser_getString(c) {
			var isEscaped = false,
				_char = c === 39 ? "'" : '"',
				start = index,
				nindex, string;
		
			while ((nindex = template.indexOf(_char, index)) > -1) {
				index = nindex;
				if (template.charCodeAt(nindex - 1) !== 92 /*'\\'*/ ) {
					break;
				}
				isEscaped = true;
				index++;
			}
		
			string = template.substring(start, index);
			if (isEscaped === true) {
				string = string.replace(regexpEscapedChar[_char], _char);
			}
			return string;
		}
		
		function parser_getNumber() {
			var start = index,
				code, isDouble;
			while (true) {
		
				code = template.charCodeAt(index);
				if (code === 46) {
					// .
					if (isDouble === true) {
						_throw('Unexpected punc');
						return null;
					}
					isDouble = true;
				}
				if ((code >= 48 && code <= 57 || code === 46) && index < length) {
					index++;
					continue;
				}
				break;
			}
		
			return +template.substring(start, index);
		}
		
		function parser_getRef() {
			var start = index,
				c = template.charCodeAt(index),
				ref;
		
			if (c === 34 || c === 39) {
				// ' | "
				index++;
				ref = parser_getString(c);
				index++;
				return ref;
			}
		
			while (true) {
				
				if (index === length) 
					break;
				
				c = template.charCodeAt(index);
				
				if (c === 36) {
					// $
					index++;
					continue;
				}
				
				if (
					c > 47 && // ()+-*,/
					c !== 58 && // :
					c !== 60 && // <
					c !== 61 && // =
					c !== 62 && // >
					c !== 63 && // ?
					c !== 124 // |
					) {
		
					index++;
					continue;
				}
		
				break;
			}
		
			return template.substring(start, index);
		}
		
		function parser_getDirective(code) {
			if (code == null && index === length) {
				return null;
			}
		
			switch (code) {
				case 40:
					// (
					return punc_ParantheseOpen;
				case 41:
					// )
					return punc_ParantheseClose;
				case 44:
					// ,
					return punc_Comma;
				case 46:
					// .
					return punc_Dot;
				case 43:
					// +
					return op_Plus;
				case 45:
					// -
					return op_Minus;
				case 42:
					// *
					return op_Multip;
				case 47:
					// /
					return op_Divide;
				case 37:
					// %
					return op_Modulo;
		
				case 61:
					// =
					if (template.charCodeAt(++index) !== code) {
						_throw('Not supported (Apply directive) - view can only access model/controllers');
						return null;
					}
					
					if (template.charCodeAt(index + 1) === code) {
						index++;
						return op_LogicalEqual_Strict;
					}
					
					return op_LogicalEqual;
		
				case 33:
					// !
					if (template.charCodeAt(index + 1) === 61) {
						// =
						index++;
						
						if (template.charCodeAt(index + 1) === 61) {
							// =
							index++;
							return op_LogicalNotEqual_Strict;
						}
						
						return op_LogicalNotEqual;
					}
					return op_LogicalNot;
		
				case 62:
					// >
					if (template.charCodeAt(index + 1) === 61) {
						index++;
						return op_LogicalGreaterEqual;
					}
					return op_LogicalGreater;
		
				case 60:
					// <
					if (template.charCodeAt(index + 1) === 61) {
						index++;
						return op_LogicalLessEqual;
					}
					return op_LogicalLess;
		
				case 38:
					// &
					if (template.charCodeAt(++index) !== code) {
						_throw('Single Binary Operator AND');
						return null;
					}
					return op_LogicalAnd;
		
				case 124:
					// |
					if (template.charCodeAt(++index) !== code) {
						_throw('Single Binary Operator OR');
						return null;
					}
					return op_LogicalOr;
				
				case 63:
					// ?
					return punc_Question;
		
				case 58:
					// :
					return punc_Colon;
		
			}
		
			if ((code >= 65 && code <= 90) || code >= 97 && code <= 122 || code === 95 || code === 36) {
				// A-Z a-z _ $
				return go_ref;
			}
		
			if (code >= 48 && code <= 57) {
				// 0-9 .
				return go_number;
			}
		
			if (code === 34 || code === 39) {
				// " '
				return go_string;
			}
		
			_throw('Unexpected / Unsupported directive');
			return null;
		}
		// end:source 4.parser.helper.js
		// source 5.parser.js
		function expression_parse(expr) {
		
			template = expr;
			index = 0;
			length = expr.length;
		
			ast = new Ast_Body();
		
			var current = ast,
				state = state_body,
				c, next, directive;
		
			outer: while (true) {
		
				if (index < length && (c = template.charCodeAt(index)) < 33) {
					index++;
					continue;
				}
		
				if (index >= length) {
					break;
				}
		
				directive = parser_getDirective(c);
		
				if (directive == null && index < length) {
					break;
				}
		
				switch (directive) {
					case punc_ParantheseOpen:
						current = ast_append(current, new Ast_Statement(current));
						current = ast_append(current, new Ast_Body(current));
		
						index++;
						continue;
		
		
					case punc_ParantheseClose:
						var closest = type_Body;
						if (state === state_arguments) {
							state = state_body;
							closest = type_FunctionRef;
						}
		
						do {
							current = current.parent;
						} while (current != null && current.type !== closest);
		
						if (closest === type_Body) {
							current = current.parent;
						}
		
						if (current == null) {
							_throw('OutOfAst Exception - body closed');
							break outer;
						}
		
						index++;
						continue;
		
		
					case punc_Comma:
						if (state !== state_arguments) {
							
							state = state_body;
							do {
								current = current.parent;
							} while (current != null && current.type !== type_Body);
							index++;
							
							if (current == null) {
								_throw('Unexpected punctuation, comma');
								break outer;	
							}
							
							continue;
						}
						do {
							current = current.parent;
						} while (current != null && current.type !== type_FunctionRef);
		
						if (current == null) {
							_throw('OutOfAst Exception - next argument');
							break outer;
						}
		
						current = current.newArgument();
		
						index++;
						continue;
		
					case punc_Question:
						ast = new Ast_TernaryStatement(ast);
						current = ast.case1;
		
						index++;
						continue;
		
		
					case punc_Colon:
						current = ast.case2;
		
						index++;
						continue;
		
		
					case punc_Dot:
						c = template.charCodeAt(index + 1);
						if (c >= 48 && c <= 57) {
							directive = go_number;
						} else {
							directive = go_ref;
							index++;
						}
				}
		
		
				if (current.type === type_Body) {
					current = ast_append(current, new Ast_Statement(current));
				}
		
				if ((op_Minus === directive || op_LogicalNot === directive) && current.body == null) {
					current = ast_append(current, new Ast_UnaryPrefix(current, directive));
					index++;
					continue;
				}
		
				switch (directive) {
		
					case op_Minus:
					case op_Plus:
					case op_Multip:
					case op_Divide:
					case op_Modulo:
		
					case op_LogicalAnd:
					case op_LogicalOr:
					case op_LogicalEqual:
					case op_LogicalEqual_Strict:
					case op_LogicalNotEqual:
					case op_LogicalNotEqual_Strict:
		
					case op_LogicalGreater:
					case op_LogicalGreaterEqual:
					case op_LogicalLess:
					case op_LogicalLessEqual:
		
						while (current && current.type !== type_Statement) {
							current = current.parent;
						}
		
						if (current.body == null) {
							_throw('Unexpected operator', current);
							break outer;
						}
		
						current.join = directive;
		
						do {
							current = current.parent;
						} while (current != null && current.type !== type_Body);
		
						if (current == null) {
							console.error('Unexpected parent', current);
						}
		
		
						index++;
						continue;
					case go_string:
					case go_number:
						if (current.body != null && current.join == null) {
							_throw('Directive Expected');
							break outer;
						}
						if (go_string === directive) {
							index++;
							ast_append(current, new Ast_Value(parser_getString(c)));
							index++;
		
						}
		
						if (go_number === directive) {
							ast_append(current, new Ast_Value(parser_getNumber(c)));
						}
		
						continue;
		
					case go_ref:
						var ref = parser_getRef();
						
						if (ref === 'null') 
							ref = null;
						
						if (ref === 'false') 
							ref = false;
						
						if (ref === 'true') 
							ref = true;
							
						
						if (typeof ref !== 'string') {
							ast_append(current, new Ast_Value(ref));
							continue;
						}
		
						while (index < length) {
							c = template.charCodeAt(index);
							if (c < 33) {
								index++;
								continue;
							}
							break;
						}
		
						if (c === 40) {
		
							// (
							// function ref
							state = state_arguments;
							index++;
		
							var fn = ast_append(current, new Ast_FunctionRef(current, ref));
		
							current = fn.newArgument();
							continue;
						}
		
						current = ast_append(current, new Ast_SymbolRef(current, ref));
						break;
				}
			}
		
			if (current.body == null && current.type === type_Statement) {
				_throw('Unexpected end of expression');
			}
		
			ast_handlePrecedence(ast);
		
			return ast;
		}
		// end:source 5.parser.js
		// source 6.eval.js
		function expression_evaluate(mix, model, ctx, controller) {
		
			var result, ast;
		
			if (null == mix)
				return null;
			
			if ('.' === mix) 
				return model;
			
			if (typeof mix === 'string'){
				ast = cache.hasOwnProperty(mix) === true
					? (cache[mix])
					: (cache[mix] = expression_parse(mix))
					;
			}else{
				ast = mix;
			}
		
			var type = ast.type,
				i, x, length;
		
			if (type_Body === type) {
				var value, prev;
		
				outer: for (i = 0, length = ast.body.length; i < length; i++) {
					x = ast.body[i];
		
					value = expression_evaluate(x, model, ctx, controller);
		
					if (prev == null || prev.join == null) {
						prev = x;
						result = value;
						continue;
					}
					
					if (prev.join === op_LogicalAnd) {
						if (!result) {
							for (; i < length; i++) {
								if (ast.body[i].join === op_LogicalOr) {
									break;
								}
							}
						}else{
							result = value;
						}
					}
		
					if (prev.join === op_LogicalOr) {
						if (result){
							break outer;
						}
						if (value) {
							result = value;
							break outer;
						}
					}
		
					switch (prev.join) {
					case op_Minus:
						result -= value;
						break;
					case op_Plus:
						result += value;
						break;
					case op_Divide:
						result /= value;
						break;
					case op_Multip:
						result *= value;
						break;
					case op_Modulo:
						result %= value;
						break;
					case op_LogicalNotEqual:
						result = result != value;
						break;
					case op_LogicalNotEqual_Strict:
						result = result !== value;
						break;
					case op_LogicalEqual:
						result = result == value;
						break;
					case op_LogicalEqual_Strict:
						result = result === value;
						break;
					case op_LogicalGreater:
						result = result > value;
						break;
					case op_LogicalGreaterEqual:
						result = result >= value;
						break;
					case op_LogicalLess:
						result = result < value;
						break;
					case op_LogicalLessEqual:
						result = result <= value;
						break;
					}
		
					prev = x;
				}
			}
		
			if (type_Statement === type) {
				return expression_evaluate(ast.body, model, ctx, controller);
			}
		
			if (type_Value === type) {
				return ast.body;
			}
		
			if (type_SymbolRef === type || type_FunctionRef === type) {
				return util_resolveRef(ast, model, ctx, controller);
			}
			
			if (type_UnaryPrefix === type) {
				result = expression_evaluate(ast.body, model, ctx, controller);
				switch (ast.prefix) {
				case op_Minus:
					result = -result;
					break;
				case op_LogicalNot:
					result = !result;
					break;
				}
			}
		
			if (type_Ternary === type){
				result = expression_evaluate(ast.body, model, ctx, controller);
				result = expression_evaluate(result ? ast.case1 : ast.case2, model, ctx, controller);
		
			}
		
			return result;
		}
		
		// end:source 6.eval.js
		// source 7.vars.helper.js
		var refs_extractVars = (function() {
		
			/**
			 * extract symbol references
			 * ~[:user.name + 'px'] -> 'user.name'
			 * ~[:someFn(varName) + user.name] -> ['varName', 'user.name']
			 *
			 * ~[:someFn().user.name] -> {accessor: (Accessor AST function call) , ref: 'user.name'}
			 */
		
		
			return function(expr){
				if (typeof expr === 'string') {
					expr = expression_parse(expr);
				}
				
				return _extractVars(expr);
				
				
			};
			
			
			
			function _extractVars(expr) {
		
				if (expr == null) {
					return null;
				}
		
				var refs, x;
		
				if (type_Body === expr.type) {
		
					for (var i = 0, length = expr.body.length; i < length; i++) {
						x = _extractVars(expr.body[i]);
						refs = _append(refs, x);
					}
				}
		
				if (type_SymbolRef === expr.type) {
					var path = expr.body,
						next = expr.next;
		
					while (next != null) {
						if (type_FunctionRef === next.type) {
							return _extractVars(next);
						}
						if (type_SymbolRef !== next.type) {
							console.error('Ast Exception: next should be a symbol/function ref');
							return null;
						}
		
						path += '.' + next.body;
		
						next = next.next;
					}
		
					return path;
				}
		
		
				switch (expr.type) {
					case type_Statement:
					case type_UnaryPrefix:
					case type_Ternary:
						x = _extractVars(expr.body);
						refs = _append(refs, x);
						break;
				}
				
				// get also from case1 and case2
				if (type_Ternary === expr.type) {
					x = _extractVars(ast.case1);
					refs = _append(refs, x);
		
					x = _extractVars(ast.case2);
					refs = _append(refs, x);
				}
		
		
				if (type_FunctionRef === expr.type) {
					for(var i = 0, length = expr.arguments.length; i < length; i++){
						x = _extractVars(expr.arguments[i]);
						refs = _append(refs, x);
					}
					
					x = null;
					var parent = expr;
					outer: while ((parent = parent.parent)) {
						switch (parent.type) {
							case type_SymbolRef:
								x = parent.body + (x == null ? '' : '.' + x);
								break;
							case type_Body:
							case type_Statement:
								break outer;
							default:
								x = null;
								break outer;
						}
					}
					
					if (x != null) {
						refs = _append(refs, x);
					}
					
					if (expr.next) {
						x = _extractVars(expr.next);
						refs = _append(refs, {accessor: _getAccessor(expr), ref: x});
					}
				}
		
				return refs;
			}
			
			function _append(current, x) {
				if (current == null) {
					return x;
				}
		
				if (x == null) {
					return current;
				}
		
				if (!(typeof current === 'object' && current.length != null)) {
					current = [current];
				}
		
				if (!(typeof x === 'object' && x.length != null)) {
					
					if (current.indexOf(x) === -1) {
						current.push(x);
					}
					
					return current;
				}
				
				for (var i = 0, imax = x.length; i < imax; i++) {
					if (current.indexOf(x[i]) === -1) {
						current.push(x[i]);
					}
				}
				
				return current;
		
			}
			
			function _getAccessor(current) {
				
				var parent = current;
				
				outer: while (parent.parent) {
					switch (parent.parent.type) {
						case type_Body:
						case type_Statement:
							break outer;
					}
					parent = parent.parent;
				}
				
				return _copy(parent, current.next);
			}
			
			function _copy(ast, stop) {
				
				if (ast === stop || ast == null) {
					return null;
				}
				
				if (typeof ast !== 'object') {
					return ast;
				}
				
				if (ast.length != null && typeof ast.splice === 'function') {
					
					var arr = [];
					
					for (var i = 0, imax = ast.length; i < imax; i++){
						arr[i] = _copy(ast[i], stop);
					}
					
					return arr;
				}
				
				
				var clone = {};
				for (var key in ast) {
					if (ast[key] == null || key === 'parent') {
						continue;
					}
					clone[key] = _copy(ast[key], stop);
				}
				
				return clone;
			}
		
		}());
		
		// end:source 7.vars.helper.js
	
	
		return {
			parse: expression_parse,
			
			/**
			 * Expression.eval(expression [, model, cntx, controller]) -> result
			 * - expression (String): Expression, only accessors are supoorted
			 *
			 * All symbol and function references will be looked for in 
			 *
			 * 1. model, or via special accessors:
			 * 		- `$c` controller
			 * 		- `$ctx`
			 * 		- `$a' controllers attributes
			 * 2. scope:
			 * 		controller.scope
			 * 		controller.parent.scope
			 * 		...
			 *
			 * Sample:
			 * '(user.age + 20) / 2'
			 * 'fn(user.age + "!") + x'
			 **/
			eval: expression_evaluate,
			varRefs: refs_extractVars,
			
			// Return all values of a comma delimiter expressions
			// like argumets: ' foo, bar, "4,50" ' => [ %fooValue, %barValue, "4,50" ]
			evalStatements: function(expr, model, ctx, controller){
				
				var body = expression_parse(expr).body,
	                args = [],
	                imax = body.length,
	                i = -1
	                ;
	            while( ++i < imax ){
	                args[i] = expression_evaluate(body[i], model, ctx, controller);
	            }
				
				return args;
			}
		};
	
	}());
	
	// end:source /src/expression/exports.js
	// source /src/statements/exports.js
	// source 1.if.js
	(function(){
		
		function getNodes(node, model, ctx, controller){
			function evaluate(expr){
				return ExpressionUtil.eval(expr, model, ctx, controller);
			}
			
			if (evaluate(node.expression)) 
				return node.nodes;
			
			while (true) {
				node = node.nextSibling;
				
				if (node == null || node.tagName !== 'else') 
					break;
				
				var expr = node.expression;
				if (expr == null || expr === '' || evaluate(expr)) 
					return node.nodes;
			}
			
			return null;
		}
		
		custom_Statements['if'] = {
			getNodes: getNodes,
			render: function(node, model, ctx, container, controller, childs){
				
				var nodes = getNodes(node, model, ctx, controller);
				if (nodes == null) 
					return;
				
				builder_build(nodes, model, ctx, container, controller, childs);
			}
		};
		
	}());
	
	// end:source 1.if.js
	// source 2.for.js
	
	(function(){
	
		custom_Statements['for'] = {
			
			render: function(node, model, ctx, container, controller, childs){
				
				parse_For(node.expression);
				
				var value = ExpressionUtil.eval(__ForDirective[3], model, ctx, controller);
				if (value == null) 
					return;
				
				build(
					value,
					__ForDirective,
					node.nodes,
					model,
					ctx,
					container,
					controller,
					childs
				);
			},
			
			build: build,
			parseFor: parse_For,
			createForItem: createForItem,
			getNodes: getNodes,
			
			getHandler: function(compoName, model){
				return createHandler(compoName, model);
			}
		};
		
		function build(value, For, nodes, model, ctx, container, ctr, childs) {
			
			builder_build(
				getNodes(nodes, value, For[0], For[1], For[2]),
				model,
				ctx,
				container,
				ctr,
				childs
			);
		}
		
		function getNodes(nodes, value, prop1, prop2, type) {
				
			if ('of' === type) {
				if (is_Array(value) === false) {
					console.warn('<ForStatement> Value is not enumerable', value);
					return null;
				}
				
				return loop_Array(nodes, value, prop1, prop2);
			}
			
			if ('in' === type) {
				if (typeof value !== 'object') {
					console.warn('<ForStatement> Value is not an object', value);
					return null;
				}
				
				if (is_Array(value)) 
					console.log('<mask:for> Consider to use `for..of` for Arrays')
				
				return loop_Object(nodes, value, prop1, prop2);
			}
		}
		
		function loop_Array(template, arr, prop1, prop2){
			
			var i = -1,
				imax = arr.length,
				nodes = new Array(imax),
				scope;
			
			while ( ++i < imax ) {
				scope = {};
				
				scope[prop1] = arr[i];
				
				if (prop2) 
					scope[prop2] = i;
				
				
				nodes[i] = createForItem('for..of/item', template, scope);
			}
			
			return nodes;
		}
		
		function loop_Object(template, obj, prop1, prop2){
			var nodes = [],
				i = 0,
				scope, key, value;
			
			for (key in obj) {
				value = obj[key];
				scope = {};
				
				scope[prop1] = key;
				
				if (prop2) 
					scope[prop2] = value;
				
				
				nodes[i++] = createForItem('for..in/item', template, scope);
			}
			
			return nodes;
		}
		
		function createForItem(name, nodes, scope) {
			
			return {
				type: Dom.COMPONENT,
				tagName: name,
				nodes: nodes,
				controller: {
					compoName: name,
					scope: scope,
					renderEnd: handler_proto_renderEnd
				}
			};
		}
		
		function createHandler(name, scope) {
			return {
				compoName: name,
				scope: scope,
				renderEnd: handler_proto_renderEnd
			}
		}
		
		function handler_proto_renderEnd(elements) {
			this.elements = elements;
		}
	
		
		var __ForDirective = [ 'prop1', 'prop2', 'in|of', 'expression' ],
			state_prop = 1,
			state_multiprop = 2,
			state_loopType = 3
			;
			
		var template,
			index,
			length
			;
			
		function parse_For(expr) {
			// /([\w_$]+)((\s*,\s*([\w_$]+)\s*\))|(\s*\))|(\s+))(of|in)\s+([\w_$\.]+)/
			
			template = expr;
			length = expr.length;
			index = 0;
		
			var prop1,
				prop2,
				loopType,
				hasBrackets,
				c
				;
				
			c = parser_skipWhitespace();
			if (c === 40) {
				// (
				hasBrackets = true;
				index++;
				parser_skipWhitespace();
			}
			
			prop1 = parser_getVarDeclaration();
			
			c = parser_skipWhitespace();
			if (c === 44) {
				//,
				
				if (hasBrackets !== true) {
					return throw_('Parenthese must be used in multiple var declarion');
				}
				
				index++;
				parser_skipWhitespace();
				prop2 = parser_getVarDeclaration();
			}
			
			if (hasBrackets) {
				c = parser_skipWhitespace();
				
				if (c !== 41) 
					return throw_('Closing parenthese expected');
				
				index++;
			}
			
			c = parser_skipWhitespace();
				
			var loopType;
			
			if (c === 105 && template.charCodeAt(++index) === 110) {
				// i n
				loopType = 'in';
			}
	
			if (c === 111 && template.charCodeAt(++index) === 102) {
				// o f
				loopType = 'of';
			}
			
			if (loopType == null) {
				return throw_('Invalid FOR statement. (in|of) expected');
			}
			
			__ForDirective[0] = prop1;
			__ForDirective[1] = prop2;
			__ForDirective[2] = loopType;
			__ForDirective[3] = template.substring(++index);
			
			
			return __ForDirective;
		}
		
		function parser_skipWhitespace(){
			var c;
			for(; index < length; index++ ){
				c = template.charCodeAt(index);
				if (c < 33) 
					continue;
				
				return c;
			}
			
			return -1;
		}
		
		function parser_getVarDeclaration(){
			var start = index,
				var_, c;
				
			for (; index < length; index++) {
					
				c = template.charCodeAt(index);
				
				if (c > 48 && c < 57) {
					// 0-9
					if (start === index)
						return throw_('Variable name begins with a digit');
					
					continue;
				}
				
				if (
					(c === 36) || // $
					(c === 95) || // _ 
					(c >= 97 && c <= 122) || // a-z
					(c >= 65 && c <= 90)  // A-Z
					) {
					
					continue;
				}
				
				break;
			}
			
			if (start === index) 
				return throw_('Variable declaration expected');
			
			return template.substring(start, index);
		}
		
		function throw_(message) {
			throw new Error( '<ForStatement parser> '
				+ message
				+ ' `'
				+ template.substring(index, 20)
				+ '`'
			);
		}
		
	}());
	
	
	// end:source 2.for.js
	// source 3.each.js
	
	(function(){
	
		custom_Statements['each'] = {
			
			render: function(node, model, ctx, container, controller, children){
				
				var array = ExpressionUtil.eval(node.expression, model, ctx, controller);
				
				if (array == null) 
					return;
				
				
				build(node.nodes, array, ctx, container, controller, children);
			},
			createItem: createEachItem,
			build: build
		};
		
		function build(template, array, ctx, container, controller, children){
			var imax = array.length,
				i = -1,
				nodes = template,
				itemCtr;
			
			while ( ++i < imax ){
				
				itemCtr = createEachItem(i, nodes, controller);
				builder_build(nodes, array[i], ctx, container, itemCtr, children);
				
				if (itemCtr.components != null) 
					arr_pushMany(controller.components, itemCtr.components);
			}
			
		}
		
		function createEachItem(index, nodes, parent) {
			
			return {
				type: Dom.COMPONENT,
				compoName: 'each::item',
				scope: {
					index: index
				},
				parent: parent,
				nodes: nodes,
				model: null,
				attr: null,
				components: null,
				elements: null,
				ID: null
			};
		}
		
	}());
	
	// end:source 3.each.js
	// source 4.with.js
		
	custom_Statements['with'] = {
		render: function(node, model, ctx, container, controller, childs){
			
			var obj = ExpressionUtil.eval(node.expression, model, ctx, controller);
			
				
			builder_build(node.nodes, obj, ctx, container, controller, childs);
		}
	};
	// end:source 4.with.js
	// source 5.switch.js
	(function(){
		var eval_ = ExpressionUtil.eval;
		
		custom_Statements['switch'] = {
			render: function(node, model, ctx, container, controller, childs){
				
				var value = eval_(node.expression, model, ctx, controller),
					nodes = getNodes(value, node.nodes, model, ctx, controller);
				if (nodes == null) 
					return;
				
				
				builder_build(nodes, model, ctx, container, controller, childs);
			},
			
			getNodes: getNodes
		};	
		
		
		function getNodes(value, nodes, model, ctx, controller) {
			if (nodes == null) 
				return null;
			
			var imax = nodes.length,
				i = -1,
				
				child, expr,
				case_, default_;
				
			while ( ++i < imax ){
				child = nodes[i];
				
				if (child.tagName === 'default') {
					default_ = child;
					continue;
				}
				
				if (child.tagName !== 'case') {
					console.warn('<mask:switch> Case expected', child.tagName);
					continue;
				}
				expr = child.expression;
				if (!expr) {
					console.warn('<mask:switch:case> Expression expected');
					continue;
				}
				
				if (eval_(expr, model, ctx, controller) == value) {
					//! `==` comparison
					case_ = child;
					break;
				}
			}
			
			if (case_ == null) 
				case_ = default_;
			
			return case_ != null
				? case_.nodes
				: null
				;
		}
		
	}());
		
	
	// end:source 5.switch.js
	// source 6.include.js
	(function(){
		
		custom_Statements['include'] = {
			
			render: function(node, model, ctx, container, controller, childs){
				
				var arguments_ = ExpressionUtil.evalStatements(node.expression);
					
				var resource;
				
				while(controller != null){
					
					resource = controller.resource;
					if (resource != null) 
						break;
					
					controller = controller.parent;
				}
				
				var ctr = new IncludeController(controller),
					resume = Compo.pause(ctr, ctx);
				
				
				
				include
					.instance(resource && resource.url)
					.load
					.apply(resource, arguments_)
					.done(function(resp){
						
						ctr.templates = resp.load;
						
						builder_build(
							node.nodes,
							model,
							ctx,
							container,
							ctr,
							childs);
						
						resume();
					});
			}
		};
		
		function IncludeController(parent){
			
			this.parent = parent;
			this.compoName = 'include';
			this.components = [];
			this.templates = null;
		}
		
	}());
		
	
	// end:source 6.include.js
	// source 7.import.js
	
	
	custom_Statements['import'] = {
		render: function(node, model, ctx, container, controller, childs){
			
			var expr = node.expression,
				args = ExpressionUtil.evalStatements(expr, model, ctx, controller),
				name = args[0]
				;
			if (typeof name !== 'string') {
				console.error('<mask:import> Invalid argument', expr);
				return;
			}
		
			while (true) {
				
				if (controller.compoName == 'include') 
					break;
				
				controller = controller.parent;
				
				if (controller == null)
					break;
			}
			
			
			
			if (controller == null) 
				return;
			
			var nodes = controller.templates[name];
			if (nodes == null) 
				return;
			
			builder_build(Parser.parse(nodes), model, ctx, container, controller, childs);
		}
	};
	// end:source 7.import.js
	// end:source /src/statements/exports.js
	// source /src/dom/exports.js
	var Dom;
	
	(function(){
		
		var dom_NODE = 1,
			dom_TEXTNODE = 2,
			dom_FRAGMENT = 3,
			dom_COMPONENT = 4,
			dom_CONTROLLER = 9,
			dom_SET = 10,
			dom_STATEMENT = 15
			;
		
		// source 1.utils.js
		function _appendChild(el){
			
			if (this.nodes == null) {
				this.nodes = [el];
				return;
			}
			
			this.nodes.push(el);
			var prev = this.nodes[this.nodes.length - 2];
			
			prev.nextSibling = el;
		}
		// end:source 1.utils.js
		// source 2.Node.js
		
		function Node(tagName, parent) {
			this.type = Dom.NODE;
		
			this.tagName = tagName;
			this.parent = parent;
			this.attr = {};
			
		}
		
		Node.prototype = {
			constructor: Node,
			type: dom_NODE,
			tagName: null,
			parent: null,
			attr: null,
			nodes: null,
			expression: null,
			appendChild: _appendChild,
			
			__single: null
		};
		// end:source 2.Node.js
		// source 3.TextNode.js
		
		
		function TextNode(text, parent) {
			this.content = text;
			this.parent = parent;
		}
		
		TextNode.prototype = {
			type: dom_TEXTNODE,
			content: null,
			parent: null
		};
		// end:source 3.TextNode.js
		// source 4.Component.js
		
		
		function Component(compoName, parent, controller){
			this.tagName = compoName;
			this.parent = parent;
			this.controller = controller;
			this.attr = {};
		}
		
		Component.prototype = {
			constructor: Component,
			type: dom_COMPONENT,
			parent: null,
			attr: null,
			controller: null,
			nodes: null,
			components: null,
			model: null,
			modelRef: null
		};
		
		// end:source 4.Component.js
		// source 5.Fragment.js
		
		
		function Fragment(){
			
		}
		
		Fragment.prototype = {
			constructor: Fragment,
			type: dom_FRAGMENT,
			nodes: null,
			appendChild: _appendChild
		};
		// end:source 5.Fragment.js
		
		
		Dom = {
			NODE: dom_NODE,
			TEXTNODE: dom_TEXTNODE,
			FRAGMENT: dom_FRAGMENT,
			COMPONENT: dom_COMPONENT,
			CONTROLLER: dom_CONTROLLER,
			SET: dom_SET,
			STATEMENT: dom_STATEMENT,
		
			Node: Node,
			TextNode: TextNode,
			Fragment: Fragment,
			Component: Component
		};
	}());
	
	// end:source /src/dom/exports.js
	
	// source /src/parse/parser.js
	var parser_parse,
		parser_ensureTemplateFunction,
		parser_setInterpolationQuotes,
		parser_cleanObject,
		
		
		// deprecate
		Parser
		;
	
	(function(Node, TextNode, Fragment, Component) {
	
		var interp_START = '~',
			interp_OPEN = '[',
			interp_CLOSE = ']',
	
			// ~
			interp_code_START = 126,
			// [
			interp_code_OPEN = 91,
			// ]
			interp_code_CLOSE = 93,
	
			_serialize;
	
		// source cursor.js
		var cursor_bracketsEnd,
			cursor_quotesEnd
			;
		
		(function(){
			
			cursor_bracketsEnd = function(template, index, length, startCode, endCode){
				
				var c, count = 0;
				
				for( ; index < length; index++){
					c = template.charCodeAt(index);
					
					if (c === 34) {
						// "
						index = cursor_quotesEnd(template, index + 1, length, '"');
						continue;
					}
					
					if (c === startCode) {
						count++;
						continue;
					}
					
					if (c === endCode) {
						if (--count === -1) 
							return index;
					}
				}
				
				_throw(template, index, null, 'Not closed brackets `' + String.fromCharCode(startCode) + '`');
				return index;
			};
			
			cursor_quotesEnd = function(template, index, length, char_){
				var nindex;
		
				while ((nindex = template.indexOf(char_, index)) !== -1) {
					index = nindex;
					if (template.charCodeAt(nindex - 1) !== 92 /*'\\'*/ ) 
						break;
					
					index++;
				}
				
				return index;
			};
			
		}());
		// end:source cursor.js
	
		function ensureTemplateFunction(template) {
			var index = -1;
	
			/*
			 * - single char indexOf is much faster then '~[' search
			 * - function is divided in 2 parts: interpolation start lookup/ interpolation parse
			 * for better performance
			 */
			while ((index = template.indexOf(interp_START, index)) !== -1) {
				if (template.charCodeAt(index + 1) === interp_code_OPEN) 
					break;
				
				index++;
			}
	
			if (index === -1) 
				return template;
			
			var array = [],
				lastIndex = 0,
				i = 0,
				end;
	
	
			while (true) {
				end = template.indexOf(interp_CLOSE, index + 2);
				if (end === -1) 
					break;
				
	
				array[i++] = lastIndex === index
					? ''
					: template.substring(lastIndex, index);
				array[i++] = template.substring(index + 2, end);
	
	
				lastIndex = index = end + 1;
	
				while ((index = template.indexOf(interp_START, index)) !== -1) {
					if (template.charCodeAt(index + 1) === interp_code_OPEN) 
						break;
					
					index++;
				}
	
				if (index === -1) 
					break;
			}
	
			if (lastIndex < template.length) 
				array[i] = template.substring(lastIndex);
			
	
			template = null;
			return function(type, model, ctx, element, controller, name) {
				if (type == null) {
					// http://jsperf.com/arguments-length-vs-null-check
					// this should be used to stringify parsed MaskDOM
					var string = '',
						imax = array.length,
						i = -1,
						x;
					while ( ++i < imax) {
						x = array[i];
						
						string += i % 2 === 1
							? interp_START
								+ interp_OPEN
								+ x
								+ interp_CLOSE
							: x
							;
					}
					return string;
				}
	
				return util_interpolate(array, type, model, ctx, element, controller, name);
			};
	
		}
	
	
		function _throw(template, index, state, token) {
			var parsing = {
					2: 'tag',
					3: 'tag',
					5: 'attribute key',
					6: 'attribute value',
					8: 'literal'
				}[state],
	
				lines = template.substring(0, index).split('\n'),
				line = lines.length,
				row = lines[line - 1].length,
	
				message = ['Mask - Unexpected:', token, 'at(', line, ':', row, ') [ in', parsing, ']'];
	
			console.error(message.join(' '), {
				stopped: template.substring(index),
				template: template
			});
		}
	
		var go_tag = 2,
			state_tag = 3,
			state_attr = 5,
			go_attrVal = 6,
			go_attrHeadVal = 7,
			state_literal = 8,
			go_up = 9
			;
	
	
		Parser = {
	
			/** @out : nodes */
			parse: function(template) {
	
				//_serialize = T.serialize;
	
				var current = new Fragment(),
					fragment = current,
					state = go_tag,
					last = state_tag,
					index = 0,
					length = template.length,
					classNames,
					token,
					key,
					value,
					next,
					//-next_Type,
					c, // charCode
					start,
					nextC;
	
				
	
	
				outer: while (true) {
	
					if (index < length && (c = template.charCodeAt(index)) < 33) {
						index++;
						continue;
					}
	
					// COMMENTS
					if (c === 47) {
						// /
						nextC = template.charCodeAt(index + 1);
						if (nextC === 47){
							// inline (/)
							index++;
							while (c !== 10 && c !== 13 && index < length) {
								// goto newline
								c = template.charCodeAt(++index);
							}
							continue;
						}
						if (nextC === 42) {
							// block (*)
							index = template.indexOf('*/', index + 2) + 2;
							
							if (index === 1) {
								// if DEBUG
								console.warn('<mask:parse> block comment has no end');
								// endif
								index = length;
							}
							
							
							continue;
						}
					}
	
					if (last === state_attr) {
						if (classNames != null) {
							current.attr['class'] = ensureTemplateFunction(classNames);
							classNames = null;
						}
						if (key != null) {
							current.attr[key] = key;
							key = null;
							token = null;
						}
					}
	
					if (token != null) {
	
						if (state === state_attr) {
	
							if (key == null) {
								key = token;
							} else {
								value = token;
							}
	
							if (key != null && value != null) {
								if (key !== 'class') {
									current.attr[key] = value;
								} else {
									classNames = classNames == null ? value : classNames + ' ' + value;
								}
	
								key = null;
								value = null;
							}
	
						} else if (last === state_tag) {
	
							//next = custom_Tags[token] != null
							//	? new Component(token, current, custom_Tags[token])
							//	: new Node(token, current);
							
							next = new Node(token, current);
							
							current.appendChild(next);
							//////if (current.nodes == null) {
							//////	current.nodes = [next];
							//////} else {
							//////	current.nodes.push(next);
							//////}
	
							current = next;
							state = state_attr;
	
						} else if (last === state_literal) {
	
							next = new TextNode(token, current);
							
							current.appendChild(next);
							//if (current.nodes == null) {
							//	current.nodes = [next];
							//} else {
							//	current.nodes.push(next);
							//}
	
							if (current.__single === true) {
								do {
									current = current.parent;
								} while (current != null && current.__single != null);
							}
							state = go_tag;
	
						}
	
						token = null;
					}
	
					if (index >= length) {
						if (state === state_attr) {
							if (classNames != null) {
								current.attr['class'] = ensureTemplateFunction(classNames);
							}
							if (key != null) {
								current.attr[key] = key;
							}
						}
	
						break;
					}
	
					if (state === go_up) {
						current = current.parent;
						while (current != null && current.__single != null) {
							current = current.parent;
						}
						state = go_tag;
					}
	
					switch (c) {
					case 123:
						// {
	
						last = state;
						state = go_tag;
						index++;
	
						continue;
					case 62:
						// >
						last = state;
						state = go_tag;
						index++;
						current.__single = true;
						continue;
	
	
					case 59:
						// ;
	
						// skip ; , when node is not a single tag (else goto 125)
						if (current.nodes != null) {
							index++;
							continue;
						}
	
						/* falls through */
					case 125:
						// ;}
	
						index++;
						last = state;
						state = go_up;
						continue;
	
					case 39:
					case 34:
						// '"
						// Literal - could be as textnode or attribute value
						if (state === go_attrVal) {
							state = state_attr;
						} else {
							last = state = state_literal;
						}
	
						index++;
	
	
	
						var isEscaped = false,
							isUnescapedBlock = false,
							nindex, _char = c === 39 ? "'" : '"';
	
						start = index;
	
						while ((nindex = template.indexOf(_char, index)) > -1) {
							index = nindex;
							if (template.charCodeAt(nindex - 1) !== 92 /*'\\'*/ ) {
								break;
							}
							isEscaped = true;
							index++;
						}
	
						if (start === index) {
							nextC = template.charCodeAt(index + 1);
							if (nextC === 124 || nextC === c) {
								// | (obsolete) or triple quote
								isUnescapedBlock = true;
								start = index + 2;
								index = nindex = template.indexOf((nextC === 124 ? '|' : _char) + _char + _char, start);
	
								if (index === -1) {
									index = length;
								}
	
							}
						}
	
						token = template.substring(start, index);
						if (isEscaped === true) {
							token = token.replace(regexpEscapedChar[_char], _char);
						}
	
						token = ensureTemplateFunction(token);
	
	
						index += isUnescapedBlock ? 3 : 1;
						continue;
					}
	
	
					if (state === go_tag) {
						last = state_tag;
						state = state_tag;
						//next_Type = Dom.NODE;
						
						if (c === 46 /* . */ || c === 35 /* # */ ) {
							token = 'div';
							continue;
						}
						
						//if (c === 58 || c === 36 || c === 64 || c === 37) {
						//	// : /*$ @ %*/
						//	next_Type = Dom.COMPONENT;
						//}
						
					}
	
					else if (state === state_attr) {
						if (c === 46) {
							// .
							index++;
							key = 'class';
							state = go_attrHeadVal;
						}
						
						else if (c === 35) {
							// #
							index++;
							key = 'id';
							state = go_attrHeadVal;
						}
						
						else if (c === 61) {
							// =;
							index++;
							state = go_attrVal;
							continue;
						}
						
						else if (c === 40) {
							// (
							start = 1 + index;
							index = 1 + cursor_bracketsEnd(template, start, length, c, 41 /* ) */);
							current.expression = template.substring(start, index - 1);
							current.type = Dom.STATEMENT;
							continue;
						}
						
						else {
	
							if (key != null) {
								token = key;
								continue;
							}
						}
					}
	
					if (state === go_attrVal || state === go_attrHeadVal) {
						last = state;
						state = state_attr;
					}
	
	
	
					/* TOKEN */
	
					var isInterpolated = null;
	
					start = index;
					while (index < length) {
	
						c = template.charCodeAt(index);
	
						if (c === interp_code_START && template.charCodeAt(index + 1) === interp_code_OPEN) {
							isInterpolated = true;
							++index;
							do {
								// goto end of template declaration
								c = template.charCodeAt(++index);
							}
							while (c !== interp_code_CLOSE && index < length);
						}
	
						// if DEBUG
						if (c === 0x0027 || c === 0x0022 || c === 0x002F || c === 0x003C || c === 0x002C) {
							// '"/<,
							_throw(template, index, state, String.fromCharCode(c));
							break;
						}
						// endif
	
	
						if (last !== go_attrVal && (c === 46 || c === 35)) {
							// .#
							// break on .# only if parsing attribute head values
							break;
						}
	
						if (c < 33 ||
							c === 61 ||
							c === 62 ||
							c === 59 ||
							c === 40 ||
							c === 123 ||
							c === 125) {
							// =>;({}
							break;
						}
	
	
						index++;
					}
	
					token = template.substring(start, index);
	
					// if DEBUG
					if (!token) {
						_throw(template, index, state, '<empty token>');
						break;
					}
					if (isInterpolated === true && state === state_tag) {
						_throw(template, index, state, 'Tag Names cannt be interpolated (in dev)');
						break;
					}
					// endif
	
	
					if (isInterpolated === true && (state === state_attr && key === 'class') === false) {
						token = ensureTemplateFunction(token);
					}
	
				}
	
				////if (isNaN(c)) {
				////	_throw(template, index, state, 'Parse IndexOverflow');
				////
				////}
	
				// if DEBUG
				if (current.parent != null && current.parent !== fragment && current.parent.__single !== true && current.nodes != null) {
					console.warn('Mask - ', current.parent.tagName, JSON.stringify(current.parent.attr), 'was not proper closed.');
				}
				// endif
	
				
				return fragment.nodes != null && fragment.nodes.length === 1
					? fragment.nodes[0]
					: fragment;
			},
			
			// obsolete
			cleanObject: function(obj) {
				if (obj instanceof Array) {
					for (var i = 0; i < obj.length; i++) {
						this.cleanObject(obj[i]);
					}
					return obj;
				}
				delete obj.parent;
				delete obj.__single;
	
				if (obj.nodes != null) {
					this.cleanObject(obj.nodes);
				}
	
				return obj;
			},
			setInterpolationQuotes: function(start, end) {
				if (!start || start.length !== 2) {
					console.error('Interpolation Start must contain 2 Characters');
					return;
				}
				if (!end || end.length !== 1) {
					console.error('Interpolation End must be of 1 Character');
					return;
				}
	
				interp_code_START = start.charCodeAt(0);
				interp_code_OPEN = start.charCodeAt(1);
				interp_code_CLOSE = end.charCodeAt(0);
				
				interp_START = start[0];
				interp_OPEN = start[1];
				interp_CLOSE = end;
			},
			
			ensureTemplateFunction: ensureTemplateFunction
		};
		
		// = exports
		
		parser_parse = Parser.parse;
		parser_ensureTemplateFunction = Parser.ensureTemplateFunction;
		parser_cleanObject = Parser.cleanObject;
		parser_setInterpolationQuotes = Parser.setInterpolationQuotes;
		
	}(Dom.Node, Dom.TextNode, Dom.Fragment, Dom.Component));
	
	// end:source /src/parse/parser.js
	// source /src/build/builder.dom.js
	var builder_componentID = 0,
		
		builder_build;
	
	(function(custom_Attributes, custom_Tags, Component){
		
		
			
		// source util.js
		function listeners_emit(name) {
			if (listeners == null || listeners[name] == null) 
				return;
			
			var fns = listeners.compoCreated,
				imax = fns.length,
				i = -1,
				args = _Array_slice.call(arguments, 1)
				;
				
			while ( ++i < imax) 
				fns[i].apply(null, args);
			
		}
		
		function build_resumeDelegate(controller, model, cntx, container, childs){
			var anchor = container.appendChild(document.createComment(''));
			
			return function(){
				return build_resumeController(controller, model, cntx, anchor, childs);
			};
		}
		
		
		function build_resumeController(controller, model, cntx, anchor, childs) {
			
			
			if (controller.tagName != null && controller.tagName !== controller.compoName) {
				controller.nodes = {
					tagName: controller.tagName,
					attr: controller.attr,
					nodes: controller.nodes,
					type: 1
				};
			}
			
			if (controller.model != null) {
				model = controller.model;
			}
			
			
			var nodes = controller.nodes,
				elements = [];
			if (nodes != null) {
		
				
				var isarray = nodes instanceof Array,
					length = isarray === true ? nodes.length : 1,
					i = 0,
					childNode = null,
					fragment = document.createDocumentFragment();
		
				for (; i < length; i++) {
					childNode = isarray === true ? nodes[i] : nodes;
					
					builder_build(childNode, model, cntx, fragment, controller, elements);
				}
				
				anchor.parentNode.insertBefore(fragment, anchor);
			}
			
				
			// use or override custom attr handlers
			// in Compo.handlers.attr object
			// but only on a component, not a tag controller
			if (controller.tagName == null) {
				var attrHandlers = controller.handlers && controller.handlers.attr,
					attrFn,
					key;
				for (key in controller.attr) {
					
					attrFn = null;
					
					if (attrHandlers && is_Function(attrHandlers[key])) {
						attrFn = attrHandlers[key];
					}
					
					if (attrFn == null && is_Function(custom_Attributes[key])) {
						attrFn = custom_Attributes[key];
					}
					
					if (attrFn != null) {
						attrFn(node, controller.attr[key], model, cntx, elements[0], controller);
					}
				}
			}
			
			if (is_Function(controller.renderEnd)) {
				/* if !DEBUG
				try{
				*/
				controller.renderEnd(elements, model, cntx, anchor.parentNode);
				/* if !DEBUG
				} catch(error){ console.error('Custom Tag Handler:', controller.tagName, error); }
				*/
			}
			
		
			if (childs != null && childs !== elements){
				var il = childs.length,
					jl = elements.length;
		
				j = -1;
				while(++j < jl){
					childs[il + j] = elements[j];
				}
			}
		}
		// end:source util.js
		// source util.controller.js
		function controller_pushCompo(controller, compo) {
			
			if (controller.components == null) {
				controller.components = [ compo ];
				return;
			} 
			
			controller.components.push(compo);
		}
		// end:source util.controller.js
		
		// source type.textNode.js
		
		var build_textNode = (function(){
			
			var append_textNode = (function(document){
				
				return function(element, text){
					element.appendChild(document.createTextNode(text));
				};
				
			}(document));
			
			return function build_textNode(node, model, ctx, container, controller) {
				
				var content = node.content;
					
				
				if (is_Function(content)) {
				
					var result = content('node', model, ctx, container, controller);
				
					if (typeof result === 'string') {
						
						append_textNode(container, result);
						return;
					} 
				
					
					// result is array with some htmlelements
					var text = '',
						jmax = result.length,
						j = 0,
						x;
						
					for (; j < jmax; j++) {
						x = result[j];
			
						if (typeof x === 'object') {
							// In this casee result[j] should be any HTMLElement
							if (text !== '') {
								append_textNode(container, text);
								text = '';
							}
							if (x.nodeType == null) {
								text += x.toString();
								continue;
							}
							container.appendChild(x);
							continue;
						}
			
						text += x;
					}
					
					if (text !== '') {
						append_textNode(container, text);
					}
					
					return;
				} 
				
				append_textNode(container, content);
			}
		}());
		// end:source type.textNode.js
		// source type.node.js
		
		var build_node = (function(){
			
			var el_create = (function(doc){
				return function(name){
					
					// if DEBUG
					try {
					// endif
						return doc.createElement(name);
					// if DEBUG
					} catch(error) {
						console.error(name, 'element cannot be created. If this should be a custom handler tag, then controller is not defined');
						return null;
					}
					// endif
				};
			}(document));
			
			return function build_node(node, model, ctx, container, controller, childs){
				
				var tagName = node.tagName,
					attr = node.attr;
				
				var tag = el_create(tagName);
				if (tag == null) 
					return;
				
				if (childs != null){
					childs.push(tag);
					attr['x-compo-id'] = controller.ID;
				}
				
				// ++ insert tag into container before setting attributes, so that in any
				// custom util parentNode is available. This is for mask.node important
				// http://jsperf.com/setattribute-before-after-dom-insertion/2
				if (container != null) {
					container.appendChild(tag);
				}
				
				var key,
					value;
				for (key in attr) {
				
					/* if !SAFE
					if (hasOwnProp.call(attr, key) === false) {
						continue;
					}
					*/
				
					if (is_Function(attr[key])) {
						value = attr[key]('attr', model, ctx, tag, controller, key);
						if (value instanceof Array) {
							value = value.join('');
						}
				
					} else {
						value = attr[key];
					}
				
					// null or empty string will not be handled
					if (value) {
						if (is_Function(custom_Attributes[key])) {
							custom_Attributes[key](node, value, model, ctx, tag, controller, container);
						} else {
							tag.setAttribute(key, value);
						}
					}
				}
		
				return tag;
			}
			
		}());
		// end:source type.node.js
		// source type.component.js
		var build_compo;
		
		(function(){
			
			
			build_compo = function(node, model, ctx, container, controller, childs){
				
				var compoName = node.tagName,
					Handler;
				
				if (node.controller != null) 
					Handler = node.controller;
				
				if (Handler == null) 
					Handler = custom_Tags[compoName];
				
				if (Handler == null) 
					return build_NodeAsCompo(node, model, ctx, container, controller, childs);
				
				
				var isStatic = false,
					handler, attr, key;
				
				if (typeof Handler === 'function') {
					handler = new Handler(model);
				} else{
					handler = Handler;
					isStatic = true;
				}
				
				var fn = isStatic
					? build_Static
					: build_Component
					;
				
				return fn(handler, node, model, ctx, container, controller, childs);
			}
			
			
			// PRIVATE
			
			function build_Component(compo, node, model, ctx, container, controller, childs){
				
				var attr, key;
				
				compo.compoName = node.tagName;
				compo.attr = attr = attr_extend(compo.attr, node.attr);
				compo.parent = controller;
				compo.ID = ++builder_componentID;
				
				if (compo.model == null) 
					compo.model = model;
				
				if (compo.nodes == null) 
					compo.nodes = node.nodes;
				
				for (key in attr) {
					if (typeof attr[key] === 'function') 
						attr[key] = attr[key]('attr', model, ctx, container, controller, key);
				}
			
				if (listeners != null) 
					listeners_emit('compoCreated', compo, model, ctx, container);
					
			
				if (typeof compo.renderStart === 'function') 
					compo.renderStart(model, ctx, container);
				
				
				controller_pushCompo(controller, compo);
				
				if (compo.async === true) {
					compo.await(build_resumeDelegate(compo, model, ctx, container, childs));
					return null;
				}
				
				if (compo.tagName != null) {
					compo.nodes = {
						tagName: compo.tagName,
						attr: compo.attr,
						nodes: compo.nodes,
						type: 1
					};
				}
				
				
				if (typeof compo.render === 'function') {
					
					compo.render(compo.model, ctx, container);
					// Overriden render behaviour - do not render subnodes
					return null;
				}
			
				return compo;
			}
			
			
			function build_Static(static_, node, model, ctx, container, controller, childs) {
				var Ctor = static_.__Ctor,
					wasRendered = false,
					elements,
					compo,
					
					clone;
				
				if (Ctor) {
					clone = new Ctor(node, controller);
				}
				else {
					clone = static_;
					
					for (var key in node) 
						clone[key] = node[key];
					
					clone.parent = controller;
				}
				
				var attr = clone.attr;
				if (attr != null) {
					for (var key in attr) {
						if (typeof attr[key] === 'function') 
							attr[key] = attr[key]('attr', model, ctx, container, controller, key);
					}
				}
				
				if (is_Function(clone.renderStart)) 
					clone.renderStart(model, ctx, container, controller, childs);
				
				if (is_Function(clone.render)){
					wasRendered = true;
					elements = clone.render(model, ctx, container, controller, childs);
					arr_pushMany(childs, elements);
					
					if (is_Function(clone.renderEnd))
						compo = clone.renderEnd(elements, model, ctx, container, controller);
				}
					
				controller_pushCompo(controller, compo || clone);
				return wasRendered
					? null
					: clone
					;
			
			}
			
			
			function build_NodeAsCompo(node, model, ctx, container, controller, childs){
				node.ID = ++builder_componentID;
				
				controller_pushCompo(controller, node);
				
				if (node.model == null) 
					node.model = model;
				
				var els = node.elements = [];
				builder_build(node.nodes, node.model, ctx, container, node, els);
				
				if (childs != null && els.length !== 0)
					arr_pushMany(childs, els);
		
				return null;
			}
			
		}());
		
		// end:source type.component.js
		
	
		builder_build = function(node, model, ctx, container, controller, childs) {
		
			if (node == null) 
				return container;
			
			var type = node.type,
				elements,
				key,
				value,
				j, jmax;
			
			if (controller == null) 
				controller = new Component();
				
			if (type == null){
				// in case if node was added manually, but type was not set
				
				if (node instanceof Array) {
					type = 10
				}
				else if (node.tagName != null){
					type = 1;
				}
				else if (node.content != null){
					type = 2;
				}
			}
			
			if (type == 1 && custom_Tags[node.tagName] != null) {
				// check if the tag name was overriden
				type = 4;
			}
		
			if (container == null && type !== 1) 
				container = document.createDocumentFragment();
			
			// Dom.SET
			if (type === 10) {
				
				j = 0;
				jmax = node.length;
				
				for(; j < jmax; j++) {
					builder_build(node[j], model, ctx, container, controller, childs);
				}
				return container;
			}
		
			// Dom.STATEMENT
			if (type === 15) {
				var Handler = custom_Statements[node.tagName];
				if (Handler == null) {
					
					if (custom_Tags[node.tagName] != null) {
						// Dom.COMPONENT
						type = 4;
					} else {
						console.error('<mask: statement is undefined', node.tagName);
						return container;
					}
					
				}
				
				if (type === 15) {
					
					Handler.render(node, model, ctx, container, controller, childs);
					return container;
				}
			}
		
			// Dom.NODE
			if (type === 1) {
				
				if (node.tagName === 'else') 
					return container;
		
				container = build_node(node, model, ctx, container, controller, childs);
				childs = null;
			}
		
			// Dom.TEXTNODE
			if (type === 2) {
				
				build_textNode(node, model, ctx, container, controller);
				return container;
			}
		
			// Dom.COMPONENT
			if (type === 4) {
		
				controller = build_compo(node, model, ctx, container, controller, childs);
				
				if (controller == null) 
					return container;
				
				elements = [];
				node = controller;
				
				if (controller.model !== model && controller.model != null) 
					model = controller.model;
				
			}
		
			var nodes = node.nodes;
			if (nodes != null) {
		
				if (childs != null && elements == null)
					elements = childs;
				
				var isarray = nodes instanceof Array,
					length = isarray === true ? nodes.length : 1,
					i = 0,
					childNode = null;
		
				for (; i < length; i++) {
					childNode = isarray === true
						? nodes[i]
						: nodes;
					
					builder_build(childNode, model, ctx, container, controller, elements);
				}
		
			}
		
			if (type === 4) {
				
				// use or override custom attr handlers
				// in Compo.handlers.attr object
				// but only on a component, not a tag controller
				if (node.tagName == null && node.compoName !== '%') {
					var attrHandlers = node.handlers && node.handlers.attr,
						attrFn,
						val,
						key;
						
					for (key in node.attr) {
						
						val = node.attr[key];
						
						if (val == null) 
							continue;
						
						attrFn = null;
						
						if (attrHandlers != null && is_Function(attrHandlers[key])) 
							attrFn = attrHandlers[key];
						
						if (attrFn == null && custom_Attributes[key] != null) 
							attrFn = custom_Attributes[key];
						
						if (attrFn != null) 
							attrFn(node, val, model, ctx, elements[0], controller);
					}
				}
				
				if (is_Function(node.renderEnd)) 
					node.renderEnd(elements, model, ctx, container);
				
			}
		
			if (childs != null && elements != null && childs !== elements)
				arr_pushMany(childs, elements);
			
		
			return container;
		};
		
		
		
	}(custom_Attributes, custom_Tags, Dom.Component));
	// end:source /src/build/builder.dom.js
	// source /src/mask.js
	
	/**
	 *  mask
	 *
	 **/
	
	var cache = {},
		Mask = {
	
			/**
			 *	mask.render(template[, model, ctx, container = DocumentFragment, controller]) -> container
			 * - template (String | MaskDOM): Mask String or Mask DOM Json template to render from.
			 * - model (Object): template values
			 * - ctx (Object): can store any additional information, that custom handler may need,
			 * this object stays untouched and is passed to all custom handlers
			 * - container (IAppendChild): container where template is rendered into
			 * - controller (Object): instance of an controller that own this template
			 *
			 *	Create new Document Fragment from template or append rendered template to container
			 **/
			render: function (template, model, ctx, container, controller) {
	
				// if DEBUG
				if (container != null && typeof container.appendChild !== 'function'){
					console.error('.render(template[, model, ctx, container, controller]', 'Container should implement .appendChild method');
					console.warn('Args:', arguments);
				}
				// endif
	
				if (typeof template === 'string') {
					if (hasOwnProp.call(cache, template)){
						/* if Object doesnt contains property that check is faster
						then "!=null" http://jsperf.com/not-in-vs-null/2 */
						template = cache[template];
					}else{
						template = cache[template] = parser_parse(template);
					}
				}
				
				if (ctx == null) {
					ctx = {};
				}
				
				return builder_build(template, model, ctx, container, controller);
			},
	
			/* deprecated, renamed to parse */
			compile: parser_parse,
	
			/**
			 *	mask.parse(template) -> MaskDOM
			 * - template (String): string to be parsed into MaskDOM
			 *
			 * Create MaskDOM from Mask markup
			 **/
			parse: parser_parse,
	
			build: builder_build,
			/**
			 * mask.registerHandler(tagName, tagHandler) -> void
			 * - tagName (String): Any tag name. Good practice for custom handlers it when its name begins with ':'
			 * - tagHandler (Function|Object):
			 *
			 *	When Mask.Builder matches the tag binded to this tagHandler, it -
			 *	creates instances of the class(in case of Function) or uses specified object.
			 *	Shallow copies -
			 *		.nodes(MaskDOM) - Template Object of this node
			 *		.attr(Object) - Attributes of this node
			 *	And calls
			 *		.renderStart(model, ctx, container)
			 *		.renderEnd(elements, model, ctx, container)
			 *
			 *	Custom Handler now can handle rendering of underlined nodes.
			 *	The most simple example to continue rendering is:
			 *	mask.render(this.nodes, model, container, ctx);
			 **/
			registerHandler: customTag_register,
			/**
			 *	mask.getHandler(tagName) -> Function | Object
			 * - tagName (String):
			 *
			 *	Get Registered Handler
			 **/
			getHandler: function (tagName) {
				return tagName != null
					? custom_Tags[tagName]
					: custom_Tags
					;
			},
			
			registerStatement: function(name, handler){
				//@TODO should it be not allowed to override system statements, if, switch?
				
				custom_Statements[name] = is_Function(handler)
					? { render: handler }
					: handler
					;
			},
			
			getStatement: function(name){
				return name != null
					? custom_Statements[name]
					: custom_Statements
					;
			},
			
			/**
			 * mask.registerAttrHandler(attrName, mix, Handler) -> void
			 * - attrName (String): any attribute string name
			 * - mix (String | Function): Render Mode or Handler Function if 'both'
			 * - Handler (Function)
			 *
			 * Handler Interface, <i>(similar to Utility Interface)</i>
			 * ``` customAttribute(maskNode, attributeValue, model, ctx, element, controller) ```
			 *
			 * You can change do any changes to maskNode's template, current element value,
			 * controller, model.
			 *
			 * Note: Attribute wont be set to an element.
			 **/
			registerAttrHandler: function(attrName, mix, Handler){
				if (is_Function(mix)) {
					Handler = mix;
				}
				
				custom_Attributes[attrName] = Handler;
			},
			
			getAttrHandler: function(attrName){
				return attrName != null
					? custom_Attributes[attrName]
					: custom_Attributes;
			},
			/**
			 *	mask.registerUtil(utilName, mix) -> void
			 * - utilName (String): name of the utility
			 * - mix (Function, Object): Util Handler
			 *
			 *	Register Util Handler. Template Example: '~[myUtil: value]'
			 *
			 *	Function interface:
			 *	```
			 *	function(expr, model, ctx, element, controller, attrName, type);
			 *	```
			 *
			 *	- value (String): string from interpolation part after util definition
			 *	- model (Object): current Model
			 *	- type (String): 'attr' or 'node' - tells if interpolation is in TEXTNODE value or Attribute
			 *	- ctx (Object): Context Object
			 *	- element (HTMLNode): current html node
			 *	- name (String): If interpolation is in node attribute, then this will contain attribute name
			 *
			 *  Object interface:
			 *  ```
			 *  {
			 *  	nodeRenderStart: function(expr, model, ctx, element, controller){}
			 *  	node: function(expr, model, ctx, element, controller){}
			 *
			 *  	attrRenderStart: function(expr, model, ctx, element, controller, attrName){}
			 *  	attr: function(expr, model, ctx, element, controller, attrName){}
			 *  }
			 *  ```
			 *
			 *	This diff nodeRenderStart/node is needed to seperate util logic.
			 *	Mask in node.js will call only node-/attrRenderStart,
			 *  
			 **/
			
			registerUtil: customUtil_register,
			//////function(utilName, mix){
			//////	if (typeof mix === 'function') {
			//////		custom_Utils[utilName] = mix;
			//////		return;
			//////	}
			//////	
			//////	if (typeof mix.process !== 'function') {
			//////		mix.process = function(expr, model, ctx, element, controller, attrName, type){
			//////			if ('node' === type) {
			//////				
			//////				this.nodeRenderStart(expr, model, ctx, element, controller);
			//////				return this.node(expr, model, ctx, element, controller);
			//////			}
			//////			
			//////			// asume 'attr'
			//////			
			//////			this.attrRenderStart(expr, model, ctx, element, controller, attrName);
			//////			return this.attr(expr, model, ctx, element, controller, attrName);
			//////		};
			//////	
			//////	}
			//////	
			//////	custom_Utils[utilName] = mix;
			//////},
			
			getUtil: customUtil_get,
			//////function(util){
			//////	return util != null
			//////		? custom_Utils[util]
			//////		: custom_Utils;
			//////},
			
			$utils: customUtil_$utils,
			
			registerUtility: function (utilityName, fn) {
				// if DEBUG
				console.warn('@registerUtility - deprecated - use registerUtil(utilName, mix)', utilityName);
				// endif
				this.registerUtility = this.registerUtil;
				this.registerUtility(utilityName, fn);
			},
			
			getUtility: function(util){
				// if DEBUG
				console.warn('@getUtility - deprecated - use getUtil(utilName)', util);
				// endif
				this.getUtility = this.getUtil;
				
				return this.getUtility();
			},
			/**
			 * mask.clearCache([key]) -> void
			 * - key (String): template to remove from cache
			 *
			 *	Mask Caches all templates, so this function removes
			 *	one or all templates from cache
			 **/
			clearCache: function(key){
				if (typeof key === 'string'){
					delete cache[key];
				}else{
					cache = {};
				}
			},
	
			Utils: {
				
				/**
				 * mask.Util.Expression -> ExpressionUtil
				 *
				 * [[ExpressionUtil]]
				 **/
				Expression: ExpressionUtil,
	
				/**
				 *	mask.Util.getProperty(model, path) -> value
				 *	- model (Object | value)
				 *	- path (String): Property or dot chainable path to retrieve the value
				 *		if path is '.' returns model itself
				 *
				 *	```javascript
				 *	mask.render('span > ~[.]', 'Some string') // -> <span>Some string</span>
				 *	```
				 **/
				getProperty: obj_getProperty,
				
				ensureTmplFn: Parser.ensureTemplateFunction
			},
			Dom: Dom,
			
			// if DEBUG
			plugin: function(source){
				eval(source);
			},
			// endif
			
			on: function(event, fn){
				if (listeners == null){
					listeners = {};
				}
	
				(listeners[event] || (listeners[event] = [])).push(fn);
			},
	
			/*
			 *	Stub for reload.js, which will be used by includejs.autoreload
			 */
			delegateReload: function(){},
	
			/**
			 *	mask.setInterpolationQuotes(start,end) -> void
			 * -start (String): Must contain 2 Characters
			 * -end (String): Must contain 1 Character
			 *
			 * Starting from 0.6.9 mask uses ~[] for string interpolation.
			 * Old '#{}' was changed to '~[]', while template is already overloaded with #, { and } usage.
			 *
			 **/
			setInterpolationQuotes: Parser.setInterpolationQuotes,
			
			setCompoIndex: function(index){
				builder_componentID = index;
			},
			
			cfg: function(){
				var args = arguments;
				if (args.length === 0) {
					return __cfg;
				}
				
				var key, value;
				
				if (args.length === 2) {
					key = args[0];
					
					__cfg[key] = args[1];
					return;
				}
				
				var obj = args[0];
				if (typeof obj === 'object') {
					
					for (key in obj) {
						__cfg[key] = obj[key]
					}
				}
			}
		};
	
	
	/**	deprecated
	 *	mask.renderDom(template[, model, container, ctx]) -> container
	 *
	 * Use [[mask.render]] instead
	 * (to keep backwards compatiable)
	 **/
	Mask.renderDom = Mask.render;
	
	// end:source /src/mask.js



	// source /src/formatter/stringify.lib.js
	(function(mask){
	
	
		// source stringify.js
		
		var mask_stringify;
		
		(function() {
			
				
			//settings (Number | Object) - Indention Number (0 - for minification)
			mask_stringify = function(input, settings) {
				if (input == null) 
					return '';
				
				if (typeof input === 'string') 
					input = mask.parse(input);
				
				if (settings == null) {
					_indent = 0;
					_minimize = true;
				} else  if (typeof settings === 'number'){
					_indent = settings;
					_minimize = _indent === 0;
				} else{
					_indent = settings && settings.indent || 4;
					_minimize = _indent === 0 || settings && settings.minimizeAttributes;
				}
		
		
				return run(input);
			};
		
		
			var _minimize,
				_indent,
				Dom = mask.Dom;
		
			function doindent(count) {
				var output = '';
				while (count--) {
					output += ' ';
				}
				return output;
			}
		
		
		
			function run(node, indent, output) {
		
				var outer, i;
		
				if (indent == null) 
					indent = 0;
				
		
				if (output == null) {
					outer = true;
					output = [];
				}
		
				var index = output.length;
		
				if (node.type === Dom.FRAGMENT){
					node = node.nodes;
				}
		
				if (node instanceof Array) {
					for (i = 0; i < node.length; i++) {
						processNode(node[i], indent, output);
					}
				} else {
					processNode(node, indent, output);
				}
		
		
				var spaces = doindent(indent);
				for (i = index; i < output.length; i++) {
					output[i] = spaces + output[i];
				}
		
				if (outer) {
					return output.join(_indent === 0 ? '' : '\n');
				}
		
			}
		
			function processNode(node, currentIndent, output) {
				if (typeof node.content === 'string') {
					output.push(wrapString(node.content));
					return;
				}
		
				if (typeof node.content === 'function'){
					output.push(wrapString(node.content()));
					return;
				}
		
				if (isEmpty(node)) {
					output.push(processNodeHead(node) + ';');
					return;
				}
		
				if (isSingle(node)) {
					var next = _minimize ? '>' : ' > ';
					output.push(processNodeHead(node) + next);
					run(getSingle(node), _indent, output);
					return;
				}
		
				output.push(processNodeHead(node) + '{');
				run(node.nodes, _indent, output);
				output.push('}');
				return;
			}
		
			function processNodeHead(node) {
				var tagName = node.tagName,
					_id = node.attr.id || '',
					_class = node.attr['class'] || '';
		
		
				if (typeof _id === 'function')
					_id = _id();
				
				if (typeof _class === 'function')
					_class = _class();
				
		
				if (_id) {
					
					_id = _id.indexOf(' ') !== -1
						? ''
						: '#' + _id
						;
				}
		
				if (_class) 
					_class = '.' + _class.split(' ').join('.');
				
		
				var attr = '';
		
				for (var key in node.attr) {
					if (key === 'id' || key === 'class') {
						// the properties was not deleted as this template can be used later
						continue;
					}
					var value = node.attr[key];
		
					if (typeof value === 'function')
						value = value();
					
		
					if (_minimize === false || /[^\w_$\-\.]/.test(value))
						value = wrapString(value);
					
		
					attr += ' ' + key;
					
					if (key !== value)
						attr += '=' + value;
				}
		
				if (tagName === 'div' && (_id || _class)) 
					tagName = '';
				
				var expr = '';
				if (node.expression) 
					expr = '(' + node.expression + ')';
					
				return tagName
					+ _id
					+ _class
					+ attr
					+ expr;
			}
		
		
			function isEmpty(node) {
				return node.nodes == null || (node.nodes instanceof Array && node.nodes.length === 0);
			}
		
			function isSingle(node) {
				return node.nodes && (node.nodes instanceof Array === false || node.nodes.length === 1);
			}
		
			function getSingle(node) {
				if (node.nodes instanceof Array) 
					return node.nodes[0];
				
				return node.nodes;
			}
		
			function wrapString(str) {
				
				if (str.indexOf("'") === -1) 
					return "'" + str.trim() + "'";
				
				if (str.indexOf('"') === -1) 
					return '"' + str.trim() + '"';
				
		
				return '"' + str.replace(/"/g, '\\"').trim() + '"';
			}
		
		
		}());
		
		// end:source stringify.js
	
		mask.stringify = mask_stringify;
	
	}(Mask));
	
	// end:source /src/formatter/stringify.lib.js

	/* Handlers */

	// source /src/handlers/sys.js
	(function(mask) {
	
		function Sys() {
			this.attr = {
				'debugger': null,
				'use': null,
				'repeat': null,
				'if': null,
				'else': null,
				'each': null,
				'log': null,
				'visible': null,
				'model': null
			};
			
			this.model = null;
			this.modelRef = null;
			this.nodes = null;
			this.parent = null;
			this.container = null;
			this.template = null;
		}
	
		mask.registerHandler('%', Sys);
	
		Sys.prototype = {
			
			renderStart: function(model, ctx, container) {
				var attr = this.attr;
	
				// foreach is deprecated
				if (attr['each'] != null || attr['foreach'] != null) {
					each(this, model, ctx, container);
					return;
				}
				
				if (attr['if'] != null) {
					this.state = ExpressionUtil.eval(attr['if'], model, ctx, this.parent);
					if (!this.state) {
						this.nodes = null;
					}
					return;
				}
	
				if (attr['else'] != null) {
					var compos = this.parent.components,
						prev = compos && compos[compos.length - 1];
	
					if (prev != null && prev.compoName === '%' && prev.attr['if'] != null) {
	
						if (prev.state) {
							this.nodes = null;
						}
						return;
					}
					console.error('Previous Node should be "% if=\'condition\'"', prev, this.parent);
					return;
				}
				
				if (attr['use'] != null) {
					var use = attr['use'];
					this.model = obj_getProperty(model, use);
					this.modelRef = use;
					return;
				}
	
				if (attr['debugger'] != null) {
					debugger;
					return;
				}
				
				if (attr['visible'] != null) {
					var state = ExpressionUtil.eval(attr.visible, model, ctx, this.parent);
					if (!state) {
						this.nodes = null;
					}
					return;
				}
	
				if (attr['log'] != null) {
					var key = attr.log,
						value = obj_getProperty(model, key);
	
					console.log('Key: %s, Value: %s', key, value);
					return;
				}
	
				if (attr['repeat'] != null) {
					repeat(this, model, ctx, container);
				}
	
			},
			render: null,
			renderEnd: null,
			append: null
		};
	
	
		function each(compo, model, ctx, container){
			
			if (compo.nodes == null)
				Compo.ensureTemplate(compo);
			
	
			var prop = compo.attr.each || compo.attr.foreach,
				array = ExpressionUtil.eval(prop, model, ctx, compo),
				nodes = compo.nodes
				;
			
			compo.nodes = null;
			//// - deprecate - use special accessors to reach compos
			////if (array == null) {
			////	var parent = compo;
			////	while (parent != null && array == null) {
			////		array = obj_getProperty(parent, prop);
			////		parent = parent.parent;
			////	}
			////}
			
			if (array == null)
				return;
			
			// enumerate over an object as array of {key, value}s
			if (typeof array.length !== 'number') 
				array = obj_toDictionary(array);
			
			
			compo.nodes = [];
			compo.model = array;
			compo.modelRef = prop;
			
			compo.template = nodes;
			compo.container = container;
			
	
			
			var imax = array.length,
				i = -1;
				
			if (imax == null) 
				return;
				
			while (++i < imax) {
				compo.nodes[i] = compo_init(
					'%.each.item',
					nodes,
					array[i],
					i,
					container,
					compo
				);
			}
	
			//= methods
			compo.append = ListProto.append;
		}
	
		function repeat(compo, model, cntx, container) {
			var repeat = compo.attr.repeat.split('..'),
				index = +repeat[0],
				length = +repeat[1],
				nodes = compo.nodes,
				x;
	
			// if DEBUG
			(isNaN(index) || isNaN(length)) && console.error('Repeat attribute(from..to) invalid', compo.attr.repeat);
			// endif
	
			compo.nodes = [];
	
			var i = -1;
			while (++i < length) {
				compo.nodes[i] = compo_init(
					'%.repeat.item',
					nodes,
					model,
					i,
					container,
					compo
				);
			}
		}
	
		function compo_init(name, nodes, model, index, container, parent) {
			
			return {
				type: Dom.COMPONENT,
				compoName: name,
				attr: {},
				nodes: nodes,
				model: model,
				container: container,
				parent: parent,
				index: index
			};
			
			//var item = new Component();
			//item.nodes = nodes;
			//item.model = model;
			//item.container = container;
			//item.parent = parent;
			//item.modelRef = modelRef;
			//
			//return item;
		}
	
	
		var ListProto = {
			append: function(model){
				var item = new Component();
				item.nodes = this.template;
				item.model = model;
	
				mask.render(item, model, null, this.container, this);
			}
		};
	
	}(Mask));
	
	// end:source /src/handlers/sys.js
	// source /src/handlers/utils.js
	(function(mask) {
	
		/**
		 *	:template
		 *
		 *	Child nodes wont be rendered. You can resolve it as custom component and get its nodes for some use
		 *
		 **/
	
		var TemplateCollection = {};
	
		mask.templates = TemplateCollection;
	
		mask.registerHandler(':template', TemplateHandler);
	
		function TemplateHandler() {}
		TemplateHandler.prototype.render = function() {
			if (this.attr.id == null) {
				console.warn('Template Should be defined with ID attribute for future lookup');
				return;
			}
	
			TemplateCollection[this.attr.id] = this.nodes;
		};
	
	
		mask.registerHandler(':import', ImportHandler);
	
		function ImportHandler() {}
		ImportHandler.prototype = {
			constructor: ImportHandler,
			attr: null,
			template: null,
	
			renderStart: function() {
				if (this.attr.id) {
	
					this.nodes = this.template;
	
					if (this.nodes == null) {
						this.nodes = TemplateCollection[this.attr.id];
					}
	
					// @TODO = optimize, not use jmask
					if (this.nodes == null) {
						var parent = this,
							template,
							selector = ':template[id='+this.attr.id+']';
	
						while (template == null && (parent = parent.parent) != null) {
							if (parent.nodes != null) {
								template = jmask(parent.nodes).filter(selector).get(0);
							}
						}
	
						if (template != null) {
							this.nodes = template.nodes;
						}
	
	
					}
	
					// @TODO = load template from remote
					if (this.nodes == null) {
						console.warn('Template could be not imported', this.attr.id);
					}
				}
			}
		};
	
	
		/**
		 *	:html
		 *
		 *	Shoud contain literal, that will be added as innerHTML to parents node
		 *
		 **/
		mask.registerHandler(':html', HTMLHandler);
	
		function HTMLHandler() {}
		
		HTMLHandler.prototype = {
			mode: 'server:all',
			render: function(model, cntx, container) {
	
				var html = jmask(this.nodes).text(model, cntx, this);
		
				if (!html) {
					console.warn('No HTML for node', this);
					return;
				}
				
				if (container.insertAdjacentHTML) {
					container.insertAdjacentHTML('beforeend', html);
					return;
				}
			
				this.toHtml = function(){
					return html;
				};
				
			}
		};
	
	}(Mask));
	
	// end:source /src/handlers/utils.js

	// source /src/libs/compo.js
	
	var Compo = exports.Compo = (function(mask){
		'use strict';
		// source ../src/scope-vars.js
		var Dom = mask.Dom,
		
			_array_slice = Array.prototype.slice,
			_Array_splice = Array.prototype.splice,
			_Array_indexOf = Array.prototype.indexOf,
			
			_mask_ensureTmplFnOrig = mask.Utils.ensureTmplFn,
			
			domLib,
			Class	
			;
		
		(function(){
			
			var scope = [global.atma, exports, global];
			
			function resolve() {
				
				var args = arguments,
					j = scope.length,
					
					obj, r, i;
				
				while (--j > -1) {
					obj = scope[j];
					if (obj == null) 
						continue;
					
					i = args.length;
					while (--i > -1){
						r = obj[args[i]];
						if (r != null) 
							return r;
					}
				}
			}
			
			domLib = resolve('jQuery', 'Zepto', '$');
			Class = resolve('Class');
		}());
		
		// if DEBUG
		if (global.document != null && domLib == null) {
			
			console.warn('jQuery-Zepto-Kimbo etc. was not loaded before MaskJS:Compo, please use Compo.config.setDOMLibrary to define dom engine');
		}
		// endif
		
		function _mask_ensureTmplFn(value) {
			return typeof value !== 'string'
				? value
				: _mask_ensureTmplFnOrig(value)
				;
		}
		// end:source ../src/scope-vars.js
	
		// source ../src/util/is.js
		function is_Function(x) {
			return typeof x === 'function';
		}
		
		function is_Object(x) {
			return x != null
				&& typeof x === 'object';
		}
		
		function is_Array(arr) {
			return arr != null
				&& typeof arr === 'object'
				&& typeof arr.length === 'number'
				&& typeof arr.splice === 'function'
				;
		}
		
		function is_String(x) {
			return typeof x === 'string';
		}
		
		function is_notEmptyString(x) {
			return typeof x === 'string'
				&& x !== '';
		}
		
		function is_rawObject(obj) {
			if (obj == null) 
				return false;
			
			if (typeof obj !== 'object')
				return false;
			
			return obj.constructor === Object;
		}
		
		// end:source ../src/util/is.js
		// source ../src/util/polyfill.js
		if (!Array.prototype.indexOf) {
			Array.prototype.indexOf = function(x){
				for (var i = 0, imax = this.length; i < imax; i++){
					if (this[i] === x)
						return i;
				}
				
				return -1;
			}
		}
		// end:source ../src/util/polyfill.js
		// source ../src/util/object.js
		var obj_extend,
			obj_copy
			;
		(function(){
			
			
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
			
			obj_copy = function(object) {
				var copy = {},
					key;
			
				for (key in object) {
					copy[key] = object[key];
				}
			
				return copy;
			};
			
			
		}());
		
		// end:source ../src/util/object.js
		// source ../src/util/array.js
		
		var arr_each,
			arr_remove
			;
		
		(function(){
		
			arr_each = function(array, fn){
				var imax = array.length,
					i = -1;
				while ( ++i < imax ){
					fn(array[i], i);
				}
			};
			
			arr_remove = function(array, child){
				if (array == null){
					console.error('Can not remove myself from parent', child);
					return;
				}
			
				var index = array.indexOf(child);
			
				if (index === -1){
					console.error('Can not remove myself from parent', child, index);
					return;
				}
			
				array.splice(index, 1);
			};
			
			
		}());
		
		// end:source ../src/util/array.js
		// source ../src/util/function.js
		var fn_proxy,
			fn_apply
			;
		
		(function(){
		
			fn_proxy = function(fn, ctx) {
			
				return function() {
					return fn_apply(fn, ctx, arguments);
				};
			};
			
			fn_apply = function(fn, ctx, arguments_){
				
				switch (arguments_.length) {
					case 0:
						return fn.call(ctx);
					case 1:
						return fn.call(ctx, arguments_[0]);
					case 2:
						return fn.call(ctx,
							arguments_[0],
							arguments_[1]);
					case 3:
						return fn.call(ctx,
							arguments_[0],
							arguments_[1],
							arguments_[2]);
					case 4:
						return fn.call(ctx,
							arguments_[0],
							arguments_[1],
							arguments_[2],
							arguments_[3]);
				};
				
				return fn.apply(ctx, arguments_);
			};
			
		}());
		
		// end:source ../src/util/function.js
		// source ../src/util/selector.js
		var selector_parse,
			selector_match
			;
		
		(function(){
			
			selector_parse = function(selector, type, direction) {
				if (selector == null)
					console.error('<compo>selector is undefined', type);
				
				if (typeof selector === 'object')
					return selector;
				
			
				var key, prop, nextKey;
			
				if (key == null) {
					switch (selector[0]) {
					case '#':
						key = 'id';
						selector = selector.substring(1);
						prop = 'attr';
						break;
					case '.':
						key = 'class';
						selector = sel_hasClassDelegate(selector.substring(1));
						prop = 'attr';
						break;
					default:
						key = type === Dom.SET ? 'tagName' : 'compoName';
						break;
					}
				}
			
				if (direction === 'up') {
					nextKey = 'parent';
				} else {
					nextKey = type === Dom.SET ? 'nodes' : 'components';
				}
			
				return {
					key: key,
					prop: prop,
					selector: selector,
					nextKey: nextKey
				};
			};
			
			selector_match = function(node, selector, type) {
				
				if (is_String(selector)) {
					
					if (type == null) 
						type = Dom[node.compoName ? 'CONTROLLER' : 'SET'];
					
					selector = selector_parse(selector, type);
				}
			
				var obj = selector.prop ? node[selector.prop] : node;
				if (obj == null) 
					return false;
				
				if (is_Function(selector.selector)) 
					return selector.selector(obj[selector.key]);
				
				// regexp
				if (selector.selector.test != null) 
					return selector.selector.test(obj[selector.key]);
				
				//! == - to match int and string
				return obj[selector.key] == selector.selector;
			}
			
			// PRIVATE
			
			function sel_hasClassDelegate(matchClass) {
				return function(className){
					return sel_hasClass(className, matchClass);
				};
			}
			
			// [perf] http://jsperf.com/match-classname-indexof-vs-regexp/2
			function sel_hasClass(className, matchClass, index) {
				if (typeof className !== 'string')
					return false;
				
				if (index == null) 
					index = 0;
					
				index = className.indexOf(matchClass, index);
			
				if (index === -1)
					return false;
			
				if (index > 0 && className.charCodeAt(index - 1) > 32)
					return sel_hasClass(className, matchClass, index + 1);
			
				var class_Length = className.length,
					match_Length = matchClass.length;
					
				if (index < class_Length - match_Length && className.charCodeAt(index + match_Length) > 32)
					return sel_hasClass(className, matchClass, index + 1);
			
				return true;
			}
			
		}());
		
		// end:source ../src/util/selector.js
		// source ../src/util/traverse.js
		var find_findSingle;
		
		(function(){
		
			
			find_findSingle = function(node, matcher) {
				
				if (is_Array(node)) {
					
					var imax = node.length,
						i = -1,
						result;
					
					while( ++i < imax ){
						
						result = find_findSingle(node[i], matcher);
						
						if (result != null) 
							return result;
					}
					
					return null;
				}
			
				if (selector_match(node, matcher))
					return node;
				
				node = node[matcher.nextKey];
				
				return node == null
					? null
					: find_findSingle(node, matcher)
					;
			}
			
			
		}());
		
		// end:source ../src/util/traverse.js
		// source ../src/util/dom.js
		var dom_addEventListener,
			
			node_tryDispose,
			node_tryDisposeChildren
			;
			
		(function(){
		
			dom_addEventListener = function(element, event, listener) {
			
				if (EventDecorator != null) 
					event = EventDecorator(event);
				
				// allows custom events - in x-signal, for example
				if (domLib != null) 
					return domLib(element).on(event, listener);
					
				
				if (element.addEventListener != null) 
					return element.addEventListener(event, listener, false);
				
				if (element.attachEvent) 
					element.attachEvent('on' + event, listener);
				
			};
		
			node_tryDispose = function(node){
				if (node.hasAttribute('x-compo-id')) {
					
					var id = node.getAttribute('x-compo-id'),
						compo = Anchor.getByID(id)
						;
					
					if (compo) {
						
						if (compo.$ == null || compo.$.length === 1) {
							compo_dispose(compo);
							compo_detachChild(compo);
							return;
						}
						
						var i = _Array_indexOf.call(compo.$, node);
						if (i !== -1) 
							_Array_splice.call(compo.$, i, 1);
					}
				}
				
				node_tryDisposeChildren(node);
			};
			
			node_tryDisposeChildren = function(node){
				
				var child = node.firstChild;
				while(child != null) {
					
					if (child.nodeType === 1) 
						node_tryDispose(child);
					
					
					child = child.nextSibling;
				}
			};
			
		}());
		
		// end:source ../src/util/dom.js
		// source ../src/util/domLib.js
		/**
		 *	Combine .filter + .find
		 */
		
		var domLib_find,
			domLib_on
			;
		
		(function(){
				
			domLib_find = function($set, selector) {
				return $set.filter(selector).add($set.find(selector));
			};
			
			domLib_on = function($set, type, selector, fn) {
			
				if (selector == null) 
					return $set.on(type, fn);
				
				$set
					.on(type, selector, fn)
					.filter(selector)
					.on(type, fn);
					
				return $set;
			};
			
		}());
		
		
		// end:source ../src/util/domLib.js
	
		// source ../src/compo/children.js
		var Children_ = {
		
			/**
			 *	Component children. Example:
			 *
			 *	Class({
			 *		Base: Compo,
			 *		Construct: function(){
			 *			this.compos = {
			 *				panel: '$: .container',  // querying with DOMLib
			 *				timePicker: 'compo: timePicker', // querying with Compo selector
			 *				button: '#button' // querying with querySelector***
			 *			}
			 *		}
			 *	});
			 *
			 */
			select: function(component, compos) {
				for (var name in compos) {
					var data = compos[name],
						events = null,
						selector = null;
		
					if (data instanceof Array) {
						selector = data[0];
						events = data.splice(1);
					}
					if (typeof data === 'string') {
						selector = data;
					}
					if (data == null || selector == null) {
						console.error('Unknown component child', name, compos[name]);
						console.warn('Is this object shared within multiple compo classes? Define it in constructor!');
						return;
					}
		
					var index = selector.indexOf(':'),
						engine = selector.substring(0, index);
		
					engine = Compo.config.selectors[engine];
		
					if (engine == null) {
						component.compos[name] = component.$[0].querySelector(selector);
					} else {
						selector = selector.substring(++index).trim();
						component.compos[name] = engine(component, selector);
					}
		
					var element = component.compos[name];
		
					if (events != null) {
						if (element.$ != null) {
							element = element.$;
						}
						
						Events_.on(component, events, element);
					}
				}
			}
		};
		
		// end:source ../src/compo/children.js
		// source ../src/compo/events.js
		var Events_ = {
			on: function(component, events, $element) {
				if ($element == null) {
					$element = component.$;
				}
		
				var isarray = events instanceof Array,
					length = isarray ? events.length : 1;
		
				for (var i = 0, x; isarray ? i < length : i < 1; i++) {
					x = isarray ? events[i] : events;
		
					if (x instanceof Array) {
						// generic jQuery .on Arguments
		
						if (EventDecorator != null) {
							x[0] = EventDecorator(x[0]);
						}
		
						$element.on.apply($element, x);
						continue;
					}
		
		
					for (var key in x) {
						var fn = typeof x[key] === 'string' ? component[x[key]] : x[key],
							semicolon = key.indexOf(':'),
							type,
							selector;
		
						if (semicolon !== -1) {
							type = key.substring(0, semicolon);
							selector = key.substring(semicolon + 1).trim();
						} else {
							type = key;
						}
		
						if (EventDecorator != null) {
							type = EventDecorator(type);
						}
		
						domLib_on($element, type, selector, fn_proxy(fn, component));
					}
				}
			}
		},
			EventDecorator = null;
		
		// end:source ../src/compo/events.js
		// source ../src/compo/events.deco.js
		var EventDecos = (function() {
		
			var hasTouch = (function() {
				if (document == null) {
					return false;
				}
				if ('createTouch' in document) {
					return true;
				}
				try {
					return !!document.createEvent('TouchEvent').initTouchEvent;
				} catch (error) {
					return false;
				}
			}());
		
			return {
		
				'touch': function(type) {
					if (hasTouch === false) {
						return type;
					}
		
					if ('click' === type) {
						return 'touchend';
					}
		
					if ('mousedown' === type) {
						return 'touchstart';
					}
		
					if ('mouseup' === type) {
						return 'touchend';
					}
		
					if ('mousemove' === type) {
						return 'touchmove';
					}
		
					return type;
				}
			};
		
		}());
		
		// end:source ../src/compo/events.deco.js
		// source ../src/compo/pipes.js
		var Pipes = (function() {
			
			var _collection = {};
		
			mask.registerAttrHandler('x-pipe-signal', 'client', function(node, attrValue, model, cntx, element, controller) {
		
				var arr = attrValue.split(';'),
					imax = arr.length,
					i = -1,
					x;
				while ( ++i < imax ) {
					x = arr[i].trim();
					if (x === '') 
						continue;
					
					var i_colon = x.indexOf(':'),
						event = x.substring(0, i_colon),
						handler = x.substring(i_colon + 1).trim(),
						dot = handler.indexOf('.'),
						
						pipe, signal;
		
					if (dot === -1) {
						console.error('define pipeName "click: pipeName.pipeSignal"');
						return;
					}
		
					pipe = handler.substring(0, dot);
					signal = handler.substring(++dot);
		
					var Handler = _handler(pipe, signal);
		
		
					// if DEBUG
					!event && console.error('Signal: event type is not set', attrValue);
					// endif
		
		
					dom_addEventListener(element, event, Handler);
		
				}
			});
		
			function _handler(pipe, signal) {
				return function(event){
					new Pipe(pipe).emit(signal, event);
				};
			}
		
		
			function pipe_attach(pipeName, controller) {
				if (controller.pipes[pipeName] == null) {
					console.error('Controller has no pipes to be added to collection', pipeName, controller);
					return;
				}
		
				if (_collection[pipeName] == null) {
					_collection[pipeName] = [];
				}
				_collection[pipeName].push(controller);
			}
		
			function pipe_detach(pipeName, controller) {
				var pipe = _collection[pipeName],
					i = pipe.length;
		
				while (--i > -1) {
					if (pipe[i] === controller) 
						pipe.splice(i, 1);
				}
		
			}
		
			function controller_remove() {
				var	controller = this,
					pipes = controller.pipes;
				for (var key in pipes) {
					pipe_detach(key, controller);
				}
			}
		
			function controller_add(controller) {
				var pipes = controller.pipes;
		
				// if DEBUG
				if (pipes == null) {
					console.error('Controller has no pipes', controller);
					return;
				}
				// endif
		
				for (var key in pipes) {
					pipe_attach(key, controller);
				}
		
				Compo.attachDisposer(controller, controller_remove.bind(controller));
			}
		
			function Pipe(pipeName) {
				if (this instanceof Pipe === false) {
					return new Pipe(pipeName);
				}
				this.pipeName = pipeName;
		
				return this;
			}
			Pipe.prototype = {
				constructor: Pipe,
				emit: function(signal){
					var controllers = _collection[this.pipeName],
						pipeName = this.pipeName,
						args;
					
					if (controllers == null) {
						//if DEBUG
						console.warn('Pipe.emit: No signals were bound to:', pipeName);
						//endif
						return;
					}
					
					/**
					 * @TODO - for backward comp. support
					 * to pass array of arguments as an Array in second args
					 *
					 * - switch to use plain arguments
					 */
					
					if (arguments.length === 2 && is_Array(arguments[1])) 
						args = arguments[1];
						
					else if (arguments.length > 1) 
						args = _array_slice.call(arguments, 1);
					
					
					var i = controllers.length,
						controller, slots, slot, called;
		
					while (--i !== -1) {
						controller = controllers[i];
						slots = controller.pipes[pipeName];
		
						if (slots == null) 
							continue;
						
						slot = slots[signal];
						if (is_Function(slot)) {
							slot.apply(controller, args);
							called = true;
						}
					}
		
					// if DEBUG
					if (!called)
						console.warn('Pipe `%s` has not slots for `%s`', pipeName, signal);
					// endif
				}
			};
		
			Pipe.addController = controller_add;
			Pipe.removeController = controller_remove;
		
			return {
				addController: controller_add,
				removeController: controller_remove,
		
				pipe: Pipe
			};
		
		}());
		
		// end:source ../src/compo/pipes.js
	
		// source ../src/compo/anchor.js
		
		/**
		 *	Get component that owns an element
		 **/
		
		var Anchor = (function(){
		
			var _cache = {};
		
			return {
				create: function(compo){
					if (compo.ID == null){
						console.warn('Component should have an ID');
						return;
					}
		
					_cache[compo.ID] = compo;
				},
				resolveCompo: function(element){
					if (element == null){
						return null;
					}
		
					var findID, currentID, compo;
					do {
		
						currentID = element.getAttribute('x-compo-id');
		
		
						if (currentID) {
		
							if (findID == null) {
								findID = currentID;
							}
		
							compo = _cache[currentID];
		
							if (compo != null) {
								compo = Compo.find(compo, {
									key: 'ID',
									selector: findID,
									nextKey: 'components'
								});
		
								if (compo != null) {
									return compo;
								}
							}
		
						}
		
						element = element.parentNode;
		
					}while(element && element.nodeType === 1);
		
		
					// if DEBUG
					findID && console.warn('No controller for ID', findID);
					// endif
					return null;
				},
				removeCompo: function(compo){
					if (compo.ID == null){
						return;
					}
					delete _cache[compo.ID];
				},
				getByID: function(id){
					return _cache[id];
				}
			};
		
		}());
		
		// end:source ../src/compo/anchor.js
		// source ../src/compo/Compo.js
		var Compo = (function() {
		
			var hasInclude = !!(global.include
				|| (typeof global.atma !== 'undefined' && global.atma.include)
				|| (typeof exports !== 'undefined' && exports.include))
				;
		
			function Compo(controller) {
				if (this instanceof Compo){
					// used in Class({Base: Compo})
					return null;
				}
		
				var klass;
		
				if (controller == null){
					controller = {};
				}
				
				if (hasInclude && global.include) 
					controller.__resource = global.include.url;
				
		
				if (controller.attr != null) {
					
					for (var key in controller.attr) {
						controller.attr[key] = _mask_ensureTmplFn(controller.attr[key]);
					}
					
				}
				
				var slots = controller.slots;
				if (slots != null) {
					for (var key in slots) {
						if (typeof slots[key] === 'string'){
							//if DEBUG
							typeof controller[slots[key]] !== 'function' && console.error('Not a Function @Slot.',slots[key]);
							// endif
							slots[key] = controller[slots[key]];
						}
					}
				}
				
				if (controller.hasOwnProperty('constructor')){
					klass = controller.constructor;
				}
		
		
				klass = compo_createConstructor(klass, controller);
		
				if (klass == null){
					klass = function CompoBase(){};
				}
		
				for(var key in Proto){
					if (controller[key] == null){
						controller[key] = Proto[key];
					}
					//- controller['base_' + key] = Proto[key];
				}
		
				klass.prototype = controller;
		
				controller = null;
		
				return klass;
			}
		
			// source Compo.util.js
			var compo_dispose,
				compo_detachChild,
				compo_ensureTemplate,
				compo_attachDisposer,
				compo_createConstructor,
				compo_removeElements
				;
			
			(function(){
				
				compo_dispose = function(compo) {
					
					if (compo.dispose != null) 
						compo.dispose();
					
					Anchor.removeCompo(compo);
				
					var compos = compo.components,
						i = (compos && compos.length) || 0;
				
					while ( --i > -1 ) {
						compo_dispose(compos[i]);
					}
				};
				
				compo_detachChild = function(childCompo){
					
					var parent = childCompo.parent;
					if (parent == null) 
						return;
					
					var arr = childCompo.$,
						elements = parent.$ || parent.elements,
						i;
						
					if (elements && arr) {
						var jmax = arr.length,
							el, j;
						
						i = elements.length;
						while( --i > -1){
							el = elements[i];
							j = jmax;
							
							while(--j > -1){
								if (el === arr[j]) {
									
									elements.splice(i, 1);
									break;
								}
							}
						}
					}
					
					var compos = parent.components;
					if (compos != null) {
						
						i = compos.length;
						while(--i > -1){
							if (compos[i] === childCompo) {
								compos.splice(i, 1);
								break;
							}
						}
				
						if (i === -1)
							console.warn('<compo:remove> - i`m not in parents collection', childCompo);
					}
				};
				
				
				
				compo_ensureTemplate = function(compo) {
					if (compo.nodes != null) 
						return;
					
					// obsolete
					if (compo.attr.template != null) {
						compo.template = compo.attr.template;
						
						delete compo.attr.template;
					}
					
					var template = compo.template;
					if (template == null) 
						return;
					
					if (is_String(template)) {
						if (template.charCodeAt(0) === 35 && /^#[\w\d_-]+$/.test(template)) {
							// #
							var node = document.getElementById(template.substring(1));
							if (node == null) {
								console.error('<compo> Template holder not found by id:', template);
								return;
							}
							template = node.innerHTML;
						}
						
						template = mask.parse(template);
					}
				
					if (typeof template === 'object') 
						compo.nodes = template;
				};
				
					
				compo_attachDisposer = function(compo, disposer) {
				
					if (compo.dispose == null) {
						compo.dispose = disposer;
						return;
					}
					
					var prev = compo.dispose;
					compo.dispose = function(){
						disposer.call(this);
						prev.call(this);
					};
				};
				
					
				
				compo_createConstructor = function(Ctor, proto) {
					var compos = proto.compos,
						pipes = proto.pipes,
						attr = proto.attr;
						
					if (compos == null
							&& pipes == null
							&& proto.attr == null) {
						
						return Ctor;
					}
				
					/* extend compos / attr to keep
					 * original prototyped values untouched
					 */
					return function CompoBase(){
				
						if (compos != null) {
							// use this.compos instead of compos from upper scope
							// : in case compos from proto was extended after
							this.compos = obj_copy(this.compos);
						}
				
						if (pipes != null) 
							Pipes.addController(this);
						
						if (attr != null) 
							this.attr = obj_copy(this.attr);
						
						if (is_Function(Ctor)) 
							Ctor.call(this);
					};
				};
				
				compo_removeElements = function(compo) {
					if (compo.$) {
						compo.$.remove();
						return;
					}
					
					var els = compo.elements;
					if (els) {
						var i = -1,
							imax = els.length;
						while ( ++i < imax ) {
							if (els[i].parentNode) 
								els[i].parentNode.removeChild(els[i]);
						}
						return;
					}
					
					var compos = compo.components;
					if (compos) {
						var i = -1,
							imax = compos.length;
						while ( ++i < imax ){
							compo_removeElements(compos[i]);
						}
					}
				}
			
				
			}());
			
			// end:source Compo.util.js
			// source Compo.static.js
			obj_extend(Compo, {
				create: function(proto){
					var klass;
			
					if (proto == null){
						proto = {};
					}
			
					if (proto.hasOwnProperty('constructor')){
						klass = proto.constructor;
					}
			
					if (klass == null){
						klass = function CompoBase(){};
					}
			
					for(var key in Proto){
						if (proto[key] == null){
							proto[key] = Proto[key];
						}
					}
			
			
					klass.prototype = proto;
			
			
					return klass;
				},
				
				createClass: function(classProto){
					
					if (classProto.attr != null) {
						
						for (var key in classProto.attr) {
							classProto.attr[key] = _mask_ensureTmplFn(classProto.attr[key]);
						}
					}
					
					if (hasInclude && global.include) 
						classProto.__resource = global.include.url;
					
					var slots = classProto.slots;
					if (slots != null) {
						for (var key in slots) {
							if (typeof slots[key] === 'string'){
								//if DEBUG
								typeof classProto[slots[key]] !== 'function' && console.error('Not a Function @Slot.',slots[key]);
								// endif
								slots[key] = classProto[slots[key]];
							}
						}
					}
					
					var ctor;
					
					if (classProto.hasOwnProperty('constructor'))
						ctor = classProto.constructor;
					
					if (ctor == null)
						ctor = classProto.Construct;
					
					classProto.Construct = compo_createConstructor(ctor, classProto);
					
					
					var Ext = classProto.Extends;
					if (Ext == null) {
						classProto.Extends = Proto
					} else if (is_Array(Ext)) {
						Ext.unshift(Proto)
					} else {
						classProto.Extends = [Proto, Ext];
					}
					
					return Class(classProto);
				},
			
				/* obsolete */
				render: function(compo, model, ctx, container) {
			
					compo_ensureTemplate(compo);
			
					var elements = [];
			
					mask.render(
						compo.tagName == null ? compo.nodes : compo,
						model,
						ctx,
						container,
						compo,
						elements
					);
			
					compo.$ = domLib(elements);
			
					if (compo.events != null) 
						Events_.on(compo, compo.events);
					
					if (compo.compos != null) 
						Children_.select(compo, compo.compos);
					
					return compo;
				},
			
				initialize: function(compo, model, ctx, container, parent) {
					
					var compoName;
			
					if (container == null){
						if (ctx && ctx.nodeType != null){
							container = ctx;
							ctx = null;
						}else if (model && model.nodeType != null){
							container = model;
							model = null;
						}
					}
			
					if (typeof compo === 'string'){
						compoName = compo;
						
						compo = mask.getHandler(compoName);
						if (!compo){
							console.error('Compo not found:', compo);
						}
					}
			
					var node = {
						controller: compo,
						type: Dom.COMPONENT,
						tagName: compoName
					};
			
					if (parent == null && container != null)
						parent = Anchor.resolveCompo(container);
					
					if (parent == null)
						parent = new Dom.Component();
					
			
					var dom = mask.render(node, model, ctx, null, parent),
						instance = parent.components[parent.components.length - 1];
			
					if (container != null){
						container.appendChild(dom);
			
						Compo.signal.emitIn(instance, 'domInsert');
					}
			
					return instance;
				},
			
				
				find: function(compo, selector){
					return find_findSingle(compo, selector_parse(selector, Dom.CONTROLLER, 'down'));
				},
				closest: function(compo, selector){
					return find_findSingle(compo, selector_parse(selector, Dom.CONTROLLER, 'up'));
				},
			
				dispose: compo_dispose,
				
				ensureTemplate: compo_ensureTemplate,
				
				attachDisposer: compo_attachDisposer,
			
				config: {
					selectors: {
						'$': function(compo, selector) {
							var r = domLib_find(compo.$, selector)
							// if DEBUG
							if (r.length === 0) 
								console.error('<compo-selector> - element not found -', selector, compo);
							// endif
							return r;
						},
						'compo': function(compo, selector) {
							var r = Compo.find(compo, selector);
							// if DEBUG
							if (r == null) 
								console.error('<compo-selector> - component not found -', selector, compo);
							// endif
							return r;
						}
					},
					/**
					 *	@default, global $ is used
					 *	IDOMLibrary = {
					 *	{fn}(elements) - create dom-elements wrapper,
					 *	on(event, selector, fn) - @see jQuery 'on'
					 *	}
					 */
					setDOMLibrary: function(lib) {
						if (domLib === lib) 
							return;
						
						domLib = lib;
						domLib_initialize();
					},
			
			
					eventDecorator: function(mix){
						if (typeof mix === 'function') {
							EventDecorator = mix;
							return;
						}
						if (typeof mix === 'string') {
							EventDecorator = EventDecos[mix];
							return;
						}
						if (typeof mix === 'boolean' && mix === false) {
							EventDecorator = null;
							return;
						}
					}
			
				},
			
				//pipes: Pipes,
				pipe: Pipes.pipe,
				
				resource: function(compo){
					var owner = compo;
					
					while (owner != null) {
						
						if (owner.resource) 
							return owner.resource;
						
						owner = owner.parent;
					}
					
					return include.instance();
				},
				
				// if DEBUG
				plugin: function(source){
					eval(source);
				},
				// endif
				
				Dom: {
					addEventListener: dom_addEventListener
				}
			});
			
			
			// end:source Compo.static.js
			// source async.js
			(function(){
				
				function _on(ctx, type, callback) {
					if (ctx[type] == null)
						ctx[type] = [];
					
					ctx[type].push(callback);
					
					return ctx;
				}
				
				function _call(ctx, type, _arguments) {
					var cbs = ctx[type];
					if (cbs == null) 
						return;
					
					for (var i = 0, x, imax = cbs.length; i < imax; i++){
						x = cbs[i];
						if (x == null)
							continue;
						
						cbs[i] = null;
						
						if (_arguments == null) {
							x();
							continue;
						}
						
						x.apply(this, _arguments);
					}
				}
				
				
				var DeferProto = {
					done: function(callback){
						return _on(this, '_cbs_done', callback);
					},
					fail: function(callback){
						return _on(this, '_cbs_fail', callback);
					},
					always: function(callback){
						return _on(this, '_cbs_always', callback);
					},
					resolve: function(){
						this.async = false;
						_call(this, '_cbs_done', arguments);
						_call(this, '_cbs_always', arguments);
					},
					reject: function(){
						this.async = false;
						_call(this, '_cbs_fail', arguments);
						_call(this, '_cbs_always');
					}
				};
				
				var CompoProto = {
					async: true,
					await: function(resume){
						this.resume = resume;
					}
				}
				
				Compo.pause = function(compo, ctx){
					
					if (ctx.async == null) {
						ctx.defers = [];
						
						ctx._cbs_done = null;
						ctx._cbs_fail = null;
						ctx._cbs_always = null;
						
						for (var key in DeferProto) {
							ctx[key] = DeferProto[key];
						}
					}
					
					ctx.async = true;
					
					for (var key in CompoProto) {
						compo[key] = CompoProto[key];
					}
					
					ctx.defers.push(compo);
					
					return function(){
						Compo.resume(compo, ctx);
					};
				}
				
				Compo.resume = function(compo, ctx){
					
					// fn can be null when calling resume synced after pause
					if (compo.resume) 
						compo.resume();
					
					compo.async = false;
					
					var busy = false;
					for (var i = 0, x, imax = ctx.defers.length; i < imax; i++){
						x = ctx.defers[i];
						
						if (x === compo) {
							ctx.defers[i] = null;
							continue;
						}
						
						if (busy === false) {
							busy = x != null;
						}
					}
					
					if (busy === false) {
						ctx.resolve();
					}
				};
				
			}());
			// end:source async.js
		
			var Proto = {
				type: Dom.CONTROLLER,
				
				tagName: null,
				compoName: null,
				nodes: null,
				attr: null,
				model: null,
				
				slots: null,
				pipes: null,
				
				compos: null,
				events: null,
				
				async: false,
				
				onRenderStart: null,
				onRenderEnd: null,
				render: null,
				renderStart: function(model, ctx, container){
		
					if (arguments.length === 1 && model != null && model instanceof Array === false && model[0] != null){
						var args = arguments[0];
						model = args[0];
						ctx = args[1];
						container = args[2];
					}
		
					if (this.nodes == null){
						compo_ensureTemplate(this);
					}
					
					if (is_Function(this.onRenderStart)){
						this.onRenderStart(model, ctx, container);
					}
		
				},
				renderEnd: function(elements, model, ctx, container){
					if (arguments.length === 1 && elements instanceof Array === false){
						var args = arguments[0];
						elements = args[0];
						model = args[1];
						ctx = args[2];
						container = args[3];
					}
		
					Anchor.create(this, elements);
		
					this.$ = domLib(elements);
		
					if (this.events != null) {
						Events_.on(this, this.events);
					}
		
					if (this.compos != null) {
						Children_.select(this, this.compos);
					}
		
					if (is_Function(this.onRenderEnd)){
						this.onRenderEnd(elements, model, ctx, container);
					}
				},
				appendTo: function(mix) {
					
					var element = typeof mix === 'string'
						? document.querySelector(mix)
						: mix
						;
					
		
					if (element == null) {
						console.warn('Compo.appendTo: parent is undefined. Args:', arguments);
						return this;
					}
		
					var els = this.$,
						i = 0,
						imax = els.length;
					for (; i < imax; i++) {
						element.appendChild(els[i]);
					}
		
					this.emitIn('domInsert');
					return this;
				},
				append: function(template, model, selector) {
					var parent;
		
					if (this.$ == null) {
						var dom = typeof template === 'string'
							? mask.compile(template)
							: template;
		
						parent = selector
							? find_findSingle(this, selector_parse(selector, Dom.CONTROLLER, 'down'))
							: this;
							
						if (parent.nodes == null) {
							this.nodes = dom;
							return this;
						}
		
						parent.nodes = [this.nodes, dom];
		
						return this;
					}
					
					var fragment = mask.render(template, model, null, null, this);
		
					parent = selector
						? this.$.find(selector)
						: this.$;
						
					
					parent.append(fragment);
					
					
					// @todo do not emit to created compos before
					this.emitIn('domInsert');
					
					return this;
				},
				find: function(selector){
					return find_findSingle(this, selector_parse(selector, Dom.CONTROLLER, 'down'));
				},
				closest: function(selector){
					return find_findSingle(this, selector_parse(selector, Dom.CONTROLLER, 'up'));
				},
				on: function() {
					var x = _array_slice.call(arguments);
					if (arguments.length < 3) {
						console.error('Invalid Arguments Exception @use .on(type,selector,fn)');
						return this;
					}
		
					if (this.$ != null) {
						Events_.on(this, [x]);
					}
		
		
					if (this.events == null) {
						this.events = [x];
					} else if (is_Array(this.events)) {
						this.events.push(x);
					} else {
						this.events = [x, this.events];
					}
					return this;
				},
				remove: function() {
					compo_removeElements(this);
					compo_detachChild(this);
					compo_dispose(this);
		
					this.$ = null;
					return this;
				},
		
				slotState: function(slotName, isActive){
					Compo.slot.toggle(this, slotName, isActive);
					return this;
				},
		
				signalState: function(signalName, isActive){
					Compo.signal.toggle(this, signalName, isActive);
					return this;
				},
		
				emitOut: function(signalName /* args */){
					Compo.signal.emitOut(
						this,
						signalName,
						this,
						arguments.length > 1
							? _array_slice.call(arguments, 1)
							: null
					);
					return this;
				},
		
				emitIn: function(signalName /* args */){
					Compo.signal.emitIn(
						this,
						signalName,
						this,
						arguments.length > 1
							? _array_slice.call(arguments, 1)
							: null
					);
					return this;
				}
			};
		
			Compo.prototype = Proto;
		
		
			return Compo;
		}());
		
		// end:source ../src/compo/Compo.js
		// source ../src/compo/signals.js
		(function() {
		
			/**
			 *	Mask Custom Attribute
			 *	Bind Closest Controller Handler Function to dom event(s)
			 */
		
			mask.registerAttrHandler('x-signal', 'client', function(node, attrValue, model, ctx, element, controller) {
		
				var arr = attrValue.split(';'),
					signals = '',
					imax = arr.length,
					i = -1,
					x;
				
				while ( ++i < imax ) {
					x = arr[i].trim();
					if (x === '') 
						continue;
					
		
					var i_colon = x.indexOf(':'),
						event = x.substring(0, i_colon),
						handler = x.substring(i_colon + 1).trim(),
						Handler = _createListener(controller, handler)
						;
		
					// if DEBUG
					!event && console.error('Signal: event type is not set', attrValue);
					// endif
		
					if (Handler) {
		
						signals += ',' + handler + ',';
						dom_addEventListener(element, event, Handler);
					}
		
					// if DEBUG
					!Handler && console.warn('No slot found for signal', handler, controller);
					// endif
				}
		
				if (signals !== '') 
					element.setAttribute('data-signals', signals);
		
			});
		
			// @param sender - event if sent from DOM Event or CONTROLLER instance
			function _fire(controller, slot, sender, args, direction) {
				
				if (controller == null) 
					return false;
				
				var found = false,
					fn = controller.slots != null && controller.slots[slot];
					
				if (typeof fn === 'string') 
					fn = controller[fn];
				
				if (typeof fn === 'function') {
					found = true;
					
					var isDisabled = controller.slots.__disabled != null && controller.slots.__disabled[slot];
		
					if (isDisabled !== true) {
		
						var result = args == null
								? fn.call(controller, sender)
								: fn.apply(controller, [sender].concat(args));
		
						if (result === false) {
							return true;
						}
						
						if (result != null && typeof result === 'object' && result.length != null) {
							args = result;
						}
					}
				}
		
				if (direction === -1 && controller.parent != null) {
					return _fire(controller.parent, slot, sender, args, direction) || found;
				}
		
				if (direction === 1 && controller.components != null) {
					var compos = controller.components,
						imax = compos.length,
						i = 0,
						r;
					for (; i < imax; i++) {
						r = _fire(compos[i], slot, sender, args, direction);
						
						!found && (found = r);
					}
				}
				
				return found;
			}
		
			function _hasSlot(controller, slot, direction, isActive) {
				if (controller == null) {
					return false;
				}
		
				var slots = controller.slots;
		
				if (slots != null && slots[slot] != null) {
					if (typeof slots[slot] === 'string') {
						slots[slot] = controller[slots[slot]];
					}
		
					if (typeof slots[slot] === 'function') {
						if (isActive === true) {
							if (slots.__disabled == null || slots.__disabled[slot] !== true) {
								return true;
							}
						} else {
							return true;
						}
					}
				}
		
				if (direction === -1 && controller.parent != null) {
					return _hasSlot(controller.parent, slot, direction);
				}
		
				if (direction === 1 && controller.components != null) {
					for (var i = 0, length = controller.components.length; i < length; i++) {
						if (_hasSlot(controller.components[i], slot, direction)) {
							return true;
						}
		
					}
				}
				return false;
			}
		
			function _createListener(controller, slot) {
		
				if (_hasSlot(controller, slot, -1) === false) {
					return null;
				}
		
				return function(event) {
					var args = arguments.length > 1 ? _array_slice.call(arguments, 1) : null;
					
					_fire(controller, slot, event, args, -1);
				};
			}
		
			function __toggle_slotState(controller, slot, isActive) {
				var slots = controller.slots;
				if (slots == null || slots.hasOwnProperty(slot) === false) {
					return;
				}
		
				if (slots.__disabled == null) {
					slots.__disabled = {};
				}
		
				slots.__disabled[slot] = isActive === false;
			}
		
			function __toggle_slotStateWithChilds(controller, slot, isActive) {
				__toggle_slotState(controller, slot, isActive);
		
				if (controller.components != null) {
					for (var i = 0, length = controller.components.length; i < length; i++) {
						__toggle_slotStateWithChilds(controller.components[i], slot, isActive);
					}
				}
			}
		
			function __toggle_elementsState(controller, slot, isActive) {
				if (controller.$ == null) {
					console.warn('Controller has no elements to toggle state');
					return;
				}
		
				domLib() 
					.add(controller.$.filter('[data-signals]')) 
					.add(controller.$.find('[data-signals]')) 
					.each(function(index, node) {
						var signals = node.getAttribute('data-signals');
			
						if (signals != null && signals.indexOf(slot) !== -1) {
							node[isActive === true ? 'removeAttribute' : 'setAttribute']('disabled', 'disabled');
						}
					});
			}
		
			function _toggle_all(controller, slot, isActive) {
		
				var parent = controller,
					previous = controller;
				while ((parent = parent.parent) != null) {
					__toggle_slotState(parent, slot, isActive);
		
					if (parent.$ == null || parent.$.length === 0) {
						// we track previous for changing elements :disable state
						continue;
					}
		
					previous = parent;
				}
		
				__toggle_slotStateWithChilds(controller, slot, isActive);
				__toggle_elementsState(previous, slot, isActive);
		
			}
		
			function _toggle_single(controller, slot, isActive) {
				__toggle_slotState(controller, slot, isActive);
		
				if (!isActive && (_hasSlot(controller, slot, -1, true) || _hasSlot(controller, slot, 1, true))) {
					// there are some active slots; do not disable elements;
					return;
				}
				__toggle_elementsState(controller, slot, isActive);
			}
		
		
		
			obj_extend(Compo, {
				signal: {
					toggle: _toggle_all,
		
					// to parent
					emitOut: function(controller, slot, sender, args) {
						var captured = _fire(controller, slot, sender, args, -1);
						
						// if DEBUG
						!captured && console.warn('Signal %c%s','font-weight:bold;', slot, 'was not captured');
						// endif
						
					},
					// to children
					emitIn: function(controller, slot, sender, args) {
						_fire(controller, slot, sender, args, 1);
					},
		
					enable: function(controller, slot) {
						_toggle_all(controller, slot, true);
					},
					
					disable: function(controller, slot) {
						_toggle_all(controller, slot, false);
					}
				},
				slot: {
					toggle: _toggle_single,
					enable: function(controller, slot) {
						_toggle_single(controller, slot, true);
					},
					disable: function(controller, slot) {
						_toggle_single(controller, slot, false);
					},
					invoke: function(controller, slot, event, args) {
						var slots = controller.slots;
						if (slots == null || typeof slots[slot] !== 'function') {
							console.error('Slot not found', slot, controller);
							return null;
						}
		
						if (args == null) {
							return slots[slot].call(controller, event);
						}
		
						return slots[slot].apply(controller, [event].concat(args));
					},
		
				}
		
			});
		
		}());
		
		// end:source ../src/compo/signals.js
	
		// source ../src/jcompo/jCompo.js
		// try to initialize the dom lib, or is then called from setDOMLibrary
		domLib_initialize();
		
		function domLib_initialize(){
		
			if (domLib == null || domLib.fn == null)
				return;
			
		
			domLib.fn.compo = function(selector){
				if (this.length === 0)
					return null;
				
				var compo = Anchor.resolveCompo(this[0]);
		
				return selector == null
					? compo
					: find_findSingle(compo, selector_parse(selector, Dom.CONTROLLER, 'up'));
			};
		
			domLib.fn.model = function(selector){
				var compo = this.compo(selector);
				if (compo == null)
					return null;
				
				var model = compo.model;
				while(model == null && compo.parent){
					compo = compo.parent;
					model = compo.model;
				}
				return model;
			};
			
			
			(function(){
				
				var jQ_Methods = [
					'append',
					'prepend',
					'before',
					'after'
				];
				
				arr_each([
					'appendMask',
					'prependMask',
					'beforeMask',
					'afterMask'
				], function(method, index){
					
					domLib.fn[method] = function(template, model, controller, ctx){
						
						if (this.length === 0) {
							// if DEBUG
							console.warn('<jcompo> $.', method, '- no element was selected(found)');
							// endif
							return this;
						}
						
						if (this.length > 1) {
							// if DEBUG
							console.warn('<jcompo> $.', method, ' can insert only to one element. Fix is comming ...');
							// endif
						}
						
						if (controller == null) {
							
							controller = index < 2
								? this.compo()
								: this.parent().compo()
								;
						}
						
						if (controller == null) {
							controller = {};
							// if DEBUG
							console.warn(
								'$.***Mask - controller not found, this can lead to memory leaks if template contains compos'
							);
							// endif
						}
						
						
						if (controller.components == null) {
							controller.components = [];
						}
						
						var components = controller.components,
							i = components.length,
							fragment = mask.render(template, model, ctx, null, controller);
						
						var self = this[jQ_Methods[index]](fragment),
							imax = components.length;
						
						for (; i < imax; i++) {
							Compo.signal.emitIn(components[i], 'domInsert');
						}
						
						return self;
					};
					
				});
			}());
			
			
			// remove
			(function(){
				var jq_remove = domLib.fn.remove,
					jq_empty = domLib.fn.empty
					;
				
				domLib.fn.removeAndDispose = function(){
					this.each(each_tryDispose);
					
					return jq_remove.call(this);
				};
				
				domLib.fn.emptyAndDispose = function(){
					this.each(each_tryDisposeChildren);
					
					return jq_empty.call(this);
				}
				
				
				function each_tryDispose(index, node){
					node_tryDispose(node);
				}
				
				function each_tryDisposeChildren(index, node){
					node_tryDisposeChildren(node);
				}
				
			}());
		
		};
		
		// end:source ../src/jcompo/jCompo.js
	
		// source ../src/handler/slot.js
		
		function SlotHandler() {}
		
		mask.registerHandler(':slot', SlotHandler);
		
		SlotHandler.prototype = {
			constructor: SlotHandler,
			renderEnd: function(element, model, cntx, container){
				this.slots = {};
		
				this.expression = this.attr.on;
		
				this.slots[this.attr.signal] = this.handle;
			},
			handle: function(){
				var expr = this.expression;
		
				mask.Utils.Expression.eval(expr, this.model, global, this);
			}
		};
		
		// end:source ../src/handler/slot.js
	
	
		return Compo;
	
	}(Mask));
	
	// end:source /src/libs/compo.js
	// source /src/libs/jmask.js
	
	var jmask = exports.jmask = (function(mask){
		'use strict';
		// source ../src/scope-vars.js
		var Dom = mask.Dom,
			_mask_render = mask.render,
			_mask_parse = mask.parse,
			_mask_ensureTmplFnOrig = mask.Utils.ensureTmplFn,
			_signal_emitIn = (global.Compo || mask.Compo || Compo).signal.emitIn;
			
		
		function _mask_ensureTmplFn(value) {
			if (typeof value !== 'string') {
				return value;
			}
			return _mask_ensureTmplFnOrig(value);
		}
		
		
		// end:source ../src/scope-vars.js
	
		// source ../src/util/object.js
		function util_extend(target, source){
			if (target == null){
				target = {};
			}
			if (source == null){
				return target;
			}
		
			for(var key in source){
				target[key] = source[key];
			}
		
			return target;
		}
		
		// end:source ../src/util/object.js
		// source ../src/util/array.js
		function arr_each(any, fn) {
			var isarray = any instanceof Array,
				i = -1,
				imax = isarray
					? any.length
					: 1
				;
			var x;
			while ( ++i < imax ){
				x = isarray
					? any[i]
					: any
					;
				fn(x, i);
			}
		}
		
		function arr_remove(array, child) {
			if (array == null) {
				console.error('Can not remove myself from parent', child);
				return;
			}
		
			var index = array.indexOf(child);
		
			if (index === -1) {
				console.error('Can not remove myself from parent', child, index);
				return;
			}
		
			array.splice(index, 1);
		}
		
		function arr_isArray(x) {
			return x != null
				&& typeof x === 'object'
				&& x.length != null
				&& typeof x.slice === 'function'
				;
		}
		
		var arr_unique = (function() {
		
			var hasDuplicates = false;
		
			function sort(a, b) {
				if (a === b) {
					hasDuplicates = true;
					return 0;
				}
		
				return 1;
			}
		
			return function(array) {
				var duplicates, i, j, imax;
		
				hasDuplicates = false;
		
				array.sort(sort);
		
				if (hasDuplicates === false) {
					return array;
				}
		
				duplicates = [];
				i = 0;
				j = 0;
				imax = array.length - 1;
		
				while (i < imax) {
					if (array[i++] === array[i]) {
						duplicates[j++] = i;
					}
				}
				while (j--) {
					array.splice(duplicates[j], 1);
				}
		
				return array;
			};
		
		}());
		
		
		// end:source ../src/util/array.js
		// source ../src/util/selector.js
		
		var sel_key_UP = 'parent',
			sel_key_MASK = 'nodes',
			sel_key_COMPOS = 'components',
			sel_key_ATTR = 'attr';
		
		function selector_parse(selector, type, direction) {
			if (selector == null) {
				console.warn('selector is null for type', type);
			}
		
			if (typeof selector === 'object') {
				return selector;
			}
		
			var key,
				prop,
				nextKey,
				filters,
		
				_key,
				_prop,
				_selector;
		
			var index = 0,
				length = selector.length,
				c,
				end,
				matcher,
				eq,
				slicer;
		
			if (direction === 'up') {
				nextKey = sel_key_UP;
			} else {
				nextKey = type === Dom.SET
					? sel_key_MASK
					: sel_key_COMPOS;
			}
		
			while (index < length) {
		
				c = selector.charCodeAt(index);
		
				if (c < 33) {
					continue;
				}
		
				end = selector_moveToBreak(selector, index + 1, length);
		
		
				if (c === 46 /*.*/ ) {
					_key = 'class';
					_prop = sel_key_ATTR;
					_selector = sel_hasClassDelegate(selector.substring(index + 1, end));
				}
		
				else if (c === 35 /*#*/ ) {
					_key = 'id';
					_prop = sel_key_ATTR;
					_selector = selector.substring(index + 1, end);
				}
		
				else if (c === 91 /*[*/ ) {
					eq = selector.indexOf('=', index);
					//if DEBUG
					eq === -1 && console.error('Attribute Selector: should contain "="');
					// endif
		
					_prop = sel_key_ATTR;
					_key = selector.substring(index + 1, eq);
		
					//slice out quotes if any
					c = selector.charCodeAt(eq + 1);
					slicer = c === 34 || c === 39 ? 2 : 1;
		
					_selector = selector.substring(eq + slicer, end - slicer + 1);
		
					// increment, as cursor is on closed ']'
					end++;
				}
		
				else {
					_prop = null;
					_key = type === Dom.SET ? 'tagName' : 'compoName';
					_selector = selector.substring(index, end);
				}
		
				index = end;
		
		
		
				if (matcher == null) {
					matcher = {
						key: _key,
						prop: _prop,
						selector: _selector,
						nextKey: nextKey,
		
						filters: null
					}
		
					continue;
				}
		
				if (matcher.filters == null) {
					matcher.filters = [];
				}
		
				matcher.filters.push({
					key: _key,
					selector: _selector,
					prop: _prop
				});
		
			}
		
			return matcher;
		}
		
		
		function sel_hasClassDelegate(matchClass) {
			return function(className){
				return sel_hasClass(className, matchClass);
			};
		}
		
		// [perf] http://jsperf.com/match-classname-indexof-vs-regexp/2
		function sel_hasClass(className, matchClass, index) {
			if (typeof className !== 'string')
				return false;
			
			if (index == null) 
				index = 0;
				
			index = className.indexOf(matchClass, index);
		
			if (index === -1)
				return false;
		
			if (index > 0 && className.charCodeAt(index - 1) > 32)
				return sel_hasClass(className, matchClass, index + 1);
		
			var class_Length = className.length,
				match_Length = matchClass.length;
				
			if (index < class_Length - match_Length && className.charCodeAt(index + match_Length) > 32)
				return sel_hasClass(className, matchClass, index + 1);
		
			return true;
		}
		
		
		function selector_moveToBreak(selector, index, length) {
			var c, 
				isInQuote = false,
				isEscaped = false;
		
			while (index < length) {
				c = selector.charCodeAt(index);
		
				if (c === 34 || c === 39) {
					// '"
					isInQuote = !isInQuote;
				}
		
				if (c === 92) {
					// [\]
					isEscaped = !isEscaped;
				}
		
				if (c === 46 || c === 35 || c === 91 || c === 93 || c < 33) {
					// .#[]
					if (isInQuote !== true && isEscaped !== true) {
						break;
					}
				}
				index++;
			}
			return index;
		}
		
		function selector_match(node, selector, type) {
			if (typeof selector === 'string') {
				if (type == null) {
					type = Dom[node.compoName ? 'CONTROLLER' : 'SET'];
				}
				selector = selector_parse(selector, type);
			}
		
			var obj = selector.prop ? node[selector.prop] : node,
				matched = false;
		
			if (obj == null) {
				return false;
			}
		
			if (typeof selector.selector === 'function') {
				matched = selector.selector(obj[selector.key]);
			}
			
			else if (selector.selector.test != null) {
				if (selector.selector.test(obj[selector.key])) {
					matched = true;
				}
			}
			
			else  if (obj[selector.key] === selector.selector) {
				matched = true;
			}
		
			if (matched === true && selector.filters != null) {
				for(var i = 0, x, imax = selector.filters.length; i < imax; i++){
					x = selector.filters[i];
		
					if (selector_match(node, x, type) === false) {
						return false;
					}
				}
			}
		
			return matched;
		}
		
		// end:source ../src/util/selector.js
		// source ../src/util/utils.js
		var jmask_filter,
			jmask_find,
			jmask_clone,
			jmask_deepest,
			jmask_getText
			;
		
		(function(){
			
			jmask_filter = function(mix, matcher) {
				if (matcher == null) 
					return mix;
				
				var result = [];
				arr_each(mix, function(node) {
					if (selector_match(node, matcher)) 
						result.push(node);
				});
				return result;
			};
			
			/**
			 * - mix (Node | Array[Node])
			 */
			jmask_find = function(mix, matcher, output) {
				if (mix == null) {
					return output;
				}
			
				if (output == null) {
					output = [];
				}
			
				if (mix instanceof Array){
					for(var i = 0, length = mix.length; i < length; i++){
						jmask_find(mix[i], matcher, output);
					}
					return output;
				}
			
				if (selector_match(mix, matcher)){
					output.push(mix);
				}
			
				var next = mix[matcher.nextKey];
			
				if (next != null){
					jmask_find(next, matcher, output);
				}
			
				return output;
			};
			
			jmask_clone = function(node, parent){
			
				var copy = {
					'type': 1,
					'tagName': 1,
					'compoName': 1,
					'controller': 1
				};
			
				var clone = {
					parent: parent
				};
			
				for(var key in node){
					if (copy[key] === 1){
						clone[key] = node[key];
					}
				}
			
				if (node.attr){
					clone.attr = util_extend({}, node.attr);
				}
			
				var nodes = node.nodes;
				if (nodes != null && nodes.length > 0){
					clone.nodes = [];
			
					var isarray = nodes instanceof Array,
						length = isarray === true ? nodes.length : 1,
						i = 0;
					for(; i< length; i++){
						clone.nodes[i] = jmask_clone(isarray === true ? nodes[i] : nodes, clone);
					}
				}
			
				return clone;
			};
			
			
			jmask_deepest = function(node){
				var current = node,
					prev;
				while(current != null){
					prev = current;
					current = current.nodes && current.nodes[0];
				}
				return prev;
			};
			
			
			jmask_getText = function(node, model, cntx, controller) {
				if (Dom.TEXTNODE === node.type) {
					if (typeof node.content === 'function') {
						return node.content('node', model, cntx, null, controller);
					}
					return node.content;
				}
			
				var output = '';
				if (node.nodes != null) {
					for(var i = 0, x, imax = node.nodes.length; i < imax; i++){
						x = node.nodes[i];
						output += jmask_getText(x, model, cntx, controller);
					}
				}
				return output;
			};
		
		}());
		
		// end:source ../src/util/utils.js
	
		// source ../src/jmask/jmask.js
		function jMask(mix) {
		
		
			if (this instanceof jMask === false) {
				return new jMask(mix);
			}
		
			if (mix == null) {
				return this;
			}
			
			if (mix.type === Dom.SET) {
				return mix;
			}
		
			return this.add(mix);
		}
		
		jMask.prototype = {
			constructor: jMask,
			type: Dom.SET,
			length: 0,
			components: null,
			add: function(mix) {
				var i, length;
		
				if (typeof mix === 'string') {
					mix = _mask_parse(mix);
				}
		
				if (arr_isArray(mix)) {
					for (i = 0, length = mix.length; i < length; i++) {
						this.add(mix[i]);
					}
					return this;
				}
		
				if (typeof mix === 'function' && mix.prototype.type != null) {
					// assume this is a controller
					mix = {
						controller: mix,
						type: Dom.COMPONENT
					};
				}
		
		
				var type = mix.type;
		
				if (!type) {
					// @TODO extend to any type?
					console.error('Only Mask Node/Component/NodeText/Fragment can be added to jmask set', mix);
					return this;
				}
		
				if (type === Dom.FRAGMENT) {
					var nodes = mix.nodes;
		
					for(i = 0, length = nodes.length; i < length;) {
						this[this.length++] = nodes[i++];
					}
					return this;
				}
		
				if (type === Dom.CONTROLLER) {
		
					if (mix.nodes != null && mix.nodes.length) {
						for (i = mix.nodes.length; i !== 0;) {
							// set controller as parent, as parent is mask dom node
							mix.nodes[--i].parent = mix;
						}
					}
		
					if (mix.$ != null) {
						this.type = Dom.CONTROLLER;
					}
				}
		
		
		
				this[this.length++] = mix;
				return this;
			},
			toArray: function() {
				return Array.prototype.slice.call(this);
			},
			/**
			 *	render([model, cntx, container]) -> HTMLNode
			 * - model (Object)
			 * - cntx (Object)
			 * - container (Object)
			 * - returns (HTMLNode)
			 *
			 **/
			render: function(model, cntx, container, controller) {
				this.components = [];
		
				if (this.length === 1) {
					return _mask_render(this[0], model, cntx, container, controller || this);
				}
		
				if (container == null) {
					container = document.createDocumentFragment();
				}
		
				for (var i = 0, length = this.length; i < length; i++) {
					_mask_render(this[i], model, cntx, container, controller || this);
				}
				return container;
			},
			prevObject: null,
			end: function() {
				return this.prevObject || this;
			},
			pushStack: function(nodes) {
				var next;
				next = jMask(nodes);
				next.prevObject = this;
				return next;
			},
			controllers: function() {
				if (this.components == null) {
					console.warn('Set was not rendered');
				}
		
				return this.pushStack(this.components || []);
			},
			mask: function(template) {
				var node;
				
				if (template != null) 
					return this.empty().append(template);
				
				if (arguments.length) 
					return this;
				
				
				if (this.length === 0) 
					node = new Dom.Node();
				
				else if (this.length === 1) 
					node = this[0];
					
				else {
					node = new Dom.Fragment();
					node.nodes = [];
					
					var i = -1;
					while ( ++i < this.length ){
						node.nodes[i] = this[i];
					}
				}
		
				return mask.stringify(node);
			},
		
			text: function(mix, cntx, controller){
				if (typeof mix === 'string' && arguments.length === 1) {
					var node = [new Dom.TextNode(mix)];
		
					for(var i = 0, x, imax = this.length; i < imax; i++){
						x = this[i];
						x.nodes = node;
					}
					return this;
				}
		
				var string = '';
				for(var i = 0, x, imax = this.length; i < imax; i++){
					x = this[i];
					string += jmask_getText(x, mix, cntx, controller);
				}
				return string;
			}
		};
		
		arr_each(['append', 'prepend'], function(method) {
		
			jMask.prototype[method] = function(mix) {
				var $mix = jMask(mix),
					i = 0,
					length = this.length,
					arr, node;
		
				for (; i < length; i++) {
					node = this[i];
					// we create each iteration a new array to prevent collisions in future manipulations
					arr = $mix.toArray();
		
					for (var j = 0, jmax = arr.length; j < jmax; j++) {
						arr[j].parent = node;
					}
		
					if (node.nodes == null) {
						node.nodes = arr;
						continue;
					}
		
					node.nodes = method === 'append' ? node.nodes.concat(arr) : arr.concat(node.nodes);
				}
		
				return this;
			};
		
		});
		
		arr_each(['appendTo'], function(method) {
		
			jMask.prototype[method] = function(mix, model, cntx, controller) {
		
				if (controller == null) {
					controller = this;
				}
		
				if (mix.nodeType != null && typeof mix.appendChild === 'function') {
					mix.appendChild(this.render(model, cntx, null, controller));
		
					_signal_emitIn(controller, 'domInsert');
					return this;
				}
		
				jMask(mix).append(this);
				return this;
			};
		
		});
		
		// end:source ../src/jmask/jmask.js
		// source ../src/jmask/manip.attr.js
		(function() {
			arr_each(['add', 'remove', 'toggle', 'has'], function(method) {
		
				jMask.prototype[method + 'Class'] = function(klass) {
					var length = this.length,
						i = 0,
						classNames, j, jmax, node, current;
		
					if (typeof klass !== 'string') {
						if (method === 'remove') {
							for (; i < length; i++) {
								this[0].attr['class'] = null;
							}
						}
						return this;
					}
		
		
					for (; i < length; i++) {
						node = this[i];
		
						if (node.attr == null) {
							continue;
						}
		
						current = node.attr['class'];
		
						if (current == null) {
							current = klass;
						} else {
							current = ' ' + current + ' ';
		
							if (classNames == null) {
								classNames = klass.split(' ');
								jmax = classNames.length;
							}
							for (j = 0; j < jmax; j++) {
								if (!classNames[j]) {
									continue;
								}
		
								var hasClass = current.indexOf(' ' + classNames[j] + ' ') > -1;
		
								if (method === 'has') {
									if (hasClass) {
										return true;
									} else {
										continue;
									}
								}
		
								if (hasClass === false && (method === 'add' || method === 'toggle')) {
									current += classNames[j] + ' ';
								} else if (hasClass === true && (method === 'remove' || method === 'toggle')) {
									current = current.replace(' ' + classNames[j] + ' ', ' ');
								}
							}
							current = current.trim();
						}
		
						if (method !== 'has') {
							node.attr['class'] = current;
						}
					}
		
					if (method === 'has') {
						return false;
					}
		
					return this;
				};
		
			});
		
		
			arr_each(['attr', 'removeAttr', 'prop', 'removeProp'], function(method) {
				jMask.prototype[method] = function(key, value) {
					if (!key) {
						return this;
					}
		
					var length = this.length,
						i = 0,
						args = arguments.length,
						node;
		
					for (; i < length; i++) {
						node = this[i];
		
						switch (method) {
						case 'attr':
						case 'prop':
							if (args === 1) {
								if (typeof key === 'string') {
									return node.attr[key];
								}
		
								for (var x in key) {
									node.attr[x] = _mask_ensureTmplFn(key[x]);
								}
		
							} else if (args === 2) {
								node.attr[key] = _mask_ensureTmplFn(value);
							}
							break;
						case 'removeAttr':
						case 'removeProp':
							node.attr[key] = null;
							break;
						}
					}
		
					return this;
				};
			});
		
			util_extend(jMask.prototype, {
				tag: function(arg) {
					if (typeof arg === 'string') {
						for (var i = 0, length = this.length; i < length; i++) {
							this[i].tagName = arg;
						}
						return this;
					}
					return this[0] && this[0].tagName;
				},
				css: function(mix, value) {
					var args = arguments.length,
						length = this.length,
						i = 0,
						css, key, style;
		
					if (args === 1 && typeof mix === 'string') {
						if (length === 0) {
							return null;
						}
						if (typeof this[0].attr.style === 'string') {
							return css_toObject(this[0].attr.style)[mix];
						} else {
							return null;
						}
					}
		
					for (; i < length; i++) {
						style = this[i].attr.style;
		
						if (typeof style === 'function') {
							continue;
						}
						if (args === 1 && typeof mix === 'object') {
							if (style == null) {
								this[i].attr.style = css_toString(mix);
								continue;
							}
							css = css_toObject(style);
							for (key in mix) {
								css[key] = mix[key];
							}
							this[i].attr.style = css_toString(css);
						}
		
						if (args === 2) {
							if (style == null) {
								this[i].attr.style = mix + ':' + value;
								continue;
							}
							css = css_toObject(style);
							css[mix] = value;
							this[i].attr.style = css_toString(css);
		
						}
					}
		
					return this;
				}
			});
		
			// TODO: val(...)?
		
			function css_toObject(style) {
				var arr = style.split(';'),
					obj = {},
					index;
				for (var i = 0, x, length = arr.length; i < length; i++) {
					x = arr[i];
					index = x.indexOf(':');
					obj[x.substring(0, index).trim()] = x.substring(index + 1).trim();
				}
				return obj;
			}
		
			function css_toString(css) {
				var output = [],
					i = 0;
				for (var key in css) {
					output[i++] = key + ':' + css[key];
				}
				return output.join(';');
			}
		
		}());
		
		// end:source ../src/jmask/manip.attr.js
		// source ../src/jmask/manip.dom.js
		
		
		util_extend(jMask.prototype, {
			clone: function(){
				var result = [];
				for(var i = 0, length = this.length; i < length; i++){
					result[i] = jmask_clone(this[0]);
				}
				return jMask(result);
			},
		
			// @TODO - wrap also in maskdom (modify parents)
			wrap: function(wrapper){
				var $mask = jMask(wrapper),
					result = [],
					$wrapper;
		
				if ($mask.length === 0){
					console.log('Not valid wrapper', wrapper);
					return this;
				}
		
				for(var i = 0, length = this.length; i < length; i++){
					$wrapper = length > 0 ? $mask.clone() : $mask;
					jmask_deepest($wrapper[0]).nodes = [this[i]];
		
					result[i] = $wrapper[0];
		
					var parentNodes = this[i].parent && this[i].parent.nodes;
		            if (parentNodes != null){
		                for(var j = 0, jmax = parentNodes.length; j < jmax; j++){
		                    if (parentNodes[j] === this[i]){
		                        
		                        parentNodes.splice(j, 1, result[i]);
		                        break;
		                    }
		                }
		            }
				}
		
				return jMask(result);
			},
			wrapAll: function(wrapper){
				var $wrapper = jMask(wrapper);
				if ($wrapper.length === 0){
					console.error('Not valid wrapper', wrapper);
					return this;
				}
		
		
				this.parent().mask($wrapper);
		
				jmask_deepest($wrapper[0]).nodes = this.toArray();
				return this.pushStack($wrapper);
			}
		});
		
		arr_each(['empty', 'remove'], function(method) {
			jMask.prototype[method] = function() {
				var i = 0,
					length = this.length,
					node;
		
				for (; i < length; i++) {
					node = this[i];
		
					if (method === 'empty') {
						node.nodes = null;
						continue;
					}
					if (method === 'remove') {
						if (node.parent != null) {
							arr_remove(node.parent.nodes, node);
						}
						continue;
					}
		
				}
		
				return this;
			};
		});
		
		// end:source ../src/jmask/manip.dom.js
		// source ../src/jmask/traverse.js
		util_extend(jMask.prototype, {
			each: function(fn, cntx) {
				for (var i = 0; i < this.length; i++) {
					fn.call(cntx || this, this[i], i)
				}
				return this;
			},
			eq: function(i) {
				return i === -1 ? this.slice(i) : this.slice(i, i + 1);
			},
			get: function(i) {
				return i < 0 ? this[this.length - i] : this[i];
			},
			slice: function() {
				return this.pushStack(Array.prototype.slice.apply(this, arguments));
			}
		});
		
		
		arr_each([
			'filter',
			'children',
			'closest',
			'parent',
			'find',
			'first',
			'last'
		], function(method) {
		
			jMask.prototype[method] = function(selector) {
				var result = [],
					matcher = selector == null ? null : selector_parse(selector, this.type, method === 'closest' ? 'up' : 'down'),
					i, x;
		
				switch (method) {
				case 'filter':
					return jMask(jmask_filter(this, matcher));
				case 'children':
					for (i = 0; i < this.length; i++) {
						x = this[i];
						if (x.nodes == null) {
							continue;
						}
						result = result.concat(matcher == null ? x.nodes : jmask_filter(x.nodes, matcher));
					}
					break;
				case 'parent':
					for (i = 0; i < this.length; i++) {
						x = this[i].parent;
						if (!x || x.type === Dom.FRAGMENT || (matcher && selector_match(x, matcher))) {
							continue;
						}
						result.push(x);
					}
					arr_unique(result);
					break;
				case 'closest':
				case 'find':
					if (matcher == null) {
						break;
					}
					for (i = 0; i < this.length; i++) {
						jmask_find(this[i][matcher.nextKey], matcher, result);
					}
					break;
				case 'first':
				case 'last':
					var index;
					for (i = 0; i < this.length; i++) {
		
						index = method === 'first' ? i : this.length - i - 1;
						x = this[index];
						if (matcher == null || selector_match(x, matcher)) {
							result[0] = x;
							break;
						}
					}
					break;
				}
		
				return this.pushStack(result);
			};
		
		});
		
		// end:source ../src/jmask/traverse.js
	
	
	
		return jMask;
	
	}(Mask));
	
	// end:source /src/libs/jmask.js
	// source /src/libs/mask.binding.js
	
	(function(mask, Compo){
		'use strict'
	
	
		// source ../src/vars.js
		var domLib = global.jQuery || global.Zepto || global.$,
			__Compo = typeof Compo !== 'undefined' ? Compo : (mask.Compo || global.Compo),
		    __dom_addEventListener = __Compo.Dom.addEventListener,
		    __mask_registerHandler = mask.registerHandler,
		    __mask_registerAttrHandler = mask.registerAttrHandler,
		    __mask_registerUtil = mask.registerUtil,
		    
			_Array_slice = Array.prototype.slice;
			
		
		// end:source ../src/vars.js
	
		// source ../src/util/function.js
		function fn_proxy(fn, ctx) {
		
			return function() {
				return fn.apply(ctx, arguments);
			};
		}
		
		// end:source ../src/util/function.js
		// source ../src/util/object.js
		
		var obj_getProperty,
			obj_setProperty,
			obj_addObserver,
			obj_hasObserver,
			obj_removeObserver,
			obj_lockObservers,
			obj_unlockObservers,
			obj_extend,
			obj_isDefined
			;
		
		(function(){
		
			obj_getProperty = function(obj, property) {
				var chain = property.split('.'),
					imax = chain.length,
					i = -1;
				while ( ++i < imax ) {
					if (obj == null) 
						return null;
					
					obj = obj[chain[i]];
				}
				return obj;
			};
			
			
			obj_setProperty = function(obj, property, value) {
				var chain = property.split('.'),
					imax = chain.length - 1,
					i = -1,
					key;
				while ( ++i < imax ) {
					key = chain[i];
					if (obj[key] == null) 
						obj[key] = {};
					
					obj = obj[key];
				}
				obj[chain[i]] = value;
			};
		
			obj_addObserver = function(obj, property, callback) {
				
				// closest observer
				var parts = property.split('.'),
					imax  = parts.length,
					i = -1,
					x = obj;
				while ( ++i < imax ) {
					x = x[parts[i]];
					
					if (x == null) 
						break;
					
					if (x.__observers != null) {
						
						var prop = parts.slice(i + 1).join('.');
						
						if (x.__observers[prop]) {
							
							listener_push(x, prop, callback);
							
							var listeners = listener_push(obj, property, callback);
							if (listeners.length === 1) {
								var arr = parts.splice(0, i);
								if (arr.length !== 0) 
									obj_attachProxy(obj, property, listeners, arr, true);
							}
							
							
							return;
						}
					}
				}
				
				var listeners = listener_push(obj, property, callback);
				
				if (listeners.length === 1) 
					obj_attachProxy(obj, property, listeners, parts, true);
				
				
				var val = obj_getProperty(obj, property);
				if (arr_isArray(val)) 
					arr_addObserver(val, callback);
				
			};
			
			obj_hasObserver = function(obj, property, callback){
				// nested observer
				var parts = property.split('.'),
					imax  = parts.length,
					i = -1,
					x = obj;
				while ( ++i < imax ) {
					x = x[parts[i]];
					if (x == null) 
						break;
					
					if (x.__observers != null) {
						if (obj_hasObserver(x, parts.slice(i).join('.'), callback))
							return true;
						
						break;
					}
				}
				
				var obs = obj.__observers;
				if (obs == null || obs[property] == null) 
					return false;
				
				return arr_indexOf(obs[property], callback) !== -1;
			};
			
			obj_removeObserver = function(obj, property, callback) {
				// nested observer
				var parts = property.split('.'),
					imax  = parts.length,
					i = -1,
					x = obj;
				while ( ++i < imax ) {
					x = x[parts[i]];
					if (x == null) 
						break;
					
					if (x.__observers != null) {
						obj_removeObserver(x, parts.slice(i).join('.'), callback);
						break;
					}
				}
				
				
				var obs = obj.__observers;
				if (obs == null || obs[property] == null) 
					return;
				
			
				var currentValue = obj_getProperty(obj, property);
				if (arguments.length === 2) {
					// <callback> not provided -> remove all observers	
					obs[property].length = 0;
					return;
				}
			
				arr_remove(obs[property], callback);
			
				if (arr_isArray(currentValue)) 
					arr_removeObserver(currentValue, callback);
			};
			
			
			obj_lockObservers = function(obj) {
				if (arr_isArray(obj)) {
					arr_lockObservers(obj);
					return;
				}
			
				var obs = obj.__observers;
				if (obs != null) 
					obs.__dirties = {};
			};
			
			obj_unlockObservers = function(obj) {
				if (arr_isArray(obj)) {
					arr_unlockObservers(obj);
					return;
				}
			
				var obs = obj.__observers,
					dirties = obs == null
						? null
						: obs.__dirties
						;
				if (dirties != null) {
					for (var prop in dirties) {
						var callbacks = obj.__observers[prop],
							value = obj_getProperty(obj, prop);
			
						if (callbacks != null) {
							for(var i = 0, imax = callbacks.length; i < imax; i++){
								callbacks[i](value);
							}
						}
					}
					obs.__dirties = null;
				}
			};
			
			
			obj_extend = function(obj, source) {
				if (source == null) 
					return obj;
				
				if (obj == null) 
					obj = {};
				
				for (var key in source) {
					obj[key] = source[key];
				}
				return obj;
			};
			
			
			obj_isDefined = function(obj, path) {
				if (obj == null) 
					return false;
				
				var parts = path.split('.'),
					imax = parts.length,
					i = -1;
				
				while ( ++i < imax ) {
					
					if ((obj = obj[parts[i]]) == null) 
						return false;
				}
				
				return true;
			};
		
			
			//Resolve object, or if property do not exists - create
			function obj_ensure(obj, chain) {
				var i = -1,
					imax = chain.length - 1,
					key
					;
				while ( ++i < imax ) {
					key = chain[i];
			
					if (obj[key] == null) 
						obj[key] = {};
					
					obj = obj[key];
				}
				return obj;
			};
			
			
			function obj_attachProxy(obj, property, listeners, chain) {
				var length = chain.length,
					parent = length > 1
						? obj_ensure(obj, chain)
						: obj,
					key = chain[length - 1],
					currentValue = parent[key];
					
				if (length > 1) {
					obj_defineCrumbs(obj, chain);
				}
					
				if (key === 'length' && arr_isArray(parent)) {
					// we cannot redefine array properties like 'length'
					arr_addObserver(parent, function(array, method, args, result){
						var imax = listeners.length,
							i = -1
							;
						while ( ++i < imax ) {
							listeners[i](array, method, args, result);
						}
					});
					return currentValue;
				}
				
				Object.defineProperty(parent, key, {
					get: function() {
						return currentValue;
					},
					set: function(x) {
						var i = 0,
							imax = listeners.length;
						
						if (x === currentValue) 
							return;
						
						currentValue = x;
			
						if (arr_isArray(x)) {
							for (i = 0; i< imax; i++) {
								arr_addObserver(x, listeners[i]);
							}
						}
			
						if (listeners.__dirties != null) {
							listeners.__dirties[property] = 1;
							return;
						}
			
						for (i = 0; i < imax; i++) {
							listeners[i](x);
						}
					},
					configurable: true
				});
			
				
				return currentValue;
			}
			
			function obj_defineCrumbs(obj, chain) {
				var rebinder = obj_crumbRebindDelegate(obj),
					path = '',
					key;
					
				for (var i = 0, imax = chain.length - 1; i < imax; i++) {
					key = chain[i];
					path += key + '.';
					
					obj_defineCrumb(path, obj, key, rebinder);
					
					obj = obj[key];
				}
			}
			
			function obj_defineCrumb(path, obj, key, rebinder) {
					
				var value = obj[key],
					old;
				
				Object.defineProperty(obj, key, {
					get: function() {
						return value;
					},
					set: function(x) {
						if (x === value) 
							return;
						
						old = value;
						value = x;
						rebinder(path, old);
					},
					configurable: true
				});
			}
			
			function obj_crumbRebindDelegate(obj) {
				return function(path, oldValue){
					
					var observers = obj.__observers;
					if (observers == null) 
						return;
					
					for (var property in observers) {
						
						if (property.indexOf(path) !== 0) 
							continue;
						
						var listeners = observers[property].slice(0),
							imax = listeners.length,
							i = 0;
						
						if (imax === 0) 
							continue;
						
						var val = obj_getProperty(obj, property),
							cb, oldProp;
						
						for (i = 0; i < imax; i++) {
							cb = listeners[i];
							obj_removeObserver(obj, property, cb);
							
							oldProp = property.substring(path.length);
							obj_removeObserver(oldValue, oldProp, cb);
						}
						for (i = 0; i < imax; i++){
							listeners[i](val);
						}
						
						for (i = 0; i < imax; i++){
							obj_addObserver(obj, property, listeners[i]);
						}
						
					}
				}
			}
			
			
			// Create Collection - Check If Exists - Add Listener
			function listener_push(obj, property, callback) {
				if (obj.__observers == null) {
					Object.defineProperty(obj, '__observers', {
						value: {
							__dirty: null
						},
						enumerable: false
					});
				}
				var obs = obj.__observers;
				if (obs[property] != null) {
					
					if (arr_indexOf(obs[property], callback) === -1) 
						obs[property].push(callback);
				}
				else{
					obs[property] = [callback];
				}
				
				return obs[property];
			}
			
		}());
		
		
		
		
		
		
		// end:source ../src/util/object.js
		// source ../src/util/array.js
		
		var arr_isArray,
			arr_remove,
			arr_each,
			arr_indexOf,
			arr_addObserver,
			arr_removeObserver,
			arr_lockObservers,
			arr_unlockObservers
			;
		
		(function(){
			
			arr_isArray = function(x) {
				return x != null && typeof x === 'object' && x.length != null && typeof x.splice === 'function';
			};
			
			arr_remove = function(array /*, .. */ ) {
				if (array == null) {
					return false;
				}
			
				var i = 0,
					length = array.length,
					x, j = 1,
					jmax = arguments.length,
					removed = 0;
			
				for (; i < length; i++) {
					x = array[i];
			
					for (j = 1; j < jmax; j++) {
						if (arguments[j] === x) {
			
							array.splice(i, 1);
							i--;
							length--;
							removed++;
							break;
						}
					}
				}
				return removed + 1 === jmax;
			};
			
			
			arr_addObserver = function(arr, callback) {
			
				if (arr.__observers == null) {
					Object.defineProperty(arr, '__observers', {
						value: {
							__dirty: null
						},
						enumerable: false
					});
				}
				
				var observers = arr.__observers.__array;
				if (observers == null) {
					observers = arr.__observers.__array = [];
				}
				
				if (observers.length === 0) {
					// create wrappers for first time
					var i = 0,
						fns = [
							// native mutators
							'push',
							'unshift',
							'splice',
							'pop',
							'shift',
							'reverse',
							'sort',
							
							// collections mutator
							'remove'],
						length = fns.length,
						fn,
						method;
				
					for (; i < length; i++) {
						method = fns[i];
						fn = arr[method];
						
						if (fn != null) {
							arr[method] = _array_createWrapper(arr, fn, method);
						}
			
					}
				}
			
				observers[observers.length++] = callback;
			};
			
			arr_removeObserver = function(arr, callback) {
				var obs = arr.__observers && arr.__observers.__array;
				if (obs != null) {
					for (var i = 0, imax = obs.length; i < imax; i++) {
						if (obs[i] === callback) {
							obs[i] = null;
			
							for (var j = i; j < imax; j++) {
								obs[j] = obs[j + 1];
							}
							
							imax--;
							obs.length--;
						}
					}
				}
			};
			
			arr_lockObservers = function(arr) {
				if (arr.__observers != null) {
					arr.__observers.__dirty = false;
				}
			};
			
			arr_unlockObservers = function(arr) {
				var list = arr.__observers,
					obs = list && list.__array;
					
				if (obs != null) {
					if (list.__dirty === true) {
						for (var i = 0, x, imax = obs.length; i < imax; i++) {
							x = obs[i];
							if (typeof x === 'function') {
								x(arr);
							}
						}
						list.__dirty = null;
					}
				}
			};
			
			
			arr_each = function(array, fn) {
				for (var i = 0, length = array.length; i < length; i++) {
					fn(array[i]);
				}
			};
			
			arr_indexOf = function(arr, x){
				return arr.indexOf(x);
			};
			
			
			//= private
			
			function _array_createWrapper(array, originalFn, overridenFn) {
				return function() {
					return _array_methodWrapper(array, originalFn, overridenFn, _Array_slice.call(arguments));
				};
			}
			
			
			function _array_methodWrapper(array, original, method, args) {
				var callbacks = array.__observers && array.__observers.__array,
					result = original.apply(array, args);
			
			
				if (callbacks == null || callbacks.length === 0) {
					return result;
				}
			
				if (array.__observers.__dirty != null) {
					array.__observers.__dirty = true;
					return result;
				}
			
				var i = 0,
					imax = callbacks.length,
					x;
				for (; i < imax; i++) {
					x = callbacks[i];
					if (typeof x === 'function') {
						x(array, method, args, result);
					}
				}
			
				return result;
			}
			
			
			
			
			
		}());
		
		// end:source ../src/util/array.js
		// source ../src/util/dom.js
		
		function dom_removeElement(node) {
			return node.parentNode.removeChild(node);
		}
		
		function dom_removeAll(array) {
			if (array == null) 
				return;
			
			var imax = array.length,
				i = -1;
			while ( ++i < imax ) {
				dom_removeElement(array[i]);
			}
		}
		
		function dom_insertAfter(element, anchor) {
			return anchor.parentNode.insertBefore(element, anchor.nextSibling);
		}
		
		function dom_insertBefore(element, anchor) {
			return anchor.parentNode.insertBefore(element, anchor);
		}
		
		
		
		
		// end:source ../src/util/dom.js
		// source ../src/util/compo.js
		
		////////function compo_lastChild(compo) {
		////////	return compo.components != null && compo.components[compo.components.length - 1];
		////////}
		////////
		////////function compo_childAt(compo, index) {
		////////	return compo.components && compo.components.length > index && compo.components[index];
		////////}
		////////
		////////function compo_lastElement(compo) {
		////////	var lastCompo = compo_lastChild(compo),
		////////		elements = lastCompo && (lastCompo.elements || lastCompo.$) || compo.elements;
		////////
		////////	return elements != null ? elements[elements.length - 1] : compo.placeholder;
		////////}
		
		function compo_fragmentInsert(compo, index, fragment, placeholder) {
			if (compo.components == null) 
				return dom_insertAfter(fragment, placeholder || compo.placeholder);
			
			var compos = compo.components,
				anchor = null,
				insertBefore = true,
				imax = compos.length,
				i = index - 1,
				elements;
			
			if (anchor == null) {
				while (++i < imax) {
					elements = compos[i].elements;
			
					if (elements && elements.length) {
						anchor = elements[0];
						break;
					}
				}
			}
		
			if (anchor == null) {
				insertBefore = false;
				i = index < imax
					? index
					: imax
					;
				while (--i > -1) {
					elements = compos[i].elements;
					if (elements && elements.length) {
						anchor = elements[elements.length - 1];
						break;
					}
				}
			}
		
			if (anchor == null) 
				anchor = placeholder || compo.placeholder;
			
			if (insertBefore) 
				return dom_insertBefore(fragment, anchor);
			
			return dom_insertAfter(fragment, anchor);
		}
		
		function compo_render(parentController, template, model, cntx, container) {
			return mask.render(template, model, cntx, container, parentController);
		}
		
		function compo_dispose(compo, parent) {
			if (compo == null) 
				return false;
			
			if (compo.elements != null) {
				dom_removeAll(compo.elements);
				compo.elements = null;
			}
			
		
			__Compo.dispose(compo);
			
		
			var components = (parent && parent.components) || (compo.parent && compo.parent.components);
			if (components == null) {
				console.error('Parent Components Collection is undefined');
				return false;
			}
		
			return arr_remove(components, compo);
		}
		
		function compo_inserted(compo) {
			
			__Compo.signal.emitIn(compo, 'domInsert');
		}
		
		function compo_attachDisposer(controller, disposer) {
		
			if (typeof controller.dispose === 'function') {
				var previous = controller.dispose;
				controller.dispose = function(){
					disposer.call(this);
					previous.call(this);
				};
		
				return;
			}
		
			controller.dispose = disposer;
		}
		
		// end:source ../src/util/compo.js
		// source ../src/util/expression.js
		var expression_eval,
			expression_bind,
			expression_unbind,
			expression_createBinder,
			expression_createListener,
			
			expression_parse,
			expression_varRefs
			;
			
		(function(){
			
			var Expression = mask.Utils.Expression,
				expression_eval_origin = Expression.eval
				;
		
			expression_parse = Expression.parse;
			
			expression_varRefs = Expression.varRefs;
			
			expression_eval = function(expr, model, cntx, controller){
					
				if (expr === '.') 
					return model;
				
				var value = expression_eval_origin(expr, model, cntx, controller);
				return value == null
					? ''
					: value
					;
			};
				
			expression_bind = function(expr, model, cntx, controller, callback) {
				
				if (expr === '.') {
					
					if (arr_isArray(model)) 
						arr_addObserver(model, callback);
					
					return;
				}
				
				var ast = expression_parse(expr),
					vars = expression_varRefs(ast),
					obj, ref;
			
				if (vars == null) 
					return;
				
				if (typeof vars === 'string') {
					
					if (obj_isDefined(model, vars)) {
						obj = model;
					}
					
					if (obj == null && obj_isDefined(controller, vars)) {
						obj = controller;
					}
					
					if (obj == null) {
						obj = model;
					}
					
					obj_addObserver(obj, vars, callback);
					return;
				}
			
				var isArray = vars.length != null && typeof vars.splice === 'function',
					imax = isArray === true ? vars.length : 1,
					i = 0,
					x;
				
				for (; i < imax; i++) {
					x = isArray
						? vars[i]
						: vars;
					if (x == null) 
						continue;
					
					
					if (typeof x === 'object') {
						
						obj = expression_eval_origin(x.accessor, model, cntx, controller);
						
						if (obj == null || typeof obj !== 'object') {
							console.error('Binding failed to an object over accessor', x);
							continue;
						}
						
						x = x.ref;
					}
					
					else if (obj_isDefined(model, x)) {
						obj = model;
					}
					
					else if (obj_isDefined(controller, x)) {
						obj = controller;
					}
					
					else {
						obj = model;
					}
					
					
					if (x == null || x === '$c') 
						continue;
					
					obj_addObserver(obj, x, callback);
				}
			
				return;
			};
			
			expression_unbind = function(expr, model, controller, callback) {
				
				if (typeof controller === 'function') 
					console.warn('[mask.binding] - expression unbind(expr, model, controller, callback)');
				
				
				if (expr === '.') {
					arr_removeObserver(model, callback);
					return;
				}
				
				var vars = expression_varRefs(expr),
					x, ref;
			
				if (vars == null) 
					return;
				
				if (typeof vars === 'string') {
					if (obj_isDefined(model, vars)) 
						obj_removeObserver(model, vars, callback);
					
					
					if (obj_isDefined(controller, vars)) 
						obj_removeObserver(controller, vars, callback);
					
					return;
				}
				
				var isArray = vars.length != null && typeof vars.splice === 'function',
					imax = isArray === true ? vars.length : 1,
					i = 0,
					x;
				
				for (; i < imax; i++) {
					x = isArray
						? vars[i]
						: vars;
					if (x == null) 
						continue;
					
					if (typeof x === 'object') {
						
						var obj = expression_eval_origin(x.accessor, model, null, controller);
						if (obj) 
							obj_removeObserver(obj, x.ref, callback);
						
						continue;
					}
					
					if (obj_isDefined(model, x)) 
						obj_removeObserver(model, x, callback);
					
					if (obj_isDefined(controller, x)) 
						obj_removeObserver(controller, x, callback);
				}
			
			}
			
			/**
			 * expression_bind only fires callback, if some of refs were changed,
			 * but doesnt supply new expression value
			 **/
			expression_createBinder = function(expr, model, cntx, controller, callback) {
				var locks = 0;
				return function binder() {
					if (++locks > 1) {
						locks = 0;
						console.warn('<mask:bind:expression> Concurent binder detected', expr);
						return;
					}
					
					var value = expression_eval(expr, model, cntx, controller);
					if (arguments.length > 1) {
						var args = _Array_slice.call(arguments);
						
						args[0] = value;
						callback.apply(this, args);
						
					} else {
						
						callback(value);
					}
					
					locks--;
				};
			};
			
			expression_createListener = function(callback){
				var locks = 0;
				return function(){
					if (++locks > 1) {
						locks = 0;
						console.warn('<mask:listener:expression> concurent binder');
						return;
					}
					
					callback();
					locks--;
				}
			};
			
		}());
		
		
		
		// end:source ../src/util/expression.js
		// source ../src/util/signal.js
		var signal_parse,
			signal_create
			;
		
		(function(){
			
			
			signal_parse = function(str, isPiped, defaultType) {
				var signals = str.split(';'),
					set = [],
					i = 0,
					imax = signals.length,
					x,
					signalName, type,
					signal;
					
			
				for (; i < imax; i++) {
					x = signals[i].split(':');
					
					if (x.length !== 1 && x.length !== 2) {
						console.error('Too much ":" in a signal def.', signals[i]);
						continue;
					}
					
					
					type = x.length == 2 ? x[0] : defaultType;
					signalName = x[x.length == 2 ? 1 : 0];
					
					signal = signal_create(signalName.trim(), type, isPiped);
					
					if (signal != null) {
						set.push(signal);
					}
				}
				
				return set;
			};
			
			
			signal_create = function(signal, type, isPiped) {
				if (isPiped !== true) {
					return {
						signal: signal,
						type: type
					};
				}
				
				var index = signal.indexOf('.');
				if (index === -1) {
					console.error('No pipe name in a signal', signal);
					return null;
				}
				
				return {
					signal: signal.substring(index + 1),
					pipe: signal.substring(0, index),
					type: type
				};
			};
		}());
		
		// end:source ../src/util/signal.js
	
		// source ../src/bindingProvider.js
		var BindingProvider = (function() {
			var Providers = {};
			
			mask.registerBinding = function(type, binding) {
				Providers[type] = binding;
			};
		
			mask.BindingProvider = BindingProvider;
			
			function BindingProvider(model, element, controller, bindingType) {
		
				if (bindingType == null) {
					bindingType = controller.compoName === ':bind' ? 'single' : 'dual';
				}
		
				var attr = controller.attr,
					type;
		
				this.node = controller; // backwards compat.
				this.controller = controller;
		
				this.model = model;
				this.element = element;
				this.value = attr.value;
				this.property = attr.property;
				this.setter = attr.setter;
				this.getter = attr.getter;
				this.dismiss = 0;
				this.bindingType = bindingType;
				this.log = false;
				this.signal_domChanged = null;
				this.signal_objectChanged = null;
				this.locked = false;
				
				
				if (this.property == null && this.getter == null) {
		
					switch (element.tagName) {
						case 'INPUT':
							type = element.getAttribute('type');
							if ('checkbox' === type) {
								this.property = 'element.checked';
								break;
							}
							this.property = 'element.value';
							break;
						case 'TEXTAREA':
							this.property = 'element.value';
							break;
						case 'SELECT':
							this.domWay = DomWaysProto.SELECT;
							break;
						default:
							this.property = 'element.innerHTML';
							break;
					}
				}
		
				if (attr['log']) {
					this.log = true;
					if (attr.log !== 'log') {
						this.logExpression = attr.log;
					}
				}
		
				/**
				 *	Send signal on OBJECT or DOM change
				 */
				if (attr['x-signal']) {
					var signal = signal_parse(attr['x-signal'], null, 'dom')[0],
						signalType = signal && signal.type;
					
					switch(signalType){
						case 'dom':
						case 'object':
							this['signal_' + signalType + 'Changed'] = signal.signal;
							break;
						default:
							console.error('Signal typs is not supported', signal);
							break;
					}
					
					
				}
				
				if (attr['x-pipe-signal']) {
					var signal = signal_parse(attr['x-pipe-signal'], true, 'dom')[0],
						signalType = signal && signal.type;
						
					switch(signalType){
						case 'dom':
						case 'object':
							this['pipe_' + signalType + 'Changed'] = signal;
							break;
						default:
							console.error('Pipe type is not supported');
							break;
					}
				}
				
				
				if (attr['dom-slot']) {
					this.slots = {};
					// @hack - place dualb. provider on the way of a signal
					// 
					var parent = controller.parent,
						newparent = parent.parent;
						
					parent.parent = this;
					this.parent = newparent;
					
					this.slots[attr['dom-slot']] = function(sender, value){
						this.domChanged(sender, value);
					}
				}
				
				/*
				 *  @obsolete: attr name : 'x-pipe-slot'
				 */
				var pipeSlot = attr['object-pipe-slot'] || attr['x-pipe-slot'];
				if (pipeSlot) {
					var str = pipeSlot,
						index = str.indexOf('.'),
						pipeName = str.substring(0, index),
						signal = str.substring(index + 1);
					
					this.pipes = {};
					this.pipes[pipeName] = {};
					this.pipes[pipeName][signal] = function(){
						this.objectChanged();
					};
					
					__Compo.pipe.addController(this);
				}
		
		
				if (attr.expression) {
					this.expression = attr.expression;
					if (this.value == null && bindingType !== 'single') {
						var refs = expression_varRefs(this.expression);
						if (typeof refs === 'string') {
							this.value = refs;
						} else {
							console.warn('Please set value attribute in DualBind Control.');
						}
					}
					return;
				}
				
				this.expression = this.value;
			}
			
			BindingProvider.create = function(model, element, controller, bindingType) {
		
				/* Initialize custom provider */
				var type = controller.attr.bindingProvider,
					CustomProvider = type == null ? null : Providers[type],
					provider;
		
				if (typeof CustomProvider === 'function') {
					return new CustomProvider(model, element, controller, bindingType);
				}
		
				provider = new BindingProvider(model, element, controller, bindingType);
		
				if (CustomProvider != null) {
					obj_extend(provider, CustomProvider);
				}
		
		
				return provider;
			};
			
			BindingProvider.bind = function(provider){
				return apply_bind(provider);
			}
		
		
			BindingProvider.prototype = {
				constructor: BindingProvider,
				
				dispose: function() {
					expression_unbind(this.expression, this.model, this.controller, this.binder);
				},
				objectChanged: function(x) {
					if (this.dismiss-- > 0) {
						return;
					}
					if (this.locked === true) {
						console.warn('Concurance change detected', this);
						return;
					}
					this.locked = true;
		
					if (x == null) {
						x = this.objectWay.get(this, this.expression);
					}
		
					this.domWay.set(this, x);
		
					if (this.log) {
						console.log('[BindingProvider] objectChanged -', x);
					}
					if (this.signal_objectChanged) {
						signal_emitOut(this.node, this.signal_objectChanged, [x]);
					}
					
					if (this.pipe_objectChanged) {
						var pipe = this.pipe_objectChanged;
						__Compo.pipe(pipe.pipe).emit(pipe.signal);
					}
		
					this.locked = false;
				},
				domChanged: function(event, value) {
		
					if (this.locked === true) {
						console.warn('Concurance change detected', this);
						return;
					}
					this.locked = true;
		
					var x = value || this.domWay.get(this),
						valid = true;
		
					if (this.node.validations) {
		
						for (var i = 0, validation, length = this.node.validations.length; i < length; i++) {
							validation = this.node.validations[i];
							if (validation.validate(x, this.element, this.objectChanged.bind(this)) === false) {
								valid = false;
								break;
							}
						}
					}
		
					if (valid) {
						this.dismiss = 1;
						this.objectWay.set(this.model, this.value, x);
						this.dismiss = 0;
		
						if (this.log) {
							console.log('[BindingProvider] domChanged -', x);
						}
		
						if (this.signal_domChanged) {
							signal_emitOut(this.node, this.signal_domChanged, [x]);
						}
						
						if (this.pipe_domChanged) {
							var pipe = this.pipe_domChanged;
							__Compo.pipe(pipe.pipe).emit(pipe.signal);
						}	
					}
		
					this.locked = false;
				},
				objectWay: {
					get: function(provider, expression) {
						return expression_eval(expression, provider.model, provider.cntx, provider.controller);
					},
					set: function(obj, property, value) {
						obj_setProperty(obj, property, value);
					}
				},
				/**
				 * usually you have to override this object, while getting/setting to element,
				 * can be very element(widget)-specific thing
				 *
				 * Note: The Functions are static
				 */
				domWay: {
					get: function(provider) {
						if (provider.getter) {
							var controller = provider.node.parent;
		
							// if DEBUG
							if (controller == null || typeof controller[provider.getter] !== 'function') {
								console.error('Mask.bindings: Getter should be a function', provider.getter, provider);
								return null;
							}
							// endif
		
							return controller[provider.getter]();
						}
						return obj_getProperty(provider, provider.property);
					},
					set: function(provider, value) {
						if (provider.setter) {
							var controller = provider.node.parent;
		
							// if DEBUG
							if (controller == null || typeof controller[provider.setter] !== 'function') {
								console.error('Mask.bindings: Setter should be a function', provider.setter, provider);
								return;
							}
							// endif
		
							controller[provider.setter](value);
						} else {
							obj_setProperty(provider, provider.property, value);
						}
		
					}
				}
			};
			
			var DomWaysProto = {
				SELECT: {
					get: function(provider) {
						var element = provider.element;
						
						if (element.selectedIndex === -1) {
							return '';
						}
						
						return element.options[element.selectedIndex].getAttribute('name');
					},
					set: function(provider, value) {
						var element = provider.element;
						
						for (var i = 0, x, imax = element.options.length; i < imax; i++){
							x = element.options[i];
							
		                    // eqeq (not strict compare)
							if (x.getAttribute('name') == value) {
								element.selectedIndex = i;
								return;
							}
						}
		
					}
				}
			};
		
		
		
			function apply_bind(provider) {
		
				var expr = provider.expression,
					model = provider.model,
					onObjChanged = provider.objectChanged = provider.objectChanged.bind(provider);
		
				provider.binder = expression_createBinder(expr, model, provider.cntx, provider.node, onObjChanged);
		
				expression_bind(expr, model, provider.cntx, provider.node, provider.binder);
		
				if (provider.bindingType === 'dual') {
					var attr = provider.node.attr;
					
					if (!attr['change-slot'] && !attr['change-pipe-event']) {
						var element = provider.element,
							/*
							 * @obsolete: attr name : 'changeEvent'
							 */
							eventType = attr['change-event'] || attr.changeEvent || 'change',
							onDomChange = provider.domChanged.bind(provider);
			
						__dom_addEventListener(element, eventType, onDomChange);
					}
					
						
					if (!provider.objectWay.get(provider, provider.expression)) {
						
						setTimeout(function(){
							if (provider.domWay.get(provider))
								provider.domChanged();	
						})
						
						return provider;
					}
				}
		
				// trigger update
				provider.objectChanged();
				return provider;
			}
		
			function signal_emitOut(controller, signal, args) {
				var slots = controller.slots;
				if (slots != null && typeof slots[signal] === 'function') {
					if (slots[signal].apply(controller, args) === false) {
						return;
					}
				}
		
				if (controller.parent != null) {
					signal_emitOut(controller.parent, signal, args);
				}
			}
		
		
			obj_extend(BindingProvider, {
				addObserver: obj_addObserver,
				removeObserver: obj_removeObserver
			});
		
			return BindingProvider;
		
		}());
		
		// end:source ../src/bindingProvider.js
	
		// source ../src/mask-handler/visible.js
		/**
		 * visible handler. Used to bind directly to display:X/none
		 *
		 * attr =
		 *    check - expression to evaluate
		 *    bind - listen for a property change
		 */
		
		function VisibleHandler() {}
		
		__mask_registerHandler(':visible', VisibleHandler);
		
		
		VisibleHandler.prototype = {
			constructor: VisibleHandler,
		
			refresh: function(model, container) {
				container.style.display = expression_eval(this.attr.check, model) ? '' : 'none';
			},
			renderStart: function(model, cntx, container) {
				this.refresh(model, container);
		
				if (this.attr.bind) {
					obj_addObserver(model, this.attr.bind, this.refresh.bind(this, model, container));
				}
			}
		};
		
		// end:source ../src/mask-handler/visible.js
		// source ../src/mask-handler/bind.js
		/**
		 *  Mask Custom Tag Handler
		 *	attr =
		 *		attr: {String} - attribute name to bind
		 *		prop: {Stirng} - property name to bind
		 *		- : {default} - innerHTML
		 */
		
		
		
		(function() {
		
			function Bind() {}
		
			__mask_registerHandler(':bind', Bind);
		
			Bind.prototype = {
				constructor: Bind,
				renderEnd: function(els, model, cntx, container){
					
					this.provider = BindingProvider.create(model, container, this, 'single');
					
					BindingProvider.bind(this.provider);
				},
				dispose: function(){
					if (this.provider && typeof this.provider.dispose === 'function') {
						this.provider.dispose();
					}
				}
			};
		
		
		}());
		
		// end:source ../src/mask-handler/bind.js
		// source ../src/mask-handler/dualbind.js
		/**
		 *	Mask Custom Handler
		 *
		 *	2 Way Data Model binding
		 *
		 *
		 *	attr =
		 *		value: {string} - property path in object
		 *		?property : {default} 'element.value' - value to get/set from/to HTMLElement
		 *		?changeEvent: {default} 'change' - listen to this event for HTMLELement changes
		 *
		 *		?setter: {string} - setter function of a parent controller
		 *		?getter: {string} - getter function of a parent controller
		 *
		 *
		 */
		
		function DualbindHandler() {}
		
		__mask_registerHandler(':dualbind', DualbindHandler);
		
		
		
		DualbindHandler.prototype = {
			constructor: DualbindHandler,
		
			renderEnd: function(elements, model, cntx, container) {
				this.provider = BindingProvider.create(model, container, this);
		
				if (this.components) {
					for (var i = 0, x, length = this.components.length; i < length; i++) {
						x = this.components[i];
		
						if (x.compoName === ':validate') {
							(this.validations || (this.validations = []))
								.push(x);
						}
					}
				}
		
				if (!this.attr['no-validation'] && !this.validations) {
					var Validate = model.Validate,
						prop = this.provider.value;
		
					if (Validate == null && prop.indexOf('.') !== -1) {
						var parts = prop.split('.'),
							i = 0,
							imax = parts.length,
							obj = model[parts[0]];
						while (Validate == null && ++i < imax && obj) {
							Validate = obj.Validate;
							obj = obj[parts[i]]
						}
						prop = parts.slice(i).join('.');
					}
		
					var validator = Validate && Validate[prop];
					if (typeof validator === 'function') {
		
						validator = mask
							.getHandler(':validate')
							.createCustom(container, validator);
		
		
						(this.validations || (this.validations = []))
							.push(validator);
		
					}
				}
		
		
				BindingProvider.bind(this.provider);
			},
			dispose: function() {
				if (this.provider && typeof this.provider.dispose === 'function') {
					this.provider.dispose();
				}
			},
		
			handlers: {
				attr: {
					'x-signal': function() {}
				}
			}
		};
		// end:source ../src/mask-handler/dualbind.js
		// source ../src/mask-handler/validate.js
		(function() {
			
			var class_INVALID = '-validate-invalid';
		
			mask.registerValidator = function(type, validator) {
				Validators[type] = validator;
			};
		
			function Validate() {}
		
			__mask_registerHandler(':validate', Validate);
		
		
		
		
			Validate.prototype = {
				constructor: Validate,
		        attr: {},
				renderStart: function(model, cntx, container) {
					this.element = container;
					
					if (this.attr.value) {
						var validatorFn = Validate.resolveFromModel(model, this.attr.value);
							
						if (validatorFn) {
							this.validators = [new Validator(validatorFn)];
						}
					}
				},
				/**
				 * @param input - {control specific} - value to validate
				 * @param element - {HTMLElement} - (optional, @default this.element) -
				 *				Invalid message is schown(inserted into DOM) after this element
				 * @param oncancel - {Function} - Callback function for canceling
				 *				invalid notification
				 */
				validate: function(input, element, oncancel) {
					if (element == null){
						element = this.element;
					}
		
					if (this.attr) {
						
						if (input == null && this.attr.getter) {
							input = obj_getProperty({
								node: this,
								element: element
							}, this.attr.getter);
						}
						
						if (input == null && this.attr.value) {
							input = obj_getProperty(this.model, this.attr.value);
						}
					}
					
					
		
					if (this.validators == null) {
						this.initValidators();
					}
		
					for (var i = 0, x, imax = this.validators.length; i < imax; i++) {
						x = this.validators[i].validate(input)
						
						if (x && !this.attr.silent) {
							this.notifyInvalid(element, x, oncancel);
							return false;
						}
					}
		
					this.makeValid(element);
					return true;
				},
				notifyInvalid: function(element, message, oncancel){
					return notifyInvalid(element, message, oncancel);
				},
				makeValid: function(element){
					return makeValid(element);
				},
				initValidators: function() {
					this.validators = [];
					
					for (var key in this.attr) {
						
						
						switch (key) {
							case 'message':
							case 'value':
							case 'getter':
								continue;
						}
						
						if (key in Validators === false) {
							console.error('Unknown Validator:', key, this);
							continue;
						}
						
						var x = Validators[key];
						
						this.validators.push(new Validator(x(this.attr[key], this), this.attr.message));
					}
				}
			};
		
			
			Validate.resolveFromModel = function(model, property){
				return obj_getProperty(model.Validate, property);
			};
			
			Validate.createCustom = function(element, validator){
				var validate = new Validate();
				
				validate.element = element;
				validate.validators = [new Validator(validator)];
				
				return validate;
			};
			
			
			function Validator(fn, defaultMessage) {
				this.fn = fn;
				this.message = defaultMessage;
			}
			Validator.prototype.validate = function(value){
				var result = this.fn(value);
				
				if (result === false) {
					return this.message || ('Invalid - ' + value);
				}
				return result;
			};
			
		
			function notifyInvalid(element, message, oncancel) {
				console.warn('Validate Notification:', element, message);
		
				var next = domLib(element).next('.' + class_INVALID);
				if (next.length === 0) {
					next = domLib('<div>')
						.addClass(class_INVALID)
						.html('<span></span><button>cancel</button>')
						.insertAfter(element);
				}
		
				return next
					.children('button')
					.off()
					.on('click', function() {
						next.hide();
						oncancel && oncancel();
			
					})
					.end()
					.children('span').text(message)
					.end()
					.show();
			}
		
			function makeValid(element) {
				return domLib(element).next('.' + class_INVALID).hide();
			}
		
			__mask_registerHandler(':validate:message', Compo({
				template: 'div.' + class_INVALID + ' { span > "~[bind:message]" button > "~[cancel]" }',
				
				onRenderStart: function(model){
					if (typeof model === 'string') {
						model = {
							message: model
						};
					}
					
					if (!model.cancel) {
						model.cancel = 'cancel';
					}
					
					this.model = model;
				},
				compos: {
					button: '$: button',
				},
				show: function(message, oncancel){
					var that = this;
					
					this.model.message = message;
					this.compos.button.off().on(function(){
						that.hide();
						oncancel && oncancel();
						
					});
					
					this.$.show();
				},
				hide: function(){
					this.$.hide();
				}
			}));
			
			
			var Validators = {
				match: function(match) {
					
					return function(str){
						return new RegExp(match).test(str);
					};
				},
				unmatch:function(unmatch) {
					
					return function(str){
						return !(new RegExp(unmatch).test(str));
					};
				},
				minLength: function(min) {
					
					return function(str){
						return str.length >= parseInt(min, 10);
					};
				},
				maxLength: function(max) {
					
					return function(str){
						return str.length <= parseInt(max, 10);
					};
				},
				check: function(condition, node){
					
					return function(str){
						return expression_eval('x' + condition, node.model, {x: str}, node);
					};
				}
				
		
			};
		
		
		
		}());
		
		// end:source ../src/mask-handler/validate.js
		// source ../src/mask-handler/validate.group.js
		function ValidateGroup() {}
		
		__mask_registerHandler(':validate:group', ValidateGroup);
		
		
		ValidateGroup.prototype = {
			constructor: ValidateGroup,
			validate: function() {
				var validations = getValidations(this);
		
		
				for (var i = 0, x, length = validations.length; i < length; i++) {
					x = validations[i];
					if (!x.validate()) {
						return false;
					}
				}
				return true;
			}
		};
		
		function getValidations(component, out){
			if (out == null){
				out = [];
			}
		
			if (component.components == null){
				return out;
			}
			var compos = component.components;
			for(var i = 0, x, length = compos.length; i < length; i++){
				x = compos[i];
		
				if (x.compoName === 'validate'){
					out.push(x);
					continue;
				}
		
				getValidations(x);
			}
			return out;
		}
		
		// end:source ../src/mask-handler/validate.group.js
	
		// source ../src/mask-util/bind.js
		
		/**
		 *	Mask Custom Utility - for use in textContent and attribute values
		 */
		
		(function(){
			
			function attr_strReplace(attrValue, currentValue, newValue) {
				if (!attrValue) {
					return newValue;
				}
				
				if (currentValue == null || currentValue === '') {
					return attrValue + ' ' + newValue;
				}
				
				return attrValue.replace(currentValue, newValue);
			}
		
			function create_refresher(type, expr, element, currentValue, attrName) {
		
				return function(value){
					switch (type) {
						case 'node':
							element.textContent = value;
							break;
						case 'attr':
							var _typeof = typeof element[attrName],
								currentAttr, attr;
		
		
							// handle properties first
							if ('boolean' === _typeof) {
								currentValue = element[attrName] = !!value;
								return;
							}
		
							if ('string' === _typeof) {
								currentValue = element[attrName] = attr_strReplace(element[attrName], currentValue, value);
								return;
							}
		
							currentAttr = element.getAttribute(attrName);
							attr = attr_strReplace(currentAttr, currentValue, value);
		
		
							element.setAttribute(attrName, attr);
							currentValue = value;
							break;
					}
				};
		
			}
		
		
			function bind (current, expr, model, ctx, element, controller, attrName, type){
				var	refresher =  create_refresher(type, expr, element, current, attrName),
					binder = expression_createBinder(expr, model, ctx, controller, refresher);
			
				expression_bind(expr, model, ctx, controller, binder);
			
			
				compo_attachDisposer(controller, function(){
					expression_unbind(expr, model, controller, binder);
				});
			}
		
			__mask_registerUtil('bind', {
				mode: 'partial',
				current: null,
				element: null,
				nodeRenderStart: function(expr, model, ctx, element, controller){
					
					var current = expression_eval(expr, model, ctx, controller);
					
					// though we apply value's to `this` context, but it is only for immediat use
					// in .node() function, as `this` context is a static object that share all bind
					// utils
					this.element = document.createTextNode(current);
					
					return (this.current = current);
				},
				node: function(expr, model, ctx, element, controller){
					bind(
						this.current,
						expr,
						model,
						ctx,
						this.element,
						controller,
						null,
						'node');
					
					return this.element;
				},
				
				attrRenderStart: function(expr, model, ctx, element, controller){
					return (this.current = expression_eval(expr, model, ctx, controller));
				},
				attr: function(expr, model, ctx, element, controller, attrName){
					bind(
						this.current,
						expr,
						model,
						ctx,
						element,
						controller,
						attrName,
						'attr');
					
					return this.current;
				}
			});
		
		}());
		
		// end:source ../src/mask-util/bind.js
		
		// source ../src/mask-attr/xxVisible.js
		
		
		__mask_registerAttrHandler('xx-visible', function(node, attrValue, model, cntx, element, controller) {
			
			var binder = expression_createBinder(attrValue, model, cntx, controller, function(value){
				element.style.display = value ? '' : 'none';
			});
			
			expression_bind(attrValue, model, cntx, controller, binder);
			
			compo_attachDisposer(controller, function(){
				expression_unbind(attrValue, model,  controller, binder);
			});
			
			
			
			if (!expression_eval(attrValue, model, cntx, controller)) {
				
				element.style.display = 'none';
			}
		});
		// end:source ../src/mask-attr/xxVisible.js
		// source ../src/mask-attr/xToggle.js
		/**
		 *	Toggle value with ternary operator on an event.
		 *
		 *	button x-toggle='click: foo === "bar" ? "zet" : "bar" > 'Toggle'
		 */
		
		__mask_registerAttrHandler('x-toggle', 'client', function(node, attrValue, model, ctx, element, controller){
		    
		    
		    var event = attrValue.substring(0, attrValue.indexOf(':')),
		        expression = attrValue.substring(event.length + 1),
		        ref = expression_varRefs(expression);
		    
			if (typeof ref !== 'string') {
				// assume is an array
				ref = ref[0];
			}
			
		    __dom_addEventListener(element, event, function(){
		        var value = expression_eval(expression, model, ctx, controller);
		        
		        obj_setProperty(model, ref, value);
		    });
		});
		
		// end:source ../src/mask-attr/xToggle.js
		// source ../src/mask-attr/xClassToggle.js
		/**
		 *	Toggle Class Name
		 *
		 *	button x-toggle='click: selected'
		 */
		
		__mask_registerAttrHandler('x-class-toggle', 'client', function(node, attrValue, model, ctx, element, controller){
		    
		    
		    var event = attrValue.substring(0, attrValue.indexOf(':')),
		        $class = attrValue.substring(event.length + 1).trim();
		    
			
		    __dom_addEventListener(element, event, function(){
		         domLib(element).toggleClass($class);
		    });
		});
		
		// end:source ../src/mask-attr/xClassToggle.js
	
		// source ../src/sys/sys.js
		(function(mask) {
		
			function Sys() {
				this.attr = {
					'debugger': null,
					'use': null,
					'log': null,
					'if': null,
					'each': null,
					'visible': null
				};
			}
		
		
			mask.registerHandler('%%', Sys);
		
			// source attr.use.js
			var attr_use = (function() {
			
				var UseProto = {
					refresh: function(value) {
			
						this.model = value;
			
						if (this.elements) {
							dom_removeAll(this.elements);
			
							this.elements = [];
						}
			
						if (__Compo != null) {
							__Compo.dispose(this);
						}
			
						dom_insertBefore( //
						compo_render(this, this.nodes, this.model, this.cntx), this.placeholder);
			
					},
					dispose: function(){
						expression_unbind(this.expr, this.originalModel, this, this.binder);
					}
				};
			
				return function attr_use(self, model, cntx, container) {
			
					var expr = self.attr['use'];
			
					obj_extend(self, {
						expr: expr,
						placeholder: document.createComment(''),
						binder: expression_createBinder(expr, model, cntx, self, UseProto.refresh.bind(self)),
						
						originalModel: model,
						model: expression_eval(expr, model, cntx, self),
			
						dispose: UseProto.dispose
					});
			
			
					expression_bind(expr, model, cntx, self, self.binder);
			
					container.appendChild(self.placeholder);
				};
			
			}());
			
			// end:source attr.use.js
			// source attr.log.js
			var attr_log = (function() {
			
				return function attr_log(self, model, cntx) {
			
					function log(value) {
						console.log('Logger > Key: %s, Value: %s', expr, value);
					}
			
					var expr = self.attr['log'],
						binder = expression_createBinder(expr, model, cntx, self, log),
						value = expression_eval(expr, model, cntx, self);
			
					expression_bind(expr, model, cntx, self, binder);
			
			
					compo_attachDisposer(self, function(){
						expression_unbind(expr, model, self, binder);
					});
			
					log(value);
				};
			
			}());
			
			// end:source attr.log.js
			// source attr.if.js
			var attr_if = (function() {
			
				var IfProto = {
					refresh: function(value) {
			
						if (this.elements == null && !value) {
							// was not render and still falsy
							return;
						}
			
						if (this.elements == null) {
							// was not render - do it
			
							dom_insertBefore( //
							compo_render(this, this.template, this.model, this.cntx), this.placeholder);
			
							this.$ = domLib(this.elements);
						} else {
			
							if (this.$ == null) {
								this.$ = domLib(this.elements);
							}
							this.$[value ? 'show' : 'hide']();
						}
			
						if (this.onchange) {
							this.onchange(value);
						}
			
					},
					dispose: function(){
						expression_unbind(this.expr, this.model, this, this.binder);
						this.onchange = null;
						this.elements = null;
					}
				};
			
			
				function bind(fn, compo) {
					return function(){
						return fn.apply(compo, arguments);
					};
				}
			
				return function(self, model, cntx, container) {
			
					var expr = self.attr['if'];
			
			
					obj_extend(self, {
						expr: expr,
						template: self.nodes,
						placeholder: document.createComment(''),
						binder: expression_createBinder(expr, model, cntx, self, bind(IfProto.refresh, self)),
			
						state: !! expression_eval(expr, model, cntx, self)
					});
			
					if (!self.state) {
						self.nodes = null;
					}
			
					expression_bind(expr, model, cntx, self, self.binder);
			
					container.appendChild(self.placeholder);
				};
			
			}());
			
			// end:source attr.if.js
			// source attr.if.else.js
			var attr_else = (function() {
			
				var ElseProto = {
					refresh: function(value) {
						if (this.elements == null && value) {
							// was not render and still truthy
							return;
						}
			
						if (this.elements == null) {
							// was not render - do it
			
							dom_insertBefore(compo_render(this, this.template, this.model, this.cntx));
							this.$ = domLib(this.elements);
			
							return;
						}
			
						if (this.$ == null) {
							this.$ = domLib(this.elements);
						}
			
						this.$[value ? 'hide' : 'show']();
					}
				};
			
				return function(self, model, cntx, container) {
			
			
					var compos = self.parent.components,
						prev = compos && compos[compos.length - 1];
			
					self.template = self.nodes;
					self.placeholder = document.createComment('');
			
					// if DEBUG
					if (prev == null || prev.compoName !== '%%' || prev.attr['if'] == null) {
						console.error('Mask.Binding: Binded ELSE should be after binded IF - %% if="expression" { ...');
						return;
					}
					// endif
			
			
					// stick to previous IF controller
					prev.onchange = ElseProto.refresh.bind(self);
			
					if (prev.state) {
						self.nodes = null;
					}
			
			
			
					container.appendChild(self.placeholder);
				};
			
			}());
			
			// end:source attr.if.else.js
			// source attr.each.js
			var attr_each = (function() {
			
				// source attr.each.helper.js
				function list_prepairNodes(compo, arrayModel) {
					var nodes = [];
				
					if (arrayModel == null || typeof arrayModel !== 'object' || arrayModel.length == null) {
						return nodes;
					}
				
					var i = 0,
						length = arrayModel.length,
						model;
				
					for (; i < length; i++) {
				
						model = arrayModel[i];
				
						//create references from values to distinguish the models
						switch (typeof model) {
						case 'string':
						case 'number':
						case 'boolean':
							model = arrayModel[i] = Object(model);
							break;
						}
				
						nodes[i] = new ListItem(compo.template, model, compo);
					}
					return nodes;
				}
				
				
				function list_sort(self, array) {
				
					var compos = self.components,
						i = 0,
						imax = compos.length,
						j = 0,
						jmax = null,
						element = null,
						compo = null,
						fragment = document.createDocumentFragment(),
						sorted = [];
				
					for (; i < imax; i++) {
						compo = compos[i];
						if (compo.elements == null || compo.elements.length === 0) {
							continue;
						}
				
						for (j = 0, jmax = compo.elements.length; j < jmax; j++) {
							element = compo.elements[j];
							element.parentNode.removeChild(element);
						}
					}
				
					outer: for (j = 0, jmax = array.length; j < jmax; j++) {
				
						for (i = 0; i < imax; i++) {
							if (array[j] === compos[i].model) {
								sorted[j] = compos[i];
								continue outer;
							}
						}
				
						console.warn('No Model Found for', array[j]);
					}
				
				
				
					for (i = 0, imax = sorted.length; i < imax; i++) {
						compo = sorted[i];
				
						if (compo.elements == null || compo.elements.length === 0) {
							continue;
						}
				
				
						for (j = 0, jmax = compo.elements.length; j < jmax; j++) {
							element = compo.elements[j];
				
							fragment.appendChild(element);
						}
					}
				
					self.components = sorted;
				
					dom_insertBefore(fragment, self.placeholder);
				
				}
				
				function list_update(self, deleteIndex, deleteCount, insertIndex, rangeModel) {
					if (deleteIndex != null && deleteCount != null) {
						var i = deleteIndex,
							length = deleteIndex + deleteCount;
				
						if (length > self.components.length) {
							length = self.components.length;
						}
				
						for (; i < length; i++) {
							if (compo_dispose(self.components[i], self)){
								i--;
								length--;
							}
						}
					}
				
					if (insertIndex != null && rangeModel && rangeModel.length) {
				
						var component = new Component(),
							nodes = list_prepairNodes(self, rangeModel),
							fragment = compo_render(component, nodes),
							compos = component.components;
				
						compo_fragmentInsert(self, insertIndex, fragment);
						compo_inserted(component);
				
						if (self.components == null) {
							self.components = [];
						}
				
						self.components.splice.apply(self.components, [insertIndex, 0].concat(compos));
					}
				}
				
				function list_remove(self, removed){
					var compos = self.components,
						i = compos.length,
						x;
					while(--i > -1){
						x = compos[i];
						
						if (removed.indexOf(x.model) === -1) 
							continue;
						
						compo_dispose(x, self);
					}
				}
				
				// end:source attr.each.helper.js
			
				var Component = mask.Dom.Component,
					ListItem = (function() {
						var Proto = Component.prototype;
			
						function ListItem(template, model, parent) {
							this.nodes = template;
							this.model = model;
							this.parent = parent;
						}
			
						ListItem.prototype = {
							compoName: '%%.each.item',
							constructor: ListProto,
							renderEnd: function(elements) {
								this.elements = elements;
							}
						};
			
						for (var key in Proto) {
							ListItem.prototype[key] = Proto[key];
						}
			
						return ListItem;
			
					}());
			
			
				var ListProto = {
					append: function(model) {
						var item = new ListItem(this.template, model, this);
			
						mask.render(item, model, null, this.container, this);
					}
				};
			
			
				var EachProto = {
					refresh: function(array, method, args, result) {
						var i = 0,
							x, imax;
			
						if (method == null) {
							// this was new array setter and not an immutable function call
			
							if (this.components != null) {
								for (i = 0, imax = this.components.length; i < imax; i++) {
									x = this.components[i];
									if (compo_dispose(x, this)) {
										i--;
										imax--;
									}
								}
							}
			
			
							this.components = [];
							this.nodes = list_prepairNodes(this, array);
			
							dom_insertBefore(compo_render(this, this.nodes), this.placeholder);
							
							arr_each(this.components, compo_inserted);
							return;
						}
			
			
						for (imax = array.length; i < imax; i++) {
							//create references from values to distinguish the models
							x = array[i];
							switch (typeof x) {
							case 'string':
							case 'number':
							case 'boolean':
								array[i] = Object(x);
								break;
							}
						}
			
						switch (method) {
						case 'push':
							list_update(this, null, null, array.length, array.slice(array.length - 1));
							break;
						case 'pop':
							list_update(this, array.length, 1);
							break;
						case 'unshift':
							list_update(this, null, null, 0, array.slice(0, 1));
							break;
						case 'shift':
							list_update(this, 0, 1);
							break;
						case 'splice':
							var sliceStart = args[0],
								sliceRemove = args.length === 1 ? this.components.length : args[1],
								sliceAdded = args.length > 2 ? array.slice(args[0], args.length - 2 + args[0]) : null;
			
							list_update(this, sliceStart, sliceRemove, sliceStart, sliceAdded);
							break;
						case 'sort':
						case 'reverse':
							list_sort(this, array);
							break;
						case 'remove':
							if (result != null && result.length) {
								list_remove(this, result);
							}
							break;
						}
			
					},
					dispose: function() {
						expression_unbind(this.expr, this.model, this, this.refresh);
					}
				};
			
			
			
				return function attr_each(self, model, cntx, container) {
					if (self.nodes == null && typeof Compo !== 'undefined') {
						Compo.ensureTemplate(self);
					}
			
					var expr = self.attr.each || self.attr.foreach,
						current = expression_eval(expr, model, cntx, self);
			
					obj_extend(self, {
						expr: expr,
						binder: expression_createBinder(expr, model, cntx, self, EachProto.refresh.bind(self)),
						template: self.nodes,
						container: container,
						placeholder: document.createComment(''),
			
						dispose: EachProto.dispose
					});
			
					container.appendChild(self.placeholder);
			
					expression_bind(self.expr, model, cntx, self, self.binder);
			
					for (var method in ListProto) {
						self[method] = ListProto[method];
					}
			
			
					self.nodes = list_prepairNodes(self, current);
				};
			
			}());
			
			// end:source attr.each.js
			// source attr.visible.js
			var attr_visible = (function() {
			
				var VisibleProto = {
					refresh: function(){
			
						if (this.refreshing === true) {
							return;
						}
						this.refreshing = true;
			
						var visible = expression_eval(this.expr, this.model, this.cntx, this);
			
						for(var i = 0, imax = this.elements.length; i < imax; i++){
							this.elements[i].style.display = visible ? '' : 'none';
						}
			
						this.refreshing = false;
					},
			
					dispose: function(){
						expression_unbind(this.expr, this.model, this, this.binder);
					}
				};
			
				return function (self, model, cntx) {
			
					var expr = self.attr.visible;
			
					obj_extend(self, {
						expr: expr,
						binder: expression_createBinder(expr, model, cntx, self, VisibleProto.refresh.bind(self)),
			
						dispose: VisibleProto.dispose
					});
			
			
					expression_bind(expr, model, cntx, self, self.binder);
			
					VisibleProto.refresh.call(self);
				};
			
			}());
			
			// end:source attr.visible.js
		
		
		
		
			Sys.prototype = {
				constructor: Sys,
				elements: null,
				renderStart: function(model, cntx, container) {
					var attr = this.attr;
		
					if (attr['debugger'] != null) {
						debugger;
						return;
					}
		
					if (attr['use'] != null) {
						attr_use(this, model, cntx, container);
						return;
					}
		
					if (attr['log'] != null) {
						attr_log(this, model, cntx, container);
						return;
					}
		
					this.model = model;
		
					if (attr['if'] != null) {
						attr_if(this, model, cntx, container);
						return;
					}
		
					if (attr['else'] != null) {
						attr_else(this, model, cntx, container);
						return;
					}
		
					// foreach is deprecated
					if (attr['each'] != null || attr['foreach'] != null) {
						attr_each(this, model, cntx, container);
					}
				},
				render: null,
				renderEnd: function(elements) {
					this.elements = elements;
		
		
					if (this.attr['visible'] != null) {
						attr_visible(this, this.model, this.cntx);
					}
				}
			};
		
		}(mask));
		
		// end:source ../src/sys/sys.js
		// source ../src/statements/exports.js
		(function(){
			var custom_Statements = mask.getStatement();
			
			// source 1.utils.js
			var _getNodes,
				_renderElements,
				_renderPlaceholder,
				_compo_initAndBind,
				
				els_toggle
				
				;
				
			(function(){
				
				_getNodes = function(name, node, model, ctx, controller){
					return custom_Statements[name].getNodes(node, model, ctx, controller);
				};
				
				_renderElements = function(nodes, model, ctx, container, controller, children){
					if (nodes == null) 
						return null;
					
					var elements = [];
					builder_build(nodes, model, ctx, container, controller, elements);
					
					if (children == null) 
						return elements;
					
					arr_pushMany(children, elements);
					
					return elements;
				};
				
				_renderPlaceholder = function(compo, container){
					compo.placeholder = document.createComment('');
					container.appendChild(compo.placeholder);
				};
				
				_compo_initAndBind = function(compo, node, model, ctx, container, controller) {
					
					compo.parent = controller;
					compo.model = model;
					
					compo.refresh = fn_proxy(compo.refresh, compo);
					compo.binder = expression_createBinder(
						compo.expr,
						model,
						ctx,
						controller,
						compo.refresh
					);
					
					
					expression_bind(compo.expr, model, ctx, controller, compo.binder);
				};
				
				
				els_toggle = function(els, state){
					if (els == null) 
						return;
					
					var isArray = typeof els.splice === 'function',
						imax = isArray ? els.length : 1,
						i = -1,
						x;
					while ( ++i < imax ){
						x = isArray ? els[i] : els;
						x.style.display = state ? '' : 'none';
					}
				}
				
			}());
			// end:source 1.utils.js
			// source 2.if.js
			(function(){
				
				mask.registerHandler('+if', {
					
					$meta: {
						serializeNodes: true
					},
					
					render: function(model, ctx, container, controller, children){
						
						var node = this,
							nodes = _getNodes('if', node, model, ctx, controller),
							index = 0;
						
						var next = node;
						while(true){
							
							if (next.nodes === nodes) 
								break;
							
							index++;
							next = node.nextSibling;
							
							if (next == null || next.tagName !== 'else') {
								index = null;
								break;
							}
						}
						
						this.attr['switch-index'] = index;
						
						return _renderElements(nodes, model, ctx, container, controller, children);
					},
					
					renderEnd: function(els, model, ctx, container, controller){
						
						var compo = new IFStatement(),
							index = this.attr['switch-index'];
						
						compo.placeholder = document.createComment('');
						container.appendChild(compo.placeholder);
						
						initialize(compo, this, index, els, model, ctx, container, controller);
						
						
						return compo;
					},
					
					serializeNodes: function(current){
						
						var nodes = [ current ];
						while (true) {
							current = current.nextSibling;
							if (current == null || current.tagName !== 'else') 
								break;
							
							nodes.push(current);
						}
						
						return mask.stringify(nodes);
					}
					
				});
				
				
				function IFStatement() {}
				
				IFStatement.prototype = {
					compoName: '+if',
					ctx : null,
					model : null,
					controller : null,
					
					index : null,
					Switch : null,
					binder : null,
					
					refresh: function() {
						var compo = this,
							switch_ = compo.Switch,
							
							imax = switch_.length,
							i = -1,
							expr,
							item, index = 0;
							
						var currentIndex = compo.index,
							model = compo.model,
							ctx = compo.ctx,
							ctr = compo.controller
							;
						
						while ( ++i < imax ){
							expr = switch_[i].node.expression;
							if (expr == null) 
								break;
							
							if (expression_eval(expr, model, ctx, ctr)) 
								break;
						}
						
						if (currentIndex === i) 
							return;
						
						if (currentIndex != null) 
							els_toggle(switch_[currentIndex].elements, false);
						
						if (i === imax) {
							compo.index = null;
							return;
						}
						
						this.index = i;
						
						var current = switch_[i];
						if (current.elements != null) {
							els_toggle(current.elements, true);
							return;
						}
						
						var frag = mask.render(current.node.nodes, model, ctx, null, ctr);
						var els = frag.nodeType === Node.DOCUMENT_FRAGMENT_NODE
							? _Array_slice.call(frag.childNodes)
							: frag
							;
						
						
						dom_insertBefore(frag, compo.placeholder);
						
						current.elements = els;
						
					},
					dispose: function(){
						var switch_ = this.Switch,
							imax = switch_.length,
							i = -1,
							
							x, expr;
							
						while( ++i < imax ){
							x = switch_[i];
							expr = x.node.expression;
							
							if (expr) {
								expression_unbind(
									expr,
									this.model,
									this.controller,
									this.binder
								);
							}
							
							x.node = null;
							x.elements = null;
						}
						
						this.controller = null;
						this.model = null;
						this.ctx = null;
					}
				};
				
				function initialize(compo, node, index, elements, model, ctx, container, controller) {
					
					compo.model = model;
					compo.ctx = ctx;
					compo.controller = controller;
					
					compo.refresh = fn_proxy(compo.refresh, compo);
					compo.binder = expression_createListener(compo.refresh);
					compo.index = index;
					compo.Switch = [{
						node: node,
						elements: null
					}];
					
					expression_bind(node.expression, model, ctx, controller, compo.binder);
					
					while (true) {
						node = node.nextSibling;
						if (node == null || node.tagName !== 'else') 
							break;
						
						compo.Switch.push({
							node: node,
							elements: null
						});
						
						if (node.expression) 
							expression_bind(node.expression, model, ctx, controller, compo.binder);
					}
					
					if (index != null) 
						compo.Switch[index].elements = elements;
					
				}
			
				
			}());
			// end:source 2.if.js
			// source 3.switch.js
			(function(){
				
				var $Switch = custom_Statements['switch'],
					attr_SWITCH = 'switch-index'
					;
				
				var _nodes,
					_index;
				
				mask.registerHandler('+switch', {
					
					$meta: {
						serializeNodes: true
					},
			
					serializeNodes: function(current){
						return mask.stringify(current);
					},
					
					render: function(model, ctx, container, ctr, children){
						
						var value = expression_eval(this.expression, model, ctx, ctr);
						
						
						resolveNodes(value, this.nodes, model, ctx, ctr);
						
						if (_nodes == null) 
							return null;
						
						this.attr[attr_SWITCH] = _index;
						
						return _renderElements(_nodes, model, ctx, container, ctr, children);
					},
					
					renderEnd: function(els, model, ctx, container, ctr){
						
						var compo = new SwitchStatement(),
							index = this.attr[attr_SWITCH];
						
						_renderPlaceholder(compo, container);
						
						initialize(compo, this, index, els, model, ctx, container, ctr);
						
						return compo;
					}
					
				});
				
				
				function SwitchStatement() {}
				
				SwitchStatement.prototype = {
					compoName: '+switch',
					ctx: null,
					model: null,
					controller: null,
					
					index: null,
					nodes: null,
					Switch: null,
					binder: null,
					
					
					refresh: function(value) {
						
						var compo = this,
							switch_ = compo.Switch,
							
							imax = switch_.length,
							i = -1,
							expr,
							item, index = 0;
							
						var currentIndex = compo.index,
							model = compo.model,
							ctx = compo.ctx,
							ctr = compo.controller
							;
						
						resolveNodes(value, compo.nodes, model, ctx, ctr);
						
						if (_index === currentIndex) 
							return;
						
						if (currentIndex != null) 
							els_toggle(switch_[currentIndex], false);
						
						if (_index == null) {
							compo.index = null;
							return;
						}
						
						this.index = _index;
						
						var elements = switch_[_index];
						if (elements != null) {
							els_toggle(elements, true);
							return;
						}
						
						var frag = mask.render(_nodes, model, ctx, null, ctr);
						var els = frag.nodeType === Node.DOCUMENT_FRAGMENT_NODE
							? _Array_slice.call(frag.childNodes)
							: frag
							;
						
						
						dom_insertBefore(frag, compo.placeholder);
						
						switch_[_index] = els;
						
					},
					dispose: function(){
						expression_unbind(
							this.expr,
							this.model,
							this.controller,
							this.binder
						);
					
						this.controller = null;
						this.model = null;
						this.ctx = null;
						
						var switch_ = this.Switch,
							key,
							els, i, imax
							;
						
						for(key in switch_) {
							els = switch_[key];
							
							if (els == null)
								continue;
							
							imax = els.length;
							i = -1;
							while ( ++i < imax ){
								if (els[i].parentNode != null) 
									els[i].parentNode.removeChild(els[i]);
							}
						}
					}
				};
				
				function resolveNodes(val, nodes, model, ctx, ctr) {
					
					_nodes = $Switch.getNodes(val, nodes, model, ctx, ctr);
					_index = null;
					
					if (_nodes == null) 
						return;
					
					var imax = nodes.length,
						i = -1;
					while( ++i < imax ){
						if (nodes[i].nodes === _nodes) 
							break;
					}
						
					_index = i === imax ? null : i;
				}
				
				function initialize(compo, node, index, elements, model, ctx, container, ctr) {
					
					compo.ctx = ctx;
					compo.expr = node.expression;
					compo.model = model;
					compo.controller = ctr;
					compo.index = index;
					compo.nodes = node.nodes;
					
					compo.refresh = fn_proxy(compo.refresh, compo);
					compo.binder = expression_createBinder(
						compo.expr,
						model,
						ctx,
						ctr,
						compo.refresh
					);
					
					
					compo.Switch = new Array(node.nodes.length);
					
					if (index != null) 
						compo.Switch[index] = elements;
					
					expression_bind(node.expression, model, ctx, ctr, compo.binder);
				}
			
				
			}());
			// end:source 3.switch.js
			// source 4.with.js
			(function(){
				
				var $With = custom_Statements['with'];
					
				mask.registerHandler('+with', {
					$meta: {
						serializeNodes: true
					},
					
					render: function(model, ctx, container, ctr, childs){
						
						var val = expression_eval(this.expression, model, ctx, ctr);
						
						return build(this.nodes, val, ctx, container, ctr);
					},
					
					renderEnd: function(els, model, ctx, container, ctr){
						
						var compo = new WithStatement(this);
					
						compo.elements = els;
						compo.model = model;
						compo.parent = ctr;
						compo.refresh = fn_proxy(compo.refresh, compo);
						compo.binder = expression_createBinder(
							compo.expr,
							model,
							ctx,
							ctr,
							compo.refresh
						);
						
						expression_bind(compo.expr, model, ctx, ctr, compo.binder);
						
						_renderPlaceholder(compo, container);
						
						return compo;
					}
				});
				
				
				function WithStatement(node){
					this.expr = node.expression;
					this.nodes = node.nodes;
				}
				
				WithStatement.prototype = {
					compoName: '+with',
					elements: null,
					binder: null,
					model: null,
					parent: null,
					refresh: function(val){
						dom_removeAll(this.elements);
						
						if (this.components) {
							var imax = this.components.length,
								i = -1;
							while ( ++i < imax ){
								Compo.dispose(this.components[i]);
							}
							this.components.length = 0;
						}
						
						
						var fragment = document.createDocumentFragment();
						this.elements = build(this.nodes, val, null, fragment, this);
						
						dom_insertBefore(fragment, this.placeholder);
						compo_inserted(this);
					},
					
					
					dispose: function(){
						expression_unbind(
							this.expr,
							this.model,
							this.parent,
							this.binder
						);
					
						this.parent = null;
						this.model = null;
						this.ctx = null;
					}
					
				};
				
				
				function build(nodes, model, ctx, container, controller){
					
					var els = [];
					builder_build(nodes, model, ctx, container, controller, els);
					
					return els;
				}
			
			}());
			// end:source 4.with.js
			// source loop/exports.js
			(function(){
				
				// source utils.js
				
				
				function arr_createRefs(array){
					var imax = array.length,
						i = -1,
						x;
					while ( ++i < imax ){
						//create references from values to distinguish the models
						x = array[i];
						switch (typeof x) {
						case 'string':
						case 'number':
						case 'boolean':
							array[i] = Object(x);
							break;
						}
					}
				}
				
				
				function list_sort(self, array) {
				
					var compos = self.node.components,
						i = 0,
						imax = compos.length,
						j = 0,
						jmax = null,
						element = null,
						compo = null,
						fragment = document.createDocumentFragment(),
						sorted = [];
				
					for (; i < imax; i++) {
						compo = compos[i];
						if (compo.elements == null || compo.elements.length === 0) 
							continue;
						
						for (j = 0, jmax = compo.elements.length; j < jmax; j++) {
							element = compo.elements[j];
							element.parentNode.removeChild(element);
						}
					}
				
					
					outer: for (j = 0, jmax = array.length; j < jmax; j++) {
				
						for (i = 0; i < imax; i++) {
							if (array[j] === self._getModel(compos[i])) {
								sorted[j] = compos[i];
								continue outer;
							}
						}
				
						console.warn('No Model Found for', array[j]);
					}
				
				
				
					for (i = 0, imax = sorted.length; i < imax; i++) {
						compo = sorted[i];
				
						if (compo.elements == null || compo.elements.length === 0) {
							continue;
						}
				
				
						for (j = 0, jmax = compo.elements.length; j < jmax; j++) {
							element = compo.elements[j];
				
							fragment.appendChild(element);
						}
					}
				
					self.components = self.node.components = sorted;
				
					dom_insertBefore(fragment, self.placeholder);
				
				}
				
				function list_update(self, deleteIndex, deleteCount, insertIndex, rangeModel) {
					
					var node = self.node,
						compos = node.components
						;
					if (compos == null) 
						compos = node.components = []
					
					var prop1 = self.prop1,
						prop2 = self.prop2,
						type = self.type,
						
						ctx = self.ctx,
						ctr = self.node;
						;
					
					if (deleteIndex != null && deleteCount != null) {
						var i = deleteIndex,
							length = deleteIndex + deleteCount;
				
						if (length > compos.length) 
							length = compos.length;
						
						for (; i < length; i++) {
							if (compo_dispose(compos[i], node)){
								i--;
								length--;
							}
						}
					}
				
					if (insertIndex != null && rangeModel && rangeModel.length) {
				
						var i = compos.length,
							imax,
							fragment = self._build(node, rangeModel, ctx, ctr),
							new_ = compos.splice(i)
							; 
						compo_fragmentInsert(node, insertIndex, fragment, self.placeholder);
						
						compos.splice.apply(compos, [insertIndex, 0].concat(new_));
						i = 0;
						imax = new_.length;
						for(; i < imax; i++){
							__Compo.signal.emitIn(new_[i], 'domInsert');
						}
					}
				}
				
				function list_remove(self, removed){
					var compos = self.components,
						i = compos.length,
						x;
					while(--i > -1){
						x = compos[i];
						
						if (removed.indexOf(x.model) === -1) 
							continue;
						
						compo_dispose(x, self.node);
					}
				}
				
				
				// end:source utils.js
				// source proto.js
				var LoopStatementProto = {
					model: null,
					parent: null,
					refresh: function(value, method, args, result){
						var i = 0,
							x, imax;
							
						var node = this.node,
							
							model = this.model,
							ctx = this.ctx,
							ctr = this.node
							;
				
						if (method == null) {
							// this was new array/object setter and not an immutable function call
							
							var compos = node.components;
							if (compos != null) {
								var imax = compos.length,
									i = -1;
								while ( ++i < imax ){
									if (compo_dispose(compos[i], node)){
										i--;
										imax--;
									}
								}
								compos.length = 0;
							}
							
							var frag = this._build(node, value, ctx, ctr);
							
							dom_insertBefore(frag, this.placeholder);
							arr_each(node.components, compo_inserted);
							return;
						}
				
						var array = value;
						arr_createRefs(value);
						
				
						switch (method) {
						case 'push':
							list_update(this, null, null, array.length - 1, array.slice(array.length - 1));
							break;
						case 'pop':
							list_update(this, array.length, 1);
							break;
						case 'unshift':
							list_update(this, null, null, 0, array.slice(0, 1));
							break;
						case 'shift':
							list_update(this, 0, 1);
							break;
						case 'splice':
							var sliceStart = args[0],
								sliceRemove = args.length === 1 ? this.components.length : args[1],
								sliceAdded = args.length > 2 ? array.slice(args[0], args.length - 2 + args[0]) : null;
				
							list_update(this, sliceStart, sliceRemove, sliceStart, sliceAdded);
							break;
						case 'sort':
						case 'reverse':
							list_sort(this, array);
							break;
						case 'remove':
							if (result != null && result.length) 
								list_remove(this, result);
							break;
						}
					},
					
					dispose: function(){
						
						expression_unbind(
							this.expr, this.model, this.parent, this.binder
						);
					}
				};
				
				// end:source proto.js
				// source for.js
				(function(){
					
					var For = custom_Statements['for'],
					
						attr_PROP_1 = 'for-prop-1',
						attr_PROP_2 = 'for-prop-2',
						attr_TYPE = 'for-type',
						attr_EXPR = 'for-expr'
						;
						
					
					mask.registerHandler('+for', {
						$meta: {
							serializeNodes: true
						},
						
						serializeNodes: function(node){
							return mask.stringify(node);
						},
						
						render: function(model, ctx, container, controller, childs){
							
							var directive = For.parseFor(this.expression),
								attr = this.attr;
							
							attr[attr_PROP_1] = directive[0];
							attr[attr_PROP_2] = directive[1];
							attr[attr_TYPE] = directive[2];
							attr[attr_EXPR] = directive[3];
							
							
							var value = expression_eval(directive[3], model, ctx, controller);
							if (value == null) 
								return;
							
							if (arr_isArray(value)) 
								arr_createRefs(value);
							
							For.build(
								value,
								directive,
								this.nodes,
								model,
								ctx,
								container,
								this,
								childs
							);
						},
						
						renderEnd: function(els, model, ctx, container, controller){
							
							var compo = new ForStatement(this, this.attr);
							
							compo.placeholder = document.createComment('');
							container.appendChild(compo.placeholder);
							
							
							
							_compo_initAndBind(compo, this, model, ctx, container, controller);
							
							return compo;
						},
						
						getHandler: function(name, model){
							
							return For.getHandler(name, model);
						}
						
					});
					
					function initialize(compo, node, els, model, ctx, container, controller) {
						
						compo.parent = controller;
						compo.model = model;
						
						compo.refresh = fn_proxy(compo.refresh, compo);
						compo.binder = expression_createBinder(
							compo.expr,
							model,
							ctx,
							controller,
							compo.refresh
						);
						
						
						expression_bind(compo.expr, model, ctx, controller, compo.binder);
						
					}
					
					function ForStatement(node, attr) {
						this.prop1 = attr[attr_PROP_1];
						this.prop2 = attr[attr_PROP_2];
						this.type = attr[attr_TYPE];
						this.expr = attr[attr_EXPR];
						
						if (node.components == null) 
							node.components = [];
						
						this.node = node;
						this.components = node.components;
					}
					
					ForStatement.prototype = {
						compoName: '+for',
						model: null,
						parent: null,
						
						refresh: LoopStatementProto.refresh,
						dispose: LoopStatementProto.dispose,
						
						_getModel: function(compo) {
							return compo.scope[this.prop1];
						},
						
						_build: function(node, model, ctx, component) {
							var nodes = For.getNodes(node.nodes, model, this.prop1, this.prop2, this.type);
							
							return builder_build(nodes, model, ctx, null, component);
						}
					};
					
				}());
				// end:source for.js
				// source each.js
				(function(){
					
					var Each = custom_Statements['each'];
						
					
					mask.registerHandler('+each', {
						
						render: function(model, ctx, container, controller, children){
							
							var node = this;
							
							var array = expression_eval(node.expression, model, ctx, controller);
							if (array == null) 
								return;
							
							arr_createRefs(array);
							
							build(
								node.nodes,
								array,
								ctx,
								container,
								node,
								children
							);
						},
						
						renderEnd: function(els, model, ctx, container, controller){
							
							var compo = new EachStatement(this, this.attr);
							
							compo.placeholder = document.createComment('');
							container.appendChild(compo.placeholder);
							
							_compo_initAndBind(compo, this, model, ctx, container, controller);
							
							return compo;
						}
						
					});
					
					function build(nodes, array, ctx, container, controller, elements) {
						var imax = array.length,
							i = -1,
							itemCtr;
						
						while ( ++i < imax ){
							
							itemCtr = Each.createItem(i, nodes, controller);
							builder_build(itemCtr, array[i], ctx, container, controller, elements);
						}
					}
					
					function EachStatement(node, attr) {
						this.expr = node.expression;
						this.nodes = node.nodes;
						
						if (node.components == null) 
							node.components = [];
						
						this.node = node;
						this.components = node.components;
					}
					
					EachStatement.prototype = {
						compoName: '+each',
						refresh: LoopStatementProto.refresh,
						dispose: LoopStatementProto.dispose,
						
						_getModel: function(compo) {
							return compo.model;
						},
						
						_build: function(node, model, ctx, component) {
							var fragment = document.createDocumentFragment();
							
							build(node.nodes, model, ctx, fragment, component);
							
							return fragment;
						}
					};
					
				}());
				// end:source each.js
				
			}());
			
			// end:source loop/exports.js
			
		}());
		// end:source ../src/statements/exports.js
	
	}(Mask, Compo));
	
	// end:source /src/libs/mask.binding.js


	Mask.Compo = Compo;
	Mask.jmask = jmask;

	return (exports.mask = Mask);
}));

// end:source ../.reference/atma/mask/lib/mask.js
// source ../.reference/atma/ruqq/lib/arr.js
(function(global) {

    'use strict';

	var r = global.ruqq || (global.ruqq = {});

    function getProperty(o, chain) {
        if (typeof o !== 'object' || chain == null) {
			return o;
		}

		var value = o,
			props = chain.split('.'),
			length = props.length,
			i = 0,
			key;

		for (; i < length; i++) {
			key = props[i];
			value = value[key];
			if (value == null) {
				return value;
			}
		}
		return value;
    }


    function extend(target, source) {
        for (var key in source) {
			if (source[key]) {
				target[key] = source[key];
			}
		}
        return target;
    }

    /**
     *  ~1: check(item, compareFunction);
     *  ~2: check(item, '>|<|>=|<=|==', compareToValue);
     *  ~3: check(item, propertyNameToCompare, '>|<|>=|<=|==', compareToValue);
     */

    function check(item, arg1, arg2, arg3) { /** get value */

        if (typeof arg1 === 'function') {
			return arg1(item) ? item : null;
		}
        if (typeof arg2 === 'undefined') {
			return item == arg1 ? item : null;
		}


        var value = arg1 != null ? getProperty(item, arg1) : item,
			comparer = arg2,
			compareToValue = arg3;

        switch (comparer) {
        case '>':
            return value > compareToValue ? item : null;
        case '<':
            return value < compareToValue ? item : null;
        case '>=':
            return value >= compareToValue ? item : null;
        case '<=':
            return value <= compareToValue ? item : null;
        case '!=':
            return value != compareToValue ? item : null;
        case '==':
            return value == compareToValue ? item : null;
        }
        console.error('InvalidArgumentException: arr.js:check', arguments);
        return null;
    }

    var arr = {
        /**
         * @see check
         */
        where: function(items, arg1, arg2, arg3) {
            var array = [];
            if (items == null) {
				return array;
			}

			var i = 0,
				length = items.length,
				item;

            for (; i < length; i++) {
				item = items[i];
                if (check(item, arg1, arg2, arg3) != null) {
					array.push(item);
				}
            }

            return array;
        },
        each: typeof Array.prototype.forEach !== 'undefined' ?
        function(items, fn) {
            if (items == null) {
				return items;
			}
            items.forEach(fn);
            return items;
        } : function(items, func) {
            if (items == null) {
				return items;
			}
            for (var i = 0, length = items.length; i < length; i++) {
				func(items[i]);
			}
            return items;
        },
        remove: function(items, arg1, arg2, arg3) {
            for (var i = 0, length = items.length; i < length; i++) {
				if (check(items[i], arg1, arg2, arg3) != null) {
                    items.splice(i, 1);
                    i--;
					length--;
                }
            }
            return items;
        },
        invoke: function() {
            var args = Array.prototype.slice.call(arguments);
            var items = args.shift(),
                method = args.shift(),
                results = [];
            for (var i = 0; i < items.length; i++) {
                if (typeof items[i][method] === 'function') {
                    results.push(items[i][method].apply(items[i], args));
                } else {
                    results.push(null);
                }
            }
            return results;
        },
        last: function(items, arg1, arg2, arg3) {
			if (items == null){
				return null;
			}
            if (arg1 == null) {
				return items[items.length - 1];
			}
            for (var i = items.length; i > -1; --i) {
				if (check(items[i], arg1, arg2, arg3) != null) {
					return items[i];
				}
			}
            return null;

        },
        /**
         * @see where()
         * Last Argument is default value
         */
        first: function(items, arg1, arg2, arg3) {
            if (arg1 == null) {
				return items[0];
			}
            for (var i = 0, length = items.length; i < length; i++) {
				if (check(items[i], arg1, arg2, arg3) != null) {
					return items[i];
				}
			}
            return null;
        },
        any: function(items, arg1, arg2, arg3) {
            for (var i = 0, length = items.length; i < length; i++) {
				if (check(items[i], arg1, arg2, arg3) != null) {
					return true;
				}
			}
            return false;
        },
        isIn: function(items, checkValue) {
            for (var i = 0; i < items.length; i++) {
				if (checkValue == items[i]) {
					return true;
				}
			}
            return false;
        },
        map: typeof Array.prototype.map !== 'undefined'
			? function(items, func) {
				if (items == null) {
					return [];
				}
				return items.map(func);
			}
			: function(items, func) {
				var agg = [];
				if (items == null) {
					return agg;
				}
				for (var i = 0, length = items.length; i < length; i++) {
					agg.push(func(items[i], i));
				}
				return agg;
			},
		aggr: function(items, aggr, fn){
			for(var i = 0, length = items.length; i < length; i++){
				var result = fn(items[i], aggr, i);
				if (result != null){
					aggr = result;
				}
			}
			return aggr;
		},
        /**
         * @arg arg -
         *          {Function} - return value to select)
         *          {String}  - property name to select
         *          {Array}[{String}] - property names
         */
        select: function(items, arg) {
            if (items == null) {
				return [];
			}
            var arr = [];
            for (var item, i = 0, length = items.length; i < length; i++) {
				item = items[i];

                if (typeof arg === 'string') {
                    arr.push(item[arg]);
                } else if (typeof arg === 'function') {
                    arr.push(arg(item));
                } else if (arg instanceof Array) {
                    var obj = {};
                    for (var j = 0; j < arg.length; j++) {
                        obj[arg[j]] = items[i][arg[j]];
                    }
                    arr.push(obj);
                }
            }
            return arr;
        },
        indexOf: function(items, arg1, arg2, arg3) {
            for (var i = 0, length = items.length; i < length; i++) {
                if (check(items[i], arg1, arg2, arg3) != null) {
					return i;
				}
            }
            return -1;
        },
        count: function(items, arg1, arg2, arg3) {
            var count = 0,
				i = 0,
				length = items.length;
            for (; i < length; i++) {
				if (check(items[i], arg1, arg2, arg3) != null) {
					count++;
				}
			}
            return count;
        },
        distinct: function(items, compareF) {
            var array = [];
            if (items == null) {
				return array;
			}

            var i  = 0,
				length = items.length;
            for (; i < length; i++) {
                var unique = true;
                for (var j = 0; j < array.length; j++) {
                    if ((compareF && compareF(items[i], array[j])) || (compareF == null && items[i] == array[j])) {
                        unique = false;
                        break;
                    }
                }
                if (unique) {
					array.push(items[i]);
				}
            }
            return array;
        },
		
		groupBy: function(items, compareF){
			var array = [],
				imax = items.length,
				i = -1,
				
				group, j, x, cache = {};
			
			while ( ++i < imax ){
				if (cache[i] === true) 
					continue;
				
				x = items[i];
				
				group = [x];
				j = i;
				
				while( ++j < imax ){
					if (cache[j] === true) 
						continue;
					
					if (compareF(x, items[j])) {
						cache[j] = true;
						group.push(items[j]);
					}
				}
				
				array.push(group);
			}
			
			return array;
		}
    };

	arr.each(['min','max'], function(x){
		arr[x] = function(array, property){
			if (array == null){
				return null;
			}
			var number = null;
			for(var i = 0, length = array.length; i<length; i++){
				var prop = getProperty(array[i], property);

				if (number == null){
					number = prop;
					continue;
				}

				if (x === 'max' && prop > number){
					number = prop;
					continue;
				}
				if (x === 'min' && prop < number){
					number = prop;
					continue;
				}

			}
			return number;
		}
	});

    r.arr = function(items) {
        return new Expression(items);
    };

    extend(r.arr, arr);

    function Expression(items) {
        this.items = items;
    }

    function extendClass(method) {
        Expression.prototype[method] = function() {
            // @see http://jsperf.com/arguments-transform-vs-direct

            var l = arguments.length,
                result = arr[method](this.items, //
                l > 0 ? arguments[0] : null, //
                l > 1 ? arguments[1] : null, //
                l > 2 ? arguments[2] : null, //
                l > 3 ? arguments[3] : null);

            if (result instanceof Array) {
				this.items = result;
				return this;
			}

            return result;
        };
    }

	for (var method in arr) {
        extendClass(method);
    }

}(typeof window !== 'undefined' ? window : global));

// end:source ../.reference/atma/ruqq/lib/arr.js


// source ../.reference/atma/node/logger/src/color/color.js
var Color = (function() {

    var _colorize;
    
    // source data/none.js
    	
    var ColorNone = {
    	END : '',
        value: {
    		red: '',
    		green: '',
    		yellow: '',
    		blue: '',
    		magenta: '',
    		cyan: '',
    		
    
    		bold: '',
    		italic: '',
    		underline: '',
    		inverse: ''
    	},
        start: function(key){
            return '';
        }
    };
    // end:source data/none.js
    // source data/html.js
    	
    var ColorHtml = {
    	END : '</span>',
    	
    	value: {
    		red: 'color:red',
    		green: 'color:green',
    		yellow: 'color:yellow',
    		blue: 'color:blue',
    		magenta: 'color:magenta',
    		cyan: 'color:cyan',
    		
    
    		bold: 'font-weight:bold',
    		italic: 'font-style:italic',
    		underline: 'text-decoration:underline',
    		inverse: 'color:black;background:white'
    	},
        
        
        start: function(key){
            var str = '<span style="'
                + this.value[key]
                + '">';
            
            return str;
        }
    };
    // end:source data/html.js
    // source data/ascii.js
    	
    var ColorAscii = {
    	type: 'ascii',
    	START : '\u001b[',
    	END : '\u001b[0m',
    	
    	value: {
    		red: '31m',
    		green: '32m',
    		yellow: '33m',
    		blue: '34m',
    		magenta: '35m',
    		cyan: '36m',
    		white: '37m',
    		black: '30m',
    
    		bg_black: '40m',
    		bg_red: '41m',
    		bg_green: '42m',
    		bg_yellow: '43m',
    		bg_blue: '44m',
    		bg_magenta: '45m',
    		bg_cyan: '46m',
    		bg_white: '47m',
    		
    		bold: '1m',
    		italic: '3m',
    		underline: '4m',
    		inverse: '7m'
    	},
    	
    	start: function(key){
    		return this.START + this.value[key];
    	}
    };
    // end:source data/ascii.js
    
    
    function initialize(ColorData) {
        
        
        function index_End(str, start) {
            var count = 1,
                imax = str.length,
                i = start,
                c;
            for (; i < imax; i++){
                c = str.charCodeAt(i);
                
                if (c === 60) {
                    // <
                    count++;
                }
                
                if (c === 62) {
                    // >
                    count--;
                }
                
                if (count === 0) 
                    return i;
            }
            
            return -1;
        }
        

        function color(str) {
            
            ColorData.rgx_search.lastIndex = 0;
            
            var match,
                key,
                end,
                doRenew = ColorData.type === 'ascii',
                stack = doRenew
                    ? []
                    : null;
                
            
            
            
            while (1) {
                match = ColorData.rgx_search.exec(str);
                
                if (match == null) 
                    break;
                
                key = match[1];
                
                if (ColorData.value[key] == null) 
                    continue;
                
                var index = match.index,
                    bound = index + match[0].length,
                    head;
                
                
                end = index_End(str, bound);
                
                if (end !== -1) {
                    head = ColorData.start(key);
                    
                    str = str.substring(0, index)
                        + head
                        + str.substring(bound, end)
                        + ColorData.END
                        
                        + (doRenew ? stack_renew(stack, end) : '')
                        
                        + str.substring(end + 1);
                        
                    if (doRenew) 
                        stack.push({end: end, key: key});
                        
                    ColorData.rgx_search.lastIndex = index + head.length;
                }
            }
            


            return str;
        }
        
        function stack_renew(stack, index) {
            var str = '';
            for (var i = 0, x, imax = stack.length; i < imax; i++){
                x = stack[i];
                
                if (x.end < index) 
                    continue;
                
                str += ColorData.start(x.key);
            }
            
            return str;
        }
        
        if (ColorData.rgx_search == null) {
            var str = '(';
            for (var key in ColorData.value) {
                str += str === '('
                    ? key
                    : '|' + key;
            }
            
            str += ')<';
            
            ColorData.rgx_search = new RegExp(str, 'g');
        }

        Object
            .keys(ColorData.value)
            .forEach(function(key) {

            try {
                Object.defineProperty(String.prototype, key, {
                    get: function() {
                        return ColorData.start(key)
                            + this
                            + ColorData.END;
                    },
                    enumerable: false,
                    configurable: true
                });
    
            } catch(e) {
                // already exists ( with configurable: false )
            }
            
        });


        Object.defineProperty(String.prototype, 'color', {
            get: function() {
                return color(this);
            },
            enumerable: false,
            configurable: true
        });

        return color;
    }
    
    
    _colorize = initialize(ColorAscii);
    
    
    var JSONTheme = {
        'string': 'yellow',
        'number': 'cyan',
        'boolean': 'cyan',
        
        'regexp': 'magenta',
        'date': 'magenta',
        'function': 'magenta',
        
        'null': 'blue',
        'undefined': 'blue'
    };
    

    return {
        init: {
            ascii: function() {
                _colorize = initialize(ColorAscii);
            },
            html: function(){
                _colorize = initialize(ColorHtml);
            },
            none: function(){
                _colorize = initialize(ColorNone);
            }
        },
        
        colorize: function(str){
            
            return _colorize(str);
        },
        
        
        formatJSON: function(obj){
            
            var json = obj;
            if (json !== void 0 && typeof json === 'object') {
                json = obj_dimissCircular(obj);
            }
            
            return obj_stringify(json, function(tuple, type){
                
                if (type && JSONTheme[type]) {
                    
                    tuple[1] = String(tuple[1])[JSONTheme[type]];
                }
                
                if (tuple[0]) {
                    tuple[0] = tuple[0].bold;
                }
                
                
            });
        },
        
        define: function(type){
            
            if (Color.init[type]) 
                return Color.init[type]();
            
            console.error('Invalid Color Type ', type);
        }
    };
}());
// end:source ../.reference/atma/node/logger/src/color/color.js
(function(){
	// source ../src/vars.js
	
	var _Array_slice = Array.prototype.slice;
	// end:source ../src/vars.js
	// source ../src/assert/assert.browser.js
	(function(global){
		
		// source /node_modules/assertion/lib/assert.embed.js
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
		
		
		// end:source /node_modules/assertion/lib/assert.embed.js
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
		
	}(this));
	// end:source ../src/assert/assert.browser.js
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
						
						html = html.replace(/(head[^>]*>)/, '$1 <base href="' + base + '" />');
						
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
						
						$(_iframe).load(function(){
							include.allDone(function(){
								
								setTimeout(function(){
									callback(null, _doc, _win, headers);
								});
							});
						})
						
						_doc.open();
						_doc.write(html);
						_doc.close();
						
					})
				}
			};
			
			
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
				fn = function(){
					clearTimeout(timeout);
					!isTimeouted && callback.apply(null, arguments);
				};
			
			var timeout = setTimeout(function(){
				console.error('Async Suite Timeout - ', name);
				
				isTimeouted = true;
				assert.timeouts.push(name);
				callback();
			}, _options.timeout);
			
			return {
				fn: fn,
				id: timeout
			};
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
	// end:source ../src/browser/detect.js
	// source ../src/browser/action.js
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
			
			//-state = state_ready;
		};
		
		// source notify.js
		function notify(state) {
			
			switch (state) {
				case 'connect':
					$('<div>').text('connected to server').appendTo('body');
					break;
			}
			
		}
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
					
					if (socket) 
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
			
			include = include
				.instance()
				;
		};
		
		var include_reset = function(){
			if (typeof include === 'undefined') {
				return;
			}
			
			include = include.instance();
		}
		// end:source utils/include.js
		
		// source RunnerDom.js
		var RunnerDom = (function() {
			
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
					
					_runners
						.push(new RunnerDom(config).run(cfg_runNext));
				});
				
			}
			
			return Class({
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
				
				// Class
				Construct: function(config){
					this.config = config;
					this.scripts = config.scripts;
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
					
					this.loadEnv(this.process);
					return this;
				},
				
				loadEnv: function(callback){
					if (arr_isArray(this.config.env) === false) {
						callback();
						return;
					}
					
					if (typeof include === 'undefined') {
						script_insertMany(this.config.env, callback);
						return;
					}
					
					var resource = include.instance('/utest/');
					
					ruqq.arr.each(this.config.env, function(x){
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
							
							callback(resp);
						});
					});
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
			socket = io.connect('/utest-browser')
				.on('connect', function(){
					console.log('browser:connected to utest-browser socket');
					notify('connect');
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
	// end:source ../src/browser/action.js

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

