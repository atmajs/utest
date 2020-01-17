
// source ./UMD.js
(function(factory){
	
	var _name = 'UTest',
		_global = typeof window === 'undefined' ? global : window,
		_module = {
			exports: {}
		};

	factory(_module, _module.exports, _global);

	if (typeof define === 'function' && define.amd) {
        define([], function () {
        	return _module.exports;
        });
        return;
    } 
    if (typeof module === 'object' && module.exports) {
    	module.exports = _module.exports;
    	return;
    }

	if (_name) {
		_global[_name] = _module.exports;
	}

}(function(module, exports, global){
	var _node_modules_atma_utils_lib_utils = {};
var _src_Options = {};
var _src_UTest = {};
var _src_UTestVars = {};
var _src_UTest_benchmark = {};
var _src_UTest_config = {};
var _src_UTest_page = {};
var _src_UTest_server = {};
var _src_assert_assert_browser = {};
var _src_assert_wrapper = {};
var _src_browser_ActionVars = {};
var _src_browser_RunnerDom = {};
var _src_browser_action = {};
var _src_browser_const = {};
var _src_browser_detect = {};
var _src_browser_notify = {};
var _src_browser_utest_extend = {};
var _src_browser_utest_start = {};
var _src_browser_utils_include = {};
var _src_browser_utils_logger = {};
var _src_browser_utils_script = {};
var _src_class_Await = {};
var _src_patch_jquery = {};
var _src_utils_cfg = {};
var _src_utils_classify = {};
var _src_utils_color = {};
var _src_utils_console = {};
var _src_utils_fn = {};
var _src_utils_is = {};
var _src_utils_location = {};
var _src_utils_object = {};
var _src_utils_process = {};
var _src_utils_str = {};
var _src_utils_syntax = {};
var _src_utils_transport_jam = {};
var _src_utils_utest_query = {};
var _src_utils_xhr = {};
var _src_vars = {};

// source ./ModuleSimplified.js
var _src_vars;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var g = typeof global !== 'undefined' ? global : window;
exports.global = g;
exports._Array_slice = Array.prototype.slice;
exports.mask = g.mask;
exports.include = g.include;
exports.logger = g.logger;
exports.atma = g.atma;
exports.io = g.io;
exports.app = g.app;
exports.assert = g.assert;
RegExp.prototype.toJSON = RegExp.prototype.toString;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_vars) && isObject(module.exports)) {
		Object.assign(_src_vars, module.exports);
		return;
	}
	_src_vars = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _node_modules_atma_utils_lib_utils;
(function () {
	var exports = {};
	var module = { exports: exports };
	(function(factory){

	var owner, property;
	if (typeof module !== 'undefined' && module.exports) {
		owner = module;
		property = 'exports';
	}
	else {
		owner = window;
		property = 'Utils';
	}

	factory(owner, property);

}(function(owner, property){

    	var _Array_slice,
	    _Object_getOwnProp,
	    _Object_defineProperty,
	    _Array_slice,
	    _Object_getOwnProp,
	    _Object_defineProperty,
	    _Array_slice,
	    _Object_getOwnProp,
	    _Object_defineProperty,
	    _Array_slice,
	    _Object_getOwnProp,
	    _Object_defineProperty;
	var obj_copyProperty,
	    obj_getProperty,
	    obj_setProperty,
	    obj_hasProperty,
	    obj_defineProperty,
	    obj_extend,
	    obj_extendDefaults,
	    obj_extendProperties,
	    obj_extendPropertiesDefaults,
	    obj_extendMany,
	    obj_create,
	    obj_defaults,
	    obj_extendDescriptors;
	(function(){
		(function(){
			_Array_slice = Array.prototype.slice;
			var _Array_splice = Array.prototype.splice;
			var _Array_indexOf = Array.prototype.indexOf;
			var _Object_hasOwnProp = Object.hasOwnProperty;
			_Object_getOwnProp = Object.getOwnPropertyDescriptor;
			_Object_defineProperty = Object.defineProperty;
			var _global = typeof global !== 'undefined'
			    ? global
			    : window;
			var _document = typeof window !== 'undefined' && window.document != null
			    ? window.document
			    : null;
			
		}());
		var getDescriptor = Object.getOwnPropertyDescriptor;
		var defineDescriptor = Object.defineProperty;
		obj_copyProperty = getDescriptor == null
		    ? function (target, source, key) { return target[key] = source[key]; }
		    : function (target, source, key) {
		        var descr = getDescriptor(source, key);
		        if (descr.value !== void 0) {
		            target[key] = descr.value;
		            return;
		        }
		        defineDescriptor(target, key, descr);
		    };
		
		obj_getProperty = function (obj_, path) {
		    if (obj_ == null) {
		        return null;
		    }
		    if (path.indexOf('.') === -1) {
		        return obj_[path];
		    }
		    var obj = obj_, chain = path.split('.'), imax = chain.length, i = -1;
		    while (obj != null && ++i < imax) {
		        var key = chain[i];
		        if (key.charCodeAt(key.length - 1) === 63 /*?*/) {
		            key = key.slice(0, -1);
		        }
		        obj = obj[key];
		    }
		    return obj;
		}
		;
		obj_setProperty = function (obj_, path, val) {
		    if (path.indexOf('.') === -1) {
		        obj_[path] = val;
		        return;
		    }
		    var obj = obj_, chain = path.split('.'), imax = chain.length - 1, i = -1, key;
		    while (++i < imax) {
		        key = chain[i];
		        if (key.charCodeAt(key.length - 1) === 63 /*?*/) {
		            key = key.slice(0, -1);
		        }
		        var x = obj[key];
		        if (x == null) {
		            x = obj[key] = {};
		        }
		        obj = x;
		    }
		    obj[chain[i]] = val;
		}
		;
		obj_hasProperty = function (obj, path) {
		    var x = obj_getProperty(obj, path);
		    return x !== void 0;
		}
		;
		obj_defineProperty = function (obj, path, dscr) {
		    var x = obj, chain = path.split('.'), imax = chain.length - 1, i = -1, key;
		    while (++i < imax) {
		        key = chain[i];
		        if (x[key] == null)
		            x[key] = {};
		        x = x[key];
		    }
		    key = chain[imax];
		    if (_Object_defineProperty) {
		        if (dscr.writable === void 0)
		            dscr.writable = true;
		        if (dscr.configurable === void 0)
		            dscr.configurable = true;
		        if (dscr.enumerable === void 0)
		            dscr.enumerable = true;
		        _Object_defineProperty(x, key, dscr);
		        return;
		    }
		    x[key] = dscr.value === void 0
		        ? dscr.value
		        : (dscr.get && dscr.get());
		}
		;
		obj_extend = function (a, b) {
		    if (b == null)
		        return a || {};
		    if (a == null)
		        return obj_create(b);
		    for (var key in b) {
		        a[key] = b[key];
		    }
		    return a;
		}
		;
		obj_extendDefaults = function (a, b) {
		    if (b == null)
		        return a || {};
		    if (a == null)
		        return obj_create(b);
		    for (var key in b) {
		        if (a[key] == null) {
		            a[key] = b[key];
		            continue;
		        }
		        if (key === 'toString' && a[key] === Object.prototype.toString) {
		            a[key] = b[key];
		        }
		    }
		    return a;
		}
		var extendPropertiesFactory = function (overwriteProps) {
		    if (_Object_getOwnProp == null)
		        return overwriteProps ? obj_extend : obj_extendDefaults;
		    return function (a, b) {
		        if (b == null)
		            return a || {};
		        if (a == null)
		            return obj_create(b);
		        var key, descr, ownDescr;
		        for (key in b) {
		            descr = _Object_getOwnProp(b, key);
		            if (descr == null)
		                continue;
		            if (overwriteProps !== true) {
		                ownDescr = _Object_getOwnProp(a, key);
		                if (ownDescr != null) {
		                    continue;
		                }
		            }
		            if (descr.hasOwnProperty('value')) {
		                a[key] = descr.value;
		                continue;
		            }
		            _Object_defineProperty(a, key, descr);
		        }
		        return a;
		    };
		};
		obj_extendProperties = extendPropertiesFactory(true);
		obj_extendPropertiesDefaults = extendPropertiesFactory(false);
		obj_extendMany = function (a, arg1, arg2, arg3, arg4, arg5, arg6) {
		    var imax = arguments.length, i = 1;
		    for (; i < imax; i++) {
		        a = obj_extend(a, arguments[i]);
		    }
		    return a;
		}
		;
		function obj_toFastProps(obj) {
		    /*jshint -W027*/
		    function F() { }
		    F.prototype = obj;
		    new F();
		    return;
		    eval(obj);
		}
		;
		var _Object_create = Object.create || function (x) {
		    var Ctor = function () { };
		    Ctor.prototype = x;
		    return new Ctor;
		};
		obj_create = _Object_create;
		obj_defaults = function (target, defaults) {
		    for (var key in defaults) {
		        if (target[key] == null)
		            target[key] = defaults[key];
		    }
		    return target;
		}
		obj_extendDescriptors;
		var obj_extendDescriptorsDefaults;
		(function () {
		    if (getDescriptor == null) {
		        obj_extendDescriptors = obj_extend;
		        obj_extendDescriptorsDefaults = obj_defaults;
		        return;
		    }
		    obj_extendDescriptors = function (target, source) {
		        return _extendDescriptors(target, source, false);
		    };
		    obj_extendDescriptorsDefaults = function (target, source) {
		        return _extendDescriptors(target, source, true);
		    };
		    function _extendDescriptors(target, source, defaultsOnly) {
		        if (target == null)
		            return {};
		        if (source == null)
		            return source;
		        var descr, key;
		        for (key in source) {
		            if (defaultsOnly === true && target[key] != null)
		                continue;
		            descr = getDescriptor(source, key);
		            if (descr == null) {
		                obj_extendDescriptors(target, source["__proto__"]);
		                continue;
		            }
		            if (descr.value !== void 0) {
		                target[key] = descr.value;
		                continue;
		            }
		            defineDescriptor(target, key, descr);
		        }
		        return target;
		    }
		})();
		
		
	}());
	var class_create,
	    class_createEx;
	(function(){
		;
		/**
		 * create([...Base], Proto)
		 * Base: Function | Object
		 * Proto: Object {
		 *    constructor: ?Function
		 *    ...
		 */
		class_create = createClassFactory(obj_extendDefaults);
		// with property accessor functions support
		class_createEx = createClassFactory(obj_extendPropertiesDefaults);
		function createClassFactory(extendDefaultsFn) {
		    return function (a, b, c, d, e, f, g, h) {
		        var args = _Array_slice.call(arguments), Proto = args.pop();
		        if (Proto == null)
		            Proto = {};
		        var Ctor;
		        if (Proto.hasOwnProperty('constructor')) {
		            Ctor = Proto.constructor;
		            if (Ctor.prototype === void 0) {
		                var es6Method = Ctor;
		                Ctor = function ClassCtor() {
		                    var imax = arguments.length, i = -1, args = new Array(imax);
		                    while (++i < imax)
		                        args[i] = arguments[i];
		                    return es6Method.apply(this, args);
		                };
		            }
		        }
		        else {
		            Ctor = function ClassCtor() { };
		        }
		        var i = args.length, BaseCtor, x;
		        while (--i > -1) {
		            x = args[i];
		            if (typeof x === 'function') {
		                BaseCtor = wrapFn(x, BaseCtor);
		                x = x.prototype;
		            }
		            extendDefaultsFn(Proto, x);
		        }
		        return createClass(wrapFn(BaseCtor, Ctor), Proto);
		    };
		}
		function createClass(Ctor, Proto) {
		    Proto.constructor = Ctor;
		    Ctor.prototype = Proto;
		    return Ctor;
		}
		function wrapFn(fnA, fnB) {
		    if (fnA == null) {
		        return fnB;
		    }
		    if (fnB == null) {
		        return fnA;
		    }
		    return function () {
		        var args = _Array_slice.call(arguments);
		        var x = fnA.apply(this, args);
		        if (x !== void 0)
		            return x;
		        return fnB.apply(this, args);
		    };
		}
		
	}());
	var arr_remove,
	    arr_each,
	    arr_indexOf,
	    arr_contains,
	    arr_pushMany;
	(function(){
		arr_remove = function (array, x) {
		    var i = array.indexOf(x);
		    if (i === -1)
		        return false;
		    array.splice(i, 1);
		    return true;
		}
		;
		arr_each = function (arr, fn, ctx) {
		    arr.forEach(fn, ctx);
		}
		;
		arr_indexOf = function (arr, x) {
		    return arr.indexOf(x);
		}
		;
		arr_contains = function (arr, x) {
		    return arr.indexOf(x) !== -1;
		}
		;
		arr_pushMany = function (arr, arrSource) {
		    if (arrSource == null || arr == null || arr === arrSource)
		        return;
		    var il = arr.length, jl = arrSource.length, j = -1;
		    while (++j < jl) {
		        arr[il + j] = arrSource[j];
		    }
		}
		;
		function arr_distinct(arr, compareFn) {
		    var out = [];
		    var hash = compareFn == null ? obj_create(null) : null;
		    outer: for (var i = 0; i < arr.length; i++) {
		        var x = arr[i];
		        if (compareFn == null) {
		            if (hash[x] === 1) {
		                continue;
		            }
		            hash[x] = 1;
		        }
		        else {
		            for (var j = i - 1; j > -1; j--) {
		                var prev = arr[j];
		                if (compareFn(x, prev)) {
		                    continue outer;
		                }
		            }
		        }
		        out.push(x);
		    }
		    return out;
		}
		
	}());
	var is_Function,
	    is_Object,
	    is_Array,
	    is_ArrayLike,
	    is_String,
	    is_notEmptyString,
	    is_rawObject,
	    is_Date,
	    is_DOM,
	    is_NODE;
	(function(){
		is_Function = function (x) {
		    return typeof x === 'function';
		}
		is_Object = function (x) {
		    return x != null && typeof x === 'object';
		}
		is_Array = function (arr) {
		    return (arr != null &&
		        typeof arr === 'object' &&
		        typeof arr.length === 'number' &&
		        typeof arr.slice === 'function');
		}
		is_ArrayLike = is_Array;
		is_String = function (x) {
		    return typeof x === 'string';
		}
		is_notEmptyString = function (x) {
		    return typeof x === 'string' && x !== '';
		}
		is_rawObject = function (x) {
		    return x != null && typeof x === 'object' && x.constructor === Object;
		}
		is_Date = function (x) {
		    if (x == null || typeof x !== 'object') {
		        return false;
		    }
		    if (x.getFullYear != null && isNaN(x) === false) {
		        return true;
		    }
		    return false;
		}
		function is_PromiseLike(x) {
		    return x != null && typeof x === 'object' && typeof x.then === 'function';
		}
		function is_Observable(x) {
		    return x != null && typeof x === 'object' && typeof x.subscribe === 'function';
		}
		is_DOM = typeof window !== 'undefined' && window.navigator != null;
		is_NODE = !is_DOM;
		
	}());
	var str_format,
	    str_dedent;
	(function(){
		str_format = function (str_, a, b, c, d) {
		    var str = str_, imax = arguments.length, i = 0, x;
		    while (++i < imax) {
		        x = arguments[i];
		        if (is_Object(x) && x.toJSON) {
		            x = x.toJSON();
		        }
		        str_ = str_.replace(rgxNum(i - 1), String(x));
		    }
		    return str_;
		}
		;
		str_dedent = function (str) {
		    var rgx = /^[\t ]*\S/gm, match = rgx.exec(str), count = -1;
		    while (match != null) {
		        var x = match[0].length;
		        if (count === -1 || x < count)
		            count = x;
		        match = rgx.exec(str);
		    }
		    if (--count < 1)
		        return str;
		    var replacer = new RegExp('^[\\t ]{1,' + count + '}', 'gm');
		    return str
		        .replace(replacer, '')
		        .replace(/^[\t ]*\r?\n/, '')
		        .replace(/\r?\n[\t ]*$/, '');
		}
		;
		var rgxNum;
		(function () {
		    rgxNum = function (num) {
		        return cache_[num] || (cache_[num] = new RegExp('\\{' + num + '\\}', 'g'));
		    };
		    var cache_ = {};
		}());
		
	}());
	var error_createClass;
	(function(){
		error_createClass = function (name, Proto, stackSliceFrom) {
		    var Ctor = _createCtor(Proto, stackSliceFrom);
		    Ctor.prototype = new Error;
		    Proto.constructor = Error;
		    Proto.name = name;
		    obj_extend(Ctor.prototype, Proto);
		    return Ctor;
		}
		;
		function error_formatSource(source, index, filename) {
		    var cursor = error_cursor(source, index), lines = cursor[0], lineNum = cursor[1], rowNum = cursor[2], str = '';
		    if (filename != null) {
		        str += str_format(' at {0}:{1}:{2}\n', filename, lineNum, rowNum);
		    }
		    return str + error_formatCursor(lines, lineNum, rowNum);
		}
		;
		/**
		 * @returns [ lines, lineNum, rowNum ]
		 */
		function error_cursor(str, index) {
		    var lines = str.substring(0, index).split('\n'), line = lines.length, row = index + 1 - lines.slice(0, line - 1).join('\n').length;
		    if (line > 1) {
		        // remove trailing newline
		        row -= 1;
		    }
		    return [str.split('\n'), line, row];
		}
		;
		function error_formatCursor(lines, lineNum, rowNum) {
		    var BEFORE = 3, AFTER = 2, i = lineNum - BEFORE, imax = i + BEFORE + AFTER, str = '';
		    if (i < 0)
		        i = 0;
		    if (imax > lines.length)
		        imax = lines.length;
		    var lineNumberLength = String(imax).length, lineNumber;
		    for (; i < imax; i++) {
		        if (str)
		            str += '\n';
		        lineNumber = ensureLength(i + 1, lineNumberLength);
		        str += lineNumber + '|' + lines[i];
		        if (i + 1 === lineNum) {
		            str += '\n' + repeat(' ', lineNumberLength + 1);
		            str += lines[i].substring(0, rowNum - 1).replace(/[^\s]/g, ' ');
		            str += '^';
		        }
		    }
		    return str;
		}
		;
		function ensureLength(num, count) {
		    var str = String(num);
		    while (str.length < count) {
		        str += ' ';
		    }
		    return str;
		}
		function repeat(char_, count) {
		    var str = '';
		    while (--count > -1) {
		        str += char_;
		    }
		    return str;
		}
		function _createCtor(Proto, stackFrom) {
		    var Ctor = Proto.hasOwnProperty('constructor')
		        ? Proto.constructor
		        : null;
		    return function () {
		        var args = [];
		        for (var _i = 0; _i < arguments.length; _i++) {
		            args[_i] = arguments[_i];
		        }
		        obj_defineProperty(this, 'stack', {
		            value: _prepairStack(stackFrom || 3)
		        });
		        obj_defineProperty(this, 'message', {
		            value: str_format.apply(this, arguments)
		        });
		        if (Ctor != null) {
		            Ctor.apply(this, arguments);
		        }
		    };
		}
		function _prepairStack(sliceFrom) {
		    var stack = new Error().stack;
		    return stack == null ? null : stack
		        .split('\n')
		        .slice(sliceFrom)
		        .join('\n');
		}
		
	}());
	var fn_proxy,
	    fn_apply,
	    fn_doNothing,
	    fn_createByPattern;
	(function(){
		fn_proxy = function (fn, ctx) {
		    return function () {
		        var imax = arguments.length, args = new Array(imax), i = 0;
		        for (; i < imax; i++)
		            args[i] = arguments[i];
		        return fn_apply(fn, ctx, args);
		    };
		}
		;
		fn_apply = function (fn, ctx, args) {
		    var l = args.length;
		    if (0 === l)
		        return fn.call(ctx);
		    if (1 === l)
		        return fn.call(ctx, args[0]);
		    if (2 === l)
		        return fn.call(ctx, args[0], args[1]);
		    if (3 === l)
		        return fn.call(ctx, args[0], args[1], args[2]);
		    if (4 === l)
		        return fn.call(ctx, args[0], args[1], args[2], args[3]);
		    return fn.apply(ctx, args);
		}
		;
		fn_doNothing = function () {
		    return false;
		}
		;
		fn_createByPattern = function (definitions, ctx) {
		    var imax = definitions.length;
		    return function () {
		        var l = arguments.length, i = -1, def;
		        outer: while (++i < imax) {
		            def = definitions[i];
		            if (def.pattern.length !== l) {
		                continue;
		            }
		            var j = -1;
		            while (++j < l) {
		                var fn = def.pattern[j];
		                var val = arguments[j];
		                if (fn(val) === false) {
		                    continue outer;
		                }
		            }
		            return def.handler.apply(ctx, arguments);
		        }
		        console.error('InvalidArgumentException for a function', definitions, arguments);
		        return null;
		    };
		}
		;
		
	}());
	var class_Dfr;
	(function(){
		//@TODO remove constructr run
		class_Dfr = function (mix) {
		    if (typeof mix === 'function') {
		        return class_Dfr.run(mix);
		    }
		};
		class_Dfr.prototype = {
		    _isAsync: true,
		    _done: null,
		    _fail: null,
		    _always: null,
		    _resolved: null,
		    _rejected: null,
		    defer: function () {
		        this._rejected = null;
		        this._resolved = null;
		        return this;
		    },
		    isResolved: function () {
		        return this._resolved != null;
		    },
		    isRejected: function () {
		        return this._rejected != null;
		    },
		    isBusy: function () {
		        return this._resolved == null && this._rejected == null;
		    },
		    resolve: function () {
		        var done = this._done, always = this._always;
		        this._resolved = arguments;
		        dfr_clearListeners(this);
		        arr_callOnce(done, this, arguments);
		        arr_callOnce(always, this, [this]);
		        return this;
		    },
		    reject: function () {
		        var fail = this._fail, always = this._always;
		        this._rejected = arguments;
		        dfr_clearListeners(this);
		        arr_callOnce(fail, this, arguments);
		        arr_callOnce(always, this, [this]);
		        return this;
		    },
		    then: function (filterSuccess, filterError) {
		        return this.pipe(filterSuccess, filterError);
		    },
		    done: function (callback) {
		        if (this._rejected != null)
		            return this;
		        return dfr_bind(this, this._resolved, this._done || (this._done = []), callback);
		    },
		    fail: function (callback) {
		        if (this._resolved != null)
		            return this;
		        return dfr_bind(this, this._rejected, this._fail || (this._fail = []), callback);
		    },
		    always: function (callback) {
		        return dfr_bind(this, this._rejected || this._resolved, this._always || (this._always = []), callback);
		    },
		    pipe: function (mix /* ..methods */) {
		        var dfr;
		        if (typeof mix === 'function') {
		            dfr = new class_Dfr();
		            var done_ = mix, fail_ = arguments.length > 1
		                ? arguments[1]
		                : null;
		            this
		                .done(delegate(dfr, 'resolve', done_))
		                .fail(delegate(dfr, 'reject', fail_));
		            return dfr;
		        }
		        dfr = mix;
		        var imax = arguments.length, done = imax === 1, fail = imax === 1, i = 0, x;
		        while (++i < imax) {
		            x = arguments[i];
		            switch (x) {
		                case 'done':
		                    done = true;
		                    break;
		                case 'fail':
		                    fail = true;
		                    break;
		                default:
		                    console.error('Unsupported pipe channel', arguments[i]);
		                    break;
		            }
		        }
		        done && this.done(delegate(dfr, 'resolve'));
		        fail && this.fail(delegate(dfr, 'reject'));
		        function pipe(dfr, method) {
		            return function () {
		                dfr[method].apply(dfr, arguments);
		            };
		        }
		        function delegate(dfr, name, fn) {
		            return function () {
		                if (fn != null) {
		                    var override = fn.apply(this, arguments);
		                    if (override != null && override !== dfr) {
		                        if (isDeferred(override)) {
		                            override.then(delegate(dfr, 'resolve'), delegate(dfr, 'reject'));
		                            return;
		                        }
		                        dfr[name](override);
		                        return;
		                    }
		                }
		                dfr[name].apply(dfr, arguments);
		            };
		        }
		        return this;
		    },
		    pipeCallback: function () {
		        var self = this;
		        return function (error) {
		            if (error != null) {
		                self.reject(error);
		                return;
		            }
		            var args = _Array_slice.call(arguments, 1);
		            fn_apply(self.resolve, self, args);
		        };
		    },
		    resolveDelegate: function () {
		        return fn_proxy(this.resolve, this);
		    },
		    rejectDelegate: function () {
		        return fn_proxy(this.reject, this);
		    }
		};
		class_Dfr.resolve = function (a, b, c) {
		    var dfr = new class_Dfr();
		    return dfr.resolve.apply(dfr, _Array_slice.call(arguments));
		};
		class_Dfr.reject = function (error) {
		    var dfr = new class_Dfr();
		    return dfr.reject(error);
		};
		class_Dfr.run = function (fn, ctx) {
		    var dfr = new class_Dfr();
		    if (ctx == null)
		        ctx = dfr;
		    fn.call(ctx, fn_proxy(dfr.resolve, ctx), fn_proxy(dfr.reject, dfr), dfr);
		    return dfr;
		};
		class_Dfr.all = function (promises) {
		    var dfr = new class_Dfr, arr = new Array(promises.length), wait = promises.length, error = null;
		    if (wait === 0) {
		        return dfr.resolve(arr);
		    }
		    function tick(index) {
		        if (error != null) {
		            return;
		        }
		        var args = _Array_slice.call(arguments, 1);
		        arr.splice.apply(arr, [index, 0].concat(args));
		        if (--wait === 0) {
		            dfr.resolve(arr);
		        }
		    }
		    function onReject(err) {
		        dfr.reject(error = err);
		    }
		    var imax = promises.length, i = -1;
		    while (++i < imax) {
		        var x = promises[i];
		        if (x == null || x.then == null) {
		            tick(i);
		            continue;
		        }
		        x.then(tick.bind(null, i), onReject);
		    }
		    return dfr;
		};
		// PRIVATE
		function dfr_bind(dfr, arguments_, listeners, callback) {
		    if (callback == null)
		        return dfr;
		    if (arguments_ != null)
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
		    var imax = arr.length, i = -1, fn;
		    while (++i < imax) {
		        fn = arr[i];
		        if (fn)
		            fn_apply(fn, ctx, args);
		    }
		    arr.length = 0;
		}
		function isDeferred(x) {
		    return x != null
		        && typeof x === 'object'
		        && is_Function(x.then);
		}
		
	}());
	var class_Uri;
	(function(){
		class_Uri = class_create({
		    protocol: null,
		    value: null,
		    path: null,
		    file: null,
		    extension: null,
		    constructor: function (uri) {
		        if (uri == null)
		            return this;
		        if (util_isUri(uri))
		            return uri.combine('');
		        uri = normalize_uri(uri);
		        this.value = uri;
		        parse_protocol(this);
		        parse_host(this);
		        parse_search(this);
		        parse_file(this);
		        // normilize path - "/some/path"
		        this.path = normalize_pathsSlashes(this.value);
		        if (/^[\w]+:\//.test(this.path)) {
		            this.path = '/' + this.path;
		        }
		        return this;
		    },
		    cdUp: function () {
		        var path = this.path;
		        if (path == null || path === '' || path === '/') {
		            return this;
		        }
		        // win32 - is base drive
		        if (/^\/?[a-zA-Z]+:\/?$/.test(path)) {
		            return this;
		        }
		        this.path = path.replace(/\/?[^\/]+\/?$/i, '');
		        return this;
		    },
		    /**
		     * '/path' - relative to host
		     * '../path', 'path','./path' - relative to current path
		     */
		    combine: function (path) {
		        if (util_isUri(path)) {
		            path = path.toString();
		        }
		        if (!path) {
		            return util_clone(this);
		        }
		        if (rgx_win32Drive.test(path)) {
		            return new class_Uri(path);
		        }
		        var uri = util_clone(this);
		        uri.value = path;
		        parse_search(uri);
		        parse_file(uri);
		        if (!uri.value) {
		            return uri;
		        }
		        path = uri.value.replace(/^\.\//i, '');
		        if (path[0] === '/') {
		            uri.path = path;
		            return uri;
		        }
		        while (/^(\.\.\/?)/ig.test(path)) {
		            uri.cdUp();
		            path = path.substring(3);
		        }
		        uri.path = normalize_pathsSlashes(util_combinePathes(uri.path, path));
		        return uri;
		    },
		    toString: function () {
		        var protocol = this.protocol ? this.protocol + '://' : '';
		        var path = util_combinePathes(this.host, this.path, this.file) + (this.search || '');
		        var str = protocol + path;
		        if (!(this.file || this.search) && this.path) {
		            str += '/';
		        }
		        return str;
		    },
		    toPathAndQuery: function () {
		        return util_combinePathes(this.path, this.file) + (this.search || '');
		    },
		    /**
		     * @return Current Uri Path{String} that is relative to @arg1 Uri
		     */
		    toRelativeString: function (uri) {
		        if (typeof uri === 'string')
		            uri = new class_Uri(uri);
		        if (this.path.indexOf(uri.path) === 0) {
		            // host folder
		            var p = this.path ? this.path.replace(uri.path, '') : '';
		            if (p[0] === '/')
		                p = p.substring(1);
		            return util_combinePathes(p, this.file) + (this.search || '');
		        }
		        // sub folder
		        var current = this.path.split('/'), relative = uri.path.split('/'), commonpath = '', i = 0, length = Math.min(current.length, relative.length);
		        for (; i < length; i++) {
		            if (current[i] === relative[i])
		                continue;
		            break;
		        }
		        if (i > 0)
		            commonpath = current.splice(0, i).join('/');
		        if (commonpath) {
		            var sub = '', path = uri.path, forward;
		            while (path) {
		                if (this.path.indexOf(path) === 0) {
		                    forward = this.path.replace(path, '');
		                    break;
		                }
		                path = path.replace(/\/?[^\/]+\/?$/i, '');
		                sub += '../';
		            }
		            return util_combinePathes(sub, forward, this.file);
		        }
		        return this.toString();
		    },
		    toLocalFile: function () {
		        var path = util_combinePathes(this.host, this.path, this.file);
		        return util_win32Path(path);
		    },
		    toLocalDir: function () {
		        var path = util_combinePathes(this.host, this.path, '/');
		        return util_win32Path(path);
		    },
		    toDir: function () {
		        var str = this.protocol ? this.protocol + '://' : '';
		        return str + util_combinePathes(this.host, this.path, '/');
		    },
		    isRelative: function () {
		        return !(this.protocol || this.host);
		    },
		    getName: function () {
		        return this.file.replace('.' + this.extension, '');
		    }
		});
		var rgx_protocol = /^([\w\d]+):\/\//, rgx_extension = /\.([\w\d]+)$/i, rgx_win32Drive = /(^\/?\w{1}:)(\/|$)/, rgx_fileWithExt = /([^\/]+(\.[\w\d]+)?)$/i;
		function util_isUri(object) {
		    return object && typeof object === 'object' && typeof object.combine === 'function';
		}
		function util_combinePathes(a, b, c, d) {
		    var args = arguments, str = '';
		    for (var i = 0, x, imax = arguments.length; i < imax; i++) {
		        x = arguments[i];
		        if (!x)
		            continue;
		        if (!str) {
		            str = x;
		            continue;
		        }
		        if (str[str.length - 1] !== '/')
		            str += '/';
		        str += x[0] === '/' ? x.substring(1) : x;
		    }
		    return str;
		}
		function normalize_pathsSlashes(str) {
		    if (str[str.length - 1] === '/') {
		        return str.substring(0, str.length - 1);
		    }
		    return str;
		}
		function util_clone(source) {
		    var uri = new class_Uri(), key;
		    for (key in source) {
		        if (typeof source[key] === 'string') {
		            uri[key] = source[key];
		        }
		    }
		    return uri;
		}
		function normalize_uri(str) {
		    return str
		        .replace(/\\/g, '/')
		        .replace(/^\.\//, '')
		        // win32 drive path
		        .replace(/^(\w+):\/([^\/])/, '/$1:/$2');
		}
		function util_win32Path(path) {
		    if (rgx_win32Drive.test(path) && path[0] === '/') {
		        return path.substring(1);
		    }
		    return path;
		}
		function parse_protocol(obj) {
		    var match = rgx_protocol.exec(obj.value);
		    if (match == null && obj.value[0] === '/') {
		        obj.protocol = 'file';
		    }
		    if (match == null)
		        return;
		    obj.protocol = match[1];
		    obj.value = obj.value.substring(match[0].length);
		}
		function parse_host(obj) {
		    if (obj.protocol == null)
		        return;
		    if (obj.protocol === 'file') {
		        var match = rgx_win32Drive.exec(obj.value);
		        if (match) {
		            obj.host = match[1];
		            obj.value = obj.value.substring(obj.host.length);
		        }
		        return;
		    }
		    var pathStart = obj.value.indexOf('/', 2);
		    obj.host = ~pathStart
		        ? obj.value.substring(0, pathStart)
		        : obj.value;
		    obj.value = obj.value.replace(obj.host, '');
		}
		function parse_search(obj) {
		    var question = obj.value.indexOf('?');
		    if (question === -1)
		        return;
		    obj.search = obj.value.substring(question);
		    obj.value = obj.value.substring(0, question);
		}
		function parse_file(obj) {
		    var match = rgx_fileWithExt.exec(obj.value), file = match == null ? null : match[1];
		    if (file == null) {
		        return;
		    }
		    obj.file = file;
		    obj.value = obj.value.substring(0, obj.value.length - file.length);
		    obj.value = normalize_pathsSlashes(obj.value);
		    match = rgx_extension.exec(file);
		    obj.extension = match == null ? null : match[1];
		}
		class_Uri.combinePathes = util_combinePathes;
		class_Uri.combine = util_combinePathes;
		
	}());
	var class_EventEmitter;
	(function(){
		class_EventEmitter = function () {
		    this._listeners = {};
		};
		class_EventEmitter.prototype = {
		    on: function (event, fn) {
		        if (fn != null) {
		            (this._listeners[event] || (this._listeners[event] = [])).push(fn);
		        }
		        return this;
		    },
		    once: function (event, fn) {
		        if (fn != null) {
		            fn._once = true;
		            (this._listeners[event] || (this._listeners[event] = [])).push(fn);
		        }
		        return this;
		    },
		    pipe: function (event) {
		        var that = this, args;
		        return function () {
		            args = _Array_slice.call(arguments);
		            args.unshift(event);
		            fn_apply(that.trigger, that, args);
		        };
		    },
		    emit: event_trigger,
		    trigger: event_trigger,
		    off: function (event, fn) {
		        var listeners = this._listeners[event];
		        if (listeners == null)
		            return this;
		        if (arguments.length === 1) {
		            listeners.length = 0;
		            return this;
		        }
		        var imax = listeners.length, i = -1;
		        while (++i < imax) {
		            if (listeners[i] === fn) {
		                listeners.splice(i, 1);
		                i--;
		                imax--;
		            }
		        }
		        return this;
		    }
		};
		function event_trigger() {
		    var args = _Array_slice.call(arguments), event = args.shift(), fns = this._listeners[event], fn, imax, i = 0;
		    if (fns == null)
		        return this;
		    for (imax = fns.length; i < imax; i++) {
		        fn = fns[i];
		        fn_apply(fn, this, args);
		        if (fn._once === true) {
		            fns.splice(i, 1);
		            i--;
		            imax--;
		        }
		    }
		    return this;
		}
		
	}());
	var mixin;
	(function(){
		var class_inherit,
		    class_extendProtoObjects;
		(function(){
			var PROTO = "__proto__";
			var _toString = Object.prototype.toString;
			var _isArguments = function (args) {
			    return _toString.call(args) === "[object Arguments]";
			};
			class_inherit = PROTO in Object.prototype ? inherit : inherit_protoLess;
			
			class_extendProtoObjects = function (proto, _base, _extends) {
			    var key, protoValue;
			    for (key in proto) {
			        protoValue = proto[key];
			        if (!is_rawObject(protoValue))
			            continue;
			        if (_base != null) {
			            if (is_rawObject(_base.prototype[key]))
			                obj_defaults(protoValue, _base.prototype[key]);
			        }
			        if (_extends != null) {
			            arr_each(_extends, proto_extendDefaultsDelegate(protoValue, key));
			        }
			    }
			}
			;
			// PRIVATE
			function proto_extendDefaultsDelegate(target, key) {
			    return function (source) {
			        var proto = proto_getProto(source), val = proto[key];
			        if (is_rawObject(val)) {
			            obj_defaults(target, val);
			        }
			    };
			}
			function proto_extend(proto, source) {
			    if (source == null)
			        return;
			    if (typeof proto === "function")
			        proto = proto.prototype;
			    if (typeof source === "function")
			        source = source.prototype;
			    var key, val;
			    for (key in source) {
			        if (key === "constructor")
			            continue;
			        val = source[key];
			        if (val != null)
			            proto[key] = val;
			    }
			}
			function proto_override(super_, fn) {
			    var proxy;
			    if (super_) {
			        proxy = function (mix) {
			            var args = arguments.length === 1 && _isArguments(mix) ? mix : arguments;
			            return fn_apply(super_, this, args);
			        };
			    }
			    else {
			        proxy = fn_doNothing;
			    }
			    return function () {
			        this["super"] = proxy;
			        return fn_apply(fn, this, arguments);
			    };
			}
			function inherit(_class, _base, _extends, original) {
			    var prototype = original, proto = original;
			    prototype.constructor = _class.prototype.constructor;
			    if (_extends != null) {
			        proto[PROTO] = {};
			        arr_each(_extends, function (x) {
			            proto_extend(proto[PROTO], x);
			        });
			        proto = proto[PROTO];
			    }
			    if (_base != null)
			        proto[PROTO] = _base.prototype;
			    _class.prototype = prototype;
			}
			function inherit_Object_create(_class, _base, _extends, original, _overrides, defaults) {
			    if (_base != null) {
			        _class.prototype = Object.create(_base.prototype);
			        obj_extendDescriptors(_class.prototype, original);
			    }
			    else {
			        _class.prototype = Object.create(original);
			    }
			    _class.prototype.constructor = _class;
			    if (_extends != null) {
			        arr_each(_extends, function (x) {
			            obj_defaults(_class.prototype, x);
			        });
			    }
			    var proto = _class.prototype;
			    obj_defaults(proto, defaults);
			    for (var key in _overrides) {
			        proto[key] = proto_override(proto[key], _overrides[key]);
			    }
			}
			// browser that doesnt support __proto__
			function inherit_protoLess(_class, _base, _extends, original) {
			    if (_base != null) {
			        var tmp = function () { };
			        tmp.prototype = _base.prototype;
			        _class.prototype = new tmp();
			        _class.prototype.constructor = _class;
			    }
			    if (_extends != null) {
			        arr_each(_extends, function (x) {
			            delete x.constructor;
			            proto_extend(_class, x);
			        });
			    }
			    proto_extend(_class, original);
			}
			function proto_getProto(mix) {
			    return is_Function(mix) ? mix.prototype : mix;
			}
			
		}());
		mixin = function (mix1, mix2, mix3, mix4, mix5) {
		    return mix(mix1, mix2, mix3, mix4, mix5);
		}
		function mix() {
		    var mixins = [];
		    for (var _i = 0; _i < arguments.length; _i++) {
		        mixins[_i] = arguments[_i];
		    }
		    var _base = mixins[0];
		    var _extends = mixins.slice(1);
		    var _callable = ensureCallable(mixins);
		    var _class = function () {
		        var args = [];
		        for (var _i = 0; _i < arguments.length; _i++) {
		            args[_i] = arguments[_i];
		        }
		        for (var i = _callable.length - 1; i > -1; i--) {
		            var x = _callable[i];
		            if (typeof x === 'function') {
		                fn_apply(x, this, args);
		            }
		        }
		    };
		    if (is_Function(_base) === false) {
		        _extends.unshift(_base);
		        _base = null;
		    }
		    mixStatics(_class, mixins);
		    var proto = {};
		    class_extendProtoObjects(proto, _base, _extends);
		    class_inherit(_class, _base, _extends, proto);
		    return _class;
		}
		function mixStatics(Ctor, mixins) {
		    for (var i = 0; i < mixins.length; i++) {
		        var Fn = mixins[i];
		        if (typeof Fn !== 'function') {
		            continue;
		        }
		        for (var key in Fn) {
		            if (key in Ctor === false) {
		                obj_copyProperty(Ctor, Fn, key);
		            }
		        }
		    }
		}
		var ensureCallableSingle, ensureCallable;
		(function () {
		    ensureCallable = function (arr) {
		        var out = [], i = arr.length;
		        while (--i > -1)
		            out[i] = ensureCallableSingle(arr[i]);
		        return out;
		    };
		    ensureCallableSingle = function (mix) {
		        if (is_Function(mix) === false) {
		            return mix;
		        }
		        var fn = mix;
		        var caller = directCaller;
		        var safe = false;
		        var wrapped = function () {
		            var args = [];
		            for (var _i = 0; _i < arguments.length; _i++) {
		                args[_i] = arguments[_i];
		            }
		            var self = this;
		            var x;
		            if (safe === true) {
		                caller(fn, self, args);
		                return;
		            }
		            try {
		                x = caller(fn, self, args);
		                safe = true;
		            }
		            catch (error) {
		                caller = newCaller;
		                safe = true;
		                caller(fn, self, args);
		            }
		            if (x != null) {
		                return x;
		            }
		        };
		        return wrapped;
		    };
		    function directCaller(fn, self, args) {
		        return fn.apply(self, args);
		    }
		    function newCaller(fn, self, args) {
		        var x = new (fn.bind.apply(fn, [null].concat(args)));
		        obj_extend(self, x);
		    }
		}());
		
	}());
	var Lib = {
	    class_Dfr: class_Dfr,
	    class_EventEmitter: class_EventEmitter,
	    class_Uri: class_Uri,
	    class_create: class_create,
	    class_createEx: class_createEx,
	    arr_remove: arr_remove,
	    arr_each: arr_each,
	    arr_indexOf: arr_indexOf,
	    arr_contains: arr_contains,
	    arr_pushMany: arr_pushMany,
	    error_createClass: error_createClass,
	    fn_createByPattern: fn_createByPattern,
	    fn_doNothing: fn_doNothing,
	    obj_getProperty: obj_getProperty,
	    obj_setProperty: obj_setProperty,
	    obj_hasProperty: obj_hasProperty,
	    obj_extend: obj_extend,
	    obj_extendDefaults: obj_extendDefaults,
	    obj_extendMany: obj_extendMany,
	    obj_extendProperties: obj_extendProperties,
	    obj_extendPropertiesDefaults: obj_extendPropertiesDefaults,
	    obj_create: obj_create,
	    obj_defineProperty: obj_defineProperty,
	    is_Function: is_Function,
	    is_Array: is_Array,
	    is_ArrayLike: is_ArrayLike,
	    is_String: is_String,
	    is_Object: is_Object,
	    is_notEmptyString: is_notEmptyString,
	    is_rawObject: is_rawObject,
	    is_Date: is_Date,
	    is_NODE: is_NODE,
	    is_DOM: is_DOM,
	    str_format: str_format,
	    str_dedent: str_dedent,
	    mixin: mixin
	};
	
    
    for (var key in Lib) {
        owner[property][key] = Lib[key];
    }
}));;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_node_modules_atma_utils_lib_utils) && isObject(module.exports)) {
		Object.assign(_node_modules_atma_utils_lib_utils, module.exports);
		return;
	}
	_node_modules_atma_utils_lib_utils = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_assert_wrapper;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vars_1 = _src_vars;
var atma_utils_1 = _node_modules_atma_utils_lib_utils;
var assert = vars_1.global.assert;
(function () {
    if (assert.total != null && assert.reset != null) {
        return;
    }
    atma_utils_1.obj_extend(assert, {
        total: 0,
        failed: 0,
        errors: 0,
        timeouts: [],
        reset: function () {
            this.callbacks.length = 0;
            this.timeouts.length = 0;
            this.failed = 0;
            this.total = 0;
            this.errors = 0;
        },
        // @obsolete
        callback: function assert_callback(callback) {
            return this.await(callback);
        }
    });
    //> events
    assert.on('start', function () {
        assert.total++;
    });
    assert.on('success', function () {
        assert.onsuccess && assert.onsuccess();
    });
    assert.on('fail', function (error) {
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
    /* GLOBALS */
    vars_1.global.eq_ = assert.equal;
    vars_1.global.notEq_ = assert.notEqual;
    vars_1.global.deepEq_ = assert.deepEqual;
    vars_1.global.notDeepEq_ = assert.notDeepEqual;
    vars_1.global.strictEq_ = assert.strictEqual;
    vars_1.global.notStrictEq_ = assert.notStrictEqual;
    vars_1.global.has_ = assert.has;
    vars_1.global.hasNot_ = assert.hasNot;
    vars_1.global.is_ = assert.is;
    vars_1.global.isNot_ = assert.isNot;
    vars_1.global.gt_ = assert.gt_;
    vars_1.global.gte_ = assert.gte_;
    vars_1.global.lt_ = assert.lt_;
    vars_1.global.lte_ = assert.lte_;
    // obsolete for underscored
    vars_1.global.eq = assert.equal;
    vars_1.global.notEq = assert.notEqual;
    vars_1.global.deepEq = assert.deepEqual;
    vars_1.global.notDeepEq = assert.notDeepEqual;
    vars_1.global.strictEq = assert.strictEqual;
    vars_1.global.notStrictEq = assert.notStrictEqual;
    vars_1.global.has = assert.has;
    vars_1.global.hasNot = assert.hasNot;
    vars_1.global.is = assert.is;
    vars_1.global.isNot = assert.isNot;
    // <!---
}());
exports.eq_ = assert.equal;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_assert_wrapper) && isObject(module.exports)) {
		Object.assign(_src_assert_wrapper, module.exports);
		return;
	}
	_src_assert_wrapper = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_assert_assert_browser;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
_src_assert_wrapper;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_assert_assert_browser) && isObject(module.exports)) {
		Object.assign(_src_assert_assert_browser, module.exports);
		return;
	}
	_src_assert_assert_browser = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_patch_jquery;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vars_1 = _src_vars;
/* Make jQuery to support DocumentFragment`s */
if (vars_1.global.jQuery) {
    var _jQuery = vars_1.global.jQuery;
    _jQuery.noConflict();
    function Wrapper(frag) {
        var args = Array.prototype.slice.call(arguments);
        if (frag != null && typeof frag === 'object' && frag.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            args[0] = frag.childNodes;
        }
        return _jQuery.apply(vars_1.global, args);
    }
    ;
    Wrapper.prototype = _jQuery.prototype;
    for (var key in _jQuery) {
        Wrapper[key] = _jQuery[key];
    }
    vars_1.global.$ = Wrapper;
}
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_patch_jquery) && isObject(module.exports)) {
		Object.assign(_src_patch_jquery, module.exports);
		return;
	}
	_src_patch_jquery = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_xhr;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var atma_utils_1 = _node_modules_atma_utils_lib_utils;
