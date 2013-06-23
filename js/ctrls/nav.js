angular
.module('webui.ctrls.nav', [
  'webui.services.constants', 'webui.services.modals',
  'webui.services.rpc', 'webui.services.rpc.helpers',
  'webui.services.settings', 'webui.services.utils'
])
.controller('NavCtrl', [
  '$scope', '$name', '$modals',
  '$rpc', '$rpchelpers', '$fileSettings',
  '$globalSettings', '$globalExclude',
  '$utils',
  function(
    scope, name, modals,
    rpc, rhelpers, fsettings,
    gsettings, gexclude,
    utils
  ) {

  // app name
  scope.name = name;

  scope.isFeatureEnabled = function(f) { return rhelpers.isFeatureEnabled(f) };

  // initially collapsed in mobile resolution
  scope.collapsed = true;

  // manage download functions
  scope.forcePauseAll = function() {
    rpc.once('forcePauseAll', []);
  }

  scope.purgeDownloadResult = function() {
    rpc.once('purgeDownloadResult', []);
  }

  scope.unpauseAll = function() {
    rpc.once('unpauseAll', []);
  }

  scope.addUris = function() {
    modals.invoke(
      'getUris', _.bind(rhelpers.addUris, rhelpers)
    );
  };

  scope.addTorrents = function() {
    modals.invoke(
      'getTorrents', _.bind(rhelpers.addTorrents, rhelpers)
    );
  };

  scope.addMetalinks = function() {
    modals.invoke(
      'getMetalinks', _.bind(rhelpers.addMetalinks, rhelpers)
    );
  };

  scope.addTorrent = function() {
    modals.invoke(
      'getTorrent', _.bind(rhelpers.addTorrents, rhelpers)
    );
  };

  scope.changeCSettings = function() {
    modals.invoke(
      'connection', rpc.getConfiguration(), _.bind(rpc.configure, rpc)
    );
  }

  scope.changeGSettings = function() {
    rpc.once('getGlobalOption', [], function(data) {
      var starred = utils.getCookie('aria2props');
      if (!starred || !starred.indexOf) starred = [];
      var vals = data[0];
      var settings = {};

      // global settings divided into
      // file settings + some global specific
      // settings

      _.forEach([fsettings, gsettings], function(sets) {
        for (var i in sets) {
          if (gexclude.indexOf(i) != -1) continue;

          settings[i] = sets[i];
          settings[i].starred = starred.indexOf(i) != -1;
        }
      });

      for (var i in vals) {
        if (i in gexclude) continue;

        if (!(i in settings)) {
          settings[i] = { name: i, val: vals[i], desc: '', starred: starred.indexOf(i) != -1 };
        }

        else {
          settings[i].val = vals[i];
        }
      }

      modals.invoke(
        'settings', settings,
        'Global Settings', function(settings) {

        var sets = {};
        var starred = [];
        for (var i in settings) {
          sets[i] = settings[i].val
          if (settings[i].starred) {
            starred.push(i);
          }
        };

        console.log('saving aria2 starred:', starred);
        rpc.once('changeGlobalOption', [sets]);
        utils.setCookie('aria2props', starred);
      });
    });
  };
}]);
