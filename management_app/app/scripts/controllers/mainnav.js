'use strict';

angular.module('managementApp')
.controller('mainNav', function ($scope, $location) {

    $scope.isCurrentPage = function(path){
        return path === $location.path();
      };

  });
