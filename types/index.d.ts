declare module "atma-utest-global" {
    export = UTest;
}

declare var UTest: IUtest;

declare interface IUtest {
    (definition: IUTestDefinition): void
    (name: string, runner: Function): void

    domtest: IDomTest
    request (url, method, headers, data, callback)
    server: {
        render (template: string, ...args)
    }

    benchmark (model: IUTestDefinition)
    benchmarkVersions (model: IUTestDefinition)

}

interface IDomTest {
    (subject: HTMLElement | JQuery | any, testMarkup: string | any): PromiseLike<any>
    use (astName: string): IDomTest
    process (subject: HTMLElement | JQuery | any, testMarkup: string | any): PromiseLike<any>
}

interface IUTestDefinition {
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

interface ITestCase {
    (done?: Function, ...args: any[]): void | PromiseLike<any> | any
}