function xhr_createListener(win) {
    if (KEY in win) {
        return win[KEY];
    }
    return win[KEY] = wrapXhr(win);
}
exports.xhr_createListener = xhr_createListener;
;
function xhr_isBusy(win) {
    if (win == null)
        win = window;
    if (KEY in win === false)
        return false;
    if (win[KEY].isBusy())
        return true;
    if (win.parent !== win)
        return xhr_isBusy(win);
    return false;
}
exports.xhr_isBusy = xhr_isBusy;
;
// private
var KEY = 'XMLHttpRequestListener__';
function wrapXhr(win) {
    if (win.parent !== win)
        xhr_createListener(win.parent);
    var XHR = win.XMLHttpRequest, dfr = new atma_utils_1.class_Dfr, counter__ = 0, send__ = XHR.prototype.send;
    dfr.resolve();
    XHR.prototype.send = onSend;
    function onSend() {
        if (this.responseType !== 'arraybuffer') {
            // socket.io fix
            dfr.defer();
            this.addEventListener('readystatechange', function () {
                if (this.readyState == XMLHttpRequest.DONE)
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
                .parent[KEY]
                .done(dfr.resolveDelegate());
        }
    }
    function onready(callback) {
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
function dfr_isBusy(dfr) {
    return dfr._resolved == null && dfr._rejected == null;
}
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_xhr) && isObject(module.exports)) {
		Object.assign(_src_utils_xhr, module.exports);
		return;
	}
	_src_utils_xhr = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_transport_jam;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var atma_utils_1 = _node_modules_atma_utils_lib_utils;
var xhr_1 = _src_utils_xhr;
var vars_1 = _src_vars;
function transport_isBusy() {
    if (atma_utils_1.is_NODE) {
        return false;
    }
    if (atma_utils_1.is_DOM) {
        return xhr_1.xhr_isBusy(vars_1.global) || dom_isReady(vars_1.global) === false;
    }
    return false;
}
exports.transport_isBusy = transport_isBusy;
;
if (atma_utils_1.is_DOM) {
    //= private
    //= Initialize
    xhr_1.xhr_createListener(vars_1.global);
}
function dom_isReady(win) {
    if (frame_isReady(win) === false)
        return false;
    var i = win.frames.length;
    while (--i > -1) {
        if (frame_isReady(win.frames[i]) === false)
            return false;
    }
    return true;
}
function frame_isReady(frame) {
    try {
        // `readyState` fallback
        if ('__utest_isLoading' in frame)
            return frame.__utest_isLoading === false;
        return (frame.document || frame.contentDocument).readyState === 'complete';
    }
    catch (error) {
        // cross-origin ?
        return false;
    }
}
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_transport_jam) && isObject(module.exports)) {
		Object.assign(_src_utils_transport_jam, module.exports);
		return;
	}
	_src_utils_transport_jam = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_Options;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// default options
