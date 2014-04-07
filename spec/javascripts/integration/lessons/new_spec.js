module('Lesson creation', {
    setup: function () {

    },
    teardown: function () {
        resetFixtures();
    }
});

test('New lesson view', function () {
    visit('/lessons/new');
    andThen(function () {
        var title = find('h2').text();
        ok(title == 'Create a New Lesson', 'Got ' + title);
        var lessonEditor = window.lessonEditor;
        ok(lessonEditor, lessonEditor);
    });

});