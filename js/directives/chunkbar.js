var draw = function(canvas, chunks, fillStyle) {
  chunks = chunks || [];
  if (!canvas.getContext) {
    console.log('use chunk bar on an canvas implementation!');
    return;
  }
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = fillStyle || "#149BDF";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var x = 0,
     width = canvas.width,
     height = canvas.height;
  chunks.forEach(function(c) {
    var dx = c.ratio * width;
    if (c.show)
      ctx.fillRect(x, 0, dx, height);
    x += dx;
  });
};
// put chunkbar and bitfield attributes in a canvas element
// to use the directive, draw is optional and canvas is
// only drawn when it is true if given
angular
.module('webui.directives.chunkbar', ['webui.services.utils'])
.directive('chunkbar', ['$utils', function(utils) {
  return function(scope, elem, attrs) {
    var bitfield = "", pieces = 0, canDraw = true;
    var update = function() {
      if (canDraw)
        draw(elem[0], utils.getChunksFromHex(bitfield, pieces), attrs.fillStyle);
    };
    scope.$watch(attrs.bitfield, function(bf) {
      bitfield = bf;
      update();
    });
    scope.$watch(attrs.pieces, function(p) {
      pieces = p;
      update();
    });

    if (attrs.draw) {
      scope.$watch(attrs.draw, function(val) {
        canDraw = val;
      });
    }

    update();
  };
}]);
