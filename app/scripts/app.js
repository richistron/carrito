'use strict';

/**
 * @ngdoc overview
 * @name carritoApp
 * @description
 * # carritoApp
 *
 * Main module of the application.
 */
angular
  .module('carritoApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'CheckoutCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
