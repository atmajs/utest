import './wrapper'
import { global } from '../vars'
import { obj_extend } from 'atma-utils'
import { rgx_fromString } from '../utils/rgx';

const assert = global.assert;


assert.resolveData = function (stackData, base) {

    var data = obj_extend({}, stackData),
        stack = stackData.stack.split('\n').splice(1),
        rgx_http = /http:\/\/([^\/]+)\//,
        rgx_local = rgx_fromString(base.replace('file:///', '')),
        rgx_file = /([^\(@]+\:\d+(\:\d+)?)\)?$/;

    if (stack.length === 0) {
        delete data.stack;
        return data;
    }

    stack = stack.map(function (x) {
        return x
            .replace(rgx_http, '')
            .replace(rgx_local, '')
            .replace('at ', '');
    });
    var i = -1,
        imax = stack.length,
        file;
    while (++i < imax) {
        var path = stack[i].trim();
        if (path.indexOf('assert') > -1)
            continue;

        file = rgx_file.exec(path);
        if (file != null)
            break;
    }

    if (file) {
        var parts = file[1].split(/:(?![\/\\])/);

        data.file = parts[0];
        data.line = parts[1] << 0;
        data.col = parts[2] << 0;
    } else {
        console.warn('Filepath could not be parsed from', stack[0].trim());
    }


    data.stack = stack.join('\n');
    return data;
};
