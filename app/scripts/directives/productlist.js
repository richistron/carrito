'use strict';

/**
 * @ngdoc directive
 * @name carritoApp.directive:productList
 * @description
 * # productList
 */
angular.module('carritoApp')
  .directive('productList', function ($compile, products) {
    console.log(products);
    return {
      templateUrl: 'views/productlist.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.products = products;
      }
    };
  });
