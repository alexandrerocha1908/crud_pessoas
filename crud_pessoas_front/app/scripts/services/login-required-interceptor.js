'use strict';

/**
 * @ngdoc service
 * @name crudPessoasFrontApp.loginRequiredInterceptor
 * @description
 * # loginRequiredInterceptor
 * Service in the crudPessoasFrontApp.
 */
angular.module('crudPessoasFrontApp')
  .service('loginRequiredInterceptor', function ($location, Notification) {
  	return function(response){
  		console.log(response)
		if (response.status == 401){
			var currentPath = $location.path();
			console.log(currentPath)
			if (currentPath == "/") {
				$location.path("/")
			} else {
				$location.path("/").search("next", currentPath)
				Notification.warning({message: 'Please Sign in', delay: 3000});
			}
		}
	}
  });
