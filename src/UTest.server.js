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
				}
			}
		}
	};
	
}());