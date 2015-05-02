'use strict';

xdescribe('Directive: productGrid', function () {

  // load the directive's module
  beforeEach(module('carritoApp', 'views/product-grid.html'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should have a table with 4 columns and 5 rows', inject(function ($compile) {
    element = angular.element('<product-grid></product-grid>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.find('table').length).toBe(1);
    expect(element.find('table').find('thead').find('tr').find('th').length).toBe(4);
    expect(element.find('table').find('tbody').find('tr').length).toBe(5);
    expect(element.find('table').find('thead').find('tr').find('th').eq('0').text()).toBe('Product Name');
  }));
});
