var status_blank = 1,
	status_connecting = 2,
	status_connected = 3,
	status_prepair = 4;
	status_testing = 5,
	status_ready = 6,
	util = require('util');
	

var Runner = (function() {

	
	function utest_resolveFiles(config) {
		var files = [];
		
		if (arr_isArray(config)) {
			for (var i = 0, x, imax = config.length; i < imax; i++){
				x = config[i];
				
				files = files.concat(utest_resolveFiles(x));
			}
			return files;
		}
		
		var scripts = config.scripts,
			base = config.base;
		
		base = new net.Uri(base);
		
		for (var i = 0, x, imax = scripts.length; i < imax; i++){
			x = new net.Uri(scripts[i]);
			
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
		Base: Class.EventEmitter,
		Construct: function(config) {
			this.config = config;
			this.status = status_blank;
			this.files = utest_resolveFiles(config);
			
			this.suites = arr_isArray(config) ? config : [config];
			
			ruqq.arr.each(this.suites, function(x){
				x.files = utest_resolveFiles(x);
			});
		},
		notifyTest: function(url){
			logger.log('Test: ', (url.length > 23 ? '...' + url.substr(-20) : url).bold);
		},
		onComplete: function(stats) {
			this.status = status_ready;

			function count(key) {
				return ruqq.arr.aggr(stats, 0, function(x, aggr) {
					if (x.error) {
						logger.error(x.error);
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
				errors = count('errors'),
				browsers = stats.length;

			if (total === 0) {
				console.error('No assertions');
				failed++;
			}
			
			if (errors > 0) {
				failed++;
			}
			
			if (callbacks !== 0 || timeouts !== 0) {
				!failed && failed++;
			}
			

			logger.log('\nDone. '[failed ? 'red' : 'green'].bold);
			
			
			logger.log(
				'bold<Assertions>: bold<green<%1>>(bold<red<%2>>)'
					.format(total - failed, failed)
					.color);
			
			logger.log(
				'bold<Timeouts>: bold<%1<%2>>'
					.format(timeouts ? 'red' : 'green', timeouts)
					.color);
			
			logger.log(
				'bold<Failed Callbacks>: bold<green<%1>>'
					.format(callbacks)
					.color);

			this.failed = failed;
			this.stats = stats;
			
			this.trigger('complete', this);
			
		},
		
		getResources: function(){
			if (this.stats == null) 
				return [];
			
			
			var resources = this.stats.resources || (this.stats[0] && this.stats[0].resources);

			if (resources == null && this.getResources) 
				resources = this.getResources();
				
			return resources || [];
		},
		
		// assertion events
		
		onFailure: function(data){
			if (!data.stack) {
				logger.error('Unknown exception - ', data);
				return;
			}
			
			var base = this.suites[0].base || '';
			
			data = assert.resolveData(data, base);
			
			logger.log('');
			
			if (data.file && data.line != null) {
				
				var path = data.file.replace(/(\/)?utest\//i, '$1'),
					uri = new net.Uri(base).combine(path),
					source = new io.File(uri).read().split(/\r\n|\r|\n/g),
					line = source[data.line - 1],
					code = line && line.trim();
				
				if ('actual' in data || 'expected' in data) {
					var msg = '%s bold<red<↔>> %s';
									
					logger.log(msg.color, data.actual, data.expected);
				}
				
				if (data.message) 
					logger.log(' :: '.red.bold + data.message.yellow);
					
				logger
					.log('  bold<%1>:%2'.color.format(data.file, data.line + 1))
					.log('  bold<cyan< → >> bold<red< %1 >>'.color.format(code))
					.log('');
				
				
				return;
			}
				
			
			logger
				.error(data.message)
				.error(data.stack);
			
		},
		
		onSuccess: function(){
			util.print(' |'.green.bold);
		}
	});

	
}());