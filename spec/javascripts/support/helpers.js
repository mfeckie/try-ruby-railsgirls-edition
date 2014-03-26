var routesTo = function (url, route_name) {
    visit(url);
    andThen(function () {
        var current_route = TryRubyRailsGirls.__container__.lookup('controller:application').currentRouteName;
        equal(current_route, route_name, 'Expected ' + route_name + ', got: ' + current_route);
    });
};

var respondsTo = function (model, attribute, type) {
    var test_subject = TryRubyRailsGirls[model].metaForProperty(attribute);
    equal(test_subject.type, type, 'Expected ' + type + " got: " + test_subject.type);
    ok(test_subject.isAttribute);
};

var computedPropertyTest = function (model, record, computed_property, expected_output) {
    var store = TryRubyRailsGirls.__container__.lookup('store:main');
    Ember.run(function () {
        var new_record = store.createRecord(model, record);
        var computed = new_record.get(computed_property);
        equal(computed, expected_output, 'Expected ' + expected_output + ' got: ' + computed);
    });
};

var turnOnRESTAdapter = function () {
    TryRubyRailsGirls.ApplicationAdapter = DS.RESTAdapter;

    TryRubyRailsGirls.Store = DS.Store.extend({
        adapter: '-active-model'
    });

    DS.RESTAdapter.reopen(
        {namespace: "api/v1"}
    );
};

var ensureElementPresent = function (testElement) {
    var element = find(testElement).length;
    ok(element, 'Expected page to have ' + testElement + ' element but was not found');
};

var elementHasText = function (element, text) {
    match = new RegExp(text);
    var el = find(element).text();
    ok(match.test(el), "Expected: " + text + " via: " + element);
};

var terminalEntry = function (text) {
    var e;
    var $root = $(document.documentElement || window);
    for (var i = 0; i < text.length; ++i) {
        e = $.Event("keypress");
        e.which = text.charCodeAt(i);
        $root.trigger(e);
    }
    var enter = $.Event("keydown");
    enter.ctrlKey = false;
    enter.which = enter.keyCode = 13;
    $(document.documentElement || window).trigger(enter);
}

var getTerminalOutput = function (element) {
    var elementToFind = element || '.terminal-output div:last';
    return $(elementToFind).html().replace(/&nbsp;/g, " ");
}
