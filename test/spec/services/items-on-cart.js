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

  // find method 
  describe('testing find method', function() {
    it('should not find the product', function() {
      itemsOnCart.reset();
      expect(itemsOnCart.find(4)).toBe(false);
      expect(itemsOnCart.find(5)).toBe(false);
    });

    it('should find a object', function() {
      itemsOnCart.reset();
      itemsOnCart.add({ id: 5, onCart: 10});
      expect(itemsOnCart.find(5)).toBe(true);
      expect(itemsOnCart.find(6)).toBe(false);
      itemsOnCart.add({ id: 6, onCart: 1});
      expect(itemsOnCart.find(6)).toBe(true);
    });
  });

  // add method
  describe('testing add method', function() {
    it('add should add a new element', function() {
      itemsOnCart.reset();
      expect(itemsOnCart.add({ id: 4, onCart: 1})).toBe(true);
      expect(itemsOnCart.add({ id: 5, onCart: 10})).toBe(true);
    });

    it('add shouldn\'t add a new element', function() {
      expect(itemsOnCart.add({ id: 4, onCart: 2})).toBe(false);
      expect(itemsOnCart.add({ id: 6, onCart: 10, some: 'some'})).toBe(false);
    });
  });
  
  // set method
  describe('testing set method', function() {
    it('it should return an empty array', function() {
      itemsOnCart.reset();
      expect(itemsOnCart.get()).toEqual(jasmine.any(Array));
      expect(itemsOnCart.get().length).toEqual(0);
    });


    it('shouldn\'t return and empty array', function() {
      itemsOnCart.set([{}]);
      expect(itemsOnCart.get().length).toEqual(1);
    });

  });

  // update method
  describe('testing update method', function() {
    it('update should modify the element', function() {
      itemsOnCart.reset();
      expect(itemsOnCart.add({id: 10, onCart: 3 })).toBe(true); 
      expect(itemsOnCart.add({id: 4, onCart: 2 })).toBe(true); 
      expect(itemsOnCart.find(10)).toBe(true);
      expect(itemsOnCart.find(4)).toBe(true);
      expect(itemsOnCart.update({id:10, onCart: 1})).toBe(true);
      expect(itemsOnCart.update({id:4, onCart: 2})).toBe(true);
    });

    it('update should\'t modify a elemtn', function() {
      itemsOnCart.reset();
      expect(itemsOnCart.add({id: 10, onCart: 3 })).toBe(true); 
      expect(itemsOnCart.add({id: 4, onCart: 2 })).toBe(true); 
      expect(itemsOnCart.find(10)).toBe(true);
      expect(itemsOnCart.find(4)).toBe(true);
      expect(itemsOnCart.update({id:11, onCart: 1})).toBe(false);
      expect(itemsOnCart.update({id:40, onCart: 2})).toBe(false);
    });
  });

  // remove method
  describe('testing remove method', function() {
    it('should remove an element', function() {
      itemsOnCart.reset();
      expect(itemsOnCart.add({id: 5, onCart: 3 })).toBe(true); 
      expect(itemsOnCart.remove(5)).toBe(true);
      expect(itemsOnCart.find(5)).toBe(false);
    });

    it('should remove an element', function() {
      itemsOnCart.reset();
      expect(itemsOnCart.add({id: 5, onCart: 3 })).toBe(true); 
      expect(itemsOnCart.remove(4)).toBe(false);
      expect(itemsOnCart.find(5)).toBe(true);
    });
  });

  // reset
  describe('testing reset method', function() {
    it('it should return a empty array', function() {
      expect(itemsOnCart.add({id: 10, onCart: 3 })).toBe(true); 
      expect(itemsOnCart.add({id: 1, onCart: 3 })).toBe(true); 
      itemsOnCart.reset();
      expect(itemsOnCart.get().length).toBe(0);
    });
  });

  // validate all
  describe('testing validate All method', function() {
    it('should validate all the elemtns', function() {
      var elements = [
        { id: 2, onCart: 3 },
        { id: 10, onCart: 5 },
        { id: 525, onCart: 1 }
      ];
      expect(itemsOnCart.validateAll(elements)).toBe(true); 
    });

    it('should validate all the elemtns', function() {
      var elements = [
        { id: 2, onCart: 3 },
        { id: 10, onCart: 5 },
        { id: 525, foo: 1 }
      ];
      expect(itemsOnCart.validateAll(elements)).toBe(false); 
    });
  });
});

