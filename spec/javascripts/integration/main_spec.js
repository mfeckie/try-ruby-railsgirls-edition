module('Visiting the main page', {
    setup: function () {

    },
    teardown: function () {

    }
});

test('Home page text', function () {
    visit('/');
    andThen(function () {
        var heading = find('h1:contains("Let\'s Learn Ruby!")').length;
        ok(heading == 1)
    });
});