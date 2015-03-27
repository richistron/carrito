'use strict';

/**
 * @ngdoc directive
 * @name carritoApp.directive:productGrid
 * @description
 * # productGrid
 */
angular.module('carritoApp').directive('productGrid', function (products) {
  return {
    templateUrl: 'views/product-grid.html',
    restrict: 'E',
    link: function($scope){
      $scope.products = products.get();
    }
  };
});
