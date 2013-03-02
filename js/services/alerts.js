angular.module('webui.services.alerts', ['webui.services.deps'])
.factory('$alerts', ['$_', function(_) {
  var alerters = [];
  return {
    addAlert: function() {
      var args = Array.prototype.slice.call(arguments, 0);
      setTimeout(function() {
        _.each(alerters, function(alt) {
          alt.apply({}, args);
        });
      }, 0);
    },
    addAlerter: function(cb) {
      alerters.push(cb);
    },
    // a simple function for debugging
    log: function(msg) {
      this.addAlert(msg, 'info');
    }
  };
}]);
