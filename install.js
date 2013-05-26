include.exports = {
	process: function(){

		var base = 'c:/Users/Tenbits/AppData/Roaming/npm/node_modules/includejs/'

		new io.Directory(io.env.currentDir.combine('/lib/').toString())
				.readFiles()
				.copyTo(new net.URI(base + 'plugins/utest/'));

		new io.File(io.env.currentDir.combine('utest-plugin.js'))
				.copyTo(new net.URI(base + 'plugins/utest/utest-plugin.js'));
		
				
	}
}