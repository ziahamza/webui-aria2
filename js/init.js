var webui = angular.module('webui', [
  'webui.services.utils', 'webui.services.deps', 'webui.services.base64',
  'webui.services.configuration', 'webui.services.rpc',
  'webui.services.modals', 'webui.services.alerts',
  'webui.services.settings', 'webui.services.settings.filters',
  'webui.filters.bytes','webui.filters.url',
  'webui.directives.chunkbar', 'webui.directives.dgraph', 'webui.directives.fselect',
  'webui.ctrls.download', 'webui.ctrls.nav', 'webui.ctrls.modal', 'webui.ctrls.alert',
  'webui.ctrls.props',
  // external deps
  'ui.bootstrap',
  // translate
  'pascalprecht.translate'
]);

function mergeTranslation(translation, base) {
	for (var i in base) {
		if (!base.hasOwnProperty(i)) {
			continue;
		}

		if (!translation[i] || !translation[i].length) {
			translation[i] = base[i];
		}
	}

	return translation;
}

webui.config(['$translateProvider', function ($translateProvider) {
  $translateProvider
      .translations('en_US', translations.en_US)
      .translations('nl_NL', mergeTranslation(translations.nl_NL, translations.en_US))
      .translations('th_TH', mergeTranslation(translations.th_TH, translations.en_US))
      .translations('zh_CN', mergeTranslation(translations.zh_CN, translations.en_US))
      .determinePreferredLanguage();
}]);

$(function() {
  if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
          enumerable: false, configurable: false, writable: false,
          value: function (searchString, position) {
            position = position || 0;
            return this.indexOf(searchString, position) === position;
          }
    });
  }
  angular.bootstrap(document, ['webui'])
});
