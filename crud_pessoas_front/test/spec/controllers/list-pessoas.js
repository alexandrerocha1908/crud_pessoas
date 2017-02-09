'use strict';

describe('Controller: ListPessoasCtrl', function () {

  // load the controller's module
  beforeEach(module('crudPessoasFrontApp'));

  var ListPessoasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListPessoasCtrl = $controller('ListPessoasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListPessoasCtrl.awesomeThings.length).toBe(3);
  });
});
