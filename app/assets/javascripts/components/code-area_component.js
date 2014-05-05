TryRubyRailsGirls.CodeAreaComponent = Ember.Component.extend({
    endResult: [],
    actions: {
        compileCode: function () {
            var compiler = Opal.RubyOpalCompiler.$instance()
            var output = compiler.$run_code()
            this.set('endResult', output);
        }
    },
    setupFlags: function () {
      console.log('Called onInit')
        var textarea = document.getElementById('code-area');
        window.editor = CodeMirror(textarea, {
            lineNumbers: true,
            mode: 'text/x-ruby',
            theme: 'lesser-dark',
            tabSize: 2,
            lineWrapping: true,
            value: this.get('initialCode')
        })
    }.on('didInsertElement')
});
