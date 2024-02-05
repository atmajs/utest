import { assert, include, logger, io } from '../vars'
import { status_testing, Runner, status_ready, status_blank, status_prepair, IRunnerSettings } from './Runner';
import { class_Uri } from 'atma-utils';
import { UTestVars } from '../UTestVars';
import { cfg_runConfigurationScript } from '../utils/cfg';
import { fn_waterfall } from '../utils/fn';
import { UTest } from '../UTest'

export class RunnerNode extends Runner {
    socket: any;
    index: number
    resources: any[]
    envResource: any

    constructor(config, settings: IRunnerSettings) {
        super(config, settings);

        assert.onsuccess = this.onSuccess.bind(this);
        assert.onfailure = this.onFailure.bind(this);


        this.process = this.process.bind(this);
        this.runTests = this.runTests.bind(this);
        this.singleComplete = this.singleComplete.bind(this);

        _runner = this;
    }
    run() {
        if (status_ready !== this.status && status_blank !== this.status) {
            logger.warn('Node is busy ... ', this.status);
            return;
        }
        this.status = status_prepair;
        this.runTests();
    }

    runTests() {

        this.index = -1;
        this.status = status_testing;
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


        let that = this,
            url = this.files[this.index].uri.toString();

        assert.reset();
        UTestVars.clear();
        include.removeFromCache(url);
        this.notifyTest(url);
        let resource = include
            .cfg('path', _suite.base)
            .instance(url)
            .js(url)
            .done(function (resp) {

                process.nextTick(function () {
                    UTest.run(that.singleComplete);
                });
            });

        this.resources.push(resource);
    }
    singleComplete() {
        this.stats.push({
            url: this.files[this.index].uri.toString(),
            total: assert.total,
            failed: assert.failed,
            timeouts: assert.timeouts,
            errors: assert.errors,
            callbacks: assert.callbacks,
        });

        this.process();
    }

    clearResources() {
        this.resources && this.resources.forEach(resource_clear);
        this.envResource && resource_clear(this.envResource);

        this.resources = [];
        this.envResource = null;
    }
    getResources() {
        let arr = [];

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
                let path = new class_Uri(x).toString();
                arr.push(path);
            });

        return arr;
    }
};

function resource_clear(resource) {

    let bin = include.getResources();


    for (let type in bin) {
        for (let key in bin[type]) {
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
        for (let key in require.cache) {
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

    let base = suite.base,
        env = suite.env;

    if (env == null) {
        callback();
        return;
    }

    if (typeof env === 'string') {
        env = [env];
    }
    if (Array.isArray(env) === false) {
        logger.warn('"env" property should be an array of strings', env);
        callback();
        return;
    }
    if (env.length === 0) {
        callback();
        return;
    }

    let resource = include
        .instance(base)
        .setBase(base);

    base = new class_Uri(base);
    let pckg = env
        .map(x => {
            let [src, alias] = x.split('::'),
                uri = base.combine(src[0] === '/' ? src.substring(1) : src);
            return [uri, alias]
        })
        .filter(arr => {
            let [uri] = arr;
            if (io.File.exists(uri) === false) {
                logger.warn('Resource from Environment - 404 -', uri.toLocalFile());
                return false;
            }
            return true
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

let _suites = null,
    _suite = null,
    _suiteIndex = -1,

    _runner = null;


function suite_next(callback) {
    _suite = _suites[++_suiteIndex];

    if (_suite == null) {
        _runner.onComplete(_runner.stats);
        return;
    }

    _runner.files = _suite.files;
    _runner.config = _suite;

    if (_suite.$config?.includejs != null) {
        (global as any).include?.cfg(_suite.$config.includejs);
    }

    fn_waterfall(
        function (done) {
            cfg_runConfigurationScript(
                '$after', _suites[_suiteIndex - 1], done
            );
        },
        function (done) {
            suite_loadEnv(_runner, _suite, done);
        },
        function (done) {
            cfg_runConfigurationScript(
                '$before', _suite, done
            );
        },
        callback
    );
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
