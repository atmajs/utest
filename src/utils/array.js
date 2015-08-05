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

		var arr = a.concat(b);
		var out = [], hash = {};
		arr.forEach(function(x){
			if (hash[x] === true) {
				return;
			}
			hash[x] = true;
			out.push(x);
		});
		return out;
	}
}());
