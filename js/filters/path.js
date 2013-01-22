// returns the relative path from base
app.filter('prelative', function() {
  return function(path, base) {
    return path.replace(/\\/g, '/')
      .replace(base.replace(/\\/, '/'), '.');
  };
});
