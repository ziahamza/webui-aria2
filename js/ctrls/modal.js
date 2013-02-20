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
  'webui.services.rpc', 'webui.services.deps', 'webui.services.modals',
  'webui.services.settings'
])
.controller('ModalCtrl', [
  '$_', '$scope', '$rpc', '$modals', '$settings',
  function(_, scope, rpc, modals, settings) {

  scope.getUris = {
    shown: false,

    uris: '',
    init: function(cb) { this.shown = true; this.cb = cb },
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
      shown: false,
      init: function(cb) { this.shown = true; this.cb = cb },

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

  scope.globalSettings = {
    shown: false,
    settings: [],
    init: function(cb) {
      var self = this;
      self.cb = cb;

      rpc.once('getGlobalOption', [], function(data) {
        var vals = data[0];
        for (var i in vals) {
          if (!(i in data)) {
            data.push({ name: i, val: vals[i], desc: '' });
          }
          else data[i].val = vals[i];
        }
        console.log(vals);
        self.shown = true;
      });

      self.settings = settings;
    },
    finish: function() {

    }
  };

  _.each([
    'getUris', 'getTorrents', 'getMetalinks',
    'globalSettings'
  ], function(name) {
    modals.register(name, function(cb) {
      if (scope[name].open) {
        // modal already shown, user is busy
        // TODO: get a better method of passing this info
        cb([]);
      }
      else {
        var args = Array.prototype.slice.call(arguments, 0);
        console.log('setting cb for ', name, cb);
        scope[name].open = true;
        scope[name].init.apply(scope[name], args);
      };
    });
  });

}]);
