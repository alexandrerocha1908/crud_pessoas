'use strict';

/**
 * @ngdoc function
 * @name crudPessoasFrontApp.controller:DetailPersonCtrl
 * @description
 * # DetailPersonCtrl
 * Controller of the crudPessoasFrontApp
 */
angular.module('crudPessoasFrontApp')
  .controller('DetailPersonCtrl', function ($routeParams, $scope, $location, personService, $localStorage, $resource, Notification) {

    $scope.updatePersonError = {}
      $scope.person = {}

    $scope.$watch(function(){
        if ($scope.person.name) {
            $scope.updatePersonError.name = ""
        }
        if ($scope.person.email) {
            $scope.updatePersonError.email = ""
        }
    })

    $scope.updateContact = function (person) {
        if(!$scope.person.name){
          $scope.updatePersonError.name = "This field is required."
        }
        if(!$scope.person.email){
          $scope.updatePersonError.email = "This field is required."
        }
        if($scope.person.name && $scope.person.email){
            personService.update($scope.person).$promise.then(
                function success(){
                    $location.path('/list')
                    Notification.success({message: 'Contact updated successfully', delay: 3000});
                },
                function error(){
                    Notification.error({message: 'Error adding contact', delay: 3000});
                });
            
        }

    };

    $scope.cancel = function () {
        $location.path('/list');
    };

    $scope.person = personService.get({id: $routeParams.id});
  });
