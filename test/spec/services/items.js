'use strict';

describe('Service: itemsOnCart', function () {

  // load the service's module
  beforeEach(module('carritoApp'));

  // instantiate service
  var itemsOnCart;
  beforeEach(inject(function (_itemsOnCart_) {
    itemsOnCart = _itemsOnCart_;
  }));

  // basic tests
  describe('running smoke tests for itemsOnCart', function() {

    it('should do something', function () {
      expect(!!itemsOnCart).toBe(true);
    });

    it('itemsOncart should be an object', function(){
      expect(itemsOnCart).toEqual(jasmine.any(Object));
    });

    it('should have a get method', function() {
      expect(itemsOnCart.get).toEqual(jasmine.any(Function));
    });

    it('should have a set method', function() {
      expect(itemsOnCart.set).toEqual(jasmine.any(Function));
    });

    it('should have an update method', function() {
      expect(itemsOnCart.update).toEqual(jasmine.any(Function));
    });

    it('should have an update method', function() {
      expect(itemsOnCart.update).toEqual(jasmine.any(Function));
    });

    it('should have an remove method', function() {
      expect(itemsOnCart.remove).toEqual(jasmine.any(Function));
    });

    it('should have an find method', function() {
      expect(itemsOnCart.find).toEqual(jasmine.any(Function));
    });

    it('should have an isValid  method', function() {
      expect(itemsOnCart.isValid).toEqual(jasmine.any(Function));
    });

    it('should have an add  method', function() {
      expect(itemsOnCart.add).toEqual(jasmine.any(Function));
    });
  });


  // get method
  describe('testing get method', function() {
    var items = [];
    for (var i = 0; i <= 4; i++) {
      items.push({
        id: i,
        stock: 50 + i,
        onCart: 10 + i
      });
    }

    it('it should return and empty array', function() {
      expect(itemsOnCart.get()).toEqual([]);
    });

    it('it should return a arrar with 5 elements', function() {
      itemsOnCart.set(items);
      expect(itemsOnCart.get().length).toEqual(5);
    });

    it('the element should be the same as before', function() {
      for(var i in itemsOnCart.get()) {
        expect(itemsOnCart.get()[i].id).toEqual(items[i].id);
        expect(itemsOnCart.get()[i].stock).toEqual(items[i].stock);
        expect(itemsOnCart.get()[i].onCart).toEqual(items[i].onCart);
      }
    });

    it('should be an empty array again', function() {
      itemsOnCart.set([]);
      expect(itemsOnCart.get().length).toEqual(0);
      expect(itemsOnCart.get()).toEqual(jasmine.any(Array));
    });
  });

  // isValid method
  describe('isValid method', function() {

    it('isValid should throw a invalid format error', function() {
      expect(itemsOnCart.isValid([])).toBe(false);
      expect(itemsOnCart.isValid('')).toBe(false);
      expect(itemsOnCart.isValid(10)).toBe(false);
      expect(itemsOnCart.isValid(null)).toBe(false);
      expect(itemsOnCart.isValid(undefined)).toBe(false);
      expect(itemsOnCart.isValid(0.5)).toBe(false);
      expect(itemsOnCart.isValid(function(){})).toBe(false);
    });

    it('isValid should not allowed wrong format', function() {
      expect(itemsOnCart.isValid({ stock: 50 })).toBe(false);
      expect(itemsOnCart.isValid({ id: 4 })).toBe(false);
      expect(itemsOnCart.isValid({ onCart: 10 })).toBe(false);
      expect(itemsOnCart.isValid({
        id: 1,
        stock: 40,
        name: 'panchito'
      })).toBe(false);
      expect(itemsOnCart.isValid({
        id: 1,
        onCart: 50
      })).toBe(true);
    });
  });

  // add method
  describe('testing add method', function() {
    it('add should add a new element', function() {
      expect(itemsOnCart.add({ id: 4, onCart: 1})).toBe(true);
    });
  });
  
  // set method
  describe('testing set method', function() {
    
    it('it should return an empty array', function() {
      itemsOnCart.set([]);
      expect(itemsOnCart.get()).toEqual(jasmine.any(Array));
      expect(itemsOnCart.get().length).toEqual(0);
    });

    it('it should return a non empty array', function() {
      itemsOnCart.set([{}]);
      expect(itemsOnCart.get()).toEqual(jasmine.any(Array));
      expect(itemsOnCart.get().length).toBeGreaterThan(0);
    });

    it('it should return a two elemtns array', function() {
      itemsOnCart.set([{},{}]);
      expect(itemsOnCart.get()).toEqual(jasmine.any(Array));
      expect(itemsOnCart.get().length).toBeGreaterThan(0);
    });

  });


  // update method
  // remove method
  // 
});

