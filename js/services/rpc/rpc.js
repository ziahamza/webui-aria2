app.factory('$rpc', ['$syscall', '$globalTimeout', function(syscall, time) {
  var subscriptions = [],
      timeout = null,
      forceNextUpdate = false;

  syscall.init({
    host: 'localhost',
    port: 6800
  });

  // update is implemented such that
  // only one syscall at max is ongoing
  // (i.e. serially) so should be private
  // to maintain that invariant
  var update = function() {
    if (!subscriptions.length) return;

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
        // TODO: implement a retry error handler
        //   which would also look for other suitable
        //   connection configurations for the connection
      }
    });
  }
  return {
    // change the connection configuration,
    // for all options read rpc/syscall.js
    configure: function(conf) {
      syscall.init(conf);
    },
    // syscall is done only once
    once: function(name, params, cb) {
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
