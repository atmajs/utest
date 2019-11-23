import { global, assert, logger, _Array_slice } from './vars'
import { is_Function, mixin, is_Object } from 'atma-utils';
import { transport_isBusy } from './utils/transport-jam';
import { _options } from './Options';
import { is_Deferred } from './utils/is';
import { eq_ } from './assert/wrapper';
import { syntax_Mocha } from './utils/syntax';
import { obj_defaults } from './utils/object';
import { color } from './utils/str';
import { UTestServer } from './UTest-server'
import { UTestBenchmark } from './UTest-benchmark'
import { UTestConfiguration, configurate } from './UTest-config'
import { Classify, FnPrototypeAlias } from './utils/classify';
import { Color } from './utils/color';
import { Console } from './utils/console';
import { UTestQueryUtil } from './utils/utest-query';
import { UTestVars } from './UTestVars';

declare var DomTest, require;

export interface IUTestDefinition {
    $config?: {
        timeout?: number
        errorableCallbacks?: boolean
        breakOnError?: boolean

        'http.config'?: any
        'http.eval'?: string
        'http.include'?: any
        'http.service'?: any
        'http.process'?: any
        'util.process'?: any   
    }
    $before?: (done?: Function) => void | PromiseLike<any>
    $after?: (done?: Function) => void | PromiseLike<any>
    $teardown?: (done?: Function) => void | PromiseLike<any>

    

    [key: string]: ITestCase | IUTestDefinition | any
}

export interface ITestCase {
    (done?: Function, ...args: any[]): void | PromiseLike<any> | any
}
export interface IUTestRunnerConfig {
    callback?: Function
    /** Filter suite cases to match the query */
    query?: string
}



var RESERVED = [
    '$teardown',
    '$config',
    '$before',
    '$after',
    '$run'
];

function nextUTest() {
    if (++UTestVars.index > UTestVars.tests.length - 1) {
        UTestVars.testsDone();
        return;
    }

    var test = UTestVars.tests[UTestVars.index];
    test.run(nextUTest);
}

function teardownDelegate(ctx, teardown, done, utest) {
    if (teardown == null)
        return done;

    return function () {
        ctx.arguments = arguments;
        runCase(ctx, teardown, done, null, null, utest);
    };
}

function async(callback: Function, name: string, msTimeout: number) {
    var isTimeouted = false,
        isProcessed = false,
        // in case http requests are busy, take some more time
        jam = 5,
        fn = function () {
            clearTimeout(timeout);
            if (isTimeouted || isProcessed)
                return;
            isProcessed = true;
            callback.apply(null, arguments);
        };
    var timeout = wait(),
        future = {
            fn: fn,
            id: timeout,
            timeout: null
        };

    function onTimeout() {
        if (transport_isBusy() && --jam > 0) {
            timeout = future.timeout = wait();
            Console.log(color`<transport jam> bold<${jam}> yellow<${name}>`);
            return;
        }

        Console.error('Async Suite Timeout - ', name);
        isTimeouted = true;
        assert.timeouts.push(name);
        callback();
    }
    function wait() {
        return setTimeout(onTimeout, msTimeout || _options.timeout);
    }

    return future;
}


function runCase(ctx, fn: ITestCase | IUTestDefinition, done: Function, teardown?: Function, key?: string, utest?: UTest) {

    if (fn != null && typeof fn === 'object') {

        var sub = new UTest(key, fn, ctx);
        sub.run(teardownDelegate(ctx, teardown, done, utest));
        return;
    }

    var asyncData;
    try {

        var args = _Array_slice.call(ctx.arguments || []),
            onComplete = teardownDelegate(ctx, teardown, done, utest),
            asyncData,
            result;

        if (is_Function(fn) === false) {
            onComplete();
            return;
        }

        if (case_hasAsyncCallback(fn)) {
            asyncData = async(
                onComplete
                , key
                , ctx.$config && ctx.$config.timeout
            );
            args.unshift(asyncData.fn);

            result = fn.apply(ctx, args);

            tryWait_Deferred(result);
            return;
        }
        result = fn.apply(ctx, args);
        if (tryWait_Deferred(result))
            return;

        onComplete();
    } catch (error) {

        if (asyncData)
            clearTimeout(asyncData.id);

        if (error.name === 'AssertionError') {
            assert.fail(error);
            done();
            return;
        }

        error.stack = assert.prepairStack(error.stack);

        Console.error(error.toString());
        if (error.stack) {
            Console.error(error.stack);
        }

        assert.errors++;
        done();
    }


    function tryWait_Deferred(dfr) {
        if (is_Deferred(dfr) === false) {
            return false;
        } 
        if (asyncData == null) {
            asyncData = async(onComplete, key, ctx.$config && ctx.$config.timeout);
        }
        function onFail(error) {
            if (error && error.name === "AssertionError" && assert.onfailure) {
                assert.fail(error);
                return;
            }
            const msg = color`Test case red<bold<${key}>> rejected`;
            logger.log(msg);
            if (error.stack) {
                logger.log(error.stack);
            } else {
                logger.log(error.toString());
            }
            eq_(error, null);
            asyncData.fn();
        }
        function onSuccess(error) {
            eq_(result._rejected, null);
            if (arguments.length !== 0) ctx.arguments = arguments;
            asyncData.fn();
        }
        result.then(onSuccess, onFail);
        if (is_Function(result.catch)) {
            result.catch(onFail);
        }
        return true;
    }
}

