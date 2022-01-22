import { global } from '../vars'
// TEST interfaces

export function syntax_Mocha (init){
    suite = {};

    global.it = it;
    global.before = before;
    global.beforeEach = beforeEach;
    global.after = after;
    global.afterEach = afterEach;
    global.describe = describe;
    init();
    return suite;
};


let suite;

function describe(name, fn) {
    let root = suite;
    root[name] = syntax_Mocha(fn);
    suite = root;
}
export function it(name, fn) {
    suite[name] = fn;
}
function before(fn){
    suite['$before'] = fn;
}
function after(fn){
    suite['$after'] = fn;
}
function afterEach(fn){
    suite['$teardown'] = fn;
}
function beforeEach(fn){
    suite['$teardown'] = fn;
}
