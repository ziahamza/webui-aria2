app.controller('DownloadCtrl', [ '$scope', '$rpc', '$utils',
function(scope, rpc, utils) {
  scope.utils = utils;
  scope.props = [
    'gid', 'status', 'totalLength', 'completedLength',
    'uploadLength', 'downloadSpeed', 'uploadSpeed',
    'errorCode' , 'followedBy', 'belongsTo', 'bitfield',
    'infoHash', 'numSeeders', 'pieceLength',
    'numPieces', 'connections', 'dir', 'files', 'bittorrent'
  ];

  scope.active = [], scope.waiting = [], scope.stopped = [];


  rpc.subscribe('tellActive', [], function(data) {
    console.log('got active data');
    scope.$apply(function() {
      scope.mapDownloads(data[0], scope.active);
    });
  });

  rpc.subscribe('tellWaiting', [0, 100], function(data) {
    scope.$apply(function() {
      scope.mapDownloads(data[0], scope.waiting);
    });
  });


  rpc.subscribe('tellStopped', [0, 100], function(data) {
    scope.$apply(function() {
      scope.mapDownloads(data[0], scope.stopped);
    });
  });

  scope.getDownloads = function() {
    var rets = scope.active
      .concat(scope.waiting).concat(scope.stopped);
    window.scope = scope;

    return rets;
  }
  scope.mapDownloads = function(downs, mdowns) {
    if (!mdowns) mdowns = [];

    for (i = 0; i < mdowns.length; i++) {
      if (i >= downs.length) {
        // remove the deleted downloads
        mdowns.splice(i, mdowns.length - downs.length);
        break;
      }
      if (!mdowns[i]) mdowns[i] = {};

      scope.getCtx(downs[i], mdowns[i]);
    }

    while (i < downs.length) {
      mdowns.push(scope.getCtx(downs[i++]));
    }

    return mdowns;
  }

  scope.getCtx = function(d, ctx) {
    ctx = ctx || {};
    _.each(scope.props, function(p) {
      ctx[p] = d[p];
    });

    var path = (data.files[0].path || data.files[0].uris[0].uri);
    ctx.name = utils.getFileName(path);

    if (d.bittorrent && d.bittorrent.info) {
      name = d.bittorrent.info.name;
    }

    ctx.remainingLength = d.totalLength - d.completedLength;
    ctx.eta = ctx.remainingLength / ctx.downloadSpeed;

    return ctx;
  }

}]);
