angular.module('webui.services.rpc.helpers', [
  'webui.services.deps', 'webui.services.rpc', 'webui.services.alerts'
])
.factory('$rpchelpers', ['$_', '$rpc', '$alerts', function(_, rpc, alerts) {
  var miscellaneous = {version: '', enabledFeatures: []};
  rpc.once('getVersion', [], function(data) { miscellaneous = data[0]});
  return {
    isFeatureEnabled: function(feature) {
      return miscellaneous.enabledFeatures.indexOf(feature) != -1;
    },
    getAria2Version: function() {
      return miscellaneous.version;
    },
    addUris: function(uris, settings, cb) {
      _.each(uris, function(uri) {
        var uri_parsed = [];
        // parse options passed in the URIs. E.g. http://ex1.com/f1.jpg --out=image.jpg --check-integrity
        var uriSettings = _.cloneDeep(settings);
        _.each(uri, function(uri_element) {
          if (uri_element.startsWith('--')) {
            uri_options = uri_element.split(/--|=(.*)/);
            if (uri_options.length > 2) {
              uriSettings[uri_options[2]] = uri_options[3] || 'true';
            }
          }
          else {
            uri_parsed.push(uri_element);
          }
        });
        // passing true to batch all the addUri calls
        rpc.once('addUri', [uri_parsed, uriSettings], cb, true);
      });

      // now dispatch all addUri syscalls
      rpc.forceUpdate();
    },
    addTorrents: function(txts, settings, cb) {
      _.each(txts, function(txt) {
        // passing true to batch all the addUri calls
        rpc.once('addTorrent', [txt, [], settings], cb, true);
      });

      // now dispatch all addUri syscalls
      rpc.forceUpdate();
    },
    addMetalinks: function(txts, settings, cb) {
      _.each(txts, function(txt) {
        // passing true to batch all the addUri calls
        rpc.once('addMetalink', [txt, settings], cb, true);
      });

      // now dispatch all addUri syscalls
      rpc.forceUpdate();
    }
  };
}]);
