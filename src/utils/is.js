var is_Deferred,
	is_Function,
	is_Object
	;
(function(){
	
	is_Deferred = function(x){
		return x != null
			&& typeof x === 'object'
			&& typeof x.done === 'function'
			&& typeof x.fail === 'function'
			;
	};
	is_Function = function(x){
		return typeof x === 'function'
	};
	is_Object = function(x){
		return x != null && typeof x === 'object'
	};
	
}());