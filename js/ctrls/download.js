app.controller('DownloadCtrl', [ '$scope', '$rpc',
function(scope, rpc) {
  rpc.configure({
    host: 'localhost',
    port: 6800
  });

  scope.active = scope.waiting = scope.stopped = [];


  rpc.subscribe('tellActive', [], function(data) {
    scope.$apply(function() {
      scope.active = data[0];
    });
  });

  rpc.subscribe('tellWaiting', [0, 100], function(data) {
    scope.$apply(function() {
      scope.waiting = data[0];
    });
  });


  rpc.subscribe('tellStopped', [0, 100], function(data) {
    scope.$apply(function() {
      scope.stopped = data[0];
    });
  });

  scope.getDownloads = function() {
    var rets = scope.active
      .concat(scope.waiting).concat(scope.stopped);
    return rets;
  }

  scope.normalize = function(d) {
    return "hello";
  }

}]);
