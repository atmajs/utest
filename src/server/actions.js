
var Actions = (function(){
	
	
	var _actions = {
	
		registerService: function(route, handlersPath){
			
			logger(90)
				.log('<utest> register service')
				.log(route, handlersPath)
				;
			
			atma
				.server
				.app
				.handlers
				.registerService(route, handlersPath)
				;
		},
		
		include: function(sources, done){
			var base = io.env.currentDir.toDir();
			include
				.instance(base)
				.setBase(base)
				.js(sources)
				.done(function(){
					done();
				});
		},
		
		eval: function(source, done){
			var base = io.env.currentDir.toDir();
			include = include
				.instance(base)
				.setBase(base)
				;
				
			var name,
				result
				;
			
			source = source.replace(/^function\s*\(\s*([\w\d_$]+)\s*\)\s*\{/, function(full, cbname){
				name = cbname;
				
				return '';
			});
			
			if (name == null) {
				
				try {
					eval('(' + source + '())');
				}catch(error) {
					logger.error('<$config:eval>', error);
				}
				
				done();
				return;
			}
			
			source = source.replace(/\}\s*$/, '');
			
			try {
				result = new(Function(name, source))(done);	
			} catch(error) {
				logger.error('<$config:eval error>', error);
				
				return done(error);
			}
			
			return result;
		},
		process: function(params, done){
			
			process_toggle(params, function(){
				logger.log('started');
				done();
			});
		}
	};

	
	return {
		run: function(action, config){
			var fn = _actions[action];
			if (typeof fn !== 'function') {
				logger.error('<utest:server> unknown action', action);
				
				var done = arguments[arguments.length - 1];
				if (typeof done === 'function') 
					done();
				
				return;
			}
			
			if (config && config.base)
				include.cfg('path', config.base);
				
			
			fn.apply(null, Array.prototype.slice.call(arguments, 2));
		},
		
		register: function(action, worker){
			_actions[action] = worker;
		}
	}
}());
