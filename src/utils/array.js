var arr_isArray,
	arr_isEmpty,
	arr_distinctConcat;

(function(){
		
	arr_isArray = function(array) {
		return array != null
			&& typeof array.length === 'number'
			&& typeof array.splice === 'function'
			;
	};
	
	arr_isEmpty = function(array) {
		if (arr_isArray(array) === false)
			return true;
			
		return array.length === 0;
	};
	
	arr_distinctConcat = function(a, b){
		if (b == null) 
			return a;
		if (a == null) 
			return b;
		
		return ruqq.arr.distinct(a.concat(b));
	}
}());
	