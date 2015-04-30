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
  function BaseCollection(collection) {
    this.setup(collection);
  }

  // setup constructor
  BaseCollection.prototype.setup = function(collection) {
    if (!Array.isArray(collection)) {
      throw new Error('collection must be an array');
    }

    collection.foreach(function(i) {
      if (!i.id) {
        throw new Error('all items should contain and id');
      }
      this.attributes[this.setPrefix(i.id)] = i;
    });
  };

  // set prefix
  BaseCollection.prototype.setPrefix = function(id) {
    return 'item-' + id;
  };

  // collection attributes
  BaseCollection.prototype.attributes = {};

  return BaseCollection;
});
