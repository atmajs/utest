// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../atma-utils/mixin
//   ../atma-utils

declare module 'atma-utest' {
    
    
    
    import { AtmaAction } from 'atma-utest/node/action';
    export = AtmaAction;
}

declare module 'atma-utest/node/action' {
    import { UTest } from 'atma-utest/UTest';
    import { UAction } from 'atma-utest/UAction';
    import { it } from 'atma-utest/utils/syntax';
    /**
      *	Atma.Toolkit Action entry
      */
    let AtmaAction: {
        mocha: {
            it: typeof it;
            describe: typeof UTest.create;
        };
        UTest: typeof UTest;
        UAction: typeof UAction;
        help: {
            desciption: string;
            arguments: {
                '<empty>': string;
                '[arg]': string;
                '-browser': string;
                '-watch': string;
                '-config path': string;
            };
            examples: {
                '`atma test`': string;
                '`atma test foo`': string;
            };
            '# browser  runner': string[];
            '# configuration file': {
                description: string;
                exports: string;
                '# Suite': {
                    exec: string;
                    env: string;
                    tests: string;
                    fork: string;
                    cwd: string;
                };
                '# Object': {
                    suites: string;
                    $config: {
                        $before: string;
                        $after: string;
                    };
                };
                '- simple suites array example': ({
                    exec: string;
                    env: string[];
                    tests: string;
                } | {
                    exec: string;
                    env: string;
                    tests: string;
                })[];
            };
        };
        process(setts: any, done: any): any;
    };
    export { AtmaAction };
}

declare module 'atma-utest/UTest' {
    import { Statics } from 'atma-utils/mixin'; 
     /// <reference types="atma-utils" />
    import { UTestServer } from 'atma-utest/UTest-server';
    import { UTestBenchmark } from 'atma-utest/UTest-benchmark';
    import { UTestConfiguration } from 'atma-utest/UTest-config';
    export interface IUTestDefinition {
            $config?: {
                    timeout?: number;
                    errorableCallbacks?: boolean;
                    breakOnError?: boolean;
                    'http.config'?: any;
                    'http.eval'?: string;
                    'http.include'?: any;
                    'http.service'?: any;
                    'http.process'?: any;
                    'util.process'?: any;
            };
            $before?: (done?: Function) => void | PromiseLike<any>;
            $after?: (done?: Function) => void | PromiseLike<any>;
            $teardown?: (done?: Function) => void | PromiseLike<any>;
            [key: string]: ITestCase | IUTestDefinition | any;
    }
    export interface ITestCase {
            (done?: Function, ...args: any[]): void | PromiseLike<any> | any;
    }
    export interface IUTestRunnerConfig {
            callback?: Function;
            /** Filter suite cases to match the query */
            query?: string;
    }
    const UTest_base: Statics<typeof UTestServer> & Statics<typeof UTestConfiguration> & Statics<typeof UTestBenchmark> & (new () => UTestServer & UTestConfiguration & UTestBenchmark);
    export class UTest extends UTest_base {
            static default: typeof UTest;
            static create<T extends typeof UTest>(this: T | void, mix: string | IUTestDefinition, $suite?: IUTestDefinition | Function, parent?: any): InstanceType<T>;
            name: string;
            suite: IUTestDefinition;
            proto: IUTestDefinition;
            processed: any[];
            onComplete: Function;
            errors: number;
            constructor(mix: string | IUTestDefinition, $suite?: IUTestDefinition | Function, parent?: any);
            run(callback: Function): any;
            run(options: IUTestRunnerConfig): any;
            handleQuery(query?: string | RegExp): boolean;
            handleBangs(): void;
            handleRanges(): void;
            _start(): void;
            _nextCase(): void;
            static stats(): {
                    suites: number;
            };
            static clear(): void;
            static run(callback: any): void;
            static on(event: any, callback: any): void;
            static trigger(event: any, ...args: any[]): void;
            static isBusy(): boolean;
            static cfg(options: any): void;
            static configurate($config: any, done: any): void;
            static domtest: any;
            static getSocket: Function;
            static getConfig: Function;
    }
    export {};
}

declare module 'atma-utest/UAction' {
    import { UTest } from 'atma-utest/UTest';
    export class UAction extends UTest {
        constructor(mix: string | any, suite?: any, parent?: any);
        static spawn(command: string): void;
        static getCurrent(): void;
    }
    export class Action {
        command: string;
        constructor(command: string);
        spawn(): void;
        getLogs(): void;
    }
}

declare module 'atma-utest/utils/syntax' {
    export function syntax_Mocha(init: any): any;
    export function it(name: any, fn: any): void;
}

declare module 'atma-utest/UTest-server' {
    import { class_Dfr } from 'atma-utils';
    export class UTestServer {
        static server: {
            render(template: any, ...args: any[]): class_Dfr<any>;
            request: (mix: any) => class_Dfr<any>;
        };
    }
}

declare module 'atma-utest/UTest-benchmark' {
    import { UTest } from 'atma-utest/UTest';
    export class UTestBenchmark {
        static benchmark(model: any): UTest;
        static benchmarkVersions(model: any): UTest;
    }
}

declare module 'atma-utest/UTest-config' {
    import { UTest } from 'atma-utest/UTest';
    export function configurate($config: any, done: any): void;
    export class UTestConfiguration {
        $cfg(this: UTest, key: any): any;
        configurate(done: Function): any;
        configurate(config: any, done: Function): any;
    }
}

