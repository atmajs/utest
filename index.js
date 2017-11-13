if (typeof include === 'undefined')
    throw new Error('<atma-utest> should be loaded by the `atma` package.');


var uri = new net.Uri(include.url);

include.exports = {
    register(rootConfig) {

        var options = rootConfig.atma && rootConfig.atma.settings && rootConfig.atma.settings['atma-utest'];
        var includeConfig = Object.assign({ amd: true }, options.include || {});
        include.cfg(includeConfig);

        rootConfig.$extend({
            actions: {
                test: getPath('/utest.node.js')
            },
            server: {
                subapps: {
                    'utest': getPath('env/HttpTestApplication.js')
                },
                websockets: {
                    '/node': getPath('/utest.server.js'),
                    '/utest-browser': function(socket) {
                        socket.emit('server:utest:handshake', function(info) {
                            var agent = info.userAgent.browser,
                                msg = agent.name + ' ' + agent.version;

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