// graph takes dspeed and uspeed, it queries them every second and draws
// the last 20 secs, it also takes draw as an optional attribute and only
// draws the graph when it is true, if not given then graph is always drawn
angular
.module('webui.directives.dgraph', ['webui.filters.bytes', 'webui.services.deps'])
.directive('dgraph', ['$', '$filter', '$parse', function($, filter, parse) {
  return function(scope, elem, attrs) {
    var canDraw = true;

    var graphSize = 20
      , dspeed = 0, uspeed = 0
      , dconf = {
        label: "Download Speed",
        data: [],
        color: "#ff0000",
        lines: { show: true }
      }
      , uconf = {
        label: "Upload Speed",
        data: [],
        color: "#00ff00",
        lines: { show: true }
      },
      start = new Date
    ;


    // hack for the null height for flot elem
    elem.height(elem.width() / 2);

    var graph = $.plot(elem, [dconf, uconf], {
      legend: { show: true },
      xaxis: {
        show: true
      },
      yaxis: {
        tickFormatter: function(val, axis) {
          return filter('bspeed')(val);
        }
        ,
        min: 0
      }
    });

    var draw = function() {
      var width = elem.width();
      if (width == 0) return;

      elem.height(width / 2);

      graph.setData([dconf, uconf]);
      graph.resize();
      graph.setupGrid();
      graph.draw();
    };

    function update() {
      var cnt = ((new Date - start)/1000).toFixed(0);

      dconf.data.push([cnt, dspeed]);
      if (dconf.data.length > graphSize) dconf.data.shift();

      uconf.data.push([cnt, uspeed]);
      if (uconf.data.length > graphSize) uconf.data.shift();

      // if any parents is collapsable, then confirm if it isnt
      if (canDraw)
        draw();
    };

    scope.$watch(attrs.dspeed, function(val) {
      dspeed = parseFloat(val) || 0;
    });

    scope.$watch(attrs.uspeed, function(val) {
      uspeed = parseFloat(val) || 0;
    });

    if (attrs.draw) {
      scope.$watch(attrs.draw, function(val) {
        canDraw = val;
      });
    }

    var interval = setInterval(update, 1000);

    angular.element(window).bind('resize', draw);
    elem.bind('$destroy', function() {
      clearInterval(interval);
    });

  };
}]);
