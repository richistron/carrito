'use strict';

/**
 * @ngdoc service
 * @name carritoApp.products
 * @description
 * # products
 * Factory in the carritoApp.
 */
angular.module('carritoApp').factory('products', function () {
  return {
    items: [
      {
        productName: 'Mackbook Pro',
        description: '4 GB RAM',
        price: 200.00
      }, {
        productName: 'Mackbook Pro 8',
        description: '8 GB RAM',
        price: 300.00
      }, {
        productName: 'Mackbook Pro 16',
        description: '16 GB RAM',
        price: 400.00
      }
    ]
  };
});
