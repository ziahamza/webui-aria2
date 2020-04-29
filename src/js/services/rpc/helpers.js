import angular from "angular";

export default angular
  .module("webui.services.rpc.helpers", [
    "webui.services.deps",
    "webui.services.rpc",
    "webui.services.alerts"
  ])
  .factory("$rpchelpers", [
    "$_",
    "$rpc",
    "$alerts",
    function(_, rpc, alerts) {
      var miscellaneous = { version: "", enabledFeatures: [] };
      rpc.once("getVersion", [], function(data) {
        miscellaneous = data[0];
      });

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
              if (uri_element.startsWith("--")) {
                var uri_options = uri_element.split(/--|=(.*)/);
                if (uri_options.length > 2) {
                  uriSettings[uri_options[2]] = uri_options[3] || "true";
                }
              } else {
                uri_parsed.push(uri_element);
              }
            });
            // passing true to batch all the addUri calls
            rpc.once("addUri", [uri_parsed, uriSettings], cb, true);
          });

          // now dispatch all addUri syscalls
          rpc.forceUpdate();
        },
        addTorrents: function(txts, settings, cb) {
          _.each(txts, function(txt) {
            // passing true to batch all the addUri calls
            rpc.once("addTorrent", [txt, [], settings], cb, true);
          });

          // now dispatch all addUri syscalls
          rpc.forceUpdate();
        },
        addMetalinks: function(txts, settings, cb) {
          _.each(txts, function(txt) {
            // passing true to batch all the addUri calls
            rpc.once("addMetalink", [txt, settings], cb, true);
          });

          // now dispatch all addUri syscalls
          rpc.forceUpdate();
        },
        // copied from main.js
        restart: function(d) {
          // assumes downloads which are started by URIs, not torrents.
          // the preferences are also not transferred, just simple restart
          var thisService = this;
          rpc.once("getOption", [d.gid], function(data) {
            var prefs = data[0];
            rpc.once("getFiles", [d.gid], function(data) {
              var files = data[0];
              var uris = _.chain(files)
                .map(function(f) {
                  return f.uris;
                })
                .filter(function(uris) {
                  return uris && uris.length;
                })
                .map(function(uris) {
                  var u = _.chain(uris)
                    .map(function(u) {
                      return u.uri;
                    })
                    .uniq()
                    .value();
                  return u;
                })
                .value();

              if (uris.length > 0) {
                console.log("adding uris:", uris, prefs);
                thisService.remove(
                  d,
                  function() {
                    thisService.addUris(uris, prefs);
                  },
                  true
                );
              }
            });
          });
        },
        canRestart: function(d) {
          return ["active", "paused"].indexOf(d.status) == -1 && !d.bittorrent;
        },
        // remove the download,
        // put it in stopped list if active,
        // otherwise permanantly remove it
        // d: the download ctx
        remove: function(d, cb, noConfirm) {
          // HACK to make sure an angular digest is not running, as only one can happen at a time, and confirm is a blocking
          var thisService = this;
          // call so an rpc response can also trigger a digest call
          setTimeout(function() {
            if (
              !noConfirm &&
              !confirm(
                filter("translate")("Remove {{name}} and associated meta-data?", { name: d.name })
              )
            ) {
              return;
            }

            var method = "remove";

            if (thisService.getType(d) == "stopped") method = "removeDownloadResult";

            if (d.followedFrom) {
              thisService.remove(d.followedFrom, function() {}, true);
              d.followedFrom = null;
            }
            rpc.once(method, [d.gid], cb);
          }, 0);
        },
        getType: function(d) {
          var type = d.status;
          if (type == "paused") type = "waiting";
          if (["error", "removed", "complete"].indexOf(type) != -1) type = "stopped";
          return type;
        }
      };
    }
  ]).name;
