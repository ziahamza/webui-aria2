app.controller('DownloadCtrl', [ '$scope', '$rpc', '$utils',
function(scope, rpc, utils) {
  scope.active = scope.waiting = scope.stopped = [];


  rpc.subscribe('tellActive', [], function(data) {
    console.log('got active data');
    scope.$apply(function() {
      scope.active = data[0].map(scope.normalize);
    });
  });

  rpc.subscribe('tellWaiting', [0, 100], function(data) {
    scope.$apply(function() {
      scope.waiting = data[0].map(scope.normalize);
    });
  });


  rpc.subscribe('tellStopped', [0, 100], function(data) {
    scope.$apply(function() {
      scope.stopped = data[0].map(scope.normalize);
    });
  });

  scope.getDownloads = function() {
    var rets = scope.active
      .concat(scope.waiting).concat(scope.stopped)
    return rets;
  }

  scope.normalize = function(d) {
    return d;
  }

}]);
