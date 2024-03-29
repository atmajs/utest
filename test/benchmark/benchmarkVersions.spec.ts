UTest.benchmarkVersions({
    $config: {
        versions: {
            '1': '/test/benchmark/versions/contains_v1.js',
            '2': '/test/benchmark/versions/contains_v2.js',
        }
    },
    'string contains check' : {
        '1: check via regexp' (lib) {
             checkOnce('RegExp', lib.contains);
             lib.contains('Hello World!', '0');
        },
        '2: check via indexOf' (lib) {
            checkOnce('indexOf', lib.contains);
            lib.contains('Hello World!', '0');
        }
    }
});

var checkOnce;
(function(){
    var hash = {};
    checkOnce = function(str, fn) {
        if (hash[str]) {
            return;
        }
        hash[str] = true;
        has_(fn.toString(), str);
    }
}());
