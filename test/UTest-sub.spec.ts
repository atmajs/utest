var flow = [];
UTest({
    'foo': {
        'sub-1': function(done){
            setTimeout(function(){
                flow.push(1);
                done();
            },20);
        },
        'sub-2': function(){
            flow.push(2);
        },
    },
    'baz': {
        '//sub-3 - skip': function() {
            flow.push(3);
        },
        'sub-4': function(done) {
            setTimeout(function(){
                flow.push(4);
                done();
            },20);
        },
    },
    'qux': {
        '//sub-5 - skip': function() {
            flow.push(5);
        },
        'sub-6 - important': function(done){
            setTimeout(function(){
                flow.push(6);
                done();
            },20);
        },
    },
    'check': function() {
        deepEq_(flow, [1,2,4,6]);
    }
});
