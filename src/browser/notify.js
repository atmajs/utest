var notify;
(function(){
	var _compo;
	
	
	
	
	notify = function (state) {
		if (_compo == null) {
			_compo = $('.utest-server-status').compo();
		}
		_compo.scope.status = state;
	};
	
}());
