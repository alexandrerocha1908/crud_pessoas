'use strict';

/**
 * @ngdoc function
 * @name crudPessoasFrontApp.controller:NewUserCtrl
 * @description
 * # NewUserCtrl
 * Controller of the crudPessoasFrontApp
 */
angular.module('crudPessoasFrontApp')
  .controller('NewUserCtrl', function ($scope, $location, $http) {

    $scope.user = {}
    var registerUrl = 'http://localhost:8000/users/register'

    $scope.loginError = {}

    $scope.$watch(function(){
      if ($scope.user.password) {
          $scope.loginError.password = ""
      } else if ($scope.user.username) {
          $scope.loginError.username = ""
      }
    })

    $scope.create = function(user){
      if (!user.username) {
        $scope.loginError.username = ["This field is required."]
      } 

      if (!user.password) {
        $scope.loginError.password = ["This field is required."]
      }
      if ($scope.user.username && $scope.user.password) {
          $http({
              method: "POST",
              url: registerUrl,
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
                  $location.path("/")
                  window.location.reload()
          }, function error(e_data, e_status, e_headers, e_config){
                  // console.log(e_data) // error
                  $scope.registerError = e_data

          });
      }
    }
});
