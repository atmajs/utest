(function(){
	
	var util = require('util');
	
	console.print = function(){
		var message = Array.prototype.slice.call(arguments).join(' ');
		
		util.print(message);
	};
	
}());