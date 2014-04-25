var xhr_createListener;

(function(){
	
	xhr_createListener = function(win){
		
		if (win.XMLHttpRequestListener__) 
			return win.XMLHttpRequestListener__;
		
		return win.XMLHttpRequestListener__ = wrapXhr(win);
	};
	
	// private
	
	function wrapXhr(win){
		if (win.parent !== win) 
			xhr_createListener(win.parent);
		
		
		var XHR = win.XMLHttpRequest,
			dfr = new Class.Deferred,
			counter__ = 0,
			send__ = XHR.prototype.send
			;
		dfr.resolve();
		XHR.prototype.send = onSend;
		
		function onSend() {
			dfr.defer();
			
			this.addEventListener('readystatechange', function() {
				if(this.readyState == XMLHttpRequest.DONE) 
					--counter__;
				
				onComplete();
			}, false);
			++counter__;
			send__.apply(this, arguments);
		}
		
		function onComplete() {
			if (counter__ > 0) 
				return;
			
			if (win.parent === win) {
				dfr.resolve();
				return;
			}
			
			if (win.parent.XMLHttpRequestListener__) {
				win
					.parent
					.XMLHttpRequestListener__
					.done(dfr.resolveDelegate())
					;
			}
		}
		
		function onready(callback){
			if (dfr_isBusy(dfr)) {
				dfr.done(onready.bind(null, callback));
				return;
			}
			
			if (win.parent === win) {
				callback();
				return;
			}
			
			var pxhr_listener = win.parent.XMLHttpRequestListener__;
			if (pxhr_listener == null || pxhr_listener.isBusy() === false) {
				callback();
				return;
			}
			
			pxhr_listener.done(onready.bind(null, callback));
		}
		
		return {
			isBusy: dfr_isBusy.bind(null, dfr),
			done: onready
		};
	}
	
	function dfr_isBusy(dfr){
		return dfr._resolved == null && dfr._rejected == null;
	}
	
}());