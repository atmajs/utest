var UTestPage;

(function(){
	
	var _iframe;
	
	UTestPage = {
		request: function(url, method, data, callback){
			
			if (_iframe) {
				_iframe.parentNode.removeChild(_iframe);
				_iframe = null;
			}
			
			request(url, method, data, function(error, response){
				
				if (error) {
					callback(error);
					return;
				}
				if (response == null) {
					callback('Server not responded');
					return;
				}
				
				var html;
				if (typeof response === 'string') 
					html = response;
				
				if (html == null) {
					callback(null, response);
					return;
				}
				
				
				var base = '/utest/';
				if (/https?:/.test(url)) {
					url.lastIndexOf('/');
					base = /https?:\/\/[^\/]+/.exec(url)[0];
				}
				
				html = html.replace(/(head[^>]*>)/, '$1 <base href="' + base + '" />');
				
				_iframe = document.createElement('iframe');
				
				document
					.body
					.appendChild(_iframe);
					
				var _doc = _iframe.contentDocument,
					_win = _iframe.contentWindow
					;
					
				/* expose Atma and jQuery */
				_win.Class = Class;
				_win.include = include;
				_win.mask = mask;
				_win.Compo = mask.Compo;
				_win.jmask = mask.jmask;
				_win.jQuery = _win.$ = $;
				
				$(_iframe).load(function(){
					include.allDone(function(){
						
						setTimeout(function(){
							callback(null, _doc, _win);
						});
					});
				})
				
				_doc.open();
				_doc.write(html);
				_doc.close();
				
			})
		}
	};
	
	
	function request(url, method, data, callback) {
		
		var headers = {};
		if (/https?:/.test(url)) {
			// cross-origin
			headers['x-remote'] = url;
			url = '/utest/server/proxy';
		}
		
		$
			.ajax({
				url: url,
				cache: false,
				contentType: data && 'application/json; charset=utf-8',
				data: data && JSON.stringify(data),
				type: (method || 'get').toUpperCase(),
				headers: headers
			})
			.done(function(response){
				callback(null, response);
			})
			.fail(function(xhr, textStatus){
				callback(xhr.statusCode());
			})
	}
	
}());