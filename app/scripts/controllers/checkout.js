'use strict';

/**
 * @ngdoc function
 * @name carritoApp.controller:CheckoutCtrl
 * @description
 * # CheckoutCtrl
 * Controller of the carritoApp
 */
angular.module('carritoApp').controller('CheckoutCtrl', function ($scope, ItemsOnCart, ProductsFactory) {
  localStorage.clear();
  
  // is available
  $scope.isAvailable = function(product) {
    return product.stock > 0;
  };

  // is on cart
  $scope.isOnCart = function(product) {
    return $scope.itemsOnCart.find(product.id) ? true : false;
  };

  // add item 
  $scope.addToCart = function(product) {
    var _product = $scope.itemsOnCart.find(product.id);
    if (_product) {
      $scope.itemsOnCart.replace({
        id: product.id,
        cart: _product.cart + 1
      });
    } else {
      $scope.itemsOnCart.add({
        id: product.id,
        cart: 1
      });
    }
    $scope.products.merge({
      id: product.id,
      stock: product.stock - 1
    });
    $scope.itemsOnCart.save();
  };

  // remove from cart
  $scope.removeFromCart = function(product) {
    var _product = $scope.itemsOnCart.find(product.id);
    if (!_product) {
      throw new Error('product not found');
    }

    if (_product.cart - 1 === 0) {
      $scope.itemsOnCart.remove(product.id);
    } else {
      $scope.itemsOnCart.merge({
        id: product.id,
        cart: _product.cart - 1
      });
    }
    $scope.products.merge({
      id: product.id,
      stock: product.stock + 1
    });
    $scope.itemsOnCart.save();
  };

  // totalItems
  $scope.totalItems = function() {
    var total = 0;
    var items = $scope.itemsOnCart.getAll();
    items.forEach(function(item) {
      total = total + item.cart;
    });
    return total;
  };

  // get total
  $scope.getTotal = function() {
    var total = 0;
    var items = $scope.itemsOnCart.getAll();
    items.forEach(function(item) {
      total = total + (item.cart * $scope.products.find(item.id).price);
    });
    return total;
  };

  // initializers
  $scope.itemsOnCart = new ItemsOnCart(); 
  $scope.products = new ProductsFactory();

});

