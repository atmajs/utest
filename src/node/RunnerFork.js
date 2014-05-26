var RunnerFork = Class({
	Base: Runner,
	run: function(done) {
		
		var cfgPath = this.config.fork,
			base = this.config.base,
			Fork = require('child_process').fork
			;
		
		logger
			.log('\t\t\t\t>'.bg_yellow.bold)
			.log('Fork'.bg_yellow.black, cfgPath.bold)
			.log('\t\t\t\t>'.bg_yellow.bold)
			.log('');
		
		var child = Fork(process.mainModule.filename, [
			'test',
			'--config',
			cfgPath,
			'--base',
			base
		]);
		
		child.on('exit', function(code){
			logger.log('Fork done'[ code != 0 ? 'bg_red' : 'bg_green']);
			done(code !== 0 ? code : null);
		});
	}
});