exports._options = {
    timeout: 10000,
    errorableCallbacks: false,
    breakOnError: false,
    // master server configurations, in browser runners
    'http.config': null,
    'http.eval': null,
    'http.include': null,
    'http.service': null,
    'http.process': null,
    'util.process': null,
};
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_Options) && isObject(module.exports)) {
		Object.assign(_src_Options, module.exports);
		return;
	}
	_src_Options = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_is;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var atma_utils_1 = _node_modules_atma_utils_lib_utils;
function is_Deferred(x) {
    return x != null
        && typeof x === 'object'
        && atma_utils_1.is_Function(x.then);
}
exports.is_Deferred = is_Deferred;
;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_is) && isObject(module.exports)) {
		Object.assign(_src_utils_is, module.exports);
		return;
	}
	_src_utils_is = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_syntax;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vars_1 = _src_vars;
// TEST interfaces
function syntax_Mocha(init) {
    suite = {};
    vars_1.global.it = it;
    vars_1.global.before = before;
    vars_1.global.beforeEach = beforeEach;
    vars_1.global.after = after;
    vars_1.global.afterEach = afterEach;
    vars_1.global.describe = describe;
    init();
    return suite;
}
exports.syntax_Mocha = syntax_Mocha;
;
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
    suite['$before'] = fn;
}
function after(fn) {
    suite['$after'] = fn;
}
function afterEach(fn) {
    suite['$teardown'] = fn;
}
function beforeEach(fn) {
    suite['$teardown'] = fn;
}
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_syntax) && isObject(module.exports)) {
		Object.assign(_src_utils_syntax, module.exports);
		return;
	}
	_src_utils_syntax = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_object;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function obj_defaults(target, defaults_, limit) {
    if (target == null)
        target = {};
    for (var key in defaults_) {
        if (target[key] != null)
            continue;
        if (limit != null && limit.indexOf(key) === -1)
            continue;
        target[key] = defaults_[key];
    }
    return target;
}
exports.obj_defaults = obj_defaults;
;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_object) && isObject(module.exports)) {
		Object.assign(_src_utils_object, module.exports);
		return;
	}
	_src_utils_object = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_str;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function color(arr) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        str += arr[i];
        if (i < values.length) {
            str += values[i];
        }
    }
    var result = str.color;
    return result;
}
exports.color = color;
;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_str) && isObject(module.exports)) {
		Object.assign(_src_utils_str, module.exports);
		return;
	}
	_src_utils_str = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_location;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function location_pushSearch(path, win) {
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
    }
    catch (error) { }
}
exports.location_pushSearch = location_pushSearch;
;
function location_pushHistory(path, win) {
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
        + a.hash;
    try {
        win.history.pushState(null, null, path);
    }
    catch (error) { }
}
exports.location_pushHistory = location_pushHistory;
function trySetHash(url, win) {
    var index = url.indexOf('#');
    if (index === -1)
        return;
    win.location.hash = url.substring(index + 1);
}
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_location) && isObject(module.exports)) {
		Object.assign(_src_utils_location, module.exports);
		return;
	}
	_src_utils_location = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_UTest_page;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var location_1 = _src_utils_location;
