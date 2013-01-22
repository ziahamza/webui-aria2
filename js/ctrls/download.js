app.controller('DownloadCtrl', [ '$scope', '$rpc', '$utils',
function(scope, rpc, utils) {
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
      utils.mergeMap(data[0], scope.active, scope.getCtx);
    });
  });

  rpc.subscribe('tellWaiting', [0, 1000], function(data) {
    scope.$apply(function() {
      utils.mergeMap(data[0], scope.waiting, scope.getCtx);
    });
  });


  rpc.subscribe('tellStopped', [0, 1000], function(data) {
    scope.$apply(function() {
      utils.mergeMap(data[0], scope.stopped, scope.getCtx);
    });
  });

  scope.getDownloads = function() {
    var downs = scope.active
      .concat(scope.waiting).concat(scope.stopped);

    return downs;
  }

  scope.getCtx = function(d, ctx) {
    ctx = ctx || {};

    _.each([
      'totalLength', 'completedLength', 'uploadLength',
      'pieceLength', 'downloadSpeed', 'uploadSpeed',
      'status', 'gid', 'bitfield', 'numPieces', 'connections'
    ], function(e) {
      ctx[e] = d[e];
    });

    ctx.dir = d.dir.replace(/\\/g, '/');
    ctx.files = _.map(d.files, function(e) {
      e.path = e.path.replace(/\\/g, '/').replace(ctx.dir, '.');
      return e;
    });



    ctx.eta = (d.totalLength-d.completedLength) / d.downloadSpeed;

    var percentage = (d.completedLength / d.totalLength)*100;
    percentage = percentage.toFixed(2);
    if(!percentage) percentage = 0;

    ctx.percentage = percentage;

    if (d.bittorrent && d.bittorrent.info) {
      ctx.name = d.bittorrent.info.name;
    }
    else {
      ctx.name = utils.getFileName(ctx.files[0].path || ctx.files[0].uris[0].uri);
    }

    var type = d.status;
    if (type == "paused") type = "waiting";
    if (["error", "removed", "complete"].indexOf(type) != -1)
      type = "stopped";
    ctx.type = type;

    ctx.booleans = {
      is_error: ctx.status === "error",
      is_complete: ctx.status === "complete",
      is_removed: ctx.status === "removed",
      has_settings: ["active", "waiting", "paused"].indexOf(ctx.status) != -1,
      can_pause: type == "active",
      can_play: type == "waiting",
      bittorrent: !!d.bittorrent,
      can_restart: type == "stopped"
    };

    return ctx;
  }

}]);
