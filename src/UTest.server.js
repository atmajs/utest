var UTestServer;

(function(){
	
	UTestServer = {
		
		Static: {
			server: {
				render: function(template, model, callback){
					
					UTestPage.request('/utest/server/render', 'post', {
						template: template,
						model: model
					}, callback);
				},
				
				request: function(url){
					var args = Array.prototype.slice.call(arguments, 1);
					
					var callback = args.pop(),
						method = args.shift(),
						params = args.shift()
						;
						
					
					UTestPage.request(url, method, params, callback);
				}
			}
		}
	};
	
}());