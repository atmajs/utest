var UTestPage;

(function(){
	
	var _iframe;
	
	UTestPage = {
		request: function(url, method, headers, data, callback){
			
			if (_iframe) {
				_iframe.parentNode.removeChild(_iframe);
				_iframe = null;
			}
			
			request(url, method, headers, data, function(error, response, headers){
				
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
					callback(null, response, headers);
					return;
				}
				
				
				var base = '/utest/';
				if (data != null && data.base) {
					base = data.base;
				}
				else if (/https?:/.test(url)) {
					base = url;
				} else {
					base += url;
				}
				
				if (/<\s*head[^>]*>/i.test(html)) {
					// no head
					var index = html.indexOf('>');
					if (index !== -1) {
						
						html = html.substring(0, index + 1)
							+ '<head><base href="'
							+ base
							+ '" /></head>'
							+ html.substring(index + 1)
							;
					}
				}
				else {
					html = html.replace(/(head[^>]*>)/i, '$1 <base href="' + base + '" />');
				}
				
				
				_iframe = document.createElement('iframe');
				
				document
					.body
					.appendChild(_iframe);
					
				var _doc = _iframe.contentDocument,
					_win = _iframe.contentWindow
					;
				
				_win.__utest_isLoading = true;
				_win.domain = window.domain;
				
				var listener = xhr_createListener(_win);
				
				$(_iframe).load(function(){
					if (_win.include) {
						_win.include.allDone(process);
					} else {
						process();
					}
					function process() {
						listener.done(function(){
							_win.__utest_isLoading = false;
							callback(null, _doc, _win, headers);
						});
					}
				})
				
				location_pushSearch(url);
				_doc.open();
				
				// Mozilla throws NS_ERROR_FAILURE. workaround with querystring only
				//- location_pushHistory(url, _win);
				
				_doc.write(html);
				_doc.close();
			
			})
		}
	};
	
	
	function request(url, method, headers, data, callback) {
		
		headers = headers || {};
		if (/https?:/.test(url)) {
			// cross-origin
			headers['x-remote'] = url;
			url = '/utest/server/proxy';
		}
		var contentType,
			body = data;
		if (body && typeof body !== 'string') {
			body = JSON.stringify(body);
			contentType = 'application/json; charset=utf-8';
		}
		
		$
			.ajax({
				url: url,
				cache: false,
				contentType: contentType,
				data: body,
				type: (method || 'get').toUpperCase(),
				headers: headers
			})
			.done(function(response, status, xhr){
				callback(null, response, xhr.getAllResponseHeaders());
			})
			.fail(function(xhr, textStatus){
				callback({
					responseText: xhr.responseText,
					statusCode: xhr.status,
					headers: xhr.getAllResponseHeaders()
				});
			})
	}
	
}());