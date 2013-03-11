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
  'webui.services.deps', 'webui.services.modals', 'webui.services.rpc'
])
.controller('ModalCtrl', [
  '$_', '$scope', '$modals', '$rpc',
  function(_, scope, modals, rpc) {

  scope.getUris = {
    shown: false,
    uris: '',
    init: function(cb) {
      this.shown = this.open =  true;
      this.cb = cb;
    },
    parse: function() {
      return _
        .chain(this.uris.trim().split(/\n\r?/g))
        .map(function(d) { return d.trim().split(/\s+/g) })
        .filter(function(d) { return d.length })
        .value();
    },
    success: function() {
      var uris = this.parse();
      this.uris = '';

      if (this.cb) this.cb(uris);

      this.close();

    },
    close: function() {
      this.shown = this.open = false;
      this.cb = null;
    }
  };

  scope.settings = {
    shown: false,
    settings: [],
    title: 'Settings',
    init: function(settings, title, cb) {
      this.cb = cb;
      this.settings = settings;
      this.title = title || title;
      this.shown = this.open = true;
    },
    success: function() {
      if (this.cb) this.cb(this.settings);
      this.close();
    },
    close: function() {
      this.cb = null;
      this.shown = this.open = false;
    }
  };

  scope.connection = {
    shown: false,

    conf: {
      host: 'localhost',
      port: 6800,
      encrypt: false,
      auth: {
        user: '',
        pass: ''
      }
    },

    init: function(defaults, cb) {
      var conf = rpc.getConfiguration();
      if (conf) this.conf = conf;

      this.cb = cb;
      this.open = this.shown = true;

    },
    success: function() {
      console.log(this);

      if (this.cb) {
        this.cb(this.conf);
      }

      this.close();
    },
    close: function() {
      this.cb = null;
      this.open = this.shown = false;
    }
  };

  _.each(['getTorrents', 'getMetalinks'], function(name) {
    scope[name] =  {
      shown: false,
      init: function(cb) {
        this.shown = this.open =  true;
        this.cb = cb;
      },

      files: [],
      success: function() {
        var self = this;
        console.log('parsing files');
        parseFiles(self.files, function(txts) {
          console.log('calling cb', this.cb);
          if (self.cb) self.cb(txts);

          self.close();
        });
      },
      close: function() {
        this.cb = null;
        this.shown = this.open = false;
      }
    };
  });

  _.each([
    'getUris', 'getTorrents', 'getMetalinks',
    'settings', 'connection'
  ], function(name) {
    modals.register(name, function(cb) {
      if (scope[name].open) {
        // modal already shown, user is busy
        // TODO: get a better method of passing this info
        return;
      }
      else {
        var args = Array.prototype.slice.call(arguments, 0);
        scope[name].open = true;
        scope[name].init.apply(scope[name], args);
      };
    });
  });

}]);
