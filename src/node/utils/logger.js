var log_clearStd,
	log_stringDiff;
(function(){
	
	var util = require('util'),
		diff = null;
	
	console.print = function(){
		var message = Array.prototype.slice.call(arguments).join(' ');
		
		util.print(message);
	};
	
	log_clearStd = function(){
		process.stdout.write('\u001b[2J');//'\033[2J');
		process.stdout.write('\u001bc');//'\033c');
	};
	
	log_stringDiff = function(a, b){
		diff = require('diff');
		log_stringDiff = function(a, b){
			var str = diff
				.diffWordsWithSpace(a, b)
				.map(function(x){
					var val = x.value;
					if (x.added || x.removed) {
						if (/^[ ]*$/.test(val)) {
							val = val[x.added ? 'bg_green' : 'bg_red'];
						}
						else if (/^\s*$/.test(val)) {
							val = val
								.split('')
								.map(function(x){
									var code = x.charCodeAt(0);
									if (code === 13) {
										return '\\r\r';
									}
									if (code === 10) {
										return '\\n\n';
									}
									if (x === ' ') {
										return x[x.added ? 'bg_green' : 'bg_red'];
									}
									return '[' + code + ']'.bg_cyan;
								})
								.join('');
							
						}
					}
					if (x.added) 
						return val.green;
					if (x.removed) 
						return val.red;
					
					return val;
				})
				.join('');
			
			logger.log(str);
		};
		log_stringDiff(a, b);
	};
	
}());