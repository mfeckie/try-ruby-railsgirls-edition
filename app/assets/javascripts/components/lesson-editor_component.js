TryRubyRailsGirls.LessonEditorComponent = Ember.Component.extend({
    actions: {
    },
    setupFlags: function () {
        var lesson_area = $('#lesson_body')[0];
        window.lessonEditor = CodeMirror(lesson_area, {
            lineNumbers: true,
            mode: 'text/x-markdown',
            theme: 'lesser-dark',
            tabSize: 2,
            lineWrapping: true
        })
    }.on('didInsertElement')
});