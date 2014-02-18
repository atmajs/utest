var UTestPage;

(function(){
	
	var _iframe;
	
	UTestPage = {
		request: function(url, method, data, callback){
			
			if (_iframe) {
				_iframe.parentNode.removeChild(_iframe);
				_iframe = null;
			}
			
			request(url, method, data, function(error, html){
				
				if (error) 
					callback(error);
				
				html.replace(/(head[^>]*>)/, '$1 <base href="/utest/" />');
				
				_iframe = document.createElement('iframe');
				
				document
					.body
					.appendChild(_iframe);
				
				_iframe.contentDocument.write(html);
				
				
				$(_iframe.contentDocument).ready(function(){
					
					callback(null, _iframe.contentDocument);
				});
				
				
			})
		}
	};
	
	
	function request(url, method, data, callback) {
		console.log(url, method, data);
		$
			.ajax({
				url: url,
				cache: false,
				contentType:'application/json; charset=utf-8',
				data: JSON.stringify(data),
				type: (method || 'get').toUpperCase(),
				
				//
				//data: {
				//	url: url,
				//	method: method,
				//	data: data
				//},
				//
				//type: 'POST'
				
				
				
			})
			.done(function(response){
				callback(null, response);
			})
			.fail(function(xhr, textStatus){
				callback(xhr.statusCode());
			})
	}
	
}());