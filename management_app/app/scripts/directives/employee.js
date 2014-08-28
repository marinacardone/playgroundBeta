'use strict';

angular.module('managementApp')
.directive('employeeDetails', function(){
    return {
        restrict : 'E',
        templateUrl : 'views/employees/employee.html',
        controller: 'EmployeesCtrl'
      };
  });