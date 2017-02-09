'use strict';

describe('Service: detailOrUpdateOrRemove', function () {

  // load the service's module
  beforeEach(module('crudPessoasFrontApp'));

  // instantiate service
  var detailOrUpdateOrRemove;
  beforeEach(inject(function (_detailOrUpdateOrRemove_) {
    detailOrUpdateOrRemove = _detailOrUpdateOrRemove_;
  }));

  it('should do something', function () {
    expect(!!detailOrUpdateOrRemove).toBe(true);
  });

});
