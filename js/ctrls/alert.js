angular.module('webui.ctrls.alert', [
  'webui.services.alerts'
])
.controller('AlertCtrl', ['$scope', '$alerts', '$sce',
            function(scope, alerts, sce) {
  scope.pendingAlerts = [];

  scope.removeAlert = function(ind) {
    this.pendingAlerts.splice(ind, 1);
  };

  alerts.addAlerter(function(msg, type) {
    type = type || 'warning';
    var obj = { msg: sce.trustAsHtml(msg), type: type };
    scope.pendingAlerts.push(obj);

    setTimeout(function() {
      var ind = scope.pendingAlerts.indexOf(obj);
      if (ind != -1) scope.removeAlert(ind);
    }, type == "error" ? 10000 : 3000);

    scope.$digest();
  });
}]);
