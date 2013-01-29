angular.module('webui.services.modals', [])
.factory('$modals', function() {
  var modals = {};
  return {
    // register a new modal, cb is the function which
    // will further recieve the args when called through
    // invoke
    register: function(name, cb) {
      modals[name] = cb;
    },
    // invoke an already registered modal, false if not found
    invoke: function(name, cb) {
      if (!modals[name]) return false;
      var args = Array.prototype.slice.call(arguments, 1);
      return modals[name].apply({}, args);
    }
  };
});
