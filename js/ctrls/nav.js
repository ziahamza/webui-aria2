app.controller('NavCtrl', ['$scope', '$name', function(scope, name) {
  scope.name = name;

  // initially collapsed in mobile resolution
  scope.collapsed = true;
}]);
