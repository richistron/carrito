'use strict';

/**
 * @ngdoc service
 * @name carritoApp.itemsOnCart
 * @description
 * # items
 * Factory in the carritoApp.
 * items on cart
 */
angular.module('carritoApp').factory('ItemsOnCart', function (BaseCollection) {
  // class ItemOnCart
  var ItemsOnCart = (function(proto) {

    // constructor
    function ItemsOnCart() {
      this.storageId = 'checkout-items';
      this.load();
    }

    // extend BaseCollection
    ItemsOnCart.prototype = Object.create(proto);

    // load
    ItemsOnCart.prototype.load = function() {
      this.attributes = {};
      var items = JSON.parse(localStorage.getItem(this.storageId) || '[]');
      items.forEach((function(_this) {
        return function(i) {
          _this.add(i);
        };
      })(this));
    };

    // save
    ItemsOnCart.prototype.save = function() {
      localStorage.setItem(this.storageId, JSON.stringify(this.getAll()));
    };

    return ItemsOnCart;
  })(BaseCollection.prototype);

  return ItemsOnCart;
});

