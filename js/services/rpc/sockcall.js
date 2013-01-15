app.factory('$sockcall', ['$_', '$json', '$name', '$utils', function(_, JSON, name, utils) {
  return {
    // true when sockrpc is ready to be used,
    // false when either initializing
    // or no support for web sockets
    initialized: false,

    // ongoing connection handles containing connection id and callbacks
    handles: [],

    // websocket connection socket used for all connections
    sock: null,

    // connection configuration
    conf: null,

    // socket connection scheme, default to unencrypted connection
    scheme: 'ws',

    // called when a connection error occurs
    onerror: function() {
      _.each(this.handles, function(h) { h.error() });
      this.handles = [];
    },

    // when connection opens
    onopen: function() {
      this.initialized = true;
    },


    // when message is recieved
    onmessage: function(message) {
      var data = JSON.parse(message.data);

      // reverse loop because we are deleting elements
      // while looping over the old items
      for (var i = this.handles.length - 1; i >= 0; i--) {
        if (this.handles[i].id === data.id) {
          this.handles[i].success(data);
          this.handles.splice(i, 1);
          return;
        }
      }
    },

    // call to use the rpc
    invoke: function(opts) {
      var data =  {
        jsonrpc: 2.0,
        id: name + '_' + utils.randStr(),
        method: opts.func,
        params: opts.params && opts.params.length ? opts.params : undefined
      };

      if (data.params && !data.params.length) data.params = undefined;

      this.handles.push({
        success: opts.success || angular.noop,
        error: opts.error || angular.noop,
        id: data.id
      });
      this.sock.send( JSON.stringify(data) );
    },

    // should be called initially to start using the sock rpc
    init: function(conf) {
      if (typeof WebSocket == "undefined") {
        return;
      }
      this.conf = conf || this.conf;
      this.initialized = false;

      this.scheme = this.conf.encryption ? 'wss' : 'ws';

      if (this.sock) {
        this.onopen = this.sock.onmessage = this.sock.onerror = this.sock.onclose = null;
        this.onerror();
      }

      this.sock = new WebSocket(this.scheme + '://' + conf.host + ':' + conf.port + '/jsonrpc');
      this.sock.onopen = this.onopen;
      this.sock.onclose = this.sock.onerror = this.onerror;
      this.sock.onmessage = this.onmessage;
    },
  };
}]);

