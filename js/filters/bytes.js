(function() {
  function fmtlen(len) {
    len = +len; // coerce to number
    if (len <= 1024) {
      return len.toFixed(0)  + " B";
    }
    len /= 1024;
    if (len <= 1024) {
      return len.toFixed(1) + " KB"
    }
    len /= 1024;
    if (len <= 1024) {
      return len.toFixed(2) + " MB";
    }
    len /= 1024;
    return len.toFixed(3) + " GB";
  }

  angular .module('webui.filters.bytes', [])
  .filter('blength', ['$filter', function(filter) {
    return fmtlen;
  }])
  .filter('bspeed', ['$filter', function(filter) {
    return function(speed) {
      return fmtlen(speed) + "/s";
    };
  }])
  .filter('time', function() {
    function pad(f) {
      return ("0" + f).substr(-2);
    }

    return function(time) {
      time = parseInt(time, 10);
      if (!time || !isFinite(time)) return "∞";
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
})();

