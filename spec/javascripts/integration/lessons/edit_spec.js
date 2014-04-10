module('Lesson edit integration');

test('Can edit a lesson', function () {
    visit('/lessons/1/edit');
    andThen(function () {
        var title = find('h2:first').text();
        equal(title, 'Edit lesson', "Expected 'Edit lesson', got: " + title);
        var lesson_title = find('#lesson_title').val();
        equal(lesson_title,'Working with Strings' ,'Expected to find "Working with Strings"');
        var lesson_body = lessonBody.getValue();
        equal( lesson_body, 'Strings in Ruby are');
        var lesson_code = lessonCode.getValue();
        equal(lesson_code, 'puts "Hello Friend!"', "Expected to find ..., got: " + lesson_code);
        lesson_code.value = 'class Update';
        fillIn('#lesson_title', 'This is the edited title');
        click('button#save_lesson');
        andThen(function () {
            var edited_title = find('h3').text();
            equal(edited_title, 'This is the edited title', "Expected to find 'This is the edited title'");
        });
    });
});
