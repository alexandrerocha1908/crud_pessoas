'use strict';

/**
 * @ngdoc function
 * @name crudPessoasFrontApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the crudPessoasFrontApp
 */
angular.module('crudPessoasFrontApp')
  .controller('LoginCtrl', function ($localStorage, $scope, $location, $http, $rootScope, Notification) {

    var loginUrl = 'http://localhost:8000/users/login'

    $scope.loginError = {}
    $scope.user = {}

    $scope.$watch(function(){
      if ($scope.user.password) {
          $scope.loginError.password = ""
      } else if ($scope.user.username) {
          $scope.loginError.username = ""
      }
    })

  	$scope.loginTeste = function(user){
      if (!user.username) {
        $scope.loginError.username = ["This field is required."]
      } 

      if (!user.password) {
        $scope.loginError.password = ["This field is required."]
      }

      if ($scope.user.username && $scope.user.password) {
          $http({
              method: "POST",
              url: loginUrl,
              data: {
                  username: $scope.user.username,
                  password: $scope.user.password
              },
                  headers: {}
          }).then(function success(r_data, r_status, r_headers, r_config){
                  console.log(r_data.data.token) // token
                  if(r_data.data.token){
                    $localStorage.currentUser = { 
                      username: r_data.data.username, 
                      token: r_data.data.token 
                    };
                  }
                  $location.path("/list")
          }, function error(e_data, e_status, e_headers, e_config){
                  console.log(e_data) // error
                  if(e_data.status == 500 || e_data.status == 400){
                    Notification.error({message: 'Invalid Username or Passowrd', delay: 3000});
                  }
          });
      }
  	}

  	$scope.newUser = function(){
  		$location.path('/new-user');
  	}

  });
