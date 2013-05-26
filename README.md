UTEST
----
_TDD and Unit Testing plugin for IncludeJSBuilder_


Create Unit Tests quickly and simple. Features:

- NodeJS - will run any script in nodejs environment and notifies about assertion errors, if any.
- Browsers - with ijs you create a test server (```$ ijs server```), open test page in one or many browsers (```http://localhost:5777/test```), so slaves are captured by the server. And any test which runs with ```-browser``` flag will be executed in every opened browser instance.
- Watcher - ```-watch``` flag allows ```ijs``` instance not to be closed after testing, but waiting for any changes in files, there were used in unit tests.
- Environments - in nodejs and browsers ijs also loads libraries from libjs, so they are all already available in unit tests, like inludejs, maskjs.
- UTest Class - thought this testing system does not require from developer to define test suites, as from example below, but with this class, developer can define test suites more properly.

Example:

_app.js_
```javascript
var Application = {version: 1};
```

_app.test_
```javascript
include.inject('app.js').done(function(){
	assert.equal(Application.version, 1);
})
```

- nodejs - ```$ ijs test app.test```, or ```$ ijs test app.test -watch``` (now any changes to app.test or app.js will rerun the tests)
- browser - 
	- capture slave, if not already with starting the server and opening "test" page (```ijs server```, navigate to ```http://localhost:5777/test```)
	- ```$ cd directory/with/app``` ```$ ijs test app.test -browser ```, or ```$ ijs test app.test -browser -watch```

- ```include.inject``` - this is same as ```include.js``` in browsers ( _application.js_ is embedded via ```<script src>``` tag - that means, script is evaluated in global scope, so in our case Application object will be in globals), but in nodejs environment scripts are evaluated in there module scope, so Application object will be not available in our test, but ```inject``` forces script to be evaluated in the same context/scope as the unit test.

That was the main target of this unit testing system - to create and run the scripts as quick and simple as possible - there are no need in any config files or some other unneeded definitions



