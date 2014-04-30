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
			return xhr_isBusy(win) || dom_isReady(win) === false;
		};
		
		//= private
		//= Initialize
		xhr_createListener(window);
	}
	
	
	function dom_isReady(win){
		if (frame_isReady(win) === false) 
			return false;
		
		var i = win.frames.length;
		while ( --i > -1) {
			if (frame_isReady(win.frames[i]) === false) 
				return false;
		}
		return true;
	}
	
	function frame_isReady(frame){
		try {
			// `readyState` fallback
			if ('__utest_isLoading' in frame)
				return frame.__utest_isLoading === false;
			
			return (frame.document || frame.contentDocument).readyState === 'complete';
		} catch(error){
			// cross-origin ?
			return false;
		}
	}
}());