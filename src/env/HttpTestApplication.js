var resume = include.pause(),
	appConfig = app.config
	;


include
	.js({
		server: ['middleware/static::static']
	})
	.load('./template.mask::env')
	.done(function(resp) {
		
		include.exports = atma
			.server
			.Application({
				base: include.location,
				configs: net.Uri.combine(include.location, 'server/config/**.yml'),
				config: {
					
				}
			})
			.done(function(app){
				
				io.File.disableCache();
				
				var connect = require('connect');
				
				app.responders([
					connect.query(),
					connect.json(),
					
					app.responder(),
					
					resp.static(),
					response404
				]);
				
				process.nextTick(resume);
			});
			
		function response404(req, res) {
			
			res.writeHead(404, {
				'Content-Type': 'text/plain'
			});
			
			res.end('404 ' + (req.filePath || ''));
		}
	});
	