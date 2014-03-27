module('Individual lessons');


test('Visiting an individual lesson', function () {
    visit('/lessons/1');
    andThen(function () {
        elementHasText('.panel', 'Lesson 1');
        elementHasText('.panel', 'Working with Strings');
        elementHasText('.panel', 'Strings in Ruby are');
    });
});

