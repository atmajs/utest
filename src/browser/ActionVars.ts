import { global } from '../vars'
import { notify } from './notify';
import { Await } from '../class/Await';
import { utest_start } from './utest-start';

export const state_ready = 1;
export const state_busy = 2;
        
        
export const ActionVars = {
    state: state_ready,

    configuration: new Await,
   
    socket: global.io.connect(location.protocol + '//' + location.host + '/utest-browser')
        .on('connect', function(){
            notify('connected');
        })
        .on('disconnect', function(){
            notify('disconnected');
        })
        .on('server:utest:handshake', function(done) {
            console.log('browser:handshake');
            done({
                userAgent: (window as any).browserInfo,
                ready: ActionVars.state
            });
        })
        .on('server:utest', utest_start)
        
}
