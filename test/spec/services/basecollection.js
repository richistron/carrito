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

  it('collection does not accept a string ', function() {
    var test = function() {
      new BaseCollection('stuff');
    };
    expect(test).toThrowError('collection must be an array');
  });

  it('collection does not accept a object', function() {
    var test = function() {
      new BaseCollection({});
    };
    expect(test).toThrowError('collection must be an array');
  });

  it('collection does not accept a empty array', function() {
    var test = function() {
      new BaseCollection([]);
    };
    expect(test).toThrowError('collection must be an array');
  });
  
  it('collection should accept a valid element', function() {
    var test = function() {
      var items = [{
        id: 5,
        foo: true,
        bar: false
      }];
      return new BaseCollection(items);
    };
    expect(test()).toEqual(jasmine.any(Object));
  });
  
  it('all items should contain and id', function() {
    var test = function() {
      var items = [{
        id: 5,
        foo: true,
        bar: false
      },
      {
        foo: true,
        bar: false
      }];
      return new BaseCollection(items);
    };
    expect(test).toThrowError('all items should contain and id');
  });

  it('data should have been setted to attibutes', function() {
    var test = function() {
      var items = [{
        id: 5,
        foo: true,
        bar: false
      }];
      return new BaseCollection(items);
    };
    expect(test().attributes['item-5']).toEqual({ id:5, foo: true, bar: false });
  });

  it('all items should have the same prefix', function() {
    var items = [
      {
        id: 1,
        foo: false
      },
      {
        id: 620,
        foo: false
      },
      {
        id: 750,
        foo: true
      },
    ];
    var baseCollection = new BaseCollection(items);
    for (var key in baseCollection.attributes) {
      expect(key).toMatch(/item-[0-9]{1,9}/);
    }
  });

  it('all items should have the same prefix', function() {
    var test = function() {
      var items = [
        {
          id: 1,
          foo: false
        },
        {
          id: 1,
          foo: false
        },
        {
          id: 750,
          foo: true
        },
      ];
      new BaseCollection(items);
    };
    expect(test).toThrowError('duplicated id');
  });

  // find item
  describe('tests for find item', function() {
    it('find: elements not found', function() {
      var find = function(id) {
        var collection = new BaseCollection([{
          id: 5,
          foo: true
        }]);
        return collection.find(id);
      };
      expect(find(4)).toBe(false);
      expect(find(3)).toBe(false);
      expect(find(2)).toBe(false);
    });

    it('find: elements found', function() {
      var find = function(id) {
        var collection = new BaseCollection([{
          id: 1,
          foo: true
        }, {
          id: 2,
          foo: true
        }, {
          id: 3,
          foo: true
        }, {
          id: 4,
          foo: true
        }, {
          id: 5,
          foo: true
        }]);
        return collection.find(id);
      };
      expect(find(1)).toEqual(jasmine.any(Object));
      expect(find(2)).toEqual(jasmine.any(Object));
      expect(find(3)).toEqual(jasmine.any(Object));
      expect(find(4)).toEqual(jasmine.any(Object));
      expect(find(5)).toEqual(jasmine.any(Object));
    });
  });

  // replace item
  describe('tests for replace item', function() {
    it('replace item', function() {
      var collection = new BaseCollection([{
        id: 1,
        foo: false
      }]);
      expect(collection.find(1)).toEqual({id: 1, foo: false});
      collection.replace({ id: 1, bar: true });
      expect(collection.find(1)).toEqual({id: 1, bar: true});
    });

    it('not replace item', function() {
      expect(function() {
        var collection = new BaseCollection([{
          id: 1,
          foo: false
        }]);
        collection.replace({ id: 2, bar: true });
      }).toThrowError('object does not exists');
    });
  });

  // merge item
  describe('tests for merge item', function() {

    it('merge item', function() {
      var collection = new BaseCollection([{
        id: 1,
        foo: false
      }]);
      expect(collection.find(1)).toEqual({id: 1, foo: false});
      collection.merge({ id: 1, bar: true });
      expect(collection.find(1)).toEqual({id: 1, foo: false, bar: true});
    });

    it('merge item does not find element', function() {
      expect(function() {
        var collection = new BaseCollection([{
          id: 1,
          foo: false
        }]);
        collection.merge({ id: 2, bar: true });
      }).toThrowError('object does not exists');
    });
  });

  it('should return all the elements', function() {
    var items = [{
      id: 500,
      foo: true
    }, {
      id: 591,
      foo: true
    }];
    var collection = new BaseCollection(items);
    expect(collection.getAll()).toEqual(items);
  });

  it('reset all elements on the collection', function() {
    var items = [{
      id: 6,
      foo: false
    }, {
      id: 5,
      foo: false
    }, {
      id: 4,
      foo: false
    }, {
      id: 3,
      foo: false
    }];
    var collection = new BaseCollection(items);
    expect(collection.getAll()).toEqual(items);
    collection.reset([{id: 1, bar: true}]);
    expect(collection.getAll()).toEqual([{id: 1, bar: true}]);
  });

  it('reset element should fail and object should be the same as before', function() {
    expect(function() {
      var items = [{
        id: 6,
        foo: false
      }, {
        foo: false
      }];
      new BaseCollection(items);
    }).toThrowError('all items should contain and id');
  });

  it('reset element should fail and object should be the same as before', function() {
    expect(function() {
      var items = [{
        id: 6,
        foo: false
      }, {
        id: 6,
        foo: false
      }];
      new BaseCollection(items);
    }).toThrowError('duplicated id');
  });
});

