angular.module('webui.ctrls.alert', [
  'webui.services.alerts'
])
.controller('AlertCtrl', ['$scope', '$alerts', function(scope, alerts) {
  scope.pendingAlerts = [];

  scope.removeAlert = function(ind) {
    this.pendingAlerts.splice(ind, 1);
  };

  alerts.addAlerter(function(msg, type) {
    type = type || 'warning';
    scope.pendingAlerts.push({ msg: msg, type: type });
    scope.$digest();
  });


}]);
