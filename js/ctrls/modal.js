angular
.module('webui.ctrls.modal', [
  'webui.services.rpc', 'webui.services.deps', 'webui.services.modals'
])
.controller('ModalCtrl', [
  '$_', '$scope', '$rpc', '$modals',
  function(_, scope, rpc, modals) {

  scope.getUris = {
    cb: null,
    uris: '',
    shown: false,
    parse: function() {
      return _
        .chain(this.uris.trim().split(/\n\r?/g))
        .map(function(d) { return d.trim().split(/\s+/g) })
        .filter(function(d) { return d.length })
        .value();
    },
    finish: function() {
      var uris = this.parse();
      this.uris = '';

      if (this.cb) this.cb(uris);

      this.cb = null;
      this.shown = false;
    }
  };
  modals.register('getUris', function(cb) {
    if (scope.getUris.cb != null && scope.getUris.shown) {
      // modal already shown, user is busy
      // TODO: get a better method of passing this on
      cb([]);
    }
    else {
      scope.getUris.cb = cb;
      scope.getUris.shown = true;
    };
  });

}]);
