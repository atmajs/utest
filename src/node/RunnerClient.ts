import { Runner, status_connecting, status_connected, status_blank, status_ready, status_testing } from './Runner';
import { io_connect, io_clean } from './utils/io';
import { slave_start } from './utils/slave';
import { logger, app } from '../vars';
import { color } from '../utils/str';

export class RunnerClient extends Runner {
    startServer: boolean
    socket: any

    constructor(config) {
        super(config);

        this.suites.forEach(function (suite) {

            var key, val, cfg = suite.$config;
            for (key in cfg) {
                val = cfg[key];
                if (typeof val === 'function') {
                    cfg[key] = val.toString();
                }
            }
        });
    }
    run(done) {


        this.status = status_connecting;

        var config = this.config,
            port = config.port || 5777
            ;

        io_connect(this.config)

            .fail(error => {
                io_clean();

                if (this.startServer === true) {

                    var msg = `Test server connection error - http://localhost:${port}/utest`;
                    done(msg);
                    return;
                }


                this.startServer = true;
                logger.log(color`<utest:server not started> bold<green<starting...>>`)

                slave_start(function (error) {

                    if (error)
                        return done('Failed to start server: ' + error);

                    this.run(done);
                })

            })

            .done(socket => {

                logger.log(color`bold<green<server connected>>`);

                this.socket = socket;


                socket
                    .on('error', function (error) {
                        logger.error('Socket error', error);
                        io_clean();
                    })
                    .on('server:utest:end', (stats) => {
                        this.onComplete(stats);
                    })
                    .on('server:error', message => {
                        this.socket.disconnect();

                        logger.error(message);
                        done(1);
                    })
                    .on('server:log', function (type, args) {
                        var fn = console[type] || console.log;
                        fn.apply(console, args);
                    })
                    .on('slave:start', function (stats) {
                        var message = color`bold<${stats.userAgent.browser.name} ${stats.userAgent.browser.version}>`;
                        logger
                            .log(message)
                            .log('');
                    })
                    .on('slave:end', function (stats) {
                        logger.log('Slave completed'[stats.failed ? 'red' : 'green']);
                    })
                    .on('slave:error', function (error) {
                        logger.error(error);
                    })
                    .on('slave:utest:script', info => {
                        this.notifyTest(info.script);
                    })
                    .on('slave:assert:failure', (args) => {
                        var data = args[0];

                        this.onFailure(data);

                    })
                    .on('slave:assert:success', this.onSuccess.bind(this))
                    ;


                // RUN

                this.status = status_connected;
                this.run = this.runTests;
                this.runTests();
            });

    }

    runTests() {
        logger.log(
            color`bold<-->--bold<-->--bold<-->--bold<--> yellow<client>`,
            color`bold<${(Date as any).format(new Date(), 'HH:mm:ss')}>`,
            '\n'
        );

        var cli = app.config.$cli;
        if (this.startServer)
            cli.params.workerAutostart = false;

        switch (this.status) {
            case status_blank:
            case status_connected:
            case status_ready:
                this.status = status_testing;
                this.socket.emit('client:utest', this.suites, cli);
                return;
        }
        logger.warn('Server is not ready', this.status);
    }
};