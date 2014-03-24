module('Routing');

test('Root route', function () {
    routesTo('/', 'index');
});

test('About page route', function () {
    routesTo('/about', 'about');
});