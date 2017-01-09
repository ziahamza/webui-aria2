webui.directive("textarea", function() {
  return {
    restrict: "E",
    link: function(scope, element) {
      element.attr(
        "placeholder",
        element.attr("placeholder").replace(/\\n/g, "\n")
      ).bind("keydown keypress", function(event) {
        if (event.ctrlKey && event.which === 13) {
          event.preventDefault();
          scope.$close();
        }
      });
    }
  };
});
