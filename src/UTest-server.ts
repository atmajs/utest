import { _Array_slice } from './vars';
import { class_Dfr } from 'atma-utils';
import { UTestPage } from './UTest-page';

export class UTestServer {

    static server = {
        render(template, ...args /* [, params, callback] */) {

            var dfr = new class_Dfr(),
                callback
                ;

            if (typeof args[args.length - 1] === 'function') {
                callback = args.pop();
            }

            var params = args.shift() || {},
                model = params.model,
                scripts = params.scripts,
                controller = params.controller;

            UTestPage.request('/utest/server/render', 'post', null, {
                template: template,
                model: model,
                controller: controller,
                scripts: scripts,
                base: '/utest/'
            }, done);

            function done(error, doc, win) {

                if (callback)
                    callback(error, doc, win);

                if (error) {
                    dfr.reject(error);
                    return;
                }

                dfr.resolve(doc, win);
            }

            return dfr
        },

        request: function (mix /* [, method, data, callback] */) {
            var url = mix,
                method,
                data,
                headers,
                callback
                ;
            if (typeof mix !== 'string') {
                url = mix.url;
                method = mix.method;
                data = mix.data;
                headers = mix.headers;
            }

            var args = _Array_slice.call(arguments, 1),
                dfr = new class_Dfr()
                ;

            if (typeof args[args.length - 1] === 'function')
                callback = args.pop();

            if (args.length > 0)
                method = args.shift();

            if (args.length > 0)
                data = args.shift();

            UTestPage.request(url, method, headers, data, done);

            function done(error, doc, win) {
                if (callback)
                    callback(error, doc, win);

                if (error) {
                    dfr.reject(error);
                    return;
                }

                dfr.resolve(doc, win);
            }

            return dfr;
        }
    }
};
