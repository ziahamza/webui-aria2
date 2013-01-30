var parseFiles = function(files, cb) {
  var cnt = 0;
  var txts = [];
  var onload = function(res) {
    var txt = res.target.result;
    txts.push(txt.split(',')[1]);
    cnt--;
    if (!cnt) {
      cb(txts);
    }
  };
  _.each(files, function(file) {
    cnt++;
    console.log('starting file reader');
    var reader = new FileReader();
    reader.onload = onload;
    reader.onerror = function(err) {
      // return error
      // TODO: find a better way to propogate error upstream
      console.log('got back error', err);
      cb([]);
    };
    reader.readAsDataURL(file);
  });
};

angular
.module('webui.ctrls.modal', [
  'webui.services.rpc', 'webui.services.deps', 'webui.services.modals'
])
.controller('ModalCtrl', [
  '$_', '$scope', '$rpc', '$modals',
  function(_, scope, rpc, modals) {

  scope.getUris = {
    cb: null,
    shown: false,

    uris: '',
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

  _.each(['getTorrents', 'getMetalinks'], function(name) {
    scope[name] =  {
      cb: null,
      shown: false,

      files: [],
      finish: function() {
        var self = this;
        console.log('parsing files');
        parseFiles(self.files, function(txts) {
          console.log('calling cb', this.cb);
          if (self.cb) self.cb(txts);

          self.cb = null;
          self.shown = false;
        });
      }
    };
  });

  _.each(['getUris', 'getTorrents', 'getMetalinks'], function(name) {
    modals.register(name, function(cb) {
      if (scope[name].cb != null && scope[name].shown) {
        // modal already shown, user is busy
        // TODO: get a better method of passing this on
        cb([]);
      }
      else {
        console.log('setting cb for ', name, cb);
        scope[name].cb = cb;
        scope[name].shown = true;
      };
    });
  });

}]);
