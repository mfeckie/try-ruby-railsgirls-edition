module('Lesson model spec', {
    setup: function () {

    },
    teardown: function () {

    }
});

test('Lesson model attributes', function () {
    respondsTo('Lesson', 'lesson_number', 'number');
    respondsTo('Lesson', 'lesson_title', 'string');
    respondsTo('Lesson', 'lesson_body', 'string');
    respondsTo('Lesson', 'lesson_code', 'string');
});