import { logger, include } from '../vars';
import { Actions } from './actions';
import { ServerUTest } from './ServerUTest';
import { Color } from '../utils/color';
import { color } from '../utils/str';

var __config;

export class SocketListener {
    socket: any

    constructor(socket, io, port) {

        if (__config) {
            socket.emit('server:error', 'Server is busy');
            socket.disconnect();
            return;
        }

        logger.log(Color.green('<Node Client Connected>'));

        this.socket = socket
            .on('disconnect', this.disconnected)
            .on('client:utest', function (configs, $cli, done) {
                client_tryTest(io, socket, configs, $cli, done, port, 0);
            })
            .on('>server:utest:action', Actions.run)
            ;
    }

    disconnected() {
        __config = null;
    }

    static getCurrentConfig() {
        return __config;
    }

};

// private

var wait_COUNT = 10,
    wait_DURATION = 1000;

function Pipe (socket, event) {
    return function (...args) {
        logger(90).log(color`bold<green<Socket.Pipe>>`, event);
        socket.emit(event, ...args);
    };
}

class Logger {
    [key: string]: Function

    constructor (socket) {

        for (var key in console) {
            this[key] = create(key);
        }

        function create(key) {
            let originalFn = console[key];
            return function (...args) {
                
                socket.emit('server:log', key, args);
                originalFn.apply(console, args);
            };
        }

    }
};




function client_tryTest(io, socket, configs, $cli, done, port, retryIndex) {
    __config = configs;

    var nsp = io.of('/utest-browser'),
        connections = nsp.connected,
        message
        ;

    if (Object.keys(connections).length === 0) {

        if (retryIndex === 0 && $cli.params.workerAutostart) {
            var url = `http://localhost:5777/utest/`;
            var spawn = require('child_process').spawn,
                commands = {
                    darwin: 'open',
                    win32: 'explorer.exe',
                    linux: 'xdg-open'
                };

            spawn(commands[process.platform], [url]);
        }

        if (++retryIndex <= wait_COUNT) {

            message = `> Waiting for some slaves: ${retryIndex}/${wait_COUNT}`;
            socket.emit('server:log', 'warn', [ message ]);
            setTimeout(function () {

                client_tryTest(io, socket, configs, $cli, done, port, retryIndex);
            }, wait_DURATION);

            return;
        }

        __config = null;

        message = `No Slaves Captured - navigate to http://localhost:${ port || 5777 }/utest/`;
        socket.emit('server:error', message);
        socket.disconnect();
        return;
    }

    var clients = [];
    for (var key in connections) {
        clients.push(connections[key]);
    }
    client_doTest(clients, socket, configs, done);
}


function client_doTest(clients, socket, config, done) {
    // clean resources cache
    include.getResources().js = {};

    var utest = new ServerUTest(clients, new Logger(socket));

    utest
        .on('slave:start', Pipe(socket, 'slave:start'))
        .on('slave:end', Pipe(socket, 'slave:end'))
        .on('slave:error', Pipe(socket, 'slave:error'))
        .on('server:utest:end', Pipe(socket, 'server:utest:end'))
        .on('browser:utest:script', Pipe(socket, 'slave:utest:script'))
        .on('browser:assert:failure', Pipe(socket, 'slave:assert:failure'))
        .on('browser:assert:success', Pipe(socket, 'slave:assert:success'))

        ;

    __config = config;

    utest.run(config, done);
}
	
