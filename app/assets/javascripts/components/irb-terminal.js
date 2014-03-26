TryRubyRailsGirls.IrbTerminalComponent = Ember.Component.extend({
    setupFlags: function () {
        var prompt = "TryRuby:> "
        var commands = {
            help: function () { return 'clear: clears text in the terminal\nnext: takes you to the next lesson\nback: takes you to the previous lesson';},
            next: function () { return 'Moving to next lesson ..... (this is just a demo though, so we\'re going nowhere!)'; },
            back: function () { return 'Returning to previous lesson .... (this is just a demo though, so we\'re going nowhere!)'; }
        }
        window.term = $("#terminal")
            .terminal(function (command, term) {
                if (command !== ' ') {
                    try {
                        input = command.split(" ");
                        term.echo(commands[input[0]]());
                    } catch (e) {
                        term.error("I'm sorry, I don't know what to do with that!");
                    }

                } else {
                    term.echo('');
                }
            },
            {
                greetings: tryRubyAsciiArt(),
                prompt: prompt
            });
    }.on('didInsertElement')
})