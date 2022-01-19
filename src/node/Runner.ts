import { is_Array, class_EventEmitter, class_Uri } from 'atma-utils';
import { logger, io, assert } from '../vars';
import { log_stringDiff } from './utils/logger';
import { color } from '../utils/str';

export const status_blank = 1;
export const status_connecting = 2;
export const status_connected = 3;
export const status_prepair = 4;
export const status_testing = 5;
export const status_ready = 6;

function utest_resolveFiles(config) {
    let files = [];

    if (is_Array(config)) {
        for (let i = 0, x, imax = config.length; i < imax; i++) {
            x = config[i];

            files = files.concat(utest_resolveFiles(x));
        }
        return files;
    }

    if (config.fork) {
        // no sub files
        return [];
    }

    let scripts = config.scripts,
        base = config.base;

    base = new class_Uri(base);

    for (let i = 0, x, imax = scripts.length; i < imax; i++) {
        x = new class_Uri(scripts[i]);

        if (x.isRelative()) {
            x = base.combine(x);
        }

        x = new io.File(x);

        if (x.exists() === false) {
            console.error('File - 404 - ', x.uri.toLocalFile());
            continue;
        }
        files.push(x);
    }
    return files;
}

export interface IRunnerSettings {
    isAction: boolean
}

export abstract class Runner extends class_EventEmitter {
    config: any
    status: number
    files: any[]
    suites: any[]
    failed: any
    stats: any
    startedAt: number
    isAction = false;

    abstract socket: any
    abstract run (cb: Function);

    constructor(config, settings: IRunnerSettings) {
        super();
        this.isAction = settings?.isAction ?? false;
        this.config = config;
        this.status = status_blank;
        this.files = utest_resolveFiles(config);
        this.suites = is_Array(config) ? config : [config];

        this.suites.forEach(function (x) {
            x.files = utest_resolveFiles(x);
        });
    }
    notifyTest(url) {
        let name = url.replace(this.config.base, '');
        logger.log(color`${ this.isAction ? "Tasks" : "Test" }: bold<cyan<${name}>>`);
        this.startedAt = Date.now();
    }
    onComplete(stats) {
        this.status = status_ready;

        function count(key) {
            let sum = 0;

            stats.forEach(function (x) {
                if (x.error) {
                    logger.error(x.error);
                    return;
                }

                if (x[key] == null)
                    return;

                if (typeof x[key] === 'object' && 'length' in x[key]) {
                    sum += x[key].length;
                    return;
                }

                sum += x[key];
            });
            return sum;
        }
        function aggr(key) {
            let aggr = [];
            stats.forEach(function (x) {
                if (x[key] == null)
                    return;

                if (typeof x[key] === 'object' && 'length' in x[key]) {
                    aggr.push.apply(aggr, x[key]);
                    return;
                }
                aggr.push(x[key]);
            });
            return aggr;
        }

        let total = count('total'),
            failed = count('failed'),
            timeouts = count('timeouts'),
            callbacks = count('callbacks'),
            errors = count('errors'),
            browsers = stats.length;

        if (total === 0) {
            logger.error('No assertions');
            failed++;
        }

        if (errors > 0) {
            failed++;
        }

        if (callbacks !== 0 || timeouts !== 0) {

            if (callbacks)
                logger
                    .error('Expected callbacks were not fired. More info...')
                    .log(aggr('callbacks'))
                    ;

            if (timeouts)
                logger
                    .error('Asynchronous suites were not completed. More info...')
                    .log(aggr('timeouts'))
                    ;


            !failed && failed++;
        }

        if (this.isAction !== true) {
            logger
                .log(color`\n\nbold<${failed ? 'red' : 'green'}<Done.>>`)
                .log(color`bold<Assertions>: bold<green<${Math.max(total - failed, 0)}>>(bold<red<${failed}>>)`)
                .log(color`bold<Timeouts>: bold<${timeouts ? 'red' : 'green'}<${timeouts}>>`)
                .log(color`bold<Failed Callbacks>: bold<green<${callbacks}>>`);
        } else {
            let time = Date.now() - this.startedAt;
            logger
                .log(color`\n\nbold<${failed ? 'red' : 'green'}<Completed> in ${time}ms>`)
        }

        this.failed = failed;
        this.stats = stats;

        this.trigger('complete', this);

    }

    getResources() {
        if (this.stats == null) {
            return [];
        }
        let resources = this.stats.resources
            || this.stats[0]?.resources
            || this.getResources?.()
            || [];

        return resources;
    }

    // assertion events

    onFailure(data) {

        if (data.stack == null) {
            data.stack = ''
        }

        let base = this.suites[0].base || '';


        data = assert.resolveData(data, base);
        logger.log('');

        if ('actual' in data || 'expected' in data) {
            let actual = data.actual,
                expect = data.expected;

            if (typeof expect === 'string'
                && typeof actual === 'string'
                && expect.length > 20
                && actual.length > 10
            ) {

                log_stringDiff(expect, actual);
            } else {
                let msg = '%s bold<red<↔>> %s';
                logger.log(color`${msg}`, data.actual, data.expected);
            }
        }

        if (data.message && data.generatedMessage !== true)
            logger.log(color` bold<red<::>> ` + data.message.yellow);

        if (data.file && data.line != null) {

            let path = data
                .file
                .replace(/(\/)?utest\//i, '$1')
                .replace(/\?.+/, '')
                .replace(/^\//, ''),

                uri = new class_Uri(base).combine(path).toString();

            if (io.File.exists(uri)) {
                let source = io.File.read <string> (uri);
                let lines = source.split(/\r\n|\r|\n/g);
                let line = lines[data.line - 1];
                let code = line && line.trim();
                    ;
                logger
                    .log(color`  bold<${path}>`)
                    .log(color`  bold<cyan< → >> bold<${data.line + 1} |> bold<red< ${code} >>`)
                    .log('');
            }

            return;
        }
    }

    onSuccess() {
        process.stdout.write(color`bold<green< |>>`);
    }
};

