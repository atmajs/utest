import { Runner, status_ready, status_testing, status_prepair } from './Runner';
import { logger, global, assert } from '../vars';
import { watch } from './utils/cfg';
import { log_clearStd } from './utils/logger';
import { RunnerClient } from './RunnerClient';
import { RunnerFork } from './RunnerFork';
import { color } from '../utils/str';
import { RunnerNode } from './RunnerNode';


interface IRunnerSuiteSettings {
    base?: string
    watch?: boolean
    isAction?: boolean
}
export class RunnerSuite {
    counter = 0
    index: number
    runners: Runner[] = []
    base: string
    watch: boolean
    forks = null
    cfgNode = null
    cfgBrowser = null
    callback: Function
    isAction = false

    constructor(configs, settings: IRunnerSuiteSettings) {
		/**
		 *	this.watch
		 *	this.base
		 */
        this.handleConfig(configs);

        this.base = settings.base;
        this.watch = settings.watch;
        this.isAction = settings?.isAction ?? false;

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

            let failed = this.getFailed();
            let succeeded = this.getSucceeded();

            if (this.isAction !== true) {
                logger
                    .log('')
                    .log(failed === 0
                        ? color`bold<green<Success ${succeeded}>>`
                        : color`bold<red<Failed ${failed}/${succeeded}/>>`
                    );
            }

            this.callback(failed);
            return;
        }

        closeSocketsOnExit(this);


        let resources = watch(this.base, this.getResources(), (path) => {
            let dateStr = (Date as any).format(new Date, 'HH:mm:ss').bg_cyan;
            let message = `#${ ++this.counter }  ${dateStr}  modified ${color`bold<${path}>`}`;
            if (this.isIdle() === false) {
                logger.log(message);
                logger.log(color`... but the RunnerSuite is red<busy>`);
                return;
            }

            log_clearStd();
            logger.log(message);
            this.runTests();
        });
        logger.log(color`yellow< - watcher active. ${resources.length} Files>`);
    }

    process() {
        let runner = this.runners[++this.index];
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

        let settings = {
            isAction: this.isAction
        };

        if (this.cfgBrowser)
            this.runners.push(new RunnerClient(this.cfgBrowser, settings));

        if (this.cfgNode)
            this.runners.push(new RunnerNode(this.cfgNode, settings));

        if (this.forks) {
            let runners = this.forks.map((cfg) => {
                return new RunnerFork(cfg, settings);
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
            for (let i = 0, imax = mix.length; i < imax; i++) {
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

    private isIdle () {
        let isBusy = this.runners.some(x => x.status === status_testing || x.status === status_prepair);
        return isBusy === false;
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

    let readLine = require('readline');
    if (process.platform === 'win32') {
        let rl = readLine.createInterface({
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
