var resume = include.pause(),
	server = atma.server,
	appConfig = app.config,
	bodyParser = require('body-parser'),
	Url = require('url')
	;

var app = server.Application({
	base: include.location,
	configs: net.Uri.combine(include.location, 'server/config/**.yml')
});

app.done(function(app){
	
	app.responders([
		function(req, res, next){
			
			io.File.disableCache();
			server.StaticContent.Cache.state(false);

			var url = Url.parse(req.url, true);
			req.query = url.query;
			next();
		},
		bodyParser.json(),
		app.responder(),
		atma.server.StaticContent.respond
	]);
	
	resume(app);
});
