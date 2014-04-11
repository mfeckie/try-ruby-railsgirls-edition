module('Lesson pages');

test('Visting lessons index page', function () {
    visit('/lessons');
    andThen(function () {
        elementHasText('h1', 'Let\'s Learn Ruby!');
    });
});

test('Shows multiple index items in grid', function () {
    visit('/lessons');
    andThen(function () {
        var lessons = find(".lessons").length;
        equal(lessons, 2, "Expected to find 2 lessons, got: " + lessons);
        click('.lessons:first');
        andThen(function () {
            currentRoute('lessons.show');
        });
    });
});