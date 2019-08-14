import { Runner } from './Runner';
import { logger } from '../vars';
import { class_Uri } from 'atma-utils';
import { color } from '../utils/str';

export class RunnerFork extends Runner {
    socket = null;
    
	failed = 0
	run (done) {
		
		var self = this,
			cfgPath = this.config.fork,
			base = this.config.cwd,
			Fork = require('child_process').fork
			;
		
		logger
			.log(('\t\t\t\t>' as any).bg_yellow)
			.log(('Fork' as any).bg_yellow.black, color`bold<${class_Uri.combine(base, cfgPath)}>`)
			.log(('\t\t\t\t>' as any).bg_yellow)
			.log('');
		
		var child = Fork(process.mainModule.filename, [
			'test',
			'--config',
			cfgPath
		], {
			cwd: class_Uri.combine(process.cwd(), base)
		});
		
		child.on('exit', function(code){
			self.failed = code;
			logger.log('Fork done'[ code != 0 ? 'bg_red' : 'bg_green']);
			done(code !== 0 ? code : null);
		});
	}
};