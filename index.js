if (typeof include === 'undefined') {
    throw new Error('<atma-utest> should be loaded by the `atma` package.');
}

let uri = new net.Uri(include.url);

module.exports = {
    register(rootConfig) {

        let options = rootConfig.atma && rootConfig.atma.settings && rootConfig.atma.settings['atma-utest'] || {};
        let includeConfig = Object.assign({ amd: true }, options.include || {});
        include.cfg(includeConfig);

        rootConfig.$extend({
            actions: {
                test: getPath('/utest.node.js'),
                act: getPath('/utest.node.js'),
            },
            server: {
                subapps: {
                    'utest': getPath('env/HttpTestApplication.js')
                },
                websockets: {
                    '/node': getPath('/utest.server.js'),
                    '/utest-browser': function(socket) {
                        socket.emit('server:utest:handshake', function(info) {
                            let agent = info.userAgent.browser;
                            let msg = agent.name + ' ' + agent.version;
                            logger.log(
                                'uTest Browser connected:', msg.green.bold
                            );
                        })
                    }
                }
            }
        });

    }
};

function getPath(path) {
    return uri
        .combine('lib/')
        .combine(path)
        .toString();
}
