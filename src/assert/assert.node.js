(function(global){
	
	// import assert.js
	// import assert.wrapper.js
	
	var util = require('util');
	
	
	assert.resolveData = function(stackData, base){
		
		
		var data = Object.extend({}, stackData),
			stack = stackData.stack.split('\n').splice(2, 6),
			rgx_http = /http:\/\/([^\/]+)\//,
			rgx_local = RegExp.fromString(base.replace('file:///','')),
			rgx_file = /\(([^\(]+)\)[\t ]*$/;
		
		
		stack = ruqq.arr.map(stack, function(x){
			return x
					.replace(rgx_http, '')
					.replace(rgx_local, '')
					.replace('at ', '');
		});
		
		
		var file = rgx_file.exec(stack[0]);
		if (file) {
			var parts = file[1].split(':');
			
			data.file = parts[0];
			data.line = parts[1] << 0;
			data.col = parts[2] << 0;
		}
		
		
		
		data.stack = stack.join('\n');
		
		return data;
	}
	
}(this));