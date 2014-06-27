var obj_getProperty,
	obj_defaults;
(function(){

	obj_getProperty = function(obj, property) {
		var chain = property.split('.'),
			imax = chain.length,
			i = -1;
		
		while(++i<imax) {
			if (obj == null) 
				return null;
			
			obj = obj[chain[i]];
		}
		return obj;
	};
	obj_defaults = function(target, defaults_, limit){
		if (target == null) 
			target = {};
		
		for(var key in defaults_){
			if (target[key] != null)
				continue;
			if (limit != null && limit.indexOf(key) === -1) 
				continue;
			
			target[key] = defaults_[key];
		}
		return target;
	};
}());
