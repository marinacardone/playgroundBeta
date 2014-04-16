'use strict';

angular.module('managementApp')
  .controller('AccountsCtrl', function ($scope, projects) {
   
    $scope.projectsList = projects.query();
 
  });
