TryRubyRailsGirls.LessonsShowRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('lesson', params.id );
    }
});