var RunnerFork = Class({
	Base: Runner,
	failed: 0,
	run: function(done) {
		
		var self = this,
			cfgPath = this.config.fork,
			base = this.config.cwd,
			Fork = require('child_process').fork
			;
		
		logger
			.log('\t\t\t\t>'.bg_yellow)
			.log('Fork'.bg_yellow.black, (net.Uri.combine(base, cfgPath)).bold)
			.log('\t\t\t\t>'.bg_yellow)
			.log('');
		
		var child = Fork(process.mainModule.filename, [
			'test',
			'--config',
			cfgPath
		], {
			cwd: net.Uri.combine(process.cwd(), base)
		});
		
		child.on('exit', function(code){
			self.failed = code;
			logger.log('Fork done'[ code != 0 ? 'bg_red' : 'bg_green']);
			done(code !== 0 ? code : null);
		});
	}
});