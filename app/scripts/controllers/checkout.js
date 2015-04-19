'use strict';

/**
 * @ngdoc function
 * @name carritoApp.controller:CheckoutCtrl
 * @description
 * # CheckoutCtrl
 * Controller of the carritoApp
 */
angular.module('carritoApp').controller('CheckoutCtrl', function ($scope, itemsFactory, productsFactory) {


  localStorage.clear();

  // watch items
  $scope.$watch('items', function( n, o) {
    if (n !== o) {
      itemsFactory.set( $scope.items );
    }
  }, true);

  // watch products
  $scope.$watch('products');

  // total Items
  $scope.totalItems = function() {
    var total = 0;
    $scope.items.forEach(function(_item) {
      total = parseInt(total) + parseInt(_item.onCart);
    });
    return total;
  };

  // get items total
  $scope.getTotal = function() {
    var total = 0;
    itemsFactory.get().forEach(function(item) {
      total = ( parseFloat(total) + (parseFloat(item.price) * parseFloat(item.onCart)) ).toFixed(2);
    });
    return total;
  };

  // add item
  $scope.addItem = function(item) {
    if ($scope.exists(item)) {
      $scope.items.forEach(function(_item, index) {
        if (_item.id == item.id) {
          $scope.items[index].stock = $scope.items[index].stock - 1;
          $scope.items[index].onCart = $scope.items[index].onCart + 1;
        }
      });
    } else {
      item.stock = item.stock - 1;
      item.onCart = item.onCart + 1;
      $scope.items.push(item);
    }
  };

  // item exits
  $scope.exists = function(_item) {
    return $scope.items.filter(function(_item_) {
      return _item_.id === _item.id;
    }).length > 0;
  };

  // is available
  $scope.isAvailable = function(item) {
    return item.stock > 0;
  };

  // initializers
  $scope.items = itemsFactory.get();
  $scope.products = productsFactory.get();
  $scope.products.forEach(function(_item) {
    _item.onCart = _item.onCart || 0;
  });
});
