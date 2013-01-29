// returns the relative path from base
angular.module('webui.filters.path', [])
.filter('prelative', function() {
  return function(path, base) {
    return path.replace(/\\/g, '/')
      .replace(base.replace(/\\/, '/'), '.');
  };
});
