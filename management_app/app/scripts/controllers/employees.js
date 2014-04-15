'use strict';

angular.module('managementApp')
  .controller('EmployeesCtrl', function ($scope, employees) {
 
    $scope.filterBy = {
        search: ''
    };
   
    $scope.employeesList = employees.query();

    var selectedEmployee = null;

    $scope.selectEmployee = function(employee){

        console.log('selected employee > '+JSON.stringify(employee));

        selectedEmployee = employee
    }

    $scope.displayCurrentProjects = function(currentproject){
        var currentProjects = '';
        for (var i = 0; i < currentproject.length; i++) {
            currentProjects += currentproject[i].projectName;
            if(i < currentproject.length-1){
                currentProjects += ' - ';
            }
        }
        return currentProjects;
    };


  });
