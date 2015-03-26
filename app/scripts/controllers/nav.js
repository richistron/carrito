'use strict';

/**
 * @ngdoc function
 * @name carritoApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the carritoApp
 */
angular.module('carritoApp').controller('NavCtrl', function ($scope, $location) {
  $scope.isActive = function(path){
    return path === $location.path();
  };
});
