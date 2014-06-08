var UTestConfiguration;

(function(){
	UTestConfiguration = {
		$cfg: function(key){
			var cfg = this.suite.$config;
			if (cfg == null || cfg[key] == null) 
				return _options[key];
			
			return cfg[key];
		},
		configurate: function(done){
			var cfg = this.suite.$config;
			if (cfg == null) {
				done();
				return;
			}
			
			var await = new Class.Await;
			for(var key in cfg){
				
				configurate(key, cfg[key], await.delegate());
			}
			
			await
				.fail(function(error){
					console.error('<utest:configurate> ', error);
				})
				.always(done);
		}
	};
	
	var Configurations = {
		http: {
			service: function(routes, done){
				http_config('http.service', routes, done);
			},
			config: function(configDir, done) {
				http_config('http.config', configDir, done);
			},
			include: function(pckg, done){
				http_config('include', pckg, done);
			},
			
			eval: function(fn, done){
				http_config('eval', fn.toString(), done);
			}
		}
		
	};
	
	function http_config(args){
		var args = Array.prototype.slice.call(arguments);
		
		
		args.splice(1, 0, null); // populate later with current configuration
		
		args.unshift('>server:utest:action');
		
		UTest
			.getSocket(function(socket, config){
				
				args[2] = (UTest.getConfig && UTest.getConfig()) || config;
				socket
					.emit
					.apply(socket, args)
					;	
			});
	}
	
	function configurate(key, args, done) {
		var fn = obj_getProperty(Configurations, key);
		if (typeof fn !== 'function') 
			return done();
		
		fn(args, done)
	}
}());