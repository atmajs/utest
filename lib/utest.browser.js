
// source ./UMD.js
(function (factory) {

    var _name = 'UTest',
        _global = typeof window === 'undefined' ? global : window,
        _module = {
            exports: {}
        };

    factory(_module, _module.exports, _global);

    if (typeof module === 'object' && module.exports) {
        module.exports = _module.exports;
    }

    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return _module.exports;
        });
        return;
    }
    
    if (_name) {
        _global[_name] = _module.exports;
    }

}(function (module, exports, global) {

    var _node_modules_atma_utils_lib_umd_utils = {};
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
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_vars != null ? _src_vars : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.global = exports.assert = exports.app = exports.io = exports.atma = exports.logger = exports.include = exports.mask = exports._Array_slice = void 0;
const g = typeof global !== 'undefined' ? global : window;
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

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_vars === module.exports) {
        // do nothing if
    } else if (__isObj(_src_vars) && __isObj(module.exports)) {
        Object.assign(_src_vars, module.exports);
    } else {
        _src_vars = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _node_modules_atma_utils_lib_umd_utils;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _node_modules_atma_utils_lib_umd_utils != null ? _node_modules_atma_utils_lib_umd_utils : {};
    var module = { exports: exports };

    
// source ./UMD.js
(function (factory) {

    var _name = 'Utils',
        _global = typeof window === 'undefined' ? global : window,
        _module = {
            exports: {}
        };

    factory(_module, _module.exports, _global);

    if (typeof module === 'object' && module.exports) {
        module.exports = _module.exports;
    }

    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return _module.exports;
        });
        return;
    }
    
    if (_name) {
        _global[_name] = _module.exports;
    }

}(function (module, exports, global) {

    var _src_arr = {};
var _src_class = {};
var _src_class_Dfr = {};
var _src_class_EventEmitter = {};
var _src_class_Uri = {};
var _src_error = {};
var _src_fn = {};
var _src_is = {};
var _src_mixin = {};
var _src_obj = {};
var _src_promisify = {};
var _src_proto = {};
var _src_refs = {};
var _src_str = {};

// source ./ModuleSimplified.js
var _src_is;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_is != null ? _src_is : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is_NODE = exports.is_DOM = exports.is_Observable = exports.is_PromiseLike = exports.is_Date = exports.is_rawObject = exports.is_notEmptyString = exports.is_String = exports.is_ArrayLike = exports.is_Array = exports.is_Object = exports.is_Function = void 0;
function is_Function(x) {
    return typeof x === 'function';
}
exports.is_Function = is_Function;
function is_Object(x) {
    return x != null && typeof x === 'object';
}
exports.is_Object = is_Object;
function is_Array(arr) {
    return (arr != null &&
        typeof arr === 'object' &&
        typeof arr.length === 'number' &&
        typeof arr.slice === 'function');
}
exports.is_Array = is_Array;
exports.is_ArrayLike = is_Array;
function is_String(x) {
    return typeof x === 'string';
}
exports.is_String = is_String;
function is_notEmptyString(x) {
    return typeof x === 'string' && x !== '';
}
exports.is_notEmptyString = is_notEmptyString;
function is_rawObject(x) {
    return x != null && typeof x === 'object' && (x.constructor === Object || x.constructor == null);
}
exports.is_rawObject = is_rawObject;
function is_Date(x) {
    if (x == null || typeof x !== 'object') {
        return false;
    }
    if (x.getFullYear != null && isNaN(x) === false) {
        return true;
    }
    return false;
}
exports.is_Date = is_Date;
function is_PromiseLike(x) {
    return x != null && typeof x === 'object' && typeof x.then === 'function';
}
exports.is_PromiseLike = is_PromiseLike;
function is_Observable(x) {
    return x != null && typeof x === 'object' && typeof x.subscribe === 'function';
}
exports.is_Observable = is_Observable;
exports.is_DOM = typeof window !== 'undefined' && window.navigator != null;
exports.is_NODE = !exports.is_DOM;
//# sourceMappingURL=is.js.map
//# sourceMappingURL=is.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_is === module.exports) {
        // do nothing if
    } else if (__isObj(_src_is) && __isObj(module.exports)) {
        Object.assign(_src_is, module.exports);
    } else {
        _src_is = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_refs;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_refs != null ? _src_refs : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDocument = exports._document = exports._global = exports._Object_defineProperty = exports._Object_getOwnProp = exports._Object_hasOwnProp = exports._Array_indexOf = exports._Array_splice = exports._Array_slice = void 0;
exports._Array_slice = Array.prototype.slice;
exports._Array_splice = Array.prototype.splice;
exports._Array_indexOf = Array.prototype.indexOf;
exports._Object_hasOwnProp = Object.hasOwnProperty;
exports._Object_getOwnProp = Object.getOwnPropertyDescriptor;
exports._Object_defineProperty = Object.defineProperty;
exports._global = typeof global !== 'undefined'
    ? global
    : window;
exports._document = typeof window !== 'undefined' && window.document != null
    ? window.document
    : null;
function setDocument(doc) {
    exports._document = doc;
}
exports.setDocument = setDocument;
//# sourceMappingURL=refs.js.map
//# sourceMappingURL=refs.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_refs === module.exports) {
        // do nothing if
    } else if (__isObj(_src_refs) && __isObj(module.exports)) {
        Object.assign(_src_refs, module.exports);
    } else {
        _src_refs = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_obj;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_obj != null ? _src_obj : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obj_extendDescriptorsDefaults = exports.obj_extendDescriptors = exports.obj_clean = exports.obj_defaults = exports.obj_create = exports._Object_create = exports.obj_toFastProps = exports.obj_extendMany = exports.obj_extendPropertiesDefaults = exports.obj_extendProperties = exports.obj_extendDefaults = exports.obj_extend = exports.obj_defineProperty = exports.obj_hasProperty = exports.obj_setProperty = exports.obj_getProperty = exports.obj_copyProperty = void 0;
var is_1 = _src_is;
var refs_1 = _src_refs;
var getDescriptor = Object.getOwnPropertyDescriptor;
var defineDescriptor = Object.defineProperty;
var obj_copyProperty = getDescriptor == null
    ? function (target, source, key) { return target[key] = source[key]; }
    : function (target, source, key) {
        var descr = getDescriptor(source, key);
        if (descr == null) {
            target[key] = source[key];
            return;
        }
        if (descr.value !== void 0) {
            target[key] = descr.value;
            return;
        }
        defineDescriptor(target, key, descr);
    };
exports.obj_copyProperty = obj_copyProperty;
function obj_getProperty(obj_, path) {
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
exports.obj_getProperty = obj_getProperty;
;
function obj_setProperty(obj_, path, val) {
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
exports.obj_setProperty = obj_setProperty;
;
function obj_hasProperty(obj, path) {
    var x = obj_getProperty(obj, path);
    return x !== void 0;
}
exports.obj_hasProperty = obj_hasProperty;
;
function obj_defineProperty(obj, path, dscr) {
    var x = obj, chain = path.split('.'), imax = chain.length - 1, i = -1, key;
    while (++i < imax) {
        key = chain[i];
        if (x[key] == null)
            x[key] = {};
        x = x[key];
    }
    key = chain[imax];
    if (refs_1._Object_defineProperty) {
        if (dscr.writable === void 0)
            dscr.writable = true;
        if (dscr.configurable === void 0)
            dscr.configurable = true;
        if (dscr.enumerable === void 0)
            dscr.enumerable = true;
        (0, refs_1._Object_defineProperty)(x, key, dscr);
        return;
    }
    x[key] = dscr.value === void 0
        ? dscr.value
        : (dscr.get && dscr.get());
}
exports.obj_defineProperty = obj_defineProperty;
;
function obj_extend(a, b) {
    if (b == null)
        return a || {};
    if (a == null)
        return (0, exports.obj_create)(b);
    for (var key in b) {
        a[key] = b[key];
    }
    return a;
}
exports.obj_extend = obj_extend;
;
function obj_extendDefaults(a, b) {
    if (b == null)
        return a || {};
    if (a == null)
        return (0, exports.obj_create)(b);
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
exports.obj_extendDefaults = obj_extendDefaults;
var extendPropertiesFactory = function (overwriteProps) {
    if (refs_1._Object_getOwnProp == null)
        return overwriteProps ? obj_extend : obj_extendDefaults;
    return function (a, b) {
        if (b == null)
            return a || {};
        if (a == null)
            return (0, exports.obj_create)(b);
        var key, descr, ownDescr;
        for (key in b) {
            descr = (0, refs_1._Object_getOwnProp)(b, key);
            if (descr == null)
                continue;
            if (overwriteProps !== true) {
                ownDescr = (0, refs_1._Object_getOwnProp)(a, key);
                if (ownDescr != null) {
                    continue;
                }
            }
            if (descr.hasOwnProperty('value')) {
                a[key] = descr.value;
                continue;
            }
            (0, refs_1._Object_defineProperty)(a, key, descr);
        }
        return a;
    };
};
exports.obj_extendProperties = extendPropertiesFactory(true);
exports.obj_extendPropertiesDefaults = extendPropertiesFactory(false);
function obj_extendMany(a, arg1, arg2, arg3, arg4, arg5, arg6) {
    var imax = arguments.length, i = 1;
    for (; i < imax; i++) {
        a = obj_extend(a, arguments[i]);
    }
    return a;
}
exports.obj_extendMany = obj_extendMany;
;
function obj_toFastProps(obj) {
    /*jshint -W027*/
    function F() { }
    F.prototype = obj;
    new F();
    return;
    eval(obj);
}
exports.obj_toFastProps = obj_toFastProps;
;
exports._Object_create = Object.create || function (x) {
    var Ctor = function () { };
    Ctor.prototype = x;
    return new Ctor;
};
exports.obj_create = exports._Object_create;
function obj_defaults(target, defaults) {
    for (var key in defaults) {
        if (target[key] == null)
            target[key] = defaults[key];
    }
    return target;
}
exports.obj_defaults = obj_defaults;
/**
 * Remove all NULL properties, optionally also all falsy-ies
 */
function obj_clean(json, opts) {
    var _a;
    if (opts === void 0) { opts = {
        removePrivate: false,
        skipProperties: null,
        removeEmptyArrays: false,
        removeFalsy: false
    }; }
    if (json == null || typeof json !== 'object') {
        return json;
    }
    if ((0, is_1.is_ArrayLike)(json)) {
        var arr = json;
        var i = 0;
        var notNullIndex = -1;
        for (; i < arr.length; i++) {
            var val = arr[i];
            if (val != null) {
                notNullIndex = i;
            }
            obj_clean(val, opts);
        }
        // clean all last nullable values
        if (notNullIndex + 1 < arr.length) {
            arr.splice(notNullIndex + 1);
        }
        return json;
    }
    if ((0, is_1.is_Object)(json)) {
        for (var key in json) {
            if (opts.skipProperties != null && key in opts.skipProperties) {
                delete json[key];
                continue;
            }
            if (opts.ignoreProperties != null && key in opts.ignoreProperties) {
                continue;
            }
            if (opts.removePrivate === true && key[0] === '_') {
                delete json[key];
                continue;
            }
            var val = json[key];
            if ((_a = opts.shouldRemove) === null || _a === void 0 ? void 0 : _a.call(opts, key, val)) {
                delete json[key];
                continue;
            }
            if (isDefault(val, opts)) {
                if (opts.strictProperties != null && key in opts.strictProperties && val != null) {
                    continue;
                }
                delete json[key];
                continue;
            }
            if (opts.deep !== false) {
                obj_clean(val, opts);
            }
            if (opts.removeEmptyArrays && (0, is_1.is_ArrayLike)(val) && val.length === 0) {
                delete json[key];
            }
        }
        return json;
    }
    return json;
}
exports.obj_clean = obj_clean;
function isDefault(x, opts) {
    if (x == null) {
        return true;
    }
    if (opts.removeFalsy && (x === '' || x === false)) {
        return true;
    }
    if (opts.removeEmptyArrays && (0, is_1.is_ArrayLike)(x) && x.length === 0) {
        return true;
    }
    return false;
}
var obj_extendDescriptors;
exports.obj_extendDescriptors = obj_extendDescriptors;
var obj_extendDescriptorsDefaults;
exports.obj_extendDescriptorsDefaults = obj_extendDescriptorsDefaults;
(function () {
    if (getDescriptor == null) {
        exports.obj_extendDescriptors = obj_extendDescriptors = obj_extend;
        exports.obj_extendDescriptorsDefaults = obj_extendDescriptorsDefaults = obj_defaults;
        return;
    }
    exports.obj_extendDescriptors = obj_extendDescriptors = function (target, source) {
        return _extendDescriptors(target, source, false);
    };
    exports.obj_extendDescriptorsDefaults = obj_extendDescriptorsDefaults = function (target, source) {
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
//# sourceMappingURL=obj.js.map
//# sourceMappingURL=obj.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_obj === module.exports) {
        // do nothing if
    } else if (__isObj(_src_obj) && __isObj(module.exports)) {
        Object.assign(_src_obj, module.exports);
    } else {
        _src_obj = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_class;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_class != null ? _src_class : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class_createEx = exports.class_create = void 0;
var obj_1 = _src_obj;
var refs_1 = _src_refs;
;
/**
 * create([...Base], Proto)
 * Base: Function | Object
 * Proto: Object {
 *    constructor: ?Function
 *    ...
 */
exports.class_create = createClassFactory(obj_1.obj_extendDefaults);
// with property accessor functions support
exports.class_createEx = createClassFactory(obj_1.obj_extendPropertiesDefaults);
function createClassFactory(extendDefaultsFn) {
    return function (a, b, c, d, e, f, g, h) {
        var args = refs_1._Array_slice.call(arguments), Proto = args.pop();
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
        var args = refs_1._Array_slice.call(arguments);
        var x = fnA.apply(this, args);
        if (x !== void 0)
            return x;
        return fnB.apply(this, args);
    };
}
//# sourceMappingURL=class.js.map
//# sourceMappingURL=class.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_class === module.exports) {
        // do nothing if
    } else if (__isObj(_src_class) && __isObj(module.exports)) {
        Object.assign(_src_class, module.exports);
    } else {
        _src_class = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_arr;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_arr != null ? _src_arr : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr_distinct = exports.arr_pushMany = exports.arr_contains = exports.arr_indexOf = exports.arr_each = exports.arr_remove = void 0;
var obj_1 = _src_obj;
function arr_remove(array, x) {
    var i = array.indexOf(x);
    if (i === -1)
        return false;
    array.splice(i, 1);
    return true;
}
exports.arr_remove = arr_remove;
;
function arr_each(arr, fn, ctx) {
    arr.forEach(fn, ctx);
}
exports.arr_each = arr_each;
;
function arr_indexOf(arr, x) {
    return arr.indexOf(x);
}
exports.arr_indexOf = arr_indexOf;
;
function arr_contains(arr, x) {
    return arr.indexOf(x) !== -1;
}
exports.arr_contains = arr_contains;
;
function arr_pushMany(arr, arrSource) {
    if (arrSource == null || arr == null || arr === arrSource)
        return;
    var il = arr.length, jl = arrSource.length, j = -1;
    while (++j < jl) {
        arr[il + j] = arrSource[j];
    }
}
exports.arr_pushMany = arr_pushMany;
;
function arr_distinct(arr, compareFn) {
    var out = [];
    var hash = compareFn == null ? (0, obj_1.obj_create)(null) : null;
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
exports.arr_distinct = arr_distinct;
//# sourceMappingURL=arr.js.map
//# sourceMappingURL=arr.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_arr === module.exports) {
        // do nothing if
    } else if (__isObj(_src_arr) && __isObj(module.exports)) {
        Object.assign(_src_arr, module.exports);
    } else {
        _src_arr = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_str;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_str != null ? _src_str : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.str_dedent = exports.str_format = void 0;
var is_1 = _src_is;
function str_format(str_, a, b, c, d) {
    var imax = arguments.length;
    var i = 0;
    while (++i < imax) {
        var x = arguments[i];
        if ((0, is_1.is_Object)(x) && x.toJSON) {
            x = x.toJSON();
        }
        str_ = str_.replace(rgxNum(i - 1), String(x));
    }
    return str_;
}
exports.str_format = str_format;
;
function str_dedent(str) {
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
exports.str_dedent = str_dedent;
;
var rgxNum;
(function () {
    rgxNum = function (num) {
        return cache_[num] || (cache_[num] = new RegExp('\\{' + num + '\\}', 'g'));
    };
    var cache_ = {};
}());
//# sourceMappingURL=str.js.map
//# sourceMappingURL=str.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_str === module.exports) {
        // do nothing if
    } else if (__isObj(_src_str) && __isObj(module.exports)) {
        Object.assign(_src_str, module.exports);
    } else {
        _src_str = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_error;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_error != null ? _src_error : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error_formatCursor = exports.error_cursor = exports.error_formatSource = exports.error_createClass = void 0;
var obj_1 = _src_obj;
var str_1 = _src_str;
function error_createClass(name, Proto, stackSliceFrom) {
    var Ctor = _createCtor(Proto, stackSliceFrom);
    Ctor.prototype = new Error;
    Proto.constructor = Error;
    Proto.name = name;
    (0, obj_1.obj_extend)(Ctor.prototype, Proto);
    return Ctor;
}
exports.error_createClass = error_createClass;
;
function error_formatSource(source, index, filename) {
    var cursor = error_cursor(source, index), lines = cursor[0], lineNum = cursor[1], rowNum = cursor[2], str = '';
    if (filename != null) {
        str += (0, str_1.str_format)(' at {0}:{1}:{2}\n', filename, lineNum, rowNum);
    }
    return str + error_formatCursor(lines, lineNum, rowNum);
}
exports.error_formatSource = error_formatSource;
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
exports.error_cursor = error_cursor;
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
exports.error_formatCursor = error_formatCursor;
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
        (0, obj_1.obj_defineProperty)(this, 'stack', {
            value: _prepairStack(stackFrom || 3)
        });
        (0, obj_1.obj_defineProperty)(this, 'message', {
            value: str_1.str_format.apply(this, arguments)
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
//# sourceMappingURL=error.js.map
//# sourceMappingURL=error.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_error === module.exports) {
        // do nothing if
    } else if (__isObj(_src_error) && __isObj(module.exports)) {
        Object.assign(_src_error, module.exports);
    } else {
        _src_error = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_fn;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_fn != null ? _src_fn : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fn_createByPattern = exports.fn_doNothing = exports.fn_apply = exports.fn_proxy = void 0;
function fn_proxy(fn, ctx) {
    return function () {
        var imax = arguments.length, args = new Array(imax), i = 0;
        for (; i < imax; i++)
            args[i] = arguments[i];
        return fn_apply(fn, ctx, args);
    };
}
exports.fn_proxy = fn_proxy;
;
function fn_apply(fn, ctx, args) {
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
exports.fn_apply = fn_apply;
;
function fn_doNothing() {
    return false;
}
exports.fn_doNothing = fn_doNothing;
;
function fn_createByPattern(definitions, ctx) {
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
exports.fn_createByPattern = fn_createByPattern;
;
//# sourceMappingURL=fn.js.map
//# sourceMappingURL=fn.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_fn === module.exports) {
        // do nothing if
    } else if (__isObj(_src_fn) && __isObj(module.exports)) {
        Object.assign(_src_fn, module.exports);
    } else {
        _src_fn = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_class_Dfr;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_class_Dfr != null ? _src_class_Dfr : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class_Dfr = void 0;
var fn_1 = _src_fn;
var is_1 = _src_is;
var refs_1 = _src_refs;
var class_Dfr = /** @class */ (function () {
    function class_Dfr() {
        this._isAsync = true;
        this._done = null;
        this._fail = null;
        this._always = null;
        this._resolved = null;
        this._rejected = null;
    }
    Object.defineProperty(class_Dfr.prototype, Symbol.toStringTag, {
        get: function () {
            return 'Promise';
        },
        enumerable: false,
        configurable: true
    });
    class_Dfr.prototype.defer = function () {
        this._rejected = null;
        this._resolved = null;
        return this;
    };
    class_Dfr.prototype.isResolved = function () {
        return this._resolved != null;
    };
    class_Dfr.prototype.isRejected = function () {
        return this._rejected != null;
    };
    class_Dfr.prototype.isBusy = function () {
        return this._resolved == null && this._rejected == null;
    };
    class_Dfr.prototype.resolve = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var done = this._done, always = this._always;
        this._resolved = arguments;
        dfr_clearListeners(this);
        arr_callOnce(done, this, arguments);
        arr_callOnce(always, this, [this]);
        return this;
    };
    class_Dfr.prototype.reject = function (error) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var fail = this._fail, always = this._always;
        this._rejected = arguments;
        dfr_clearListeners(this);
        arr_callOnce(fail, this, arguments);
        arr_callOnce(always, this, [this]);
        return this;
    };
    class_Dfr.prototype.then = function (filterSuccess, filterError) {
        var dfr = new class_Dfr();
        var done_ = filterSuccess, fail_ = filterError;
        this
            .done(delegate(dfr, 'resolve', done_))
            .fail(delegate(dfr, 'reject', fail_));
        return dfr;
    };
    class_Dfr.prototype.done = function (callback) {
        if (this._rejected != null) {
            return this;
        }
        return dfr_bind(this, this._resolved, this._done || (this._done = []), callback);
    };
    class_Dfr.prototype.fail = function (callback) {
        if (this._resolved != null) {
            return this;
        }
        return dfr_bind(this, this._rejected, this._fail || (this._fail = []), callback);
    };
    class_Dfr.prototype.always = function (callback) {
        return dfr_bind(this, this._rejected || this._resolved, this._always || (this._always = []), callback);
    };
    class_Dfr.prototype.pipe = function (mix /* ..methods */) {
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
        return this;
    };
    class_Dfr.prototype.pipeCallback = function () {
        var self = this;
        return function (error) {
            if (error != null) {
                self.reject(error);
                return;
            }
            var args = refs_1._Array_slice.call(arguments, 1);
            (0, fn_1.fn_apply)(self.resolve, self, args);
        };
    };
    class_Dfr.prototype.resolveDelegate = function () {
        return (0, fn_1.fn_proxy)(this.resolve, this);
    };
    class_Dfr.prototype.rejectDelegate = function () {
        return (0, fn_1.fn_proxy)(this.reject, this);
    };
    class_Dfr.prototype.catch = function (cb) {
        return this.fail(cb);
    };
    class_Dfr.prototype.finally = function (cb) {
        return this.always(cb);
    };
    class_Dfr.resolve = function (a, b, c) {
        var dfr = new class_Dfr();
        return dfr.resolve.apply(dfr, refs_1._Array_slice.call(arguments));
    };
    class_Dfr.reject = function (error) {
        var dfr = new class_Dfr();
        return dfr.reject(error);
    };
    class_Dfr.run = function (fn, ctx) {
        var dfr = new class_Dfr();
        if (ctx == null)
            ctx = dfr;
        fn.call(ctx, (0, fn_1.fn_proxy)(dfr.resolve, ctx), (0, fn_1.fn_proxy)(dfr.reject, dfr), dfr);
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
            var args = refs_1._Array_slice.call(arguments, 1);
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
    return class_Dfr;
}());
exports.class_Dfr = class_Dfr;
;
// PRIVATE
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
function dfr_bind(dfr, arguments_, listeners, callback) {
    if (callback == null)
        return dfr;
    if (arguments_ != null)
        (0, fn_1.fn_apply)(callback, dfr, arguments_);
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
            (0, fn_1.fn_apply)(fn, ctx, args);
    }
    arr.length = 0;
}
function isDeferred(x) {
    return x != null
        && typeof x === 'object'
        && (0, is_1.is_Function)(x.then);
}
//# sourceMappingURL=Dfr.js.map
//# sourceMappingURL=Dfr.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_class_Dfr === module.exports) {
        // do nothing if
    } else if (__isObj(_src_class_Dfr) && __isObj(module.exports)) {
        Object.assign(_src_class_Dfr, module.exports);
    } else {
        _src_class_Dfr = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_class_Uri;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_class_Uri != null ? _src_class_Uri : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class_Uri = void 0;
var class_Uri = /** @class */ (function () {
    function class_Uri(uri) {
        this.protocol = null;
        this.host = null;
        this.path = null;
        this.file = null;
        this.extension = null;
        this.search = null;
        this.value = null;
        if (uri == null) {
            return this;
        }
        if (util_isUri(uri)) {
            return util_clone(uri);
        }
        uri = normalize_path(uri);
        this.value = uri;
        parse_protocol(this);
        parse_host(this);
        parse_search(this);
        parse_file(this);
        // normilize path - "/some/path"
        this.path = normalize_pathsSlashes(this.value);
        return this;
    }
    class_Uri.prototype.cdUp = function () {
        var path = this.path;
        if (path == null || path === '' || path === '/') {
            this.path = '';
            return this;
        }
        this.path = path.replace(/\/?[^\/]+\/?$/i, '');
        return this;
    };
    /**
     * '/path' - relative to host
     * '../path', 'path','./path' - relative to current path
     */
    class_Uri.prototype.combine = function (mix) {
        var path;
        if (util_isUri(mix)) {
            if (mix.protocol || mix.host) {
                return util_clone(mix);
            }
            path = mix.toString();
        }
        else {
            path = mix;
        }
        if (path == null || path === '') {
            return util_clone(this);
        }
        var uri = util_clone(this);
        uri.value = path;
        parse_search(uri);
        parse_file(uri);
        if (uri.value === '') {
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
            if (uri.path === '') {
                break;
            }
        }
        uri.path = normalize_pathsSlashes(util_combinePathes(uri.path, path));
        return uri;
    };
    class_Uri.prototype.toString = function () {
        var protocol = this.protocol ? this.protocol + '://' : '';
        var path = util_combinePathes(this.host, this.path, this.file) + (this.search || '');
        var str = protocol + path;
        if (!(this.file || this.search) && this.path) {
            str += '/';
        }
        return str;
    };
    class_Uri.prototype.toPathAndQuery = function () {
        return util_combinePathes(this.path, this.file) + (this.search || '');
    };
    /**
     * @return Current Uri Path{String} that is relative to @arg1 Uri
     */
    class_Uri.prototype.toRelativeString = function (uri) {
        if (typeof uri === 'string') {
            uri = new class_Uri(uri);
        }
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
    };
    class_Uri.prototype.toLocalFile = function () {
        var path = util_combinePathes(this.host, this.path, this.file);
        return util_win32Path(path);
    };
    class_Uri.prototype.toLocalDir = function () {
        var path = util_combinePathes(this.host, this.path, '/');
        return util_win32Path(path);
    };
    class_Uri.prototype.toDir = function () {
        var str = this.protocol ? this.protocol + '://' : '';
        return str + util_combinePathes(this.host, this.path, '/');
    };
    class_Uri.prototype.isRelative = function () {
        return !(this.protocol || this.host);
    };
    class_Uri.prototype.getName = function () {
        return this.file.replace('.' + this.extension, '');
    };
    class_Uri.combinePathes = util_combinePathes;
    class_Uri.combine = util_combinePathes;
    return class_Uri;
}());
exports.class_Uri = class_Uri;
;
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
function normalize_path(str) {
    str = str
        .replace(/\\/g, '/')
        .replace(/^\.\//, '');
    var double = /\/{2,}/g;
    do {
        var match = double.exec(str);
        if (match == null) {
            break;
        }
        if (match.index === 0 || str[match.index - 1] === ':') {
            continue;
        }
        str = str.substring(0, match.index) + '/' + str.substring(match.index + match[0].length + 1);
    } while (true);
    return str;
}
function util_win32Path(path) {
    if (rgx_win32Drive.test(path) && path[0] === '/') {
        return path.substring(1);
    }
    return path;
}
function parse_protocol(uri) {
    var match = rgx_protocol.exec(uri.value);
    if (match == null) {
        return;
    }
    uri.protocol = match[1];
    uri.value = uri.value.substring(match[0].length);
}
function parse_host(uri) {
    var match = rgx_win32Drive.exec(uri.value);
    if (match) {
        uri.protocol = 'file';
        uri.host = match[1];
        uri.value = uri.value.substring(uri.host.length);
    }
    if (uri.protocol == null || uri.protocol === 'file') {
        return;
    }
    var pathStartIdx = uri.value.indexOf('/', 2);
    uri.host = pathStartIdx !== -1
        ? uri.value.substring(0, pathStartIdx)
        : uri.value;
    uri.value = uri.value.replace(uri.host, '');
}
function parse_search(uri) {
    var question = uri.value.indexOf('?');
    if (question === -1) {
        return;
    }
    uri.search = uri.value.substring(question);
    uri.value = uri.value.substring(0, question);
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
//# sourceMappingURL=Uri.js.map
//# sourceMappingURL=Uri.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_class_Uri === module.exports) {
        // do nothing if
    } else if (__isObj(_src_class_Uri) && __isObj(module.exports)) {
        Object.assign(_src_class_Uri, module.exports);
    } else {
        _src_class_Uri = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_class_EventEmitter;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_class_EventEmitter != null ? _src_class_EventEmitter : {};
    var module = { exports: exports };

    "use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.class_EventEmitter = void 0;
var fn_1 = _src_fn;
var class_EventEmitter = /** @class */ (function () {
    function class_EventEmitter() {
        this._listeners = {};
    }
    class_EventEmitter.prototype.on = function (event, fn) {
        if (fn != null) {
            (this._listeners[event] || (this._listeners[event] = [])).push(fn);
        }
        return this;
    };
    class_EventEmitter.prototype.once = function (event, fn) {
        if (fn != null) {
            fn._once = true;
            (this._listeners[event] || (this._listeners[event] = [])).push(fn);
        }
        return this;
    };
    /**
     * Returns a function, which when called - triggers the event with the arguments passed to that function
     */
    class_EventEmitter.prototype.pipe = function (event) {
        var _this = this;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.emit.apply(_this, __spreadArray([event], args, false));
        };
    };
    class_EventEmitter.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var fns = this._listeners[event];
        if (fns == null) {
            return this;
        }
        for (var i = 0; i < fns.length; i++) {
            var fn = fns[i];
            (0, fn_1.fn_apply)(fn, this, args);
            if (fn !== fns[i]) {
                // the callback has removed itself
                i--;
                continue;
            }
            if (fn._once === true) {
                fns.splice(i, 1);
                i--;
            }
        }
        return this;
    };
    class_EventEmitter.prototype.trigger = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.emit.apply(this, __spreadArray([event], args, false));
    };
    class_EventEmitter.prototype.off = function (event, fn) {
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
    };
    return class_EventEmitter;
}());
exports.class_EventEmitter = class_EventEmitter;
;
//# sourceMappingURL=EventEmitter.js.map
//# sourceMappingURL=EventEmitter.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_class_EventEmitter === module.exports) {
        // do nothing if
    } else if (__isObj(_src_class_EventEmitter) && __isObj(module.exports)) {
        Object.assign(_src_class_EventEmitter, module.exports);
    } else {
        _src_class_EventEmitter = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_proto;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_proto != null ? _src_proto : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proto_getKeys = exports.class_extendProtoObjects = exports.class_inherit = void 0;
var is_1 = _src_is;
var fn_1 = _src_fn;
var arr_1 = _src_arr;
var obj_1 = _src_obj;
var PROTO = "__proto__";
var _getProtoOf = Object.getPrototypeOf;
var _toString = Object.prototype.toString;
var _isArguments = function (args) {
    return _toString.call(args) === "[object Arguments]";
};
var class_inherit = PROTO in Object.prototype ? inherit : inherit_protoLess;
exports.class_inherit = class_inherit;
function class_extendProtoObjects(proto, _base, _extends) {
    var key, protoValue;
    for (key in proto) {
        protoValue = proto[key];
        if (!(0, is_1.is_rawObject)(protoValue))
            continue;
        if (_base != null) {
            if ((0, is_1.is_rawObject)(_base.prototype[key]))
                (0, obj_1.obj_defaults)(protoValue, _base.prototype[key]);
        }
        if (_extends != null) {
            (0, arr_1.arr_each)(_extends, proto_extendDefaultsDelegate(protoValue, key));
        }
    }
}
exports.class_extendProtoObjects = class_extendProtoObjects;
;
// PRIVATE
function proto_extendDefaultsDelegate(target, key) {
    return function (source) {
        var proto = proto_getProto(source), val = proto[key];
        if ((0, is_1.is_rawObject)(val)) {
            (0, obj_1.obj_defaults)(target, val);
        }
    };
}
function proto_extend(proto, source) {
    if (source == null)
        return;
    if (typeof proto === "function") {
        proto = proto.prototype;
    }
    if (typeof source === "function") {
        source = source.prototype;
    }
    if (_getProtoOf != null) {
        /** ES6 Classes: methods are not enumarable, which is needed in `inherit_` method: so convert prototype to hash */
        source = fillProtoHash(source, (0, obj_1.obj_create)(null));
    }
    for (var key in source) {
        if (key === "constructor") {
            continue;
        }
        var val = source[key];
        if (val != null) {
            proto[key] = val;
        }
    }
}
function proto_getKeys(mix) {
    var keys = null;
    if (_getProtoOf == null) {
        keys = [];
        for (var key in mix) {
            keys.push(key);
        }
        return keys;
    }
    var cursor = mix;
    var cursorEnd = null;
    if (typeof mix === 'function') {
        cursorEnd = Function.prototype;
    }
    else {
        cursorEnd = Object.prototype;
    }
    while (cursor != cursorEnd) {
        var names = Object.getOwnPropertyNames(cursor);
        keys = keys == null
            ? names
            : keys.concat(names);
        cursor = Object.getPrototypeOf(cursor);
    }
    return keys;
}
exports.proto_getKeys = proto_getKeys;
function proto_override(super_, fn) {
    var proxy;
    if (super_) {
        proxy = function (mix) {
            var args = arguments.length === 1 && _isArguments(mix) ? mix : arguments;
            return (0, fn_1.fn_apply)(super_, this, args);
        };
    }
    else {
        proxy = fn_1.fn_doNothing;
    }
    return function () {
        this["super"] = proxy;
        return (0, fn_1.fn_apply)(fn, this, arguments);
    };
}
function inherit(_class, _base, _extends, original) {
    var prototype = original;
    var protoCursor = original;
    prototype.constructor = _class.prototype.constructor;
    if (_extends != null) {
        protoCursor[PROTO] = {};
        (0, arr_1.arr_each)(_extends, function (x) {
            proto_extend(protoCursor[PROTO], x);
        });
        protoCursor = protoCursor[PROTO];
    }
    if (_base != null)
        protoCursor[PROTO] = _base.prototype;
    _class.prototype = prototype;
}
function inherit_Object_create(_class, _base, _extends, original, _overrides, defaults) {
    if (_base != null) {
        _class.prototype = Object.create(_base.prototype);
        (0, obj_1.obj_extendDescriptors)(_class.prototype, original);
    }
    else {
        _class.prototype = Object.create(original);
    }
    _class.prototype.constructor = _class;
    if (_extends != null) {
        (0, arr_1.arr_each)(_extends, function (x) {
            (0, obj_1.obj_defaults)(_class.prototype, x);
        });
    }
    var proto = _class.prototype;
    (0, obj_1.obj_defaults)(proto, defaults);
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
        (0, arr_1.arr_each)(_extends, function (x) {
            delete x.constructor;
            proto_extend(_class, x);
        });
    }
    proto_extend(_class, original);
}
function proto_getProto(mix) {
    return (0, is_1.is_Function)(mix) ? mix.prototype : mix;
}
function fillProtoHash(proto, target) {
    var keys = Object.getOwnPropertyNames(proto);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (target[key] != null) {
            continue;
        }
        target[key] = proto[key];
    }
    var next = Object.getPrototypeOf(proto);
    if (next == null || next === Object.prototype) {
        return target;
    }
    return fillProtoHash(next, target);
}
//# sourceMappingURL=proto.js.map
//# sourceMappingURL=proto.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_proto === module.exports) {
        // do nothing if
    } else if (__isObj(_src_proto) && __isObj(module.exports)) {
        Object.assign(_src_proto, module.exports);
    } else {
        _src_proto = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_mixin;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_mixin != null ? _src_mixin : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mixin = void 0;
var obj_1 = _src_obj;
var is_1 = _src_is;
var fn_1 = _src_fn;
var proto_1 = _src_proto;
function mixin(mix1, mix2, mix3, mix4, mix5) {
    return mix(mix1, mix2, mix3, mix4, mix5);
}
exports.mixin = mixin;
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
                (0, fn_1.fn_apply)(x, this, args);
            }
        }
    };
    if ((0, is_1.is_Function)(_base) === false) {
        _extends.unshift(_base);
        _base = null;
    }
    mixStatics(_class, mixins);
    var proto = {};
    (0, proto_1.class_extendProtoObjects)(proto, _base, _extends);
    (0, proto_1.class_inherit)(_class, _base, _extends, proto);
    return _class;
}
function mixStatics(Ctor, mixins) {
    for (var i = 0; i < mixins.length; i++) {
        var Fn = mixins[i];
        if (typeof Fn !== 'function') {
            continue;
        }
        var keys = (0, proto_1.proto_getKeys)(Fn);
        for (var j = 0; j < keys.length; j++) {
            var key = keys[j];
            if (key in Ctor === false) {
                (0, obj_1.obj_copyProperty)(Ctor, Fn, key);
            }
        }
    }
}
var ensureCallableSingle;
var ensureCallable;
(function () {
    ensureCallable = function (arr) {
        var out = [], i = arr.length;
        while (--i > -1)
            out[i] = ensureCallableSingle(arr[i]);
        return out;
    };
    ensureCallableSingle = function (mix) {
        if ((0, is_1.is_Function)(mix) === false) {
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
        (0, obj_1.obj_extend)(self, x);
    }
}());
//# sourceMappingURL=mixin.js.map
//# sourceMappingURL=mixin.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_mixin === module.exports) {
        // do nothing if
    } else if (__isObj(_src_mixin) && __isObj(module.exports)) {
        Object.assign(_src_mixin, module.exports);
    } else {
        _src_mixin = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_promisify;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_promisify != null ? _src_promisify : {};
    var module = { exports: exports };

    "use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.promisify = void 0;
var promisify;
(function (promisify) {
    function fromEvent(ctx, event, handlerFn, options) {
        return new Promise(function (resolve, reject) {
            var _this = this;
            var cb = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return __awaiter(_this, void 0, void 0, function () {
                    var timeout, completed, ms, r, _a, error_1;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                completed = false;
                                ms = options === null || options === void 0 ? void 0 : options.timeout;
                                if (ms) {
                                    timeout = setTimeout(function () {
                                        if (completed) {
                                            return;
                                        }
                                        completed = true;
                                        reject(new Error("Timeouted, event was not called within ".concat(ms, "ms")));
                                    }, ms);
                                }
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 5, 6, 7]);
                                if (!(handlerFn == null)) return [3 /*break*/, 2];
                                _a = args[0];
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, handlerFn.apply(void 0, args)];
                            case 3:
                                _a = _b.sent();
                                _b.label = 4;
                            case 4:
                                r = _a;
                                if (completed === false) {
                                    completed = true;
                                    resolve(r);
                                }
                                return [3 /*break*/, 7];
                            case 5:
                                error_1 = _b.sent();
                                if (completed === false) {
                                    completed = true;
                                    reject(error_1);
                                }
                                return [3 /*break*/, 7];
                            case 6:
                                clearTimeout(timeout);
                                return [7 /*endfinally*/];
                            case 7: return [2 /*return*/];
                        }
                    });
                });
            };
            ctx.once(event, cb);
        });
    }
    promisify.fromEvent = fromEvent;
})(promisify = exports.promisify || (exports.promisify = {}));
//# sourceMappingURL=promisify.js.map
//# sourceMappingURL=promisify.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_promisify === module.exports) {
        // do nothing if
    } else if (__isObj(_src_promisify) && __isObj(module.exports)) {
        Object.assign(_src_promisify, module.exports);
    } else {
        _src_promisify = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promisify = exports.mixin = exports.str_dedent = exports.str_format = exports.is_DOM = exports.is_NODE = exports.is_Date = exports.is_rawObject = exports.is_notEmptyString = exports.is_Object = exports.is_String = exports.is_ArrayLike = exports.is_Array = exports.is_Function = exports.obj_defaults = exports.obj_clean = exports.obj_defineProperty = exports.obj_create = exports.obj_extendPropertiesDefaults = exports.obj_extendProperties = exports.obj_extendMany = exports.obj_extendDefaults = exports.obj_extend = exports.obj_hasProperty = exports.obj_setProperty = exports.obj_getProperty = exports.fn_doNothing = exports.fn_createByPattern = exports.error_createClass = exports.arr_pushMany = exports.arr_contains = exports.arr_indexOf = exports.arr_each = exports.arr_remove = exports.class_createEx = exports.class_create = exports.class_Uri = exports.class_EventEmitter = exports.class_Dfr = void 0;
var class_1 = _src_class;
Object.defineProperty(exports, "class_create", { enumerable: true, get: function () { return class_1.class_create; } });
Object.defineProperty(exports, "class_createEx", { enumerable: true, get: function () { return class_1.class_createEx; } });
var arr_1 = _src_arr;
Object.defineProperty(exports, "arr_remove", { enumerable: true, get: function () { return arr_1.arr_remove; } });
Object.defineProperty(exports, "arr_each", { enumerable: true, get: function () { return arr_1.arr_each; } });
Object.defineProperty(exports, "arr_indexOf", { enumerable: true, get: function () { return arr_1.arr_indexOf; } });
Object.defineProperty(exports, "arr_contains", { enumerable: true, get: function () { return arr_1.arr_contains; } });
Object.defineProperty(exports, "arr_pushMany", { enumerable: true, get: function () { return arr_1.arr_pushMany; } });
var error_1 = _src_error;
Object.defineProperty(exports, "error_createClass", { enumerable: true, get: function () { return error_1.error_createClass; } });
var fn_1 = _src_fn;
Object.defineProperty(exports, "fn_createByPattern", { enumerable: true, get: function () { return fn_1.fn_createByPattern; } });
Object.defineProperty(exports, "fn_doNothing", { enumerable: true, get: function () { return fn_1.fn_doNothing; } });
var obj_1 = _src_obj;
Object.defineProperty(exports, "obj_getProperty", { enumerable: true, get: function () { return obj_1.obj_getProperty; } });
Object.defineProperty(exports, "obj_setProperty", { enumerable: true, get: function () { return obj_1.obj_setProperty; } });
Object.defineProperty(exports, "obj_hasProperty", { enumerable: true, get: function () { return obj_1.obj_hasProperty; } });
Object.defineProperty(exports, "obj_extend", { enumerable: true, get: function () { return obj_1.obj_extend; } });
Object.defineProperty(exports, "obj_extendDefaults", { enumerable: true, get: function () { return obj_1.obj_extendDefaults; } });
Object.defineProperty(exports, "obj_extendMany", { enumerable: true, get: function () { return obj_1.obj_extendMany; } });
Object.defineProperty(exports, "obj_extendProperties", { enumerable: true, get: function () { return obj_1.obj_extendProperties; } });
Object.defineProperty(exports, "obj_extendPropertiesDefaults", { enumerable: true, get: function () { return obj_1.obj_extendPropertiesDefaults; } });
Object.defineProperty(exports, "obj_create", { enumerable: true, get: function () { return obj_1.obj_create; } });
Object.defineProperty(exports, "obj_defineProperty", { enumerable: true, get: function () { return obj_1.obj_defineProperty; } });
Object.defineProperty(exports, "obj_clean", { enumerable: true, get: function () { return obj_1.obj_clean; } });
Object.defineProperty(exports, "obj_defaults", { enumerable: true, get: function () { return obj_1.obj_defaults; } });
var is_1 = _src_is;
Object.defineProperty(exports, "is_Function", { enumerable: true, get: function () { return is_1.is_Function; } });
Object.defineProperty(exports, "is_Array", { enumerable: true, get: function () { return is_1.is_Array; } });
Object.defineProperty(exports, "is_ArrayLike", { enumerable: true, get: function () { return is_1.is_ArrayLike; } });
Object.defineProperty(exports, "is_String", { enumerable: true, get: function () { return is_1.is_String; } });
Object.defineProperty(exports, "is_Object", { enumerable: true, get: function () { return is_1.is_Object; } });
Object.defineProperty(exports, "is_notEmptyString", { enumerable: true, get: function () { return is_1.is_notEmptyString; } });
Object.defineProperty(exports, "is_rawObject", { enumerable: true, get: function () { return is_1.is_rawObject; } });
Object.defineProperty(exports, "is_Date", { enumerable: true, get: function () { return is_1.is_Date; } });
Object.defineProperty(exports, "is_NODE", { enumerable: true, get: function () { return is_1.is_NODE; } });
Object.defineProperty(exports, "is_DOM", { enumerable: true, get: function () { return is_1.is_DOM; } });
var str_1 = _src_str;
Object.defineProperty(exports, "str_format", { enumerable: true, get: function () { return str_1.str_format; } });
Object.defineProperty(exports, "str_dedent", { enumerable: true, get: function () { return str_1.str_dedent; } });
var Dfr_1 = _src_class_Dfr;
Object.defineProperty(exports, "class_Dfr", { enumerable: true, get: function () { return Dfr_1.class_Dfr; } });
var Uri_1 = _src_class_Uri;
Object.defineProperty(exports, "class_Uri", { enumerable: true, get: function () { return Uri_1.class_Uri; } });
var EventEmitter_1 = _src_class_EventEmitter;
Object.defineProperty(exports, "class_EventEmitter", { enumerable: true, get: function () { return EventEmitter_1.class_EventEmitter; } });
var mixin_1 = _src_mixin;
Object.defineProperty(exports, "mixin", { enumerable: true, get: function () { return mixin_1.mixin; } });
var promisify_1 = _src_promisify;
Object.defineProperty(exports, "promisify", { enumerable: true, get: function () { return promisify_1.promisify; } });
//# sourceMappingURL=export-lib.js.map
//# sourceMappingURL=export-lib.ts.map

}));

