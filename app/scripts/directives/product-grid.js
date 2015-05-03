'use strict';

/**
 * @ngdoc directive
 * @name carritoApp.directive:productGrid
 * @description
 * # productGrid
 */
angular.module('carritoApp').directive('productGrid', function () {
  return {
    templateUrl: 'views/product-grid.html',
    restrict: 'E'
  };
});
