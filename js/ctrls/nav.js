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
    modals.invoke('getUris', rhelpers.addUris);
  };

}]);
