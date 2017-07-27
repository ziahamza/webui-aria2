// watches changes in the file upload control (input[file]) and
// puts the files selected in an attribute
angular.module("webui.directives.fileselect", []).directive("indeterminate", function () {
    return {
        // Restrict the directive so it can only be used as an attribute
        restrict : "A",

        link : function link (scope, elem, attr) {
            // Whenever the bound value of the attribute changes we update
            // the internal 'indeterminate' flag on the attached dom element
            var watcher = scope.$watch(attr.indeterminate, function (value) {
                elem[0].indeterminate = value;
            });

            // Remove the watcher when the directive is destroyed
            scope.$on("$destroy", function () {
                watcher();
            });
        }
    };
});
