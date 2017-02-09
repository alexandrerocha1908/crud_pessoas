'use strict';

/**
 * @ngdoc service
 * @name crudPessoasFrontApp.personService
 * @description
 * # personService
 * Service in the crudPessoasFrontApp.
 */
angular.module('crudPessoasFrontApp')
  .service('personService', function (loginRequiredInterceptor, $resource, $localStorage) {
  	var url = 'http://localhost:8000/persons'
    var personQuery = {
        url: url,
        method: "GET",
        interceptor: {responseError: loginRequiredInterceptor},
        params: {},
        isArray: true,
        cache: false,
    }

    var personGet = {
            method: "GET",
            url: 'http://localhost:8000/persons/:id',
            isArray: false,
            cache: false,
            interceptor: {responseError: loginRequiredInterceptor},
        }

     var personCreate = {
            url: 'http://localhost:8000/person/create',
            method: "POST", 
            interceptor: {responseError: loginRequiredInterceptor}
        }
    var personUpdate = {
            url: 'http://localhost:8000/persons/:id',
            method: "PATCH",
            interceptor: {responseError: loginRequiredInterceptor},
            params: {"id": "@id"},
        }

     var personDelete = {
            url: 'http://localhost:8000/persons/:id',
            method: "DELETE",
            interceptor: {responseError: loginRequiredInterceptor}
        }

    var token = $localStorage.currentUser.token
    if (token){
        personGet["headers"] = {"Authorization": "JWT " + token}
        personQuery["headers"] = {"Authorization": "JWT " + token}
        personCreate["headers"] = {"Authorization": "JWT " + token}
        personDelete["headers"] = {"Authorization": "JWT " + token}
        personUpdate["headers"] = {"Authorization": "JWT " + token}
    }

    return $resource(url, {}, {
        query: personQuery,
        get: personGet,
        create: personCreate,
        delete: personDelete,
        update: personUpdate,
    })

  });
