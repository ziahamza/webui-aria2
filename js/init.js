var app = angular.module('app', []);

$(function() {
  angular.bootstrap(document, [
    // external deps
    'ui.bootstrap.collapse', 'ui.bootstrap.dropdownToggle',

    'app'
  ])
});
