var resume = include.pause(),
	server = atma.server,
	appConfig = app.config,
	connect = require('connect')
	;

server.Application({
	base: include.location,
	configs: net.Uri.combine(include.location, 'server/config/**.yml')
})
.done(function(app){
	
	io.File.disableCache();
	server.StaticContent.Cache.state(false);
	
	app.responders([
		connect.query(),
		connect.json(),
		
		app.responder(),
		atma.server.StaticContent.respond
	]);
	
	resume(app);
});
