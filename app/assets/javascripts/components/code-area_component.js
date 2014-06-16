TryRubyRailsGirls.CodeAreaComponent = Ember.Component.extend({
  endResult: [],
  actions: {
    compileCode: function () {
      var code = this.get('editor').getValue();
      var compiler = Opal.RubyOpalCompiler.$instance();
      var output = compiler.$run_code(code);
      this.set('endResult', output);
    }
  },
  setupFlags: function () {
    var textarea = document.getElementById('code-area');
    this.set('editor', CodeMirror(textarea, {
      lineNumbers: true,
      mode: 'text/x-ruby',
      theme: 'lesser-dark',
      tabSize: 2,
      lineWrapping: true,
      value: this.get('lesson_code')
    }));
  }.on('didInsertElement'),
  updateCode: function () {
    this.get('editor').setValue(this.get('lesson_code'));
  }.observes('lesson_code')
});
