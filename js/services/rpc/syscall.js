angular
.module('webui.services.rpc.syscall', [
  'webui.services.rpc.jsoncall', 'webui.services.rpc.sockcall',
  'webui.services.utils', 'webui.services.alerts'
])
.factory('$syscall', ['$log', '$jsoncall', '$sockcall', '$alerts',
function(log, jsonRPC, sockRPC, alerts) {
  return {
    state: 'none',
    // called to initialize the rpc interface, call everytime configuration changes
    // conf has the following structure:
    // {
    //   host (string): host for the aria2 server
    //   port (number): port number for the aria2 server
    //   encrypt (boolean, optional): true if encryption is enabled in the aria2 server
    //   auth (optional): {
    //     token (string): secret token for authentication (--rpc-secret)
    //     user (string): username for http authentication if enabled
    //     pass (string): password for the http authentication if enabled
    //   }
    init: function(conf) {
      console.log("Syscall is initializing to", conf);
      this.state = 'initializing';
      jsonRPC.init(conf);
      var syscall = this;
      sockRPC.init(conf, function() {
        console.log("Syscall is ready");
        syscall.state = 'ready';
      });
    },

    // call this to start an rpc call, opts has the following structure:
    // {
    //   name (string): name of the actual aria2 syscall
    //   success (function): callback called with (parsed) data if rpc is successfull
    //   error (function): callback called when an error occurs
    //   params (array, optional): the params for some syscall (like multicall) and is optional for others
    // }
    invoke: function(opts) {
      opts.success = opts.success || angular.noop;
      opts.error = opts.error || angular.noop;

      if (sockRPC.initialized) {
        return sockRPC.invoke(opts);
      }
      else {
        return jsonRPC.invoke(opts);
      }
    }
  };
}]);
