TryRubyRailsGirls.LessonCodeComponent = Ember.Component.extend({
    actions: {
    },
    onInit: function () {
        var lesson_code = $('#lesson_code')[0];
        window.lessonCode = CodeMirror(lesson_code, {
            lineNumbers: true,
            mode: 'text/x-ruby',
            theme: 'lesser-dark',
            tabSize: 2,
            lineWrapping: true,
            value: this.get('lesson_code') || ''
        })
    }.on('didInsertElement')
});