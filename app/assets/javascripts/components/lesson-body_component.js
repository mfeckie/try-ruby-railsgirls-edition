TryRubyRailsGirls.LessonBodyComponent = Ember.Component.extend({
    actions: {
    },
    onInit: function () {
        var lesson_area = $('#lesson_body')[0];
        window.lessonBody = CodeMirror(lesson_area, {
            lineNumbers: true,
            mode: 'text/x-markdown',
            theme: 'lesser-dark',
            tabSize: 2,
            lineWrapping: true,
            value: this.get('lesson_body') || ''
        })
    }.on('didInsertElement')
});