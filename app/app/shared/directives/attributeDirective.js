﻿BeetApp
    .directive("attr", function ($compile) {

        var linker = function(scope, element, attrs) {

            element.html("<bt-"+scope.data.type.description+" class='fill-horizontal'></bt-"+scope.data.type.description+">").show() ;

            $compile(element.contents())(scope);
        };

        return {
            restrict: "E",
            link: linker,
            scope: {
                data:'=',
                ngModel:'='
            }
        };



    });
BeetApp
.directive('iconFill', function () {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {
      var object = angular.element(element[0].children[0]);
      if(angular.isDefined(attr.iconFill)) {
        object.load(function () {
          var svg = angular.element(this.getSVGDocument().documentElement);
          svg.attr('fill', attr.iconFill);
        });
      }
    }
  };
});
BeetApp
  .directive('iconColor', function () {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        var object = angular.element(element[0].children[0]);
        if(angular.isDefined(attr.iconColor)) {
          object.load(function () {
            var svg = angular.element(this.getSVGDocument().documentElement);
            svg.attr('color', attr.iconColor);
          });
        }
      }
    };
  });
