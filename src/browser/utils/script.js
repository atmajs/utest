var script_insert = (function() {

	function scriptLoadedDelegate(callback) {
		return function scriptLoaded(event) {
			if (event && event.type === 'error') {
				console.error('Script cannt be loaded', event.target.src);
			}

			callback && callback();
		};
	}


	return function(data, callback) {

		var path = data.path,
			code = data.code,
			tag = document.createElement('script');

		callback = scriptLoadedDelegate(callback);

		tag.type = 'text/javascript';

		if (path) {
			//
			path += (~path.indexOf('?') ? '&' : '?') + Date.now();

			tag.src = path;

			if ('onreadystatechange' in tag) {
				tag.onreadystatechange = function() {
					switch (this.readyState) {
						case 'complete':
						case 'loaded':
							callback();
							break;
					}
				};
			} else {
				tag.onload = tag.onerror = callback;
			}
		} else {
			tag.innerHTML = code;
		}

		var head = document.body || document.querySelector('head');

		head.appendChild(tag);
	}
}());

var script_insertMany = function(bundle, callback){
	if (!(arr_isArray(bundle) && bundle.length)) {
		callback();
		return;
	}
	
	for (var i = 0, x, imax = bundle.length; i < imax; i++){
		x = bundle[i];
		
		script_insert({path: x}, i === imax - 1 ? callback : null);
	}
}

var script_getResources = (function() {


	return function() {
		var scripts = document.querySelectorAll('script'),
			resources = [];

		for (var i = 0, x, imax = scripts.length; i < imax; i++) {
			x = scripts[i].getAttribute('src');

			if (x) {
				resources.push(x);
			}
		}
		return resources;
	};
}());