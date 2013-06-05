UTEST
----
_TDD and Unit Testing plugin for IncludeJSBuilder_


Create Unit Tests quickly and simple. Features:

- NodeJS - will run any script in nodejs environment and notifies about assertion errors, if any ```$ ijs test foo.js```.
- Browsers - with ijs you create a test server (```$ ijs server```), open test page in one or many browsers (```http://localhost:5777/utest```), so slaves are captured by the server. And you are ready to run your scripts in dom environment using nodejs as a runner ```$ ijs test foo.js -browser```.
- Watcher - ```-watch``` flag allows ijs test instance not to be closed after testing, but waiting for any changes in files, that were used in unit tests and all its includejs dependencies.
- Environments - in nodejs and browsers ijs also loads libraries from libjs, so they are all already available in unit tests, like inludejs, maskjs. jQuery/SinonJS are also loaded.
- UTest Class - thought this testing system does not require from developer to define test suites, as from example below, but with this class, developer can define test suites more properly.

Example:

_app.js_
```javascript
var Application = {version: 1};
```

_app.test_
```javascript
eq(Application.version, 1); // alias for assert.equal()
```

- nodejs - ```$ ijs test app.test```, or ```$ ijs test app.test -watch``` (now any changes to app.test or app.js will rerun the tests)
- browser - 
	- capture slave, if not already with starting the server and opening "test" page (```ijs server```, navigate to ```http://localhost:5777/test```)
	- ```$ cd directory/with/app``` ```$ ijs test app -browser ```, or ```$ ijs test app -browser -watch```

This is the simpliest test case. And as here the 2 (app.js/app.test) files are in the same directory, app.js will be preloaded in app.test. If required app.js is located in some other location, you can alwas preload it using includejs, or from test configuration file, that will be explained latly. 

_app.test_
```javascript
include.inject('subfolder/app.js').done(function(){
	eq(Application.version,1);
})
```

- ```include.inject``` - matters only in nodejs test executor - as ```include.js``` is like require() - scripts are evaluated in there module scope, so Application object will be not available in our test, but ```inject``` forces script to be evaluated in the same context/scope as the unit test.

That was the main target of this unit testing system - to create and run the scripts as quick and simple as possible - there are no need in any config files or some other unneeded definitions - but with growing complexity, you may also want some default configurations and some Class to group your tests.



####UTest Class

```javascript
UTest({
	'check object': function(){
		var A = function(){this.letter = 'A'};
		
		assert.deepEqual({letter: 'A'}, new A);
	},
	
	'async test': function(done){
		$.get('/rest/request').then(function(response){
			assert.equal(response, 'foo');
			done();
		})
	},
	
	before: function(){
		// function is called before tests cases are run
		// (supports async call - use done as first argument)
	},
	teardown: function(){
		// function is called after each test case
		// (supports async call)
	},
	
	after: function(){
		// function is called after all test cases from
		// this particular Utest instance are completed
	}
});
```