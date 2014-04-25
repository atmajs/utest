var transport_isBusy;

(function(){
	
	if ('node' === __env) 
		return node();
	
	if ('dom' === __env) 
		return dom();
	
	
	function node(){
		transport_isBusy = function(){
			return false;
		};
	}
	function dom(){
		
		transport_isBusy = function(win){
			return xhr_isBusy(win);
		};
		
		//= private
		// Initialize
		xhr_createListener(window);
		
	}
}());