var xhr_1 = _src_utils_xhr;
var _iframe;
var UTestPage = /** @class */ (function () {
    function UTestPage() {
    }
    UTestPage.request = function (url, method, headers, data, callback) {
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
            if (data != null && data.base) {
                base = data.base;
            }
            else if (/https?:/.test(url)) {
                base = url;
            }
            else {
                base += url;
            }
            if (/<\s*head[^>]*>/i.test(html) === false) {
                // no head
                var index = html.indexOf('>');
                if (index !== -1) {
                    html = html.substring(0, index + 1)
                        + '<head><base href="'
                        + base
                        + '" /></head>'
                        + html.substring(index + 1);
                }
            }
            else {
                html = html.replace(/(head[^>]*>)/i, '$1 <base href="' + base + '" />');
            }
            _iframe = document.createElement('iframe');
            document
                .body
                .appendChild(_iframe);
            var _doc = _iframe.contentDocument, _win = _iframe.contentWindow;
            _win.__utest_isLoading = true;
            // Check if we really need this
            _win.domain = window.domain;
            var listener = xhr_1.xhr_createListener(_win);
            $(_iframe).on('load', function () {
                if (_win.include) {
                    _win.include.allDone(process);
                }
                else {
                    process();
                }
                function process() {
                    listener.done(function () {
                        _win.__utest_isLoading = false;
                        callback(null, _doc, _win, headers);
                    });
                }
            });
            location_1.location_pushSearch(url);
            _doc.open();
            // Mozilla throws NS_ERROR_FAILURE. workaround with querystring only
            //- location_pushHistory(url, _win);
            _doc.write(html);
            _doc.close();
        });
    };
    return UTestPage;
}());
exports.UTestPage = UTestPage;
;
function request(url, method, headers, data, callback) {
    headers = headers || {};
    if (/https?:/.test(url)) {
        // cross-origin
        headers['x-remote'] = url;
        url = '/utest/server/proxy';
    }
    var contentType, body = data;
    if (body && typeof body !== 'string') {
        body = JSON.stringify(body);
        contentType = 'application/json; charset=utf-8';
    }
    $
        .ajax({
        url: url,
        cache: false,
        contentType: contentType,
        data: body,
        type: (method || 'get').toUpperCase(),
        headers: headers
    })
        .done(function (response, status, xhr) {
        callback(null, response, xhr.getAllResponseHeaders());
    })
        .fail(function (xhr, textStatus) {
        callback({
            responseText: xhr.responseText,
            statusCode: xhr.status,
            headers: xhr.getAllResponseHeaders()
        });
    });
}
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_UTest_page) && isObject(module.exports)) {
		Object.assign(_src_UTest_page, module.exports);
		return;
	}
	_src_UTest_page = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_UTest_server;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vars_1 = _src_vars;
