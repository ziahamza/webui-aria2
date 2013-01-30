angular
.module('webui.ctrls.nav', [
  'webui.services.constants', 'webui.services.modals',
  'webui.services.rpc.helpers'
])
.controller('NavCtrl', [
  '$scope', '$name', '$modals', '$rpchelpers',
  function(scope, name, modals, rhelpers) {

  scope.name = name;

  // initially collapsed in mobile resolution
  scope.collapsed = true;

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

}]);
