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
    }
}
