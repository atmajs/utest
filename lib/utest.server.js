
// source ./RootModule.js
(function(){
	
	var _src_server_BrowserTunnel = {};
var _src_server_ServerUTest = {};
var _src_server_SocketListener = {};
var _src_server_actions = {};
var _src_utils_color = {};
var _src_utils_process = {};
var _src_utils_str = {};
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
var _src_server_actions;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vars_1 = _src_vars;
var process_1 = _src_utils_process;
var _actions = {
    registerService: function (route, handlersPath) {
        vars_1.logger(90)
            .log('<utest> register service')
            .log(route, handlersPath);
        vars_1.atma
            .server
            .app
            .handlers
            .registerService(route, handlersPath);
    },
    include: function (sources, done) {
        var base = vars_1.io.env.currentDir.toDir();
        vars_1.include
            .instance(base)
            .setBase(base)
            .js(sources)
            .done(function () {
            var _a;
            (_a = done) === null || _a === void 0 ? void 0 : _a();
        });
    },
    eval: function (source, done) {
        var base = vars_1.io.env.currentDir.toDir();
        vars_1.global.include = vars_1.include
            .instance(base)
            .setBase(base);
        var name, result;
        source = source.replace(/^function\s*\(\s*([\w\d_$]+)\s*\)\s*\{/, function (full, cbname) {
            name = cbname;
            return '';
        });
        if (name == null) {
            try {
                eval('(' + source + '())');
            }
            catch (error) {
                vars_1.logger.error('<$config:eval>', error);
            }
            done();
            return;
        }
        source = source.replace(/\}\s*$/, '');
        try {
            result = new (Function(name, source))(done);
        }
        catch (error) {
            vars_1.logger.error('<$config:eval error>', error);
            return done(error);
        }
        return result;
    },
    process: function (params, done) {
        vars_1.logger.log('started');
        process_1.process_toggle(params, function () {
            done();
        });
    }
};
exports.Actions = {
    run: function (action, config) {
        var fn = _actions[action];
        if (typeof fn !== 'function') {
            vars_1.logger.error('<utest:server> unknown action', action);
            var done = arguments[arguments.length - 1];
            if (typeof done === 'function')
                done();
            return;
        }
        if (config && config.base)
            vars_1.include.cfg('path', config.base);
        fn.apply(null, Array.prototype.slice.call(arguments, 2));
    },
    register: function (action, worker) {
        _actions[action] = worker;
    }
};
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_server_actions) && isObject(module.exports)) {
		Object.assign(_src_server_actions, module.exports);
		return;
	}
	_src_server_actions = module.exports;
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
var _src_server_BrowserTunnel;
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var atma_utils_1 = require("atma-utils");
var vars_1 = _src_vars;
var str_1 = _src_utils_str;
var BrowserTunnel = /** @class */ (function (_super) {
    __extends(BrowserTunnel, _super);
    function BrowserTunnel(socket, logger) {
        var _this = _super.call(this) || this;
        _this.socket = socket
            .on('browser:log', function (type, args) {
            (logger[type] || logger.log).apply(logger, args);
        })
            .on('browser:utest:beforestart', function (data, done) {
            var config = data.config;
            //atma
            //	.server
            //	.app
            //	.handlers
            //	.subapps
            //	.get('/utest/')
            //	.value
            //	._app
            //	.config = config
            //	;
            vars_1.atma
                .server
                .app
                .getSubApp('/utest/')
                .config
                .$set('static', config.base);
            done();
        })
            .on('browser:utest:start', function (stats) {
            _this.trigger('start', stats);
        })
            .on('browser:utest:end', function (result) {
            _this.result = result;
            _this.trigger('end', _this, result);
        })
            .on('>server:utest:action', function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.trigger.apply(_this, __spreadArrays(['action'], args));
        })
            .on('browser:utest:script', _this.pipe('browser:utest:script'))
            .on('browser:assert:success', _this.pipe('browser:assert:success'))
            .on('browser:assert:failure', _this.pipe('browser:assert:failure'));
        return _this;
    }
    BrowserTunnel.prototype.run = function (config) {
        var socket = this.socket, that = this;
        socket.emit('server:utest:handshake', function (stats) {
            vars_1.logger(90).log(str_1.color(templateObject_1 || (templateObject_1 = __makeTemplateObject(["bold<cyan<UTest.tunnel - handshake - >>"], ["bold<cyan<UTest.tunnel - handshake - >>"]))), stats);
            if (stats.ready === 1) {
                socket.emit('server:utest', config);
                return;
            }
            that.result = {
                error: 'Slave is busy'
            };
            that.trigger('error', that, {
                message: 'Slave is busy'
            });
        });
    };
    BrowserTunnel.prototype.dispose = function () {
        this.socket.removeAllListeners();
        this.socket = null;
    };
    return BrowserTunnel;
}(atma_utils_1.class_EventEmitter));
exports.BrowserTunnel = BrowserTunnel;
var templateObject_1;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_server_BrowserTunnel) && isObject(module.exports)) {
		Object.assign(_src_server_BrowserTunnel, module.exports);
		return;
	}
	_src_server_BrowserTunnel = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_server_ServerUTest;
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
var BrowserTunnel_1 = _src_server_BrowserTunnel;
var actions_1 = _src_server_actions;
var atma_utils_1 = require("atma-utils");
var ServerUTest = /** @class */ (function (_super) {
    __extends(ServerUTest, _super);
    function ServerUTest(sockets, logger) {
        var _this = _super.call(this) || this;
        _this.onEnd = _this.onEnd.bind(_this);
        _this.onError = _this.onError.bind(_this);
        _this.onAction = _this.onAction.bind(_this);
        _this.index = 0;
        _this.tunnels = sockets.map(function (socket) {
            return new BrowserTunnel_1.BrowserTunnel(socket, logger)
                .on('start', this.pipe('slave:start'))
                .on('end', this.onEnd)
                .on('error', this.onError)
                .on('action', this.onAction)
                .on('browser:assert:success', this.pipe('browser:assert:success'))
                .on('browser:assert:failure', this.pipe('browser:assert:failure'))
                .on('browser:utest:start', this.pipe('browser:utest:start'))
                .on('browser:utest:script', this.pipe('browser:utest:script'));
        }, _this);
        return _this;
    }
    ServerUTest.prototype.onEnd = function (tunnel, result) {
        this.trigger('slave:end', result);
        this.process();
    };
    ServerUTest.prototype.onError = function (that, error) {
        this.trigger('slave:error', { message: 'Slave error', slave: error });
        this.process();
    };
    ServerUTest.prototype.onAction = function (action, config) {
        actions_1.Actions.run(action, config);
    };
    ServerUTest.prototype.stats = function () {
        return this.tunnels.map(function (x, index) {
            index !== 0 && (delete x.result.resources);
            return x.result;
        });
    };
    ServerUTest.prototype.run = function (config, done) {
        this.index = -1;
        this.config = config;
        this.onComplete = done;
        this.process();
    };
    ServerUTest.prototype.process = function () {
        if (++this.index > this.tunnels.length - 1) {
            this.trigger('server:utest:end', this.stats());
            this.dispose();
            this.onComplete && this.onComplete();
            return;
        }
        this.tunnels[this.index].run(this.config);
    };
    ServerUTest.prototype.dispose = function () {
        this.tunnels.forEach(function (x) {
            x.dispose();
        });
        this.tunnels = null;
    };
    return ServerUTest;
}(atma_utils_1.class_EventEmitter));
exports.ServerUTest = ServerUTest;
;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_server_ServerUTest) && isObject(module.exports)) {
		Object.assign(_src_server_ServerUTest, module.exports);
		return;
	}
	_src_server_ServerUTest = module.exports;
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
var _src_server_SocketListener;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vars_1 = _src_vars;
var actions_1 = _src_server_actions;
var ServerUTest_1 = _src_server_ServerUTest;
var color_1 = _src_utils_color;
var str_1 = _src_utils_str;
var __config;
var SocketListener = /** @class */ (function () {
    function SocketListener(socket, io, port) {
        if (__config) {
            socket.emit('server:error', 'Server is busy');
            socket.disconnect();
            return;
        }
        vars_1.logger.log(color_1.Color.green('<Node Client Connected>'));
        this.socket = socket
            .on('disconnect', this.disconnected)
            .on('client:utest', function (configs, $cli, done) {
            client_tryTest(io, socket, configs, $cli, done, port, 0);
        })
            .on('>server:utest:action', actions_1.Actions.run);
    }
    SocketListener.prototype.disconnected = function () {
        __config = null;
    };
    SocketListener.getCurrentConfig = function () {
        return __config;
    };
    return SocketListener;
}());
exports.SocketListener = SocketListener;
;
// private
var wait_COUNT = 10, wait_DURATION = 1000;
function Pipe(socket, event) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        vars_1.logger(90).log(str_1.color(templateObject_1 || (templateObject_1 = __makeTemplateObject(["bold<green<Socket.Pipe>>"], ["bold<green<Socket.Pipe>>"]))), event);
        socket.emit.apply(socket, __spreadArrays([event], args));
    };
}
var Logger = /** @class */ (function () {
    function Logger(socket) {
        for (var key in console) {
            this[key] = create(key);
        }
        function create(key) {
            var originalFn = console[key];
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                socket.emit('server:log', key, args);
                originalFn.apply(console, args);
            };
        }
    }
    return Logger;
}());
;
function client_tryTest(io, socket, configs, $cli, done, port, retryIndex) {
    __config = configs;
    var nsp = io.of('/utest-browser'), connections = nsp.connected, message;
    if (Object.keys(connections).length === 0) {
        if (retryIndex === 0 && $cli.params.workerAutostart) {
            var url = "http://localhost:5777/utest/";
            var spawn = require('child_process').spawn, commands = {
                darwin: 'open',
                win32: 'explorer.exe',
                linux: 'xdg-open'
            };
            spawn(commands[process.platform], [url]);
        }
        if (++retryIndex <= wait_COUNT) {
            message = "> Waiting for some slaves: " + retryIndex + "/" + wait_COUNT;
            socket.emit('server:log', 'warn', [message]);
            setTimeout(function () {
                client_tryTest(io, socket, configs, $cli, done, port, retryIndex);
            }, wait_DURATION);
            return;
        }
        __config = null;
        message = "No Slaves Captured - navigate to http://localhost:" + (port || 5777) + "/utest/";
        socket.emit('server:error', message);
        socket.disconnect();
        return;
    }
    var clients = [];
    for (var key in connections) {
        clients.push(connections[key]);
    }
    client_doTest(clients, socket, configs, done);
}
function client_doTest(clients, socket, config, done) {
    // clean resources cache
    vars_1.include.getResources().js = {};
    var utest = new ServerUTest_1.ServerUTest(clients, new Logger(socket));
    utest
        .on('slave:start', Pipe(socket, 'slave:start'))
        .on('slave:end', Pipe(socket, 'slave:end'))
        .on('slave:error', Pipe(socket, 'slave:error'))
        .on('server:utest:end', Pipe(socket, 'server:utest:end'))
        .on('browser:utest:script', Pipe(socket, 'slave:utest:script'))
        .on('browser:assert:failure', Pipe(socket, 'slave:assert:failure'))
        .on('browser:assert:success', Pipe(socket, 'slave:assert:success'));
    __config = config;
    utest.run(config, done);
}
var templateObject_1;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_server_SocketListener) && isObject(module.exports)) {
		Object.assign(_src_server_SocketListener, module.exports);
		return;
	}
	_src_server_SocketListener = module.exports;
}());
// end:source ./ModuleSimplified.js

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SocketListener_1 = _src_server_SocketListener;
include.exports = SocketListener_1.SocketListener;


}());
// end:source ./RootModule.js
