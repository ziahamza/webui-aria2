angular
.module('webui.services.rpc', [
  'webui.services.rpc.syscall', 'webui.services.configuration', 'webui.services.alerts',
  'webui.services.utils'
])
.factory('$rpc', [
  '$syscall', '$globalTimeout', '$alerts', '$utils',
  '$rootScope', '$location', '$authconf', '$filter',
function(syscall, globalTimeout, alerts, utils, rootScope, uri, authconf, filter) {

  var subscriptions = []
    , configurations = [authconf]
    , currentConf = {}
    , currentToken
    , timeout = null
    , forceNextUpdate = false;

  var cookieConf = utils.getCookie('aria2conf');
  // try at the start, so that it is presistant even when default authconf works
  if(cookieConf) configurations.unshift(cookieConf);

  if (['http', 'https'].indexOf(uri.protocol()) != -1 && uri.host() != 'localhost') {
    configurations.push({
      host: uri.host(),
      path: '/jsonrpc',
      port: 6800,
      encrypt: false
    },
    {
      host: uri.host(),
      port: uri.port(),
      path: '/jsonrpc',
      encrypt: ( uri.protocol() == 'https' )
    },
    {
      host: uri.host(),
      port: uri.port(),
      path: authconf.path,
      encrypt: ( uri.protocol() == 'https' )
    });
  }


  // set if we got error on connection. This will cause another connection attempt.
  var needNewConnection = true;

  // update is implemented such that
  // only one syscall at max is ongoing
  // (i.e. serially) so should be private
  // to maintain that invariant
  var update = function() {

    clearTimeout(timeout);
    timeout = null;

    subscriptions = _.filter(subscriptions, function(e) {
      return !!e && e.once !== 2;
    });
    var subs = subscriptions.slice();
    if (!subs.length) {
      timeout = setTimeout(update, globalTimeout);
      return;
    }

    if (syscall.state == 'initializing') {
      console.log("Syscall is initializing, waiting");
      timeout = setTimeout(update, globalTimeout);
      return;
    }

    if (needNewConnection && configurations.length) {
      needNewConnection = false;
      currentConf = configurations[0];
      if (currentConf && currentConf.auth && currentConf.auth.token) {
        currentToken = currentConf.auth.token;
      }
      else {
        currentToken = null;
      }
      syscall.init(currentConf);
      timeout = setTimeout(update, globalTimeout);
      return;
    }

    var params = _.map(subs, function(s) {
      var p = s.params;
      if (currentToken) {
        p = ["token:" + currentToken].concat(p || []);
      }
      return {
        methodName: s.name,
        params: p && p.length ? p : undefined
      };
    });

    var error = function() {
      needNewConnection = true;
      var ind = configurations.indexOf(currentConf);
      if (ind != -1) configurations.splice(ind, 1);

      // If some proposed configurations are still in the pipeline then retry
      if (configurations.length) {
        alerts.log(filter('translate')("The last connection attempt was unsuccessful. Trying another configuration"));
        timeout = setTimeout(update, 0);
      }
      else {
        alerts.addAlert('<strong>' + filter('translate')('Oh Snap!') + '</strong> ' +
          filter('translate')('Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings')
        , 'error');
        timeout = setTimeout(update, globalTimeout);
      }
    };

    syscall.invoke({
      name: 'system.multicall',
      params: [params],
      success: function(data) {
        var failed = _.some(data.result, function(d) {
          return d.code && d.message === "Unauthorized";
        });

        if (failed) {
          needNewConnection = true;
          alerts.addAlert('<strong>' + filter('translate')('Oh Snap!') + '</strong> ' +
            filter('translate')('Authentication failed while connecting to Aria2 RPC server. Will retry in 10 secs. You might want to confirm your authentication details by going to Settings > Connection Settings', 'error'));
          timeout = setTimeout(update, globalTimeout);
          return;
        }

        if (configurations.length) {
          // configuration worked, save it in cookie for next time and
          // delete the pipelined configurations!!
          if (currentToken)
            alerts.addAlert(filter('translate')('Successfully connected to Aria2 through its remote RPC …'), 'success');
          else
            alerts.addAlert(filter('translate')('Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)'));
          configurations = [];
        }

        utils.setCookie('aria2conf', currentConf);

        var cbs = [];
        _.each(data.result, function(d, i) {
          var handle = subs[i];
          if (handle) {
            if (d.code) {
              console.error(handle, d);
              alerts.addAlert(d.message, 'error');
            }
            // run them later as the cb itself can mutate the subscriptions
            cbs.push({cb: handle.cb, data: d});
            if (handle.once) {
              handle.once = 2;
            }
          }
        });


        _.each(cbs, function(hnd) {
          hnd.cb(hnd.data);
        });

        rootScope.$digest();

        if (forceNextUpdate) {
          forceNextUpdate = false;
          timeout = setTimeout(update, 0);
        }
        else {
          timeout = setTimeout(update, globalTimeout);
        }
      },
      error: error
    });
  };

  // initiate the update loop
  timeout = setTimeout(update, globalTimeout);

  return {
    // conf can be configuration or array of configurations,
    // each one will be tried one after the other till success,
    // for all options for one conf read rpc/syscall.js
    configure: function(conf) {
      alerts.addAlert(filter('translate')('Trying to connect to aria2 using the new connection configuration'), 'info');

      if (conf instanceof Array)
        configurations = conf;
      else
        configurations = [conf];

      if (timeout) {
        clearTimeout(timeout);
        timeout = setTimeout(update, 0);
      }
    },

    // get current configuration being used
    getConfiguration: function() { return currentConf },

    // get currently configured directURL
    getDirectURL : function() { return currentConf.directURL },

    // syscall is done only once, delay is optional
    // and pass true to only dispatch it in the global timeout
    // which can be used to batch up once calls
    once: function(name, params, cb, delay) {
      cb = cb || angular.noop;
      params = params || [];

      subscriptions.push({
        once: true,
        name: 'aria2.' + name,
        params: params,
        cb: cb
      });

      if (!delay) {
        this.forceUpdate();
      }
    },

    // callback is called each time with updated syscall data
    // after the global timeout, delay is optional and pass it
    // true to dispatch the first syscall also on global timeout
    // which can be used to batch the subscribe calls
    subscribe: function(name, params, cb, delay) {
      cb = cb || angular.noop;
      params = params || [];

      var handle = {
        once: false,
        name: 'aria2.' + name,
        params: params,
        cb: cb
      };
      subscriptions.push(handle);

      if (!delay) this.forceUpdate();
      return handle;
    },

    // remove the subscribed callback by passing
    // the returned handle bysubscribe
    unsubscribe: function(handle) {
      var ind = subscriptions.indexOf(handle);
      subscriptions[ind] = null;
    },

    // force the global syscall update
    forceUpdate: function() {
      if (timeout) {
        clearTimeout(timeout);
        timeout = setTimeout(update, 0);
      }
      else {
        // a batch call is already in progress,
        // wait till it returns and force the next one
        forceNextUpdate = true;
      }
    }
  };
}]);
