(function(){
	/* Make jQuery to support DocumentFragment`s */
	
	var _jQuery = global.jQuery;
	
	function Wrapper(){};
	Wrapper.prototype = $.fn;
	
	for(var key in _jQuery) {
		Wrapper[key] = _jQuery[key];
	}
	
	
	global.$ = function(frag){
		var args = Array.prototype.slice.call(arguments);
		if (frag != null && typeof frag === 'object' && frag.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
			args[0] = frag.children;
		}
		
		return _jQuery.apply(global, args);
	};
}());