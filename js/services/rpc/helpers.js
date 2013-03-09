angular.module('webui.services.rpc.helpers', [
  'webui.services.deps', 'webui.services.rpc', 'webui.services.alerts'
])
.factory('$rpchelpers', ['$_', '$rpc', '$alerts', function(_, rpc, alerts) {
  return {
    addUris: function(uris) {
      _.each(uris, function(uri) {
        // passing true to batch all the addUri calls
        rpc.once('addUri', [uri], angular.noop, true);

      });

      // now dispatch all addUri syscalls
      rpc.forceUpdate();
    },
    addTorrents: function(txts) {
      _.each(txts, function(txt) {
        // passing true to batch all the addUri calls
        rpc.once('addTorrent', [txt], angular.noop, true);
      });

      // now dispatch all addUri syscalls
      rpc.forceUpdate();
    },
    addMetalinks: function(txts) {
      _.each(txts, function(txt) {
        // passing true to batch all the addUri calls
        rpc.once('addMetalink', [txt], angular.noop, true);
      });

      // now dispatch all addUri syscalls
      rpc.forceUpdate();
    }
  };
}]);
