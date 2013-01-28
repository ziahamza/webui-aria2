app.controller('ModalCtrl', ['$_', '$scope', '$rpc', function(_, scope, rpc) {
  scope.uris = '';
  scope.addUris = function() {
    console.log(scope.uris);
    var cnt = 0;
    var cb = function() {
      cnt--;
      if (!cnt) {
        // close modal
        console.log('closing modal');
      }
    };
    _.chain(scope.uris.trim().split(/\n\r?/g))
     .map(function(d) { return d.trim().split(/\s+/g) })
     .filter(function(d) { return d.length })
     .each(function(uris) {
       cnt++;
       // passing true to batch all the addUri calls
       rpc.once('addUri', [uris], cb, true);
     })

    // now dispatch all addUri syscalls
    rpc.forceUpdate();

    scope.uris = '';
  };
}]);
