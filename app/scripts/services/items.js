'use strict';

/**
 * @ngdoc service
 * @name carritoApp.items
 * @description
 * # items
 * Factory in the carritoApp.
 */
angular.module('carritoApp').factory('itemsFactory', function () {
  var storageId = 'checkout-items';
  return {
    get: function() {
      return JSON.parse(localStorage.getItem(storageId) || '[]');
     },
    set: function(items) {
      localStorage.setItem(storageId, JSON.stringify(items));
    }
  };
});
