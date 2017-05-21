// watches changes in the file upload control (input[file]) and
// puts the files selected in an attribute
angular
.module('webui.directives.fselect', ['webui.services.deps'])
.directive('fselect', ['$parse', function(parse) {
  return function(scope, elem, attrs) {
    var setfiles = parse(attrs.fselect || attrs.files).assign;
    elem.bind('change', function() {
      setfiles(scope, elem[0].files);
    }).filestyle({
        placeholder : 'No file selected',
        iconName : 'fa fa-folder-open',
    });
  };
}]);
