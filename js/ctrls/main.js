angular
.module('webui.ctrls.download', [
	"ui.bootstrap",
	'webui.services.utils', 'webui.services.rpc', 'webui.services.rpc.helpers', 'webui.services.alerts',
	'webui.services.settings', 'webui.services.modals', 'webui.services.configuration',
	'webui.services.errors',
])
.controller('MainCtrl', [
	'$scope', '$name', '$enable', '$rpc', '$rpchelpers', '$utils', '$alerts', '$modals',
	'$fileSettings', '$activeInclude', '$waitingExclude', '$pageSize', '$getErrorStatus',
	// for document title
	'$rootScope', '$filter',
function(
	scope, name, enable, rpc, rhelpers, utils, alerts, modals,
	fsettings, activeInclude, waitingExclude, pageSize, getErrorStatus,
	rootScope, filter
) {

	scope.name = name;	 // default UI name
	scope.enable = enable; // UI enable options

	var re_slashes = /\\/g;
	var slash = "/";
	var allStopped = [];

	scope.active = [], scope.waiting = [], scope.stopped = [];
	scope.gstats = {};
	scope.hideLinkedMetadata = true;
	scope.propFilter = "";

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

	scope.restart = function(d) {
		// assumes downloads which are started by URIs, not torrents.
		// the preferences are also not transferred, just simple restart

		rpc.once('getOption', [d.gid], function(data) {
			var prefs = data[0];
			rpc.once('getFiles', [d.gid], function(data) {
				var files = data[0];
				var uris =
					_.chain(files).map(function(f) { return f.uris })
					.filter(function(uris) { return uris && uris.length })
					.map(function(uris) {
						var u = _.chain(uris)
							.map(function(u) { return u.uri })
							.uniq().value();
						return u;
					}).value();

				if (uris.length > 0) {
					console.log('adding uris:', uris, prefs);
					scope.remove(d, function() {
						rhelpers.addUris(uris, prefs);
					}, true);
				}
			});
		});
	}



	scope.canRestart = function(d) {
		return (['active', 'paused'].indexOf(d.status) == -1
			&& !d.bittorrent);
	}

	// remove the download,
	// put it in stopped list if active,
	// otherwise permanantly remove it
	// d: the download ctx
	scope.remove = function(d, cb, noConfirm) {
		// HACK to make sure an angular digest is not running, as only one can happen at a time, and confirm is a blocking
		// call so an rpc response can also trigger a digest call
		setTimeout(function() {
			if (!noConfirm && !confirm(
				filter('translate')('Remove {{name}} and associated meta-data?',
					{ name: d.name }))) {
				return;
			}

			var method = 'remove';

			if (scope.getType(d) == 'stopped')
				method = 'removeDownloadResult';

			if (d.followedFrom) {
				scope.remove(d.followedFrom, function() {}, true);
				d.followedFrom = null;
			}
			rpc.once(method, [d.gid], cb);

			var lists = [scope.active, scope.waiting, scope.stopped], ind = -1, i;
			for (var i = 0; i < lists.length; ++i) {
				var list = lists[i];
				var idx = list.indexOf(d);
				if (idx < 0) {
					continue;
				}
				list.splice(idx, 1);
				return;
			}
		}, 0);
	}

	// start filling in the model of active,
	// waiting and stopped download
	rpc.subscribe('tellActive', [], function(data) {
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
			if (!scope.hideLinkedMetadata) {
				utils.mergeMap(data[0], scope.stopped, scope.getCtx);
				return;
			}
			utils.mergeMap(data[0], allStopped, scope.getCtx);
			var gids = {};
			_.forEach(allStopped, function(e) {
				gids[e.gid] = e;
			});
			_.forEach(scope.active, function(e) {
				gids[e.gid] = e;
			});
			_.forEach(scope.waiting, function(e) {
				gids[e.gid] = e;
			});
			scope.stopped = _.filter(allStopped, function(e) {
				if (!e.metadata || !e.followedBy || !(e.followedBy in gids)) {
					return true;
				}
				var linked = gids[e.followedBy];
				linked.followedFrom = e;
				return false;
			});
		});
	});

    rootScope.pageTitle = utils.getTitle();
	rpc.subscribe('getGlobalStat', [], function(data) {
		scope.$apply(function() {
			scope.gstats = data[0];
            rootScope.pageTitle = utils.getTitle(scope.gstats);
		});
	});

	rpc.once('getVersion', [], function(data) {
		scope.$apply(function() {
			scope.miscellaneous = data[0];
		});
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
		scope.filterSpeed = !scope.filterSpeed;
		scope.filterActive = !scope.filterActive;
		scope.filterWaiting = !scope.filterWaiting;
		scope.filterComplete = !scope.filterComplete;
		scope.filterError = !scope.filterError;
		scope.filterPaused = !scope.filterPaused;
		scope.filterRemoved = !scope.filterRemoved;
		scope.persistFilters();
	};

	scope.resetFilters = function() {
		scope.filterSpeed =
			scope.filterActive =
			scope.filterWaiting =
			scope.filterComplete =
			scope.filterError =
			scope.filterPaused =
			scope.filterRemoved =
			true;
		scope.clearFilter();
		scope.persistFilters();
	};

	scope.persistFilters = function() {
		var o = JSON.stringify({
			s: scope.filterSpeed,
			a: scope.filterActive,
			w: scope.filterWaiting,
			c: scope.filterComplete,
			e: scope.filterError,
			p: scope.filterPaused,
			r: scope.filterRemoved
		});
		utils.setCookie("aria2filters", o);
	};

	scope.loadFilters = function() {
		var o = JSON.parse(utils.getCookie("aria2filters"));
		if (!o) {
			scope.resetFilters();
			return;
		}
		scope.filterSpeed = !!o.s;
		scope.filterActive = !!o.a;
		scope.filterWaiting = !!o.w;
		scope.filterComplete = !!o.c;
		scope.filterError = !!o.e;
		scope.filterPaused = !!o.p;
		scope.filterRemoved = !!o.r;
	};

	scope.loadFilters();

	scope.toggleCollapsed = function(download) {
		if (!download.collapsed) {
			download.animCollapsed = true;
			// ng-unswitch after half a second.
			// XXX hacky way, because I'm to lazy right now to wire up proper
			// transitionend events.
			setTimeout(function() {
				scope.$apply(function() {
					download.collapsed = true;
				});
			}, 500);
			return;
		}

		download.collapsed = false;
		setTimeout(function() {
			scope.$apply(function() {
				download.animCollapsed = false;
			});
		}, 0);
	};


	// max downloads shown in one page
	scope.pageSize = pageSize;

	// current displayed page
	scope.currentPage = 1;

	// total amount of downloads returned by aria2
	scope.totalAria2Downloads = function() {
		return scope.active.length
			+ scope.waiting.length
			+ scope.stopped.length;
	}

	scope.getErrorStatus = function(errorCode) {
		return getErrorStatus(+errorCode);
	}

	// actual downloads used by the view
	scope.getDownloads = function() {
		var downloads = [];
		if (scope.filterActive) {
			if (!scope.filterSpeed) {
				downloads = _.filter(scope.active, function (e) {
					return !+e.uploadSpeed && !+e.downloadSpeed;
				});
			}
			else {
				downloads = scope.active;
			}
		}
		else if (scope.filterSpeed) {
			downloads = _.filter(scope.active, function (e) {
				return +e.uploadSpeed || +e.downloadSpeed;
			});
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

	scope.hasDirectURL = function() {
		return rpc.getDirectURL() != '';
	}

	scope.getDirectURL = function() {
		return rpc.getDirectURL();
	}

	// convert the donwload form aria2 to once used by the view,
	// minor additions of some fields and checks
	scope.getCtx = function(d, ctx) {
		if (!ctx) {
			ctx = {
				dir: d.dir,
				status: d.status,
				gid: d.gid,
				followedBy: (d.followedBy && d.followedBy.length == 1
					? d.followedBy[0] : null),
				followedFrom: null,
				numPieces: d.numPieces,
				connections: d.connections,
				connectionsTitle: "Connections",
				numSeeders: d.numSeeders,
				bitfield: d.bitfield,
				errorCode: d.errorCode,
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
				collapsed: true,
				animCollapsed: true,
				files: [],
			};
			if (d.verifiedLength) {
				ctx.verifiedLength = d.verifiedLength;
				ctx.status = "verifing";
			}
			if (d.verifyIntegrityPending) {
				ctx.verifyIntegrityPending = d.verifyIntegrityPending;
				ctx.status = "verifyPending";
			}
		}
		else {
		    if (ctx.gid !== d.gid)
		        ctx.files = [];
			ctx.dir = d.dir;
			ctx.status = d.status;
			if(d.verifiedLength)
				ctx.status = "verifing";
			if(d.verifyIntegrityPending)
				ctx.status = "verifyPending"
			ctx.errorCode = d.errorCode;
			ctx.gid = d.gid;
			ctx.followedBy = (d.followedBy && d.followedBy.length == 1
				? d.followedBy[0] : null);
			ctx.followedFrom = null;
			ctx.numPieces = d.numPieces;
			ctx.connections = d.connections;
			if ( typeof d.numSeeders === 'undefined' ) {
				ctx.numSeeders = "";
			}
			else {
				ctx.connectionsTitle = "Connections (Seeders)";
				ctx.numSeeders = " (" + d.numSeeders + ")";
			}
			ctx.bitfield = d.bitfield;
			if (ctx.totalLength !== d.totalLength) {
				ctx.totalLength = d.totalLength;
				ctx.fmtTotalLength = utils.fmtsize(d.totalLength);
			}
			if (ctx.completedLength !== d.completedLength) {
				ctx.completedLength = d.completedLength;
				ctx.fmtCompletedLength = utils.fmtsize(d.completedLength);
			}
			if (!d.verifiedLength) {
				delete ctx.verifiedLength
			} else if (ctx.verifiedLength !== d.verifiedLength) {
				ctx.verifiedLength = d.verifiedLength;
			}
			if (!d.verifyIntegrityPending) {
				delete ctx.verifyIntegrityPending
			} else if (ctx.verifyIntegrityPending !== d.verifyIntegrityPending) {
				ctx.verifyIntegrityPending = d.verifyIntegrityPending;
			}
			if (ctx.uploadLength !== d.uploadLength) {
				ctx.uploadLength = d.uploadLength;
				ctx.fmtUploadLength = utils.fmtsize(d.uploadLength);
			}
			if (ctx.pieceLength !== d.pieceLength) {
				ctx.pieceLength = d.pieceLength;
				ctx.fmtPieceLength = utils.fmtsize(d.pieceLength);
			}
			if (ctx.downloadSpeed !== d.downloadSpeed) {
				ctx.downloadSpeed =	d.downloadSpeed;
				ctx.fmtDownloadSpeed = utils.fmtspeed(d.downloadSpeed);
			}
			if (ctx.uploadSpeed !== d.uploadSpeed) {
				ctx.uploadSpeed =	d.uploadSpeed;
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
					cfile.index = +file.index;
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
				cfile.selected = (file.selected === "true");
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
		ctx.metadata = ctx.name.startsWith("[METADATA]");
		if (ctx.metadata) {
			ctx.name = ctx.name.substr(10);
		}

		return ctx;
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
				return "progress-bar-info";
			case "error":
				return "progress-bar-danger";
			case "removed":
				return "progress-bar-warning";
			case "active":
				return "active";
			case "verifing":
				return "progress-bar-warning";
			case "complete":
				return "progress-bar-success";
			default:
				return "";
		}
	};

	// gets the progress in percentages
	scope.getProgress = function(d) {
		var percentage = 0
		if (d.verifiedLength)
			percentage = (d.verifiedLength / d.totalLength) * 100 || 0;
		else
			percentage = (d.completedLength / d.totalLength) * 100 || 0;
		percentage = percentage.toFixed(2);
		if(!percentage) percentage = 0;

		return percentage;
	};

	// gets the upload ratio
	scope.getRatio = function(d) {
		var ratio = 0
		ratio = (d.uploadLength / d.completedLength) || 0;
		ratio = ratio.toFixed(2);
		if(!ratio) ratio = 0;

		return ratio;
	};

	// gets the type for the download as classified by the aria2 rpc calls
	scope.getType = function(d) {
		var type = d.status;
		if (type == "paused") type = "waiting";
		if (["error", "removed", "complete"].indexOf(type) != -1)
			type = "stopped";
		return type;
	};

	scope.selectFiles = function(d) {
		console.log('got back files for the torrent ...');
		modals.invoke('selectFiles', d.files, function(files) {
			var indexes = "";
			_.forEach(files, function(f) {
				if (f.selected) {
					indexes += "," + f.index;
				}
			});

			indexes = indexes.slice(1);
			rpc.once('changeOption', [d.gid, {'select-file': indexes}], function(res) {
				console.log('changed indexes to:', indexes, res);
			})
		});
	}

	scope.showSettings = function(d) {
		var type = scope.getType(d)
			, settings = {};

		rpc.once('getOption', [d.gid], function(data) {
			var vals = data[0];

			var sets = _.cloneDeep(fsettings);
			for (var i in sets) {
				if (type == 'active' && activeInclude.indexOf(i) == -1) continue;

				if (type == 'waiting' && waitingExclude.indexOf(i) != -1) continue;

				settings[i] = sets[i];
				settings[i].val = vals[i] || settings[i].val;
			}

			modals.invoke('settings', settings, d.name + ' settings', 'Change', function(settings) {
				var sets = {};
				for (var i in settings) { sets[i] = settings[i].val };

				rpc.once('changeOption', [d.gid, sets]);
			});
		});

		return false;
	}
	scope.moveDown = function (d) {
	    rpc.once('changePosition', [d.gid, 1, 'POS_CUR']);
	};
	scope.moveUp = function (d) {
	    rpc.once('changePosition', [d.gid, -1, 'POS_CUR']);
	};
}])
.filter('objFilter', function(){
	return function(input, filter) {
		input = input || {};
		var out = {};

		for(key in input) {
			if (key.startsWith(filter)){
				out[key] = input[key];
			}
		}

		return out;
	};
});
