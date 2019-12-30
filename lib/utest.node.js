
// source ./RootModule.js
(function(){
	
	var _src_Options = {};
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
	var exports = {};
	var module = { exports: exports };
	global.sinon = require('sinon');
global.assert = require('assertion');
global.DomTest = require('domtest');
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_libs_node) && isObject(module.exports)) {
		Object.assign(_src_libs_node, module.exports);
		return;
	}
	_src_libs_node = module.exports;
}());
// end:source ./ModuleSimplified.js


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
var _src_assert_wrapper;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vars_1 = _src_vars;
var atma_utils_1 = require("atma-utils");
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
var _src_utils_rgx;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function rgx_fromString(str, flags) {
    return new RegExp(str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), flags);
}
exports.rgx_fromString = rgx_fromString;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_rgx) && isObject(module.exports)) {
		Object.assign(_src_utils_rgx, module.exports);
		return;
	}
	_src_utils_rgx = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_assert_assert_node;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
_src_assert_wrapper;
var vars_1 = _src_vars;
var atma_utils_1 = require("atma-utils");
var rgx_1 = _src_utils_rgx;
vars_1.assert.resolveData = function (stackData, base) {
    var data = atma_utils_1.obj_extend({}, stackData), stack = stackData.stack.split('\n').splice(1), rgx_http = /http:\/\/([^\/]+)\//, rgx_local = rgx_1.rgx_fromString(base.replace('file:///', '')), rgx_file = /([^\(@]+\:\d+(\:\d+)?)\)?$/;
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

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_assert_assert_node) && isObject(module.exports)) {
		Object.assign(_src_assert_assert_node, module.exports);
		return;
	}
	_src_assert_assert_node = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_xhr;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var atma_utils_1 = require("atma-utils");
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
var atma_utils_1 = require("atma-utils");
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
var atma_utils_1 = require("atma-utils");
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
var atma_utils_1 = require("atma-utils");
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
    return UTest(utest);
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
var atma_utils_1 = require("atma-utils");
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
var atma_utils_1 = require("atma-utils");
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
var atma_utils_1 = require("atma-utils");
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
    var isTimeouted = false, isProcessed = false, 
    // in case http requests are busy, take some more time
    jam = 5, fn = function () {
        clearTimeout(timeout);
        if (isTimeouted || isProcessed)
            return;
        isProcessed = true;
        callback.apply(null, arguments);
    };
    var timeout = wait(), future = {
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
        return setTimeout(onTimeout, msTimeout || Options_1._options.timeout);
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
var _src_utils_array;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var atma_utils_1 = require("atma-utils");
function arr_isEmpty(array) {
    if (atma_utils_1.is_Array(array) === false)
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

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_array) && isObject(module.exports)) {
		Object.assign(_src_utils_array, module.exports);
		return;
	}
	_src_utils_array = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_node_utils_cfg;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vars_1 = _src_vars;
