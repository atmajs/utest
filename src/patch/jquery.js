(function(){
	/* Make jQuery to support DocumentFragment`s */
	
	var _jQuery = global.jQuery;
	_jQuery.noConflict();
	
	function Wrapper (frag) {
		var args = Array.prototype.slice.call(arguments);
		if (frag != null && typeof frag === 'object' && frag.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
			args[0] = frag.children;
		}
		
		return _jQuery.apply(global, args);
	};
	Wrapper.prototype = _jQuery.prototype;
	
	for(var key in _jQuery) {
		Wrapper[key] = _jQuery[key];
	}
	
	global.$ = Wrapper;
}());