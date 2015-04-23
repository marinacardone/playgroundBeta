'use strict';

/**
 * @ngdoc function
 * @name wisableApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wisableApp
 */
angular.module('wisableApp')
  .controller('MainController' , ['$scope', '$location' , 'Session' , function ($scope, $location, Session) {
    
    $scope.isCurrentPage = function(path){
        return path === $location.path();
      };
    
    $scope.currentLocation = $location.path();

    if(!Session.userId){
    	$location.path('/');
    } else {
      $location.path('/home');
    }

  }]);
