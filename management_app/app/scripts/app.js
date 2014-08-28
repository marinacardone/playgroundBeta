'use strict';
(function(){
  var managementApp = angular.module('managementApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ]);
  managementApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/employees', {
        templateUrl: 'views/employees.html',
        controller: 'EmployeesCtrl'
      })
      .when('/add_edit_employee', {
        templateUrl: 'views/employees/edit_employee.html',
        controller: 'EmployeesCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/edit_project', {
        templateUrl: 'views/projects/edit_project.html',
        controller: 'ProjectsCtrl'
      })
      .when('/recruiting', {
        templateUrl: 'views/recruiting.html',
        controller: 'RecruitingCtrl'
      })
      .when('/recruiting/tech_feedback', {
        templateUrl: 'views/recruiting/tech_feedback.html',
        controller: 'RecruitingCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  // make the app variable global
  window.managementApp = managementApp;
})();