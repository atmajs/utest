(function(){
	
	
	[
		'eq',
		'notEq',
		'deepEq',
		'notDeepEq',
		'has',
		'hasNot'
	]
	.forEach(function(key){
		
	
		$.fn[key] = function(mix){
			var val;
			
			if (typeof mix === 'string') {
				
				val = this[mix];
				
				if (typeof val === 'function') {
					var args = Array
						.prototype
						.slice
						.call(arguments, 1, arguments.length - 1)
						;
						
					val = val.apply(this, args);
				}
				
				global[key](val, arguments[arguments.length - 1]);
				return;
			}
			
			if (typeof mix === 'function') {
				
				val = mix(this);
				
				global[key](val, arguments[arguments.length - 1]);
				return;
			}
			
		};
	})
	
	
	
}());