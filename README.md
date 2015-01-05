### µTest

[![Build Status](https://travis-ci.org/atmajs/utest.png?branch=master)](https://travis-ci.org/atmajs/utest)

_TDD and Unit Testing plugin for Atma.Toolkit_

- [Overview](#overview)
- [Simplest example](#simplest-example)
- [Assertions](#assertions)
- [UTest Class](#utest-class)
    - [skip, force, range](#skip-force-range)
    - [http](#utest-server)
	- [DomTest](#domtest)
    - Interfaces
        - [Mocha](#mocha-syntax)
- [Config](#config)
- [Forks](#forks)
- [CLI Sugar](#cli-sugar)
- [ES6](#es6)
- [Simplest CommonJS test](#simplest-commonjs-test)
- [Screenshot](#screenshot)

##### Install
```$ npm install atma -g```


Create Tests. Covers all use cases - from most simple test to complex-application test.

##### Overview

- **Node.js**-runner  ` $ atma test foo `.
- **Browser**-runner  
    - with `atma` you create a test server (` $ atma server `), open a test-runner-page in one or many browsers (` http://localhost:5777/utest/ `), _so slaves are captured by the server_. _Otherwise it will be done under the hood._  Now run ` $ atma test foo -browser `.
- **Watcher**       ` -watch ` flag allows atma test instance not to be closed after testing, but wait for any changes in files, that were used in unit tests and all its includejs dependencies.
- **Environments** By default,  there will be available additional libraries in all tests
    
    - [IncludeJS](https://github.com/atmajs/IncludeJS)
    - [MaskJS](https://github.com/atmajs/MaskJS)
    - [ClassJS](https://github.com/atmajs/ClassJS)
    - [IO](https://github.com/atmajs/atma-io)
    - [Logger](https://github.com/atmajs/atma-logger)
    - jQuery
    - SinonJS
    
- **Test Suites**   though this testing system does not require from developer to define test suites, as from example below, but with this class, developer can define test suites more properly
- **Pages**         Load and Test webpages or other HTTP endpoints, like RESTful services.
- **Configs**       configurations for more complex projects

> Why not to use headless browser testrunner, like PhantomJS? `Server-Slave` pattern has much more advantages:
    - Launch slave url in any browser - Chrome, IE(9+), Opera, Mozilla. _PhantomJS is only webkit based._
    - Much better debugging. Use browsers developer tools to set breakpoints in your tests and assertions.

Default test extension: `*.test*`

##### Simplest example
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
include
    .inject('subfolder/app.js')
    .done(function(){
        eq(Application.version,1);
    })
```

- ```include.inject``` - matters only in nodejs test runner. As ```include.js```, like require, evaluates scripts in the module scope, so Application object will be not available in our test, but ```inject``` forces script to be evaluated in the same context/scope as the unit tests one.


##### Assertions

Embedded Assertion Library - [Documentation](https://github.com/atmajs/assertion).

Quick overview (note the global aliases and jQuery assertions for browser tests):

```javascript
  assert.equal(arg1, arg2, ?message);
  // eq_
  
  assert.notEqual
  // notEq_

  assert.strictEqual
  // strictEq_

  assert.notStrictEqual
  // notStrictEq_

  assert.deepEq
  // deepEq_

  assert.notDeepEq
  // notDeepEq_

  assert.has
  // has_
  
  assert.hasNot
  // hasNot_
  
  assert.is
  // is_
  assert.isNot
  // isNot_
  
  assert.await(Function, name)
  assert.avoid(Function, name)
  
  $.fn.has_
  $.fn.hasNot_
  $.fn.eq_
  $.fn.notEq_
  $.fn.deepEq_
  $.fn.notDeepEq_
  $.fn.is_
  $.fn.isNot_  
```

#### UTest Class

```javascript
UTest({
    'foo test': function(){
        eq_(1, 1);
    },
    
    'async test': function(done){
        $.get('/rest/request').then(function(response){
            eq_(response, 'foo');
            // e.g. pass variables to next function
            done(response);
        })
    },
    'receive args': function(done, fooValue){
        eq_(fooValue, 'foo');
        done();
    },
    
    'nested or groupped tests': {
        'foo': function()
        'baz': function()
    },
    
    // function is called before tests cases are run
    '$before': function(?done),
    // function is called after each test case
    '$teardown': function(?done),
    // function is called after all test cases from
    '$after': function(?done)
});
```
##### Skip, Force, Range
There is a simple syntax to limit or skip some tests.
```javascript
UTest({
    // BANG: run tests/groups with `!` only
    '!run this and other banged tests': function(),
    '!some group': {
        'foo': function()
        'baz': function()
    },
    
    // COMMENT: skip test/group
    '//skip this and other skipped tests': function(),
    
    // RANGES: `[` - start, `]` - end
    // if start is not specified, then start from the beginning
    // if end   is not specified, then run to the end
    
    '[from this': function(),
    ']to this': function()
});
```

##### UTest server

- HTTP (webpage / service) loading
    
    ```javascript
    UTest
        .server
        .request(url [, method, bodyArgs], callback /* <Callback> */);
        
    UTest
        .server
        /* -params {
         *         url: String,
         *        headers:?Object,
         *        data: ?Object|String
         *        method: ?String }
         */
        .request(params) //-> Promise
        .done(callback /* <Callback> */)
        .fail(onError);
        
    // <Callback> - depends on response:
    // 1. text/html: create a document and wait for the document to be loaded:
    callback === Function<document, window, headers>
    
    // 2. json response
    callback === Function<json, headers>
    
    // 3. other
    callback === Function<responseText, headers>
    
        
    UTest({
        'google has input': function(done){
            UTest
                .server
                .request('http://google.com', function(error, document, window){
                    eq_(error, null);
                    
                    $(document)
                        .has_('input[type="text"]');
                    done();
                })
        }
    });
    ```
    
- server-side MaskJS rendering

    ```javascript
    UTest
        .server
        .render(template, model, callback);
        
    UTest({
        'render title': function(done){
            var template = 'h4 > "Hello, ~[name]"',
                model = { name: 'World' };
            UTest
                .server
                .render(template, model, function(error, document, window){
                    $(document)
                        .has_('html', 'Hello, world');
                        
                    done();
                })
        }
    });
    ```

##### DomTest

`UTest` embeds [domtest](https://github.com/atmajs/domtest)
```es6
UTest({
	'test foo' () {
		// typing is asynchrone and the
		// `domtest` returns Promise, when the tests are complete.
		
		return UTest.domtest(document.body, `
			with ('input.foo') {
				do type Hello;
				eq('val', 'Hello');
			}
		`);
	}
})
```

##### Mocha Syntax
```javascript
UTest('Baz suite', function(){
    // describe mocha tests here
    it('should do smth', function(){
        // ..
    });
    describe('sub', function(){
        it('other test', function(){
            // ..
        })
    })
})
```

#### Config

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
            
            // working directory, @default: cwd
            base: String,
            
            // path to tests, glob pattern is also supported
            // e.g. test/**-node.test
            tests: String | Array<String>
        }
    }
};
```
```bash
$ cd app-project
$ atma test
```

##### Forks
Split big applications into projects. Develop and test them seperatly. Then include the tests into application test suites
```
/app
    /Helpers
        /src
            ...
        /test
            ...
            config.js
    /Api
        /src
            ...
        /test
            ...
            config.js
    /test
        config.js
```
```javascript
// app/test/config.js
module.exports = {
    suites: {
        'My Helpers Test Suite': {
            cwd: 'Helpers/',
            fork: 'test/config.js'
        },
        'My API Test Suite': {
            cwd: 'Api/',
            fork: 'test/config.js'
        }
    }
};
```

##### CLI Sugar
- `atma test`

    Load the configuration from `%CWD%/test/config.js` and run all tests and suites

- `atma test foo`

    Run the test `%CWD%/test/foo.test`. If exists, the configuration will also be loaded and the `ENV` property for this path will be extracted to preload the required resources.
    
    ```javascript
    // test/config.js
    module.exports = {
        suites: {
            'baz-runner': {
                exec: 'dom',
                env: 'lib/baz.js'
                tests: 'test/baz/**.test'
            }
        }
    }
    ```
    `atma test baz/quux` - run single file test and the `lib/baz.js` will be preloaded.

- `atma test baz-runner`

    Run single suite

- `atma test baz/**.test`

    Run files by glob matching

- `atma test --config my-test-config.js`

    Override configuration path
    
- CLI flags
    - `-browser` runs test in browser
    - `-node` runs test in Node.js
    - `-watch` watche for file changes and rerun the tests

##### ES6
Write tests using EcmaScript 6 for NodeJS and **browser** runners. This is possible due to [Google Traceur Compiler](https://github.com/google/traceur-compiler) and the [Atma.Toolkit Plugin](https://github.com/atmajs/atma-loader-traceur).

**How to start?**

- Install the plugin
    
    ```bash
    $ atma plugin install atma-loader-traceur
    ```
- Specify `test` extension to be handled by the tracuer. Edit your `package.json` to have at least:
    
    ```json
    {
        "atma": {
            "settings": {
                "traceur-extension": "test"
            }
        }
    }
    ```
**Sample**
```es6
// foo.test
has_(` foo-multiline-string `, /foo/);
```
```bash
$ atma test foo.test
```

##### Simplest CommonJS test
The first possible solution to test CommonJS Modules is just to `require` them as usual in tests and perform some assertions.
But there is simpler approach to load it once for all tests with exporting the module's exports to the globals.
```javascript
// src/some.js
module.exports = {
    addOne: function(n){
        return n + 1;
    }    
};
```
```javascript
// test/mytest.test
eq(foo.addOne(1), 2);
```

```javascript
// test/config.js
module.exports = {
    env: ['src/some.js::foo'],
    tests: 'test/*.test'
};
```

```$ cd app-project```
```$ atma test```

Here was used alias-feature of the IncludeJS. So when 'some.js' is required, its exports object is then set to globals with alias var name. From the example - it was 'foo'.

##### Screenshot

![utest screenshot](https://github.com/atmajs/utest/raw/master/resources/screen.png)


##### Build, Test, Contribute

- **Prepair**
    - Install Atma.Toolkit
        
        ```bash
        $ npm install atma -g
        ```
    - Clone atma libraries first into any folder:
        
        ```bash
        $ atma atma-clone --all
        ```
    - Reference the atma libraries
        
        ```bash
        $ cd utest/
        $ atma reference atma
        ```
- **Build**
    
    ```bash
    $ atma
    ```
- **Test**
    
    ```bash
    $ atma test test/**
    ```
    
    
----
(c) 2014 MIT - The Atma.js Project