'use strict';

describe('Controller: DeletePersonCtrl', function () {

  // load the controller's module
  beforeEach(module('crudPessoasFrontApp'));

  var DeletePersonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeletePersonCtrl = $controller('DeletePersonCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DeletePersonCtrl.awesomeThings.length).toBe(3);
  });
});
