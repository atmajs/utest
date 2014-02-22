µTEST
----
[![Build Status](https://travis-ci.org/atmajs/utest.png?branch=master)](https://travis-ci.org/atmajs/utest)

_TDD and Unit Testing_

###### Install
```$ npm install atma -g```


Create Tests. Covers all use cases - from most simple test to complex-application test.

Overview:

- **Node.js**-runner — ```$ atma test foo```.
- **Browser**-runner — 
	- with `atma` you create a test server (```$ atma server```), open a test-runner-page in one or many browsers (```http://localhost:5777/utest/```), _so slaves are captured by the server_. And you are ready to run your scripts in dom environment ```$ atma test foo -browser```
	- UPD: (up from v.8.14) if the server is not running, uTest starts the server, launches the system default browser, navigates to the slave capture url and resumes the runner.
- **Watcher**      — ```-watch``` flag allows atma test instance not to be closed after testing, but waiting for any changes in files, that were used in unit tests and all its includejs dependencies.
- **Environments** —  `atma` also loads additional libraries, so they are available in unit tests, like [atma-libs](https://github.com/atmajs/atma.libs),  jQuery, SinonJS.
- **Test Suites**  — (optional) though this testing system does not require from developer to define test suites, as from example below, but with this class, developer can define test suites more properly
- **Configs**      — (optional) configurations for more complex projects
- Why not to use headless browser testrunner, like PhantomJS? `Server-Slave` pattern has much more advantages:
	- Launch slave url in any browser - Chrome, IE(9+), Opera, Mozilla. _PhantomJS is only webkit based._
	- Much better debugging. Use browsers developer tools to set breakpoints in your tests and assertions.

Default test extension: `*.test*`

Example:
```
/myscript
   app.js
   app.test
```
_app.js_
```javascript
var Application = { version: 1 };
```
_app.test_
```javascript
eq(Application.version, 1); // alias for assert.equal()
```

> More Examples you can find in most [Atma.js Libraries](https://github.com/atmajs)

- Node.js: 
	```bash
		cd myscript
		atma test app
		# OR atma test app -watch
	```
- Browser:
	```bash
		cd myscript
		atma test app -browser
		# OR atma test app -browser -watch
	```

This is the simpliest test case. 
> As those 2 files ` app.js/app.test ` are in the same directory, `app.js` will be preloaded when 'app.test' is started

_app.test_
```javascript
include.inject('subfolder/app.js').done(function(){
	eq(Application.version,1);
})
```

- ```include.inject``` - matters only in nodejs test runner. As ```include.js``` is like require() - scripts are evaluated in there module scope, so Application object will be not available in our test, but ```inject``` forces script to be evaluated in the same context/scope as the unit tests one.


###### Assertions

Credits to [Jxck/assert](https://github.com/Jxck/assert)

```javascript
  assert.equal(arg1, arg2, ?message); 
  // alias
  // eq(arg1, arg2, ?message);

  assert.notEqual(arg1, arg2, ?message); 
  // notEq

  assert.strictEqual(arg1, arg2, ?message); 
  // strictEq

  assert.notStrictEqual(arg1, arg2, ?message); 
  // notStrictEq

  assert.deepEq(arg1, arg2, ?message); 
  // deepEq

  assert.notDeepEq(arg1, arg2, ?message); 
  // notDeepEq

  // Contains check
  assert.has(arg1, arg2, ?message); 
  // has
  has(String, String)
  has(String, RegExp)
  has(Object, String) // key check
  has(Object, Object) // subset check
  has(Array, String|Number|RegExp|Boolean)
  has(Array, Array) // subset check

  assert.hasNot(arg1, arg2, ?message); 
  // hasNot

```

###### UTest Class

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
	
	'$before': function(){
		// function is called before tests cases are run
		// (supports async call - use done as first argument)
	},
	'$teardown': function(){
		// function is called after each test case
		// (supports async call)
	},
	
	'$after': function(){
		// function is called after all test cases from
		// this particular Utest instance are completed
	}
});
```

###### Config

```
/app-project
    /src
        ...
    /test
        config.js
        ...
```

```javascript
module.exports = {
	suites: {
		'suite name': {
			exec: <String> 'node' | 'dom',

			// preloading scripts
            // (path is relative to projects directory)
			env: String | Array<String>,
            
            // path to tests, glob pattern is also supported
            // e.g. test/**-node.test
			tests: String | Array<String>
		}
	}
};
```

###### _CommonJS Module tests_
_src/some.js_
```javascript
module.exports = {
	addOne: function(n){
		return n + 1;
    }	
}
```

_test/mytest.test_
```javascript
eq(foo.addOne(1), 2);
```

_test/config.js_
```javascript
module.exports = {
	env: ['src/some.js::foo'],
	tests: 'test/*.test'
};
```

```$ cd app-project```
```$ atma test```

Here was used alias-feature of the IncludeJS. So when 'some.js' is required, its exports object is then set to globals with alias var name , from example, it was 'foo'.
