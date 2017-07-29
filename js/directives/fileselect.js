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
                var setter = getter.assign;
                var children = []; // cache children input
                var get = function () {
                    return getter(scope);
                };
                // the internal 'indeterminate' flag on the attached dom element
                var setIndeterminateState = function (newValue) {
                    elem.prop("indeterminate", newValue);
                };
                var setModelValueWithoutSideEffect = function (newVal) {
                    setter(scope, newVal);
                    ngModelCtrl.$modelValue = newVal;
                    ngModelCtrl.$viewValue = newVal;
                    ngModelCtrl.$render();
                };
                var setWithSideEffect = function (newVal) {
                    ngModelCtrl.$setViewValue(newVal);
                    ngModelCtrl.$render();
                };
                var passIfLeafChild = function (callback) {
                    return function () {
                        if (children.length > 0) {
                            callback.apply(this, arguments);
                        }
                    };
                };
                var passIfNotIsLeafChild = function (callback) {
                    return function () {
                        if (children.length === 0) {
                            callback.apply(this, arguments);
                        }
                    };
                };
                var passThroughThisScope = function (callback) {
                    return function (event) {
                        if (event.targetScope !== event.currentScope) {
                            return callback.apply(this, arguments);
                        }
                    };
                };
                if (attr["indeterminate"] && parse(attr["indeterminate"]).constant && !scope.$eval(attr["indeterminate"])) {
                    // is leaf input, Only receive parent change and emit child change event
                    setIndeterminateState(scope.$eval(attr["indeterminate"]));
                    ngModelCtrl.$viewChangeListeners.push(passIfNotIsLeafChild(function () {
                        scope.$emit("childSelectedChange");
                    }));
                    scope.$on("ParentSelectedChange", passThroughThisScope(
                        function (event, newVal) {
                            setWithSideEffect(newVal);
                        }));
                    scope.$emit("i'm child input", get);
                    setWithSideEffect(get());
                    scope.$emit("childSelectedChange");
                } else {
                    // init first time and only once
                    // establish parent-child's relation
                    scope.$on("i'm child input", passThroughThisScope(
                        function (event, child) {
                            children.push(child);
                        })
                    );
                    var updateBaseOnChildrenState = function () {
                        var allSelected = children.every(function (child) {
                            return child();
                        });
                        var anySeleted = children.some(function (child) {
                            return child();
                        });
                        setIndeterminateState(allSelected !== anySeleted);
                        setWithSideEffect(allSelected);
                    };
                    // is not leaf input, Only receive child change and parent change event
                    ngModelCtrl.$viewChangeListeners.push(passIfLeafChild(function () {
                        if (!elem.prop("indeterminate")) { // emit when prop indeterminate is set to false
                            scope.$broadcast("ParentSelectedChange", get());
                        }
                    }));
                    // reset input state base on children inputs
                    scope.$on("childSelectedChange", passThroughThisScope(passIfLeafChild(updateBaseOnChildrenState)));
                }
            }
        };
    }
]);
