var UTestServer;

(function(){
	
	UTestServer = {
		
		Static: {
			server: {
				render: function(template /* [, ?model|params, ?ctr, callback] */){
					
					var model,
						include,
						ctr,
						callback;
					
					// @Obsolete - use `model`, `controller`, `include` in single params object
					var args = _Array_slice.call(arguments, 1),
						dfr = new Class.Deferred()
						;
					
					if (typeof args[args.length - 1] === 'function') 
						callback = args.pop();
					
					model = args.shift();
					ctr = args.shift();
					
					// @obsolete workaround
					if (model.include) {
						include = model.include;
						ctr = model.controller;
						
						model = model.model;
					} else if (model.model) {
						ctr = model.controller;
						model = model.model;
					}
					
					
					
					UTestPage.request('/utest/server/render', 'post', null, {
						template: template,
						model: model,
						controller: ctr,
						include: include
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
				
				request: function(mix /* [, method, data, callback] */){
					var url = mix,
						method,
						data,
						headers,
						callback
						;
					if (typeof mix !== 'string') {
						url = mix.url;
						method = mix.method;
						data = mix.data;
						headers = mix.headers;
					}
					
					var args = _Array_slice.call(arguments, 1),
						dfr = new Class.Deferred()
						;
					
					if (typeof args[args.length - 1] === 'function') 
						callback = args.pop();
					
					if (args.length > 0) 
						method = args.shift();
					
					if (args.length > 0) 
						data = args.shift();
						
					UTestPage.request(url, method, headers, data, done);
					
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