import { UTestVars } from '../UTestVars';
import { UTest } from '../UTest';
import { assert, include } from '../vars';
import { is_Array } from 'atma-utils';
import { include_clearCache, include_reset, include_ready, include_configurate } from './utils/include';
import { script_getResources, script_insert, script_insertMany } from './utils/script';
import { cfg_runConfigurationScript } from '../utils/cfg';
import { fn_waterfall } from '../utils/fn';



var _configs,
    _configIndex,
    _socket,
    _stats,
    _onComplete,
    _runners;


export class RunnerDom {
    scripts: any[]
    
    onComplete: Function
    index: number
    stats: any[]
    resources: any[]

    static run(configs, socket, callback) {

        _runners = [];
        _socket = socket;
        _configs = is_Array(configs) ? configs : [configs];
        _onComplete = callback;
        _stats = {};
        _configIndex = -1;

        _socket.emit('browser:utest:start', {
            userAgent: (window as any).browserInfo
        });

        assert.reset();
        cfg_runNext();
    }
    static getResources() {
        var resources = [];

        for (var i = 0, x, imax = _runners.length; i < imax; i++) {
            x = _runners[i];

            if (x.resources) {
                resources = resources.concat(x.resources);
            }
        }

        return resources;
    }
    static getCurrentConfig() {
        return _configs[_configIndex];
    }


    constructor(public config) {
        this.scripts = config.scripts;
        this.process = this.process.bind(this);
        this.processSingle = this.processSingle.bind(this);
        this.singleComplete = this.singleComplete.bind(this);

        var key, val, cfg = config.$config;
        for (key in cfg) {
            val = cfg[key];
            if (/^function\s*\(/.test(val)) {
                cfg[key] = eval('(' + val + ')');
            }
        }

    }
    run(callback) {
        this.onComplete = callback;
        this.index = -1;
        this.stats = [];

        UTestVars.clear();
        include_clearCache();

        _socket.emit('browser:utest:suite:start', {
            url: this.config.name
        });

        if (!(this.scripts && this.scripts.length)) {
            console.warn('Suite has not test scripts');
            callback();
            return this;
        }

        suite_prepair(this, this.process);
        return this;
    }




    process() {

        if (++this.index > this.scripts.length - 1) {
            this.resources = script_getResources();
            this.onComplete(this);
            return;
        }

        var path = this.scripts[this.index];

        _socket.emit('browser:utest:script', {
            script: path
        });

        include_reset();
        UTestVars.clear();

        path = '/utest/' + path;

        script_insert({ path: path }, this.processSingle);

    }

    processSingle(force) {

        var that = this;

        include_ready(function () {
            UTest.run(that.singleComplete);
        });
    }

    singleComplete() {
        this.stats.push({
            url: this.scripts[this.index],
            total: assert.total,
            failed: assert.failed,
            timeouts: assert.timeouts,
            errors: assert.errors,
            callbacks: assert.callbacks,
        });

        this.process();
    }

};


function cfg_runNext() {
    if (++_configIndex > _configs.length - 1) {
        _onComplete(_stats);
        return;
    }

    var config = _configs[_configIndex];
    _socket.emit('browser:utest:beforestart', {
        config: config
    }, function () {

        _runners.push(new RunnerDom(config).run(cfg_runNext));
    });
}

function suite_prepair(runner, callback) {
    var suite = runner.config;
    include_configurate(suite);

    fn_waterfall(
        function (done) {
            cfg_runConfigurationScript(
                '$after', _configs[_configIndex - 1], done
            );
        },
        function (done) {
            suite_loadEnv(runner, suite, done);
        },
        function (done) {
            cfg_runConfigurationScript(
                '$before', suite, done
            );
        },
        callback
    );
}
function suite_loadEnv(runner, suite, done) {
    if (is_Array(suite.env) === false) {
        done();
        return;
    }

    if (typeof include === 'undefined') {
        script_insertMany(suite.env, done);
        return;
    }

    var resource = include
        .instance('/utest/')
        ;

    suite.env.forEach(function (x) {
        resource.js(x);
    });

    resource.done(function (resp) {
        setTimeout(function () {
            for (var lib in resp) {
                var exports = resp[lib];
                if (exports == null) {
                    break;
                }
                var notEmpty = typeof exports !== 'object' || 'length' in exports;
                if (notEmpty === false) {
                    var empty = {};
                    for (var key in exports) {
                        if (key in empty) {
                            continue;
                        }
                        notEmpty = true;
                        break;
                    }
                }
                if (notEmpty === false) {
                    break;
                }

                if (exports != null) {
                    window[lib] = exports;
                }
            }

            done(resp);
        });
    });
}