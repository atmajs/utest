
// source ./RootModule.js
(function(){
	
	
// source ./Header.js
var __register, __require, require;

(function(){

	// source ./path.js
	var path_getDir,
		path_resolveCurrent,
		path_normalize,
		path_resolveUrl,
		path_combine	
		;
	(function(){
		var isNodeJS = typeof process !== 'undefined' 
			&& typeof window === 'undefined' 
			&& typeof navigator === 'undefined';
	
		path_getDir = function(path) {
			return path.substring(0, path.lastIndexOf('/') + 1);
		};
	
		(function(){
			var current_;		
			if (isNodeJS === false) {
				path_resolveCurrent = function(){
					if (current_ != null) return current_;
	
					var fn = 'baseURI' in window.document
							? fromBase
							: fromLocation;
					return (current_ = path_sliceFilename(fn()));
				};
				function fromBase() {
					var path = window.document.baseURI;
					var i = path.indexOf('?');
					return i === -1 ? path : path.substring(0, i);
				}
				function fromLocation() {
					return window.location.origin + window.location.pathname;
				}
			}
			else {
			
				path_resolveCurrent = function(){
					if (current_ != null) return current_;
					return (current_ = path_win32Normalize(__dirname));
				};
			}
		}());
	
	
		path_normalize = function(path) {
			var path_ = path
				.replace(new RegExp("\\\\", "g"), '/')
				// remove double slashes, but not near protocol
				.replace(new RegExp("([^:\\/])\\/{2,}", "g"), '$1/')
				// './xx' to relative string
				.replace(new RegExp("^\\.\\/"), '')
				// join 'xx/./xx'
				.replace(new RegExp("\\/\\.\\//", "g"), '/')
				;
			path_ = path_collapse(path_);		
			return path_;
		};
		path_resolveUrl = function(path, location) {
			if (/\.\w+$/.test(path) === false) {
				path += '.js';
			}
			var url = path_normalize(path);
			if (url[0] === '/') {
				url = path_combine(path_resolveCurrent(), url);
			} else if (rgx_PROTOCOL.test(url) === false) {
				url = path_normalize(path_combine(location || path_resolveCurrent(), url));
			}
			if (rgx_PROTOCOL.test(url) === false) {
				url = 'file://' + url;
			}
			return url;
		};
		
		path_combine = function() {
			var out = '',
				imax = arguments.length,
				i = -1, x;
			while ( ++i < imax ){
				x = arguments[i];
				if (!x)  continue;
	
				x = path_normalize(x);
				if (out === '') {
					out = x;
					continue;
				}
				if (out[out.length - 1] !== '/') {
					out += '/'
				}
				if (x[0] === '/') {
					x = x.substring(1);
				}
				out += x;
			}
			return path_collapse(out);
		};
	
		var rgx_PROTOCOL = /^(file|https?):/i,
			rgx_SUB_DIR  = new RegExp("[^\\/\\.]+/\\.\\.\\/"),
			rgx_FILENAME = new RegExp("\\/[^\\/]+\\.\\w+(\\?.*)?(#.*)?$"),
			rgx_EXT      = new RegExp("\\.(\\w+)$"),
			rgx_win32Drive = new RegExp("(^\\/?\\w{1}:)(\\/|$)")
			;
	
		function path_win32Normalize (path){
			path = path_normalize(path);
			if (path.substring(0, 5) === 'file:')
				return path;
	
			return 'file://' + path;
		}
	
		function path_collapse(url_) {
			var url = url_;
			while (rgx_SUB_DIR.test(url)) {
				url = url.replace(rgx_SUB_DIR, '');
			}
			return url;
		}
		function path_ensureTrailingSlash(path) {
			if (path.charCodeAt(path.length - 1) === 47 /* / */)
				return path;
	
			return path + '/';
		}
		function path_sliceFilename(path) {
			return path_ensureTrailingSlash(path.replace(rgx_FILENAME, ''));
		}
	
	}());
	
	// end:source ./path.js

	var __global = typeof global !== 'undefined' && global ? global : window;
	var __nativeRequire = __global.require;
	var __originalRequire = function (path_) {
		var location = this.location;
		var path = path_resolveUrl(path_, location);

		if (modules[path]) {
			return modules[path].runOnce();
		}

		return __nativeRequire(path_);
	};

	__register = function (path, factory) {
		var filename = path_resolveUrl(path);	
		modules[filename] = new Module(filename, factory);			
	};

	__require =__originalRequire.bind({ location: path_getDir(path_resolveUrl('/builds/utest-server.ts')) });

	var modules = {};
	var Module = function(filename, factory){	
		this.filename = filename;
		this.dirname = path_getDir(filename);
		this.factory = factory;
		this.exports = null;
	};
	Module.prototype.runOnce = function(){
		if (this.exports != null) {
			return this.exports;
		}
		var require = __originalRequire.bind({ 
			location: this.dirname 
		});
		this.exports = {};
		this.factory(
			require, 
			this, 
			this.exports, 
			this.filename, 
			this.dirname
		);
		return this.exports;
	};
	
	require = __require;

	if (__nativeRequire == null) {
		__global.require = __require;
	}
}());
// end:source ./Header.js

// source ./Module.js
__register("/src/vars.ts", function(require, module, exports, __filename, __dirname){
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var g = typeof global !== 'undefined' ? global : window;
exports.global = g;
exports._Array_slice = Array.prototype.slice;
exports.mask = global.mask;
exports.include = global.include;
exports.logger = global.logger;
exports.atma = global.atma;
exports.io = global.io;
exports.app = global.app;
exports.assert = global.assert;
RegExp.prototype.toJSON = RegExp.prototype.toString;

});
// end:source ./Module.js


// source ./Module.js
__register("/src/utils/process.ts", function(require, module, exports, __filename, __dirname){
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

});
// end:source ./Module.js


// source ./Module.js
__register("/src/server/actions.ts", function(require, module, exports, __filename, __dirname){
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vars_1 = require("../vars");
var process_1 = require("../utils/process");
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
            done();
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

});
// end:source ./Module.js


// source ./Module.js
__register("/src/utils/str.ts", function(require, module, exports, __filename, __dirname){
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

});
// end:source ./Module.js


// source ./Module.js
__register("/src/server/BrowserTunnel.ts", function(require, module, exports, __filename, __dirname){
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
var vars_1 = require("../vars");
var str_1 = require("../utils/str");
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
            _this.trigger.apply(_this, ['action'].concat(args));
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

});
// end:source ./Module.js


// source ./Module.js
__register("/src/server/ServerUTest.ts", function(require, module, exports, __filename, __dirname){
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
var BrowserTunnel_1 = require("./BrowserTunnel");
var actions_1 = require("./actions");
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

});
// end:source ./Module.js


// source ./Module.js
__register("/src/utils/color.ts", function(require, module, exports, __filename, __dirname){
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

});
// end:source ./Module.js


// source ./Module.js
__register("/src/server/SocketListener.ts", function(require, module, exports, __filename, __dirname){
	"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vars_1 = require("../vars");
var actions_1 = require("./actions");
var ServerUTest_1 = require("./ServerUTest");
var color_1 = require("../utils/color");
var str_1 = require("../utils/str");
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
        socket.emit.apply(socket, [event].concat(args));
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

});
// end:source ./Module.js

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SocketListener_1 = require("../src/server/SocketListener");
include.exports = SocketListener_1.SocketListener;


}());
// end:source ./RootModule.js
