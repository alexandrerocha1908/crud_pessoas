'use strict';

describe('Service: confirmationModal', function () {

  // load the service's module
  beforeEach(module('crudPessoasFrontApp'));

  // instantiate service
  var confirmationModal;
  beforeEach(inject(function (_confirmationModal_) {
    confirmationModal = _confirmationModal_;
  }));

  it('should do something', function () {
    expect(!!confirmationModal).toBe(true);
  });

});
