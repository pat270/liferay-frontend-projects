/* This file is auto-generated by (yogi loader --yes --mix --js js/aui-loader.js
 --json js/aui-loader.json --start ../)*/
/*jshint maxlen:900, eqeqeq: false */
var add = Y.Features.add;
// aui-base-html5-shiv
add('load', '0', {
    "name": "aui-base-html5-shiv",
    "trigger": "aui-base",
    "ua": "ie"
});
// aui-event-input
add('load', '1', {
    "name": "aui-event-input",
    "test": function(A) {
        var supportsDOMEvent = A.supportsDOMEvent,
            testFeature = A.Features.test,
            addFeature = A.Features.add;

        if (testFeature('event', 'input') === undefined) {
            addFeature('event', 'input', {
                test: function() {
                    return supportsDOMEvent(document.createElement('textarea'), 'input');
                }
            });
        }

        return !testFeature('event', 'input');
    },
    "trigger": "aui-event"
});
// aui-node-html5
add('load', '2', {
    "name": "aui-node-html5",
    "trigger": "aui-node",
    "ua": "ie"
});
