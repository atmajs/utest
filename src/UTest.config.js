
var UTestConfiguration = (function(){
	
	
	var Configurations = {
		http: {
			service: function(routes, done){
				http_config('http.services', routes, done);
			},
			config: function(configDir, done) {
				http_config('http.config', configDir, done);
			},
			include: function(pckg, done){
				http_config('include', pckg, done);
			}
		}
		
	};
	
	function http_config(args){
		var args = Array.prototype.slice.call(arguments);
		
		args.unshift('>server:utest:action');
		
		UTest
			.getSocket(function(socket){
				socket
					.emit
					.apply(socket, args)
					;	
			});
	}
	
	function configurate(key, args, done) {
		var fn = obj_getProperty(Configurations, key);
		if (fn == null) {
			return done('<utest:config> Undefined configuration' + key);
		}
		
		fn(args, done)
	}
	
	return {
		
		configurate: function(done){
			
			var cfg = this.suite.$config;
			
			if (cfg == null) 
				return done();
			
			var await = new Class.Await;
			
			
			for(var key in cfg){
				
				configurate(key, cfg[key], await.delegate());
			}
			
			await
				.fail(function(error){
					logger.error('<utest:configurate> ', error);
				})
				.always(done);
		}
	};
		
}());