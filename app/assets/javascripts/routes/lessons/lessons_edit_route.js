TryRubyRailsGirls.LessonsEditRoute = Ember.Route.extend({
    model: function(param) {
        return this.store.find('lesson', param.id);
    },
    actions: {
        saveLesson: function () {
            var self = this;
            var m = this.get('currentModel');
            m.set('lesson_body', window.lessonBody.getValue());
            m.set('lesson_code', window.lessonCode.getValue());
            var onSuccess = function() {
                self.transitionTo('lesson.show', m.id);
            };
            m.save(onSuccess);
            console.log(m);
        }
    }
});