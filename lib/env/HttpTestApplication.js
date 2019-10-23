
// source ./RootModule.js
(function(){
	
	var _node_modules_body_parser_index = {};
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


// source ./ModuleSimplified.js
var _node_modules_body_parser_index;
(function () {
	var exports = {};
	var module = { exports: exports };
	/*!
 * body-parser
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var deprecate = require('depd')('body-parser')
var fs = require('fs')
var path = require('path')

/**
 * Module exports.
 */

exports = module.exports = deprecate.function(bodyParser,
  'bodyParser: use individual json/urlencoded middlewares')

/**
 * Path to the parser modules.
 */

var parsersDir = path.join(__dirname, 'lib', 'types')

/**
 * Auto-load bundled parsers with getters.
 */

fs.readdirSync(parsersDir).forEach(function onfilename(filename) {
  if (!/\.js$/.test(filename)) return

  var loc = path.resolve(parsersDir, filename)
  var mod
  var name = path.basename(filename, '.js')

  function load() {
    if (mod) {
      return mod
    }

    return mod = require(loc)
  }

  Object.defineProperty(exports, name, {
    configurable: true,
    enumerable: true,
    get: load
  })
})

/**
 * Create a middleware to parse json and urlencoded bodies.
 *
 * @param {object} [options]
 * @return {function}
 * @deprecated
 * @api public
 */

function bodyParser(options){
  var opts = {}

  options = options || {}

  // exclude type option
  for (var prop in options) {
    if ('type' !== prop) {
      opts[prop] = options[prop]
    }
  }

  var _urlencoded = exports.urlencoded(opts)
  var _json = exports.json(opts)

  return function bodyParser(req, res, next) {
    _json(req, res, function(err){
      if (err) return next(err);
      _urlencoded(req, res, next);
    });
  }
}
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_node_modules_body_parser_index) && isObject(module.exports)) {
		Object.assign(_node_modules_body_parser_index, module.exports);
		return;
	}
	_node_modules_body_parser_index = module.exports;
}());
// end:source ./ModuleSimplified.js

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vars_1 = _src_vars;
var atma_utils_1 = require("atma-utils");
var resume = vars_1.include.pause(), server = vars_1.atma.server, appConfig = vars_1.app.config, bodyParser = _node_modules_body_parser_index, Url = require('url');
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
