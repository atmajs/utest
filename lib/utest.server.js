
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
    process = __process[id] = new atma.shell.Process(options);
    process
        .always(function () {
        delete __process[id];
    })
        .on('process_exception', data => done(data.error))
        .on('process_ready', () => done(null, process));
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
var _src_server_actions;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_server_actions != null ? _src_server_actions : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actions = void 0;
const vars_1 = _src_vars;
const process_1 = _src_utils_process;
var _actions = {
    registerService(route, handlersPath) {
        (0, vars_1.logger)(90)
            .log('<utest> register service')
            .log(route, handlersPath);
        vars_1.atma
            .server
            .app
            .handlers
            .registerService(route, handlersPath);
    },
    include(sources, done) {
        var base = vars_1.io.env.currentDir.toDir();
        vars_1.include
            .instance(base)
            .setBase(base)
            .js(sources)
            .done(function () {
            done?.();
        });
    },
    eval(source, done) {
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
            let Ctor = Function(name, source);
            result = new Ctor(done);
        }
        catch (error) {
            vars_1.logger.error('<$config:eval error>', error);
            return done(error);
        }
        return result;
    },
    process: function (params, done) {
        vars_1.logger.log('started');
        (0, process_1.process_toggle)(params, function () {
            done();
        });
    }
};
exports.Actions = {
    run(action, config, ...args) {
        var fn = _actions[action];
        if (typeof fn !== 'function') {
            vars_1.logger.error('<utest:server> unknown action', action);
            let done = args[args.length - 1];
            if (typeof done === 'function') {
                done();
            }
            return;
        }
        if (config && config.base)
            vars_1.include.cfg('path', config.base);
        fn.apply(null, args);
    },
    register(action, worker) {
        _actions[action] = worker;
    }
};
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_server_actions === module.exports) {
        // do nothing if
    } else if (__isObj(_src_server_actions) && __isObj(module.exports)) {
        Object.assign(_src_server_actions, module.exports);
    } else {
        _src_server_actions = module.exports;
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
var _src_server_BrowserTunnel;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_server_BrowserTunnel != null ? _src_server_BrowserTunnel : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserTunnel = void 0;
const atma_utils_1 = require("atma-utils");
const vars_1 = _src_vars;
const str_1 = _src_utils_str;
class BrowserTunnel extends atma_utils_1.class_EventEmitter {
    socket;
    result;
    constructor(socket, logger) {
        super();
        this.socket = socket
            .on('browser:log', (type, args) => {
            (logger[type] || logger.log).apply(logger, args);
        })
            .on('browser:utest:beforestart', (data, done) => {
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
            .on('browser:utest:start', (stats) => {
            this.trigger('start', stats);
        })
            .on('browser:utest:end', (result) => {
            this.result = result;
            this.trigger('end', this, result);
        })
            .on('>server:utest:action', (...args) => {
            this.trigger('action', ...args);
        })
            .on('browser:utest:script', this.pipe('browser:utest:script'))
            .on('browser:assert:success', this.pipe('browser:assert:success'))
            .on('browser:assert:failure', this.pipe('browser:assert:failure'));
    }
    run(config) {
        var socket = this.socket, that = this;
        socket.emit('server:utest:handshake', function (stats) {
            (0, vars_1.logger)(90).log((0, str_1.color) `bold<cyan<UTest.tunnel - handshake - >>`, stats);
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
    }
    dispose() {
        this.socket.removeAllListeners();
        this.socket = null;
    }
}
exports.BrowserTunnel = BrowserTunnel;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_server_BrowserTunnel === module.exports) {
        // do nothing if
    } else if (__isObj(_src_server_BrowserTunnel) && __isObj(module.exports)) {
        Object.assign(_src_server_BrowserTunnel, module.exports);
    } else {
        _src_server_BrowserTunnel = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_server_ServerUTest;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_server_ServerUTest != null ? _src_server_ServerUTest : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerUTest = void 0;
const BrowserTunnel_1 = _src_server_BrowserTunnel;
const actions_1 = _src_server_actions;
const atma_utils_1 = require("atma-utils");
class ServerUTest extends atma_utils_1.class_EventEmitter {
    index;
    tunnels;
    config;
    onComplete;
    constructor(sockets, logger) {
        super();
        this.onEnd = this.onEnd.bind(this);
        this.onError = this.onError.bind(this);
        this.onAction = this.onAction.bind(this);
        this.index = 0;
        this.tunnels = sockets.map(function (socket) {
            return new BrowserTunnel_1.BrowserTunnel(socket, logger)
                .on('start', this.pipe('slave:start'))
                .on('end', this.onEnd)
                .on('error', this.onError)
                .on('action', this.onAction)
                .on('browser:assert:success', this.pipe('browser:assert:success'))
                .on('browser:assert:failure', this.pipe('browser:assert:failure'))
                .on('browser:utest:start', this.pipe('browser:utest:start'))
                .on('browser:utest:script', this.pipe('browser:utest:script'));
        }, this);
    }
    onEnd(tunnel, result) {
        this.trigger('slave:end', result);
        this.process();
    }
    onError(that, error) {
        this.trigger('slave:error', { message: 'Slave error', slave: error });
        this.process();
    }
    onAction(action, config, ...args) {
        actions_1.Actions.run(action, config, ...args);
    }
    stats() {
        return this.tunnels.map(function (x, index) {
            index !== 0 && (delete x.result.resources);
            return x.result;
        });
    }
    run(config, done) {
        this.index = -1;
        this.config = config;
        this.onComplete = done;
        this.process();
    }
    process() {
        if (++this.index > this.tunnels.length - 1) {
            this.trigger('server:utest:end', this.stats());
            this.dispose();
            this.onComplete && this.onComplete();
            return;
        }
        this.tunnels[this.index].run(this.config);
    }
    dispose() {
        this.tunnels.forEach(function (x) {
            x.dispose();
        });
        this.tunnels = null;
    }
}
exports.ServerUTest = ServerUTest;
;
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_server_ServerUTest === module.exports) {
        // do nothing if
    } else if (__isObj(_src_server_ServerUTest) && __isObj(module.exports)) {
        Object.assign(_src_server_ServerUTest, module.exports);
    } else {
        _src_server_ServerUTest = module.exports;
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
var _src_server_SocketListener;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_server_SocketListener != null ? _src_server_SocketListener : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketListener = void 0;
const vars_1 = _src_vars;
const actions_1 = _src_server_actions;
const ServerUTest_1 = _src_server_ServerUTest;
const color_1 = _src_utils_color;
const str_1 = _src_utils_str;
let __config;
class SocketListener {
    socket;
    constructor(socket, io, port) {
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
    disconnected() {
        __config = null;
    }
    static getCurrentConfig() {
        return __config;
    }
}
exports.SocketListener = SocketListener;
;
// private
let wait_COUNT = 10, wait_DURATION = 1000;
function Pipe(socket, event) {
    return function (...args) {
        (0, vars_1.logger)(90).log((0, str_1.color) `bold<green<Socket.Pipe>>`, event);
        socket.emit(event, ...args);
    };
}
class Logger {
    constructor(socket) {
        for (let key in console) {
            this[key] = create(key);
        }
        function create(key) {
            let originalFn = console[key];
            return function (...args) {
                socket.emit('server:log', key, args);
                originalFn.apply(console, args);
            };
        }
    }
}
;
function client_tryTest(io, socket, configs, $cli, done, port, retryIndex) {
    __config = configs;
    let nsp = io.of('/utest-browser');
    let connections = Array.from(nsp.sockets).map(([id, socket]) => socket);
    let message;
    if (Object.keys(connections).length === 0) {
        if (retryIndex === 0 && $cli.params.workerAutostart) {
            let url = `http://localhost:5777/utest/`;
            let spawn = require('child_process').spawn, commands = {
                darwin: 'open',
                win32: 'explorer.exe',
                linux: 'xdg-open'
            };
            spawn(commands[process.platform], [url]);
        }
        if (++retryIndex <= wait_COUNT) {
            message = `> Waiting for some slaves: ${retryIndex}/${wait_COUNT}`;
            socket.emit('server:log', 'warn', [message]);
            setTimeout(function () {
                client_tryTest(io, socket, configs, $cli, done, port, retryIndex);
            }, wait_DURATION);
            return;
        }
        __config = null;
        message = `No Slaves Captured - navigate to http://localhost:${port || 5777}/utest/`;
        socket.emit('server:error', message);
        socket.disconnect();
        return;
    }
    let clients = [];
    for (let key in connections) {
        clients.push(connections[key]);
    }
    client_doTest(clients, socket, configs, done);
}
function client_doTest(clients, socket, config, done) {
    // clean resources cache
    vars_1.include.getResources().js = {};
    let utest = new ServerUTest_1.ServerUTest(clients, new Logger(socket));
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
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_server_SocketListener === module.exports) {
        // do nothing if
    } else if (__isObj(_src_server_SocketListener) && __isObj(module.exports)) {
        Object.assign(_src_server_SocketListener, module.exports);
    } else {
        _src_server_SocketListener = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SocketListener_1 = _src_server_SocketListener;
include.exports = SocketListener_1.SocketListener;


}());
// end:source ./RootModule.js
