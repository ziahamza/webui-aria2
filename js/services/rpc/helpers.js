angular.module('webui.services.rpc.helpers', [
  'webui.services.deps', 'webui.services.rpc', 'webui.services.alerts'
])
.factory('$rpchelpers', ['$_', '$rpc', '$alerts', function(_, rpc, alerts) {
  var miscellaneous = {version: '', enabledFeatures: []};
  rpc.once('getVersion', [], function(data) { miscellaneous = data[0]});
  return {
    isFeatureEnabled: function(feature) {
      return miscellaneous.enabledFeatures.indexOf(feature) != -1;
    },
    getAria2Version: function() {
      return miscellaneous.version;
    },
    addUris: function(uris, advanced_opts) {
      _.each(uris, function(uri) {
        // passing true to batch all the addUri calls
        rpc.once('addUri', [uri, advanced_opts], angular.noop, true);
      });

      // now dispatch all addUri syscalls
      rpc.forceUpdate();
    },
    addTorrents: function(txts, advanced_opts) {
      _.each(txts, function(txt) {
        // passing true to batch all the addTorrents calls
        rpc.once('addTorrent', [txt, [], advanced_opts], angular.noop, true);
      });

      // now dispatch all addUri syscalls
      rpc.forceUpdate();
    },
    addMetalinks: function(txts, advanced_opts) {
      _.each(txts, function(txt) {
        // passing true to batch all the addMetalinks calls
        rpc.once('addMetalink', [txt, advanced_opts], angular.noop, true);
      });

      // now dispatch all addUri syscalls
      rpc.forceUpdate();
    }
  };
}]);
