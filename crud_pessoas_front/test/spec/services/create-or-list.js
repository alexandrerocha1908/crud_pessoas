'use strict';

describe('Service: createOrList', function () {

  // load the service's module
  beforeEach(module('crudPessoasFrontApp'));

  // instantiate service
  var createOrList;
  beforeEach(inject(function (_createOrList_) {
    createOrList = _createOrList_;
  }));

  it('should do something', function () {
    expect(!!createOrList).toBe(true);
  });

});
