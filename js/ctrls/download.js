app.controller('DownloadCtrl', [ '$scope', '$rpc', '$utils',
function(scope, rpc, utils) {

  scope.active = [], scope.waiting = [], scope.stopped = [];

  // pause the download
  // d: the download ctx
  scope.pause = function(d) {
    rpc.once('forcePause', [d.gid]);
  }

  // resume the download
  // d: the download ctx
  scope.resume = function(d) {
    rpc.once('unpause', [d.gid]);
  }

  // remove the download,
  // put it in stopped list if active,
  // otherwise permanantly remove it
  // d: the download ctx
  scope.remove = function(d) {
    var method = d.type == 'stopped' ? 'removeDownloadResult' : 'remove';
    rpc.once(method, [d.gid]);
  }


  // start filling in the model of active,
  // waiting and stopped download
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

  // actual downloads used by the view
  scope.getDownloads = function() {
    return scope.active
      .concat(scope.waiting).concat(scope.stopped);
  }

  // convert the donwload form aria2 to once used by the view,
  // minor additions of some fields and checks
  scope.getCtx = function(d, ctx) {
    ctx = ctx || {};

    _.each([
      'totalLength', 'completedLength', 'uploadLength',
      'pieceLength', 'downloadSpeed', 'uploadSpeed',
      'status', 'gid', 'bitfield', 'numPieces', 'connections'
    ], function(e) {
      ctx[e] = d[e];
    });


    var percentage = (d.completedLength / d.totalLength)*100;
    percentage = percentage.toFixed(2);
    if(!percentage) percentage = 0;

    ctx.percentage = percentage;
    ctx.dir = d.dir.replace(/\\/g, '/');
    ctx.eta = (d.totalLength-d.completedLength) / d.downloadSpeed;

    var type = d.status;
    if (type == "paused") type = "waiting";
    if (["error", "removed", "complete"].indexOf(type) != -1)
      type = "stopped";
    ctx.type = type;

    ctx.files = _.map(d.files, function(e) {
      e.path = e.path.replace(/\\/g, '/').replace(ctx.dir, '.');
      return e;
    });

    if (d.bittorrent && d.bittorrent.info) {
      ctx.name = d.bittorrent.info.name;
    }
    else {
      ctx.name = utils.getFileName(ctx.files[0].path || ctx.files[0].uris[0].uri);
    }

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
