angular.module('webui.filters.url', ["webui.services.utils"])
.filter('encodeURI', function() {
  return window.encodeURI;
});
