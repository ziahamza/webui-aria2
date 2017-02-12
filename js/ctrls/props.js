angular.module('webui.ctrls.props', [
  'webui.services.utils', 'webui.services.settings', 'webui.services.deps',
  'webui.services.rpc', 'webui.services.configuration',
])
.controller('StarredPropsCtrl', ['$scope', '$_', '$utils', '$rpc', '$globalSettings', '$fileSettings', '$starredProps',
  function(scope, _, utils, rpc, gsettings, fsettings, starredProps) {
  scope._props = [];
  scope.dirty = true;
  scope.properties = [];
  scope.getProps = function() {
    var props = utils.getCookie('aria2props');
    if (!props || !props.indexOf) props = starredProps; // default properties starred in the global configuration file

    return props;
  };

  scope.enabled = function() {
    for (var i = 0; i < scope.properties.length; i++) {
      if (scope.properties[i]._val != scope.properties[i].val) return true;
    }

    return false;
  }

  scope.save = function() {
    var sets = {};
    var found = false;
    for (var i = 0; i < scope.properties.length; i++) {
      if (scope.properties[i]._val != scope.properties[i].val) {
        sets[scope.properties[i].name] = scope.properties[i].val;
        found = true;
      }
    }

    if (found) {
      rpc.once('changeGlobalOption', [sets]);
    }
  }

  rpc.subscribe('getGlobalOption', [], function(data) {
    var vals = data[0];
    var props = scope.getProps();
    var arr = [];

    for (var i = 0; i < props.length; i++) {
      var set = {};
      if (props[i] in gsettings) {
        set = gsettings[props[i]];
        if (props[i] in vals) {
          set.val = vals[props[i]];
        }
        set.name = props[i];
        arr.push(set);
      }
      else if (props[i] in fsettings) {
        set = fsettings[props[i]];
        if (props[i] in vals) {
          set.val = vals[props[i]];
        }
        set.name = props[i];
        arr.push(set);
      }
      else if (props[i] in vals) {
        arr.push({name: props[i], val: vals[props[i]]});
      }
    }


    utils.mergeMap(arr, scope.properties, function(prop, nprop) {
      nprop = nprop || {};
      nprop.name = prop.name;
      nprop.options = prop.options;
      nprop.multiline = prop.multiline;
      if (nprop._val == nprop.val || nprop.val == prop.val) {
        nprop._val = prop.val;
        nprop.val = prop.val;
      }
      else {
        nprop._val = prop.val;
      }
      nprop.desc = prop.desc;
      return nprop;
    });
  });
}]);
