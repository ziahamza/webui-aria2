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
      alerts.log('Cannot talk to aria2 over websocket, resorting to http requests');

    },
    onclose: function(ev) {
      if (sockRPC.handles && sockRPC.handles.length)
        sockRPC.onerror('Connection reset while pending calls to aria2');
      sockRPC.initialized = false;
    },

    // when connection opens
    onopen: function() {
      alerts.addAlert('Connected to aria2 successfully over websocket!', 'success');
      sockRPC.initialized = true;
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
    init: function(conf) {
      sockRPC.initialized = false;

      if (typeof WebSocket == "undefined") {
        alerts.addAlert('Web sockets not supported, falling back to jsonp', 'info');
        return;
      }
      sockRPC.conf = conf || sockRPC.conf;

      sockRPC.scheme = sockRPC.conf.encrypt ? 'wss' : 'ws';

      if (sockRPC.sock) {
        sockRPC.sock.onopen = sockRPC.sock.onmessage = sockRPC.sock.onerror = sockRPC.sock.onclose = null;
        sockRPC.onerror({message: 'Changing the websocket aria2 server details'});
      }

      try {
        sockRPC.sock = new WebSocket(sockRPC.scheme + '://' + conf.host + ':' + conf.port + '/jsonrpc');
        sockRPC.sock.onopen = sockRPC.onopen;
        sockRPC.sock.onclose = sockRPC.onclose;
        sockRPC.sock.onerror = sockRPC.onerror;
        sockRPC.sock.onmessage = sockRPC.onmessage;
      }
      catch (ex) {
        // ignoring IE securty exception on local ip addresses
        console.log('not using websocket for aria2 rpc due to: ', ex);
        alerts.addAlert('Web sockets not working due to ' + ex.message, 'info');
      }
    },
  };

  return sockRPC;
}]);