function case_hasAsyncCallback(fn) {
    if (fn.length === 0) {
        return false;
    }
    var str = fn
        .toString()
        .replace(fn.name, '')
        // Name in Source Code can have quotes
        .replace(/^['"]+/, '')
        .trim();
    return /^(async )?(function)?\s*\([\w\s,]*(done|next)/.test(str);
}

var UTestProto = {
    // stores data exposed by the async Case
    arguments: null,
    $run: function (key, done) {
        runCase(this.proto, this.suite[key], done || function () { }, null, key, this);
    }
};

var UTestProtoDelegate = function (instance: UTest, suite: IUTestDefinition): IUTestDefinition {
    let proto = {};
    for (let key in UTestProto) {

        if (typeof UTestProto[key] === 'function') {
            proto[key] = UTestProto[key].bind(instance);
            continue;
        }
        proto[key] = UTestProto[key];
    }

    for (let key in suite) {
        proto[key] = suite[key];
    }
    return proto;
};

@Classify
@FnPrototypeAlias
export class UTest extends mixin(UTestServer, UTestConfiguration, UTestBenchmark) {

    static default = UTest

    name: string
    suite: IUTestDefinition
    proto: IUTestDefinition
    processed: any[]
    onComplete: Function
    errors: number

    constructor(mix: string | IUTestDefinition, $suite?: IUTestDefinition | Function, parent?) {
        super();

        let name: string = mix as any;
        let suite: IUTestDefinition = $suite as any;
        if (typeof mix !== 'string' && suite == null) {
            suite = mix;
            name = 'UTest'
        }

        this._start = this._start.bind(this);
        this._nextCase = this._nextCase.bind(this);

        if (typeof $suite === 'function') {
            suite = syntax_Mocha($suite);
        }

        if (parent != null) {
            suite.$config = obj_defaults(
                suite.$config,
                parent.$config,
                [
                    'timeout',
                    'errorableCallbacks'
                ]
            );
        }
        this.name = name;
        this.suite = suite;
        this.processed = [];
        this.proto = UTestProtoDelegate(this, suite);

        // @obsolete properties
        ['before', 'after', 'teardown', 'config']
            .forEach(function (key) {
                if (suite[key] == null)
                    return;

                Console.warn(`<UTest> ${key} property is deprecated. Use: $${key}`);

                suite['$' + key] = suite[key];
                delete suite[key];
            });

        if (parent == null) {
            UTestVars.tests.push(this);
        }
        return this;
    }

    run(callback: Function)
    run(options: IUTestRunnerConfig)
    run(mix?: Function | IUTestRunnerConfig) {
        let callback = null;
        let q = null;
        if (mix != null) {
            if (typeof mix === 'function') {
                callback = mix;
            } else {
                callback = mix.callback;
                q = mix.query;
            }
        }

        this.processed = [];
        this.errors = 0;
        //this.snapshot = {
        //	total: assert.total,
        //	failed: assert.failed
        //};

        this.onComplete = callback;

        if (this.handleQuery(q) === false) {
            this.handleRanges();
            this.handleBangs();
        }
        this.configurate(this._start);
    }

    handleQuery(query?: string | RegExp) {
        if (typeof query === 'string') {
            query = new RegExp(query);
        }
        let q = query || UTestQueryUtil.getQuery();
        if (q == null) {
            return false;
        }

        const SKIP = ['$config', '$before', '$after', '$teardown'];
        
        return handleQuery (this.suite);
        
        /* private */
        function handleQuery(obj) {
            var has = false;
            Object
                .keys(obj)
                .forEach(function (key) {
                    if (key[0] === '$' && SKIP.indexOf(key) > -1) {
                        return;
                    }
                    let val = obj[key];

                    let matched = UTestQueryUtil.matchQuery(key, q);
                    if (matched) {
                        has = true;
                        return;
                    }
                    if (is_Object(val)) {
                        let hasInner = handleQuery(val);
                        if (hasInner) {
                            has = true;
                            return;
                        }
                    }

                    delete obj[key];
                });
            return has;
        }
    }
    handleBangs() {
        let has = rewriteDeep(this.suite);
        if (has) {
            clearObject(this.suite);
        }

        function rewriteDeep(obj) {
            var has = false;
            Object
                .keys(obj)
                .forEach(function (key) {
                    let val = obj[key];
                    if (key[0] === '!') {
                        has = true;
                        if (is_Object(val) && hasBang(val) === false) {
                            forceDeep(val);
                        }
                        return;
                    }

                    if (key[0] !== '!' && is_Object(val) && hasBang(val)) {
                        delete obj[key];
                        key = '!' + key;
                        obj[key] = val;
                        rewriteDeep(val);
                        has = true;
                    }
                });
            return has;
        }
        function forceDeep(obj) {
            var key, val;
            for (key in obj) {
                if (RESERVED.indexOf(key) !== -1) continue;
                if (key.substring(0, 2) === '//') continue;

                val = obj[key];
                delete obj[key];
                obj['!' + key] = val;
                if (is_Object(val)) {
                    forceDeep(val);
                }
            }
        }
        function cleanBangsDeep(obj) {
            var key, val;
            for (key in obj) {
                if (key[0] !== '!') continue;

                val = obj[key];
                delete obj[key];
                obj[key.replace(/^!+/, '')] = val;

                if (is_Object(val)) {
                    cleanBangsDeep(val);
                }
            }
        }
        function clearObject(obj) {
            Object
                .keys(obj)
                .forEach(function (key) {
                    if (RESERVED.indexOf(key) !== -1)
                        return;

                    if (key[0] !== '!') {
                        delete obj[key];
                        return;
                    }
                    if (is_Object(obj[key]))
                        clearObject(obj[key]);
                });
        }
        function hasBang(obj) {
            return Object.keys(obj).some(key => {

                if (key[0] === '!') {
                    return true;
                }
                let val = obj[key];
                if (is_Object(val)) {
                    return hasBang(val);
                }
                return false;
            });
        }
    }
    handleRanges() {
        var keys = Object.keys(this.suite),
            start, end;

        keys.forEach(function (x, index) {
            switch (x[0]) {
                case '[':
                    if (start != null) {
                        logger.warn('Range is already started at `%s` (skipp)', keys[start]);
                        return;
                    }
                    start = index;
                    break;
                case ']':
                    if (end != null) {
                        logger.warn('Range is already closed at `%s` (enlarge)', keys[end]);
                    }
                    end = index;
                    break;
            }
        });
        if (start == null && end == null)
            return;
        if (start == null)
            start = 0;
        if (end == null)
            end = keys.length - 1;

        logger.log(color`Range: from bold<green<${keys[start]}>> to bold<green<${keys[end]}>>`);

        var range = {},
            suite = this.suite;
        keys.slice(start, end + 1).forEach(function (key) {
            range[key] = suite[key];
        });

        RESERVED.forEach(function (key) {
            if (suite[key] != null)
                range[key] = suite[key];
        })

        this.suite = range;
    }


    _start() {
        runCase(this.proto, this.suite.$before, this._nextCase, null, null, this);
    }
    _nextCase() {

        if (arguments.length > 0) {
            var index = 0;
            if (this.$cfg('errorableCallbacks') === true) {
                assert.equal(arguments[0], null);
                index = 1;
            }
            this.proto.arguments = _Array_slice.call(arguments, index);
        }

        var breakOnError = this.$cfg('breakOnError');
        if (breakOnError) {
            breakOnError = assert.failed !== 0
                || assert.errors !== 0
                || assert.timeouts.length !== 0
                ;
        }


        for (var key in this.suite) {
            if (breakOnError)
                break;

            if (~this.processed.indexOf(key))
                continue;

            // reserved
            if (RESERVED.indexOf(key) !== -1)
                continue;

            if (key.substring(0, 2) === '//') {
                Console.warn(key.substring(2), color`bold<(skipped)>`);
                this.processed.push(key);
                continue;

            }
            this.processed.push(key);

            var case_ = this.suite[key];
            if (case_ == null)
                continue;

            var message = color`   bold<${key}>: `;
            if (typeof case_ === 'object') {
                message = Color.bg_cyan(message);
            }

            Console.log('');
            Console.print(message);
            runCase(this.proto, case_, this._nextCase, this.suite.$teardown, key, this);
            return;
        }


        runCase(this.proto, this.suite.$after, () => {
            UTest.trigger('complete', this);
            this.onComplete && this.onComplete();
        }, null, null, this);
    }


    static stats() {
        return {
            suites: UTestVars.tests.length
        };
    }
    static clear() {
        UTestVars.clear();
    }
    static run(callback) {
        UTestVars.index = -1;
        UTestVars.testsDone = callback;

        nextUTest();
    }
    static on(event, callback) {
        switch (event) {
            case 'complete':
                if (UTest.isBusy() === false) {
                    callback();
                    return;
                }
                break;
        }

        var fns = (UTestVars.listeners[event] || (UTestVars.listeners[event] = []));
        fns.push(callback);
    }
    static trigger(event, ...args) {
        var fns = UTestVars.listeners[event];
        if (fns == null || !fns.length) {
            return;
        }
        for (var i = 0, x, imax = fns.length; i < imax; i++) {
            x = fns[i];
            x.apply(null, args);
        }
    }
    static isBusy() {
        return UTestVars.index < UTestVars.tests.length;
    }
    static cfg(options) {
        for (var key in options) {
            _options[key] = options[key];
        }
    }

    static configurate($config, done) {
        configurate($config, done);
    }

    static domtest = (function () {
        if (typeof DomTest !== 'undefined') {
            return DomTest;
        }
        return require('domtest');
    }())

    // Is overriden in browser or node builds
    static getSocket: Function = null;
    static getConfig: Function = null;
}

if (global.UTest == null) {
    global.UTest = UTest;
}