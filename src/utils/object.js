
function obj_getProperty(obj, property) {
	var chain = property.split('.'),
		imax = chain.length,
		i = -1;
	
	while(++i<imax) {
		if (obj == null) 
			return null;
		
		obj = obj[chain[i]];
	}
	return obj;
}

