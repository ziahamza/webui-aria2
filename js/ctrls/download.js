angular
.module('webui.ctrls.download', [
  "ui.bootstrap",
  'webui.services.utils', 'webui.services.rpc', 'webui.services.alerts',
  'webui.services.settings', 'webui.services.modals'
])
.controller('DownloadCtrl', [
  '$scope', '$rpc', '$utils', '$alerts', '$modals',
  '$fileSettings', '$activeInclude', '$waitingExclude',
  // for document title
  '$window',
function(
  scope, rpc, utils, alerts, modals,
  fsettings, activeInclude, waitingExclude, window
) {

  var re_slashes = /\\/g;
  var slash = "/";

  scope.active = [], scope.waiting = [], scope.stopped = [];
  scope.gstats = {};

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
  scope.remove = function(d, cb) {
    var method = 'remove';

    if (scope.getType(d) == 'stopped')
      method = 'removeDownloadResult';

    rpc.once(method, [d.gid], cb);

    // also remove it from client cache assuming that it will be deleted in the aria2 list,
    // but we could be wrong but the cache will update in next global update
    var downloads = [scope.active, scope.waiting, scope.stopped], ind = -1, i;
    for (i = 0; i < downloads.length; i++) {
      ind = downloads[i].indexOf(d);
      if (ind != -1) break;
    }

    if (ind == -1) {
      return;
    }

    downloads[i].splice(ind, 1);
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
      scope.remove(d, function() {
        rpc.once('addUri', uris, angular.noop, true);
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

  rpc.subscribe('getGlobalStat', [], function(data) {
    scope.gstats = data[0];
    window.document.title = utils.getTitle(scope.gstats);

  });

  rpc.once('getVersion', [], function(data) {
    scope.miscellaneous = data[0];
  });

  // total number of downloads, updates dynamically as downloads are
  // stored in scope
  scope.totalDownloads = 0;

  // download search filter
  scope.downloadFilter = "";
  scope.downloadFilterCommitted = "";

  scope.onDownloadFilter = function() {
    if (scope.downloadFilterTimer) {
      clearTimeout(scope.downloadFilterTimer);
    }
    scope.downloadFilterTimer = setTimeout(function() {
      delete scope.downloadFilterTimer;
      if (scope.downloadFilterCommitted !== scope.downloadFilter) {
        scope.downloadFilterCommitted = scope.downloadFilter;
        scope.$digest();
      }
    }, 500);
  };

  scope.filterDownloads = function(downloads) {
    if (!scope.downloadFilterCommitted) {
      return downloads;
    }
    var filter = scope.downloadFilterCommitted.
      replace(/[{}()\[\]\\^$.?]/g, "\\$&").
      replace(/\*/g, ".*").
      replace(/\./g, ".");
    filter = new RegExp(filter, "i");
    return _.filter(downloads, function(d) {
      if (filter.test(d.name)) return true;
      return _.filter(d.files, function(f) {
        return filter.test(f.relpath);
      }).length;
    });
  };

  scope.clearFilter = function() {
    scope.downloadFilter = scope.downloadFilterCommitted = "";
  };

  scope.toggleStateFilters = function() {
    scope.filterActive = !scope.filterActive;
    scope.filterWaiting = !scope.filterWaiting;
    scope.filterComplete = !scope.filterComplete;
    scope.filterError = !scope.filterError;
    scope.filterPaused = !scope.filterPaused;
    scope.filterRemoved = !scope.filterRemoved;
  };

  scope.resetFilters = function() {
    scope.filterActive =
      scope.filterWaiting =
      scope.filterComplete =
      scope.filterError =
      scope.filterPaused =
      scope.filterRemoved =
      true;
    scope.clearFilter();
  };

  scope.resetFilters();


  // max downloads shown in one page
  scope.pageSize = 10;

  // current displayed page
  scope.currentPage = 1;

  // total amount of downloads returned by aria2
  scope.totalAria2Downloads = function() {
    return scope.active.length
      + scope.waiting.length
      + scope.stopped.length;
  }

  // actual downloads used by the view
  scope.getDownloads = function() {
    var downloads = [];
    if (scope.filterActive) {
      downloads = scope.active;
    }
    if (scope.filterWaiting) {
      downloads = downloads.concat(_.filter(scope.waiting, function (e) {
        return e.status == "waiting";
      }));
    }
    if (scope.filterPaused) {
      downloads = downloads.concat(_.filter(scope.waiting, function (e) {
        return e.status == "paused";
      }));
    }
    if (scope.filterError) {
      downloads = downloads.concat(_.filter(scope.stopped, function (e) {
        return e.status == "error";
      }));
    }
    if (scope.filterComplete) {
      downloads = downloads.concat(_.filter(scope.stopped, function (e) {
        return e.status == "complete";
      }));
    }
    if (scope.filterRemoved) {
      downloads = downloads.concat(_.filter(scope.stopped, function (e) {
        return e.status == "removed";
      }));
    }

    downloads = scope.filterDownloads(downloads);

    scope.totalDownloads = downloads.length;

    downloads = downloads.slice( (scope.currentPage - 1) * scope.pageSize );
    downloads.splice( scope.pageSize );

    return downloads;
  }

  // convert the donwload form aria2 to once used by the view,
  // minor additions of some fields and checks
  scope.getCtx = function(d, ctx) {
    if (!ctx) {
      ctx = {
        dir: d.dir,
        status: d.status,
        gid: d.gid,
        numPieces: d.numPieces,
        connections: d.connections,
        bitfield: d.bitfield,
        totalLength: d.totalLength,
        fmtTotalLength: utils.fmtsize(d.totalLength),
        completedLength: d.completedLength,
        fmtCompletedLength: utils.fmtsize(d.completedLength),
        uploadLength: d.uploadLength,
        fmtUploadLength: utils.fmtsize(d.uploadLength),
        pieceLength: d.pieceLength,
        fmtPieceLength: utils.fmtsize(d.pieceLength),
        downloadSpeed: d.downloadSpeed,
        fmtDownloadSpeed: utils.fmtspeed(d.downloadSpeed),
        uploadSpeed: d.uploadSpeed,
        fmtUploadSpeed: utils.fmtspeed(d.uploadSpeed),
        files: []
      };
    }
    else {
      ctx.dir = d.dir;
      ctx.status = d.status;
      ctx.gid = d.gid;
      ctx.numPieces = d.numPieces;
      ctx.connections = d.connections;
      ctx.bitfield = d.bitfield;
      if (ctx.totalLength !== d.totalLength) {
        ctx.totalLength = d.totalLength;
        ctx.fmtTotalLength = utils.fmtsize(d.totalLength);
      }
      if (ctx.completedLength !== d.completedLength) {
        ctx.completedLength = d.completedLength;
        ctx.fmtCompletedLength = utils.fmtsize(d.completedLength);
      }
      if (ctx.uploadLength !== d.uploadength) {
        ctx.uploadLength = d.uploadlength;
        ctx.fmtUploadLength = utils.fmtsize(d.uploadLength);
      }
      if (ctx.pieceLength !== d.pieceLength) {
        ctx.pieceLength = d.pieceLength;
        ctx.fmtPieceLength = utils.fmtsize(d.pieceLength);
      }
      if (ctx.downloadSpeed !== d.downloadSpeed) {
        ctx.downloadSpeed =  d.downloadSpeed;
        ctx.fmtDownloadSpeed = utils.fmtspeed(d.downloadSpeed);
      }
      if (ctx.uploadSpeed !== d.uploadSpeed) {
        ctx.uploadSpeed =  d.uploadSpeed;
        ctx.fmtUploadSpeed = utils.fmtspeed(d.uploadSpeed);
      }
    }

    var dlName;
    var files = d.files;
    if (files) {
      var cfiles = ctx.files;
      for (var i = 0; i < files.length; ++i) {
        var cfile = cfiles[i] || (cfiles[i] = {});
        var file = files[i];
        if (file.path !== cfile.path) {
          cfile.path = file.path;
          cfile.length = file.length;
          cfile.fmtLength = utils.fmtsize(file.length);
          cfile.relpath = file.path.replace(re_slashes, slash);
          if (!cfile.relpath) {
            cfile.relpath = (file.uris && file.uris[0] && file.uris[0].uri) || "Unknown";
          }
          else if (!cfile.relpath.startsWith("[")) { // METADATA
            cfile.relpath = cfile.relpath.substr(ctx.dir.length + 1);
          }
        }
      }
      cfiles.length = files.length;
      if (cfiles.length) {
        dlName = cfiles[0].relpath;
      }
    }
    else {
      delete ctx.files;
    }

    var btName;
    if (d.bittorrent) {
      btName = d.bittorrent.info && d.bittorrent.info.name;
      ctx.bittorrent = true;
    }
    else {
      delete ctx.bittorrent;
    }

    ctx.name = btName || dlName || "Unknown";

    // collapse the download details initially
    if (ctx.collapsed === undefined) {
      ctx.collapsed = true;
    }

    return ctx;
  };

  scope.canRestart = function(d) {
    if (['active', 'paused'].indexOf(d.status) == -1
        && !d.bittorrent)
      return true;

    return false;
  };

  scope.hasStatus = function hasStatus(d, status) {
    if (_.isArray(status)) {
      if (status.length == 0) return false;
      return hasStatus(d, status[0]) || hasStatus(d, status.slice(1));
    }
    else {
      return d.status == status;
    }
  };

  // get time left for the download with
  // current download speed,
  // could be smarter by different heuristics
  scope.getEta = function(d) {
    return (d.totalLength-d.completedLength) / d.downloadSpeed;
  }

  scope.getProgressClass = function(d) {
    switch (d.status) {
      case "paused":
        return "progress-info";
      case "error":
        return "progress-danger";
      case "removed":
        return "progress-warning";
      case "active":
        return "progress-active";
      case "complete":
        return "progress-success";
      default:
        return "";
    }
  };

  // gets the progress in percentages
  scope.getProgress = function(d) {
    var percentage = (d.completedLength / d.totalLength)*100 || 0;
    percentage = percentage.toFixed(2);
    if(!percentage) percentage = 0;

    return percentage;
  };

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

      modals.invoke('settings', settings, scope.name + ' settings', function(settings) {
        var sets = {};
        for (var i in settings) { sets[i] = settings[i].val };

        rpc.once('changeOption', [d.gid, sets]);
      });
    });

    return false;
  }

}]);
