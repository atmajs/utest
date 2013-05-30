var status_blank = 1,
	status_connecting = 2,
	status_connected = 3,
	status_prepair = 4;
	status_testing = 5,
	status_ready = 6,
	util = require('util');
	

var Runner = (function() {

	
	function utest_resolveFiles(base, scripts) {
		var files = [];
		
		base = new net.URI(base);
		
		for (var i = 0, x, imax = scripts.length; i < imax; i++){
			x = new net.URI(scripts[i]);
			
			if (x.isRelative()) {
				x = base.combine(x);
			}
			
			x = new io.File(x);
			
			if (x.exists() === false) {
				console.error('File - 404 - ', x.uri.toLocalFile());
				continue;
			}
			files.push(x);
		}
		return files;
	}
	

	return Class({
		Construct: function(config) {
			this.config = config;
			this.status = status_blank;
			this.files = utest_resolveFiles(config.base, config.scripts);
			
		},
		onComplete: function(stats) {
			this.status = status_ready;

			function count(key) {
				return ruqq.arr.aggr(stats, 0, function(x, aggr) {
					if (x.error) {
						console.log(x.error);
						return 0;
					}
					
					if (x[key] == null) {
						return aggr;
					}
					
					if (typeof x[key] === 'object' && 'length' in x[key]) {
						return x[key].length + aggr;
					}
					
					return x[key] + aggr;
				});
			}

			var total = count('total'),
				failed = count('failed'),
				timeouts = count('timeouts'),
				callbacks = count('callbacks'),
				browsers = stats.length;

			if (total === 0) {
				console.error('No assertions');
				failed++;
			}
			
			if (callbacks !== 0 || timeouts !== 0) {
				!failed && failed++;
			}

			console.log('\nDone. ' [failed ? 'red' : 'green'].bold);
			
			failed > total && (failed = total);
			console.log('bold{Assertions}: bold{green{%1}}(bold{red{%2}})'
							.format(total - failed, failed)
							.colorize());
			
			console.log('bold{Timeouts}: bold{%1{%2}}'
							.format(timeouts ? 'red' : 'green', timeouts)
							.colorize());
			
			console.log('bold{Failed Callbacks}: bold{green{%1}}'.format(callbacks).colorize());

			if (config.watch == null) {
				if (this.socket) {
					this.socket.socket.disconnectSync();
				}
				
				process.exit(failed);
				return;
			}

			var resources = stats.resources || (stats[0] && stats[0].resources);

			if (resources == null && this.getResources) {
				resources = this.getResources();
			}

			watch(this.config.base, resources, this.run.bind(this));
			console.log(' - watcher active'.yellow);
		},
		
		
		// assertion events
		
		onFailure: function(data){
			if (!data.stack) {
				console.error('Unknown exception - ', data);
				return;
			}
			
			data = assert.resolveData(data, this.config.base);
			
			console.log('\n');
			
			if (data.file && data.line != null) {
				
				var path = data.file.replace(/\/?utest\//i, '/'),
					uri = new net.URI(this.config.base).combine(path),
					source = new io.File(uri).read().split(/\r\n|\r|\n/g),
					line = source[data.line - 1],
					code = line && line.trim();
				
				if (data.actual && data.expected) {
					var msg = 'bold{yellow{%1}} bold{red{<=>}} bold{yellow{%2}}';
					console.log(msg
									.colorize()
									.format(data.actual, data.expected));
				}
				
				console.log('bold{%1}:%2'.colorize().format(data.file, data.line + 1));
				console.log('  bold{cyan{ >> }} bold{red{ %1 }}'.colorize().format(code));
				return;
			}
				
			
			console.error(data.message);
			console.error(data.stack);
			
		},
		
		onSuccess: function(){
			util.print(' |'.green.bold);
		}
	});

	
}());