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
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
