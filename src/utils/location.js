var location_pushHistory,
	location_pushSearch;

(function(){
	location_pushSearch = function(path, win){
		win = win || window;
		
		if (win.history == null || win.history.pushState == null) 
			return;
		
		var q = path.indexOf('?');
		if (q === -1) 
			return;
		
		try {
			win.history.pushState({}, '', path.substring(q));
		} catch(error){}
	};
	
	location_pushHistory = function(path, win){
		win = win || window;
		
		if (win.history == null || win.history.pushState == null) 
			return;
		
		var a;
		a = document.createElement('a');
		a.href = path;
		
		path = ''
			+ win.top.location.protocol
			+ '//'
			+ win.top.location.host
			+ a.pathname
			+ a.search
			+ a.hash
			;
		
		try {
			win.history.pushState(null, null, path);
		} catch(error){}
	}
}());