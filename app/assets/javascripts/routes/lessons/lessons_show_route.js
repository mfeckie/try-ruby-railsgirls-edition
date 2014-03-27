TryRubyRailsGirls.LessonsShowRoute = Ember.Route.extend({
    model: function () {
        return {
            lesson_number: 1,
            title: 'Working with Strings',
            body: 'Strings in Ruby are awesome'
        }
    }
})