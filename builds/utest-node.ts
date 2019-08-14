import { global } from '../src/vars'

import '../src/assert/assert-node'
import '../src/UTest'

import { AtmaAction } from '../src/node/action'

(function(){
    global.sinon = require('sinon');
}());

(function(){
    global.assert = require('assertion');
}());

(function(){
    global.DomTest = require('domtest');
}());

export = AtmaAction;
