'use strict';

describe('Service: BaseCollection', function () {

  // load the service's module
  beforeEach(module('carritoApp'));

  // instantiate service
  var BaseCollection;
  beforeEach(inject(function (_BaseCollection_) {
    BaseCollection = _BaseCollection_;
  }));

  it('should do something', function () {
    expect(!!BaseCollection).toBe(true);
    expect(BaseCollection).toEqual(jasmine.any(Function));
  });

  // collection must be an array
  it('collection must be an array', function() {
    expect(false).toBe(true);
  });
  // all items should contain and id
  it('all items should contain and id', function() {
    expect(false).toBe(true);
  });
  // data should have been setted to attibutes
  it('data should have been setted to attibutes', function() {
    expect(false).toBe(true);
  });
  // all items should have the same prefix
  it('all items should have the same prefix', function() {
    expect(false).toBe(true);
  });
});
