angular.module('webui.filters.bytes', ["webui.services.utils"])
.filter('blength', ['$filter', "$utils", function(filter, utils) {
  return utils.fmtsize;
}])
.filter('bspeed', ['$filter', "$utils", function(filter, utils) {
  return utils.fmtspeed;
}])
.filter('time', function() {
  function pad(f) {
    return ("0" + f).substr(-2);
  }

  return function(time) {
    time = parseInt(time, 10);
    if (!time || !isFinite(time)) return "∞";
    var secs = time % 60;
    if (time < 60) return secs + "s";
    var mins = Math.floor((time % 3600) / 60)
    if (time < 3600) return pad(mins) + ":" + pad(secs);
    var hrs = Math.floor((time % 86400) / 3600);
    if (time < 86400) return pad(hrs) + ":" + pad(mins) + ":" + pad(secs);
    var days = Math.floor(time / 86400);
    return days + "::" +  pad(hrs) + ":" + pad(mins) + ":" + pad(secs);
  };
});
