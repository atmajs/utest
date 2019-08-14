import { global, io, assert } from '../vars'
import './utest-extend'
import { ActionVars} from './ActionVars'

global.onerror = function (message, file, lineNumber) {
    var lines = [];
    lines.push('Message: ' + message);
    lines.push('File: ' + file + ':' + lineNumber);

    message = lines.join('\n');
    console.error(message);

    ActionVars.socket.emit('browser:utest:error', {
        error: message
    });
};

global.addEventListener('unhandledrejection', function (event) {
    var error = event.reason;
    var message = error.stack || error.message || JSON.stringify(error);
    console.error(message);
    ActionVars.socket.emit('browser:utest:error', {
        error: message
    });
});


// function server_configurate(action) {
//     var args = Array.prototype.slice.call(arguments);

//     args.unshift('>server:utest:action');
//     args.push(configuration.delegate());

//     socket
//         .emit
//         .apply(socket, args)
//         ;
// }



