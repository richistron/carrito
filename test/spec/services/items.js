'use strict';

describe('Service: itemsOnCart', function () {

  // load the service's module
  beforeEach(module('carritoApp'));

  // instantiate service
  var itemsOnCart;
  beforeEach(inject(function (_itemsOnCart_) {
    itemsOnCart = _itemsOnCart_;
  }));

  // basic test
  it('should do something', function () {
    expect(!!itemsOnCart).toBe(true);
  });

  // should be and object
  it('itemsOncart should be an object', function(){
    expect(itemsOnCart).toEqual(jasmine.any(Object));
  });

  // should have get method
  it('itemsOnCart should be a function', function() {
    expect(itemsOnCart.get).toEqual(jasmine.any(Function));
  });

  // should have set method
  it('should have a set method', function() {
    expect(itemsOnCart.get).toEqual(jasmine.any(Function));
  });

  // get must return and empty array
  it('get should return and empty array', function() {
    expect(itemsOnCart.get()).toEqual(jasmine.any(Array));
    expect(itemsOnCart.get().length).toEqual(0);
  });

  // set should add a new element
  it('set should add a new element', function() {
    expect(itemsOnCart.get().length).toEqual(0);
    itemsOnCart.set([{ id:1, stock: 15, onCart: 1 }]);
    expect(itemsOnCart.get().length).toEqual(1);
    expect(itemsOnCart.get()[0]).toEqual({
      id: 1,
      stock: 15,
      onCart: 1
    });
  });

  // update should update the product id
  it('should update the product id', function() {
    expect(itemsOnCart.update).toEqual(jasmine.any(Function));
    itemsOnCart.set([{
      id: 2,
      stock: 15,
      onCart: 4
    }]);
    expect(itemsOnCart.get()[0].id).toEqual(2);
    expect(itemsOnCart.get()[0].stock).toEqual(15);
    expect(itemsOnCart.get()[0].onCart).toEqual(4);
    itemsOnCart.update({
      id: 2,
      stock: 10,
      onCart: 8
    });
    expect(itemsOnCart.get()[0].id).toEqual(2);
    expect(itemsOnCart.get()[0].stock).toEqual(10);
    expect(itemsOnCart.get()[0].onCart).toEqual(8);
  });

});

