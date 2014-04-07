module('Routing');

test('Root route', function () {
    routesTo('/', 'index');
});

test('About page route', function () {
    routesTo('/about', 'about');
});

test('Lessons routes', function () {
    routesTo('/lessons', 'lessons.index');
    routesTo('/lessons/1', 'lessons.show');
    routesTo('/lessons/new', 'lessons.new');
});