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
    var downs = scope.active
      .concat(scope.waiting).concat(scope.stopped);

    return downs;
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

    // insert newly created downloads
    while (i < downs.length) {
      mdowns.push(scope.getCtx(downs[i++]));
    }

    return mdowns;
  }


  scope.getCtx = function(d, ctx) {
    ctx = ctx || {};

    ctx.status = d.status;
    ctx.gid = d.gid;
    ctx.numPieces = d.numPieces;
    ctx.connections = d.connections;
    ctx.dir = d.dir.replace(/\\/g, '/');

    ctx.files = _.map(d.files, function(e) {
      e.length = utils.changeLength(e.length, "B");
      e.path = e.path.replace(/\\/g, '/').replace(ctx.dir, '.');
      return e;
    });

    _.each(['downloadSpeed', 'uploadSpeed'], function(e) {
      ctx[e] = utils.changeLength(d[e], 'B/s');
    });

    _.each([
      'totalLength', /*'remainingLength',*/ 'completedLength',
      'uploadLength', 'pieceLength'
    ], function(e) {
      ctx[e] = utils.changeLength(d[e], 'B');
    });

    ctx.eta = utils.changeTime(
      (d.remainingLength) / d.downloadSpeed
    );

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