var atma_utils_1 = _node_modules_atma_utils_lib_utils;
var UTest_page_1 = _src_UTest_page;
var UTestServer = /** @class */ (function () {
    function UTestServer() {
    }
    UTestServer.server = {
        render: function (template) {
            var args = []; /* [, params, callback] */
            for (var _i = 1 /* [, params, callback] */; _i < arguments.length /* [, params, callback] */; _i++ /* [, params, callback] */) {
                args[_i - 1] = arguments[_i]; /* [, params, callback] */
            }
            var dfr = new atma_utils_1.class_Dfr(), callback;
            if (typeof args[args.length - 1] === 'function') {
                callback = args.pop();
            }
            var params = args.shift() || {}, model = params.model, scripts = params.scripts, controller = params.controller;
            UTest_page_1.UTestPage.request('/utest/server/render', 'post', null, {
                template: template,
                model: model,
                controller: controller,
                scripts: scripts,
                base: '/utest/'
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
            return dfr;
        },
        request: function (mix /* [, method, data, callback] */) {
            var url = mix, method, data, headers, callback;
            if (typeof mix !== 'string') {
                url = mix.url;
                method = mix.method;
                data = mix.data;
                headers = mix.headers;
            }
            var args = vars_1._Array_slice.call(arguments, 1), dfr = new atma_utils_1.class_Dfr();
            if (typeof args[args.length - 1] === 'function')
                callback = args.pop();
            if (args.length > 0)
                method = args.shift();
            if (args.length > 0)
                data = args.shift();
            UTest_page_1.UTestPage.request(url, method, headers, data, done);
            function done(error, doc, win) {
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
    };
    return UTestServer;
}());
exports.UTestServer = UTestServer;
;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_UTest_server) && isObject(module.exports)) {
		Object.assign(_src_UTest_server, module.exports);
		return;
	}
	_src_UTest_server = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_UTest_benchmark;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vars_1 = _src_vars;
var str_1 = _src_utils_str;
var UTest_1 = _src_UTest;
var _benchmarkLib;
var TIMEOUT = 20000;
var UTestBenchmark = /** @class */ (function () {
    function UTestBenchmark() {
    }
    UTestBenchmark.benchmark = function (model) {
        return _benchmark(model);
    };
    UTestBenchmark.benchmarkVersions = function (model) {
        return _benchmark(model);
    };
    return UTestBenchmark;
}());
exports.UTestBenchmark = UTestBenchmark;
;
function _benchmark(model) {
    if (model.$config == null) {
        model.$config = {};
    }
    var utest = {
        $config: {
            timeout: model.$config.timeout || TIMEOUT
        },
        $before: _pipeDelegate(model, [
            Before.loadBenchmarkLibrary,
            Before.loadVersions,
            Before.configurate
        ]),
        $after: model.$after
    };
    var SKIP = ['$config', '$before', '$after', '$teardown'];
    for (var suite in model) {
        if (SKIP.indexOf(suite) !== -1) {
            continue;
        }
        utest[suite] = _benchmarkDelegate(model, suite, model[suite]);
    }
    return new UTest_1.UTest(utest);
}
var Before = {
    loadBenchmarkLibrary: function (model, next) {
        if (typeof require === 'function') {
            _benchmarkLib = require('benchmark');
            next();
            return;
        }
        vars_1.include
            .instance()
            .js(model.$config.benchmarkPath || '/.reference/atma_toolkit/node_modules/benchmark/benchmark.js')
            .done(function (resp) {
            _benchmarkLib = resp.benchmark || vars_1.global.Benchmark;
            next();
        });
    },
    loadVersions: function (model, next) {
        var versions = model.$config.versions;
        if (versions == null) {
            next();
            return;
        }
        model.$config.versionRepository = {};
        var keyValues = [], key, index = -1;
        for (key in versions) {
            keyValues.push({
                version: key,
                path: versions[key],
                alias: getAlias(versions[key])
            });
        }
        function getAlias(path) {
            var i = path.indexOf('::');
            if (i !== -1) {
                return path.substring(i + 2);
            }
            i = path.lastIndexOf('/');
            return path.substring(i + 1, path.lastIndexOf('.'));
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
                    library = vars_1.global[current.alias];
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
            vars_1.include
                .instance()
                .js(current.path)
                .done(load);
        }
        load();
    },
    configurate: function (model, next) {
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
        var index = -1, imax = arr.length;
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
        var suite = new _benchmarkLib.Suite(name, {
            onError: assert.avoid('Benchamrk.OnError')
        });
        for (var key in fns) {
            suite.add(key, _getFn(key, fns));
        }
        suite
            .on('start', function () { return vars_1.logger.log(str_1.color(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Benchmark started 'bold<", ">'"], ["Benchmark started 'bold<", ">'"])), name)); })
            .on('cycle', function (event) { return vars_1.logger.log(event.target.toString()); })
            .on('teardown', model.$teardown)
            .on('complete', function (event) {
            Array
                .prototype
                .slice
                .call(suite.sort(function (a, b) {
                a = a.stats;
                b = b.stats;
                return a.mean + a.moe > b.mean + b.moe ? 1 : -1;
            }))
                .map(function (x) { return x.toString(); })
                .forEach(function (x, i) { return vars_1.logger.log(str_1.color(templateObject_2 || (templateObject_2 = __makeTemplateObject(["bold<green<", ".>> ", ""], ["bold<green<", ".>> ", ""])), i + 1, x)); });
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
var templateObject_1, templateObject_2;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_UTest_benchmark) && isObject(module.exports)) {
		Object.assign(_src_UTest_benchmark, module.exports);
		return;
	}
	_src_UTest_benchmark = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_class_Await;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var atma_utils_1 = _node_modules_atma_utils_lib_utils;
var Await = /** @class */ (function (_super) {
    __extends(Await, _super);
    function Await() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this._wait = 0;
        _this._timeout = null;
        _this._result = null;
        _this._resolved = [];
        var imax = args.length, i = -1, dfr;
        while (++i < imax) {
            dfr = args[i];
            if (dfr != null && typeof dfr.done === 'function')
                await_deferredDelegate(_this, null, dfr);
        }
        return _this;
    }
    Await.prototype.delegate = function (name, errorable) {
        return await_createDelegate(this, name, errorable);
    };
    Await.prototype.deferred = function (name) {
        return await_deferredDelegate(this, name, new atma_utils_1.class_Dfr);
    };
    Await.TIMEOUT = 2000;
    return Await;
}(atma_utils_1.class_Dfr));
exports.Await = Await;
;
function await_deferredDelegate(awaitFn, name, dfr) {
    var delegate = await_createDelegate(awaitFn, name, true);
    return dfr
        .done(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.unshift(null);
        delegate.apply(null, args);
    })
        .fail(function (error) {
        delegate(error);
    });
}
function await_createDelegate(awaitFn, name, errorable) {
    if (errorable == null)
        errorable = true;
    if (awaitFn._timeout)
        clearTimeout(awaitFn._timeout);
    awaitFn.defer();
    awaitFn._wait++;
    if (name) {
        if (!awaitFn._result)
            awaitFn._result = {};
        if (name in awaitFn._result)
            console.warn('<await>', name, 'already awaiting');
        awaitFn._result[name] = null;
    }
    var delegate = fn_createDelegate(await_listener, awaitFn, name, errorable);
    awaitFn._timeout = setTimeout(delegate, Await.TIMEOUT);
    return delegate;
}
function await_listener(awaitFn, name, errorable) {
    var args = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
    }
    if (arguments.length === 0) {
        // timeout
        awaitFn._wait = 0;
        awaitFn.reject('408: Timeout');
        return;
    }
    if (awaitFn._wait === 0)
        return;
    var result = awaitFn._result;
    if (name) {
        result[name] = {
            error: errorable ? args.shift() : null,
            arguments: args
        };
    }
    else if (errorable && arguments[3] != null) {
        if (result == null)
            result = awaitFn._result = {};
        result.__error = arguments[3];
    }
    if (--awaitFn._wait === 0) {
        clearTimeout(awaitFn._timeout);
        var error = result && result.__error;
        var val, key;
        if (error == null) {
            for (key in result) {
                val = result[key];
                error = val && val.error;
                if (error)
                    break;
            }
        }
        if (error) {
            awaitFn.reject(error, result);
            return;
        }
        awaitFn.resolve(result);
    }
}
function fn_createDelegate(fn) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return function () {
        var argsInner = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argsInner[_i] = arguments[_i];
        }
        var arr = args;
        if (argsInner.length > 0) {
            arr = args.concat(argsInner);
        }
        return fn.apply(null, arr);
    };
}
;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_class_Await) && isObject(module.exports)) {
		Object.assign(_src_class_Await, module.exports);
		return;
	}
	_src_class_Await = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_process;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * params:
 *  	- id: string
 * 		- action: string enum, start|stop
 * 		- command: string
 * 		- cwd: string (default current cwd)
 * 		- detached: boolean
 *      - silent: boolean
 *      - matchReady: string (RegExp)
 */
function process_toggle(params, done) {
    var id = params.id || params.command, process = __process[id];
    if (params.action === 'stop') {
        if (process != null) {
            delete __process[id];
            process.kill(done);
        }
        done(new Error('Process not found to stop'));
        return;
    }
    if (process != null) {
        return done(new Error("Process '" + id + "' is active"));
    }
    var options = {
        cwd: params.cwd,
        command: params.command,
        detached: params.detached,
        matchReady: toRegexp(params.matchReady),
        silent: params.silent === void 0 ? params.silent : false,
    };
    process = __process[id] = new atma.shell.Process(options);
    process
        .always(function () {
        delete __process[id];
    })
        .on('process_exception', function (data) { return done(data.error); })
        .on('process_ready', function () { return done(null, process); });
    process.run();
}
exports.process_toggle = process_toggle;
;
var __process = {};
function toRegexp(str) {
    if (str == null || str[0] !== '/') {
        return null;
    }
    var last = str.lastIndexOf('/');
    var rgx = str.substring(1, last);
    var flags = str.substring(last + 1);
    return new RegExp(rgx, flags);
}
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_process) && isObject(module.exports)) {
		Object.assign(_src_utils_process, module.exports);
		return;
	}
	_src_utils_process = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_UTest_config;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var atma_utils_1 = _node_modules_atma_utils_lib_utils;
