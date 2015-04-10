'use strict';

describe('Service: products', function () {

  // load the service's module
  beforeEach(module('carritoApp'));

  // instantiate service
  var products;
  beforeEach(inject(function (_products_) {
    products = _products_;
  }));

  it('should do something', function () {
    expect(!!products).toBe(true);
  });

  it('should have a get method', function () {
    expect(products.get).toBeDefined();
  });

  it('should return a non empty array', function () {
    expect(products.get().length).toBeGreaterThan(1);
  });


  it('each element should have a description', function () {
    products.get().forEach(function (product) {
      expect(product.description).toBeDefined();
      expect(product.description.length).toBeGreaterThan(15);
    });
  });


  it('each element should have a price', function () {
    products.get().forEach(function (product) {
      expect(product.price).toBeDefined();
      expect(product.price).toEqual(jasmine.any(Number));
      expect(product.price).toBeGreaterThan(1);
    });
  });

  it('each element should have a name', function () {
    products.get().forEach(function (product) {
      expect(product.name).toBeDefined();
      expect(product.name.length).toBeGreaterThan(5);
    });
  });

  it('each element should have a id', function () {
    products.get().forEach(function (product) {
      expect(product.id).toBeDefined();
      expect(product.price).toEqual(jasmine.any(Number));
    });
  });

  it('each id should be unique', function () {
    var ids = [];
    products.get().forEach(function (product) {
      expect(ids).not.toContain(product.id);
      ids.push(product.id);
    });
  });

  it('each element should have a stock', function () {
    products.get().forEach(function (product) {
      expect(product.stock).toBeDefined();
      expect(product.stock).toBeGreaterThan(0);
    });
  });
});
