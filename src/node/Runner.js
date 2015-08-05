var status_blank = 1,
	status_connecting = 2,
	status_connected = 3,
	status_prepair = 4,
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

		if (config.fork) {
			// no sub files
			return [];
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

			this.suites.forEach(function(x){
				x.files = utest_resolveFiles(x);
			});
		},
		notifyTest: function(url){
			logger.log('Test: ', url.replace(this.config.base, '').cyan.bold);
		},
		onComplete: function(stats) {
			this.status = status_ready;

			function count(key) {
				var sum = 0;

				stats.forEach(function(x) {
					if (x.error) {
						logger.error(x.error);
						return;
					}

					if (x[key] == null)
						return;

					if (typeof x[key] === 'object' && 'length' in x[key]) {
						sum += x[key].length;
						return;
					}

					sum += x[key];
				});
				return sum;
			}
			function aggr(key) {
				var aggr = [];
				stats.forEach(function(x){
					if (x[key] == null)
						return;

					if (typeof x[key] === 'object' && 'length' in x[key]) {
						aggr.push.apply(aggr, x[key]);
						return;
					}
					aggr.push(x[key]);
				});
				return aggr;
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

				if (callbacks)
					logger
						.error('Expected callbacks were not fired. More info...')
						.log(aggr('callbacks'))
						;

				if (timeouts)
					logger
						.error('Asynchronous suites were not completed. More info...')
						.log(aggr('timeouts'))
						;


				!failed && failed++;
			}


			logger
				.log('\n\nDone. '[failed ? 'red' : 'green'].bold)
				.log(
					'bold<Assertions>: bold<green<%1>>(bold<red<%2>>)'
						.format(Math.max(total - failed, 0), failed)
						.color)
				.log(
					'bold<Timeouts>: bold<%1<%2>>'
						.format(timeouts ? 'red' : 'green', timeouts)
						.color)
				.log(
					'bold<Failed Callbacks>: bold<green<%1>>'
						.format(callbacks)
						.color)
				;

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

			if (data.stack == null) {
				data.stack = ''
			}

			var base = this.suites[0].base || '';


			data = assert.resolveData(data, base);
			logger.log('');

			if ('actual' in data || 'expected' in data) {
				var actual = data.actual,
					expect = data.expected;

				if (typeof expect === 'string'
						&& typeof actual === 'string'
						&& expect.length > 20
						&& actual.length > 10
						) {

					log_stringDiff(expect, actual);
				} else {
					var msg = '%s bold<red<↔>> %s';
					logger.log(msg.color, data.actual, data.expected);
				}
			}

			if (data.message && data.generatedMessage !== true)
				logger.log(' :: '.red.bold + data.message.yellow);

			if (data.file && data.line != null) {

				var path = data
						.file
						.replace(/(\/)?utest\//i, '$1')
						.replace(/\?.+/, '')
						.replace(/^\//, ''),

					uri = new net.Uri(base).combine(path);

				if (io.File.exists(uri)) {
					var source = io.File.read(uri),
						lines = source.split(/\r\n|\r|\n/g),
						line = lines[data.line - 1],
						code = line && line.trim()
						;
					logger
						.log('  bold<%1>'.color.format(path))
						.log('  bold<cyan< → >> bold<%1 |> bold<red< %2 >>'.color.format(data.line + 1, code))
						.log('');
				}

				return;
			}
		},

		onSuccess: function(){
			process.stdout.write(' |'.green.bold);
		}
	});


}());