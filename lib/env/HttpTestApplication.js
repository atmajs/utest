
// source ./RootModule.js
(function(){
	
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
exports.mask = global.mask;
exports.include = global.include;
exports.logger = global.logger;
exports.atma = global.atma;
exports.io = global.io;
exports.app = global.app;
exports.assert = global.assert;
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vars_1 = _src_vars;
var atma_utils_1 = require("atma-utils");
var resume = vars_1.include.pause(), server = vars_1.atma.server, appConfig = vars_1.app.config, bodyParser = require('body-parser'), Url = require('url');
server
    .Application
    .create({
    base: vars_1.include.location,
    configs: atma_utils_1.class_Uri.combine(vars_1.include.location, 'server/config/**.yml')
})
    .done(function (app) {
    app.responders([
        function (req, res, next) {
            vars_1.io.File.disableCache();
            server.StaticContent.Cache.state(false);
            var url = Url.parse(req.url, true);
            req.query = url.query;
            next();
        },
        bodyParser.json(),
        app.responder(),
        vars_1.atma.server.StaticContent.respond
    ]);
    resume(app);
});


}());
// end:source ./RootModule.js
