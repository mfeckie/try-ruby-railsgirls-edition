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
    elementDoesNotHaveText('.output-panel', '>Hello Friend!');
    elementHasText('.panel', 'Lesson 1');
    elementHasText('.panel', 'Working with Strings');
    elementHasText('.panel', 'Strings in Ruby are');
    click('#run_code');
    elementHasText('.output-panel', '> Hello Friend!');
  });
});