var Options_1 = _src_Options;
var vars_1 = _src_vars;
var Await_1 = _src_class_Await;
var UTest_1 = _src_UTest;
var process_1 = _src_utils_process;
function configurate($config, done) {
    var $await = new Await_1.Await;
    for (var key in $config) {
        if (Options_1._options.hasOwnProperty(key) === false) {
            vars_1.logger.warn('Unknown key `%s`, support:', key, Object.keys(Options_1._options));
            continue;
        }
        perform(key, $config[key], $await.delegate());
    }
    $await
        .fail(function (error) { return console.error('<utest:configurate> ', error); })
        .always(done);
}
exports.configurate = configurate;
var UTestConfiguration = /** @class */ (function () {
    function UTestConfiguration() {
    }
    UTestConfiguration.prototype.$cfg = function (key) {
        var cfg = this.suite.$config;
        if (cfg == null || cfg[key] == null)
            return Options_1._options[key];
        return cfg[key];
    };
    UTestConfiguration.prototype.configurate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var cfg, done, x, xtype, i = args.length;
        while (--i > -1) {
            x = args[i];
            xtype = typeof x;
            if ('function' === xtype)
                done = x;
            if ('object' === xtype && x != null)
                cfg = x;
        }
        if (cfg == null) {
            cfg = this.suite.$config;
        }
        if (cfg == null) {
            done && done();
            return;
        }
        configurate(cfg, done);
    };
    return UTestConfiguration;
}());
exports.UTestConfiguration = UTestConfiguration;
;
var Configurations = {
    http: {
        service: function (routes, done) {
            http_config('http.service', routes, done);
        },
        config: function (configDir, done) {
            http_config('http.config', configDir, done);
        },
        include: function (pckg, done) {
            http_config('include', pckg, done);
        },
        eval: function evaluate(fn, done) {
            http_config('eval', fn.toString(), done);
        },
        process: function (params, done) {
            http_config('process', params, done);
        }
    },
    util: {
        process: function (params, done) {
            process_1.process_toggle(params, done);
        }
    }
};
function http_config() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.splice(1, 0, null); // populate later with current configuration
    args.unshift('>server:utest:action');
    UTest_1.UTest.getSocket(function (socket, config) {
        args[2] = (UTest_1.UTest.getConfig && UTest_1.UTest.getConfig()) || config;
        socket
            .emit
            .apply(socket, args);
    });
}
function perform(key, args, done) {
    var fn = atma_utils_1.obj_getProperty(Configurations, key);
    if (typeof fn !== 'function')
        return done();
    fn(args, done);
}
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_UTest_config) && isObject(module.exports)) {
		Object.assign(_src_UTest_config, module.exports);
		return;
	}
	_src_UTest_config = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_classify;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function Classify(Ctor) {
    var Class = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new (Ctor.bind.apply(Ctor, __spreadArrays([void 0], args)))();
    };
    Class.prototype = Ctor.prototype;
    forIn(Ctor, function (key) {
        if (key in Class === false) {
            Class[key] = Ctor[key];
        }
    });
    return Class;
}
exports.Classify = Classify;
function FnPrototypeAlias(Ctor) {
    Ctor.fn = Ctor.prototype;
    return Ctor;
}
exports.FnPrototypeAlias = FnPrototypeAlias;
function forIn(obj, cb) {
    var hash = Object.create(null);
    var cursor = obj;
    do {
        var props = Object.getOwnPropertyNames(cursor);
        for (var i = 0; i < props.length; i++) {
            var key = props[i];
            if (key in hash === false) {
                cb(key);
            }
            hash[key] = null;
        }
    } while (cursor = Object.getPrototypeOf(cursor));
}
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_classify) && isObject(module.exports)) {
		Object.assign(_src_utils_classify, module.exports);
		return;
	}
	_src_utils_classify = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_color;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color;
(function (Color) {
    function green(str) {
        return str.green;
    }
    Color.green = green;
    function colorize(str) {
        return str.color;
    }
    Color.colorize = colorize;
    function bg_cyan(str) {
        return str.bg_cyan;
    }
    Color.bg_cyan = bg_cyan;
})(Color = exports.Color || (exports.Color = {}));
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_color) && isObject(module.exports)) {
		Object.assign(_src_utils_color, module.exports);
		return;
	}
	_src_utils_color = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_console;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Console;
(function (Console) {
    function log() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, args);
    }
    Console.log = log;
    function error() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.error.apply(console, args);
    }
    Console.error = error;
    function warn() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.warn.apply(console, args);
    }
    Console.warn = warn;
    function print() {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        (_a = console).print.apply(_a, args);
    }
    Console.print = print;
})(Console = exports.Console || (exports.Console = {}));
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_console) && isObject(module.exports)) {
		Object.assign(_src_utils_console, module.exports);
		return;
	}
	_src_utils_console = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_utest_query;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UTestQueryUtil;
(function (UTestQueryUtil) {
    function getQuery() {
        if (typeof process === 'undefined' || process.argv == null) {
            return null;
        }
        var argv = process.argv;
        for (var i = 0; i < argv.length - 1; i++) {
            var key = argv[i];
            if (key === '-q' || key === '--query') {
                var str = argv[i + 1];
                return new RegExp(str);
            }
        }
        return null;
    }
    UTestQueryUtil.getQuery = getQuery;
    function matchQuery(key, q) {
        return q.test(key);
    }
    UTestQueryUtil.matchQuery = matchQuery;
})(UTestQueryUtil = exports.UTestQueryUtil || (exports.UTestQueryUtil = {}));
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_utest_query) && isObject(module.exports)) {
		Object.assign(_src_utils_utest_query, module.exports);
		return;
	}
	_src_utils_utest_query = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_UTestVars;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UTestVars = {
    tests: [],
    listeners: {},
    index: -1,
    testsDone: null,
    clear: function () {
        this.tests = [];
        this.listeners = {};
        this.index = -1;
    }
};
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_UTestVars) && isObject(module.exports)) {
		Object.assign(_src_UTestVars, module.exports);
		return;
	}
	_src_UTestVars = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_UTest;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vars_1 = _src_vars;
