import { logger } from '../../vars';
import { net_portIsAvailable } from './net';

declare var app;

let PORT = 5777,
    HOST = '127.0.0.1'
    ;

export function slave_start(callback) {

    app.runAction('shell', {
        command: {
            command: 'atma server',
            detached: true
        },
        parallel: true
    }, function (error) {
        if (error)
            return callback(error);

        ensurePortIsBusy(function (error) {

            if (error)
                return callback(error);



            slave_openBrowser(callback);
        }, 0);
    });

};

export function slave_openBrowser(callback) {
    var url = `http://${HOST}:${PORT}/utest/`;
    var spawn = require('child_process').spawn,
        commands = {
            darwin: 'open',
            win32: 'explorer.exe',
            linux: 'xdg-open'
        };

    spawn(commands[process.platform], [url]);
    callback();

}

function ensurePortIsBusy(callback, tries) {

    if (tries > 10) {
        return callback('<server not responding>');
    }
    if (tries > 3) {
        logger.warn('<Checking server>', tries);
    }

    net_portIsAvailable(HOST, PORT, function (state) {

        if (state === false)
            return callback();


        setTimeout(function () {
            ensurePortIsBusy(callback, ++tries);
        }, 300);
    });
}