var array_1 = _src_utils_array;
var atma_utils_1 = require("atma-utils");
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
        var extensions = [
            '.test',
            '.test.js',
            '.test.ts',
            '.spec.js',
            '.spec.ts',
        ];
        for (var i = 0; i < extensions.length; i++) {
            var x = resolveFileByNameWithExtension(path + extensions[i]);
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
    if (!array_1.arr_isEmpty(config.nodeScripts))
        return true;
    if (!array_1.arr_isEmpty(config.domScripts))
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
    setts.env = array_1.arr_distinctConcat(setts.env, config.env);
    if (config.suites == null) {
        setts.$config = config.$config;
        setts.exec = config.exec;
        recalculateExecScripts(setts);
        return;
    }
    var path = first(setts.nodeScripts) || first(setts.domScripts), suite = suite_getForPath(config.suites, path);
    if (suite) {
        setts.env = array_1.arr_distinctConcat(setts.env, suite.env);
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
    if (!array_1.arr_isEmpty(config.domScripts) && !config.node) {
        configs.push({
            exec: 'browser',
            env: config.env,
            scripts: config.domScripts,
            base: config.base || config.cwd,
            $config: config.$config
        });
    }
    if (!array_1.arr_isEmpty(config.nodeScripts) && !config.browser) {
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
var watching = [];
function watch(base, resources, callback) {
    base = new atma_utils_1.class_Uri(base);
    resources.forEach(function (url) {
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
        var filename = file.uri.toLocalFile();
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
    if (typeof test !== 'string')
        return false;
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
        if (atma_utils_1.is_Array(suites)) {
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
    function normalize(x, name) {
        if (name === void 0) { name = null; }
        if (typeof x.env === 'string')
            x.env = [x.env];
        if (name != null)
            x.name = x.name || name;
    }
    return config;
}
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_node_utils_cfg) && isObject(module.exports)) {
		Object.assign(_src_node_utils_cfg, module.exports);
		return;
	}
	_src_node_utils_cfg = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_node_node_vars;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeVars = {
    suite: null,
    configs: null
};
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_node_node_vars) && isObject(module.exports)) {
		Object.assign(_src_node_node_vars, module.exports);
		return;
	}
	_src_node_node_vars = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_node_utils_logger;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vars_1 = _src_vars;
var color_1 = _src_utils_color;
var diff = null;
console.print = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
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
    var str = diff
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
                    return color_1.Color.bg_cyan("[" + code + "]");
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

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_node_utils_logger) && isObject(module.exports)) {
		Object.assign(_src_node_utils_logger, module.exports);
		return;
	}
	_src_node_utils_logger = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_node_Runner;
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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var atma_utils_1 = require("atma-utils");
var vars_1 = _src_vars;
var logger_1 = _src_node_utils_logger;
var str_1 = _src_utils_str;
exports.status_blank = 1;
exports.status_connecting = 2;
exports.status_connected = 3;
exports.status_prepair = 4;
exports.status_testing = 5;
exports.status_ready = 6;
function utest_resolveFiles(config) {
    var files = [];
    if (atma_utils_1.is_Array(config)) {
        for (var i = 0, x, imax = config.length; i < imax; i++) {
            x = config[i];
            files = files.concat(utest_resolveFiles(x));
        }
        return files;
    }
    if (config.fork) {
        // no sub files
        return [];
    }
    var scripts = config.scripts, base = config.base;
    base = new atma_utils_1.class_Uri(base);
    for (var i = 0, x, imax = scripts.length; i < imax; i++) {
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
var Runner = /** @class */ (function (_super) {
    __extends(Runner, _super);
    function Runner(config) {
        var _this = _super.call(this) || this;
        _this.config = config;
        _this.status = exports.status_blank;
        _this.files = utest_resolveFiles(config);
        _this.suites = atma_utils_1.is_Array(config) ? config : [config];
        _this.suites.forEach(function (x) {
            x.files = utest_resolveFiles(x);
        });
        return _this;
    }
    Runner.prototype.notifyTest = function (url) {
        var name = url.replace(this.config.base, '');
        vars_1.logger.log('Test: ', str_1.color(templateObject_1 || (templateObject_1 = __makeTemplateObject(["bold<cyan<", ">>"], ["bold<cyan<", ">>"])), name));
    };
    Runner.prototype.onComplete = function (stats) {
        this.status = exports.status_ready;
        function count(key) {
            var sum = 0;
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
            var aggr = [];
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
        var total = count('total'), failed = count('failed'), timeouts = count('timeouts'), callbacks = count('callbacks'), errors = count('errors'), browsers = stats.length;
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
        vars_1.logger
            .log(str_1.color(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\nbold<", "<Done.>>"], ["\\n\\nbold<", "<Done.>>"])), failed ? 'red' : 'green'))
            .log(str_1.color(templateObject_3 || (templateObject_3 = __makeTemplateObject(["bold<Assertions>: bold<green<", ">>(bold<red<", ">>)"], ["bold<Assertions>: bold<green<", ">>(bold<red<", ">>)"])), Math.max(total - failed, 0), failed))
            .log(str_1.color(templateObject_4 || (templateObject_4 = __makeTemplateObject(["bold<Timeouts>: bold<", "<", ">>"], ["bold<Timeouts>: bold<", "<", ">>"])), timeouts ? 'red' : 'green', timeouts))
            .log(str_1.color(templateObject_5 || (templateObject_5 = __makeTemplateObject(["bold<Failed Callbacks>: bold<green<", ">>"], ["bold<Failed Callbacks>: bold<green<", ">>"])), callbacks));
        this.failed = failed;
        this.stats = stats;
        this.trigger('complete', this);
    };
    Runner.prototype.getResources = function () {
        var _a, _b, _c;
        if (this.stats == null) {
            return [];
        }
        var resources = this.stats.resources
            || ((_a = this.stats[0]) === null || _a === void 0 ? void 0 : _a.resources)
            || ((_c = (_b = this).getResources) === null || _c === void 0 ? void 0 : _c.call(_b))
            || [];
        return resources;
    };
    // assertion events
    Runner.prototype.onFailure = function (data) {
        if (data.stack == null) {
            data.stack = '';
        }
        var base = this.suites[0].base || '';
        data = vars_1.assert.resolveData(data, base);
        vars_1.logger.log('');
        if ('actual' in data || 'expected' in data) {
            var actual = data.actual, expect = data.expected;
            if (typeof expect === 'string'
                && typeof actual === 'string'
                && expect.length > 20
                && actual.length > 10) {
                logger_1.log_stringDiff(expect, actual);
            }
            else {
                var msg = '%s bold<red<↔>> %s';
                vars_1.logger.log(str_1.color(templateObject_6 || (templateObject_6 = __makeTemplateObject(["", ""], ["", ""])), msg), data.actual, data.expected);
            }
        }
        if (data.message && data.generatedMessage !== true)
            vars_1.logger.log(str_1.color(templateObject_7 || (templateObject_7 = __makeTemplateObject([" bold<red<::>> "], [" bold<red<::>> "]))) + data.message.yellow);
        if (data.file && data.line != null) {
            var path = data
                .file
                .replace(/(\/)?utest\//i, '$1')
                .replace(/\?.+/, '')
                .replace(/^\//, ''), uri = new atma_utils_1.class_Uri(base).combine(path);
            if (vars_1.io.File.exists(uri)) {
                var source = vars_1.io.File.read(uri), lines = source.split(/\r\n|\r|\n/g), line = lines[data.line - 1], code = line && line.trim();
                vars_1.logger
                    .log(str_1.color(templateObject_8 || (templateObject_8 = __makeTemplateObject(["  bold<", ">"], ["  bold<", ">"])), path))
                    .log(str_1.color(templateObject_9 || (templateObject_9 = __makeTemplateObject(["  bold<cyan< \u2192 >> bold<", " |> bold<red< ", " >>"], ["  bold<cyan< \u2192 >> bold<", " |> bold<red< ", " >>"])), data.line + 1, code))
                    .log('');
            }
            return;
        }
    };
    Runner.prototype.onSuccess = function () {
        process.stdout.write(str_1.color(templateObject_10 || (templateObject_10 = __makeTemplateObject(["bold<green< |>>"], ["bold<green< |>>"]))));
    };
    return Runner;
}(atma_utils_1.class_EventEmitter));
exports.Runner = Runner;
;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_node_Runner) && isObject(module.exports)) {
		Object.assign(_src_node_Runner, module.exports);
		return;
	}
	_src_node_Runner = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_node_utils_io;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var atma_utils_1 = require("atma-utils");
var dfr, client;
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
    var port = config.port || 5777, url = "http://localhost:" + port + "/node", socket = client.connect(url, {
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

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_node_utils_io) && isObject(module.exports)) {
		Object.assign(_src_node_utils_io, module.exports);
		return;
	}
	_src_node_utils_io = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_node_utils_net;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TIMEOUT = 500;
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

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_node_utils_net) && isObject(module.exports)) {
		Object.assign(_src_node_utils_net, module.exports);
		return;
	}
	_src_node_utils_net = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_node_utils_slave;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vars_1 = _src_vars;
var net_1 = _src_node_utils_net;
var PORT = 5777, HOST = '127.0.0.1';
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
    var url = "http://" + HOST + ":" + PORT + "/utest/";
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
    net_1.net_portIsAvailable(HOST, PORT, function (state) {
        if (state === false)
            return callback();
        setTimeout(function () {
            ensurePortIsBusy(callback, ++tries);
        }, 300);
    });
}
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_node_utils_slave) && isObject(module.exports)) {
		Object.assign(_src_node_utils_slave, module.exports);
		return;
	}
	_src_node_utils_slave = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_node_RunnerClient;
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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Runner_1 = _src_node_Runner;
var io_1 = _src_node_utils_io;
var slave_1 = _src_node_utils_slave;
var vars_1 = _src_vars;
var str_1 = _src_utils_str;
var RunnerClient = /** @class */ (function (_super) {
    __extends(RunnerClient, _super);
    function RunnerClient(config) {
        var _this = _super.call(this, config) || this;
        _this.suites.forEach(function (suite) {
            var key, val, cfg = suite.$config;
            for (key in cfg) {
                val = cfg[key];
                if (typeof val === 'function') {
                    cfg[key] = val.toString();
                }
            }
        });
        return _this;
    }
    RunnerClient.prototype.run = function (done) {
        var _this = this;
        this.status = Runner_1.status_connecting;
        var config = this.config, port = config.port || 5777;
        io_1.io_connect(this.config)
            .fail(function (error) {
            io_1.io_clean();
            if (_this.startServer === true) {
                var msg = "Test server connection error - http://localhost:" + port + "/utest";
                done(msg);
                return;
            }
            _this.startServer = true;
            vars_1.logger.log(str_1.color(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<utest:server not started> bold<green<starting...>>"], ["<utest:server not started> bold<green<starting...>>"]))));
            slave_1.slave_start(function (error) {
                if (error)
                    return done('Failed to start server: ' + error);
                this.run(done);
            });
        })
            .done(function (socket) {
            vars_1.logger.log(str_1.color(templateObject_2 || (templateObject_2 = __makeTemplateObject(["bold<green<server connected>>"], ["bold<green<server connected>>"]))));
            _this.socket = socket;
            socket
                .on('error', function (error) {
                vars_1.logger.error('Socket error', error);
                io_1.io_clean();
            })
                .on('server:utest:end', function (stats) {
                _this.onComplete(stats);
            })
                .on('server:error', function (message) {
                _this.socket.disconnect();
                vars_1.logger.error(message);
                done(1);
            })
                .on('server:log', function (type, args) {
                var fn = console[type] || console.log;
                fn.apply(console, args);
            })
                .on('slave:start', function (stats) {
                var message = str_1.color(templateObject_3 || (templateObject_3 = __makeTemplateObject(["bold<", " ", ">"], ["bold<", " ", ">"])), stats.userAgent.browser.name, stats.userAgent.browser.version);
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
                .on('slave:utest:script', function (info) {
                _this.notifyTest(info.script);
            })
                .on('slave:assert:failure', function (args) {
                var data = args[0];
                _this.onFailure(data);
            })
                .on('slave:assert:success', _this.onSuccess.bind(_this));
            // RUN
            _this.status = Runner_1.status_connected;
            _this.run = _this.runTests;
            _this.runTests();
        });
    };
    RunnerClient.prototype.runTests = function () {
        vars_1.logger.log(str_1.color(templateObject_4 || (templateObject_4 = __makeTemplateObject(["bold<-->--bold<-->--bold<-->--bold<--> yellow<client>"], ["bold<-->--bold<-->--bold<-->--bold<--> yellow<client>"]))), str_1.color(templateObject_5 || (templateObject_5 = __makeTemplateObject(["bold<", ">"], ["bold<", ">"])), Date.format(new Date(), 'HH:mm:ss')), '\n');
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
    };
    return RunnerClient;
}(Runner_1.Runner));
exports.RunnerClient = RunnerClient;
;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_node_RunnerClient) && isObject(module.exports)) {
		Object.assign(_src_node_RunnerClient, module.exports);
		return;
	}
	_src_node_RunnerClient = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_node_RunnerFork;
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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Runner_1 = _src_node_Runner;
var vars_1 = _src_vars;
var atma_utils_1 = require("atma-utils");
var str_1 = _src_utils_str;
var RunnerFork = /** @class */ (function (_super) {
    __extends(RunnerFork, _super);
    function RunnerFork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.socket = null;
        _this.failed = 0;
        return _this;
    }
    RunnerFork.prototype.run = function (done) {
        var self = this, cfgPath = this.config.fork, base = this.config.cwd, Fork = require('child_process').fork;
        vars_1.logger
            .log('\t\t\t\t>'.bg_yellow)
            .log('Fork'.bg_yellow.black, str_1.color(templateObject_1 || (templateObject_1 = __makeTemplateObject(["bold<", ">"], ["bold<", ">"])), atma_utils_1.class_Uri.combine(base, cfgPath)))
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
    };
    return RunnerFork;
}(Runner_1.Runner));
exports.RunnerFork = RunnerFork;
;
var templateObject_1;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_node_RunnerFork) && isObject(module.exports)) {
		Object.assign(_src_node_RunnerFork, module.exports);
		return;
	}
	_src_node_RunnerFork = module.exports;
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
var _src_node_RunnerNode;
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
var vars_1 = _src_vars;
var Runner_1 = _src_node_Runner;
var atma_utils_1 = require("atma-utils");
var UTestVars_1 = _src_UTestVars;
var cfg_1 = _src_utils_cfg;
var fn_1 = _src_utils_fn;
var UTest_1 = _src_UTest;
var RunnerNode = /** @class */ (function (_super) {
    __extends(RunnerNode, _super);
    function RunnerNode(config) {
        var _this = _super.call(this, config) || this;
        vars_1.assert.onsuccess = _this.onSuccess.bind(_this);
        vars_1.assert.onfailure = _this.onFailure.bind(_this);
        _this.process = _this.process.bind(_this);
        _this.runTests = _this.runTests.bind(_this);
        _this.singleComplete = _this.singleComplete.bind(_this);
        _runner = _this;
        return _this;
    }
    RunnerNode.prototype.run = function () {
        if (Runner_1.status_ready !== this.status && Runner_1.status_blank !== this.status) {
            vars_1.logger.warn('Node is busy ... ', this.status);
            return;
        }
        this.status = Runner_1.status_prepair;
        this.runTests();
    };
    RunnerNode.prototype.runTests = function () {
        this.index = -1;
        this.status = Runner_1.status_testing;
        this.stats = [];
        this.clearResources();
        _suites = this.suites;
        _suiteIndex = -1;
        suite_next(this.process);
    };
    RunnerNode.prototype.process = function () {
        // go to next suite, otherwise process file from current one
        if (++this.index > this.files.length - 1) {
            this.index = -1;
            suite_next(this.process);
            return;
        }
        var that = this, url = this.files[this.index].uri.toString();
        vars_1.assert.reset();
        UTestVars_1.UTestVars.clear();
        vars_1.include.removeFromCache(url);
        this.notifyTest(url);
        var resource = vars_1.include
            .cfg('path', _suite.base)
            .instance(url)
            .js(url)
            .done(function (resp) {
            process.nextTick(function () {
                UTest_1.UTest.run(that.singleComplete);
            });
        });
        this.resources.push(resource);
    };
    RunnerNode.prototype.singleComplete = function () {
        this.stats.push({
            url: this.files[this.index].uri.toString(),
            total: vars_1.assert.total,
            failed: vars_1.assert.failed,
            timeouts: vars_1.assert.timeouts,
            errors: vars_1.assert.errors,
            callbacks: vars_1.assert.callbacks,
        });
        this.process();
    };
    RunnerNode.prototype.clearResources = function () {
        this.resources && this.resources.forEach(resource_clear);
        this.envResource && resource_clear(this.envResource);
        this.resources = [];
        this.envResource = null;
    };
    RunnerNode.prototype.getResources = function () {
        var arr = [];
        this.envResource && resource_aggrIncludes(this.envResource, arr);
        this.resources.forEach(function (resource) {
            resource_aggrIncludes(resource, arr);
        });
        Object
            .keys(require.cache)
            .filter(function (x) {
            // Do not listen for changes later in installed node modules
            return /[\\/]node_modules[\\/]/i.test(x) == false;
        })
            .forEach(function (x) {
            var path = new atma_utils_1.class_Uri(x).toString();
            arr.push(path);
        });
        return arr;
    };
    return RunnerNode;
}(Runner_1.Runner));
exports.RunnerNode = RunnerNode;
;
function resource_clear(resource) {
    var bin = vars_1.include.getResources();
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
            if (data.isCyclic) {
                return;
            }
            resource_clear(data.resource);
        });
    }
    if (typeof require !== 'undefined' && require.cache) {
        for (var key in require.cache) {
            delete require.cache[key];
        }
    }
}
function resource_aggrIncludes(resource, aggr) {
    if (resource.url && aggr.indexOf(resource.url) === -1 && NODE_BUILTINS.indexOf(resource.url) === -1) {
        aggr.push(resource.url);
    }
    if (resource.includes) {
        resource.includes.forEach(function (data) {
            if (data.isCyclic) {
                return;
            }
            resource_aggrIncludes(data.resource, aggr);
        });
    }
}
function suite_loadEnv(runner, suite, callback) {
    var base = suite.base, env = suite.env;
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
    var resource = vars_1.include
        .instance(base)
        .setBase(base);
    base = new atma_utils_1.class_Uri(base);
    var pckg = env
        .map(function (x) {
        var _a = x.split('::'), src = _a[0], alias = _a[1], uri = base.combine(src[0] === '/' ? src.substring(1) : src);
        return [uri, alias];
    })
        .filter(function (arr) {
        var uri = arr[0];
        if (vars_1.io.File.exists(uri) === false) {
            vars_1.logger.warn('Resource from Environment - 404 -', uri.toLocalFile());
            return false;
        }
        return true;
    })
        .map(function (arr) {
        var uri = arr[0], alias = arr[1];
        return uri.toString() + (alias ? '::' + alias : '');
    });
    resource.inject(pckg).done(function (resp) {
        setTimeout(function () {
            Object
                .keys(resp)
                .filter(function (key) { return key !== 'load'; })
                .forEach(function (key) {
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
            });
            callback(resp);
        }, 0);
    });
    runner.envResource = resource;
}
var _suites = null, _suite = null, _suiteIndex = -1, _runner = null;
function suite_next(callback) {
    _suite = _suites[++_suiteIndex];
    if (_suite == null) {
        _runner.onComplete(_runner.stats);
        return;
    }
    _runner.files = _suite.files;
    _runner.config = _suite;
    fn_1.fn_waterfall(function (done) {
        cfg_1.cfg_runConfigurationScript('$after', _suites[_suiteIndex - 1], done);
    }, function (done) {
        suite_loadEnv(_runner, _suite, done);
    }, function (done) {
        cfg_1.cfg_runConfigurationScript('$before', _suite, done);
    }, callback);
}
var NODE_BUILTINS = [
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

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_node_RunnerNode) && isObject(module.exports)) {
		Object.assign(_src_node_RunnerNode, module.exports);
		return;
	}
	_src_node_RunnerNode = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_node_Suite;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Runner_1 = _src_node_Runner;
