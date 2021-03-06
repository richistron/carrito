'use strict';

describe('Controller: CheckoutCtrl', function () {

  // load the controller's module
  beforeEach(module('carritoApp'));

  var CheckoutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CheckoutCtrl = $controller('CheckoutCtrl', {
      $scope: scope
    });
  }));

  it('should have a products object', function() {
    expect(scope.products).toEqual(jasmine.any(Object));
  });

  it('should have a itemsOnCart object', function() {
    expect(scope.itemsOnCart).toEqual(jasmine.any(Object));
  });

  describe('it should remove the element from the cart', function() {
    it('should remove from the cart', function() {
      var products = scope.products.getAll();
      scope.itemsOnCart.add({
        id: products[0].id,
        cart: 1
      });
      expect(scope.itemsOnCart.getAll().length).toBe(1);
      scope.removeFromCart(products[0]);
      expect(scope.itemsOnCart.getAll().length).toBe(0);
    });

    it('it should remove one item', function() {
      var products = scope.products.getAll();
      products[2].stock = products[2].stock - 2;
      scope.itemsOnCart.add({
        id: products[2].id,
        cart: 2
      });
      expect(scope.itemsOnCart.getAll().length).toBe(1);
      scope.removeFromCart(products[2]);
      expect(scope.itemsOnCart.getAll().length).toBe(1);
      expect(scope.itemsOnCart.getAll()[0].cart).toBe(1);
      expect(scope.products.find(products[2].id).stock).toBe(products[2].stock);
    });

    it('should fail removing', function() {
      expect(function() {
        var products = scope.products.getAll();
        scope.itemsOnCart.add({
          id: products[0].id,
          cart: 1
        });
        expect(scope.itemsOnCart.getAll().length).toBe(2);
        scope.removeFromCart(products[1]);
        expect(scope.itemsOnCart.getAll().length).toBe(1);
      }).toThrowError('product not found');
    });

  });

  describe('testing addToCart', function() {
    it('it should add to the cart', function() {
      scope.itemsOnCart.load(true); 
      var items = scope.products.getAll();
      var item = items[Math.floor(Math.random() * items.length)];
      var stock = item.stock - 1;
      expect(scope.itemsOnCart.getAll().length).toBe(0);
      scope.addToCart(item);
      expect(scope.itemsOnCart.getAll().length).toBe(1);
      expect(scope.products.find(item.id).stock).toBe(stock);
      scope.removeFromCart(item);
      expect(scope.itemsOnCart.getAll().length).toBe(0);
      expect(scope.products.find(item.id).stock).toBe(stock + 1);
    });

    it('it should add to the cart and add + 1', function() {
      scope.itemsOnCart.load(true); 
      var items = scope.products.getAll();
      var item = items[Math.floor(Math.random() * items.length)];
      var stock = item.stock - 1;
      expect(scope.itemsOnCart.getAll().length).toBe(0);
      scope.addToCart(item);
      expect(scope.itemsOnCart.getAll().length).toBe(1);
      expect(scope.products.find(item.id).stock).toBe(stock);
      scope.addToCart(item);
      expect(scope.products.find(item.id).stock).toBe(stock -1);
      expect(scope.itemsOnCart.find(item.id).cart).toBe(2);
      scope.removeFromCart(item);
      scope.removeFromCart(item);
      expect(scope.itemsOnCart.getAll().length).toBe(0);
      expect(scope.products.find(item.id).stock).toBe(stock + 1);
    });
  });

  describe('testing isOnCart', function() {
    it('item is on on cart', function() {
      var products = scope.products.getAll();
      var product = products[Math.floor(Math.random() * products.length)];
      scope.addToCart(product);
      expect(scope.itemsOnCart.find(product.id)).toEqual(jasmine.any(Object));
      expect(scope.isOnCart(product)).toBe(true);
    });

    it('item is not on cart', function() {
      scope.itemsOnCart.load(true); 
      var products = scope.products.getAll();
      var product = products[Math.floor(Math.random() * products.length)];
      scope.addToCart(product);
      expect(scope.itemsOnCart.find(product.id + 1)).toEqual(false);
      scope.removeFromCart(product);
      expect(scope.isOnCart(product)).toBe(false);
    });
  });

  describe('testing isAvailable', function() {
    it('product is available', function() {
      var products = scope.products.getAll();
      var product = products[Math.floor(Math.random() * products.length)];
      var stock =  product.stock - 1;
      scope.addToCart(product);
      if (stock > 0) {
        expect(scope.isAvailable(product)).toBe(true);
      } else {
        expect(scope.isAvailable(product)).toBe(false);
      }
    });

    it('product is not available', function() {
      var products = scope.products.getAll();
      var product = products[Math.floor(Math.random() * products.length)];
      var stock =  product.stock;
      for (var i = 1; i <= stock; i++) {
        scope.addToCart(product);
      }
      expect(scope.isAvailable(product)).toBe(false);
    });
  });

  describe('testing total items', function() {
    it('add multiple times same product', function() {
      scope.itemsOnCart.load(true); 
      expect(scope.totalItems()).toBe(0);
      var products = scope.products.getAll();
      var product = products[Math.floor(Math.random() * products.length)];
      var stock = product.stock ;
      for (var i = 0; i <= stock; i++) {
        scope.addToCart(product);
      }
      expect(scope.totalItems()).toBe(i);
    });

    it('add same two different items', function() {
      scope.itemsOnCart.load(true); 
      expect(scope.totalItems()).toBe(0);
      var products = scope.products.getAll();
      var product1 = products[0];
      var product2 = products[1];
      scope.addToCart(product1);
      scope.addToCart(product2);
      expect(scope.totalItems()).toBe(2);
    });

    it('add same two from one and one from other', function() {
      scope.itemsOnCart.load(true); 
      expect(scope.totalItems()).toBe(0);
      var products = scope.products.getAll();
      var product1 = products[0];
      var product2 = products[1];
      scope.addToCart(product1);
      scope.addToCart(product2);
      scope.addToCart(product2);
      expect(scope.totalItems()).toBe(3);
    });

  });

  describe('testing getTotal', function() {
    it('adds one element and validates prices', function() {
      scope.itemsOnCart.load(true); 
      expect(scope.totalItems()).toBe(0);
      var products = scope.products.getAll();
      var product = products[0];
      scope.addToCart(product);
      expect(product.price * 1).toBe(scope.getTotal());
    });

    it('adds one element and validates prices', function() {
      scope.itemsOnCart.load(true); 
      expect(scope.totalItems()).toBe(0);
      var products = scope.products.getAll();
      var product = products[Math.floor(Math.random() * products.length)];
      for (var i = 0; i <= product.stock; i++) {
        scope.addToCart(product);
      }
      expect(product.price * i).toBe(scope.getTotal());
    });

    it('adds one element and validates prices', function() {
      scope.itemsOnCart.load(true); 
      expect(scope.totalItems()).toBe(0);
      var products = scope.products.getAll();
      var product1 = products[0];
      var product2 = products[1];
      scope.addToCart(product1);
      scope.addToCart(product2);
      scope.addToCart(product2);
      expect((function() {
        var total = product1.price;
        total = total + product2.price;
        total = total + product2.price;
        return total;
      })()).toBe(scope.getTotal());
    });
  });

  describe('testing sync inventory', function() {
    it('some test', function() {
      // expect(false).toBe(true);
    });
  });
});

