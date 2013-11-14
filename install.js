include.exports = {
	process: function(config, done){
		
		setTimeout(function(){
			var base = '../atma-tool/'
	
			
			new io.Directory(io.env.currentDir.combine('lib/').toLocalDir())
					.readFiles()
					.copyTo(new net.Uri(base + 'plugins/utest/'));
	
			new io.File(io.env.currentDir.combine('utest-plugin.js'))
					.copyTo(new net.Uri(base + 'plugins/utest/utest-plugin.js'));
			
					
			done();
		}, 500);
	}
};