TryRubyRailsGirls.LessonsNewController = Ember.Controller.extend({
    actions: {
        saveLesson: function () {
            var self = this;
            var newLesson = {
                lesson_number: this.get('lesson_number'),
                lesson_title: this.get('lesson_title'),
                lesson_body: window.lessonBody.getValue(),
                lesson_code: window.lessonCode.getValue()
            };
            var new_record = this.store.createRecord('lesson', newLesson);
            new_record.save().then(function () {
                    self.transitionToRoute('lessons.show', new_record);
                },
                function () {
                    console.log('error');
                    //TODO Proper error handling
                }
            );

        }
    }
});