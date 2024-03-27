
// source ./RootModule.js
(function(){
	
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vars_1 = _src_vars;
const atma_utils_1 = require("atma-utils");
const atma_server_1 = require("atma-server");
let resume = vars_1.include.pause();
let bodyParser = require('body-parser');
let Url = require('url');
atma_server_1.Application
    .create({
    base: vars_1.include.location,
    configs: atma_utils_1.class_Uri.combine(vars_1.include.location, 'server/config/**.yml')
})
    .then((app) => {
    app.responders([
        function (req, res, next) {
            vars_1.io.File.disableCache();
            atma_server_1.StaticContent.Cache.state(false);
            var url = Url.parse(req.url, true);
            req.query = url.query;
            next();
        },
        bodyParser.json(),
        app.responder(null),
        atma_server_1.StaticContent.respond
    ]);
    resume(app);
});


}());
// end:source ./RootModule.js
