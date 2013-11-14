(function() {

	var orig_log = console.log;

	console.print = function(){
		orig_log.apply(console, arguments);
	};

	for (var key in console) {
		if (typeof console[key] !== 'function') {
			continue;
		}
		console[key] = logger_create(key);
	}

	assert.onfailure = function() {
		socket.emit('browser:assert:failure', Array.prototype.slice.call(arguments));
	}
	assert.onsuccess = function() {
		socket.emit('browser:assert:success', Array.prototype.slice.call(arguments));
	}

	function logger_create(key) {

		var original = console[key];
		return function() {
			var args = [];

			for (var i = 0, x, imax = arguments.length; i < imax; i++) {
				args[i] = logger_dimissCircular(arguments[i]);
			}
			
			if (socket) 
				socket.emit('browser:log', key, args);

			return original.apply(console, args);
		};
	}



	var logger_dimissCircular = (function() {
		var cache;

		function clone(mix) {
			if (mix == null) {
				return null;
			}


			var cloned;

			if (mix instanceof Array) {
				cloned = [];
				for (var i = 0, imax = mix.length; i < imax; i++) {
					cloned[i] = clone(mix[i]);
				}
				return cloned;
			}

			if (typeof mix === 'object') {

				if (~cache.indexOf(mix)) {
					return '[object Circular]';
				}
				cache.push(mix);

				cloned = {};
				for (var key in mix) {
					cloned[key] = clone(mix[key]);
				}
				return cloned;
			}

			return mix;
		}

		return function(mix) {
			if (typeof mix === 'object' && mix != null) {
				cache = [];
				mix = clone(mix);
				cache = null;
			}

			return mix;
		};
	}());

}());