'use strict';

describe('Service: retrieveLogin', function () {

  // load the service's module
  beforeEach(module('crudPessoasFrontApp'));

  // instantiate service
  var retrieveLogin;
  beforeEach(inject(function (_retrieveLogin_) {
    retrieveLogin = _retrieveLogin_;
  }));

  it('should do something', function () {
    expect(!!retrieveLogin).toBe(true);
  });

});
