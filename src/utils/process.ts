declare var atma;

/**
 * params:
 *  	- id: string
 * 		- action: string enum, start|stop
 * 		- command: string
 * 		- cwd: string (default current cwd)
 * 		- detached: boolean
 *      - silent: boolean
 *      - matchReady: string (RegExp)
 */
export function process_toggle (params, done) {
    var id = params.id || params.command,
        process = __process[id];
    if (params.action === 'stop') {

        if (process != null) {
            delete __process[id];
            process.kill(done);
        }
        done(new Error('Process not found to stop'));
        return;
    }

    if (process != null) {
        return done(new Error(`Process '${id}' is active`));
    }

    var options = {
        cwd       : params.cwd,
        command   : params.command,
        detached  : params.detached,
        matchReady: toRegexp(params.matchReady),
        silent    : params.silent === void 0 ? params.silent : false,

    };

    const shellbee: typeof import('shellbee') = require('shellbee');
    const shell = process = __process[id] = new shellbee.Shell(options);
    shell
        .promise
        .catch(() => {
            delete __process[id];
        });

    shell
        .on('process_exception', data => done(data.error))
        .on('process_ready', () => done(null, process))
        ;


    shell.run();
};

var __process = {};

function toRegexp(str) {
    if (str == null || str[0] !== '/') {
        return null;
    }
    var last = str.lastIndexOf('/');
    var rgx = str.substring(1, last);
    var flags = str.substring(last + 1);
    return new RegExp(rgx, flags);
}
