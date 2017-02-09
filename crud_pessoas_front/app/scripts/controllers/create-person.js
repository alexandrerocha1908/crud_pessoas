'use strict';

/**
 * @ngdoc function
 * @name crudPessoasFrontApp.controller:CreatePersonCtrl
 * @description
 * # CreatePersonCtrl
 * Controller of the crudPessoasFrontApp
 */
angular.module('crudPessoasFrontApp')
  .controller('CreatePersonCtrl', function ($rootScope, $scope, $location, personService, $localStorage, $resource, Notification) {

  $scope.createPersonError = {}
  $scope.person = {}

  $scope.$watch(function(){
    if ($scope.person.name) {
      $scope.createPersonError.name = ""
    }
    if ($scope.person.email) {
      $scope.createPersonError.email = ""
    }
  })

  $scope.createNewContact = function (person) {
    if(!$scope.person.name){
      $scope.createPersonError.name = "This field is required."
    }
    if(!$scope.person.email){
      $scope.createPersonError.email = "This field is required."
    }
    if($scope.person.name && $scope.person.email){
      personService.create($scope.person).$promise.then(
        function success(){
          $location.path('/list');
          Notification.success({message: 'Contact added successfully', delay: 3000});
      },function error(){
          Notification.error({message: 'Error adding contact', delay: 3000});
      });
      
    }
  };

  $scope.cancel = function(){
  	$location.path('/list')
  }
});
