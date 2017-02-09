'use strict';

describe('Service: createLogin', function () {

  // load the service's module
  beforeEach(module('crudPessoasFrontApp'));

  // instantiate service
  var createLogin;
  beforeEach(inject(function (_createLogin_) {
    createLogin = _createLogin_;
  }));

  it('should do something', function () {
    expect(!!createLogin).toBe(true);
  });

});
