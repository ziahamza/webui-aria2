// graph takes dspeed and uspeed, it queries them every second and draws
// the last 180 secs, it also takes draw as an optional attribute and only
// draws the graph when it is true, if not given then graph is always drawn
angular
.module('webui.directives.dgraph', ['webui.filters.bytes', 'webui.services.deps'])
.directive('dgraph', ['$', '$filter', '$parse', function($, filter, parse) {
  var ratio = 0.6;
  var xfmt = "%H:%M:%S";
  var yTicks = 7; // Number of y-axis ticks (sans 0)
  var xticks = 10; // Number of x-axis ticks (sans 0)
  var yTickBase = 10240; // y-axis ticks must be a multiple of this (bytes).
  try {
    // Try to detect AM/PM locales.
    if (!/16/.test(new Date(2000,0,1,16,7,9).toLocaleTimeString())) {
      xfmt = "%I:%M:%S %P";
    }
  }
  catch (ex) {
    // Ignore. Browser does not support toLocaleTimeString.
  }

  return function(scope, elem, attrs) {
    var canDraw = false;

    var graphSize = 180
      , dspeed = 0, uspeed = 0, hasSpeeds = false
      , dconf = {
        label: "DOWN",
        data: [],
        color: "#00ff00",
        lines: { show: true }
      }
      , uconf = {
        label: "UP",
        data: [],
        color: "#0000ff",
        lines: { show: true }
      }
    ;

    // hack for the null height for flot elem
    elem.height(elem.width() * ratio);
    var graph = $.plot(elem, [dconf, uconf], {
      legend: {
        show: (attrs.nolabel == undefined),
        backgroundOpacity: 0,
        margin: [10, 20],
        labelFormatter: function(label, series) {
          if (!series.data.length) {
            return label;
          }
          return label + " (" + filter("bspeed")(series.data[series.data.length-1][1]) + ")";
        },
        position: "sw"
      },
      xaxis: {
        show: true,
        mode: "time",
        timeformat: xfmt,
        ticks: +attrs.xticks || xticks,  // allow users of the directive to overwride xticks
        minTickSize: [30, "second"] // 180 / 30 == 6
      },
      yaxis: {
        position: "right",
        ticks: function(axis) {
          var res = [0];
          yt = +attrs.yticks || yticks; // allow users of directive to overwride yticks

          var step = yTickBase * Math.max(1, Math.ceil(axis.max / (yt * yTickBase)))

          for (var s = 0; s < yt; s++) {
            var c = step * s;
            if (c > axis.max)
              break;

            res.push(step * s);
          }

          return res;
        },
        tickFormatter: function(val, axis) {
          return filter('bspeed')(val);
        },
        min: 0
      }
    });

    var draw = function() {
      var width = elem.width();
      if (width == 0) return;

      elem.height(width * ratio);

      graph.setData([dconf, uconf]);
      graph.resize();
      graph.setupGrid();
      graph.draw();
    };

    function update() {
      if (!hasSpeeds) {
        return;
      }

      // Convoluted way to get the local date timestamp instead of the UTC one.
      var cnt = new Date();
      cnt = Date.UTC(
        cnt.getFullYear(),
        cnt.getMonth(),
        cnt.getDate(),
        cnt.getHours(),
        cnt.getMinutes(),
        cnt.getSeconds());

      if (dconf.data.length === graphSize) dconf.data.shift();
      dconf.data.push([cnt, dspeed]);

      if (uconf.data.length === graphSize) uconf.data.shift();
      uconf.data.push([cnt, uspeed]);

      // if any parents is collapsable, then confirm if it isnt
      if (canDraw) {
        draw();
      }
    };

    scope.$watch(attrs.dspeed, function(val) {
      if (val === undefined) {
        return;
      }
      hasSpeeds = true;
      dspeed = parseFloat(val) || 0;
    });

    scope.$watch(attrs.uspeed, function(val) {
      if (val === undefined) {
        return;
      }
      hasSpeeds = true;
      uspeed = parseFloat(val) || 0;
    });

    scope.$watch(attrs.draw, function(val) {
      canDraw = val;
    });

    var interval = setInterval(update, 1000);

    angular.element(window).bind('resize', draw);
    elem.bind('$destroy', function() {
      clearInterval(interval);
    });

  };
}]);
