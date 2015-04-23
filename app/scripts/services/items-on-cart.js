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

    /**
     * this.get()
     * returns all elements on the factory
     * @return {itemsOnCart} [Array]
     * */
    get: function() {
      return JSON.parse(localStorage.getItem(storageId) || '[]');
    },

    /**
     * this.set()
     * save a items collection
     * @param {items} [Array]
     * @return {Boolean}
     * */
    set: function(items) {
      return localStorage.setItem(storageId, JSON.stringify(items));
    },

    /**
     * this.validateAll()
     * search for all valid elements inside an array
     * @param {_items} [Array]
     * @return {Boolean}
     * */
    validateAll: function(_items) {
      var error = 0;
      _items.forEach((function(_this){
        return function(p) {
          if (!_this.isValid(p)) {
            error++;
          }
        };
      })(this));
      return error === 0;
    },

    /**
     * this.reset()
     * reset items collection
     * @return {undefined}
     * */
    reset: function() {
      localStorage.setItem(storageId, '[]');
    },

    /**
     * this.update()
     * updates a element inside items collection
     * @param {product} [Object]
     * @return {Boolean}
     * */
    update: function(product) {
      if (this.isValid(product) && this.find(product.id)) {
        var index = _.findIndex(this.get(), function(p) {
          return p.id === product.id;
        });
        var items = this.get();
        items[index] = _.merge(items[index], product);
        this.set( items );
        return true;
      }
      return false;
    },

    /**
     * this.remove()
     * removes an element inside items collection
     * @param {prodcutId} [Int]
     * @return {Boolean}
     * */
    remove: function(productId) {
      if (this.find(productId)) {
        this.set( _.remove(this.get(), _.findIndex(this.get(), function(p) {
          return p.id === productId;
        })));
        return true;
      }
      return false;
    },

    /**
     * this.add()
     * adds a new element to the collection
     * @param {product} [Object]
     * @return {Boolean}
     * */
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
     * @return {Boolean}
     * */
    isValid: function(product) {
      return _.isPlainObject(product) && _.has(product, 'id')  &&
        _.has(product, 'onCart') && _.keys(product).length === 2;
    },

    /**
     * this.find()
     * finds product
     * it looks for a product id match inside the elements array
     * @param {productId} [int]
     * @return {Boolean}
     * */
    find: function(productId) {
      return this.get().length > 0 && _.findIndex(this.get(), function(p) {
        return p.id === productId;
      }) !== -1;
    }

  };
});

