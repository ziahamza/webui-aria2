import angular from "angular";
import $ from "jquery";
import _ from "lodash";

export default angular
  .module("webui.services.deps", [])
  .value("$", $)
  .value("$_", _)
  .value("$json", JSON).name;
