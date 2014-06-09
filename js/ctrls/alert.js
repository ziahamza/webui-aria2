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
    scope.pendingAlerts = _.filter(scope.pendingAlerts, function(al) {
      return !al.expired;
    });
    scope.pendingAlerts.push(obj);

    setTimeout(function() {
      var ind = scope.pendingAlerts.indexOf(obj);
      if (ind != -1) {
        scope.pendingAlerts[ind].expired = true;

        // only remove if more notifications are pending in the pipeline
        if (scope.pendingAlerts.length > 0)
          scope.removeAlert(ind);
      }
    }, type == "error" ? 15000 : 5000);

    scope.$digest();
  });
}]);
