module('Visiting the main page', {
    setup: function () {

    },
    teardown: function () {

    }
});

test('Home page text', function () {
    visit('/');
    andThen(function () {
        elementHasText('h1', "Welcome Nubies!")
        var menu = $('.side-nav li').length;
        equal(menu, 2, "Expected 2 items, got: "+ menu);
    });
});