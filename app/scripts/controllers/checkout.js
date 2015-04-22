'use strict';

/**
 * @ngdoc function
 * @name carritoApp.controller:CheckoutCtrl
 * @description
 * # CheckoutCtrl
 * Controller of the carritoApp
 */
angular.module('carritoApp').controller('CheckoutCtrl', function ($scope, itemsOnCart, productsFactory) {
  localStorage.clear();
  

  // watchers
  // $scope.$watch('products', function(n,o) {
    // if (n !== o) {
      // itemsOnCart.set( $scope.itemsOnCart );
    // }
  // }, true );

  // is available
  $scope.isAvailable = function(product) {
    return product.stock > 0;
  };

  // is on cart
  $scope.isOnCart = function(product) {
    return $scope.itemsOnCart.filter(function(item) {
      return item.id === product.id;
    }).length > 0;
  };

  // add item 
  $scope.addToCart = function(product) {
    itemsOnCart.update(product);
    // return $scope.products;
  };

  // remove from cart
  $scope.removeFromCart = function(product) {
    return product;
  };

  // tools
  $scope._itemExists = function(collection, product) {
    return collection.filter(function(item) {
      return item.id === product.id;
    }).length > 0;
  };

  // initializers
  $scope.itemsOnCart = itemsOnCart.get();
  $scope.products = productsFactory.get();
});
