#TryRuby - RailsGirls Edition

##Why?

I've been involved in a couple of RailsGirls workshops now and, although amazing, TryRuby doesn't seem to cope too well with a room of 50 people hitting it regularly.

I've also been watching Ember.js and Opal.rb very closely and though perhaps there could be a version of TryRuby that could be run locally (or remotely) in a faster way than TryRuby.

The major thing that sets this apart is that the Ruby code is compiled to JavaScript on the client side and doesn't need to keep hitting the server.  This leads to a much nicer, faster experience and allows the participants to play with Ruby in a non-threatening way (it's just a webpage right!), with fewer delays.

##Still TODO

 - Need to add in the lessons!
 - Improve rendering of results -> maybe make them a bit prettier
 - Would be nice if all output didn't require a puts call


# Dependencies

 - Ember.js for frontend stuff
 - Foundation for prettiness
 - RSpec, Shoulda Matchers, Teaspoon and QUnit for testing
 - Guard and Growl for automated testing and notification
 - Better Errors, Binding of Caller and Meta Request for debugging
 - Quiet assets for easier log review in development mode

# License

The TryRuby - RailsGirls Edition is licensed under the [MIT License](http://opensource.org/licenses/MIT)