'use strict';

describe('Service: itemsOnCart', function () {

  // load the service's module
  beforeEach(module('carritoApp'));

  // instantiate service
  var ItemsOnCart;
  beforeEach(inject(function (_ItemsOnCart_) {
    ItemsOnCart = _ItemsOnCart_;
  }));

  it('it should inherit from BaseController setup', function() {
    var itemsOnCart = new ItemsOnCart([{
      id: 1,
      foo: true
    }]);
    expect(itemsOnCart.setup).toEqual(jasmine.any(Function));
    expect(itemsOnCart.find).toEqual(jasmine.any(Function));
    expect(itemsOnCart.replace).toEqual(jasmine.any(Function));
    expect(itemsOnCart.merge).toEqual(jasmine.any(Function));
    expect(itemsOnCart.getAll).toEqual(jasmine.any(Function));
    expect(itemsOnCart.reset).toEqual(jasmine.any(Function));
    expect(itemsOnCart.validateCollection).toEqual(jasmine.any(Function));
    expect(itemsOnCart.attributes).toEqual(jasmine.any(Object));
  });

  describe('testing load', function() {
    it('load should return a empty array', function() {
      var itemsOnCart = new ItemsOnCart(true);
      expect(itemsOnCart.getAll()).toEqual(jasmine.any(Array));
      expect(itemsOnCart.getAll().length).toBe(0);
    });

    it('load should return a empty non empty', function() {
      var itemsOnCart = new ItemsOnCart(true);
      itemsOnCart.add({ id:1, foo: false }).add({ id:2, foo:true }).save();
      var itemsOnCart2 = new ItemsOnCart();
      expect(itemsOnCart2.getAll()).toEqual(jasmine.any(Array));
      expect(itemsOnCart2.getAll().length).toBe(2);
    });

  });

  describe('testing save', function() {
    it('save should store elements on local storage', function() {
      var itemsOnCart0 = new ItemsOnCart(true);
      expect(itemsOnCart0.getAll().length).toBe(0);
      itemsOnCart0.add({ id: 5, foo: true }).save();
      var itemsOnCart1 = new ItemsOnCart();
      expect(itemsOnCart1.getAll().length).toBe(1);
      itemsOnCart1.add({ id: 6, foo: true }).save();
      var itemsOnCart2 = new ItemsOnCart();
      expect(itemsOnCart2.getAll().length).toBe(2);
      itemsOnCart2.add({ id: 7, foo: true }).save();
      var itemsOnCart3 = new ItemsOnCart();
      expect(itemsOnCart3.getAll().length).toBe(3);
    });
  });

});

