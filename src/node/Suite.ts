import { Runner } from './Runner';
import { logger, global } from '../vars';
import { watch } from './utils/cfg';
import { log_clearStd } from './utils/logger';
import { RunnerClient } from './RunnerClient';
import { RunnerFork } from './RunnerFork';
import { color } from '../utils/str';
import { RunnerNode } from './RunnerNode';

export class RunnerSuite {
    index: number
    runners: Runner[] = []
    base: string
    watch: boolean
    forks = null
    cfgNode = null
    cfgBrowser = null
    callback: Function

    constructor(configs, settings) {
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

        logger(90).log('RunnerSuite:', configs, settings);
    }


    closeSockets() {
        this.runners.forEach(function (x) {
            if (x.socket != null) {
                x.socket.disconnect();
            }
        });
    }

    getFailed() {
        return this.runners.reduce(function (aggr, x) {
            return aggr + (x.failed || 0);
        }, 0);
    }

    getSucceeded() {
        return this.runners.reduce(function (aggr, x) {
            return aggr + x.stats.reduce(function (aggr, x) {
                return aggr + x.total
            }, 0);
        }, 0);
    }

    getResources() {
        return this.runners.reduce(function (aggr, x) {
            return aggr.concat(x.getResources());
        }, []);
    }


    onComplete() {

        if (this.watch !== true) {

            this.closeSockets();

            var failed = this.getFailed();
            var succeeded = this.getSucceeded();

            logger
                .log('')
                .log(failed === 0 
                    ? color`bold<green<Success ${succeeded}>>` 
                    : color`bold<red<Failed ${failed}/${succeeded}/>>`
                );

            this.callback(failed);
            return;
        }

        closeSocketsOnExit(this);

        var self = this;
        watch(this.base, this.getResources(), function (path) {

            log_clearStd();

            
            logger.log((Date as any).format(new Date, 'HH:mm:ss').bg_cyan
                + ' modified ' + (color`bold<${path}>`));
            self.runTests();
        });
        logger.log(color`yellow< - watcher active.>`);
    }

    process() {
        var runner = this.runners[++this.index];

        if (runner == null) {
            this.onComplete();
            return;
        }
        runner.run(this.process);
    }

    runTests() {
        this.index = -1;
        this.process();

    }

    run(done) {
        this.callback = done;
        this.runners = [];


        if (this.cfgBrowser)
            this.runners.push(new RunnerClient(this.cfgBrowser));

        if (this.cfgNode)
            this.runners.push(new RunnerNode(this.cfgNode));

        if (this.forks) {
            var runners = this.forks.map(function (cfg) {
                return new RunnerFork(cfg);
            });
            this.runners = this.runners.concat(runners);
        }

        this.runners.forEach(function (runner) {
            runner.on('complete', this.process);
        }, this);

        if (this.watch)
            log_clearStd();

        this.runTests();
    }



    handleConfig(mix) {
        if (Array.isArray(mix)) {
            for (var i = 0, imax = mix.length; i < imax; i++) {
                this.handleSingle(mix[i]);
            }
            return;
        }
        this.handleSingle(mix);
    }
    handleSingle(config) {

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
    }
};

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


let closeSocketsOnExit = function (suite) {
    closeSocketsOnExit = function () { };

    var readLine = require('readline');
    if (process.platform === 'win32') {
        var rl = readLine.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on('SIGINT', function () {
            process.emit('SIGINT' as any);
        });
        rl.write('\n');
        global.rl = rl;
    }

    process.on('SIGINT', function () {
        suite.closeSockets();
        process.exit(0);
    });

}