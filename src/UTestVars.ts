import { UTest } from './UTest';

export const UTestVars = {
    tests: [] as UTest[],
    listeners: {},
    index: -1,
    testsDone: null,

    clear () {
        this.tests = [];
        this.listeners = {};
        this.index = -1;
    },
    remove (utest: UTest) {
        let i = this.tests.indexOf(utest);
        this.tests.splice(i, 1);
    }
}
