angular.module('webui.services.rpc.helpers', [
  'webui.services.deps', 'webui.services.rpc'
])
.factory('$rpchelpers', ['$_', '$rpc', function(_, rpc) {
  return {
    addUris: function(uris) {
      var cnt = 0;
      var cb = function(ret) {
        cnt--;
        if (!cnt) {
          // close modal
          console.log('closing modal');
        }
      };
      _.each(uris, function(uri) {
        cnt++;
        // passing true to batch all the addUri calls
        rpc.once('addUri', [uri], cb, true);
      });

      // now dispatch all addUri syscalls
      rpc.forceUpdate();
    },
    addTorrents: function(txts) {
      var cnt = 0;
      var cb = function(ret) {
        cnt--;
        if (!cnt) {
          // close modal
          console.log('closing modal');
        }
      };
      _.each(txts, function(txt) {
        cnt++;
        // passing true to batch all the addUri calls
        rpc.once('addTorrent', [txt], cb, true);
      });

      // now dispatch all addUri syscalls
      rpc.forceUpdate();
    },
    addMetalinks: function(txts) {
      var cnt = 0;
      var cb = function(ret) {
        cnt--;
        if (!cnt) {
          // close modal
          console.log('closing modal');
        }
      };
      _.each(txts, function(txt) {
        cnt++;
        // passing true to batch all the addUri calls
        rpc.once('addMetalink', [txt], cb, true);
      });

      // now dispatch all addUri syscalls
      rpc.forceUpdate();
    }
  };
}]);
