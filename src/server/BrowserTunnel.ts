import { class_EventEmitter } from 'atma-utils';
import { atma, logger } from '../vars';
import { color } from '../utils/str';

export class BrowserTunnel extends class_EventEmitter {
    socket: any
    result: any

	constructor (socket, logger) {
        super();
		
		this.socket = socket
			.on('browser:log', (type, args) => {

				(logger[type] || logger.log).apply(logger, args);
			})
			
			.on('browser:utest:beforestart', (data, done) => {
				var config = data.config;
				
				//atma
				//	.server
				//	.app
				//	.handlers
				//	.subapps
				//	.get('/utest/')
				//	.value
				//	._app
				//	.config = config
				//	;
				
				atma
					.server
					.app
					.getSubApp('/utest/')
					.config
					.$set('static', config.base)
					;
					
				done();
			})
			.on('browser:utest:start', (stats) => {
				this.trigger('start', stats);
			})
	
			.on('browser:utest:end', (result) => {
				this.result = result;
				this.trigger('end', this, result);
			})
			.on('>server:utest:action', (...args: any[]) => {
				this.trigger('action', ...args);
			})
			.on('browser:utest:script', this.pipe('browser:utest:script'))
			.on('browser:assert:success', this.pipe('browser:assert:success'))
			.on('browser:assert:failure', this.pipe('browser:assert:failure'))
			;
		
	}

	run (config) {

		var socket = this.socket,
			that = this;

		socket.emit('server:utest:handshake', function(stats) {
			logger(90).log(color`bold<cyan<UTest.tunnel - handshake - >>`, stats);

			if (stats.ready === 1) {
				socket.emit('server:utest', config);
				return;
			}
			that.result = {
				error: 'Slave is busy'
			};

			that.trigger('error', that, {
				message: 'Slave is busy'
			});
		});


	}

	dispose () {
		this.socket.removeAllListeners();
		this.socket = null;
	}
}
