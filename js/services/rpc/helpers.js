angular.module('webui.services.rpc.helpers', [
  'webui.services.deps', 'webui.services.rpc'
])
.factory('$rpchelpers', ['$_', '$rpc', function(_, rpc) {
  return {
    addUris: function(uris) {
      var cnt = 0;
      var cb = function() {
        cnt--;
        if (!cnt) {
          // close modal
          console.log('closing modal');
        }
      };
      _.each(uris, function(uri) {
        cnt++;
        // passing true to batch all the addUri calls
        rpc.once('addUri', [uris], cb, true);
      });

      // now dispatch all addUri syscalls
      rpc.forceUpdate();
    }
  };
}]);
