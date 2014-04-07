//= require support/bind-poly
//= require application.js.erb
//= require support/helpers

var d = document;
d.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');


TryRubyRailsGirls.rootElement = "#ember-testing";
TryRubyRailsGirls.setupForTesting();
TryRubyRailsGirls.injectTestHelpers();

