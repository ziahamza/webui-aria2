angular
.module('webui.ctrls.download', [
  'webui.services.utils', 'webui.services.rpc', 'webui.services.alerts',
  'webui.services.settings', 'webui.services.modals'
])
.controller('DownloadCtrl', [
  '$scope', '$rpc', '$utils', '$alerts', '$modals',
  '$fileSettings', '$activeInclude', '$waitingExclude',
function(
  scope, rpc, utils, alerts, modals,
  fsettings, activeInclude, waitingExclude
) {
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
    var method = 'remove';
    if (scope.getType(d) == 'stopped')
      method = 'removeDownloadResult';

    rpc.once(method, [d.gid]);
  }

  scope.restart = function(d) {
    var uris =
      _.chain(d.files).map(function(f) { return f.uris })
      .filter(function(uris) { return uris.length })
      .map(function(uris) {
        return _.chain(uris)
          .map(function(u) { return u.uri })
          .uniq().value();
      }).value();

    if (uris.length > 0) {
      rpc.once('removeDownloadResult', [d.gid], function() {
        rpc.once('addUri', uris);
      });
    }
  }

  // start filling in the model of active,
  // waiting and stopped download
  rpc.subscribe('tellActive', [], function(data) {
    utils.mergeMap(data[0], scope.active, scope.getCtx);
  });

  rpc.subscribe('tellWaiting', [0, 1000], function(data) {
    utils.mergeMap(data[0], scope.waiting, scope.getCtx);
  });


  rpc.subscribe('tellStopped', [0, 1000], function(data) {
    utils.mergeMap(data[0], scope.stopped, scope.getCtx);
  });

  // max downloads shown in one page
  scope.pageSize = 10;

  // current displayed page
  scope.currentPage = 1;

  scope.pageControlRadius = 3;

  // total number of downloads, updates dynamically as downloads are
  // stored in scope
  scope.totalDownloads = 0;

  // total maximum pages
  scope.totalPages = 0;

  // actual downloads used by the view
  scope.getDownloads = function() {
    var downloads = scope.active
      .concat( scope.waiting ).concat( scope.stopped )

    scope.totalDownloads = downloads.length;

    scope.totalPages = Math.ceil(scope.totalDownloads / scope.pageSize)

    downloads = downloads.slice( (scope.currentPage - 1) * scope.pageSize );
    downloads.splice( scope.pageSize );

    return downloads;
  }

  scope.setPage = function(pageNumber) {
    scope.currentPage = pageNumber;
    return false;
  }

  // get the pages to be displayed
  scope.getPages = function() {
    var minPage = scope.currentPage - scope.pageControlRadius;

    if (minPage < 1) minPage = 1;

    var maxPage = scope.currentPage + scope.pageControlRadius;

    if (maxPage > scope.totalPages)
      maxPage = scope.totalPages;

    return _.range(minPage, maxPage + 1);
  }

  // convert the donwload form aria2 to once used by the view,
  // minor additions of some fields and checks
  scope.getCtx = function(d, ctx) {
    ctx = ctx || {};

    _.each([
      'totalLength', 'completedLength', 'uploadLength', 'dir',
      'pieceLength', 'downloadSpeed', 'uploadSpeed', 'files',
      'status', 'gid', 'bitfield', 'numPieces', 'connections',
      'bittorrent'
    ], function(e) {
      if (ctx[e] != d[e])
        ctx[e] = d[e];
    });

    // collapse the download details initially
    if (ctx.collapsed === undefined)
      ctx.collapsed = true;

    return ctx;
  };

  scope.canRestart = function(d) {
    if (['active', 'paused'].indexOf(d.status) == -1
        && !d.bittorrent)
      return true;

    return false;
  };

  scope.hasStatus = function(d, status) {
    return d.status == status;
  };

  // get time left for the download with
  // current download speed,
  // could be smarter by different heuristics
  scope.getEta = function(d) {
    return (d.totalLength-d.completedLength) / d.downloadSpeed;
  }

  // gets the progress in percentages
  scope.getProgress = function(d) {
    var percentage = (d.completedLength / d.totalLength)*100;
    percentage = percentage.toFixed(2);
    if(!percentage) percentage = 0;

    return percentage;
  };

  // gets a pretty name for the download
  scope.getName = function(d) {
    if (d.bittorrent && d.bittorrent.info) {
      return d.bittorrent.info.name;
    }

    return utils.getFileName(
      d.files[0].path || d.files[0].uris[0].uri
    );
  }

  // gets the type for the download as classified by the aria2 rpc calls
  scope.getType = function(d) {
    var type = d.status;
    if (type == "paused") type = "waiting";
    if (["error", "removed", "complete"].indexOf(type) != -1)
      type = "stopped";
    return type;
  };

  scope.showSettings = function(d) {
    var type = scope.getType(d)
      , settings = {};

    rpc.once('getOption', [d.gid], function(data) {
      var vals = data[0];

      for (var i in fsettings) {
        if (type == 'active' && activeInclude.indexOf(i) == -1) continue;

        if (type == 'waiting' && waitingExclude.indexOf(i) != -1) continue;

        settings[i] = fsettings[i];
        settings[i].val = vals[i] || settings[i].val;
      }

      modals.invoke('settings', settings, scope.getName(d) + ' settings', function(settings) {
        var sets = {};
        for (var i in settings) { sets[i] = settings[i].val };

        rpc.once('changeOption', [d.gid, sets]);
      });
    });

    return false;
  }

}]);
