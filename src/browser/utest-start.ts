import { RunnerDom } from './RunnerDom';
import { ActionVars } from './ActionVars';
import { state_busy, state_ready } from './const';
import { assert } from '../vars'
import { browserInfo } from './detect';

export function utest_start(configs) {
    
    if (!configs) {
        ActionVars.socket.emit('browser:utest:end', {
            error: 'No scripts to be tested'
        });
        return;
    }

    ActionVars.state = state_busy;

    if (ActionVars.configuration._wait > 0) {
        ActionVars.configuration.always(utest_start.bind(null, configs));
        return;
    }

    RunnerDom.run(configs, ActionVars.socket, function () {

        ActionVars.state = state_ready;

        var resources = RunnerDom.getResources();

        ActionVars.socket.emit('browser:utest:end', {
            total: assert.total,
            failed: assert.failed,
            timeouts: assert.timeouts,
            callbacks: assert.callbacks,
            errors: assert.errors,

            userAgent: browserInfo,
            resources: resources
        });
    });

}