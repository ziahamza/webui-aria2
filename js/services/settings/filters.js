angular.module('webui.services.settings.filters', [])
.value('$globalsettingsexclude', [
  "checksum", "index-out", "out", "pause", "select-file"
])
.value('$waitingsettingsexclude', [
  "dry-run", "metalink-base-uri", "parameterized-uri", "pause",
  "piece-length"
])
.value('$activesettingsfilter', [
  "bt-max-peers", "bt-request-peer-speed-limit", "bt-remove-unselected-file",
  "max-download-limit", "max-upload-limit",
]);


