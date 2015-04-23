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
      if (this.validateAll(items)) {
        return true;
      } else {
        return false;
      }
      // return localStorage.setItem(storageId, JSON.stringify(items));
    },

    update: function(product) {
      return product;
    },

    remove: function(productId) {
      return productId;
    },

    add: function(product) {
      if (this.isValid(product) && !this.find(product.id)) {
        var items = this.get();
        items.push(product);
        this.set(items);
        return true;
      }
      return false;
    },

    /**
     * this.isValid()
     * check if a element is parsed correctly
     * @param {product} [Object]
     * @return {true|false} [boolean]
     * */
    isValid: function(product) {
      return _.isPlainObject(product) && _.has(product, 'id')  &&
        _.has(product, 'onCart') && _.keys(product).length === 2 &&
        !this.find(product.id);
    },

    /**
     * this.validateAll()
     * search for all valid elements inside an array
     * @param {_items} [Array]
     * @return {true|false} [boolean]
     * */
    validateAll: function(_items) {
      var error = 0;
      _items.forEach(function(p) {
        console.log(this);
        console.log(p);
      });
      return error === 0;
    },

    /**
     * this.find()
     * finds product
     * it looks for a product id match inside the elements array
     * @param {productId} [int]
     * @return {true|false} [boolean]
     * @see this.get()
     * */
    find: function(productId) {
      return _.findIndex(this.get(), function(p) {
        return p.id === productId;
      }) !== -1;
    }

  };
});

