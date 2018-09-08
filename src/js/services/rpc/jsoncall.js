import angular from "angular";

export default angular
  .module("webui.services.rpc.jsoncall", ["webui.services.deps", "webui.services.base64"])
  .factory("$jsoncall", [
    "$",
    "$json",
    "$base64",
    function($, JSON, base64) {
      return {
        init: function(conf) {
          this.avgTimeout = 2000;
          this.serverConf = conf;
        },
        ariaRequest: function(url, funcName, params, success, error) {
          var startTime = new Date();
          var conn = this;
          $.post({
            url: url,
            timeout: this.avgTimeout,
            contentType: "application/json",
            data: JSON.stringify({
              jsonrpc: 2.0,
              id: "webui",
              method: funcName,
              params: params
            }),
            success: function(data) {
              conn.avgTimeout = 2000 + 3 * (new Date() - startTime);
              return success(data);
            },
            error: error
          });
        },
        invoke: function(opts) {
          var rpc = this;
          var scheme = rpc.serverConf.encrypt ? "https" : "http";
          rpc.ariaRequest(
            scheme +
              "://" +
              rpc.serverConf.host +
              ":" +
              rpc.serverConf.port +
              (rpc.serverConf.path || "/jsonrpc"),
            opts.name,
            opts.params,
            opts.success,
            function() {
              // check if authentication details are given, if yes then use a hack to support
              // http authentication otherwise emit error
              if (!rpc.serverConf.auth || !rpc.serverConf.auth.user) {
                console.log("jsonrpc disconnect!!!");
                return opts.error();
              }

              var authUrl =
                scheme +
                "://" +
                rpc.serverConf.auth.user +
                ":" +
                rpc.serverConf.auth.pass +
                "@" +
                rpc.serverConf.host +
                ":" +
                rpc.serverConf.port +
                (rpc.serverConf.path || "/jsonrpc");

              // hack is to basically inject an image with same uri as the aria2 rpc url,
              // most browsers will then cache the authentication details and we dont have
              // to give them next time we make a request
              var img = $("<img/>").attr("src", authUrl);
              $("body").append(img);
              img.remove();

              // timeout to let the image load and then make a request,
              setTimeout(function() {
                rpc.ariaRequest(authUrl, opts.name, opts.params, opts.success, function() {
                  console.log("jsonrpc disconnect!!!");
                  return opts.error();
                });
              }, rpc.avgTimeout);
            }
          );
        }
      };
    }
  ]).name;
