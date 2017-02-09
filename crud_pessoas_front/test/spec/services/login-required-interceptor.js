'use strict';

describe('Service: loginRequiredInterceptor', function () {

  // load the service's module
  beforeEach(module('crudPessoasFrontApp'));

  // instantiate service
  var loginRequiredInterceptor;
  beforeEach(inject(function (_loginRequiredInterceptor_) {
    loginRequiredInterceptor = _loginRequiredInterceptor_;
  }));

  it('should do something', function () {
    expect(!!loginRequiredInterceptor).toBe(true);
  });

});
