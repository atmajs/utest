var location_pushHistory;

(function(){
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
		
		win.history.pushState(null, null, path);
	}
}());