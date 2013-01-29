angular
.module('webui.ctrls.nav', ['webui.services.constants', 'webui.services.modals'])
.controller('NavCtrl', ['$scope', '$name', '$modals', function(scope, name, modals) {
  scope.name = name;

  // initially collapsed in mobile resolution
  scope.collapsed = true;
}]);
