'use strict';

/**
 * @ngdoc directive
 * @name carritoApp.directive:carritoWidget
 * @description
 * # carritoWidget
 */
angular.module('carritoApp').directive('carritoWidget', function () {
  return {
    templateUrl: 'views/carrito-widget.html',
    restrict: 'E'
  };
});
