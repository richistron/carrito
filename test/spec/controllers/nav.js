'use strict';

describe('Controller: NavCtrl', function () {

  // load the controller's module
  beforeEach(module('carritoApp'));

  var NavCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavCtrl = $controller('NavCtrl', {
      $scope: scope
    });
  }));

  it('isActive should be a function', function () {
    expect(scope.isActive).toEqual(jasmine.any(Function))
  });
});
