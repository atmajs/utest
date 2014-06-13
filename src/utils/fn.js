var fn_waterfall;
(function(){
	
	fn_waterfall = function(){
		var fns = Array.prototype.slice.call(arguments),
			done = fns.pop(),
			imax = fns.length,
			i = -1;
			
		function next(){
			if (++i > imax - 1) 
				return done();
			
			fns[i](next);
		}
		next();
	};
	
}());