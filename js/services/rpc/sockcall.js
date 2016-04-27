angular
.module('webui.services.rpc.sockcall', [
  'webui.services.deps', 'webui.services.utils', 'webui.services.base64',
  'webui.services.alerts'
])
.factory('$sockcall', ['$_', '$json', '$name', '$utils', '$alerts',
function(_, JSON, name, utils, alerts) {
  var sockRPC = {
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
    onerror: function(ev) {
      _.each(sockRPC.handles, function(h) { h.error() });
      sockRPC.handles = [];
      sockRPC.initialized = false;
      if (sockRPC.onready) {
        sockRPC.onready();
        sockRPC.onready = null;
      }
    },
    onclose: function(ev) {
      if (sockRPC.handles && sockRPC.handles.length)
        sockRPC.onerror('Connection reset while calling aria2');
      sockRPC.initialized = false;
      if (sockRPC.onready) {
        sockRPC.onready();
        sockRPC.onready = null;
      }
    },

    // when connection opens
    onopen: function() {
      console.log('websocket initialized!!!');
      sockRPC.initialized = true;
      if (sockRPC.onready) {
        sockRPC.onready();
        sockRPC.onready = null;
      }
    },


    // when message is recieved
    onmessage: function(message) {
      var data = JSON.parse(message.data);

      // reverse loop because we are deleting elements
      // while looping over the old items
      for (var i = sockRPC.handles.length - 1; i >= 0; i--) {
        if (sockRPC.handles[i].id === data.id) {
          sockRPC.handles[i].success(data);
          sockRPC.handles.splice(i, 1);
          return;
        }
      }
    },

    // call to use the rpc
    invoke: function(opts) {
      var data =  {
        jsonrpc: 2.0,
        id: utils.uuid(),
        method: opts.name,
        params: opts.params && opts.params.length ? opts.params : undefined
      };

      if (data.params && !data.params.length) data.params = undefined;

      sockRPC.handles.push({
        success: opts.success || angular.noop,
        error: opts.error || angular.noop,
        id: data.id
      });
      sockRPC.sock.send( JSON.stringify(data) );
    },

    // should be called initially to start using the sock rpc
    // onready is called when initial connection is resolved
    init: function(conf, onready) {
      sockRPC.initialized = false;
      if (sockRPC.onready) {
        // make previous call is resolved
        sockRPC.onready();
        sockRPC.onready = null;
      }

      if (typeof WebSocket == "undefined") {
        alerts.addAlert('Web sockets are not supported! Falling back to JSONP.', 'info');
        onready();
        return;
      }
      sockRPC.conf = conf || sockRPC.conf;

      sockRPC.scheme = sockRPC.conf.encrypt ? 'wss' : 'ws';

      if (sockRPC.sock) {
        sockRPC.sock.onopen = sockRPC.sock.onmessage = sockRPC.sock.onerror = sockRPC.sock.onclose = null;
        sockRPC.onerror({message: 'Changing the websocket aria2 server details'});
      }

      try {
        var authUrl = sockRPC.scheme + '://' + conf.host + ':' + conf.port + (conf.path || '/jsonrpc');
        if (sockRPC.conf.auth && sockRPC.conf.auth.user && sockRPC.conf.auth.pass) {
          authUrl = sockRPC.scheme + '://' +
          sockRPC.conf.auth.user +  ":" +
          sockRPC.conf.auth.pass + "@" +
          sockRPC.conf.host + ':' +
          sockRPC.conf.port + (conf.path || '/jsonrpc');
        }

        sockRPC.sock = new WebSocket(authUrl);
        sockRPC.sock.onopen = sockRPC.onopen;
        sockRPC.sock.onclose = sockRPC.onclose;
        sockRPC.sock.onerror = sockRPC.onerror;
        sockRPC.sock.onmessage = sockRPC.onmessage;
        sockRPC.onready = onready;
      }
      catch (ex) {
        // ignoring IE security exception on local ip addresses
        console.log('not using websocket for aria2 rpc due to: ', ex);
        alerts.addAlert('Web sockets not working due to ' + ex.message, 'info');
        onready();
      }
    },
  };

  return sockRPC;
}]);

