
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
		
		eval: function(source, done){
			
			var name = 'done',
				handled,
				result
				;
			
			source = source.replace(/^function\s*\(\s*([\w\d_$]+)\s*\)\s*\{/, function(full, cbname){
				name = cbname;
				handled = true;
				
				return '';
			});
			
			if (!handled) {
				logger.error(
					'Callback parameter`s name could not be extracted. Source %s...',
					source.substring(0,20)
				);
				
				done();
			}
			
			source = source.replace(/\}\s*$/, '');
			
			try {
				result = new(Function(name, source))(done);	
			} catch(error) {
				logger.error('<$config:eval error>', error);
				
				return done(error);
			}
			
			return result;
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
			
			if (config) {
				
				if (config && config.base) 
					include.cfg('path', config.base);
				
			}
			
			fn.apply(null, Array.prototype.slice.call(arguments, 2));
		},
		
		register: function(action, worker){
			_actions[action] = worker;
		}
	}
}());
