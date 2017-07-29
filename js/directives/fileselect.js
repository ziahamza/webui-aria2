// watches changes in the file upload control (input[file]) and
// puts the files selected in an attribute
var app = angular.module("webui.directives.fileselect", ["webui.services.deps"]);
app.directive("indeterminate", [
    "$parse", function syncInput (parse) {
        return {
            require  : "ngModel",
            // Restrict the directive so it can only be used as an attribute
            restrict : "A",

            link : function link (scope, elem, attr, ngModelCtrl) {
                // Whenever the bound value of the attribute changes we update
                // use upward emit notification for change to prevent the performance penalty bring by $scope.$watch
                var getter = parse(attr["ngModel"]);
                // var setter = getter.assign;
                var children = []; // cache children input
                var cacheSelectedSubInputNumber = 0;
                var cacheNoSelectedSubInputNumber = 0;
                var get = function () {
                    return getter(scope);
                };
                // the internal 'indeterminate' flag on the attached dom element
                var setIndeterminateState = function (newValue) {
                    elem.prop("indeterminate", newValue);
                };
                var setModelValueWithSideEffect = function (newVal) { // will cause to emit corresponding events
                    ngModelCtrl.$setViewValue(newVal);
                    ngModelCtrl.$render();
                };
                var passIfIsLeafChild = function (callback) { // ensure to execute callback only when this input has one or more subinputs
                    return function () {
                        if (children.length > 0) {
                            callback.apply(this, arguments);
                        }
                    };
                };
                var passIfNotIsLeafChild = function (callback) { // ensure to execute callback only when this input hasn't subinput
                    return function () {
                        if (children.length === 0) {
                            callback.apply(this, arguments);
                        }
                    };
                };
                var passThroughThisScope = function (callback) { // pass through the event from the scope where they sent
                    return function (event) {
                        if (event.targetScope !== event.currentScope) {
                            return callback.apply(this, arguments);
                        }
                    };
                };
                var catchEventOnlyOnce = function (callback) { // only fire once, and stop event's propagation
                    return function (event) {
                        callback.apply(this, arguments);
                        return event.stopPropagation();
                    };
                };
                if (attr["indeterminate"] && parse(attr["indeterminate"]).constant) {
                    setIndeterminateState(scope.$eval(attr["indeterminate"])); // set to default value (set in template)
                }
                if (attr["indeterminate"] && parse(attr["indeterminate"]).constant && !scope.$eval(attr["indeterminate"])) {
                    // when this input wont have subinput, they will only receive parent change and emit child change event
                    ngModelCtrl.$viewChangeListeners.push(passIfNotIsLeafChild(function () {
                        scope.$emit("childSelectedChange", get());
                    }));
                    scope.$on("ParentSelectedChange", passThroughThisScope(passIfNotIsLeafChild(
                        function (event, newVal) {
                            setModelValueWithSideEffect(newVal); // set value to parent's value; this will cause listener to emit childChange event; this won't be a infinite loop
                        })));
                    // init first time and only once
                    scope.$emit("i'm child input", get);
                    scope.$emit("childSelectedChange", get()); // force emitted, and force the parent change their state base on children at first time
                } else {
                    // establish parent-child's relation
                    // listen for the child emitted token
                    scope.$on("i'm child input", passThroughThisScope(
                        function (event, child) {
                            children.push(child);
                        })
                    );
                    var updateBaseOnChildrenState = function (event, newChildValue) {
                        if ((cacheSelectedSubInputNumber + cacheNoSelectedSubInputNumber) !== children.length) {
                            cacheSelectedSubInputNumber = 0;
                            cacheNoSelectedSubInputNumber = 0;
                            for (var i = 0; i < children.length; i++) {
                                if (children[i]()) {
                                    cacheSelectedSubInputNumber += 1;
                                } else {
                                    cacheNoSelectedSubInputNumber += 1;
                                }
                            }
                        } else {
                            // no need for recalculated children state
                            // just make a few change to cache value
                            if (newChildValue) {
                                cacheSelectedSubInputNumber++;
                                cacheNoSelectedSubInputNumber--;
                            } else {
                                cacheSelectedSubInputNumber--;
                                cacheNoSelectedSubInputNumber++;
                            }
                        }
                        var allSelected = (cacheNoSelectedSubInputNumber === 0);
                        var anySeleted = (cacheSelectedSubInputNumber > 0);
                        setIndeterminateState(allSelected !== anySeleted); // if at least one is selected, but not all then set input property indeterminate to true
                        setModelValueWithSideEffect(allSelected);
                    };
                    // is not leaf input, Only receive child change and parent change event
                    ngModelCtrl.$viewChangeListeners.push(passIfIsLeafChild(function () {
                        // emit when property indeterminate is set to false, prevent recursively emitting event from parent to children, children to parent
                        if (!elem.prop("indeterminate")) {
                            scope.$broadcast("ParentSelectedChange", get());
                        }
                    }));
                    // reset input state base on children inputs
                    scope.$on("childSelectedChange", passThroughThisScope(passIfIsLeafChild(updateBaseOnChildrenState)));
                }
            }
        };
    }
]);
