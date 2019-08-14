import { global } from '../vars'
import { obj_extend } from 'atma-utils';

const assert = global.assert;

(function () {
    
    if (assert.total != null && assert.reset != null) {
        return;
    }

    obj_extend(assert, {
        total: 0,
        failed: 0,
        errors: 0,
        timeouts: [],
    
        reset: function () {
    
            this.callbacks.length = 0;
            this.timeouts.length = 0;
    
            this.failed = 0;
            this.total = 0;
            this.errors = 0;
        },
    
        // @obsolete
        callback: function assert_callback(callback) {
            return this.await(callback);
        }
    });
    
    //> events
    
    
    assert.on('start', function () {
        assert.total++;
    });
    
    assert.on('success', function () {
    
        assert.onsuccess && assert.onsuccess();
    });
    
    assert.on('fail', function (error) {
    
        // force stack calculation
        // (otherwise stack is not sent from browsers to the server)
        if (Object.defineProperty) {
            Object.defineProperty(error, 'stack', {
                value: error.stack,
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(error, 'message', {
                value: error.message,
                enumerable: true,
                configurable: true
            });
        }
    
    
        assert.failed++;
        assert.onfailure && assert.onfailure(error);
    });
    
    
    
    /* GLOBALS */
    
    global.eq_ = assert.equal;
    global.notEq_ = assert.notEqual;
    global.deepEq_ = assert.deepEqual;
    global.notDeepEq_ = assert.notDeepEqual;
    global.strictEq_ = assert.strictEqual;
    global.notStrictEq_ = assert.notStrictEqual;
    global.has_ = assert.has;
    global.hasNot_ = assert.hasNot;
    global.is_ = assert.is;
    global.isNot_ = assert.isNot;
    global.gt_ = assert.gt_;
    global.gte_ = assert.gte_;
    global.lt_ = assert.lt_;
    global.lte_ = assert.lte_;
    
    
    
    // obsolete for underscored
    global.eq = assert.equal;
    global.notEq = assert.notEqual;
    global.deepEq = assert.deepEqual;
    global.notDeepEq = assert.notDeepEqual;
    global.strictEq = assert.strictEqual;
    global.notStrictEq = assert.notStrictEqual;
    global.has = assert.has;
    global.hasNot = assert.hasNot;
    global.is = assert.is;
    global.isNot = assert.isNot;
    // <!---
    
}());


export const eq_ = assert.equal;