Ember.Handlebars.helper('format-markdown', function (input) {
    return new Handlebars.SafeString(markdown.toHTML(input));
});