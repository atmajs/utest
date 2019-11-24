import { io, logger } from '../../vars'
import { arr_isEmpty, arr_distinctConcat } from '../../utils/array'

import { class_Uri, is_Array } from 'atma-utils';

export function cfg_prepairSettings(setts, script) {

    var base = setts.base;
    if (base) {
        base = new class_Uri(class_Uri.combine(base, '/'));

        if (base[0] === '/')
            // relative to CWD
            base = base.substring(1);


        if (base.isRelative())
            base = io.env.currentDir.combine(base);

    }
    else {
        base = io.env.currentDir;
    }

    setts.base = class_Uri.combine(base.toDir(), '/');
    setts.nodeScripts = [];
    setts.domScripts = [];
    setts.env = [];


    if (script == null)
        return;

    if (script.indexOf('*') !== -1) {

        cfg_addScript(
            script,
            setts.base,
            setts.nodeScripts,
            setts.domScripts,
            (setts.browser && 'dom') || (setts.node && 'node')
        );
        return;
    }

    function resolveFileByName(path) {
        var ext = /\.[\w]+$/;
        if (ext.test(path)) {
            return resolveFileByNameWithExtension(path);
        }
        let extensions = [
            '.test',
            '.test.js',
            '.test.ts',
            '.spec.js',
            '.spec.ts',
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
        if (io.File.exists(base.combine(path))) {
            return path;
        }
        var testFolder = class_Uri.combine('test/', path);
        if (io.File.exists(base.combine(testFolder))) {
            return testFolder;
        }
        return null;
    }

    script = resolveFileByName(script);
    if (script == null) {
        return;
    }

    cfg_addScript(
        script,
        setts.base,
        setts.nodeScripts,
        setts.domScripts,

        // if not defined, executor will be resolved from the path
        (setts.browser && 'dom') || (setts.node && 'node')
    );

    // Consider to remove: add same-name js file to env to be preloaded.
    var ext = /\.\w{1,5}$/.exec(script)
    if (ext && ext[0] === '.test') {
        script = script.replace(/\.\w{1,5}$/, '.js');

        if (io.File.exists(base.combine(script)))
            setts.env.push(script);
    }



}; // cfg_prepair


/**
 * base: [String]
 * env: [String]
 * tests: String | [String]
 */
export function cfg_loadConfig(baseConfig) {

    var path = baseConfig.config;

    if (path == null) {
        path = /\/test.?[\\\/]?$/.test(baseConfig.base)
            ? 'config.js'
            : 'test/config.js';

        path = class_Uri.combine(baseConfig.base, path);
    }

    var file = new io.File(path);
    if (file.exists() === false)
        return { error: '404 ' + path };


    return suite_normalize(require(file.uri.toLocalFile()));

}

export function cfg_getScripts(baseConfig, config) {

    if (config.tests) {
        // root object, should not have suites
        var tests = config.tests,
            base = baseConfig.base,
            nodeScripts = baseConfig.nodeScripts,
            domScripts = baseConfig.domScripts,
            executor = baseConfig.exec;

        cfg_addScript(tests, base, nodeScripts, domScripts, executor);


        baseConfig.env = config.env;
        baseConfig.$config = config.$config;
    }

    baseConfig.suites = cfg_parseSuites(config.suites, baseConfig.base);
};

export function cfg_hasScripts(config) {
    if (!config)
        return false;

    if (!arr_isEmpty(config.nodeScripts))
        return true;

    if (!arr_isEmpty(config.domScripts))
        return true;

    return false;
};

export function cfg_parseSuites(suites, base) {
    var array = [],
        key, x, config;

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
            logger.error('Suite %s has no `tests`', key);
            continue;
        }

        cfg_addScript(
            x.tests,
            config.base,
            config.nodeScripts,
            config.domScripts,
            config.exec
        );


        array.push(config);
    }
    return array;
};

export function cfg_suiteInfoFromConfig(setts, config) {
    setts.env = arr_distinctConcat(
        setts.env, config.env
    );
    if (config.suites == null) {
        setts.$config = config.$config;
        setts.exec = config.exec;
        recalculateExecScripts(setts);
        return;
    }

    var path = first(setts.nodeScripts) || first(setts.domScripts),
        suite = suite_getForPath(config.suites, path);
    if (suite) {
        setts.env = arr_distinctConcat(
            setts.env, suite.env
        );
        setts.$config = suite.$config;
        setts.exec = suite.exec;
        recalculateExecScripts(setts);
    }
    // private
    function first(arr) {
        return arr && arr[0];
    }
    function recalculateExecScripts(config) {
        var exec = config.exec,
            from, to;
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
};


export function cfg_split(config) {
    if (config.fork)
        return [config];

    // split config per executor
    var configs = [];
    if (!arr_isEmpty(config.domScripts) && !config.node) {
        configs.push({
            exec: 'browser',
            env: config.env,
            scripts: config.domScripts,
            base: config.base || config.cwd,
            $config: config.$config
        });
    }

    if (!arr_isEmpty(config.nodeScripts) && !config.browser) {
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



export let watch = function (base, resources: string[], callback) {
    let arr = null;
    watch = function () {
        return arr;
    };

    base = new class_Uri(base);
    let watching = resources.map((url) => {

        url = url.replace(/^(https?:\/\/[^\/]+)?(\/utest)?\//i, '');

        if (/^[\w\d\-_]+$/.test(url)) {
            // node module
            return null;
        }

        var uri = new class_Uri(url);
        if (uri.isRelative()) {
            uri = base.combine(uri);
        }

        var file = new io.File(uri);
        if (file.uri == null) {
            // some virtual files does not expose uri property
            return null;
        }

        let filename = file.uri.toLocalFile();
        if (file.exists()) {
            io.watcher.watch(filename, function () {

                io.File.clearCache(filename);

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

        logger.warn('<utest: watcher> File 404 - ', filename);
        return null;
    });

    return arr = watching.filter(Boolean);
};

//= private

function cfg_addScript(path, base, nodeScripts, domScripts, executor: 'dom' | 'node' | 'browser' | '', forceAsPath?) {

    if (Array.isArray(path)) {
        path.forEach(function (x) {
            cfg_addScript(x, base, nodeScripts, domScripts, executor, forceAsPath);
        });
        return;
    }

    if (forceAsPath !== true && ~path.indexOf('*')) {
        // asPath here is actually to prevent recursion in case if
        // file, which is resolved by globbing, contains '*'

        var files = io
            .glob
            .readFiles(class_Uri.combine(base, path));

        if (files.length === 0) {
            logger.warn('<No files found. Base %s. Search %s', base, path);
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
        var a = test.toLowerCase(),
            b = path.toLowerCase()
            ;
        return a.indexOf(b) !== -1 || b.indexOf(a) !== -1;
    }

    return io.glob.matchPath(test, path);
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

        if (is_Array(suites)) {
            logger.warn('Use object{SUITE_NAME:CONFIG}. Normalizing the array...');
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
