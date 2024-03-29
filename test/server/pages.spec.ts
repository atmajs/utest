UTest({
    'simple': function(done){

        UTest
            .server
            .request('test/server/simple.html')
            .fail(assert.avoid())
            .done(function(doc){

                $(doc)
                    .has_('text', 'Baz');
                done();
            })
    },

    'simple failed': function(done){

        UTest
            .server
            .request('test/server/404.html')
            .done(assert.avoid())
            .fail(function(error){
                is_(error, 'Object');
                eq_(error.statusCode, 404);
                done();
            })
    },

    'script + ajax': function(done){

        UTest
            .server
            .request('test/server/script_ajax.html')
            .fail(assert.avoid())
            .done(function(doc){

                $(doc)
                    .has_('text', 'BazData');
                done();
            })
    }
})
