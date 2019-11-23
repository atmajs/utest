export const UTestVars = {
    tests: [],
    listeners: {},
    index: -1,
    testsDone: null,

    clear () {
        this.tests = [];
        this.listeners = {};
        this.index = -1;
    }
}