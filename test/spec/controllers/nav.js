'use strict';

describe('Controller: NavCtrl', function () {

  // load the controller's module
  beforeEach(module('carritoApp'));

  var NavCtrl ,
    route     ,
    _location ,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $route, $location) {
    _location       = $location;
    scope           = $rootScope.$new();
    route           = $route;
    NavCtrl         = $controller('NavCtrl', {
      $scope: scope
    });
  }));

  it('should have isActive function', function(){
    expect(scope.isActive).toEqual(jasmine.any(Function));
  });

  it('should have main controller and route', function(){
    expect(route.routes['/'].templateUrl).toEqual('views/main.html');
    expect(route.routes['/'].controller).toEqual('CheckoutCtrl');
    expect(route.routes['/'].originalPath).toEqual('/');
  });

  it('should navigate to / route', function(){
    _location.path('/');
    scope.$digest();
    expect(scope.isActive('/')).toBe(true);
    expect(scope.isActive('/foo')).toBe(false);
  });

  it('should have about controller and route', function(){
    expect(route.routes['/about'].templateUrl).toEqual('views/about.html');
    expect(route.routes['/about'].controller).toEqual('AboutCtrl');
    expect(route.routes['/about'].originalPath).toEqual('/about');
  });

  it('should navigate to /about route', function(){
    _location.path('/about');
    scope.$digest();
    expect(scope.isActive('/about')).toBe(true);
    expect(scope.isActive('/foo')).toBe(false);
  });
});
