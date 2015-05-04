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
    function ItemsOnCart(clean) {
      this.storageId = 'checkout-items';
      this.load(clean);
    }

    // extend BaseCollection
    ItemsOnCart.prototype = Object.create(proto);

    return ItemsOnCart;
  })(BaseCollection.prototype);

  return ItemsOnCart;
});

