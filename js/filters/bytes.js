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
  return function(time) {
    time = parseFloat(time);
    if (isNaN(time) || !isFinite(time)) return " infinite";
    if (!time) return " infinite";
    if (time < 60) return time.toFixed(2) + " s";
    else if (time < 60*60) return (time/60).toFixed(2) + " min";
    else if (time < 60*60*24) return (time/(60*60)).toFixed(2) + " hours";
    else return (time/(60*60*24)).toFixed(2) + " days!";
  };
});

