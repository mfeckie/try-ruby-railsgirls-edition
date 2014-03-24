module('Visiting the main page', {
    setup: function () {

    },
    teardown: function () {

    }
});

test('Home page text', function () {
    visit('/');
    andThen(function () {
        elementHasText('h1', "Let\'s Learn Ruby!")
    });
});