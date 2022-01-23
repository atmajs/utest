UTest({
    'check' () {
        var div = mask.render(`
            div.foo;
        `);
        var test = `
            with (div) > hasClass foo;
        `;
        return UTest.domtest(div, test);
    }
})