var atma_utils_1 = _node_modules_atma_utils_lib_utils;
var transport_jam_1 = _src_utils_transport_jam;
var Options_1 = _src_Options;
var is_1 = _src_utils_is;
var wrapper_1 = _src_assert_wrapper;
var syntax_1 = _src_utils_syntax;
var object_1 = _src_utils_object;
var str_1 = _src_utils_str;
var UTest_server_1 = _src_UTest_server;
var UTest_benchmark_1 = _src_UTest_benchmark;
var UTest_config_1 = _src_UTest_config;
var classify_1 = _src_utils_classify;
var color_1 = _src_utils_color;
var console_1 = _src_utils_console;
var utest_query_1 = _src_utils_utest_query;
var UTestVars_1 = _src_UTestVars;
var RESERVED = [
    '$teardown',
    '$config',
    '$before',
    '$after',
    '$run'
];
function nextUTest() {
    if (++UTestVars_1.UTestVars.index > UTestVars_1.UTestVars.tests.length - 1) {
        UTestVars_1.UTestVars.testsDone();
        return;
    }
    var test = UTestVars_1.UTestVars.tests[UTestVars_1.UTestVars.index];
    test.run(nextUTest);
}
function teardownDelegate(ctx, teardown, done, utest) {
    if (teardown == null)
        return done;
    return function () {
        ctx.arguments = arguments;
        runCase(ctx, teardown, done, null, null, utest);
    };
}
function async(callback, name, msTimeout) {
    var isTimeouted = false;
    var isProcessed = false;
    // in case http requests are busy, take some more time
    var jam = 5;
    var fn = function () {
        clearTimeout(timeout);
        if (isTimeouted || isProcessed)
            return;
        isProcessed = true;
        callback.apply(null, arguments);
    };
    var timeout = wait();
    var future = {
        fn: fn,
        id: timeout,
        timeout: null
    };
    function onTimeout() {
        if (transport_jam_1.transport_isBusy() && --jam > 0) {
            timeout = future.timeout = wait();
            console_1.Console.log(str_1.color(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<transport jam> bold<", "> yellow<", ">"], ["<transport jam> bold<", "> yellow<", ">"])), jam, name));
            return;
        }
        console_1.Console.error('Async Suite Timeout - ', name);
        isTimeouted = true;
        vars_1.assert.timeouts.push(name);
        callback();
    }
    function wait() {
        var ms = msTimeout || Options_1._options.timeout;
        if (ms > Math.pow(2, 30)) {
            return 0;
        }
        return setTimeout(onTimeout, ms);
    }
    return future;
}
function runCase(ctx, fn, done, teardown, key, utest) {
    if (fn != null && typeof fn === 'object') {
        var sub = new UTest(key, fn, ctx);
        sub.run(teardownDelegate(ctx, teardown, done, utest));
        return;
    }
    var asyncData;
    try {
        var args = vars_1._Array_slice.call(ctx.arguments || []), onComplete = teardownDelegate(ctx, teardown, done, utest), asyncData, result;
        if (atma_utils_1.is_Function(fn) === false) {
            onComplete();
            return;
        }
        if (case_hasAsyncCallback(fn)) {
            asyncData = async(onComplete, key, ctx.$config && ctx.$config.timeout);
            args.unshift(asyncData.fn);
            result = fn.apply(ctx, args);
            tryWait_Deferred(result);
            return;
        }
        result = fn.apply(ctx, args);
        if (tryWait_Deferred(result))
            return;
        onComplete();
    }
    catch (error) {
        if (asyncData)
            clearTimeout(asyncData.id);
        if (error.name === 'AssertionError') {
            vars_1.assert.fail(error);
            done();
            return;
        }
        error.stack = vars_1.assert.prepairStack(error.stack);
        console_1.Console.error(error.toString());
        if (error.stack) {
            console_1.Console.error(error.stack);
        }
        vars_1.assert.errors++;
        done();
    }
    function tryWait_Deferred(dfr) {
        if (is_1.is_Deferred(dfr) === false) {
            return false;
        }
        if (asyncData == null) {
            asyncData = async(onComplete, key, ctx.$config && ctx.$config.timeout);
        }
        function onFail(error) {
            if (error && error.name === "AssertionError" && vars_1.assert.onfailure) {
                vars_1.assert.fail(error);
                return;
            }
            var msg = str_1.color(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Test case red<bold<", ">> rejected"], ["Test case red<bold<", ">> rejected"])), key);
            vars_1.logger.log(msg);
            if (error.stack) {
                vars_1.logger.log(error.stack);
            }
            else {
                vars_1.logger.log(error.toString());
            }
            wrapper_1.eq_(error, null);
            asyncData.fn();
        }
        function onSuccess() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            wrapper_1.eq_(result._rejected, null);
            if (args.length !== 0)
                ctx.arguments = args;
            asyncData.fn();
        }
        var supportsCatch = atma_utils_1.is_Function(result.catch);
        var x = result.then(onSuccess, supportsCatch ? void 0 : onFail);
        if (supportsCatch) {
            x.catch(onFail);
        }
        return true;
    }
}
function case_hasAsyncCallback(fn) {
    if (fn.length === 0) {
        return false;
    }
    var str = fn
        .toString()
        .replace(fn.name, '')
        // Name in Source Code can have quotes
        .replace(/^['"]+/, '')
        .trim();
    return /^(async )?(function)?\s*\([\w\s,]*(done|next)/.test(str);
}
var UTestProto = {
    // stores data exposed by the async Case
    arguments: null,
    $run: function (key, done) {
        runCase(this.proto, this.suite[key], done || function () { }, null, key, this);
    }
};
var UTestProtoDelegate = function (instance, suite) {
    var proto = {};
    for (var key in UTestProto) {
        if (typeof UTestProto[key] === 'function') {
            proto[key] = UTestProto[key].bind(instance);
            continue;
        }
        proto[key] = UTestProto[key];
    }
    for (var key in suite) {
        proto[key] = suite[key];
    }
    return proto;
};
var UTest = /** @class */ (function (_super) {
    __extends(UTest, _super);
    function UTest(mix, $suite, parent) {
        var _this = _super.call(this) || this;
        var name = mix;
        var suite = $suite;
        if (typeof mix !== 'string' && suite == null) {
            suite = mix;
            name = 'UTest';
        }
        _this._start = _this._start.bind(_this);
        _this._nextCase = _this._nextCase.bind(_this);
        if (typeof $suite === 'function') {
            suite = syntax_1.syntax_Mocha($suite);
        }
        if (parent != null) {
            suite.$config = object_1.obj_defaults(suite.$config, parent.$config, [
                'timeout',
                'errorableCallbacks'
            ]);
        }
        _this.name = name;
        _this.suite = suite;
        _this.processed = [];
        _this.proto = UTestProtoDelegate(_this, suite);
        // @obsolete properties
        ['before', 'after', 'teardown', 'config']
            .forEach(function (key) {
            if (suite[key] == null)
                return;
            console_1.Console.warn("<UTest> " + key + " property is deprecated. Use: $" + key);
            suite['$' + key] = suite[key];
            delete suite[key];
        });
        if (parent == null) {
            UTestVars_1.UTestVars.tests.push(_this);
        }
        return _this;
    }
    UTest_1 = UTest;
    UTest.create = function (mix, $suite, parent) {
        var Ctor = this;
        var x = new Ctor(mix, $suite, parent);
        return x;
    };
    UTest.prototype.run = function (mix) {
        var callback = null;
        var q = null;
        if (mix != null) {
            if (typeof mix === 'function') {
                callback = mix;
            }
            else {
                callback = mix.callback;
                q = mix.query;
            }
        }
        this.processed = [];
        this.errors = 0;
        //this.snapshot = {
        //	total: assert.total,
        //	failed: assert.failed
        //};
        this.onComplete = callback;
        if (this.handleQuery(q) === false) {
            this.handleRanges();
            this.handleBangs();
        }
        this.configurate(this._start);
    };
    UTest.prototype.handleQuery = function (query) {
        if (typeof query === 'string') {
            query = new RegExp(query);
        }
        var q = query || utest_query_1.UTestQueryUtil.getQuery();
        if (q == null) {
            return false;
        }
        var SKIP = ['$config', '$before', '$after', '$teardown'];
        return handleQuery(this.suite);
        /* private */
        function handleQuery(obj) {
            var has = false;
            Object
                .keys(obj)
                .forEach(function (key) {
                if (key[0] === '$' && SKIP.indexOf(key) > -1) {
                    return;
                }
                var val = obj[key];
                var matched = utest_query_1.UTestQueryUtil.matchQuery(key, q);
                if (matched) {
                    has = true;
                    return;
                }
                if (atma_utils_1.is_Object(val)) {
                    var hasInner = handleQuery(val);
                    if (hasInner) {
                        has = true;
                        return;
                    }
                }
                delete obj[key];
            });
            return has;
        }
    };
    UTest.prototype.handleBangs = function () {
        var has = rewriteDeep(this.suite);
        if (has) {
            clearObject(this.suite);
        }
        function rewriteDeep(obj) {
            var has = false;
            Object
                .keys(obj)
                .forEach(function (key) {
                var val = obj[key];
                if (key[0] === '!') {
                    has = true;
                    if (atma_utils_1.is_Object(val) && hasBang(val) === false) {
                        forceDeep(val);
                    }
                    return;
                }
                if (key[0] !== '!' && atma_utils_1.is_Object(val) && hasBang(val)) {
                    delete obj[key];
                    key = '!' + key;
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
                if (RESERVED.indexOf(key) !== -1)
                    continue;
                if (key.substring(0, 2) === '//')
                    continue;
                val = obj[key];
                delete obj[key];
                obj['!' + key] = val;
                if (atma_utils_1.is_Object(val)) {
                    forceDeep(val);
                }
            }
        }
        function cleanBangsDeep(obj) {
            var key, val;
            for (key in obj) {
                if (key[0] !== '!')
                    continue;
                val = obj[key];
                delete obj[key];
                obj[key.replace(/^!+/, '')] = val;
                if (atma_utils_1.is_Object(val)) {
                    cleanBangsDeep(val);
                }
            }
        }
        function clearObject(obj) {
            Object
                .keys(obj)
                .forEach(function (key) {
                if (RESERVED.indexOf(key) !== -1)
                    return;
                if (key[0] !== '!') {
                    delete obj[key];
                    return;
                }
                if (atma_utils_1.is_Object(obj[key]))
                    clearObject(obj[key]);
            });
        }
        function hasBang(obj) {
            return Object.keys(obj).some(function (key) {
                if (key[0] === '!') {
                    return true;
                }
                var val = obj[key];
                if (atma_utils_1.is_Object(val)) {
                    return hasBang(val);
                }
                return false;
            });
        }
    };
    UTest.prototype.handleRanges = function () {
        var keys = Object.keys(this.suite), start, end;
        keys.forEach(function (x, index) {
            switch (x[0]) {
                case '[':
                    if (start != null) {
                        vars_1.logger.warn('Range is already started at `%s` (skipp)', keys[start]);
                        return;
                    }
                    start = index;
                    break;
                case ']':
                    if (end != null) {
                        vars_1.logger.warn('Range is already closed at `%s` (enlarge)', keys[end]);
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
        vars_1.logger.log(str_1.color(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Range: from bold<green<", ">> to bold<green<", ">>"], ["Range: from bold<green<", ">> to bold<green<", ">>"])), keys[start], keys[end]));
        var range = {}, suite = this.suite;
        keys.slice(start, end + 1).forEach(function (key) {
            range[key] = suite[key];
        });
        RESERVED.forEach(function (key) {
            if (suite[key] != null)
                range[key] = suite[key];
        });
        this.suite = range;
    };
    UTest.prototype._start = function () {
        runCase(this.proto, this.suite.$before, this._nextCase, null, null, this);
    };
    UTest.prototype._nextCase = function () {
        var _this = this;
        if (arguments.length > 0) {
            var index = 0;
            if (this.$cfg('errorableCallbacks') === true) {
                vars_1.assert.equal(arguments[0], null);
                index = 1;
            }
            this.proto.arguments = vars_1._Array_slice.call(arguments, index);
        }
        var breakOnError = this.$cfg('breakOnError');
        if (breakOnError) {
            breakOnError = vars_1.assert.failed !== 0
                || vars_1.assert.errors !== 0
                || vars_1.assert.timeouts.length !== 0;
        }
        for (var key in this.suite) {
            if (breakOnError)
                break;
            if (~this.processed.indexOf(key))
                continue;
            // reserved
            if (RESERVED.indexOf(key) !== -1)
                continue;
            if (key.substring(0, 2) === '//') {
                console_1.Console.warn(key.substring(2), str_1.color(templateObject_4 || (templateObject_4 = __makeTemplateObject(["bold<(skipped)>"], ["bold<(skipped)>"]))));
                this.processed.push(key);
                continue;
            }
            this.processed.push(key);
            var case_ = this.suite[key];
            if (case_ == null)
                continue;
            var message = str_1.color(templateObject_5 || (templateObject_5 = __makeTemplateObject(["   bold<", ">: "], ["   bold<", ">: "])), key);
            if (typeof case_ === 'object') {
                message = color_1.Color.bg_cyan(message);
            }
            console_1.Console.log('');
            console_1.Console.print(message);
            runCase(this.proto, case_, this._nextCase, this.suite.$teardown, key, this);
            return;
        }
        runCase(this.proto, this.suite.$after, function () {
            UTest_1.trigger('complete', _this);
            _this.onComplete && _this.onComplete();
        }, null, null, this);
    };
    UTest.stats = function () {
        return {
            suites: UTestVars_1.UTestVars.tests.length
        };
    };
    UTest.clear = function () {
        UTestVars_1.UTestVars.clear();
    };
    UTest.run = function (callback) {
        UTestVars_1.UTestVars.index = -1;
        UTestVars_1.UTestVars.testsDone = callback;
        nextUTest();
    };
    UTest.on = function (event, callback) {
        switch (event) {
            case 'complete':
                if (UTest_1.isBusy() === false) {
                    callback();
                    return;
                }
                break;
        }
        var fns = (UTestVars_1.UTestVars.listeners[event] || (UTestVars_1.UTestVars.listeners[event] = []));
        fns.push(callback);
    };
    UTest.trigger = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var fns = UTestVars_1.UTestVars.listeners[event];
        if (fns == null || !fns.length) {
            return;
        }
        for (var i = 0, x, imax = fns.length; i < imax; i++) {
            x = fns[i];
            x.apply(null, args);
        }
    };
    UTest.isBusy = function () {
        return UTestVars_1.UTestVars.index < UTestVars_1.UTestVars.tests.length;
    };
    UTest.cfg = function (options) {
        for (var key in options) {
            Options_1._options[key] = options[key];
        }
    };
    UTest.configurate = function ($config, done) {
        UTest_config_1.configurate($config, done);
    };
    var UTest_1;
    UTest.default = UTest_1;
    UTest.domtest = (function () {
        if (typeof DomTest !== 'undefined') {
            return DomTest;
        }
        return require('domtest');
    }());
    // Is overriden in browser or node builds
    UTest.getSocket = null;
    UTest.getConfig = null;
    UTest = UTest_1 = __decorate([
        classify_1.Classify,
        classify_1.FnPrototypeAlias
    ], UTest);
    return UTest;
}(atma_utils_1.mixin(UTest_server_1.UTestServer, UTest_config_1.UTestConfiguration, UTest_benchmark_1.UTestBenchmark)));
exports.UTest = UTest;
if (vars_1.global.UTest == null) {
    vars_1.global.UTest = UTest;
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_UTest) && isObject(module.exports)) {
		Object.assign(_src_UTest, module.exports);
		return;
	}
	_src_UTest = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_browser_detect;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vars_1 = _src_vars;
exports.browserInfo = vars_1.global.browserInfo = vars_1.global.browserInfo || detect();
function detect() {
    var info = {};
    if (typeof navigator == 'undefined') {
        return info;
    }
    var ua = navigator.userAgent, _object, _prop1, _prop2;
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
        info.platform.name = 'unknown';
    }
    use(info.browser = {}, 'name', 'version');
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
    return info;
}
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_browser_detect) && isObject(module.exports)) {
		Object.assign(_src_browser_detect, module.exports);
		return;
	}
	_src_browser_detect = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_browser_notify;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _compo;
function notify(state) {
    if (_compo == null) {
        _compo = $('.utest-server-status').compo();
    }
    _compo.scope.status = state;
}
exports.notify = notify;
;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_browser_notify) && isObject(module.exports)) {
		Object.assign(_src_browser_notify, module.exports);
		return;
	}
	_src_browser_notify = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_browser_utils_include;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vars_1 = _src_vars;
exports.include_ready = (function () {
    var callback;
    function defer() {
        vars_1.include.done(function () {
            setTimeout(check);
        });
    }
    function check() {
        if (typeof vars_1.include === 'undefined') {
            callback();
            return;
        }
        if (vars_1.include.state == null || vars_1.include.state > 3) {
            callback();
            return;
        }
        defer();
    }
    return function (fn) {
        // callback = fn;
        // check();
        vars_1.include.allDone(fn);
    };
}());
exports.include_clearCache = function () {
    if (typeof vars_1.include === 'undefined') {
        return;
    }
    var resources = vars_1.include.getResources(), scripts = document.querySelectorAll('head > script');
    // @TODO - remove only scripts from resources
    for (var i = 0, x, imax = scripts.length; i < imax; i++) {
        x = scripts[i];
        x.parentNode.removeChild(x);
    }
    for (var key in resources) {
        resources[key] = {};
    }
    if (window.location.search.indexOf('nocache') === -1)
        vars_1.include.cfg('version', +(new Date));
    vars_1.global.include = vars_1.include.instance();
};
exports.include_reset = function () {
    if (typeof vars_1.include === 'undefined' || vars_1.include.instance == null) {
        return;
    }
    vars_1.global.include = vars_1.include.instance();
};
exports.include_configurate = function (suite) {
    var cfg = suite.$config && suite.$config.includejs;
    if (cfg == null) {
        return;
    }
    vars_1.include.cfg(cfg);
};
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_browser_utils_include) && isObject(module.exports)) {
		Object.assign(_src_browser_utils_include, module.exports);
		return;
	}
	_src_browser_utils_include = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_browser_utils_script;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var atma_utils_1 = _node_modules_atma_utils_lib_utils;
exports.script_insert = (function () {
    function scriptLoadedDelegate(callback) {
        return function scriptLoaded(event) {
            if (event && event.type === 'error') {
                console.error('Script cannt be loaded', event.target.src);
            }
            callback && callback();
        };
    }
    return function (data, callback) {
        var path = data.path, code = data.code, tag = document.createElement('script');
        callback = scriptLoadedDelegate(callback);
        tag.type = 'text/javascript';
        if (path) {
            //
            path += (~path.indexOf('?') ? '&' : '?') + Date.now();
            tag.src = path;
            if ('onreadystatechange' in tag) {
                tag.onreadystatechange = function () {
                    switch (this.readyState) {
                        case 'complete':
                        case 'loaded':
                            callback();
                            break;
                    }
                };
            }
            else {
                tag.onload = tag.onerror = callback;
            }
        }
        else {
            tag.innerHTML = code;
        }
        var head = document.body || document.querySelector('head');
        head.appendChild(tag);
    };
}());
function script_insertMany(bundle, callback) {
    if (!(atma_utils_1.is_Array(bundle) && bundle.length)) {
        callback();
        return;
    }
    for (var i = 0, x, imax = bundle.length; i < imax; i++) {
        x = bundle[i];
        exports.script_insert({ path: x }, i === imax - 1 ? callback : null);
    }
}
exports.script_insertMany = script_insertMany;
function script_getResources() {
    var scripts = document.querySelectorAll('script'), resources = [];
    for (var i = 0, x, imax = scripts.length; i < imax; i++) {
        x = scripts[i].getAttribute('src');
        if (x) {
            resources.push(x);
        }
    }
    return resources;
}
exports.script_getResources = script_getResources;
;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_browser_utils_script) && isObject(module.exports)) {
		Object.assign(_src_browser_utils_script, module.exports);
		return;
	}
	_src_browser_utils_script = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_cfg;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vars_1 = _src_vars;
function cfg_runConfigurationScript(type, config, done) {
    var $script = config && config.$config && config.$config[type];
    if ($script == null)
        return done();
    if (typeof $script === 'function') {
        $script(done);
        if ($script.length === 0)
            done();
        return;
    }
    if (typeof $script === 'string') {
        vars_1.include
            .instance(config.base || (process.cwd() + '/'))
            .js($script + '::Script')
            .done(function (resp) {
            var Script = resp.Script;
            if (Script == null || Script.process == null) {
                vars_1.logger
                    .error('<configuration script>', $script)
                    .error(' is not loaded or `process` function not implemented');
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
}
exports.cfg_runConfigurationScript = cfg_runConfigurationScript;
;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_cfg) && isObject(module.exports)) {
		Object.assign(_src_utils_cfg, module.exports);
		return;
	}
	_src_utils_cfg = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_fn;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fn_waterfall() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    var done = fns.pop(), imax = fns.length, i = -1;
    function next() {
        if (++i > imax - 1)
            return done();
        fns[i](next);
    }
    next();
}
exports.fn_waterfall = fn_waterfall;
;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_fn) && isObject(module.exports)) {
		Object.assign(_src_utils_fn, module.exports);
		return;
	}
	_src_utils_fn = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_browser_RunnerDom;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UTestVars_1 = _src_UTestVars;
var UTest_1 = _src_UTest;
var vars_1 = _src_vars;
var atma_utils_1 = _node_modules_atma_utils_lib_utils;
var include_1 = _src_browser_utils_include;
var script_1 = _src_browser_utils_script;
var cfg_1 = _src_utils_cfg;
var fn_1 = _src_utils_fn;
var _configs, _configIndex, _socket, _stats, _onComplete, _runners;
var RunnerDom = /** @class */ (function () {
    function RunnerDom(config) {
        this.config = config;
        this.scripts = config.scripts;
        this.process = this.process.bind(this);
        this.processSingle = this.processSingle.bind(this);
        this.singleComplete = this.singleComplete.bind(this);
        var key, val, cfg = config.$config;
        for (key in cfg) {
            val = cfg[key];
            if (/^function\s*\(/.test(val)) {
                cfg[key] = eval('(' + val + ')');
            }
        }
    }
    RunnerDom.run = function (configs, socket, callback) {
        _runners = [];
        _socket = socket;
        _configs = atma_utils_1.is_Array(configs) ? configs : [configs];
        _onComplete = callback;
        _stats = {};
        _configIndex = -1;
        _socket.emit('browser:utest:start', {
            userAgent: window.browserInfo
        });
        vars_1.assert.reset();
        cfg_runNext();
    };
    RunnerDom.getResources = function () {
        var resources = [];
        for (var i = 0, x, imax = _runners.length; i < imax; i++) {
            x = _runners[i];
            if (x.resources) {
                resources = resources.concat(x.resources);
            }
        }
        return resources;
    };
    RunnerDom.getCurrentConfig = function () {
        return _configs[_configIndex];
    };
    RunnerDom.prototype.run = function (callback) {
        this.onComplete = callback;
        this.index = -1;
        this.stats = [];
        UTestVars_1.UTestVars.clear();
        include_1.include_clearCache();
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
    };
    RunnerDom.prototype.process = function () {
        if (++this.index > this.scripts.length - 1) {
            this.resources = script_1.script_getResources();
            this.onComplete(this);
            return;
        }
        var path = this.scripts[this.index];
        _socket.emit('browser:utest:script', {
            script: path
        });
        include_1.include_reset();
        UTestVars_1.UTestVars.clear();
        path = '/utest/' + path;
        script_1.script_insert({ path: path }, this.processSingle);
    };
    RunnerDom.prototype.processSingle = function (force) {
        var that = this;
        include_1.include_ready(function () {
            UTest_1.UTest.run(that.singleComplete);
        });
    };
    RunnerDom.prototype.singleComplete = function () {
        this.stats.push({
            url: this.scripts[this.index],
            total: vars_1.assert.total,
            failed: vars_1.assert.failed,
            timeouts: vars_1.assert.timeouts,
            errors: vars_1.assert.errors,
            callbacks: vars_1.assert.callbacks,
        });
        this.process();
    };
    return RunnerDom;
}());
exports.RunnerDom = RunnerDom;
;
function cfg_runNext() {
    if (++_configIndex > _configs.length - 1) {
        _onComplete(_stats);
        return;
    }
    var config = _configs[_configIndex];
    _socket.emit('browser:utest:beforestart', {
        config: config
    }, function () {
        _runners.push(new RunnerDom(config).run(cfg_runNext));
    });
}
function suite_prepair(runner, callback) {
    var suite = runner.config;
    include_1.include_configurate(suite);
    fn_1.fn_waterfall(function (done) {
        cfg_1.cfg_runConfigurationScript('$after', _configs[_configIndex - 1], done);
    }, function (done) {
        suite_loadEnv(runner, suite, done);
    }, function (done) {
        cfg_1.cfg_runConfigurationScript('$before', suite, done);
    }, callback);
}
function suite_loadEnv(runner, suite, done) {
    if (atma_utils_1.is_Array(suite.env) === false) {
        done();
        return;
    }
    if (typeof vars_1.include === 'undefined') {
        script_1.script_insertMany(suite.env, done);
        return;
    }
    var resource = vars_1.include
        .instance('/utest/');
    suite.env.forEach(function (x) {
        resource.js(x);
    });
    resource.done(function (resp) {
        setTimeout(function () {
            for (var lib in resp) {
                var exports = resp[lib];
                if (exports == null) {
                    break;
                }
                var notEmpty = typeof exports !== 'object' || 'length' in exports;
                if (notEmpty === false) {
                    var empty = {};
                    for (var key in exports) {
                        if (key in empty) {
                            continue;
                        }
                        notEmpty = true;
                        break;
                    }
                }
                if (notEmpty === false) {
                    break;
                }
                if (exports != null) {
                    window[lib] = exports;
                }
            }
            done(resp);
        });
    });
}
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_browser_RunnerDom) && isObject(module.exports)) {
		Object.assign(_src_browser_RunnerDom, module.exports);
		return;
	}
	_src_browser_RunnerDom = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_browser_const;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.state_ready = 1;
