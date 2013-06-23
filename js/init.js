var webui = angular.module('webui', [
  'webui.services.utils', 'webui.services.deps', 'webui.services.base64',
  'webui.services.constants', 'webui.services.rpc',
  'webui.services.modals', 'webui.services.alerts',
  'webui.services.settings', 'webui.services.settings.filters',
  'webui.filters.bytes', 'webui.filters.path',
  'webui.directives.chunkbar', 'webui.directives.dgraph', 'webui.directives.fselect',
  'webui.ctrls.download', 'webui.ctrls.nav', 'webui.ctrls.modal', 'webui.ctrls.alert',
  'webui.ctrls.props',
  // external deps
  'ui.bootstrap.collapse', 'ui.bootstrap.dropdownToggle',
  'ui.bootstrap.modal', 'ui.bootstrap.alert'
]);

$(function() {
  angular.bootstrap(document, ['webui'])
});
