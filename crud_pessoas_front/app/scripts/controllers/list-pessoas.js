'use strict';

/**
 * @ngdoc function
 * @name crudPessoasFrontApp.controller:ListPessoasCtrl
 * @description
 * # ListPessoasCtrl
 * Controller of the crudPessoasFrontApp
 */
angular.module('crudPessoasFrontApp')
  .controller('ListPessoasCtrl', function ($rootScope, $resource, $scope, $location, personService, $localStorage, Notification) {

    $scope.detailPerson = function (personId) {
        $location.path('/detail/' + personId);
    };

    $scope.deletePerson = function (personId) {
        personService.delete({ id: personId }).$promise.then(
            function success(){
                window.location.reload()
            },
            function error(){
                Notification.error({message:"Error deleting contact", delay:3000})
            });
        
    };

    $scope.createPerson = function () {
        $location.path('/create');
    };

    $scope.teste = personService.query();

    $scope.logout = function(){
        delete $localStorage.currentUser.token;
        $location.path('/');  
        window.location.reload()
    }

});
