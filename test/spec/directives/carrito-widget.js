'use strict';

describe('Directive: carritoWidget', function () {

  // load the directive's module
  beforeEach(module('carritoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<carrito-widget></carrito-widget>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the carritoWidget directive');
  }));
});
