
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
		}
	};

	
	return {
		run: function(action){
			var fn = _actions[action];
			if (typeof fn !== 'function') {
				logger.error('<utest:server> unknown action', action);
				return;
			}
			
			fn.apply(null, Array.prototype.slice.call(arguments, 1));
		},
		
		register: function(action, worker){
			_actions[action] = worker;
		}
	}
}());
