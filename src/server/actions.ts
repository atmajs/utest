import { logger, atma, io, include, global } from '../vars'
import { process_toggle } from '../utils/process';

var _actions = {

    registerService (route, handlersPath) {

        logger(90)
            .log('<utest> register service')
            .log(route, handlersPath)
            ;

        atma
            .server
            .app
            .handlers
            .registerService(route, handlersPath)
            ;
    },

    include (sources, done) {
        var base = io.env.currentDir.toDir();
        include
            .instance(base)
            .setBase(base)
            .js(sources)
            .done(function () {
                done();
            });
    },

    eval (source, done) {
        var base = io.env.currentDir.toDir();
        global.include = include
            .instance(base)
            .setBase(base)
            ;

        var name,
            result
            ;

        source = source.replace(/^function\s*\(\s*([\w\d_$]+)\s*\)\s*\{/, function (full, cbname) {
            name = cbname;

            return '';
        });

        if (name == null) {

            try {
                eval('(' + source + '())');
            } catch (error) {
                logger.error('<$config:eval>', error);
            }

            done();
            return;
        }

        source = source.replace(/\}\s*$/, '');

        try {
            result = new (Function(name, source))(done);
        } catch (error) {
            logger.error('<$config:eval error>', error);

            return done(error);
        }

        return result;
    },
    process: function (params, done) {
        logger.log('started');
        process_toggle(params, function () {
            done();
        });
    }
};


export const Actions = {
    run (action, config) {
        var fn = _actions[action];
        if (typeof fn !== 'function') {
            logger.error('<utest:server> unknown action', action);

            var done = arguments[arguments.length - 1];
            if (typeof done === 'function')
                done();

            return;
        }

        if (config && config.base)
            include.cfg('path', config.base);


        fn.apply(null, Array.prototype.slice.call(arguments, 2));
    },

    register (action, worker) {
        _actions[action] = worker;
    }
}