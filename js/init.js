angular.module('webui', [
  'webui.services.utils', 'webui.services.deps', 'webui.services.base64',
  'webui.services.constants', 'webui.services.rpc',
  'webui.filters.bytes', 'webui.filters.path',
  'webui.directives.chunkbar', 'webui.directives.dgraph',
  'webui.ctrls.download', 'webui.ctrls.nav', 'webui.ctrls.modal'
]);

$(function() {
  angular.bootstrap(document, [
    // external deps
    'ui.bootstrap.collapse', 'ui.bootstrap.dropdownToggle',
    'webui'
  ])
});
