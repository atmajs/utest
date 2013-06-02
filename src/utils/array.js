function arr_isArray(array) {
	return !!(array != null && array.length != null && typeof array.splice === 'function');
}

function arr_isEmpty(array) {
	if (arr_isArray(array) === false)
		return true;
		
	return !array.length;
}