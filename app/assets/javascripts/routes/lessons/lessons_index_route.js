TryRubyRailsGirls.LessonsIndexRoute = Ember.Route.extend({
    model: function () {
        return this.store.all('lesson');
    },
    actions: {
        goToLesson: function (lesson) {
            this.transitionTo('lessons.show', lesson);
        }
    }
})
;