//= require support/bind-poly
//= require application.js.erb
//= require_tree ./support

var d = document;
d.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');


TryRubyRailsGirls.rootElement = "#ember-testing";
TryRubyRailsGirls.setupForTesting();
TryRubyRailsGirls.injectTestHelpers();

var resetFixtures = function () {
    TryRubyRailsGirls.ApplicationAdapter = DS.FixtureAdapter;

    TryRubyRailsGirls.Lesson.FIXTURES = [
        {
            id: 1,
            lesson_number: 1,
            lesson_title: 'Working with Strings',
            lesson_body: 'Strings in Ruby are',
            lesson_code: 'puts "Hello Friend!"'

        },
        {
            id: 2,
            lesson_number: 2,
            lesson_title: 'Working with numbers',
            lesson_body: 'Numbers in Ruby are',
            lesson_code: 'puts 1 + 1'
        }
    ];
};

resetFixtures();
