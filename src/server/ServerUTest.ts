import { BrowserTunnel } from './BrowserTunnel';
import { Actions } from './actions'
import { class_EventEmitter } from 'atma-utils';

export class ServerUTest extends class_EventEmitter {
    index: number
    tunnels: BrowserTunnel[]
    config: any
    onComplete: Function

	constructor (sockets, logger) {
        super();

        this.onEnd = this.onEnd.bind(this);
        this.onError = this.onError.bind(this);
        this.onAction = this.onAction.bind(this);

		this.index = 0;
		this.tunnels = sockets.map(function(socket) {

			return new BrowserTunnel(socket, logger)
				.on('start', this.pipe('slave:start'))
				.on('end', this.onEnd)
				.on('error', this.onError)
				.on('action', this.onAction)
				.on('browser:assert:success', this.pipe('browser:assert:success'))
				.on('browser:assert:failure', this.pipe('browser:assert:failure'))
				.on('browser:utest:start', this.pipe('browser:utest:start'))
				.on('browser:utest:script', this.pipe('browser:utest:script'))
				;

		}, this);
	}

	
    onEnd (tunnel, result) {

        this.trigger('slave:end', result);
        this.process();
    }
    onError (that, error){
        this.trigger('slave:error', { message: 'Slave error', slave: error });
        this.process();
    }
    onAction (action, config, ...args) {
        Actions.run(action, config, ...args)
    }
	
	stats (){
		return this.tunnels.map(function(x, index){
			index !== 0 && (delete x.result.resources);
			return x.result;
		});
	}

	run (config, done?){
		this.index = -1;
        this.config = config;
        this.onComplete = done;
		this.process();
	}
	process (){
		if (++this.index > this.tunnels.length - 1) {
			this.trigger('server:utest:end', this.stats());
            this.dispose();
            this.onComplete && this.onComplete();
			return;
		}

		this.tunnels[this.index].run(this.config);
	}

	dispose (){
		this.tunnels.forEach(function(x){
			x.dispose()
		});
		this.tunnels = null;
	}
};