// end:source ./UMD.js
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_node_modules_atma_utils_lib_umd_utils === module.exports) {
        // do nothing if
    } else if (__isObj(_node_modules_atma_utils_lib_umd_utils) && __isObj(module.exports)) {
        Object.assign(_node_modules_atma_utils_lib_umd_utils, module.exports);
    } else {
        _node_modules_atma_utils_lib_umd_utils = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_assert_wrapper;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_assert_wrapper != null ? _src_assert_wrapper : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eq_ = void 0;
const vars_1 = _src_vars;
const atma_utils_1 = _node_modules_atma_utils_lib_umd_utils;
const assert = vars_1.global.assert;
(function () {
    if (assert.total != null && assert.reset != null) {
        return;
    }
    (0, atma_utils_1.obj_extend)(assert, {
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

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_assert_wrapper === module.exports) {
        // do nothing if
    } else if (__isObj(_src_assert_wrapper) && __isObj(module.exports)) {
        Object.assign(_src_assert_wrapper, module.exports);
    } else {
        _src_assert_wrapper = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_assert_assert_browser;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_assert_assert_browser != null ? _src_assert_assert_browser : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
_src_assert_wrapper;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_assert_assert_browser === module.exports) {
        // do nothing if
    } else if (__isObj(_src_assert_assert_browser) && __isObj(module.exports)) {
        Object.assign(_src_assert_assert_browser, module.exports);
    } else {
        _src_assert_assert_browser = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_patch_jquery;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_patch_jquery != null ? _src_patch_jquery : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vars_1 = _src_vars;
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

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_patch_jquery === module.exports) {
        // do nothing if
    } else if (__isObj(_src_patch_jquery) && __isObj(module.exports)) {
        Object.assign(_src_patch_jquery, module.exports);
    } else {
        _src_patch_jquery = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_xhr;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_xhr != null ? _src_utils_xhr : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xhr_isBusy = exports.xhr_createListener = void 0;
const atma_utils_1 = _node_modules_atma_utils_lib_umd_utils;
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
const KEY = 'XMLHttpRequestListener__';
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

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_xhr === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_xhr) && __isObj(module.exports)) {
        Object.assign(_src_utils_xhr, module.exports);
    } else {
        _src_utils_xhr = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_transport_jam;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_transport_jam != null ? _src_utils_transport_jam : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transport_isBusy = void 0;
const atma_utils_1 = _node_modules_atma_utils_lib_umd_utils;
const xhr_1 = _src_utils_xhr;
const vars_1 = _src_vars;
function transport_isBusy() {
    if (atma_utils_1.is_NODE) {
        return false;
    }
    if (atma_utils_1.is_DOM) {
        return (0, xhr_1.xhr_isBusy)(vars_1.global) || dom_isReady(vars_1.global) === false;
    }
    return false;
}
exports.transport_isBusy = transport_isBusy;
;
if (atma_utils_1.is_DOM) {
    //= private
    //= Initialize
    (0, xhr_1.xhr_createListener)(vars_1.global);
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

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_transport_jam === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_transport_jam) && __isObj(module.exports)) {
        Object.assign(_src_utils_transport_jam, module.exports);
    } else {
        _src_utils_transport_jam = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_Options;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_Options != null ? _src_Options : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._options = void 0;
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

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_Options === module.exports) {
        // do nothing if
    } else if (__isObj(_src_Options) && __isObj(module.exports)) {
        Object.assign(_src_Options, module.exports);
    } else {
        _src_Options = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_is;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_is != null ? _src_utils_is : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is_Deferred = void 0;
const atma_utils_1 = _node_modules_atma_utils_lib_umd_utils;
function is_Deferred(x) {
    return x != null
        && typeof x === 'object'
        && (0, atma_utils_1.is_Function)(x.then);
}
exports.is_Deferred = is_Deferred;
;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_is === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_is) && __isObj(module.exports)) {
        Object.assign(_src_utils_is, module.exports);
    } else {
        _src_utils_is = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_syntax;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_syntax != null ? _src_utils_syntax : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.it = exports.syntax_Mocha = void 0;
const vars_1 = _src_vars;
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
let suite;
function describe(name, fn) {
    let root = suite;
    root[name] = syntax_Mocha(fn);
    suite = root;
}
function it(name, fn) {
    suite[name] = fn;
}
exports.it = it;
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

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_syntax === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_syntax) && __isObj(module.exports)) {
        Object.assign(_src_utils_syntax, module.exports);
    } else {
        _src_utils_syntax = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_object;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_object != null ? _src_utils_object : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obj_defaults = void 0;
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

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_object === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_object) && __isObj(module.exports)) {
        Object.assign(_src_utils_object, module.exports);
    } else {
        _src_utils_object = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_str;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_str != null ? _src_utils_str : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.color = void 0;
function color(arr, ...values) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
        if (i < values.length) {
            str += values[i];
        }
    }
    let result = str.color;
    return result;
}
exports.color = color;
;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_str === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_str) && __isObj(module.exports)) {
        Object.assign(_src_utils_str, module.exports);
    } else {
        _src_utils_str = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_location;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_location != null ? _src_utils_location : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.location_pushHistory = exports.location_pushSearch = void 0;
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

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_location === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_location) && __isObj(module.exports)) {
        Object.assign(_src_utils_location, module.exports);
    } else {
        _src_utils_location = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_UTest_page;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_UTest_page != null ? _src_UTest_page : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UTestPage = void 0;
const location_1 = _src_utils_location;
const xhr_1 = _src_utils_xhr;
let _iframe;
class UTestPage {
    static request(url, method, headers, data, callback) {
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
            var listener = (0, xhr_1.xhr_createListener)(_win);
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
            (0, location_1.location_pushSearch)(url);
            _doc.open();
            // Mozilla throws NS_ERROR_FAILURE. workaround with querystring only
            //- location_pushHistory(url, _win);
            _doc.write(html);
            _doc.close();
        });
    }
}
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

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_UTest_page === module.exports) {
        // do nothing if
    } else if (__isObj(_src_UTest_page) && __isObj(module.exports)) {
        Object.assign(_src_UTest_page, module.exports);
    } else {
        _src_UTest_page = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_UTest_server;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_UTest_server != null ? _src_UTest_server : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UTestServer = void 0;
const vars_1 = _src_vars;
const atma_utils_1 = _node_modules_atma_utils_lib_umd_utils;
const UTest_page_1 = _src_UTest_page;
class UTestServer {
    static server = {
        render(template, ...args /* [, params, callback] */) {
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
}
exports.UTestServer = UTestServer;
;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_UTest_server === module.exports) {
        // do nothing if
    } else if (__isObj(_src_UTest_server) && __isObj(module.exports)) {
        Object.assign(_src_UTest_server, module.exports);
    } else {
        _src_UTest_server = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_UTest_benchmark;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_UTest_benchmark != null ? _src_UTest_benchmark : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UTestBenchmark = void 0;
const vars_1 = _src_vars;
const str_1 = _src_utils_str;
const UTest_1 = _src_UTest;
let _benchmarkLib;
const TIMEOUT = 20000;
class UTestBenchmark {
    static benchmark(model) {
        return _benchmark(model);
    }
    static benchmarkVersions(model) {
        return _benchmark(model);
    }
}
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
    loadBenchmarkLibrary(model, next) {
        if (typeof require === 'function') {
            _benchmarkLib = require('benchmark');
            next();
            return;
        }
        vars_1.include
            .instance()
            .js(model.$config.benchmarkPath || '/.reference/atma_toolkit/node_modules/benchmark/benchmark.js')
            .done(resp => {
            _benchmarkLib = resp.benchmark || vars_1.global.Benchmark;
            next();
        });
    },
    loadVersions(model, next) {
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
                    throw Error(`Module in 'versions' is not loaded. Version: ${current.version} in ${current.path}`);
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
    configurate(model, next) {
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
            .on('start', () => vars_1.logger.log((0, str_1.color) `Benchmark started 'bold<${name}>'`))
            .on('cycle', (event) => vars_1.logger.log(event.target.toString()))
            .on('teardown', model.$teardown)
            .on('complete', (event) => {
            Array
                .prototype
                .slice
                .call(suite.sort((a, b) => {
                a = a.stats;
                b = b.stats;
                return a.mean + a.moe > b.mean + b.moe ? 1 : -1;
            }))
                .map(x => x.toString())
                .forEach((x, i) => vars_1.logger.log((0, str_1.color) `bold<green<${i + 1}.>> ${x}`));
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
            throw Error(`Version Library is not defined ${version}`);
        }
        var fn = fns[key];
        return function () {
            fn(lib);
        };
    }
}
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_UTest_benchmark === module.exports) {
        // do nothing if
    } else if (__isObj(_src_UTest_benchmark) && __isObj(module.exports)) {
        Object.assign(_src_UTest_benchmark, module.exports);
    } else {
        _src_UTest_benchmark = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_class_Await;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_class_Await != null ? _src_class_Await : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Await = void 0;
const atma_utils_1 = _node_modules_atma_utils_lib_umd_utils;
class Await extends atma_utils_1.class_Dfr {
    _wait = 0;
    _timeout = null;
    _result = null;
    _resolved = [];
    constructor(...args) {
        super();
        var imax = args.length, i = -1, dfr;
        while (++i < imax) {
            dfr = args[i];
            if (dfr != null && typeof dfr.done === 'function')
                await_deferredDelegate(this, null, dfr);
        }
    }
    delegate(name, errorable) {
        return await_createDelegate(this, name, errorable);
    }
    deferred(name) {
        return await_deferredDelegate(this, name, new atma_utils_1.class_Dfr);
    }
    static TIMEOUT = 2000;
}
exports.Await = Await;
;
function await_deferredDelegate(awaitFn, name, dfr) {
    var delegate = await_createDelegate(awaitFn, name, true);
    return dfr
        .done(function (...args) {
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
function await_listener(awaitFn, name, errorable, ...args) {
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
function fn_createDelegate(fn, ...args) {
    return function (...argsInner) {
        let arr = args;
        if (argsInner.length > 0) {
            arr = args.concat(argsInner);
        }
        return fn.apply(null, arr);
    };
}
;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_class_Await === module.exports) {
        // do nothing if
    } else if (__isObj(_src_class_Await) && __isObj(module.exports)) {
        Object.assign(_src_class_Await, module.exports);
    } else {
        _src_class_Await = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_process;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_process != null ? _src_utils_process : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.process_toggle = void 0;
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
        return done(new Error(`Process '${id}' is active`));
    }
    var options = {
        cwd: params.cwd,
        command: params.command,
        detached: params.detached,
        matchReady: toRegexp(params.matchReady),
        silent: params.silent === void 0 ? params.silent : false,
    };
    const shellbee = require('shellbee');
    const shell = process = __process[id] = new shellbee.Shell(options);
    shell
        .promise
        .catch(() => {
        delete __process[id];
    });
    shell
        .on('process_exception', data => done(data.error))
        .on('process_ready', () => done(null, process));
    shell.run();
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

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_process === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_process) && __isObj(module.exports)) {
        Object.assign(_src_utils_process, module.exports);
    } else {
        _src_utils_process = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_UTest_config;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_UTest_config != null ? _src_UTest_config : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UTestConfiguration = exports.configurate = void 0;
const atma_utils_1 = _node_modules_atma_utils_lib_umd_utils;
const Options_1 = _src_Options;
const vars_1 = _src_vars;
const Await_1 = _src_class_Await;
const UTest_1 = _src_UTest;
const process_1 = _src_utils_process;
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
        .fail(error => console.error('<utest:configurate> ', error))
        .always(done);
}
exports.configurate = configurate;
class UTestConfiguration {
    $cfg(key) {
        var cfg = this.suite.$config;
        if (cfg == null || cfg[key] == null)
            return Options_1._options[key];
        return cfg[key];
    }
    configurate(...args) {
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
    }
}
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
            (0, process_1.process_toggle)(params, done);
        }
    }
};
function http_config(...args) {
    args.splice(1, 0, null); // populate later with current configuration
    args.unshift('>server:utest:action');
    UTest_1.UTest.getSocket((socket, config) => {
        args[2] = (UTest_1.UTest.getConfig && UTest_1.UTest.getConfig()) || config;
        socket
            .emit
            .apply(socket, args);
    });
}
function perform(key, args, done) {
    var fn = (0, atma_utils_1.obj_getProperty)(Configurations, key);
    if (typeof fn !== 'function')
        return done();
    fn(args, done);
}
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_UTest_config === module.exports) {
        // do nothing if
    } else if (__isObj(_src_UTest_config) && __isObj(module.exports)) {
        Object.assign(_src_UTest_config, module.exports);
    } else {
        _src_UTest_config = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_classify;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_classify != null ? _src_utils_classify : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FnPrototypeAlias = exports.Classify = void 0;
function Classify(Ctor) {
    const Class = function (...args) {
        return new Ctor(...args);
    };
    Class.prototype = Ctor.prototype;
    forIn(Ctor, key => {
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
    let hash = Object.create(null);
    let cursor = obj;
    do {
        let props = Object.getOwnPropertyNames(cursor);
        for (let i = 0; i < props.length; i++) {
            let key = props[i];
            if (key in hash === false) {
                cb(key);
            }
            hash[key] = null;
        }
    } while (cursor = Object.getPrototypeOf(cursor));
}
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_classify === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_classify) && __isObj(module.exports)) {
        Object.assign(_src_utils_classify, module.exports);
    } else {
        _src_utils_classify = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_color;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_color != null ? _src_utils_color : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
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

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_color === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_color) && __isObj(module.exports)) {
        Object.assign(_src_utils_color, module.exports);
    } else {
        _src_utils_color = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_console;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_console != null ? _src_utils_console : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Console = void 0;
var Console;
(function (Console) {
    function log(...args) {
        console.log(...args);
    }
    Console.log = log;
    function error(...args) {
        console.error(...args);
    }
    Console.error = error;
    function warn(...args) {
        console.warn(...args);
    }
    Console.warn = warn;
    function print(...args) {
        console.print(...args);
    }
    Console.print = print;
})(Console = exports.Console || (exports.Console = {}));
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_console === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_console) && __isObj(module.exports)) {
        Object.assign(_src_utils_console, module.exports);
    } else {
        _src_utils_console = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_utest_query;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_utest_query != null ? _src_utils_utest_query : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UTestQueryUtil = void 0;
var UTestQueryUtil;
(function (UTestQueryUtil) {
    function getQuery() {
        if (typeof process === 'undefined' || process.argv == null) {
            return null;
        }
        let argv = process.argv;
        for (let i = 0; i < argv.length - 1; i++) {
            let key = argv[i];
            if (key === '-q' || key === '--query') {
                let str = argv[i + 1];
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

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_utest_query === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_utest_query) && __isObj(module.exports)) {
        Object.assign(_src_utils_utest_query, module.exports);
    } else {
        _src_utils_utest_query = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_UTestVars;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_UTestVars != null ? _src_UTestVars : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UTestVars = void 0;
exports.UTestVars = {
    tests: [],
    listeners: {},
    index: -1,
    testsDone: null,
    clear() {
        this.tests = [];
        this.listeners = {};
        this.index = -1;
    },
    remove(utest) {
        let i = this.tests.indexOf(utest);
        this.tests.splice(i, 1);
    }
};
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_UTestVars === module.exports) {
        // do nothing if
    } else if (__isObj(_src_UTestVars) && __isObj(module.exports)) {
        Object.assign(_src_UTestVars, module.exports);
    } else {
        _src_UTestVars = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_UTest;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_UTest != null ? _src_UTest : {};
    var module = { exports: exports };

    "use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UTest_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UTest = void 0;
const vars_1 = _src_vars;
const atma_utils_1 = _node_modules_atma_utils_lib_umd_utils;
const transport_jam_1 = _src_utils_transport_jam;
const Options_1 = _src_Options;
const is_1 = _src_utils_is;
const wrapper_1 = _src_assert_wrapper;
const syntax_1 = _src_utils_syntax;
const object_1 = _src_utils_object;
const str_1 = _src_utils_str;
const UTest_server_1 = _src_UTest_server;
const UTest_benchmark_1 = _src_UTest_benchmark;
const UTest_config_1 = _src_UTest_config;
const classify_1 = _src_utils_classify;
const color_1 = _src_utils_color;
const console_1 = _src_utils_console;
const utest_query_1 = _src_utils_utest_query;
const UTestVars_1 = _src_UTestVars;
let RESERVED = [
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
    let test = UTestVars_1.UTestVars.tests[UTestVars_1.UTestVars.index];
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
    let isTimeouted = false;
    let isProcessed = false;
    // in case http requests are busy, take some more time
    let jam = 5;
    let fn = function () {
        clearTimeout(timeout);
        if (isTimeouted || isProcessed)
            return;
        isProcessed = true;
        callback.apply(null, arguments);
    };
    let timeout = wait();
    let future = {
        fn: fn,
        id: timeout,
        timeout: null
    };
    function onTimeout() {
        if ((0, transport_jam_1.transport_isBusy)() && --jam > 0) {
            timeout = future.timeout = wait();
            console_1.Console.log((0, str_1.color) `<transport jam> bold<${jam}> yellow<${name}>`);
            return;
        }
        console_1.Console.error('Async Suite Timeout - ', name);
        isTimeouted = true;
        vars_1.assert.timeouts.push(name);
        callback();
    }
    function wait() {
        let ms = msTimeout || Options_1._options.timeout;
        if (ms > 2 ** 30) {
            return 0;
        }
        return setTimeout(onTimeout, ms);
    }
    return future;
}
function runCase(ctx, fn, done, teardown, key, utest) {
    if (fn != null && typeof fn === 'object') {
        let sub = new UTest(key, fn, ctx);
        sub.run(teardownDelegate(ctx, teardown, done, utest));
        return;
    }
    let args = vars_1._Array_slice.call(ctx.arguments || []), onComplete = teardownDelegate(ctx, teardown, done, utest), asyncData, result;
    try {
        if ((0, atma_utils_1.is_Function)(fn) === false) {
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
        if (tryWait_Deferred(result)) {
            return;
        }
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
        if ((0, is_1.is_Deferred)(dfr) === false) {
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
            const msg = (0, str_1.color) `Test case red<bold<${key}>> rejected`;
            vars_1.logger.log(msg);
            if (error.stack) {
                vars_1.logger.log(error.stack);
            }
            else {
                vars_1.logger.log(error.toString());
            }
            (0, wrapper_1.eq_)(error, null);
            asyncData.fn();
        }
        function onSuccess(...args) {
            if (args.length === 1 && args[0] instanceof UTest) {
                let utest = args[0];
                UTestVars_1.UTestVars.remove(utest);
                utest.run(() => {
                    // Process self
                    onSuccess();
                });
                return;
            }
            (0, wrapper_1.eq_)(result._rejected, null);
            if (args.length !== 0)
                ctx.arguments = args;
            asyncData.fn();
        }
        let supportsCatch = (0, atma_utils_1.is_Function)(result.catch);
        let x = result.then(onSuccess, supportsCatch ? void 0 : onFail);
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
    let str = fn
        .toString()
        .replace(fn.name, '')
        // Name in Source Code can have quotes
        .replace(/^['"]+/, '')
        .trim();
    return /^(async )?(function)?\s*\([\w\s,]*(done|next)/.test(str);
}
let UTestProto = {
    // stores data exposed by the async Case
    arguments: null,
    $run: function (key, done) {
        runCase(this.proto, this.suite[key], done || function () { }, null, key, this);
    }
};
let UTestProtoDelegate = function (instance, suite) {
    let proto = {};
    for (let key in UTestProto) {
        if (typeof UTestProto[key] === 'function') {
            proto[key] = UTestProto[key].bind(instance);
            continue;
        }
        proto[key] = UTestProto[key];
    }
    for (let key in suite) {
        proto[key] = suite[key];
    }
    return proto;
};
let UTest = UTest_1 = class UTest extends (0, atma_utils_1.mixin)(UTest_server_1.UTestServer, UTest_config_1.UTestConfiguration, UTest_benchmark_1.UTestBenchmark) {
    static default = UTest_1;
    static create(mix, $suite, parent) {
        let Ctor = typeof this === 'function' ? this : UTest_1;
        let x = new Ctor(mix, $suite, parent);
        return x;
    }
    name;
    suite;
    proto;
    processed;
    onComplete;
    errors;
    constructor(mix, $suite, parent) {
        super();
        let name = mix;
        let suite = $suite;
        if (typeof mix !== 'string' && suite == null) {
            suite = mix;
            name = 'UTest';
        }
        this._start = this._start.bind(this);
        this._nextCase = this._nextCase.bind(this);
        if (typeof $suite === 'function') {
            suite = (0, syntax_1.syntax_Mocha)($suite);
        }
        if (parent != null) {
            suite.$config = (0, object_1.obj_defaults)(suite.$config, parent.$config, [
                'timeout',
                'errorableCallbacks'
            ]);
        }
        this.name = name;
        this.suite = suite;
        this.processed = [];
        this.proto = UTestProtoDelegate(this, suite);
        // @obsolete properties
        ['before', 'after', 'teardown', 'config']
            .forEach(function (key) {
            if (suite[key] == null)
                return;
            console_1.Console.warn(`<UTest> ${key} property is deprecated. Use: $${key}`);
            suite['$' + key] = suite[key];
            delete suite[key];
        });
        if (parent == null) {
            UTestVars_1.UTestVars.tests.push(this);
        }
        return this;
    }
    run(mix) {
        let callback = null;
        let q = null;
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
    }
    handleQuery(query) {
        if (typeof query === 'string') {
            query = new RegExp(query);
        }
        let q = query || utest_query_1.UTestQueryUtil.getQuery();
        if (q == null) {
            return false;
        }
        const SKIP = ['$config', '$before', '$after', '$teardown'];
        return handleQuery(this.suite);
        /* private */
        function handleQuery(obj) {
            let has = false;
            Object
                .keys(obj)
                .forEach(function (key) {
                if (key[0] === '$' && SKIP.indexOf(key) > -1) {
                    return;
                }
                let val = obj[key];
                let matched = utest_query_1.UTestQueryUtil.matchQuery(key, q);
                if (matched) {
                    has = true;
                    return;
                }
                if ((0, atma_utils_1.is_Object)(val)) {
                    let hasInner = handleQuery(val);
                    if (hasInner) {
                        has = true;
                        return;
                    }
                }
                delete obj[key];
            });
            return has;
        }
    }
    handleBangs() {
        let has = rewriteDeep(this.suite);
        if (has) {
            clearObject(this.suite);
        }
        function rewriteDeep(obj) {
            let has = false;
            Object
                .keys(obj)
                .forEach(function (key) {
                let val = obj[key];
                if (key[0] === '!') {
                    has = true;
                    if ((0, atma_utils_1.is_Object)(val) && hasBang(val) === false) {
                        forceDeep(val);
                    }
                    return;
                }
                if (key[0] !== '!' && (0, atma_utils_1.is_Object)(val) && hasBang(val)) {
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
            let key, val;
            for (key in obj) {
                if (RESERVED.indexOf(key) !== -1)
                    continue;
                if (key.substring(0, 2) === '//')
                    continue;
                val = obj[key];
                delete obj[key];
                obj['!' + key] = val;
                if ((0, atma_utils_1.is_Object)(val)) {
                    forceDeep(val);
                }
            }
        }
        function cleanBangsDeep(obj) {
            let key, val;
            for (key in obj) {
                if (key[0] !== '!')
                    continue;
                val = obj[key];
                delete obj[key];
                obj[key.replace(/^!+/, '')] = val;
                if ((0, atma_utils_1.is_Object)(val)) {
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
                if ((0, atma_utils_1.is_Object)(obj[key]))
                    clearObject(obj[key]);
            });
        }
        function hasBang(obj) {
            return Object.keys(obj).some(key => {
                if (key[0] === '!') {
                    return true;
                }
                let val = obj[key];
                if ((0, atma_utils_1.is_Object)(val)) {
                    return hasBang(val);
                }
                return false;
            });
        }
    }
    handleRanges() {
        let keys = Object.keys(this.suite), start, end;
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
        vars_1.logger.log((0, str_1.color) `Range: from bold<green<${keys[start]}>> to bold<green<${keys[end]}>>`);
        let range = {}, suite = this.suite;
        keys.slice(start, end + 1).forEach(function (key) {
            range[key] = suite[key];
        });
        RESERVED.forEach(function (key) {
            if (suite[key] != null)
                range[key] = suite[key];
        });
        this.suite = range;
    }
    _start() {
        runCase(this.proto, this.suite.$before, this._nextCase, null, null, this);
    }
    _nextCase() {
        if (arguments.length > 0) {
            let index = 0;
            if (this.$cfg('errorableCallbacks') === true) {
                vars_1.assert.equal(arguments[0], null);
                index = 1;
            }
            this.proto.arguments = vars_1._Array_slice.call(arguments, index);
        }
        let breakOnError = this.$cfg('breakOnError');
        if (breakOnError) {
            breakOnError = vars_1.assert.failed !== 0
                || vars_1.assert.errors !== 0
                || vars_1.assert.timeouts.length !== 0;
        }
        for (let key in this.suite) {
            if (breakOnError)
                break;
            if (~this.processed.indexOf(key))
                continue;
            // reserved
            if (RESERVED.indexOf(key) !== -1)
                continue;
            if (key.substring(0, 2) === '//') {
                console_1.Console.warn(key.substring(2), (0, str_1.color) `bold<(skipped)>`);
                this.processed.push(key);
                continue;
            }
            this.processed.push(key);
            let case_ = this.suite[key];
            if (case_ == null)
                continue;
            let message = (0, str_1.color) `   bold<${key}>: `;
            if (typeof case_ === 'object') {
                message = color_1.Color.bg_cyan(message);
            }
            console_1.Console.log('');
            console_1.Console.print(message);
            runCase(this.proto, case_, this._nextCase, this.suite.$teardown, key, this);
            return;
        }
        runCase(this.proto, this.suite.$after, () => {
            UTest_1.trigger('complete', this);
            this.onComplete && this.onComplete();
        }, null, null, this);
    }
    static stats() {
        return {
            suites: UTestVars_1.UTestVars.tests.length
        };
    }
    static clear() {
        UTestVars_1.UTestVars.clear();
    }
    static run(callback) {
        UTestVars_1.UTestVars.index = -1;
        UTestVars_1.UTestVars.testsDone = callback;
        nextUTest();
    }
    static on(event, callback) {
        switch (event) {
            case 'complete':
                if (UTest_1.isBusy() === false) {
                    callback();
                    return;
                }
                break;
        }
        let fns = (UTestVars_1.UTestVars.listeners[event] || (UTestVars_1.UTestVars.listeners[event] = []));
        fns.push(callback);
    }
    static trigger(event, ...args) {
        let fns = UTestVars_1.UTestVars.listeners[event];
        if (fns == null || !fns.length) {
            return;
        }
        for (let i = 0, x, imax = fns.length; i < imax; i++) {
            x = fns[i];
            x.apply(null, args);
        }
    }
    static isBusy() {
        return UTestVars_1.UTestVars.index < UTestVars_1.UTestVars.tests.length;
    }
    static cfg(options) {
        for (let key in options) {
            Options_1._options[key] = options[key];
        }
    }
    static configurate($config, done) {
        (0, UTest_config_1.configurate)($config, done);
    }
    static domtest = (function () {
        if (typeof DomTest !== 'undefined') {
            return DomTest;
        }
        return require('domtest');
    }());
    // Is overriden in browser or node builds
    static getSocket = null;
    static getConfig = null;
};
UTest = UTest_1 = __decorate([
    classify_1.Classify,
    classify_1.FnPrototypeAlias
], UTest);
exports.UTest = UTest;
if (vars_1.global.UTest == null) {
    vars_1.global.UTest = UTest;
}
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_UTest === module.exports) {
        // do nothing if
    } else if (__isObj(_src_UTest) && __isObj(module.exports)) {
        Object.assign(_src_UTest, module.exports);
    } else {
        _src_UTest = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_browser_detect;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_browser_detect != null ? _src_browser_detect : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.browserInfo = void 0;
const vars_1 = _src_vars;
exports.browserInfo = vars_1.global.browserInfo = vars_1.global.browserInfo || detect();
function detect() {
    const info = {};
    if (typeof navigator == 'undefined') {
        return info;
    }
    let ua = navigator.userAgent, _object, _prop1, _prop2;
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

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_browser_detect === module.exports) {
        // do nothing if
    } else if (__isObj(_src_browser_detect) && __isObj(module.exports)) {
        Object.assign(_src_browser_detect, module.exports);
    } else {
        _src_browser_detect = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_browser_notify;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_browser_notify != null ? _src_browser_notify : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notify = void 0;
let _compo;
function notify(state) {
    if (_compo == null) {
        _compo = $('.utest-server-status').compo();
    }
    _compo.scope.status = state;
}
exports.notify = notify;
;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_browser_notify === module.exports) {
        // do nothing if
    } else if (__isObj(_src_browser_notify) && __isObj(module.exports)) {
        Object.assign(_src_browser_notify, module.exports);
    } else {
        _src_browser_notify = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_browser_utils_include;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_browser_utils_include != null ? _src_browser_utils_include : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.include_configurate = exports.include_reset = exports.include_clearCache = exports.include_ready = void 0;
const vars_1 = _src_vars;
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
const include_clearCache = function () {
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
exports.include_clearCache = include_clearCache;
const include_reset = function () {
    if (typeof vars_1.include === 'undefined' || vars_1.include.instance == null) {
        return;
    }
    vars_1.global.include = vars_1.include.instance();
};
exports.include_reset = include_reset;
const include_configurate = function (suite) {
    var cfg = suite.$config && suite.$config.includejs;
    if (cfg == null) {
        return;
    }
    vars_1.include.cfg(cfg);
};
exports.include_configurate = include_configurate;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_browser_utils_include === module.exports) {
        // do nothing if
    } else if (__isObj(_src_browser_utils_include) && __isObj(module.exports)) {
        Object.assign(_src_browser_utils_include, module.exports);
    } else {
        _src_browser_utils_include = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_browser_utils_script;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_browser_utils_script != null ? _src_browser_utils_script : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.script_getResources = exports.script_insertMany = exports.script_insert = void 0;
const atma_utils_1 = _node_modules_atma_utils_lib_umd_utils;
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
    if (!((0, atma_utils_1.is_Array)(bundle) && bundle.length)) {
        callback();
        return;
    }
    for (var i = 0, x, imax = bundle.length; i < imax; i++) {
        x = bundle[i];
        (0, exports.script_insert)({ path: x }, i === imax - 1 ? callback : null);
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

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_browser_utils_script === module.exports) {
        // do nothing if
    } else if (__isObj(_src_browser_utils_script) && __isObj(module.exports)) {
        Object.assign(_src_browser_utils_script, module.exports);
    } else {
        _src_browser_utils_script = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_cfg;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_cfg != null ? _src_utils_cfg : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cfg_runConfigurationScript = void 0;
const vars_1 = _src_vars;
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

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_cfg === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_cfg) && __isObj(module.exports)) {
        Object.assign(_src_utils_cfg, module.exports);
    } else {
        _src_utils_cfg = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_fn;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_fn != null ? _src_utils_fn : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fn_waterfall = void 0;
function fn_waterfall(...fns) {
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

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_fn === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_fn) && __isObj(module.exports)) {
        Object.assign(_src_utils_fn, module.exports);
    } else {
        _src_utils_fn = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_browser_RunnerDom;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_browser_RunnerDom != null ? _src_browser_RunnerDom : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunnerDom = void 0;
const UTestVars_1 = _src_UTestVars;
const UTest_1 = _src_UTest;
const vars_1 = _src_vars;
const atma_utils_1 = _node_modules_atma_utils_lib_umd_utils;
const include_1 = _src_browser_utils_include;
const script_1 = _src_browser_utils_script;
const cfg_1 = _src_utils_cfg;
const fn_1 = _src_utils_fn;
var _configs, _configIndex, _socket, _stats, _onComplete, _runners;
class RunnerDom {
    config;
    scripts;
    onComplete;
    index;
    stats;
    resources;
    static run(configs, socket, callback) {
        _runners = [];
        _socket = socket;
        _configs = (0, atma_utils_1.is_Array)(configs) ? configs : [configs];
        _onComplete = callback;
        _stats = {};
        _configIndex = -1;
        _socket.emit('browser:utest:start', {
            userAgent: window.browserInfo
        });
        vars_1.assert.reset();
        cfg_runNext();
    }
    static getResources() {
        var resources = [];
        for (var i = 0, x, imax = _runners.length; i < imax; i++) {
            x = _runners[i];
            if (x.resources) {
                resources = resources.concat(x.resources);
            }
        }
        return resources;
    }
    static getCurrentConfig() {
        return _configs[_configIndex];
    }
    constructor(config) {
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
    run(callback) {
        this.onComplete = callback;
        this.index = -1;
        this.stats = [];
        UTestVars_1.UTestVars.clear();
        (0, include_1.include_clearCache)();
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
    }
    process() {
        if (++this.index > this.scripts.length - 1) {
            this.resources = (0, script_1.script_getResources)();
            this.onComplete(this);
            return;
        }
        var path = this.scripts[this.index];
        _socket.emit('browser:utest:script', {
            script: path
        });
        (0, include_1.include_reset)();
        UTestVars_1.UTestVars.clear();
        path = '/utest/' + path;
        (0, script_1.script_insert)({ path: path }, this.processSingle);
    }
    processSingle(force) {
        var that = this;
        (0, include_1.include_ready)(function () {
            UTest_1.UTest.run(that.singleComplete);
        });
    }
    singleComplete() {
        this.stats.push({
            url: this.scripts[this.index],
            total: vars_1.assert.total,
            failed: vars_1.assert.failed,
            timeouts: vars_1.assert.timeouts,
            errors: vars_1.assert.errors,
            callbacks: vars_1.assert.callbacks,
        });
        this.process();
    }
}
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
    (0, include_1.include_configurate)(suite);
    (0, fn_1.fn_waterfall)(function (done) {
        (0, cfg_1.cfg_runConfigurationScript)('$after', _configs[_configIndex - 1], done);
    }, function (done) {
        suite_loadEnv(runner, suite, done);
    }, function (done) {
        (0, cfg_1.cfg_runConfigurationScript)('$before', suite, done);
    }, callback);
}
function suite_loadEnv(runner, suite, done) {
    if ((0, atma_utils_1.is_Array)(suite.env) === false) {
        done();
        return;
    }
    if (typeof vars_1.include === 'undefined') {
        (0, script_1.script_insertMany)(suite.env, done);
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

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_browser_RunnerDom === module.exports) {
        // do nothing if
    } else if (__isObj(_src_browser_RunnerDom) && __isObj(module.exports)) {
        Object.assign(_src_browser_RunnerDom, module.exports);
    } else {
        _src_browser_RunnerDom = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_browser_const;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_browser_const != null ? _src_browser_const : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.state_busy = exports.state_ready = void 0;
exports.state_ready = 1;
exports.state_busy = 2;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_browser_const === module.exports) {
        // do nothing if
    } else if (__isObj(_src_browser_const) && __isObj(module.exports)) {
        Object.assign(_src_browser_const, module.exports);
    } else {
        _src_browser_const = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_browser_utest_start;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_browser_utest_start != null ? _src_browser_utest_start : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utest_start = void 0;
const RunnerDom_1 = _src_browser_RunnerDom;
const ActionVars_1 = _src_browser_ActionVars;
const const_1 = _src_browser_const;
const vars_1 = _src_vars;
const detect_1 = _src_browser_detect;
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

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_browser_utest_start === module.exports) {
        // do nothing if
    } else if (__isObj(_src_browser_utest_start) && __isObj(module.exports)) {
        Object.assign(_src_browser_utest_start, module.exports);
    } else {
        _src_browser_utest_start = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_browser_ActionVars;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_browser_ActionVars != null ? _src_browser_ActionVars : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionVars = exports.state_busy = exports.state_ready = void 0;
const vars_1 = _src_vars;
const notify_1 = _src_browser_notify;
const Await_1 = _src_class_Await;
const utest_start_1 = _src_browser_utest_start;
exports.state_ready = 1;
exports.state_busy = 2;
exports.ActionVars = {
    state: exports.state_ready,
    configuration: new Await_1.Await,
    socket: vars_1.global.io.connect(location.protocol + '//' + location.host + '/utest-browser')
        .on('connect', function () {
        (0, notify_1.notify)('connected');
    })
        .on('disconnect', function () {
        (0, notify_1.notify)('disconnected');
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

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_browser_ActionVars === module.exports) {
        // do nothing if
    } else if (__isObj(_src_browser_ActionVars) && __isObj(module.exports)) {
        Object.assign(_src_browser_ActionVars, module.exports);
    } else {
        _src_browser_ActionVars = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_browser_utest_extend;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_browser_utest_extend != null ? _src_browser_utest_extend : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UTest_1 = _src_UTest;
const ActionVars_1 = _src_browser_ActionVars;
const RunnerDom_1 = _src_browser_RunnerDom;
UTest_1.UTest.getSocket = function (callback) {
    callback(ActionVars_1.ActionVars.socket);
};
UTest_1.UTest.getConfig = RunnerDom_1.RunnerDom.getCurrentConfig;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_browser_utest_extend === module.exports) {
        // do nothing if
    } else if (__isObj(_src_browser_utest_extend) && __isObj(module.exports)) {
        Object.assign(_src_browser_utest_extend, module.exports);
    } else {
        _src_browser_utest_extend = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_browser_action;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_browser_action != null ? _src_browser_action : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vars_1 = _src_vars;
_src_browser_utest_extend;
const ActionVars_1 = _src_browser_ActionVars;
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

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_browser_action === module.exports) {
        // do nothing if
    } else if (__isObj(_src_browser_action) && __isObj(module.exports)) {
        Object.assign(_src_browser_action, module.exports);
    } else {
        _src_browser_action = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_browser_utils_logger;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_browser_utils_logger != null ? _src_browser_utils_logger : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vars_1 = _src_vars;
const ActionVars_1 = _src_browser_ActionVars;
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

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_browser_utils_logger === module.exports) {
        // do nothing if
    } else if (__isObj(_src_browser_utils_logger) && __isObj(module.exports)) {
        Object.assign(_src_browser_utils_logger, module.exports);
    } else {
        _src_browser_utils_logger = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js

"use strict";
const vars_1 = _src_vars;
_src_assert_assert_browser;
_src_patch_jquery;
const UTest_1 = _src_UTest;
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
