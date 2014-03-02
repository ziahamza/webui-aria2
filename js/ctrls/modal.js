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
  "ui.bootstrap", 'webui.services.deps', 'webui.services.modals', 'webui.services.rpc'
])
.controller('ModalCtrl', [
  '$_', '$scope', '$modal', "$modals", '$rpc',
  function(_, scope, $modal, modals, rpc) {

  scope.getUris = {
    open: function(cb) {
      var self = this;
      this.uris = "";
      this.cb = cb;
      this.inst = $modal.open({
        templateUrl: "getUris.html",
        scope: scope
      });
      this.inst.result.then(function() {
        delete self.inst;
        if (self.cb) {
          self.cb(self.parse());
        }
      },
      function() {
        delete self.inst;
      });
    },
    parse: function() {
      return _
        .chain(this.uris.trim().split(/\n\r?/g))
        .map(function(d) { return d.trim().split(/\s+/g) })
        .filter(function(d) { return d.length })
        .value();
    }
  };

  scope.settings = {
    open: function(settings, title, cb) {
      var self = this;
      this.settings = settings;
      this.title = title;
      this.inst = $modal.open({
        templateUrl: "settings.html",
        scope: scope
      });
      this.inst.result.then(function() {
        delete self.inst;
        if (cb) {
          cb(self.settings);
        }
      },
      function() {
        delete self.inst;
      });
    }
  };

  scope.connection = {
    open: function(defaults, cb) {
      var self = this;

      // XXX We need to actually clone this!
      this.conf = rpc.getConfiguration();
      this.inst = $modal.open({
        templateUrl: "connection.html",
        scope: scope
      });
      this.inst.result.then(function() {
        delete self.inst;
        if (cb) {
          cb(self.conf);
        }
      },
      function() {
        delete self.inst;
      });
    }
  };

  _.each(['getTorrents', 'getMetalinks'], function(name) {
    scope[name] = {
      open: function(cb) {
        var self = this;
        this.files = [];
        this.inst = $modal.open({
          templateUrl: name + ".html",
          scope: scope
        });
        this.inst.result.then(function() {
          delete self.inst;
          if (cb) {
            parseFiles(self.files, function(txts) {
              cb(txts);
            });
          }
        },
        function() {
          delete self.inst;
        });
      }
    };
  });

  _.each(["about", "server_info"], function(name) {
    scope[name] = {
      open: function() {
        var self = this;
        this.inst = $modal.open({
          templateUrl: name + ".html",
          scope: scope
        });
        this.inst.result.then(function() {
          delete self.inst;
        },
        function() {
          delete self.inst;
        });
      }
    };
  });

  rpc.once('getVersion', [], function(data) {
      scope.miscellaneous = data[0];
      });

  _.each([
    'getUris', 'getTorrents', 'getMetalinks',
    'settings', 'connection', 'server_info', 'about'
  ], function(name) {
    modals.register(name, function() {
      if (scope[name].inst) {
        // Already open.
        return;
      }
      var args = Array.prototype.slice.call(arguments, 0);
      scope[name].open.apply(scope[name], args);
    });
  });

}]);
