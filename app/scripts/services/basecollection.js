'use strict';

/**
 * @ngdoc service
 * @name carritoApp.BaseCollection
 * @description
 * # BaseCollection
 * Factory in the carritoApp.
 */
angular.module('carritoApp').factory('BaseCollection', function () {

  // BaseCollection Class
  var BaseCollection = (function() {

    // constructor
    function BaseCollection(collection) {
      this.setup(collection);
    }

    // setup
    BaseCollection.prototype.setup = function(collection) {
      if (!Array.isArray(collection) || collection.length === 0) {
        throw new Error('collection must be an array');
      }

      this.attributes = {};

      collection.forEach((function(_this) {
        return function(i) {
          if (!i.id) {
            throw new Error('all items should contain and id');
          }
          if (_this.attributes[_this.getPrefix(i.id)]) {
            throw new Error('duplicated id');
          } else {
            _this.attributes[_this.getPrefix(i.id)] = i;
          }
        };
      })(this));
    };

    // set prefix
    BaseCollection.prototype.getPrefix = function(id) {
      if (isNaN(id)) {
        throw new Error('id is not a number');
      }
      return 'item-' + id;
    };

    // find item
    BaseCollection.prototype.find = function(id) {
      return this.attributes[this.getPrefix(id)] || false;
    };

    // replace item
    BaseCollection.prototype.replace = function(data) {
      var item = this.find(data.id);
      if (!item) {
        throw new Error('object does not exists');
      }
      this.attributes[this.getPrefix(data.id)] = data;
    };

    // merge item
    BaseCollection.prototype.merge = function(data) {
      var item = this.find(data.id);
      if (!item) {
        throw new Error('object does not exists');
      }
      this.attributes[this.getPrefix(data.id)] = _.merge(item, data);
    };

    // get all items
    BaseCollection.prototype.getAll = function() {
      var items = [];
      for(var key in this.attributes) {
        items.push(this.attributes[key]);
      }
      return items;
    };

    // reset collection
    BaseCollection.prototype.reset = function(collection) {
      if (this.validateCollection(collection)) {
        this.setup(collection);
      } else {
        throw new Error('invalid collection');
      }
    };

    // validate collection
    BaseCollection.prototype.validateCollection = function(collection) {
      var error = false, ids = [];
      if (!Array.isArray(collection) || collection.length === 0) {
        error = true;
      }
      collection.forEach(function(item) {
        if (!item.id || ids['item-' + item.id]) {
          error = true;
        } else {
          ids['item-' + item.id] = true;
        }
      });
      if (error) {
        return false;
      }
      return true;
    };

    // add item
    BaseCollection.prototype.add = function(item) {
      if (!item.id || this.find(item.id)) {
        throw new Error('Duplicated or id not defined');
      }
      this.attributes[this.getPrefix(item.id)] = item;
      return this;
    };


    BaseCollection.prototype.remove = function(id) {
      if (this.attributes[this.getPrefix(id)]) {
        delete this.attributes[this.getPrefix(id)];
        return true;
      }
      return false;
    };

    return BaseCollection;
  })();

  
  return BaseCollection;

});

