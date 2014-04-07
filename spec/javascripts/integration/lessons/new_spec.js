module('Lesson creation', {
    setup: function () {
        TryRubyRailsGirls.reset();
    },
    teardown: function () {
        resetFixtures();
    }
});

test('New lesson view', function () {
    visit('/lessons/new');
    andThen(function () {
        ensureElementPresent('input#lesson_number');
        ensureElementPresent('input#lesson_title');
        var lessonBody = window.lessonBody;
        ok(lessonBody, 'Lesson body missing');
        var lessonCode = window.lessonCode;
        ok(lessonCode, 'Lesson code missing')
    });
});

test('Saving a new lesson', function () {
    var lesson = {
        lesson_number: 2,
        lesson_title: 'Test Lesson',
        lesson_body: 'This is the body of the new lesson',
        lesson_code: 'class Test\nend'
    };
    visit('/lessons/new');
    andThen(function () {
        var lessonBodyEditor = window.lessonBody;
        var lessonCodeEditor = window.lessonCode;
        fillIn('#lesson_number', lesson.lesson_number);
        fillIn('#lesson_title', lesson.lesson_title);
        lessonBodyEditor.setValue(lesson.lesson_body);
        lessonCodeEditor.setValue(lesson.lesson_code);
        click('button#save_lesson');
        andThen(function () {
            var page_title = find('#lesson_title').text();
            equal(page_title, 'Test Lesson', 'Expected "Test Lesson", got: ' + page_title);
        });
    });

});

