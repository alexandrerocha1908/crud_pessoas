'use strict';

describe('Service: getId', function () {

  // load the service's module
  beforeEach(module('crudPessoasFrontApp'));

  // instantiate service
  var getId;
  beforeEach(inject(function (_getId_) {
    getId = _getId_;
  }));

  it('should do something', function () {
    expect(!!getId).toBe(true);
  });

});
