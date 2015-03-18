var UTestConfiguration;

(function(){
	UTestConfiguration = {
		$cfg (key) {
			var cfg = this.suite.$config;
			if (cfg == null || cfg[key] == null) 
				return _options[key];
			
			return cfg[key];
		},
		configurate (/*?cfg, done */) {
			var cfg,
				done,
				x,
				xtype,
				i = arguments.length;
			while( --i > -1){
				x = arguments[i];
				xtype = typeof x;
				
				if ('function' === xtype)
					done = x;
				
				if ('object' === xtype  && x != null)
					cfg = x;
			}
			if (cfg == null) 
				cfg = this.suite.$config;
			
			if (cfg == null) {
				done && done();
				return;
			}
			
			var await = new Class.Await;
			for(var key in cfg){
				if (_options.hasOwnProperty(key) === false) {
					logger.warn('Unknown key `%s`, support:', key, Object.keys(_options));
					continue;
				}
				
				perform(key, cfg[key], await.delegate());
			}
			
			await
				.fail(error => console.error('<utest:configurate> ', error))
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
			
			eval: function evaluate(fn, done){
				http_config('eval', fn.toString(), done);
			},
			process: function(params, done){
				http_config('process', params, done);
			}
		},
		util: {
			process: function(params, done){
				process_toggle(params, done);
			}
		}
	};
	
	function http_config(...args){
		args.splice(1, 0, null); // populate later with current configuration
		args.unshift('>server:utest:action');
		
		UTest.getSocket((socket, config) => {
				
			args[2] = (UTest.getConfig && UTest.getConfig()) || config;
			socket
				.emit
				.apply(socket, args)
				;	
		});
	}
	
	function perform(key, args, done) {
		var fn = obj_getProperty(Configurations, key);
		if (typeof fn !== 'function') 
			return done();
		
		fn(args, done)
	}
}());