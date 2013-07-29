angular
.module('webui.filters.bytes', [])
.filter('changeLength', function() {
  return function(len, pref) {
    len = parseFloat(len);
    if (len <= (1<<10)) return len.toFixed(1)  + " " + pref;
    else if(len <= (1<<20)) return (len/(1<<10)).toFixed(1) + " K" + pref;
    else if(len <= (1<<30)) return (len/(1<<20)).toFixed(1) + " M" + pref;
    else return (len/(1<<30)).toFixed(1) + " G" + pref;
  };
})
.filter('blength', ['$filter', function(filter) {
  return function(len) {
    return filter('changeLength')(len, 'B');
  };
}])
.filter('bspeed', ['$filter', function(filter) {
  return function(speed) {
    return filter('changeLength')(speed, 'B/s');
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

