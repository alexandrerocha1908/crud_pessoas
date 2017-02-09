'use strict';

/**
 * @ngdoc overview  
 * @name crudPessoasFrontApp
 * @description
 * # crudPessoasFrontApp
 *
 * Main module of the application.
 */
angular
  .module('crudPessoasFrontApp', [
    'ngAnimate',
    'ngStorage',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui-notification',
    'ui.bootstrap',
    'datePicker',
    '720kb.datepicker'
  ])
  .config(function ($routeProvider, $locationProvider, NotificationProvider) {
    // $locationProvider.html5Mode({
    //   enabled:true,
    //   rewriteLinks: false
    // })
    $routeProvider
      .when('/list', {
        templateUrl: 'views/list-pessoas.html',
        controller: 'ListPessoasCtrl',
        controllerAs: 'listPessoas'
      })
      .when('/create', {
        templateUrl: 'views/create-person.html',
        controller: 'CreatePersonCtrl',
        controllerAs: 'createPerson'
      })
      .when('/detail/:id', {
        templateUrl: 'views/detail-person.html',
        controller: 'DetailPersonCtrl',
        controllerAs: 'detailPerson'
      })
      .when('/delete/:id', {
        templateUrl: 'views/delete-person.html',
        controller: 'DeletePersonCtrl',
        controllerAs: 'deletePerson'
      })
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/new-user', {
        templateUrl: 'views/new-user.html',
        controller: 'NewUserCtrl',
        controllerAs: 'newUser'
      })
      .otherwise({
        redirectTo: '/'
      });
      NotificationProvider.setOptions({
        delay: 5000,
        startTop: 10,
        startRight: 10,
        verticalSpacing: 10,
        horizontalSpacing: 10,
        positionX: 'center',
        positionY: 'top'
      });
  });