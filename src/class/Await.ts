import { class_Dfr } from 'atma-utils';

export class Await extends class_Dfr {

    _wait = 0
    _timeout = null
    _result = null
    _resolved = []

    constructor(...args) {
        super();

        var imax = args.length,
            i = -1,
            dfr
            ;
        while (++i < imax) {
            dfr = args[i];
            if (dfr != null && typeof dfr.done === 'function')
                await_deferredDelegate(this, null, dfr);
        }
    }

    delegate(name?, errorable?) {
        return await_createDelegate(this, name, errorable);
    }

    deferred(name) {

        return await_deferredDelegate(
            this,
            name,
            new class_Dfr);
    }

    static TIMEOUT = 2000
};

function await_deferredDelegate(awaitFn, name, dfr) {
    var delegate = await_createDelegate(awaitFn, name, true);
    return dfr
        .done(function (...args) {
            args.unshift(null);

            delegate.apply(null, args);
        })
        .fail(function (error) {

            delegate(error);
        })
        ;
}

function await_createDelegate(awaitFn, name, errorable) {
    if (errorable == null)
        errorable = true;

    if (awaitFn._timeout)
        clearTimeout(awaitFn._timeout);

    awaitFn.defer();
    awaitFn._wait++;

    if (name) {
        if (!awaitFn._result)
            awaitFn._result = {};

        if (name in awaitFn._result)
            console.warn('<await>', name, 'already awaiting');

        awaitFn._result[name] = null;
    }

    var delegate = fn_createDelegate(await_listener, awaitFn, name, errorable)
        ;

    awaitFn._timeout = setTimeout(delegate, Await.TIMEOUT);

    return delegate;
}

function await_listener(awaitFn, name, errorable, ...args) {

    if (arguments.length === 0) {
        // timeout
        awaitFn._wait = 0;
        awaitFn.reject('408: Timeout');
        return;
    }

    if (awaitFn._wait === 0)
        return;

    var result = awaitFn._result;

    if (name) {

        result[name] = {
            error: errorable ? args.shift() : null,
            arguments: args
        };
    } else if (errorable && arguments[3] != null) {

        if (result == null)
            result = awaitFn._result = {};

        result.__error = arguments[3];
    }

    if (--awaitFn._wait === 0) {
        clearTimeout(awaitFn._timeout);

        var error = result && result.__error
            ;
        var val,
            key;

        if (error == null) {
            for (key in result) {

                val = result[key];
                error = val && val.error;

                if (error)
                    break;
            }
        }

        if (error) {
            awaitFn.reject(error, result);
            return;
        }

        awaitFn.resolve(result);
    }
}


function fn_createDelegate(fn, ...args) {
    return function (...argsInner) {
        let arr = args;
        if (argsInner.length > 0) {
            arr = args.concat(argsInner);
        }
        return fn.apply(null, arr);
    };
};