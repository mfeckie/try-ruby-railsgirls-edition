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

test('Interacting with the terminal', function () {
    visit('/lessons');
    andThen(function () {
        terminalEntry('help')
        var expect = "back: takes you to the previous lesson";
        equal(getTerminalOutput(), expect, "Expected: " + expect + " Got: " + getTerminalOutput())
    });
});


