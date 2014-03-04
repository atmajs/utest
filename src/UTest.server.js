var UTestServer;

(function(){
	
	UTestServer = {
		
		Static: {
			server: {
				render: function(template /* [, ?model, ?ctr, callback] */){
					
					var model,
						ctr,
						callback;
					var args = _Array_slice.call(arguments, 1),
						dfr = new Class.Deferred()
						;
					
					if (typeof args[args.length - 1] === 'function') 
						callback = args.pop();
						
					model = args.shift();
					ctr = args.shift();
					
					UTestPage.request('/utest/server/render', 'post', {
						template: template,
						model: model,
						controller: ctr
					}, done);
					
					function done(error, doc, win) {
						
						if (callback) 
							callback(error, doc, win);
						
						if (error) {
							dfr.reject(error);
							return;
						}
							
						dfr.resolve(doc, win);
					}
					
					return dfr
				},
				
				request: function(url /* [, method, params, callback] */){
					var method,
						params,
						callback;
					var args = _Array_slice.call(arguments, 1),
						dfr = new Class.Deferred()
						;
					
					if (typeof args[args.length - 1] === 'function') 
						callback = args.pop();
					
					method = args.shift();
					params = args.shift();
						
					UTestPage.request(url, method, params, done);
					
					function done(error, doc, win){
						if (callback) 
							callback(error, doc, win);
						
						if (error) {
							dfr.reject(error);
							return;
						}
						
						dfr.resolve(doc, win);
					}
					
					return dfr;
				}
			}
		}
	};
	
}());