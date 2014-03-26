module('Lesson model spec', {
    setup: function () {

    },
    teardown: function () {

    }
});

test('Lesson model attributes', function () {
    respondsTo('Lesson', 'lesson_number', 'number');
    respondsTo('Lesson', 'title', 'string');
    respondsTo('Lesson', 'body', 'string')
});