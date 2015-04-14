'use strict';

describe('Directive: carritoWidget', function () {

  // load the directive's module
  beforeEach(module('carritoApp', 'views/carrito-widget.html'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should have a cart icon', inject(function ($compile) {
    element = angular.element('<carrito-widget></carrito-widget>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.find('i.fa-cart-arrow-down').length).toBe(1);
  }));
});
