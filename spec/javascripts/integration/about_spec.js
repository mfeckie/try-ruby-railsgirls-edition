test('Navigating to about', function () {
    visit('/');
    click('a:contains("About")');
    andThen(function () {
        elementHasText('h1', "What's this Ruby all about?")
    });
});