module('Lesson model spec', {
    setup: function () {

    },
    teardown: function () {

    }
});

test('Lesson model attributes', function () {
    respondsTo('Lesson', 'lesson_number', 'number');
    respondsTo('Lesson', 'title', 'string');
    respondsTo('Lesson', 'body', 'string');
    respondsTo('Lesson', 'initialCode', 'string');
});

test('Includes initial code in CodeMirror', function () {
    visit('/lessons/1');
    andThen(function() {
        var code = window.editor.getValue();
        var expected = /puts \"Hello Friend!\"/;
        ok(expected.test(code), 'Got ' + code);
    });
});
