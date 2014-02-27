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
    var obj = { msg: msg, type: type };
    //scope.pendingAlerts.push(obj);
    // Use the following one instead to display notifications from more recent
    // to older
    scope.pendingAlerts.splice(0, 0, obj);

    setTimeout(function() {
      var ind = scope.pendingAlerts.indexOf(obj);
      if (ind != -1) scope.removeAlert(ind);
    }, 10000);

    scope.$digest();
  });
}]);
