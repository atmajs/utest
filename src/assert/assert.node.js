(function(global){
	
	// import /node_modules/assertion/lib/assert.embed.js
	// import wrapper.js
	
	
	assert.resolveData = function(stackData, base){
		
		var data = Object.extend({}, stackData),
			stack = stackData.stack.split('\n').splice(1),
			rgx_http = /http:\/\/([^\/]+)\//,
			rgx_local = RegExp.fromString(base.replace('file:///','')),
			rgx_file = /([^\(]+\:\d+\:\d+)\)?$/;
		
		
		stack = ruqq.arr.map(stack, function(x){
			return x
					.replace(rgx_http, '')
					.replace(rgx_local, '')
					.replace('at ', '');
		});
		
		var file = rgx_file.exec(stack[0].trim());
		if (file) {
			var parts = file[1].split(':');
			
			data.file = parts[0];
			data.line = parts[1] << 0;
			data.col = parts[2] << 0;
		}else{
			console.warn('Filepath could not be parsed from', stack[0].trim());
		}
		
		
		
		
		data.stack = stack.join('\n');
		
		return data;
	};
	
}(this));