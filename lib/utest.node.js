
// source ./RootModule.js
(function(){
	
	var _node_modules_shellbee_lib_shellbee = {};
var _src_Options = {};
var _src_UAction = {};
var _src_UTest = {};
var _src_UTestVars = {};
var _src_UTest_benchmark = {};
var _src_UTest_config = {};
var _src_UTest_page = {};
var _src_UTest_server = {};
var _src_assert_assert_node = {};
var _src_assert_wrapper = {};
var _src_class_Await = {};
var _src_libs_node = {};
var _src_node_Runner = {};
var _src_node_RunnerClient = {};
var _src_node_RunnerFork = {};
var _src_node_RunnerNode = {};
var _src_node_Suite = {};
var _src_node_action = {};
var _src_node_node_vars = {};
var _src_node_utils_cfg = {};
var _src_node_utils_io = {};
var _src_node_utils_logger = {};
var _src_node_utils_net = {};
var _src_node_utils_slave = {};
var _src_utils_array = {};
var _src_utils_cfg = {};
var _src_utils_classify = {};
var _src_utils_color = {};
var _src_utils_console = {};
var _src_utils_fn = {};
var _src_utils_is = {};
var _src_utils_location = {};
var _src_utils_object = {};
var _src_utils_process = {};
var _src_utils_rgx = {};
var _src_utils_str = {};
var _src_utils_syntax = {};
var _src_utils_transport_jam = {};
var _src_utils_utest_query = {};
var _src_utils_xhr = {};
var _src_vars = {};

// source ./ModuleSimplified.js
var _src_libs_node;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_libs_node != null ? _src_libs_node : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domtest = exports.assertion = exports.sinon = void 0;
const sinon = global.sinon = require('sinon');
exports.sinon = sinon;
const assertion = global.assert = require('assertion');
exports.assertion = assertion;
const domtest = global.DomTest = require('domtest');
exports.domtest = domtest;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_libs_node === module.exports) {
        // do nothing if
    } else if (__isObj(_src_libs_node) && __isObj(module.exports)) {
        Object.assign(_src_libs_node, module.exports);
    } else {
        _src_libs_node = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


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
const atma_utils_1 = require("atma-utils");
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
var _src_utils_rgx;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_rgx != null ? _src_utils_rgx : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgx_fromString = void 0;
function rgx_fromString(str, flags) {
    return new RegExp(str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), flags);
}
exports.rgx_fromString = rgx_fromString;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_rgx === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_rgx) && __isObj(module.exports)) {
        Object.assign(_src_utils_rgx, module.exports);
    } else {
        _src_utils_rgx = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_assert_assert_node;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_assert_assert_node != null ? _src_assert_assert_node : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
_src_assert_wrapper;
const vars_1 = _src_vars;
const atma_utils_1 = require("atma-utils");
const rgx_1 = _src_utils_rgx;
vars_1.assert.resolveData = function (stackData, base) {
    var data = (0, atma_utils_1.obj_extend)({}, stackData), stack = stackData.stack.split('\n').splice(1), rgx_http = /http:\/\/([^\/]+)\//, rgx_local = (0, rgx_1.rgx_fromString)(base.replace('file:///', '')), rgx_file = /([^\(@]+\:\d+(\:\d+)?)\)?$/;
    if (stack.length === 0) {
        delete data.stack;
        return data;
    }
    stack = stack.map(function (x) {
        return x
            .replace(rgx_http, '')
            .replace(rgx_local, '')
            .replace('at ', '');
    });
    var i = -1, imax = stack.length, file;
    while (++i < imax) {
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
    }
    else {
        console.warn('Filepath could not be parsed from', stack[0].trim());
    }
    data.stack = stack.join('\n');
    return data;
};
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_assert_assert_node === module.exports) {
        // do nothing if
    } else if (__isObj(_src_assert_assert_node) && __isObj(module.exports)) {
        Object.assign(_src_assert_assert_node, module.exports);
    } else {
        _src_assert_assert_node = module.exports;
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
const atma_utils_1 = require("atma-utils");
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
const atma_utils_1 = require("atma-utils");
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
const atma_utils_1 = require("atma-utils");
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
const atma_utils_1 = require("atma-utils");
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
const atma_utils_1 = require("atma-utils");
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
var _node_modules_shellbee_lib_shellbee;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _node_modules_shellbee_lib_shellbee != null ? _node_modules_shellbee_lib_shellbee : {};
    var module = { exports: exports };

    
// source ./RootModule.js
(function(){
	
	var _src_CommunicationChannel = {};
var _src_Shell = {};
var _src_ValueExtractor = {};
var _src_ps_Net = {};
var _src_ps_PsList = {};
var _src_util_ShellErrorExitsHandler = {};
var _src_util_ShellParamsUtil = {};
var _src_util_ShellStalledOutputHandler = {};
var _src_util_ShellWrapperUtil = {};
var _src_util_command = {};
var _src_util_events = {};
var _src_util_path = {};
var _src_util_restartSelf = {};
var _src_util_serialize = {};

// source ./ModuleSimplified.js
var _src_util_path;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_util_path != null ? _src_util_path : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.path_ensure = void 0;
var atma_utils_1 = require("atma-utils");
function path_ensure(cwd, base) {
    if (cwd[0] !== '/' && new atma_utils_1.class_Uri(cwd).isRelative()) {
        var x = require('path').normalize(atma_utils_1.class_Uri.combine(base, cwd));
        return x;
    }
    return cwd;
}
exports.path_ensure = path_ensure;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_util_path === module.exports) {
        // do nothing if
    } else if (__isObj(_src_util_path) && __isObj(module.exports)) {
        Object.assign(_src_util_path, module.exports);
    } else {
        _src_util_path = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_ShellWrapperUtil;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_util_ShellWrapperUtil != null ? _src_util_ShellWrapperUtil : {};
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
exports.ShellWrapperUtil = void 0;
var COMMAND_PLACEHOLDER = '%COMMAND%';
var ShellWrapperUtil;
(function (ShellWrapperUtil) {
    function prefix(args, config) {
        if (!(config === null || config === void 0 ? void 0 : config.shell)) {
            return args;
        }
        if (Array.isArray(config.shell) === false) {
            throw new Error("We can prefix only array of strings(argumnets)");
            return;
        }
        var _a = config.shell, exec = _a[0], rest = _a.slice(1);
        return __spreadArray(__spreadArray([exec], rest, true), args, true);
    }
    ShellWrapperUtil.prefix = prefix;
    function wrap(command, config) {
        if (!(config === null || config === void 0 ? void 0 : config.shell)) {
            return command;
        }
        if (typeof config.shell !== 'string') {
            throw new Error("We can wrap only as command template");
            return;
        }
        if (command.includes('"') === false) {
            command = "\"".concat(command, "\"");
        }
        else if (command.includes("'") === false) {
            command = "'".concat(command, "'");
        }
        else {
            throw new Error("Command can't be quoted, as both already present");
        }
        return config.shell.replace(COMMAND_PLACEHOLDER, command);
    }
    ShellWrapperUtil.wrap = wrap;
    // [cmd, /c, ...command]
    function isPrefix(shell) {
        return shell != null && Array.isArray(shell);
    }
    ShellWrapperUtil.isPrefix = isPrefix;
    // bash.exe -c %COMMAND%
    function isWrapper(shell) {
        return shell != null && typeof shell === 'string' && shell.includes(COMMAND_PLACEHOLDER);
    }
    ShellWrapperUtil.isWrapper = isWrapper;
})(ShellWrapperUtil = exports.ShellWrapperUtil || (exports.ShellWrapperUtil = {}));
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_util_ShellWrapperUtil === module.exports) {
        // do nothing if
    } else if (__isObj(_src_util_ShellWrapperUtil) && __isObj(module.exports)) {
        Object.assign(_src_util_ShellWrapperUtil, module.exports);
    } else {
        _src_util_ShellWrapperUtil = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_command;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_util_command != null ? _src_util_command : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command_parseAll = void 0;
var path_1 = _src_util_path;
var ShellWrapperUtil_1 = _src_util_ShellWrapperUtil;
function command_parseAll(commands, params) {
    var _a;
    var cwdAll = (_a = params.cwd) !== null && _a !== void 0 ? _a : process.cwd();
    cwdAll = (0, path_1.path_ensure)(cwdAll, process.cwd());
    return commands.map(function (command) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var opts = typeof command === 'string' ? {
            exec: command
        } : command;
        if (opts.cwd) {
            opts.cwd = (0, path_1.path_ensure)(opts.cwd, cwdAll !== null && cwdAll !== void 0 ? cwdAll : process.cwd());
        }
        var exec = opts.exec;
        if (exec == null || exec === '') {
            console.warn('Command Object is not valid. Should be at least {command: string}');
            return null;
        }
        var args = command_parse(exec, params);
        return {
            exec: args.shift(),
            args: args,
            cwd: (_b = (_a = opts.cwd) !== null && _a !== void 0 ? _a : cwdAll) !== null && _b !== void 0 ? _b : process.cwd(),
            //stdio: 'pipe',
            detached: (_d = (_c = opts.detached) !== null && _c !== void 0 ? _c : params.detached) !== null && _d !== void 0 ? _d : false,
            command: exec,
            matchReady: (_e = opts.matchReady) !== null && _e !== void 0 ? _e : params.matchReady,
            extract: opts.extract,
            fork: (_g = (_f = opts.fork) !== null && _f !== void 0 ? _f : params.fork) !== null && _g !== void 0 ? _g : false,
            ipc: (_j = (_h = opts.ipc) !== null && _h !== void 0 ? _h : params.ipc) !== null && _j !== void 0 ? _j : false,
        };
    }).filter(function (x) { return x != null; });
}
exports.command_parseAll = command_parseAll;
function command_parse(command, params) {
    if (ShellWrapperUtil_1.ShellWrapperUtil.isWrapper(params.shell)) {
        command = ShellWrapperUtil_1.ShellWrapperUtil.wrap(command, params);
    }
    var parts = command.trim().split(/\s+/);
    var imax = parts.length;
    var i = -1;
    while (++i < imax) {
        var arg = parts[i];
        if (arg.length === 0) {
            continue;
        }
        var c = arg[0];
        if (c !== '"' && c !== "'") {
            continue;
        }
        var start = i;
        for (; i < imax; i++) {
            arg = parts[i];
            if (arg[arg.length - 1] === c) {
                var str = parts
                    .splice(start, i - start + 1)
                    .join(' ')
                    .slice(1, -1);
                parts.splice(start, 0, str);
                imax = parts.length;
                i--;
                break;
            }
        }
    }
    // On windows normalize executable command path to backward slashes
    if (global.process.platform === 'win32') {
        parts[0] = parts[0].replace(/\//g, '\\');
    }
    if (ShellWrapperUtil_1.ShellWrapperUtil.isPrefix(params.shell)) {
        parts = ShellWrapperUtil_1.ShellWrapperUtil.prefix(parts, params);
    }
    return parts;
}
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_util_command === module.exports) {
        // do nothing if
    } else if (__isObj(_src_util_command) && __isObj(module.exports)) {
        Object.assign(_src_util_command, module.exports);
    } else {
        _src_util_command = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_ValueExtractor;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_ValueExtractor != null ? _src_ValueExtractor : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueExtractor = void 0;
var atma_utils_1 = require("atma-utils");
var ValueExtractor = /** @class */ (function () {
    function ValueExtractor(target, extractors) {
        this.target = target;
        this.extractors = extractors;
        this.string = '';
        this.string = '';
    }
    ValueExtractor.prototype.write = function (buffer) {
        this.string += buffer.toString();
    };
    ValueExtractor.prototype.complete = function () {
        for (var key in this.extractors) {
            this.target[key] = (0, atma_utils_1.is_Function)(this.extractors[key])
                ? this.extractors[key](this.string)
                : null;
        }
    };
    ValueExtractor.extract = function (str, mix) {
        if (typeof mix === 'function') {
            return mix(str);
        }
    };
    ValueExtractor.interpolateAny = function (mix, values, options) {
        if (mix == null || (options === null || options === void 0 ? void 0 : options.interpolate) === false) {
            return mix;
        }
        if (typeof mix === 'string') {
            return ValueExtractor.interpolateStr(mix, values);
        }
        if (typeof mix.map === 'function') {
            // isArrayLike
            return mix.map(function (str) {
                return ValueExtractor.interpolateAny(str, values, options);
            });
        }
        return mix;
    };
    ValueExtractor.interpolateStr = function (str, values) {
        return str.replace(/\{\{(\w+)\}\}/g, function (full, prop) {
            var val = values[prop];
            if (val == null) {
                console.warn('Extracted property expected: ', prop, values);
                return '';
            }
            return val;
        });
    };
    return ValueExtractor;
}());
exports.ValueExtractor = ValueExtractor;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_ValueExtractor === module.exports) {
        // do nothing if
    } else if (__isObj(_src_ValueExtractor) && __isObj(module.exports)) {
        Object.assign(_src_ValueExtractor, module.exports);
    } else {
        _src_ValueExtractor = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_serialize;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_util_serialize != null ? _src_util_serialize : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serialize_error = void 0;
function serialize_error(err) {
    var _a;
    return {
        message: (_a = err.message) !== null && _a !== void 0 ? _a : String(err),
        stack: err.stack
    };
}
exports.serialize_error = serialize_error;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_util_serialize === module.exports) {
        // do nothing if
    } else if (__isObj(_src_util_serialize) && __isObj(module.exports)) {
        Object.assign(_src_util_serialize, module.exports);
    } else {
        _src_util_serialize = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_CommunicationChannel;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_CommunicationChannel != null ? _src_CommunicationChannel : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicationChannel = void 0;
var atma_utils_1 = require("atma-utils");
var serialize_1 = _src_util_serialize;
var CommunicationChannel = /** @class */ (function () {
    function CommunicationChannel(child, timeoutMs) {
        var _this = this;
        this.child = child;
        this.timeoutMs = timeoutMs;
        this.awaiters = Object.create(null);
        child.on('message', function (resp) {
            if (resp.id == null || resp.id in _this.awaiters === false) {
                return;
            }
            var awaiter = _this.awaiters[resp.id];
            delete _this.awaiters[resp.id];
            if (resp.error) {
                awaiter.promise.reject(resp.error);
                return;
            }
            awaiter.promise.resolve(resp.data);
        });
    }
    CommunicationChannel.ipc = function (handlers) {
        process.on('message', function (message) {
            var id = message.id, method = message.method, args = message.args;
            var handler = (0, atma_utils_1.obj_getProperty)(handlers, method);
            if (typeof handler !== 'function') {
                process.send({
                    id: id,
                    error: (0, serialize_1.serialize_error)(new Error("".concat(method, " not defined")))
                });
                return;
            }
            try {
                var result = handler.apply(null, args);
                if (result == null) {
                    process.send({
                        id: id,
                        data: null
                    });
                    return;
                }
                if (typeof result.then === 'function') {
                    result.then(function (data) {
                        process.send({
                            id: id,
                            data: data
                        });
                    }, function (error) {
                        process.send({
                            id: id,
                            error: (0, serialize_1.serialize_error)(error),
                        });
                    });
                    return;
                }
                process.send({
                    id: id,
                    data: result
                });
            }
            catch (error) {
                process.send({
                    id: id,
                    error: (0, serialize_1.serialize_error)(error),
                });
                return;
            }
        });
        setTimeout(function () { return console.log('IPC Listening'); }, 10);
    };
    CommunicationChannel.prototype.call = function (method) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var promise = new atma_utils_1.class_Dfr;
        var id = (Math.round(Math.random() * Math.pow(10, 10))) + '' + Date.now();
        this.awaiters[id] = {
            timestamp: Date.now(),
            promise: promise
        };
        this.child.send({
            id: id,
            method: method,
            args: args
        });
        if (this.timeoutMs) {
            setTimeout(function () { return _this.checkTimeout(); }, this.timeoutMs);
        }
        return promise;
    };
    CommunicationChannel.prototype.checkTimeout = function () {
        var _this = this;
        var now = Date.now();
        var keys = [];
        for (var key in this.awaiters) {
            var bin = this.awaiters[key];
            var ms = now - bin.timestamp;
            if (ms >= this.timeoutMs) {
                try {
                    bin.promise.reject(new Error('Timeouted'));
                }
                catch (error) { }
                keys.push(key);
            }
        }
        keys.forEach(function (key) { return delete _this.awaiters[key]; });
    };
    CommunicationChannel.prototype.onError = function (error) {
        var obj = Object.create(this.awaiters);
        this.awaiters = {};
        for (var key in obj) {
            var bin = obj[key];
            try {
                bin.promise.reject(error);
            }
            catch (error) { }
        }
    };
    CommunicationChannel.prototype.onStdError = function (str) {
        this.onError(new Error(str));
    };
    return CommunicationChannel;
}());
exports.CommunicationChannel = CommunicationChannel;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_CommunicationChannel === module.exports) {
        // do nothing if
    } else if (__isObj(_src_CommunicationChannel) && __isObj(module.exports)) {
        Object.assign(_src_CommunicationChannel, module.exports);
    } else {
        _src_CommunicationChannel = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_events;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_util_events != null ? _src_util_events : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.events_someOnce = void 0;
function events_someOnce(emitter, events) {
    var listeners = {};
    for (var event in events) {
        emitter.on(event, delegate(emitter, listeners, event, events[event]));
    }
}
exports.events_someOnce = events_someOnce;
function delegate(emitter, listeners, event, cb) {
    function fn() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var event_1 in listeners) {
            emitter.off(event_1, listeners[event_1]);
        }
        cb === null || cb === void 0 ? void 0 : cb.apply(void 0, args);
    }
    listeners[event] = fn;
    return fn;
}
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_util_events === module.exports) {
        // do nothing if
    } else if (__isObj(_src_util_events) && __isObj(module.exports)) {
        Object.assign(_src_util_events, module.exports);
    } else {
        _src_util_events = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_ShellParamsUtil;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_util_ShellParamsUtil != null ? _src_util_ShellParamsUtil : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellParamsUtil = void 0;
var ShellParamsUtil;
(function (ShellParamsUtil) {
    function normalize(params) {
        var _a, _b;
        if (params.shell == null && !params.fork) {
            params.shell = DEFAULT.shell;
        }
        if (params.command != null) {
            params.commands = [params.command];
        }
        if (params.commands == null) {
            throw new Error("shellbee: Command(s) are not defined");
        }
        (_a = params.parallel) !== null && _a !== void 0 ? _a : (params.parallel = false);
        (_b = params.restartOnErrorExit) !== null && _b !== void 0 ? _b : (params.restartOnErrorExit = false);
        return params;
    }
    ShellParamsUtil.normalize = normalize;
})(ShellParamsUtil = exports.ShellParamsUtil || (exports.ShellParamsUtil = {}));
var DEFAULT = {
    shell: global.process.platform === 'win32'
        ? ['cmd.exe', '/C']
        : null
};
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_util_ShellParamsUtil === module.exports) {
        // do nothing if
    } else if (__isObj(_src_util_ShellParamsUtil) && __isObj(module.exports)) {
        Object.assign(_src_util_ShellParamsUtil, module.exports);
    } else {
        _src_util_ShellParamsUtil = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_ShellErrorExitsHandler;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_util_ShellErrorExitsHandler != null ? _src_util_ShellErrorExitsHandler : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellErrorExitsHandler = void 0;
var ShellErrorExitsHandler = /** @class */ (function () {
    function ShellErrorExitsHandler(params) {
        var _a, _b, _c;
        this._active = false;
        this.options = {
            delayMs: 200,
            maxRestartCount: 10,
            maxRestartTimespanMs: 30 * 1000,
        };
        this._params = params;
        this._errors = [];
        this._active = params.restartOnErrorExit != null && params.restartOnErrorExit !== false;
        if (typeof params.restartOnErrorExit !== 'boolean') {
            var opts = params.restartOnErrorExit;
            this.options.delayMs = (_a = opts.delayMs) !== null && _a !== void 0 ? _a : this.options.delayMs;
            this.options.maxRestartCount = (_b = opts.maxRestartCount) !== null && _b !== void 0 ? _b : this.options.maxRestartCount;
            this.options.maxRestartTimespanMs = (_c = opts.maxRestartTimespanMs) !== null && _c !== void 0 ? _c : this.options.maxRestartTimespanMs;
        }
    }
    ShellErrorExitsHandler.prototype.delay = function (cb) {
        this._errors.push({ time: Date.now() });
        setTimeout(function () { return cb(); }, this.options.delayMs);
    };
    ShellErrorExitsHandler.prototype.isActive = function () {
        if (this._active !== true) {
            return false;
        }
        var fromTimePoint = Date.now() - this.options.maxRestartTimespanMs;
        var errors = this._errors.filter(function (x) { return x.time > fromTimePoint; });
        if (errors.length < this.options.maxRestartCount) {
            return true;
        }
        return false;
    };
    return ShellErrorExitsHandler;
}());
exports.ShellErrorExitsHandler = ShellErrorExitsHandler;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_util_ShellErrorExitsHandler === module.exports) {
        // do nothing if
    } else if (__isObj(_src_util_ShellErrorExitsHandler) && __isObj(module.exports)) {
        Object.assign(_src_util_ShellErrorExitsHandler, module.exports);
    } else {
        _src_util_ShellErrorExitsHandler = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_ShellStalledOutputHandler;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_util_ShellStalledOutputHandler != null ? _src_util_ShellStalledOutputHandler : {};
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
exports.ShellStalledOutputHandler = void 0;
var ShellStalledOutputHandler = /** @class */ (function () {
    function ShellStalledOutputHandler(params, shell) {
        this.params = params;
        this.shell = shell;
    }
    ShellStalledOutputHandler.prototype.init = function () {
        var _this = this;
        var _a;
        var _b = this, shell = _b.shell, params = _b.params;
        this._ms = (_a = params.restartOnStalledOutput) === null || _a === void 0 ? void 0 : _a.emptyOutputInterval;
        if (typeof this._ms !== 'number' || this._ms === 0) {
            return;
        }
        shell
            .on('process_start', function (data) { return _this.onProcessStarted(data); })
            .on('process_exit', function (data) { return _this.onProcessExit(data); })
            .on('process_stderr', function (data) { return _this.onProcessStd('stderr', data); })
            .on('process_stdout', function (data) { return _this.onProcessStd('stdout', data); });
    };
    ShellStalledOutputHandler.prototype.onProcessStarted = function (data) {
        this._lastOutput = Date.now();
        this.stop();
        this.defer(this._ms);
    };
    ShellStalledOutputHandler.prototype.onProcessExit = function (data) {
        this.stop();
    };
    ShellStalledOutputHandler.prototype.onProcessStd = function (output, data) {
        this._lastOutput = Date.now();
    };
    ShellStalledOutputHandler.prototype.stop = function () {
        clearTimeout(this._timeout);
    };
    ShellStalledOutputHandler.prototype.defer = function (ms) {
        var _this = this;
        this._timeout = setTimeout(function () { return _this.onTimer(); }, ms);
    };
    ShellStalledOutputHandler.prototype.onTimer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ms;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ms = Date.now() - this._lastOutput;
                        if (!(ms >= this._ms)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.restart()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        // otherwise check again after (TIMEOUT_MS - LAST_OUTPUT_MS)
                        this.defer(this._ms - ms);
                        return [2 /*return*/];
                }
            });
        });
    };
    ShellStalledOutputHandler.prototype.restart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Restarting the process, as there was not output for ".concat(this._ms, "ms"));
                        return [4 /*yield*/, this.shell.restart()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ShellStalledOutputHandler;
}());
exports.ShellStalledOutputHandler = ShellStalledOutputHandler;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_util_ShellStalledOutputHandler === module.exports) {
        // do nothing if
    } else if (__isObj(_src_util_ShellStalledOutputHandler) && __isObj(module.exports)) {
        Object.assign(_src_util_ShellStalledOutputHandler, module.exports);
    } else {
        _src_util_ShellStalledOutputHandler = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_Shell;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_Shell != null ? _src_Shell : {};
    var module = { exports: exports };

    "use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.ProcessResult = exports.Shell = void 0;
var atma_utils_1 = require("atma-utils");
var atma_io_1 = require("atma-io");
var child_process = require("child_process");
var command_1 = _src_util_command;
var ValueExtractor_1 = _src_ValueExtractor;
var CommunicationChannel_1 = _src_CommunicationChannel;
var events_1 = _src_util_events;
var treeKill = require("tree-kill");
var ShellParamsUtil_1 = _src_util_ShellParamsUtil;
var ShellErrorExitsHandler_1 = _src_util_ShellErrorExitsHandler;
var ShellStalledOutputHandler_1 = _src_util_ShellStalledOutputHandler;
var Shell = /** @class */ (function (_super) {
    __extends(Shell, _super);
    function Shell(params) {
        var _this = _super.call(this) || this;
        _this.children = [];
        _this.errors = [];
        _this.lastCode = 0;
        _this.results = [];
        _this.extracted = {};
        _this.state = ShellState.Initial;
        _this.promise = new atma_utils_1.class_Dfr();
        _this.std = [];
        _this.stderr = [];
        _this.stdout = [];
        _this.isBusy = false;
        _this.isReady = false;
        _this.params = ShellParamsUtil_1.ShellParamsUtil.normalize(params);
        _this.errorsHandler = new ShellErrorExitsHandler_1.ShellErrorExitsHandler(_this.params);
        _this.stalledOutputHandler = new ShellStalledOutputHandler_1.ShellStalledOutputHandler(_this.params, _this);
        _this.stalledOutputHandler.init();
        _this.commands = (0, command_1.command_parseAll)(params.commands, params);
        _this.commandsQueue = _this.commands.slice();
        _this.on('process_start', function () {
            _this.state = ShellState.Started;
        });
        return _this;
    }
    Shell.run = function (mix) {
        var params;
        if (typeof mix === 'string') {
            params = { command: mix };
        }
        else if (Array.isArray(mix)) {
            params = { commands: mix };
        }
        else {
            params = mix;
        }
        return new Shell(params).run();
    };
    /**
     * "Run" starts the command
     * @returns Promise, which is resolved after the executables are completed.
     */
    Shell.prototype.run = function () {
        if (this.isBusy === false) {
            this.next();
            return this.promise;
        }
        return this.promise;
    };
    Shell.factory = function (config) {
        return {
            run: function (mix) {
                var params;
                if (typeof mix === 'string') {
                    params = { command: mix };
                }
                else if (Array.isArray(mix)) {
                    params = { commands: mix };
                }
                else {
                    params = mix;
                }
                return Shell.run(__assign(__assign({}, config), params));
            }
        };
    };
    Shell.prototype.onStart = function (cb) {
        return this.on('process_start', cb);
    };
    Shell.prototype.onStdout = function (cb) {
        return this.on('process_stdout', cb);
    };
    Shell.prototype.onStderr = function (cb) {
        return this.on('process_stderr', cb);
    };
    Shell.prototype.onExit = function (cb) {
        return this.on('process_exit', cb);
    };
    /** When rgxReady is specified the event will be called */
    Shell.prototype.onReady = function (cb) {
        var _a, _b, _c, _d, _e, _f;
        var isAlreadyCompleted = this.isBusy === false && this.lastCode != null;
        var isReady = this.isReady;
        if (isReady || isAlreadyCompleted) {
            cb({ command: (_a = this.currentOptions) === null || _a === void 0 ? void 0 : _a.command });
            return;
        }
        if (!((_b = this.currentOptions) === null || _b === void 0 ? void 0 : _b.matchReady) && this.commandsQueue.some(function (x) { return x.matchReady; }) === false) {
            console.error('Ready Matcher Regex is not defined', (_d = (_c = this.currentOptions) === null || _c === void 0 ? void 0 : _c.command) !== null && _d !== void 0 ? _d : (_f = (_e = this.commands) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.command);
        }
        return this.on('process_ready', cb);
    };
    Shell.prototype.onReadyAsync = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.onReady(resolve);
        });
    };
    Shell.prototype.onComplete = function (cb) {
        var _this = this;
        this.promise.always(function () { return cb(_this); });
        return this;
    };
    Shell.prototype.onCompleteAsync = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.onComplete(resolve);
        });
    };
    Shell.prototype.kill = function (mix) {
        var _this = this;
        var _a, _b, _c;
        var signal = 'SIGINT';
        var commandIdx = 0;
        var terminateAfterMs = null;
        if (mix != null) {
            signal = (_a = (typeof mix === 'object' ? mix.signal : mix)) !== null && _a !== void 0 ? _a : signal;
            if (typeof mix === 'object') {
                commandIdx = (_b = mix.commandIdx) !== null && _b !== void 0 ? _b : commandIdx;
                terminateAfterMs = (_c = mix.terminateAfter) !== null && _c !== void 0 ? _c : terminateAfterMs;
            }
        }
        return new Promise(function (resolve) {
            var isCompleted = _this.isBusy === false && _this.lastCode != null;
            if (isCompleted) {
                return resolve(null);
            }
            var options = _this.commands[commandIdx];
            var child = _this.children.find(function (x) { return x.options === options; });
            if (child == null) {
                return resolve(null);
            }
            var i = _this.children.indexOf(child);
            _this.children.splice(i, 1);
            var timeout;
            child.process.kill(signal);
            _this.once('process_exit', function () {
                if (timeout != null) {
                    clearTimeout(timeout);
                }
                resolve(null);
            });
            if (terminateAfterMs != null) {
                timeout = setTimeout(function () {
                    treeKill(child.process.pid);
                }, terminateAfterMs);
            }
        });
    };
    /** Uses tree-kill to terminate the tree */
    Shell.prototype.terminate = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var child = _this.children.pop();
            if (child == null) {
                return resolve(null);
            }
            _this.once('process_exit', resolve);
            treeKill(child.process.pid);
        });
    };
    Shell.prototype.send = function (method) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            _this.waitForChannel().then(function (channel) {
                channel.call.apply(channel, __spreadArray([method], args, false)).then(resolve, reject);
            }, reject);
        });
    };
    Shell.prototype.restart = function (mix) {
        if (mix === void 0) { mix = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof mix === 'number') {
                            options = this.commands[mix];
                        }
                        else {
                            options = this.commands.find(function (x) { return x.command === mix; });
                        }
                        if (options == null) {
                            throw new Error("Options undefined for ".concat(mix));
                        }
                        this.commandsQueue.push(options);
                        if (this.isBusy === false) {
                            this.next();
                            return [2 /*return*/];
                        }
                        // `next` is be called indirect (after the process exits)
                        return [4 /*yield*/, this.kill({ terminateAfter: 10000 })];
                    case 1:
                        // `next` is be called indirect (after the process exits)
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Shell.prototype.waitForChannel = function () {
        var _this = this;
        if (this.currentOptions.ipc && this.isReady === false) {
            return new Promise(function (resolve, reject) {
                (0, events_1.events_someOnce)(_this, {
                    'process_ready': function () {
                        _this.waitForChannel().then(resolve, reject);
                    },
                    'exit': function () {
                        reject('Process exited');
                    }
                });
            });
        }
        return new Promise(function (resolve, reject) {
            if (_this.channel) {
                resolve(_this.channel);
                return;
            }
            (0, events_1.events_someOnce)(_this, {
                'channel_created': function () {
                    resolve(_this.channel);
                },
                'exit': function () {
                    reject('Process exited');
                }
            });
        });
    };
    Shell.prototype.next = function () {
        var _this = this;
        var _a;
        if (this.isBusy === false) {
            this.start = new Date();
            this.isBusy = true;
            this.isReady = false;
        }
        if (this.channel) {
            this.emit('channel_closed', {
                channel: this.channel
            });
            if (this.commandsQueue.length !== 0 || (this.lastCode === 1 && this.errorsHandler.isActive())) {
                this.channel = null;
            }
        }
        if (this.lastCode === 1 && this.errorsHandler.isActive()) {
            this.lastCode = 0;
            this.commandsQueue.push(this.currentOptions);
            this.errorsHandler.delay(function () {
                _this.next();
            });
            return this.promise;
        }
        if (this.commandsQueue.length === 0) {
            if (this.state !== ShellState.Empty) {
                this.state = ShellState.Empty;
                this.end = new Date();
                this.isBusy = false;
                var promise = this.promise;
                // Always resolve the promise, consumer should check for errors
                promise.resolve(this);
            }
            return this.promise;
        }
        var child = null;
        var options = this.commandsQueue.shift();
        var command = ValueExtractor_1.ValueExtractor.interpolateAny(options.command, this.extracted);
        var rgxReady = options.matchReady;
        var detached = options.detached === true;
        var silent = this.params.silent;
        var stdio = detached ? (void 0) : 'pipe';
        var extractor = options.extract ? new ValueExtractor_1.ValueExtractor(this.extracted, options.extract) : null;
        var result = new ProcessResult(options);
        this.results.push(result);
        this.currentOptions = options;
        if (!options.fork && global.process.platform === 'win32') {
            if (options.exec !== 'cmd') {
                options.args.unshift('/C', options.exec);
                options.exec = 'cmd';
            }
        }
        if (rgxReady == null && options.ipc) {
            rgxReady = /IPC Listening/i;
        }
        this.isReady = rgxReady == null;
        try {
            var cwd = options.cwd;
            if (cwd != null) {
                var hasFileProtocol = cwd.startsWith('file:');
                var cwdUri = hasFileProtocol ? cwd : 'file://' + cwd;
                if (atma_io_1.Directory.exists(cwdUri + '/') === false) {
                    throw Error('CWD Directory not exists: ' + cwd);
                }
                if (hasFileProtocol) {
                    cwd = new atma_utils_1.class_Uri(cwd).toLocalDir();
                }
            }
            if (cwd == null) {
                cwd = process.cwd();
            }
            var exec = ValueExtractor_1.ValueExtractor.interpolateAny(options.exec, this.extracted, options);
            var args = ValueExtractor_1.ValueExtractor.interpolateAny(options.args, this.extracted, options);
            var method = options.fork ? 'fork' : 'spawn';
            if (this.params.verbose) {
                this.print("".concat(method, ": ").concat(exec, " ").concat(args.join('')));
            }
            child = options.fork
                ? child_process.fork(exec, args, {
                    cwd: options.cwd || process.cwd(),
                    env: process.env,
                    stdio: stdio,
                    detached: detached
                })
                : child_process.spawn(exec, args, {
                    cwd: options.cwd || process.cwd(),
                    env: process.env,
                    stdio: stdio,
                    detached: detached
                });
            if (options.fork) {
                this.channel = new CommunicationChannel_1.CommunicationChannel(child, (_a = this.params.timeoutMs) !== null && _a !== void 0 ? _a : 10000);
                this.emit('channel_created', {
                    channel: this.channel
                });
            }
            result.pid = child.pid;
            this.children.push({
                process: child,
                options: options,
            });
        }
        catch (error) {
            if (this.params.verbose) {
                this.print('on start exception:', error);
            }
            result.error = error;
            this.errors.push({
                command: command,
                error: error
            });
            this.emit('process_exception', {
                command: command,
                error: error
            });
            return this.next();
        }
        child.on('error', function (error) {
            var _a;
            if (_this.params.verbose) {
                _this.print('on error:', error);
            }
            (_a = _this.channel) === null || _a === void 0 ? void 0 : _a.onError(error);
        });
        child.on('exit', function (code) {
            var _a;
            if (_this.params.verbose) {
                _this.print('on exit:', code);
            }
            result.resultCode = code !== null && code !== void 0 ? code : 0;
            _this.emit('process_exit', {
                command: command,
                code: code,
                result: result
            });
            _this.isBusy = false;
            _this.isReady = false;
            _this.lastCode = code;
            if (code > 0) {
                var msg = result.stderr.slice(-20).join('');
                var err = new Error("Exit code: ".concat(code, ". ").concat(msg !== null && msg !== void 0 ? msg : ''));
                _this.errors.push({
                    command: command,
                    error: err
                });
                (_a = _this.channel) === null || _a === void 0 ? void 0 : _a.onError(err);
            }
            extractor === null || extractor === void 0 ? void 0 : extractor.complete();
            _this.next();
        });
        child.stdout.on('data', function (buffer) {
            if (detached !== true && silent !== true) {
                process.stdout.write(buffer);
            }
            if (rgxReady != null && rgxReady.test(buffer.toString())) {
                rgxReady = null;
                _this.isReady = true;
                _this.emit('process_ready', {
                    command: command
                });
            }
            if (extractor != null) {
                extractor.write(buffer);
            }
            var str = String(buffer);
            result.stdout.push(str);
            result.std.push(str);
            _this.stdout.push(str);
            _this.std.push(str);
            _this.emit('process_stdout', {
                command: command,
                buffer: buffer
            });
        });
        child.stderr.on('data', function (buffer) {
            var _a;
            if (detached !== true && silent !== true) {
                process.stderr.write(buffer);
            }
            var str = String(buffer);
            result.stderr.push(str);
            result.std.push(str);
            _this.stderr.push(str);
            _this.std.push(str);
            _this.emit('process_stderr', {
                command: command,
                buffer: buffer
            });
            if (str.includes('UnhandledPromiseRejectionWarning')) {
                (_a = _this.channel) === null || _a === void 0 ? void 0 : _a.onStdError(str);
            }
        });
        this.emit('process_start', {
            command: command
        });
        if (this.params.parallel !== false) {
            this.next();
        }
        if (rgxReady == null) {
            setTimeout(function () {
                _this.emit('process_ready', {
                    command: command
                });
            }, 200);
        }
        return this.promise;
    };
    Shell.prototype.print = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('Shellbee: ' + args.join(' '));
    };
    Shell.ipc = CommunicationChannel_1.CommunicationChannel.ipc;
    return Shell;
}(atma_utils_1.class_EventEmitter));
exports.Shell = Shell;
;
var ProcessResult = /** @class */ (function () {
    function ProcessResult(options) {
        this.options = options;
        this.std = [];
        this.stdout = [];
        this.stderr = [];
        this.resultCode = null;
        this.error = null;
    }
    return ProcessResult;
}());
exports.ProcessResult = ProcessResult;
var ShellState;
(function (ShellState) {
    ShellState[ShellState["Empty"] = -1] = "Empty";
    ShellState[ShellState["Initial"] = 0] = "Initial";
    ShellState[ShellState["Started"] = 1] = "Started";
})(ShellState || (ShellState = {}));
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_Shell === module.exports) {
        // do nothing if
    } else if (__isObj(_src_Shell) && __isObj(module.exports)) {
        Object.assign(_src_Shell, module.exports);
    } else {
        _src_Shell = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_ps_PsList;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_ps_PsList != null ? _src_ps_PsList : {};
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
exports.PsList = void 0;
var Shell_1 = _src_Shell;
var path = require("path");
var treeKill = require("tree-kill");
var PsList;
(function (PsList) {
    function getAll() {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Platforms[process.platform]()];
            });
        });
    }
    PsList.getAll = getAll;
    function kill(pid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, treeKill(pid)];
            });
        });
    }
    PsList.kill = kill;
    var ProcessListResolver = {
        nix: function () {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var shell, stdout, data, columns, list;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, Shell_1.Shell.run({
                                silent: true,
                                command: "ps ax -ww -o pid,ppid,uid,gid,args"
                            })];
                        case 1:
                            shell = _b.sent();
                            stdout = (_a = shell.stdout) === null || _a === void 0 ? void 0 : _a.join('');
                            data = utils.stripLine(stdout, 1);
                            columns = utils.extractColumns(data, [0, 1, 2, 3, 4], 5);
                            list = columns.map(function (column) {
                                var cmd = String(column[4]);
                                var bin = fetchBin(cmd);
                                return {
                                    pid: parseInt(column[0], 10),
                                    ppid: parseInt(column[1], 10),
                                    uid: parseInt(column[2], 10),
                                    gid: parseInt(column[3], 10),
                                    name: fetchName(bin),
                                    bin: bin,
                                    cmd: column[4]
                                };
                            });
                            return [2 /*return*/, list];
                    }
                });
            });
        },
        win32: function () {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var shell, std, list;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, Shell_1.Shell.run({
                                silent: true,
                                command: "powershell.exe /c \"Get-CimInstance -className win32_process | select Name,ProcessId,ParentProcessId,CommandLine,ExecutablePath\"",
                            })];
                        case 1:
                            shell = _b.sent();
                            std = (_a = shell.std) === null || _a === void 0 ? void 0 : _a.join('');
                            list = utils
                                .parseTable(std)
                                .map(function (row) { return ({
                                pid: parseInt(row.ProcessId, 10),
                                ppid: parseInt(row.ParentProcessId, 10),
                                bin: row.ExecutablePath,
                                name: row.Name || '',
                                cmd: row.CommandLine
                            }); });
                            return [2 /*return*/, list];
                    }
                });
            });
        }
    };
    var Platforms = {
        darwin: ProcessListResolver.nix,
        linux: ProcessListResolver.nix,
        sunos: ProcessListResolver.nix,
        freebsd: ProcessListResolver.nix,
        win32: ProcessListResolver.win32,
    };
    function fetchBin(cmd) {
        var pieces = cmd.split(path.sep);
        var last = pieces[pieces.length - 1];
        if (last) {
            pieces[pieces.length - 1] = last.split(' ')[0];
        }
        var fixed = [];
        for (var _i = 0, pieces_1 = pieces; _i < pieces_1.length; _i++) {
            var part = pieces_1[_i];
            var optIdx = part.indexOf(' -');
            if (optIdx >= 0) {
                // case: /aaa/bbb/ccc -c
                fixed.push(part.substring(0, optIdx).trim());
                break;
            }
            else if (part.endsWith(' ')) {
                // case: node /aaa/bbb/ccc.js
                fixed.push(part.trim());
                break;
            }
            fixed.push(part);
        }
        return fixed.join(path.sep);
    }
    function fetchName(fullpath) {
        if (process.platform === 'darwin') {
            var idx = fullpath.indexOf('.app/');
            if (idx >= 0) {
                return path.basename(fullpath.substring(0, idx));
            }
        }
        return path.basename(fullpath);
    }
    var utils = {
        /**
         * Strip top lines of text
         *
         * @param  {String} text
         * @param  {Number} num
         * @return {String}
         */
        stripLine: function (text, num) {
            var idx = 0;
            while (num-- > 0) {
                var nIdx = text.indexOf('\n', idx);
                if (nIdx >= 0) {
                    idx = nIdx + 1;
                }
            }
            return idx > 0 ? text.substring(idx) : text;
        },
        /**
         * Split string and stop at max parts
         *
         * @param  {Number} line
         * @param  {Number} max
         * @return {Array}
         */
        split: function (line, max) {
            var cols = line.trim().split(/\s+/);
            if (cols.length > max) {
                cols[max - 1] = cols.slice(max - 1).join(' ');
            }
            return cols;
        },
        /**
         * Extract columns from table text
         *
         * Example:
         *
         * ```
         * extractColumns(text, [0, 2], 3)
         * ```
         *
         * From:
         * ```
         * foo       bar        bar2
         * valx      valy       valz
         * ```
         *
         * To:
         * ```
         * [ ['foo', 'bar2'], ['valx', 'valz'] ]
         * ```
         *
         * @param  {String} text  raw table text
         * @param  {Array} idxes  the column index list to extract
         * @param  {Number} max   max column number of table
         * @return {Array}
         */
        extractColumns: function (text, idxes, max) {
            var lines = text.split(/(\r\n|\n|\r)/);
            var columns = [];
            if (!max) {
                max = Math.max.apply(null, idxes) + 1;
            }
            lines.forEach(function (line) {
                var cols = utils.split(line, max);
                var column = [];
                idxes.forEach(function (idx) {
                    column.push(cols[idx] || '');
                });
                columns.push(column);
            });
            return columns;
        },
        /**
         * parse table text to array
         *
         * From:
         * ```
         * Header1 : foo
         * Header2 : bar
         * Header3 : val
         *
         * Header1 : foo2
         * Header2 : bar2
         * Header3 : val2
         * ```
         *
         * To:
         * ```
         * [{ Header1: 'foo', Header2: 'bar', Header3: 'val' }, ...]
         * ```
         *
         * @param  {String} data raw table data
         * @return {Array}
         */
        parseTable: function (data) {
            var lines = data.split(/(\r\n\r\n|\r\n\n|\n\r\n)|\n\n/).filter(function (line) {
                return line.trim().length > 0;
            }).map(function (e) { return e.split(/(\r\n|\n|\r)/).filter(function (line) { return line.trim().length > 0; }); });
            // Join multi-ligne value
            lines.forEach(function (line) {
                for (var index = 0; line[index];) {
                    var entry = line[index];
                    if (entry.startsWith(' ')) {
                        line[index - 1] += entry.trimLeft();
                        line.splice(index, 1);
                    }
                    else {
                        index += 1;
                    }
                }
            });
            return lines.map(function (line) {
                var row = {};
                line.forEach(function (string) {
                    var splitterIndex = string.indexOf(':');
                    var key = string.slice(0, splitterIndex).trim();
                    row[key] = string.slice(splitterIndex + 1).trim();
                });
                return row;
            });
        }
    };
})(PsList = exports.PsList || (exports.PsList = {}));
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_ps_PsList === module.exports) {
        // do nothing if
    } else if (__isObj(_src_ps_PsList) && __isObj(module.exports)) {
        Object.assign(_src_ps_PsList, module.exports);
    } else {
        _src_ps_PsList = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_ps_Net;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_ps_Net != null ? _src_ps_Net : {};
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
exports.Net = void 0;
var alot_1 = require("alot");
var Shell_1 = _src_Shell;
var PsList_1 = _src_ps_PsList;
var Net;
(function (Net) {
    var PidResolver = {
        nix: function (port) {
            return __awaiter(this, void 0, void 0, function () {
                var table, iPid, iStatus, iProtocol;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exec("lsof -i :".concat(port))];
                        case 1:
                            table = _a.sent();
                            iPid = 1;
                            iStatus = 9;
                            iProtocol = 7;
                            return [2 /*return*/, table.map(function (row) {
                                    var _a, _b, _c;
                                    var pid = Number(row[iPid]);
                                    var status = (_a = row[iStatus]) !== null && _a !== void 0 ? _a : '';
                                    var protocol = (_c = (_b = row[iProtocol]) === null || _b === void 0 ? void 0 : _b.toLowerCase()) !== null && _c !== void 0 ? _c : 'tcp';
                                    return {
                                        pid: pid,
                                        status: status,
                                        protocol: protocol,
                                    };
                                })];
                    }
                });
            });
        },
        win32: function (port) {
            return __awaiter(this, void 0, void 0, function () {
                var table, iPid, iStatus, iProtocol;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exec("netstat -a -n -o | findstr :".concat(port))];
                        case 1:
                            table = _a.sent();
                            iPid = 4;
                            iStatus = 3;
                            iProtocol = 0;
                            return [2 /*return*/, table.map(function (row) {
                                    var _a;
                                    var pid = Number(row[iPid]);
                                    var status = row[iStatus];
                                    var protocol = (_a = row[iProtocol]) === null || _a === void 0 ? void 0 : _a.toLowerCase();
                                    return {
                                        pid: pid,
                                        status: status,
                                        protocol: protocol,
                                    };
                                })];
                    }
                });
            });
        }
    };
    function exec(command) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var shell, std;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Shell_1.Shell.run({
                            silent: true,
                            command: command,
                        })];
                    case 1:
                        shell = _b.sent();
                        std = (_a = shell.std) === null || _a === void 0 ? void 0 : _a.join('');
                        return [2 /*return*/, std
                                .split('\n')
                                .map(function (x) { return x.trim(); })
                                .filter(Boolean)
                                .map(function (line) {
                                return line.split(' ').map(function (x) { return x.trim(); }).filter(Boolean);
                            })
                                .filter(function (x) { return x.length > 0; })];
                }
            });
        });
    }
    var Platforms = {
        darwin: PidResolver.nix,
        linux: PidResolver.nix,
        sunos: PidResolver.nix,
        freebsd: PidResolver.nix,
        win32: PidResolver.win32,
    };
    function findByPort(port) {
        return __awaiter(this, void 0, Promise, function () {
            var arr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Platforms[process.platform](port)];
                    case 1:
                        arr = _a.sent();
                        return [2 /*return*/, (0, alot_1.default)(arr).distinctBy(function (x) { return x.pid; }).toArray()];
                }
            });
        });
    }
    Net.findByPort = findByPort;
    ;
    function killByPort(port) {
        return __awaiter(this, void 0, Promise, function () {
            var processes;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, findByPort(port)];
                    case 1:
                        processes = _a.sent();
                        return [4 /*yield*/, (0, alot_1.default)(processes).forEachAsync(function (x) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!x.pid) return [3 /*break*/, 2];
                                            return [4 /*yield*/, PsList_1.PsList.kill(x.pid)];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); }).toArrayAsync()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, processes];
                }
            });
        });
    }
    Net.killByPort = killByPort;
})(Net = exports.Net || (exports.Net = {}));
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_ps_Net === module.exports) {
        // do nothing if
    } else if (__isObj(_src_ps_Net) && __isObj(module.exports)) {
        Object.assign(_src_ps_Net, module.exports);
    } else {
        _src_ps_Net = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_restartSelf;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_util_restartSelf != null ? _src_util_restartSelf : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restartSelf = void 0;
var Shell_1 = _src_Shell;
function restartSelf() {
    var command = process
        .argv
        .map(function (x) { return x.includes(' ') ? "\"".concat(x, "\"") : x; })
        .join(' ');
    var shell = new Shell_1.Shell({
        command: command,
        detached: true,
    });
    shell.onStart(function () {
        console.log('Exit self.');
        process.exit();
    });
    console.log('Cloning this process.');
    shell.run();
}
exports.restartSelf = restartSelf;
;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_util_restartSelf === module.exports) {
        // do nothing if
    } else if (__isObj(_src_util_restartSelf) && __isObj(module.exports)) {
        Object.assign(_src_util_restartSelf, module.exports);
    } else {
        _src_util_restartSelf = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellUtils = exports.run = exports.Shell = exports.restartSelf = void 0;
var Net_1 = _src_ps_Net;
var PsList_1 = _src_ps_PsList;
var Shell_1 = _src_Shell;
Object.defineProperty(exports, "Shell", { enumerable: true, get: function () { return Shell_1.Shell; } });
var restartSelf_1 = _src_util_restartSelf;
Object.defineProperty(exports, "restartSelf", { enumerable: true, get: function () { return restartSelf_1.restartSelf; } });
exports.run = Shell_1.Shell.run;
exports.ShellUtils = {
    process: {
        getAll: PsList_1.PsList.getAll,
        getByPort: Net_1.Net.findByPort,
        kill: PsList_1.PsList.kill,
        killByPort: Net_1.Net.killByPort,
    }
};


}());
// end:source ./RootModule.js
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_node_modules_shellbee_lib_shellbee === module.exports) {
        // do nothing if
    } else if (__isObj(_node_modules_shellbee_lib_shellbee) && __isObj(module.exports)) {
        Object.assign(_node_modules_shellbee_lib_shellbee, module.exports);
    } else {
        _node_modules_shellbee_lib_shellbee = module.exports;
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
    const shellbee = _node_modules_shellbee_lib_shellbee;
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
const atma_utils_1 = require("atma-utils");
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
const atma_utils_1 = require("atma-utils");
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
var _src_utils_array;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_array != null ? _src_utils_array : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr_distinctConcat = exports.arr_isEmpty = void 0;
const atma_utils_1 = require("atma-utils");
function arr_isEmpty(array) {
    if ((0, atma_utils_1.is_Array)(array) === false)
        return true;
    return array.length === 0;
}
exports.arr_isEmpty = arr_isEmpty;
;
function arr_distinctConcat(a, b) {
    if (b == null)
        return a;
    if (a == null)
        return b;
    var arr = a.concat(b);
    var out = [], hash = {};
    arr.forEach(function (x) {
        if (hash[x] === true) {
            return;
        }
        hash[x] = true;
        out.push(x);
    });
    return out;
}
exports.arr_distinctConcat = arr_distinctConcat;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_array === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_array) && __isObj(module.exports)) {
        Object.assign(_src_utils_array, module.exports);
    } else {
        _src_utils_array = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_node_utils_cfg;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_node_utils_cfg != null ? _src_node_utils_cfg : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.watch = exports.cfg_split = exports.cfg_suiteInfoFromConfig = exports.cfg_parseSuites = exports.cfg_hasScripts = exports.cfg_getScripts = exports.cfg_loadConfig = exports.cfg_prepairSettings = void 0;
const vars_1 = _src_vars;
const array_1 = _src_utils_array;
const atma_utils_1 = require("atma-utils");
function cfg_prepairSettings(setts, script) {
    var base = setts.base;
    if (base) {
        base = new atma_utils_1.class_Uri(atma_utils_1.class_Uri.combine(base, '/'));
        if (base[0] === '/')
            // relative to CWD
            base = base.substring(1);
        if (base.isRelative())
            base = vars_1.io.env.currentDir.combine(base);
    }
    else {
        base = vars_1.io.env.currentDir;
    }
    setts.base = atma_utils_1.class_Uri.combine(base.toDir(), '/');
    setts.nodeScripts = [];
    setts.domScripts = [];
    setts.env = [];
    if (script == null)
        return;
    if (script.indexOf('*') !== -1) {
        cfg_addScript(script, setts.base, setts.nodeScripts, setts.domScripts, (setts.browser && 'dom') || (setts.node && 'node'));
        return;
    }
    function resolveFileByName(path) {
        var ext = /\.[\w]+$/;
        if (ext.test(path)) {
            return resolveFileByNameWithExtension(path);
        }
        let extensions = [
            '.spec.ts',
            '.spec.js',
            '.test.ts',
            '.test.js',
            '.test',
            '.ts',
            '.js',
        ];
        for (let i = 0; i < extensions.length; i++) {
            let x = resolveFileByNameWithExtension(path + extensions[i]);
            if (x) {
                return x;
            }
        }
        return null;
    }
    function resolveFileByNameWithExtension(path) {
        if (vars_1.io.File.exists(base.combine(path))) {
            return path;
        }
        var testFolder = atma_utils_1.class_Uri.combine('test/', path);
        if (vars_1.io.File.exists(base.combine(testFolder))) {
            return testFolder;
        }
        return null;
    }
    script = resolveFileByName(script);
    if (script == null) {
        return;
    }
    cfg_addScript(script, setts.base, setts.nodeScripts, setts.domScripts, 
    // if not defined, executor will be resolved from the path
    (setts.browser && 'dom') || (setts.node && 'node'));
    // Consider to remove: add same-name js file to env to be preloaded.
    var ext = /\.\w{1,5}$/.exec(script);
    if (ext && ext[0] === '.test') {
        script = script.replace(/\.\w{1,5}$/, '.js');
        if (vars_1.io.File.exists(base.combine(script)))
            setts.env.push(script);
    }
}
exports.cfg_prepairSettings = cfg_prepairSettings;
; // cfg_prepair
/**
 * base: [String]
 * env: [String]
 * tests: String | [String]
 */
function cfg_loadConfig(baseConfig) {
    var path = baseConfig.config;
    if (path == null) {
        path = /\/test.?[\\\/]?$/.test(baseConfig.base)
            ? 'config.js'
            : 'test/config.js';
        path = atma_utils_1.class_Uri.combine(baseConfig.base, path);
    }
    var file = new vars_1.io.File(path);
    if (file.exists() === false)
        return { error: '404 ' + path };
    return suite_normalize(require(file.uri.toLocalFile()));
}
exports.cfg_loadConfig = cfg_loadConfig;
function cfg_getScripts(baseConfig, config) {
    if (config.tests) {
        // root object, should not have suites
        var tests = config.tests, base = baseConfig.base, nodeScripts = baseConfig.nodeScripts, domScripts = baseConfig.domScripts, executor = baseConfig.exec;
        cfg_addScript(tests, base, nodeScripts, domScripts, executor);
        baseConfig.env = config.env;
        baseConfig.$config = config.$config;
    }
    baseConfig.suites = cfg_parseSuites(config.suites, baseConfig.base);
}
exports.cfg_getScripts = cfg_getScripts;
;
function cfg_hasScripts(config) {
    if (!config)
        return false;
    if (!(0, array_1.arr_isEmpty)(config.nodeScripts))
        return true;
    if (!(0, array_1.arr_isEmpty)(config.domScripts))
        return true;
    return false;
}
exports.cfg_hasScripts = cfg_hasScripts;
;
function cfg_parseSuites(suites, base) {
    var array = [], key, x, config;
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
            vars_1.logger.error('Suite %s has no `tests`', key);
            continue;
        }
        cfg_addScript(x.tests, config.base, config.nodeScripts, config.domScripts, config.exec);
        array.push(config);
    }
    return array;
}
exports.cfg_parseSuites = cfg_parseSuites;
;
function cfg_suiteInfoFromConfig(setts, config) {
    setts.env = (0, array_1.arr_distinctConcat)(setts.env, config.env);
    if (config.suites == null) {
        setts.$config = config.$config;
        setts.exec = config.exec;
        recalculateExecScripts(setts);
        return;
    }
    var path = first(setts.nodeScripts) || first(setts.domScripts), suite = suite_getForPath(config.suites, path);
    if (suite) {
        setts.env = (0, array_1.arr_distinctConcat)(setts.env, suite.env);
        setts.$config = suite.$config;
        setts.exec = suite.exec;
        recalculateExecScripts(setts);
    }
    // private
    function first(arr) {
        return arr && arr[0];
    }
    function recalculateExecScripts(config) {
        var exec = config.exec, from, to;
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
}
exports.cfg_suiteInfoFromConfig = cfg_suiteInfoFromConfig;
;
function cfg_split(config) {
    if (config.fork)
        return [config];
    // split config per executor
    var configs = [];
    if (!(0, array_1.arr_isEmpty)(config.domScripts) && !config.node) {
        configs.push({
            exec: 'browser',
            env: config.env,
            scripts: config.domScripts,
            base: config.base || config.cwd,
            $config: config.$config
        });
    }
    if (!(0, array_1.arr_isEmpty)(config.nodeScripts) && !config.browser) {
        configs.push({
            exec: 'node',
            env: config.env,
            scripts: config.nodeScripts,
            base: config.base || config.cwd,
            $config: config.$config
        });
    }
    if (config.suites) {
        config.suites.forEach(function (suite) {
            configs = configs.concat(cfg_split(suite));
        });
    }
    return configs;
}
exports.cfg_split = cfg_split;
const watching = [];
function watch(base, resources, callback) {
    base = new atma_utils_1.class_Uri(base);
    resources.forEach((url) => {
        url = url.replace(/^(https?:\/\/[^\/]+)?(\/utest)?\//i, '');
        if (/^[\w\d\-_]+$/.test(url)) {
            // node module
            return null;
        }
        var uri = new atma_utils_1.class_Uri(url);
        if (uri.isRelative()) {
            uri = base.combine(uri);
        }
        var file = new vars_1.io.File(uri);
        if (file.uri == null) {
            // some virtual files does not expose uri property
            return null;
        }
        let filename = file.uri.toLocalFile();
        if (watching.includes(filename)) {
            return;
        }
        if (file.exists()) {
            watching.push(filename);
            vars_1.io.watcher.watch(filename, function () {
                vars_1.io.File.clearCache(filename);
                var sys = require('path').normalize(filename);
                delete require.cache[sys];
                callback(filename);
            });
            return url;
        }
        if (/\.reference\//i.test(filename)) {
            return null;
        }
        if (/socket\.io/i.test(filename)) {
            return null;
        }
        vars_1.logger.warn('<utest: watcher> File 404 - ', filename);
        return null;
    });
    return watching;
}
exports.watch = watch;
;
//= private
function cfg_addScript(path, base, nodeScripts, domScripts, executor, forceAsPath) {
    if (Array.isArray(path)) {
        path.forEach(function (x) {
            cfg_addScript(x, base, nodeScripts, domScripts, executor, forceAsPath);
        });
        return;
    }
    if (forceAsPath !== true && ~path.indexOf('*')) {
        // asPath here is actually to prevent recursion in case if
        // file, which is resolved by globbing, contains '*'
        var files = vars_1.io
            .glob
            .readFiles(atma_utils_1.class_Uri.combine(base, path));
        if (files.length === 0) {
            vars_1.logger.warn('<No files found. Base %s. Search %s', base, path);
        }
        files
            .forEach(function (file) {
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
function path_matchTests(test, path) {
    if (Array.isArray(test)) {
        return test.some(function (x) {
            return path_matchTests(x, path);
        });
    }
    if (typeof test !== 'string') {
        return false;
    }
    test = test.replace(/^[\./]/, '');
    path = path.replace(/^[\./]/, '');
    if (test.indexOf('*') === -1) {
        var a = test.toLowerCase(), b = path.toLowerCase();
        return a.indexOf(b) !== -1 || b.indexOf(a) !== -1;
    }
    return vars_1.io.glob.matchPath(test, path);
}
function suite_getForPath(suites, path) {
    var key, suite;
    for (key in suites) {
        suite = suites[key];
        if (path_matchTests(suite.tests, path))
            return suite;
    }
}
function suite_normalize(config) {
    normalize(config);
    var suites = config.suites;
    if (suites) {
        if ((0, atma_utils_1.is_Array)(suites)) {
            vars_1.logger.warn('Use object{SUITE_NAME:CONFIG}. Normalizing the array...');
            var obj = {};
            suites.forEach(function (suite, index) {
                obj[index] = suite;
            });
            suites = obj;
        }
        for (var key in suites) {
            normalize(suites[key], key);
        }
    }
    // private
    function normalize(x, name = null) {
        if (typeof x.env === 'string')
            x.env = [x.env];
        if (name != null)
            x.name = x.name || name;
    }
    return config;
}
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_node_utils_cfg === module.exports) {
        // do nothing if
    } else if (__isObj(_src_node_utils_cfg) && __isObj(module.exports)) {
        Object.assign(_src_node_utils_cfg, module.exports);
    } else {
        _src_node_utils_cfg = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_node_node_vars;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_node_node_vars != null ? _src_node_node_vars : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeVars = void 0;
exports.NodeVars = {
    suite: null,
    configs: null
};
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_node_node_vars === module.exports) {
        // do nothing if
    } else if (__isObj(_src_node_node_vars) && __isObj(module.exports)) {
        Object.assign(_src_node_node_vars, module.exports);
    } else {
        _src_node_node_vars = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_node_utils_logger;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_node_utils_logger != null ? _src_node_utils_logger : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log_stringDiff = exports.log_clearStd = void 0;
const vars_1 = _src_vars;
const color_1 = _src_utils_color;
let diff = null;
console.print = function (...args) {
    var message = args.join(' ');
    process.stdout.write(message);
};
function log_clearStd() {
    process.stdout.write('\u001b[2J'); //'\033[2J');
    process.stdout.write('\u001bc'); //'\033c');
}
exports.log_clearStd = log_clearStd;
;
function log_stringDiff(a, b) {
    if (diff == null) {
        diff = require('diff');
    }
    let str = diff
        .diffWordsWithSpace(a, b)
        .map(function (x) {
        var val = x.value;
        if (x.added || x.removed) {
            if (/^[ ]*$/.test(val)) {
                val = val[x.added ? 'bg_green' : 'bg_red'];
            }
            else if (/^\s*$/.test(val)) {
                val = val
                    .split('')
                    .map(function (x) {
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
                    return color_1.Color.bg_cyan(`[${code}]`);
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
    vars_1.logger.log(str);
}
exports.log_stringDiff = log_stringDiff;
;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_node_utils_logger === module.exports) {
        // do nothing if
    } else if (__isObj(_src_node_utils_logger) && __isObj(module.exports)) {
        Object.assign(_src_node_utils_logger, module.exports);
    } else {
        _src_node_utils_logger = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_node_Runner;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_node_Runner != null ? _src_node_Runner : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Runner = exports.status_ready = exports.status_testing = exports.status_prepair = exports.status_connected = exports.status_connecting = exports.status_blank = void 0;
const atma_utils_1 = require("atma-utils");
const vars_1 = _src_vars;
const logger_1 = _src_node_utils_logger;
const str_1 = _src_utils_str;
exports.status_blank = 1;
exports.status_connecting = 2;
exports.status_connected = 3;
exports.status_prepair = 4;
exports.status_testing = 5;
exports.status_ready = 6;
function utest_resolveFiles(config) {
    let files = [];
    if ((0, atma_utils_1.is_Array)(config)) {
        for (let i = 0, x, imax = config.length; i < imax; i++) {
            x = config[i];
            files = files.concat(utest_resolveFiles(x));
        }
        return files;
    }
    if (config.fork) {
        // no sub files
        return [];
    }
    let scripts = config.scripts, base = config.base;
    base = new atma_utils_1.class_Uri(base);
    for (let i = 0, x, imax = scripts.length; i < imax; i++) {
        x = new atma_utils_1.class_Uri(scripts[i]);
        if (x.isRelative()) {
            x = base.combine(x);
        }
        x = new vars_1.io.File(x);
        if (x.exists() === false) {
            console.error('File - 404 - ', x.uri.toLocalFile());
            continue;
        }
        files.push(x);
    }
    return files;
}
class Runner extends atma_utils_1.class_EventEmitter {
    config;
    status;
    files;
    suites;
    failed;
    stats;
    startedAt;
    isAction = false;
    constructor(config, settings) {
        super();
        this.isAction = settings?.isAction ?? false;
        this.config = config;
        this.status = exports.status_blank;
        this.files = utest_resolveFiles(config);
        this.suites = (0, atma_utils_1.is_Array)(config) ? config : [config];
        this.suites.forEach(function (x) {
            x.files = utest_resolveFiles(x);
        });
    }
    notifyTest(url) {
        let name = url.replace(this.config.base, '');
        vars_1.logger.log((0, str_1.color) `${this.isAction ? "Tasks" : "Test"}: bold<cyan<${name}>>`);
        this.startedAt = Date.now();
    }
    onComplete(stats) {
        this.status = exports.status_ready;
        function count(key) {
            let sum = 0;
            stats.forEach(function (x) {
                if (x.error) {
                    vars_1.logger.error(x.error);
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
            let aggr = [];
            stats.forEach(function (x) {
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
        let total = count('total'), failed = count('failed'), timeouts = count('timeouts'), callbacks = count('callbacks'), errors = count('errors'), browsers = stats.length;
        if (total === 0) {
            vars_1.logger.error('No assertions');
            failed++;
        }
        if (errors > 0) {
            failed++;
        }
        if (callbacks !== 0 || timeouts !== 0) {
            if (callbacks)
                vars_1.logger
                    .error('Expected callbacks were not fired. More info...')
                    .log(aggr('callbacks'));
            if (timeouts)
                vars_1.logger
                    .error('Asynchronous suites were not completed. More info...')
                    .log(aggr('timeouts'));
            !failed && failed++;
        }
        if (this.isAction !== true) {
            vars_1.logger
                .log((0, str_1.color) `\n\nbold<${failed ? 'red' : 'green'}<Done.>>`)
                .log((0, str_1.color) `bold<Assertions>: bold<green<${Math.max(total - failed, 0)}>>(bold<red<${failed}>>)`)
                .log((0, str_1.color) `bold<Timeouts>: bold<${timeouts ? 'red' : 'green'}<${timeouts}>>`)
                .log((0, str_1.color) `bold<Failed Callbacks>: bold<green<${callbacks}>>`);
        }
        else {
            let time = Date.now() - this.startedAt;
            vars_1.logger
                .log((0, str_1.color) `\n\nbold<${failed ? 'red' : 'green'}<Completed> in ${time}ms>`);
        }
        this.failed = failed;
        this.stats = stats;
        this.trigger('complete', this);
    }
    getResources() {
        if (this.stats == null) {
            return [];
        }
        let resources = this.stats.resources
            || this.stats[0]?.resources
            || this.getResources?.()
            || [];
        return resources;
    }
    // assertion events
    onFailure(data) {
        if (data.stack == null) {
            data.stack = '';
        }
        let base = this.suites[0].base || '';
        data = vars_1.assert.resolveData(data, base);
        vars_1.logger.log('');
        if ('actual' in data || 'expected' in data) {
            let actual = data.actual, expect = data.expected;
            if (typeof expect === 'string'
                && typeof actual === 'string'
                && expect.length > 20
                && actual.length > 10) {
                (0, logger_1.log_stringDiff)(expect, actual);
            }
            else {
                let msg = '%s bold<red<↔>> %s';
                vars_1.logger.log((0, str_1.color) `${msg}`, data.actual, data.expected);
            }
        }
        if (data.message && data.generatedMessage !== true)
            vars_1.logger.log((0, str_1.color) ` bold<red<::>> ` + data.message.yellow);
        if (data.file && data.line != null) {
            let path = data
                .file
                .replace(/(\/)?utest\//i, '$1')
                .replace(/\?.+/, '')
                .replace(/^\//, '');
            let uri = new atma_utils_1.class_Uri(path).isRelative()
                ? new atma_utils_1.class_Uri(base).combine(path).toString()
                : path;
            if (vars_1.io.File.exists(uri)) {
                let source = vars_1.io.File.read(uri, { skipHooks: true });
                let lines = source.split(/\r\n|\r|\n/g);
                let line = lines[data.line - 1];
                let code = line && line.trim();
                ;
                vars_1.logger
                    .log((0, str_1.color) `  bold<${path}>`)
                    .log((0, str_1.color) `  bold<cyan< → >> bold<${data.line + 1} |> bold<red< ${code} >>`)
                    .log('');
            }
            return;
        }
    }
    onSuccess() {
        process.stdout.write((0, str_1.color) `bold<green< |>>`);
    }
}
exports.Runner = Runner;
;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_node_Runner === module.exports) {
        // do nothing if
    } else if (__isObj(_src_node_Runner) && __isObj(module.exports)) {
        Object.assign(_src_node_Runner, module.exports);
    } else {
        _src_node_Runner = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_node_utils_io;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_node_utils_io != null ? _src_node_utils_io : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.io_connect = exports.io_clean = void 0;
const atma_utils_1 = require("atma-utils");
let dfr, client;
function io_clean() {
    if (dfr == null)
        return;
    if (dfr._resolved == null) {
        dfr = null;
        return;
    }
    var socket = dfr._resolved[0];
    socket.disconnect();
    dfr = null;
}
exports.io_clean = io_clean;
;
function io_connect(config) {
    if (dfr)
        return dfr;
    dfr = new atma_utils_1.class_Dfr();
    if (client == null)
        client = require('socket.io-client');
    var port = config.port || 5777, url = `http://localhost:${port}/node`, socket = client.connect(url, {
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 2000,
        'connect timeout': 2000,
        'force new connection': true
    });
    socket
        .on('connect', function () {
        dfr.resolve(socket);
    })
        .on('connect_error', function (error) {
        socket.disconnect();
        socket.removeAllListeners();
        dfr && dfr.reject(error);
    });
    return dfr;
}
exports.io_connect = io_connect;
;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_node_utils_io === module.exports) {
        // do nothing if
    } else if (__isObj(_src_node_utils_io) && __isObj(module.exports)) {
        Object.assign(_src_node_utils_io, module.exports);
    } else {
        _src_node_utils_io = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_node_utils_net;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_node_utils_net != null ? _src_node_utils_net : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.net_portIsAvailable = void 0;
const TIMEOUT = 500;
function net_portIsAvailable(host, port, callback) {
    var socket = new (require('net').Socket), opened;
    socket.on('connect', function () {
        socket.end();
        opened = true;
    });
    socket.setTimeout(TIMEOUT);
    socket.on('timeout', function () {
        opened = false;
        socket.destroy();
    });
    socket.on('error', function (exception) {
        opened = false;
    });
    socket.on('close', function () {
        callback(opened === false);
    });
    socket.connect(port, host);
}
exports.net_portIsAvailable = net_portIsAvailable;
;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_node_utils_net === module.exports) {
        // do nothing if
    } else if (__isObj(_src_node_utils_net) && __isObj(module.exports)) {
        Object.assign(_src_node_utils_net, module.exports);
    } else {
        _src_node_utils_net = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_node_utils_slave;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_node_utils_slave != null ? _src_node_utils_slave : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slave_openBrowser = exports.slave_start = void 0;
const vars_1 = _src_vars;
const net_1 = _src_node_utils_net;
let PORT = 5777, HOST = '127.0.0.1';
function slave_start(callback) {
    app.runAction('shell', {
        command: {
            command: 'atma server',
            detached: true
        },
        parallel: true
    }, function (error) {
        if (error)
            return callback(error);
        ensurePortIsBusy(function (error) {
            if (error)
                return callback(error);
            slave_openBrowser(callback);
        }, 0);
    });
}
exports.slave_start = slave_start;
;
function slave_openBrowser(callback) {
    var url = `http://${HOST}:${PORT}/utest/`;
    var spawn = require('child_process').spawn, commands = {
        darwin: 'open',
        win32: 'explorer.exe',
        linux: 'xdg-open'
    };
    spawn(commands[process.platform], [url]);
    callback();
}
exports.slave_openBrowser = slave_openBrowser;
function ensurePortIsBusy(callback, tries) {
    if (tries > 10) {
        return callback('<server not responding>');
    }
    if (tries > 3) {
        vars_1.logger.warn('<Checking server>', tries);
    }
    (0, net_1.net_portIsAvailable)(HOST, PORT, function (state) {
        if (state === false)
            return callback();
        setTimeout(function () {
            ensurePortIsBusy(callback, ++tries);
        }, 300);
    });
}
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_node_utils_slave === module.exports) {
        // do nothing if
    } else if (__isObj(_src_node_utils_slave) && __isObj(module.exports)) {
        Object.assign(_src_node_utils_slave, module.exports);
    } else {
        _src_node_utils_slave = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_node_RunnerClient;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_node_RunnerClient != null ? _src_node_RunnerClient : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunnerClient = void 0;
const Runner_1 = _src_node_Runner;
const io_1 = _src_node_utils_io;
const slave_1 = _src_node_utils_slave;
const vars_1 = _src_vars;
const str_1 = _src_utils_str;
class RunnerClient extends Runner_1.Runner {
    startServer;
    socket;
    constructor(config, settings) {
        super(config, settings);
        this.suites.forEach(function (suite) {
            var key, val, cfg = suite.$config;
            for (key in cfg) {
                val = cfg[key];
                if (typeof val === 'function') {
                    cfg[key] = val.toString();
                }
            }
        });
    }
    run(done) {
        this.status = Runner_1.status_connecting;
        var config = this.config, port = config.port || 5777;
        (0, io_1.io_connect)(this.config)
            .fail(error => {
            (0, io_1.io_clean)();
            if (this.startServer === true) {
                var msg = `Test server connection error - http://localhost:${port}/utest`;
                done(msg);
                return;
            }
            this.startServer = true;
            vars_1.logger.log((0, str_1.color) `<utest:server not started> bold<green<starting...>>`);
            (0, slave_1.slave_start)(error => {
                if (error) {
                    return done('Failed to start server: ' + error);
                }
                this.run(done);
            });
        })
            .done(socket => {
            vars_1.logger.log((0, str_1.color) `bold<green<server connected>>`);
            this.socket = socket;
            socket
                .on('error', function (error) {
                vars_1.logger.error('Socket error', error);
                (0, io_1.io_clean)();
            })
                .on('server:utest:end', (stats) => {
                this.onComplete(stats);
            })
                .on('server:error', message => {
                this.socket.disconnect();
                vars_1.logger.error(message);
                done(1);
            })
                .on('server:log', function (type, args) {
                var fn = console[type] || console.log;
                fn.apply(console, args);
            })
                .on('slave:start', function (stats) {
                var message = (0, str_1.color) `bold<${stats.userAgent.browser.name} ${stats.userAgent.browser.version}>`;
                vars_1.logger
                    .log(message)
                    .log('');
            })
                .on('slave:end', function (stats) {
                vars_1.logger.log('Slave completed'[stats.failed ? 'red' : 'green']);
            })
                .on('slave:error', function (error) {
                vars_1.logger.error(error);
            })
                .on('slave:utest:script', info => {
                this.notifyTest(info.script);
            })
                .on('slave:assert:failure', (args) => {
                var data = args[0];
                this.onFailure(data);
            })
                .on('slave:assert:success', this.onSuccess.bind(this));
            // RUN
            this.status = Runner_1.status_connected;
            this.run = this.runTests;
            this.runTests();
        });
    }
    runTests() {
        vars_1.logger.log((0, str_1.color) `bold<-->--bold<-->--bold<-->--bold<--> yellow<client>`, (0, str_1.color) `bold<${Date.format(new Date(), 'HH:mm:ss')}>`, '\n');
        var cli = vars_1.app.config.$cli;
        if (this.startServer)
            cli.params.workerAutostart = false;
        switch (this.status) {
            case Runner_1.status_blank:
            case Runner_1.status_connected:
            case Runner_1.status_ready:
                this.status = Runner_1.status_testing;
                this.socket.emit('client:utest', this.suites, cli);
                return;
        }
        vars_1.logger.warn('Server is not ready', this.status);
    }
}
exports.RunnerClient = RunnerClient;
;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_node_RunnerClient === module.exports) {
        // do nothing if
    } else if (__isObj(_src_node_RunnerClient) && __isObj(module.exports)) {
        Object.assign(_src_node_RunnerClient, module.exports);
    } else {
        _src_node_RunnerClient = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_node_RunnerFork;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_node_RunnerFork != null ? _src_node_RunnerFork : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunnerFork = void 0;
const Runner_1 = _src_node_Runner;
const vars_1 = _src_vars;
const atma_utils_1 = require("atma-utils");
const str_1 = _src_utils_str;
class RunnerFork extends Runner_1.Runner {
    socket = null;
    failed = 0;
    run(done) {
        var self = this, cfgPath = this.config.fork, base = this.config.cwd, Fork = require('child_process').fork;
        vars_1.logger
            .log('\t\t\t\t>'.bg_yellow)
            .log('Fork'.bg_yellow.black, (0, str_1.color) `bold<${atma_utils_1.class_Uri.combine(base, cfgPath)}>`)
            .log('\t\t\t\t>'.bg_yellow)
            .log('');
        var child = Fork(process.mainModule.filename, [
            'test',
            '--config',
            cfgPath
        ], {
            cwd: atma_utils_1.class_Uri.combine(process.cwd(), base)
        });
        child.on('exit', function (code) {
            self.failed = code;
            vars_1.logger.log('Fork done'[code != 0 ? 'bg_red' : 'bg_green']);
            done(code !== 0 ? code : null);
        });
    }
}
exports.RunnerFork = RunnerFork;
;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_node_RunnerFork === module.exports) {
        // do nothing if
    } else if (__isObj(_src_node_RunnerFork) && __isObj(module.exports)) {
        Object.assign(_src_node_RunnerFork, module.exports);
    } else {
        _src_node_RunnerFork = module.exports;
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
var _src_node_RunnerNode;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_node_RunnerNode != null ? _src_node_RunnerNode : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunnerNode = void 0;
const vars_1 = _src_vars;
const Runner_1 = _src_node_Runner;
const atma_utils_1 = require("atma-utils");
const UTestVars_1 = _src_UTestVars;
const cfg_1 = _src_utils_cfg;
const fn_1 = _src_utils_fn;
const UTest_1 = _src_UTest;
class RunnerNode extends Runner_1.Runner {
    socket;
    index;
    resources;
    envResource;
    constructor(config, settings) {
        super(config, settings);
        vars_1.assert.onsuccess = this.onSuccess.bind(this);
        vars_1.assert.onfailure = this.onFailure.bind(this);
        this.process = this.process.bind(this);
        this.runTests = this.runTests.bind(this);
        this.singleComplete = this.singleComplete.bind(this);
        _runner = this;
    }
    run() {
        if (Runner_1.status_ready !== this.status && Runner_1.status_blank !== this.status) {
            vars_1.logger.warn('Node is busy ... ', this.status);
            return;
        }
        this.status = Runner_1.status_prepair;
        this.runTests();
    }
    runTests() {
        this.index = -1;
        this.status = Runner_1.status_testing;
        this.stats = [];
        this.clearResources();
        _suites = this.suites;
        _suiteIndex = -1;
        suite_next(this.process);
    }
    process() {
        // go to next suite, otherwise process file from current one
        if (++this.index > this.files.length - 1) {
            this.index = -1;
            suite_next(this.process);
            return;
        }
        let that = this, url = this.files[this.index].uri.toString();
        vars_1.assert.reset();
        UTestVars_1.UTestVars.clear();
        vars_1.include.removeFromCache(url);
        this.notifyTest(url);
        let resource = vars_1.include
            .cfg('path', _suite.base)
            .instance(url)
            .js(url)
            .done(function (resp) {
            process.nextTick(function () {
                UTest_1.UTest.run(that.singleComplete);
            });
        });
        this.resources.push(resource);
    }
    singleComplete() {
        this.stats.push({
            url: this.files[this.index].uri.toString(),
            total: vars_1.assert.total,
            failed: vars_1.assert.failed,
            timeouts: vars_1.assert.timeouts,
            errors: vars_1.assert.errors,
            callbacks: vars_1.assert.callbacks,
        });
        this.process();
    }
    clearResources() {
        this.resources && this.resources.forEach(x => resource_clear(x));
        this.envResource && resource_clear(this.envResource);
        this.resources = [];
        this.envResource = null;
    }
    getResources() {
        let arr = [];
        this.envResource && resource_aggIncludes(this.envResource, arr);
        this.resources.forEach(function (resource) {
            resource_aggIncludes(resource, arr);
        });
        Object
            .keys(require.cache)
            .filter(function (x) {
            // Do not listen for changes later in installed node modules
            return /[\\/]node_modules[\\/]/i.test(x) == false;
        })
            .forEach(function (x) {
            let path = new atma_utils_1.class_Uri(x).toString();
            arr.push(path);
        });
        return arr;
    }
}
exports.RunnerNode = RunnerNode;
;
function resource_clear(resource, cache) {
    cache ??= {};
    let key = resource.url ? `${resource.url}:${resource.includes?.length ?? 0}` : null;
    if (key != null) {
        if (cache[key]) {
            return;
        }
        cache[key] = true;
    }
    const bin = vars_1.include.getResources();
    for (let type in bin) {
        for (let key in bin[type]) {
            if (bin[type][key] === resource) {
                delete bin[type][key];
                break;
            }
        }
    }
    resource.includes?.forEach(data => {
        if (data.isCyclic) {
            return;
        }
        resource_clear(data.resource, cache);
    });
    if (typeof require !== 'undefined' && require.cache) {
        for (let key in require.cache) {
            delete require.cache[key];
        }
    }
}
function resource_aggIncludes(resource, agg, cache) {
    cache ??= {};
    let key = resource.url ? `${resource.url}:${resource.includes?.length ?? 0}` : null;
    if (resource.url && agg.indexOf(resource.url) === -1 && NODE_BUILTINS.indexOf(resource.url) === -1) {
        agg.push(resource.url);
    }
    if (key != null) {
        if (key in cache) {
            return;
        }
        cache[key] = true;
    }
    resource.includes?.forEach(function (data) {
        if (data.isCyclic) {
            return;
        }
        resource_aggIncludes(data.resource, agg, cache);
    });
}
function suite_loadEnv(runner, suite, callback) {
    let base = suite.base, env = suite.env;
    if (env == null) {
        callback();
        return;
    }
    if (typeof env === 'string') {
        env = [env];
    }
    if (Array.isArray(env) === false) {
        vars_1.logger.warn('"env" property should be an array of strings', env);
        callback();
        return;
    }
    if (env.length === 0) {
        callback();
        return;
    }
    let resource = vars_1.include
        .instance(base)
        .setBase(base);
    base = new atma_utils_1.class_Uri(base);
    let pckg = env
        .map(x => {
        let [src, alias] = x.split('::'), uri = base.combine(src[0] === '/' ? src.substring(1) : src);
        return [uri, alias];
    })
        .filter(arr => {
        let [uri] = arr;
        if (vars_1.io.File.exists(uri) === false) {
            vars_1.logger.warn('Resource from Environment - 404 -', uri.toLocalFile());
            return false;
        }
        return true;
    })
        .map(arr => {
        let [uri, alias] = arr;
        return uri.toString() + (alias ? '::' + alias : '');
    });
    resource.inject(pckg).done((resp) => {
        setTimeout(() => {
            Object
                .keys(resp)
                .filter(key => key !== 'load')
                .forEach(key => {
                let lib = resp[key];
                if (lib != null) {
                    global[key] = lib;
                    return;
                }
                if (global[key] != null) {
                    return;
                }
                let injected = eval(`typeof ${key} !== 'undefined' && ${key}`);
                if (injected) {
                    global[key] = injected;
                    return;
                }
            });
            callback(resp);
        }, 0);
    });
    runner.envResource = resource;
}
let _suites = null, _suite = null, _suiteIndex = -1, _runner = null;
function suite_next(callback) {
    _suite = _suites[++_suiteIndex];
    if (_suite == null) {
        _runner.onComplete(_runner.stats);
        return;
    }
    _runner.files = _suite.files;
    _runner.config = _suite;
    if (_suite.$config?.includejs != null) {
        global.include?.cfg(_suite.$config.includejs);
    }
    (0, fn_1.fn_waterfall)(function (done) {
        (0, cfg_1.cfg_runConfigurationScript)('$after', _suites[_suiteIndex - 1], done);
    }, function (done) {
        suite_loadEnv(_runner, _suite, done);
    }, function (done) {
        (0, cfg_1.cfg_runConfigurationScript)('$before', _suite, done);
    }, callback);
}
const NODE_BUILTINS = [
    "assert",
    "async_hooks",
    "buffer",
    "child_process",
    "cluster",
    "console",
    "constants",
    "crypto",
    "dgram",
    "dns",
    "domain",
    "events",
    "fs",
    "http",
    "http2",
    "https",
    "inspector",
    "module",
    "net",
    "os",
    "path",
    "perf_hooks",
    "process",
    "punycode",
    "querystring",
    "readline",
    "repl",
    "stream",
    "string_decoder",
    "timers",
    "tls",
    "tty",
    "url",
    "util",
    "v8",
    "vm",
    "zlib"
];
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_node_RunnerNode === module.exports) {
        // do nothing if
    } else if (__isObj(_src_node_RunnerNode) && __isObj(module.exports)) {
        Object.assign(_src_node_RunnerNode, module.exports);
    } else {
        _src_node_RunnerNode = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_node_Suite;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_node_Suite != null ? _src_node_Suite : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunnerSuite = void 0;
const Runner_1 = _src_node_Runner;
const vars_1 = _src_vars;
const cfg_1 = _src_node_utils_cfg;
const logger_1 = _src_node_utils_logger;
const RunnerClient_1 = _src_node_RunnerClient;
const RunnerFork_1 = _src_node_RunnerFork;
const str_1 = _src_utils_str;
const RunnerNode_1 = _src_node_RunnerNode;
class RunnerSuite {
    counter = 0;
    index;
    runners = [];
    base;
    watch;
    forks = null;
    cfgNode = null;
    cfgBrowser = null;
    callback;
    isAction = false;
    constructor(configs, settings) {
        /**
         *	this.watch
         *	this.base
         */
        this.handleConfig(configs);
        this.base = settings.base;
        this.watch = settings.watch;
        this.isAction = settings?.isAction ?? false;
        this.onComplete = this.onComplete.bind(this);
        this.process = this.process.bind(this);
        this.runTests = this.runTests.bind(this);
        (0, vars_1.logger)(90).log('RunnerSuite:', configs, settings);
    }
    closeSockets() {
        this.runners.forEach(function (x) {
            if (x.socket != null) {
                x.socket.disconnect();
            }
        });
    }
    getFailed() {
        return this.runners.reduce(function (aggr, x) {
            return aggr + (x.failed || 0);
        }, 0);
    }
    getSucceeded() {
        return this.runners.reduce(function (aggr, x) {
            return aggr + x.stats.reduce(function (aggr, x) {
                return aggr + x.total;
            }, 0);
        }, 0);
    }
    getResources() {
        return this.runners.reduce(function (aggr, x) {
            return aggr.concat(x.getResources());
        }, []);
    }
    onComplete() {
        if (this.watch !== true) {
            this.closeSockets();
            let failed = this.getFailed();
            let succeeded = this.getSucceeded();
            if (this.isAction !== true) {
                vars_1.logger
                    .log('')
                    .log(failed === 0
                    ? (0, str_1.color) `bold<green<Success ${succeeded}>>`
                    : (0, str_1.color) `bold<red<Failed ${failed}/${succeeded}/>>`);
            }
            this.callback(failed);
            return;
        }
        closeSocketsOnExit(this);
        let resources = (0, cfg_1.watch)(this.base, this.getResources(), (path) => {
            let dateStr = Date.format(new Date, 'HH:mm:ss').bg_cyan;
            let message = `#${++this.counter}  ${dateStr}  modified ${(0, str_1.color) `bold<${path}>`}`;
            if (this.isIdle() === false) {
                vars_1.logger.log(message);
                vars_1.logger.log((0, str_1.color) `... but the RunnerSuite is red<busy>`);
                return;
            }
            (0, logger_1.log_clearStd)();
            vars_1.logger.log(message);
            this.runTests();
        });
        vars_1.logger.log((0, str_1.color) `yellow< - watcher active. ${resources.length} Files>`);
    }
    process() {
        let runner = this.runners[++this.index];
        if (runner == null) {
            this.onComplete();
            return;
        }
        runner.run(this.process);
    }
    runTests() {
        this.index = -1;
        this.process();
    }
    run(done) {
        this.callback = done;
        this.runners = [];
        let settings = {
            isAction: this.isAction
        };
        if (this.cfgBrowser)
            this.runners.push(new RunnerClient_1.RunnerClient(this.cfgBrowser, settings));
        if (this.cfgNode)
            this.runners.push(new RunnerNode_1.RunnerNode(this.cfgNode, settings));
        if (this.forks) {
            let runners = this.forks.map((cfg) => {
                return new RunnerFork_1.RunnerFork(cfg, settings);
            });
            this.runners = this.runners.concat(runners);
        }
        this.runners.forEach(function (runner) {
            runner.on('complete', this.process);
        }, this);
        if (this.watch)
            (0, logger_1.log_clearStd)();
        this.runTests();
    }
    handleConfig(mix) {
        if (Array.isArray(mix)) {
            for (let i = 0, imax = mix.length; i < imax; i++) {
                this.handleSingle(mix[i]);
            }
            return;
        }
        this.handleSingle(mix);
    }
    handleSingle(config) {
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
    isIdle() {
        let isBusy = this.runners.some(x => x.status === Runner_1.status_testing || x.status === Runner_1.status_prepair);
        return isBusy === false;
    }
}
exports.RunnerSuite = RunnerSuite;
;
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
let closeSocketsOnExit = function (suite) {
    closeSocketsOnExit = function () { };
    let readLine = require('readline');
    if (process.platform === 'win32') {
        let rl = readLine.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on('SIGINT', function () {
            process.emit('SIGINT');
        });
        rl.write('\n');
        vars_1.global.rl = rl;
    }
    process.on('SIGINT', function () {
        suite.closeSockets();
        process.exit(0);
    });
};
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_node_Suite === module.exports) {
        // do nothing if
    } else if (__isObj(_src_node_Suite) && __isObj(module.exports)) {
        Object.assign(_src_node_Suite, module.exports);
    } else {
        _src_node_Suite = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_UAction;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_UAction != null ? _src_UAction : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = exports.UAction = void 0;
const UTest_1 = _src_UTest;
class UAction extends UTest_1.UTest {
    constructor(mix, suite, parent) {
        let $suite = typeof mix === 'string' ? suite : mix;
        if ($suite != null && typeof $suite !== 'function') {
            if ($suite.$config == null || $suite.$config.timeout == null) {
                if ($suite.$config == null) {
                    $suite.$config = {};
                }
                $suite.$config.timeout = Number.MAX_SAFE_INTEGER;
            }
        }
        super(mix, suite, parent);
    }
    static spawn(command) {
    }
    static getCurrent() {
    }
}
exports.UAction = UAction;
class Action {
    command;
    constructor(command) {
        this.command = command;
    }
    spawn() {
        throw new Error('Not Implemented');
        //process_toggle()
    }
    getLogs() {
        throw new Error('Not Implemented');
    }
}
exports.Action = Action;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_UAction === module.exports) {
        // do nothing if
    } else if (__isObj(_src_UAction) && __isObj(module.exports)) {
        Object.assign(_src_UAction, module.exports);
    } else {
        _src_UAction = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_node_action;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_node_action != null ? _src_node_action : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtmaAction = void 0;
const UTest_1 = _src_UTest;
const vars_1 = _src_vars;
const cfg_1 = _src_node_utils_cfg;
const node_vars_1 = _src_node_node_vars;
const Suite_1 = _src_node_Suite;
const cfg_2 = _src_utils_cfg;
const UAction_1 = _src_UAction;
const syntax_1 = _src_utils_syntax;
/**
 *	Atma.Toolkit Action entry
 */
let AtmaAction = {
    mocha: {
        it: syntax_1.it,
        describe: UTest_1.UTest.create,
    },
    UTest: UTest_1.UTest,
    UAction: UAction_1.UAction,
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
            '# Suite': {
                exec: 'String`dom|node`',
                env: 'ScriptPath | Array<ScriptPath> :: IncludeJS alias feature can be used',
                tests: 'String|GlobPattern - path to test(s)',
                fork: 'ConfigPath - run in separate thread another test configuration',
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
                    tests: 'src/browser/**.spec.ts'
                }, {
                    exec: 'node',
                    env: 'src/foo.js::Foo',
                    tests: 'src/node/**.spec.ts'
                }
            ]
        }
    },
    process(setts, done) {
        // configurate
        vars_1.io.File.disableCache();
        vars_1.logger.cfg('logCaller', false);
        process.env.ENV = 'test';
        process.env.NODE_ENV = 'test';
        var arg = setts.script || vars_1.app.config.$cli.args[1], config;
        if (typeof arg === 'string') {
            // Normalize path to forward slashes
            arg = arg.replace(/\\/g, '/');
        }
        (0, cfg_1.cfg_prepairSettings)(setts, arg);
        config = (0, cfg_1.cfg_loadConfig)(setts);
        if ((0, cfg_1.cfg_hasScripts)(setts)) {
            // running via cli or atma-action, take `env`/`$config` from config
            (0, cfg_1.cfg_suiteInfoFromConfig)(setts, config);
        }
        else {
            // Parse all from suites, as no scripts via cli or atma-action
            (0, cfg_1.cfg_getScripts)(setts, config);
            if (arg && !(config.suites && config.suites[arg]))
                return done('Argument is not resolved as a script, nor as a suite name: ' + arg);
            if (arg) {
                var suites = config.suites;
                for (var key in suites) {
                    if (key !== arg)
                        delete suites[key];
                }
                setts.suites = (0, cfg_1.cfg_parseSuites)(suites, setts.base);
            }
        }
        node_vars_1.NodeVars.configs = (0, cfg_1.cfg_split)(setts);
        if (node_vars_1.NodeVars.configs.length === 0) {
            vars_1.logger.log('<config>', config);
            return done('No scripts to test');
        }
        vars_1.global.include = vars_1.include
            .instance(setts.base)
            .setBase(setts.base);
        if (setts.$config && setts.$config.includejs) {
            vars_1.include.cfg(setts.$config.includejs);
        }
        node_vars_1.NodeVars.suite = new Suite_1.RunnerSuite(node_vars_1.NodeVars.configs, {
            ...setts,
            isAction: setts?.action !== 'test'
        });
        // run configuration only if has suites, otherwise configuration will be run by the root suite
        var cfg = config.suites && config, runCfg = cfg_2.cfg_runConfigurationScript;
        runCfg('$before', cfg, function () {
            node_vars_1.NodeVars.suite.run(function (exitCode) {
                runCfg('$after', cfg, function () {
                    process.exit(exitCode);
                });
            });
        });
    }
};
exports.AtmaAction = AtmaAction;
process.on('uncaughtException', function (error) {
    console.error(error.stack || error);
    if (node_vars_1.NodeVars.suite.watch) {
        return;
    }
    process.exit(1);
});
process.on('unhandledRejection', function (error) {
    console.error(error.stack || error);
    if (node_vars_1.NodeVars.suite.watch) {
        return;
    }
    process.exit(1);
});
//** Copy export to globals to make it singleton to be Module Loader agnostic. */
if (vars_1.global.atma?.utest_action) {
    exports.AtmaAction = AtmaAction = vars_1.global.atma?.utest_action;
}
else {
    (vars_1.global.atma ?? {}).utest_action = AtmaAction;
}
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_node_action === module.exports) {
        // do nothing if
    } else if (__isObj(_src_node_action) && __isObj(module.exports)) {
        Object.assign(_src_node_action, module.exports);
    } else {
        _src_node_action = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js

"use strict";
_src_libs_node;
_src_assert_assert_node;
_src_UTest;
const action_1 = _src_node_action;
module.exports = action_1.AtmaAction;


}());
// end:source ./RootModule.js
