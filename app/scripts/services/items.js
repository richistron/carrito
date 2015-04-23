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
  // local storage string id
  var storageId = 'checkout-items';

  return {
    get: function() {
      return JSON.parse(localStorage.getItem(storageId) || '[]');
    },

    set: function(items) {
      return localStorage.setItem(storageId, JSON.stringify(items));
    },

    update: function(product) {
      return product;
    },

    remove: function(productId) {
      return productId;
    },

    add: function(product) {
      if (this.isValid(product) && !this.find(product.id) {
        return true;
      }
      return false;
    },

    isValid: function(product) {
      return _.isPlainObject(product) && _.has(product, 'id')  && _.has(product, 'onCart') && _.keys(product).length === 2;
    },

    find: function(productId) {
      return _.findIndex(this.get(), function(p) {
        p.id === productId;
      }) !== -1;
    }

  };
});

