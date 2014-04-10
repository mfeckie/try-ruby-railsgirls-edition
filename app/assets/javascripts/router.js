// For more information see: http://emberjs.com/guides/routing/

TryRubyRailsGirls.Router.map(function() {
  this.route('about');
  this.resource('lessons', function () {
      this.route('show', {path: '/:id'});
      this.route('new');
      this.route('edit', {path: '/:id/edit'})
  })
});