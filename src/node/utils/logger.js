var log_stringDiff;
(function(){
	
	var util = require('util'),
		diff = null;
	
	console.print = function(){
		var message = Array.prototype.slice.call(arguments).join(' ');
		
		util.print(message);
	};
	
	log_stringDiff = function(a, b){
		diff = require('diff');
		log_stringDiff = function(a, b){
			var str = diff
				.diffWords(a, b)
				.map(function(x){
					if (x.added) 
						return x.value.green;
					if (x.removed) 
						return x.value.red;
					
					return x.value
				})
				.join('');
			
			logger.log(str);
		};
		log_stringDiff(a, b);
	};
	
}());