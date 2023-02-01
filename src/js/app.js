// WebUI Aria2 is an angular 1.x application
// This file imports all the required modules for the application

// Vendor libraries
import angular from "angular";
import angularTranslate from "angular-translate";
require("libs/angularui-bootstrap-tpls.min");
require("libs/bootstrap-filestyle");
require("libs/jquery.flot.min");
require("libs/jquery.flot.time.min");

// Stylesheets
import "app.scss";

// Services
import serviceAlerts from "services/alerts";
import servideBase64 from "services/base64";
import serviceConfiguration from "services/configuration";
import serviceDeps from "services/deps";
import serviceErrors from "services/errors";
import serviceRpc from "services/rpc/rpc";
import serviceRpcHelpers from "services/rpc/helpers";
import serviceRpcJsoncall from "services/rpc/jsoncall";
import serviceRpcSockcall from "services/rpc/sockcall";
import serviceRpcSyscall from "services/rpc/syscall";
import serviceSettings from "services/settings/settings";
import serviceFilters from "services/settings/filters";
import serviceModals from "services/modals";
import serviceUtils from "services/utils";

// Filters
import filterBytes from "filters/bytes";
import filterUrl from "filters/url";

// Directives
import directiveChunkbar from "directives/chunkbar";
import directiveDgraph from "directives/dgraph";
import directiveFselect from "directives/fselect";
import directiveFileselect from "directives/fileselect";
import directiveTextarea from "directives/textarea";

// Controllers
import ctrlAlert from "ctrls/alert";
import ctrlMain from "ctrls/main";
import ctrlModal from "ctrls/modal";
import ctrlNav from "ctrls/nav";
import ctrlProps from "ctrls/props";

// Translations
require("translate/nl_NL");
require("translate/en_US");
require("translate/th_TH");
require("translate/zh_CN");
require("translate/zh_TW");
require("translate/pl_PL");
require("translate/fr_FR");
require("translate/de_DE");
require("translate/es_ES");
require("translate/ru_RU");
require("translate/it_IT");
require("translate/tr_TR");
require("translate/cs_CZ");
require("translate/fa_IR");
require("translate/id_ID");
require("translate/pt_BR");

var webui = angular.module("webui", [
  serviceUtils,
  serviceDeps,
  serviceErrors,
  servideBase64,
  serviceConfiguration,
  serviceRpc,
  serviceRpcHelpers,
  serviceRpcJsoncall,
  serviceRpcSockcall,
  serviceRpcSyscall,
  serviceModals,
  serviceAlerts,
  serviceSettings,
  serviceFilters,
  filterBytes,
  filterUrl,
  directiveChunkbar,
  directiveDgraph,
  directiveFselect,
  directiveFileselect,
  ctrlAlert,
  ctrlMain,
  ctrlModal,
  ctrlNav,
  ctrlProps,
  // external deps
  "ui.bootstrap",
  // translate
  "pascalprecht.translate"
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

webui.config([
  "$translateProvider",
  "$locationProvider",
  function($translateProvider, $locationProvider) {
    $translateProvider
      .translations("en_US", translations.en_US)
      .translations("nl_NL", mergeTranslation(translations.nl_NL, translations.en_US))
      .translations("th_TH", mergeTranslation(translations.th_TH, translations.en_US))
      .translations("zh_CN", mergeTranslation(translations.zh_CN, translations.en_US))
      .translations("zh_TW", mergeTranslation(translations.zh_TW, translations.en_US))
      .translations("pl_PL", mergeTranslation(translations.pl_PL, translations.en_US))
      .translations("fr_FR", mergeTranslation(translations.fr_FR, translations.en_US))
      .translations("de_DE", mergeTranslation(translations.de_DE, translations.en_US))
      .translations("es_ES", mergeTranslation(translations.es_ES, translations.en_US))
      .translations("ru_RU", mergeTranslation(translations.ru_RU, translations.en_US))
      .translations("it_IT", mergeTranslation(translations.it_IT, translations.en_US))
      .translations("tr_TR", mergeTranslation(translations.tr_TR, translations.en_US))
      .translations("cs_CZ", mergeTranslation(translations.cs_CZ, translations.en_US))
      .translations("fa_IR", mergeTranslation(translations.fa_IR, translations.en_US))
      .translations("id_ID", mergeTranslation(translations.id_ID, translations.en_US))
      .translations("pt_BR", mergeTranslation(translations.pt_BR, translations.en_US))
      .useSanitizeValueStrategy("escapeParameters")
      .determinePreferredLanguage();

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
]);

webui.directive("textarea", directiveTextarea);

if ("serviceWorker" in navigator && location.protocol === "https:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(registration => {
        console.log("SW registered: ", registration);
      })
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

$(function() {
  if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, "startsWith", {
      enumerable: false,
      configurable: false,
      writable: false,
      value: function(searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
      }
    });
  }
  angular.bootstrap(document, ["webui"]);
});
