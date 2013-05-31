function arr_isArray(array) {
	return array && array.length != null && typeof array.splice === 'function'
}