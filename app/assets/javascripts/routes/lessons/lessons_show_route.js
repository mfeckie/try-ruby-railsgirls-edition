TryRubyRailsGirls.LessonsShowRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('lesson', params.id );
//        return {
//            lesson_number: 1,
//            title: 'Working with Strings',
//            body: 'Strings in Ruby are awesome',
//            initialCode: 'puts "Hello Friend!"'
//        }
    }
})