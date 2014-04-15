'use strict';

angular
  .module('managementApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/employees', {
        templateUrl: 'views/employees.html',
        controller: 'EmployeesCtrl'
      })
       .when('/recruiting', {
        templateUrl: 'views/recruiting.html',
        controller: 'recruiting'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
