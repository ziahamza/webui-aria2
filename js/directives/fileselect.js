// watches changes in the file upload control (input[file]) and
// puts the files selected in an attribute
var app = angular.module("webui.directives.fileselect", []);
app.directive("indeterminate", function () {
    return {
        // Restrict the directive so it can only be used as an attribute
        restrict : "A",

        link : function link (scope, elem, attr) {
            // Whenever the bound value of the attribute changes we update
            // the internal 'indeterminate' flag on the attached dom element
            // use upward emit notification for change to prevent the performance penalty bring by $scope.$watch
            elem[0].indeterminate = scope.$eval(attr.indeterminate);
            scope.$on("childSelectedChange", function (event, options) {
                elem[0].indeterminate = scope.$eval(attr.indeterminate);
            });

            /* var watcher = scope.$watch(attr.indeterminate, function (value) {
             elem[0].indeterminate = value;
             });

             // Remove the watcher when the directive is destroyed
             scope.$on("$destroy", function () {
             watcher();
             }); */
        }
    };
});

app.directive("monitor", function () {
    return {
        // Restrict the directive so it can only be used as an attribute
        restrict : "A",

        link : function link (scope, elem, attr) {
            // Whenever the bound value of the attribute changes we update
            // the internal 'indeterminate' flag on the attached dom element
            elem.change(function () {
                scope.$emit("childSelectedChange");
            });
        }
    };
});

app.directive("selected", function () {
    return {
        // Restrict the directive so it can only be used as an attribute
        restrict : "A",

        link : function link (scope, elem, attr) {
            elem[0].value = scope.$eval(attr.selected);
            scope.$on("childSelectedChange", function (event, options) {
                elem[0].value = scope.$eval(attr.selected);
            });
        }
    };
});
