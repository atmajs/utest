var http_ = require('http'),
	https_ = require('https'),
	url_ = require('url'),
	header_REMOTE = 'x-remote',
	header_REQUESTED_WITH = 'x-requested-with',
	header_CONNECTION = 'connection'
	;

include.exports = atma.server.HttpService({
	'/': function(req, res){
		
		var headers = req.headers,
			method = req.method,
			url = headers[header_REMOTE];
		
		
		if (url == null) {
			var error = atma
				.server
				.HttpError('Invalid Proxy Url');
			
			this.reject(error);
			return;
		}
		
		var options = {
			method: method,
			headers: extend({}, headers),
			agent: false,
		};
		delete options.headers[header_REMOTE];
		delete options.headers[header_REQUESTED_WITH];
		delete options.headers[header_CONNECTION];
		
		pipe(req, res, options, url);
	}
});

function pipe(req, res, options_, remoteUrl, redirects) {
	
	if (redirects == null) 
		redirects = 0;
		
	
	if (redirects > 10) {
		res.writeHead(500, {
			'content-type': 'text/plain'
		})
		res.end('Too much redirects, last url: ' + remoteUrl);
		return;
	}
	
	var remote = url_.parse(remoteUrl),
		options = {};
		
	extend(options, options_);
	extend(options, remote);
	options.headers.host = remote.host;
	
	var client = remote.protocol === 'https:'
		? https_
		: http_;
	
	var request = client.request(options, function(response) {
		
		var code = response.statusCode;
		if (code === 301 || code === 302) {
			
			var location = response.headers.location;
			if (location) 
				pipe(req, res, options_, location, ++redirects);
			return;
		}
		
		res.statusCode = code;
		for(var key in response.headers)
			res.setHeader(key, response.headers[key]);
		
		response.pipe(res, {
			end: true
		}); 
	});
	
	request.on('error', function(error) {
		res.writeHead(500, {
			'Content-Type': 'text/plain'
		});
		res.end(error.toString());
	});
	
	if (req.method !== 'GET' && req.body) {
		// was already parsed by connect.json();
		request.end(JSON.stringify(req.body));
		return;
	}
	
	// @TODO pipe post body to redirects
	req.pipe(request, {
		end: true
	});
}



function extend(target, source){
	for (var key in source)
		if (source[key] != null) 
			target[key] = source[key];
	
	return target;
}