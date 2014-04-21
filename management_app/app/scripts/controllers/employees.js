'use strict';

angular.module('managementApp')
  .controller('EmployeesCtrl', function ($scope, employees, locations, areas) {
 
    $scope.employeesList = employees.query();
    $scope.locationList = locations.query();
    $scope.areaList = areas.query();
    $scope.availabilityList = [
        {
            name : "All"
        },
        {
            name : "Full"
        },
        {
            name : "Partial"
        },
        {
            name : "None"
        }
    ];  

    $scope.filterBy = {
        search: '',
        location: $scope.locationList[0],
        area: $scope.areaList[0],
        availability : $scope.availabilityList[0]
    };
   
    var examplesVisibility = true;
    var selectedEmployee = null;

    $scope.selectEmployee = function(employee){

        console.log('selected employee > '+JSON.stringify(employee));

        selectedEmployee = employee;
    };

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

    $scope.dismissExamples = function(){
        document.cookie="examples=hide";
    };

    // change examples visibility based on cookie
    $scope.$on('$viewContentLoaded', function(){
        var cookieJar = document.cookie;

        var examplesCookie = cookieJar.split('examples=')[1];

        if(examplesCookie == 'hide'){
            examplesVisibility = false;
        }

    });


  });
