import { UTest } from '../UTest'
import { logger, io, app, include, global } from '../vars';
import { cfg_prepairSettings, cfg_loadConfig, cfg_hasScripts, cfg_suiteInfoFromConfig, cfg_getScripts, cfg_parseSuites, cfg_split } from './utils/cfg';
import { NodeVars } from './node-vars';
import { RunnerSuite } from './Suite';
import { cfg_runConfigurationScript } from '../utils/cfg';
import { UAction } from '../UAction';


/**
 *	Atma.Toolkit Action entry
 */

export const AtmaAction = {
    UTest: UTest,
    UAction: UAction,
    help: {
        desciption: 'Start uTest runner. To run test(s) in browser refer to #browser-runner section',
        arguments: {
            '<empty>': 'Load from `test/config.js`',
            '[arg]': 'Check for a test filename in `test/**` or for a suite name',
            '-browser': 'When testing single file, run it in browsers environment',
            '-watch': 'Watch for any file change and rerun the tests',
            '-config path': 'Override default configuration path. @default: `test/config.js`'
        },
        examples: {
            '`atma test`': 'Load suites from `test/config.js` and run tests',
            '`atma test foo`': 'Check for `test/foo.test`, when not exists, load `test/config.js` and check for a suite with a name `foo`'
        },
        '# browser  runner': [
            '1) Start http server: `$ atma server`',
            '2) Navigate with any browser(s) to `http://localhost:5777/utest/`',
            'Now browser slaves are ready to except tests'
        ],
        '# configuration file': {
            description: 'CommonJS module which exports suite(s) for the runner in json format',
            exports: 'Suite | Array<Suite> | Object',
            '# Suite': {
                exec: 'String`dom|node`',
                env: 'ScriptPath | Array<ScriptPath> :: IncludeJS alias feature can be used',
                tests: 'String|GlobPattern - path to test(s)',
                fork: 'ConfigPath - run in seperate thread another test configuration',
                cwd: 'WorkingPath - for `fork`'
            },
            '# Object': {
                'suites': 'Suite | Array<Suite>',
                '$config': {
                    '$before': 'Function<?onComplete> | ScriptPath',
                    '$after': 'Function<?onComplete> | ScriptPath'
                }
            },

            '- simple suites array example': [
                {
                    exec: 'dom',
                    env: [
                        'src/foo.js::Foo'
                    ],
                    tests: 'src/browser/**.test'
                }, {
                    exec: 'node',
                    env: 'src/foo.js::Foo',
                    tests: 'src/node/**.test'
                }
            ]
        }
    },
    process: function (setts, done) {

        // configurate
        io.File.disableCache();
        logger.cfg('logCaller', false);
        process.env.ENV = 'test';
        process.env.NODE_ENV = 'test';


        var arg = setts.script || app.config.$cli.args[1],
            config;

        if (typeof arg === 'string') {
            // Normalize path to forward slashes
            arg = arg.replace(/\\/g, '/');
        }

        cfg_prepairSettings(setts, arg);

        config = cfg_loadConfig(setts);
        if (cfg_hasScripts(setts)) {
            // running via cli or atma-action, take `env`/`$config` from config
            cfg_suiteInfoFromConfig(setts, config);
        }
        else {

            // Parse all from suites, as no scripts via cli or atma-action
            cfg_getScripts(setts, config);

            if (arg && !(config.suites && config.suites[arg]))
                return done('Argument is not resolved as a script, nor as a suite name: ' + arg);


            if (arg) {
                var suites = config.suites;
                for (var key in suites) {
                    if (key !== arg)
                        delete suites[key];
                }

                setts.suites = cfg_parseSuites(suites, setts.base);
            }
        }

        NodeVars.configs = cfg_split(setts);
        if (NodeVars.configs.length === 0) {
            logger.log('<config>', config);
            return done('No scripts to test');
        }


        global.include = include
            .instance(setts.base)
            .setBase(setts.base)
            ;

        if (setts.$config && setts.$config.includejs) {
            include.cfg(setts.$config.includejs);
        }

        NodeVars.suite = new RunnerSuite(NodeVars.configs, setts);
        // run configuration only if has suites, otherwise configuration will be run by the root suite
        var cfg = config.suites && config,
            runCfg = cfg_runConfigurationScript;

        runCfg('$before', cfg, function () {
            NodeVars.suite.run(function (exitCode) {
                runCfg('$after', cfg, function () {
                    process.exit(exitCode);
                });
            });
        });
    }
};

process.on('uncaughtException', function (error) {
    console.error(error.stack || error);

    if (NodeVars.suite.watch) {
        return;
    }
    process.exit(1);
});

process.on('unhandledRejection', function (error: Error) {
    console.error(error.stack || error);

    if (NodeVars.suite.watch) {
        return;
    }
    process.exit(1);
});
