'use strict';

/**
 * @ngdoc service
 * @name carritoApp.itemsOnCart
 * @description
 * # items
 * Factory in the carritoApp.
 * items on cart
 */
angular.module('carritoApp').factory('itemsOnCart', function () {
  var storageId = 'checkout-items';
  return {
    get: function() {
      return JSON.parse(localStorage.getItem(storageId) || '[]');
    },
    set: function(items) {
      return localStorage.setItem(storageId, JSON.stringify(items));
    },
    update: function(product) {
      return (this.getIndex(product.id) === -1) ? this.addProductToCart(product) : this.updateElement(product);
    },
    addProductToCart: function(product) {
      console.log('add product');
      var products = this.get();
      products.push(product);
      this.set(products);
      debugger
    },
    updateElement: function(product) {
                     console.log('update el');
      var el = this.getIndex(product.id);
      var elements = this.get();
      elements[el] = _.merge(elements[el], product);
      this.set(elements);
    },
    getIndex: function(id) {
      return _.indexOf(this.get(), function(p) {
        return p.id === id;
      });
    }
  };
});
