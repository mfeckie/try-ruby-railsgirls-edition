module('Lesson pages', {
    setup: function () {

    },
    teardown: function () {

    }
});

test('Visting lessons index page', function () {
    visit('/lessons');
    andThen(function () {
        elementHasText('h1', 'Let\'s Learn Ruby!');
    });
});


