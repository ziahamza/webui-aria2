webui.directive("textarea", function() {
  return {
    restrict: "E",
    link: function(scope, element) {
      element.attr(
        "placeholder",
        function(index, placeholder) {
          if (placeholder !== undefined) {
            return placeholder.replace(/\\n/g, "\n");
          } else {
            return placeholder;
          }
        }
      ).bind("keydown keypress", function(event) {
        if (event.ctrlKey && event.which === 13) {
          event.preventDefault();
          scope.$close();
        }
      });
    }
  };
});
