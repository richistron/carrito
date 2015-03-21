'use strict';

describe('Directive: productList', function () {

  // load the directive's module
  beforeEach(module('carritoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<product-list></product-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the productList directive');
  }));
});