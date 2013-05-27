var include_ready = (function() {
	var callback;

	function defer() {
		include.done(function() {
			setTimeout(check);
		});
	}

	function check() {
		if (typeof include === 'undefined') {
			callback();
			return;
		}
		if (include.state == null || include.state > 3) {
			callback();
			return;
		}

		defer();
	}

	return function(fn) {
		callback = fn;

		check();
	};
}());

var include_clearCache = function() {
	if (typeof include === 'undefined') {
		return;
	}

	var resources = include.getResources(),
		scripts = document.querySelectorAll('head > script');
	
	// @TODO - remove only scripts from resources
	for (var i = 0, x, imax = scripts.length; i < imax; i++){
		x = scripts[i];
		x.parentNode.removeChild(x);
	}
	
	
	
	for (var key in resources) {
		resources[key] = {};
	}

	include = include.instance();
};