var vars_1 = _src_vars;
var cfg_1 = _src_node_utils_cfg;
var logger_1 = _src_node_utils_logger;
var RunnerClient_1 = _src_node_RunnerClient;
var RunnerFork_1 = _src_node_RunnerFork;
var str_1 = _src_utils_str;
var RunnerNode_1 = _src_node_RunnerNode;
var RunnerSuite = /** @class */ (function () {
    function RunnerSuite(configs, settings) {
        this.counter = 0;
        this.runners = [];
        this.forks = null;
        this.cfgNode = null;
        this.cfgBrowser = null;
        /**
         *	this.watch
         *	this.base
         */
        this.handleConfig(configs);
        this.base = settings.base;
        this.watch = settings.watch;
        this.onComplete = this.onComplete.bind(this);
        this.process = this.process.bind(this);
        this.runTests = this.runTests.bind(this);
        vars_1.logger(90).log('RunnerSuite:', configs, settings);
    }
    RunnerSuite.prototype.closeSockets = function () {
        this.runners.forEach(function (x) {
            if (x.socket != null) {
                x.socket.disconnect();
            }
        });
    };
    RunnerSuite.prototype.getFailed = function () {
        return this.runners.reduce(function (aggr, x) {
            return aggr + (x.failed || 0);
        }, 0);
    };
    RunnerSuite.prototype.getSucceeded = function () {
        return this.runners.reduce(function (aggr, x) {
            return aggr + x.stats.reduce(function (aggr, x) {
                return aggr + x.total;
            }, 0);
        }, 0);
    };
    RunnerSuite.prototype.getResources = function () {
        return this.runners.reduce(function (aggr, x) {
            return aggr.concat(x.getResources());
        }, []);
    };
    RunnerSuite.prototype.onComplete = function () {
        var _this = this;
        if (this.watch !== true) {
            this.closeSockets();
            var failed = this.getFailed();
            var succeeded = this.getSucceeded();
            vars_1.logger
                .log('')
                .log(failed === 0
                ? str_1.color(templateObject_1 || (templateObject_1 = __makeTemplateObject(["bold<green<Success ", ">>"], ["bold<green<Success ", ">>"])), succeeded) : str_1.color(templateObject_2 || (templateObject_2 = __makeTemplateObject(["bold<red<Failed ", "/", "/>>"], ["bold<red<Failed ", "/", "/>>"])), failed, succeeded));
            this.callback(failed);
            return;
        }
        closeSocketsOnExit(this);
        var resources = cfg_1.watch(this.base, this.getResources(), function (path) {
            var dateStr = Date.format(new Date, 'HH:mm:ss').bg_cyan;
            var message = "#" + ++_this.counter + "  " + dateStr + "  modified " + str_1.color(templateObject_3 || (templateObject_3 = __makeTemplateObject(["bold<", ">"], ["bold<", ">"])), path);
            if (_this.isIdle() === false) {
                vars_1.logger.log(message);
                vars_1.logger.log(str_1.color(templateObject_4 || (templateObject_4 = __makeTemplateObject(["... but the RunnerSuite is red<busy>"], ["... but the RunnerSuite is red<busy>"]))));
                return;
            }
            logger_1.log_clearStd();
            vars_1.logger.log(message);
            _this.runTests();
        });
        vars_1.logger.log(str_1.color(templateObject_5 || (templateObject_5 = __makeTemplateObject(["yellow< - watcher active. ", " Files>"], ["yellow< - watcher active. ", " Files>"])), resources.length));
    };
    RunnerSuite.prototype.process = function () {
        var runner = this.runners[++this.index];
        if (runner == null) {
            this.onComplete();
            return;
        }
        runner.run(this.process);
    };
    RunnerSuite.prototype.runTests = function () {
        this.index = -1;
        this.process();
    };
    RunnerSuite.prototype.run = function (done) {
        this.callback = done;
        this.runners = [];
        if (this.cfgBrowser)
            this.runners.push(new RunnerClient_1.RunnerClient(this.cfgBrowser));
        if (this.cfgNode)
            this.runners.push(new RunnerNode_1.RunnerNode(this.cfgNode));
        if (this.forks) {
            var runners = this.forks.map(function (cfg) {
                return new RunnerFork_1.RunnerFork(cfg);
            });
            this.runners = this.runners.concat(runners);
        }
        this.runners.forEach(function (runner) {
            runner.on('complete', this.process);
        }, this);
        if (this.watch)
            logger_1.log_clearStd();
        this.runTests();
    };
    RunnerSuite.prototype.handleConfig = function (mix) {
        if (Array.isArray(mix)) {
            for (var i = 0, imax = mix.length; i < imax; i++) {
                this.handleSingle(mix[i]);
            }
            return;
        }
        this.handleSingle(mix);
    };
    RunnerSuite.prototype.handleSingle = function (config) {
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
    };
    RunnerSuite.prototype.isIdle = function () {
        var isBusy = this.runners.some(function (x) { return x.status === Runner_1.status_testing || x.status === Runner_1.status_prepair; });
        return isBusy === false;
    };
    return RunnerSuite;
}());
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
var closeSocketsOnExit = function (suite) {
    closeSocketsOnExit = function () { };
    var readLine = require('readline');
    if (process.platform === 'win32') {
        var rl = readLine.createInterface({
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
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_node_Suite) && isObject(module.exports)) {
		Object.assign(_src_node_Suite, module.exports);
		return;
	}
	_src_node_Suite = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_node_action;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UTest_1 = _src_UTest;
var vars_1 = _src_vars;
var cfg_1 = _src_node_utils_cfg;
var node_vars_1 = _src_node_node_vars;
var Suite_1 = _src_node_Suite;
var cfg_2 = _src_utils_cfg;
/**
 *	Atma.Toolkit Action entry
 */
exports.AtmaAction = {
    UTest: UTest_1.UTest,
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
                }, {
                    exec: 'node',
                    env: 'src/foo.js::Foo',
                    tests: 'src/node/**.test'
                }
            ]
        }
    },
    process: function (setts, done) {
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
        cfg_1.cfg_prepairSettings(setts, arg);
        config = cfg_1.cfg_loadConfig(setts);
        if (cfg_1.cfg_hasScripts(setts)) {
            // running via cli or atma-action, take `env`/`$config` from config
            cfg_1.cfg_suiteInfoFromConfig(setts, config);
        }
        else {
            // Parse all from suites, as no scripts via cli or atma-action
            cfg_1.cfg_getScripts(setts, config);
            if (arg && !(config.suites && config.suites[arg]))
                return done('Argument is not resolved as a script, nor as a suite name: ' + arg);
            if (arg) {
                var suites = config.suites;
                for (var key in suites) {
                    if (key !== arg)
                        delete suites[key];
                }
                setts.suites = cfg_1.cfg_parseSuites(suites, setts.base);
            }
        }
        node_vars_1.NodeVars.configs = cfg_1.cfg_split(setts);
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
        node_vars_1.NodeVars.suite = new Suite_1.RunnerSuite(node_vars_1.NodeVars.configs, setts);
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
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_node_action) && isObject(module.exports)) {
		Object.assign(_src_node_action, module.exports);
		return;
	}
	_src_node_action = module.exports;
}());
// end:source ./ModuleSimplified.js

"use strict";
_src_libs_node;
_src_assert_assert_node;
_src_UTest;
var action_1 = _src_node_action;
module.exports = action_1.AtmaAction;


}());
// end:source ./RootModule.js
