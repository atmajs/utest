declare var global;


const sinon = global.sinon = require('sinon');
const assertion = global.assert = require('assertion');
const domtest = global.DomTest = require('domtest');

export { sinon, assertion, domtest };