UTEST
----
_TDD and Unit Testing_

###### Install
```$ npm install -g ijs```


Create Tests simple and fast. Overview:

- **Node.js** Runner  - ```$ ijs test foo```.
- **Browser** Runner - with ijs you create a test server (```$ ijs server```), open a test-runner-page in one or many browsers (```http://localhost:5777/utest/```), _so slaves are captured by the server_. And you are ready to run your scripts in dom environment ```$ ijs test foo -browser```.
- **Watcher**      - ```-watch``` flag allows ijs test instance not to be closed after testing, but waiting for any changes in files, that were used in unit tests and all its includejs dependencies.
- **Environments** -  ijs also loads additional libraries, so they are available in unit tests, like inludejs, maskjs,  jQuery, SinonJS.
- **Test Suites**  - (optional) though this testing system does not require from developer to define test suites, as from example below, but with this class, developer can define test suites more properly
- **Configs**      - (optional) configurations for more complex projects

Example:
```
/myscript
   app.js
   app.text
```
_app.js_
```javascript
var Application = {version: 1};
```
_app.test_
```javascript
eq(Application.version, 1); // alias for assert.equal()
```

- _[nodejs]_ ```$ cd myscript```; ```$ ijs test app``` / ```$ ijs test app.test -watch```
- _[browser]_
	- capture slave, (if not already), with starting the server and opening "test" page (```$ ijs server```, navigate to ```http://localhost:5777/test```)
	- ```$ cd myscript```; ```$ ijs test app -browser ``` / ```$ ijs test app -browser -watch```

This is the simpliest test case. And as here 2 files(app.js/app.test) are in the same directory, 'app.js' will be preloaded when 'app.test' is started. But with includejs any amount of scripts could be preloaded.

_app.test_
```javascript
include.inject('subfolder/app.js').done(function(){
	eq(Application.version,1);
})
```

- ```include.inject``` - matters only in nodejs test runner. As ```include.js``` is like require() - scripts are evaluated in there module scope, so Application object will be not available in our test, but ```inject``` forces script to be evaluated in the same context/scope as the unit tests one.


###### Assertions
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

			/** preloading scripts */
			env: ['path relative to projects path'],
			tests: <e.g.> 'test/**-node.test'
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
```$ ijs test```

Here was used alias-feature of an includejs. So when 'some.js' is required, its exports object is then set to globals with alias var name , from example, it was 'foo'


