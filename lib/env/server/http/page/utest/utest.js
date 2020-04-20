
include
    .load('utest.mask')
    .done(function (resp) {

        include.exports = atma.server.HttpPage.create({
            template: resp.load.utest,
            master: '',

            onRenderStart() {

                this.model = {
                    scripts: scripts_resolve()
                };
            }
        });

    })

var scripts_resolve;
(function () {

    let appConfig = app.config;

    scripts_resolve = function (scripts) {
        if (scripts == null)
            scripts = [];

        add_source(scripts, '/socket.io/socket.io.js');

        getScripts().forEach((x) => {
            add_source(scripts, x);
        });


        let routes = appConfig.defaultRoutes;
        if (routes)
            add_script(scripts, 'include.routes(' + JSON.stringify(routes, null, 4) + ')');


        add_script(scripts, 'include.cfg({ path: "/utest/" })');
        return scripts;
    }


    let _scripts = null;
    function getScripts() {
        if (_scripts) {
            return _scripts;
        }
        let main = process.mainModule.filename;
        let sameCwd = main.includes(process.cwd());
        let atmaPath = main.endsWith('atma')
            ? ('file://' + main.replace(/\/atma$/, ''))
            : null;
        
        // let packageBaseDir = (function () {
        //     var path = 'file://' + __dirname;
        //     var i = path.indexOf('atma-utest');
        //     path = path.substring(0, i) + 'atma-utest/';
        //     return path;
        // }());

        return _scripts = ([
            'node_modules/atma-logger/lib/browser.min.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/assertion/lib/assert.js',
            'node_modules/sinon/pkg/sinon.js',
            'node_modules/maskjs/lib/mask.js',
            'node_modules/atma-class/lib/class.js',
            'node_modules/includejs/lib/include.js',
            'node_modules/domtest/lib/domtest.js',
            'lib/utest.browser.js',
        ])
            .map(function (x) {
                let path, wwwPath;
                if (sameCwd === false) {
                    path = `/node_modules/atma-utest/${x}`;
                    if (io.File.exists(path)) {
                        return path;
                    }
                    path = `/${x}`;
                    if (io.File.exists(path)) {
                        return path;
                    }
                }
                if (atmaPath) {
                    path = `${atmaPath}/node_modules/atma-utest/${x}`;
                    wwwPath = `/.reference/atma_toolkit/node_modules/atma-utest/${x}`;
                    if (io.File.exists(path)) {
                        return wwwPath
                    }
                    path = `${atmaPath}/${x}`;
                    wwwPath = `/.reference/atma_toolkit/${x}`;
                    if (io.File.exists(path)) {
                        return wwwPath
                    }
                }
                console.error(`UTest WWW path not found: ${x}. Same path - ${sameCwd}. Main: ${main}. Atma path: ${atmaPath}`);
            })
    }


    function add_source(collection, path) {
        collection.push({
            path: path
        });
    }

    function add_script(collection, script) {
        collection.push({
            script: script
        });
    }

}());