exports.state_busy = 2;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_browser_const) && isObject(module.exports)) {
		Object.assign(_src_browser_const, module.exports);
		return;
	}
	_src_browser_const = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_browser_utest_start;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RunnerDom_1 = _src_browser_RunnerDom;
var ActionVars_1 = _src_browser_ActionVars;
var const_1 = _src_browser_const;
var vars_1 = _src_vars;
var detect_1 = _src_browser_detect;
function utest_start(configs) {
    if (!configs) {
        ActionVars_1.ActionVars.socket.emit('browser:utest:end', {
            error: 'No scripts to be tested'
        });
        return;
    }
    ActionVars_1.ActionVars.state = const_1.state_busy;
    if (ActionVars_1.ActionVars.configuration._wait > 0) {
        ActionVars_1.ActionVars.configuration.always(utest_start.bind(null, configs));
        return;
    }
    RunnerDom_1.RunnerDom.run(configs, ActionVars_1.ActionVars.socket, function () {
        ActionVars_1.ActionVars.state = const_1.state_ready;
        var resources = RunnerDom_1.RunnerDom.getResources();
        ActionVars_1.ActionVars.socket.emit('browser:utest:end', {
            total: vars_1.assert.total,
            failed: vars_1.assert.failed,
            timeouts: vars_1.assert.timeouts,
            callbacks: vars_1.assert.callbacks,
            errors: vars_1.assert.errors,
            userAgent: detect_1.browserInfo,
            resources: resources
        });
    });
}
exports.utest_start = utest_start;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_browser_utest_start) && isObject(module.exports)) {
		Object.assign(_src_browser_utest_start, module.exports);
		return;
	}
	_src_browser_utest_start = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_browser_ActionVars;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vars_1 = _src_vars;
var notify_1 = _src_browser_notify;
var Await_1 = _src_class_Await;
var utest_start_1 = _src_browser_utest_start;
exports.state_ready = 1;
exports.state_busy = 2;
exports.ActionVars = {
    state: exports.state_ready,
    configuration: new Await_1.Await,
    socket: vars_1.global.io.connect(location.protocol + '//' + location.host + '/utest-browser')
        .on('connect', function () {
        notify_1.notify('connected');
    })
        .on('disconnect', function () {
        notify_1.notify('disconnected');
    })
        .on('server:utest:handshake', function (done) {
        console.log('browser:handshake');
        done({
            userAgent: window.browserInfo,
            ready: exports.ActionVars.state
        });
    })
        .on('server:utest', utest_start_1.utest_start)
};
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_browser_ActionVars) && isObject(module.exports)) {
		Object.assign(_src_browser_ActionVars, module.exports);
		return;
	}
	_src_browser_ActionVars = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_browser_utest_extend;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UTest_1 = _src_UTest;
var ActionVars_1 = _src_browser_ActionVars;
var RunnerDom_1 = _src_browser_RunnerDom;
UTest_1.UTest.getSocket = function (callback) {
    callback(ActionVars_1.ActionVars.socket);
};
UTest_1.UTest.getConfig = RunnerDom_1.RunnerDom.getCurrentConfig;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_browser_utest_extend) && isObject(module.exports)) {
		Object.assign(_src_browser_utest_extend, module.exports);
		return;
	}
	_src_browser_utest_extend = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_browser_action;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vars_1 = _src_vars;
_src_browser_utest_extend;
var ActionVars_1 = _src_browser_ActionVars;
vars_1.global.onerror = function (message, file, lineNumber) {
    var lines = [];
    lines.push('Message: ' + message);
    lines.push('File: ' + file + ':' + lineNumber);
    message = lines.join('\n');
    console.error(message);
    ActionVars_1.ActionVars.socket.emit('browser:utest:error', {
        error: message
    });
};
vars_1.global.addEventListener('unhandledrejection', function (event) {
    var error = event.reason;
    var message = error.stack || error.message || JSON.stringify(error);
    console.error(message);
    ActionVars_1.ActionVars.socket.emit('browser:utest:error', {
        error: message
    });
});
// function server_configurate(action) {
//     var args = Array.prototype.slice.call(arguments);
//     args.unshift('>server:utest:action');
//     args.push(configuration.delegate());
//     socket
//         .emit
//         .apply(socket, args)
//         ;
// }
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_browser_action) && isObject(module.exports)) {
		Object.assign(_src_browser_action, module.exports);
		return;
	}
	_src_browser_action = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_browser_utils_logger;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vars_1 = _src_vars;
var ActionVars_1 = _src_browser_ActionVars;
var orig_log = console.log;
console.print = function () {
    orig_log.apply(console, arguments);
};
for (var key in console) {
    if (typeof console[key] !== 'function') {
        continue;
    }
    console[key] = logger_create(key);
}
vars_1.assert.onfailure = function () {
    ActionVars_1.ActionVars.socket.emit('browser:assert:failure', Arguments_dismissCircular(arguments));
};
vars_1.assert.onsuccess = function () {
    ActionVars_1.ActionVars.socket.emit('browser:assert:success', Arguments_dismissCircular(arguments));
};
function logger_create(key) {
    var original = console[key];
    return function () {
        var args = Arguments_dismissCircular(arguments);
        if (ActionVars_1.ActionVars.socket) {
            ActionVars_1.ActionVars.socket.emit('browser:log', key, args);
        }
        return original.apply(console, args);
    };
}
function Arguments_dismissCircular(arguments_) {
    var arr = [], imax = arguments_.length, i = -1;
    while (++i < imax) {
        arr[i] = logger_dimissCircular(arguments_[i]);
    }
    return arr;
}
var logger_dimissCircular = (function () {
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
    return function (mix) {
        if (typeof mix === 'object' && mix != null) {
            cache = [];
            mix = clone(mix);
            cache = null;
        }
        return mix;
    };
}());
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_browser_utils_logger) && isObject(module.exports)) {
		Object.assign(_src_browser_utils_logger, module.exports);
		return;
	}
	_src_browser_utils_logger = module.exports;
}());
// end:source ./ModuleSimplified.js

"use strict";
var vars_1 = _src_vars;
_src_assert_assert_browser;
_src_patch_jquery;
var UTest_1 = _src_UTest;
_src_browser_detect;
_src_browser_action;
_src_browser_utils_logger;
vars_1.logger.cfg({
    formatMessage: false,
    transport: {
        type: 'console'
    }
});
module.exports = UTest_1.UTest;

}));
// end:source ./UMD.js
