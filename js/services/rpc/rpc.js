app.factory('$rpc', ['$syscall', '$globalTimeout', function(syscall, time) {
  var subscriptions = []
    , configurations = [{ host: 'localhost', port: 6800 }]
    , timeout = null
    , forceNextUpdate = false;


  // update is implemented such that
  // only one syscall at max is ongoing
  // (i.e. serially) so should be private
  // to maintain that invariant
  var update = function() {
    if (!subscriptions.length)
      return;

    if (configurations.length)
      syscall.init(configurations.pop());

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
        // configuration worked, leave this as it is
        configurations = [];
        _.each(data.result, function(d, i) {
          var handle = subscriptions[i];
          if (handle) {
            handle.cb(d);
            if (handle.once) {
              subscriptions[i] = null;
            }
          }
        });

        if (forceNextUpdate) {
          forceNextUpdate = false;
          return update();
        }
        timeout = setTimeout(update, time);
      },
      error: function() {
        // If some proposed configurations are still in the pipeline then retry
        if (configurations.length) update();
        else {
          console.log('cannot connect!!!');
          timeout = setTimeout(update, time);
        }
      }
    });
  }
  return {
    // conf can be configuration or array of configurations,
    // each one will be tried one after the other till success,
    // for all options for one conf read rpc/syscall.js
    configure: function(conf) {
      if (conf instanceof Array)
        configurations = conf;
      else
        configurations = [conf];
    },
    // syscall is done only once
    once: function(name, params, cb) {
      cb = cb || angular.noop;
      params = params || [];

      subscriptions.push({
        once: true,
        name: 'aria2.' + name,
        params: params,
        cb: cb
      });

      this.forceUpdate();
    },

    // callback is called each time with updated syscall data
    // after the global timeout
    subscribe: function(name, params, cb) {
      cb = cb || angular.noop;
      params = params || [];

      var handle = {
        once: false,
        name: 'aria2.' + name,
        params: params,
        cb: cb
      };
      subscriptions.push(handle);

      this.forceUpdate();

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
        timeout = null;
        update();
      }
      else if (subscriptions.length) {
        update();
      }
      else {
        // a batch call is already in progress,
        // wait till it returns and force the next one
        forceNextUpdate = true;
      }
    }
  };
}]);
