Class.Await = Class({
	Base: Class.Deferred,
	
	_wait: 0,
	_timeout: null,
	
	
	promise: function(){
		
		if (this._timeout) {
			clearTimeout(this._timeout);
		}
		
		this._resolved = null;
		this._rejected = null;
		this._wait++;
		this._timeout = setTimeout(this.reject.bind(this), Class.Await.TIMEOUT);
		
		return this.listener;
	},
	
	isBusy: function(){
		return this._wait > 0;
	},
	Self: {
		
		listener: function(){
			
			if (--this._wait === 0) {
				clearTimeout(this._timeout);
				this.resolve();
			}
		}
	},
	
	Static: {
		
		TIMEOUT: 2000
	}
});