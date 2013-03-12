angular
.module('webui.services.rpc', [
  'webui.services.rpc.syscall', 'webui.services.constants', 'webui.services.alerts',
  'webui.services.utils'
])
.factory('$rpc', [
  '$syscall', '$globalTimeout', '$alerts', '$utils',
  '$rootScope',
function(syscall, time, alerts, utils, rootScope) {

  var subscriptions = []
    , configurations = [{ host: 'localhost', port: 6800, encrypt: false }]
    , currentConf = {}
    , timeout = null
    , forceNextUpdate = false;

  var cookieConf = utils.getCookie('aria2conf');
  if (cookieConf) configurations.unshift(cookieConf);

  // update is implemented such that
  // only one syscall at max is ongoing
  // (i.e. serially) so should be private
  // to maintain that invariant
  var update = function() {

    clearTimeout(timeout);
    timeout = null;

    if (!subscriptions.length) {
      timeout = setTimeout(update, time);
      return;
    }

    if (configurations.length) {
      currentConf = configurations.shift();
      syscall.init(currentConf);
    }

    subscriptions = _.filter(subscriptions, function(e) { return !!e });
    var params = _.map(subscriptions, function(s) {
      return {
        methodName: s.name,
        params: s.params && s.params.length ? s.params : undefined
      };
    });


    syscall.invoke({
      name: 'system.multicall',
      params: [params],
      success: function(data) {

        if (configurations.length) {
          // configuration worked, save it in cookie for next time and
          // delete the pipelined configurations!!
          alerts.log('success alas!! saving current configuration');
          configurations = [];
        }

        utils.setCookie('aria2conf', currentConf);

        _.each(data.result, function(d, i) {
          var handle = subscriptions[i];
          if (handle) {
            if (d.code) {
              alerts.addAlert(d.message, 'error');
            }
            handle.cb(d);
            if (handle.once) {
              subscriptions[i] = null;
            }
          }
        });

        rootScope.$apply();

        if (forceNextUpdate) {
          forceNextUpdate = false;
          timeout = setTimeout(update, 0);
        }
        else {
          timeout = setTimeout(update, time);
        }
      },
      error: function() {
        // If some proposed configurations are still in the pipeline then retry
        if (configurations.length) {
          alerts.log('trying another configuration, last one didnt connect');
          timeout = setTimeout(update, 0);
        }
        else {
          alerts.addAlert('<strong>Oh Snap!</strong> Could not connect to the aria2 server, retrying after ' + time / 1000 + ' secs. You might want to recheck the connection settings for your aria2 server by going to settings > connection settings', 'error');
          timeout = setTimeout(update, time);
        }
      }
    });
  };

  // initiate the update loop
  timeout = setTimeout(update, time);

  return {
    // conf can be configuration or array of configurations,
    // each one will be tried one after the other till success,
    // for all options for one conf read rpc/syscall.js
    configure: function(conf) {
      alerts.addAlert('Successfully changed aria2 connection configuration', 'success');

      if (conf instanceof Array)
        configurations = conf;
      else
        configurations = [conf];
    },

    // get current configuration being used
    getConfiguration: function() { return currentConf },

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
