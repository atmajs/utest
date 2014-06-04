// TEST interfaces

var syntax_Mocha;
(function(){
	
	syntax_Mocha = function(init){
		suite = {};
		
		global.it = it;
		global.before = before;
		global.beforeEach = beforeEach;
		global.after = after;
		global.afterEach = afterEach;
		global.describe = describe;
		init();
		return suite;
	};
	
	
	var suite;
	function describe(name, fn) {
		var root = suite;
		root[name] = syntax_Mocha(fn);
		suite = root;
	}
	function it(name, fn) {
		suite[name] = fn;
	}
	function before(fn){
		suite['$before'] = fn;
	}
	function after(fn){
		suite['$after'] = fn;
	}
	function afterEach(fn){
		suite['$teardown'] = fn;
	}
	function beforeEach(fn){
		suite['$teardown'] = fn;
	}
}());