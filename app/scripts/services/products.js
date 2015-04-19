'use strict';

/**
 * @ngdoc service
 * @name carritoApp.products
 * @description
 * # products
 * Factory in the carritoApp.
 */
angular.module('carritoApp').factory('productsFactory', function () {
  var products = [
    {
      id:           1,
      name:         'MacBook Pro 15 inches',
      price:        21500.30,
      description:  'Retina display, 8 GB RAM.',
      stock:        1
    }, {
      id:           2,
      name:         'MacBook Pro 15 inches',
      price:        28500.30,
      description:  'Retina display, 16 GB RAM.',
      stock:        2
    }, {
      id:           3,
      name:         'MacBook Air 13 inches',
      price:        1500.20,
      description:  'Retina display, 16 GB RAM.',
      stock:        15
    }, {
      id:           4,
      name:         'MacBook Air 13 inches',
      price:        1000.50,
      description:  'Retina display, 8 GB RAM.',
      stock:        15
    }, {
      id:           5,
      name:         'Mouse path',
      price:        100,
      description:  'Magic apple path',
      stock:        300
    }
  ];

  return {
    get: function () {
      return products;
    }
  };
});
