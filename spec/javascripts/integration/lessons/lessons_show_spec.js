module('Individual lessons', {
    setup: function () {
        TryRubyRailsGirls.reset();
    },
    teardown: function () {
    }
});

test('Visiting an individual lesson', function () {
    visit('/lessons/1');
    andThen(function () {
        elementHasText('.panel', 'Lesson 1');
        elementHasText('.panel', 'Working with Strings');
        elementHasText('.panel', 'Strings in Ruby are');
        var editorText = window.editor.getValue();
        var matcher = /puts \"Hello Friend!\"/;
        ok(matcher.test(editorText), "Expected: " + matcher + "got: " + editorText);
    });
});
