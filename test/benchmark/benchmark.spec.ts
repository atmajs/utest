UTest.benchmark({
    'string contains check' : {
        'RegExp#test' () {
             /o/.test('Hello World!');
        },
        'String#indexOf' () {
            'Hello World!'.indexOf('o') > -1;
        }
    }
});
