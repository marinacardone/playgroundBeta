'use strict';

/**
 * @ngdoc function
 * @name wisableApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the wisableApp
 */
angular.module('wisableApp')
  .controller('MainNavigationController', ['$scope', '$location', 'Session', function ($scope, $location, Session) {

    $('.button-collapse').sideNav({menuWidth: 250, activationWidth: 70});

    $scope.isCurrentPage = function(path){
        return path === $location.path();
      };
    $scope.currentLocation = $location.path();

    $scope.toggleMenu = function(){

      if(!$scope.isCollapsed){
        $('.overlay').addClass('activeOverlay');
      }
      //console.log('from > ' + $scope.isCollapsed);
      $scope.isCollapsed = !$scope.isCollapsed;
      //console.log('to > ' + $scope.isCollapsed);

    };

    $scope.collapseMenu = function(){
      $scope.isCollapsed = false;
      $('.overlay').removeClass('activeOverlay');
      $('.side-nav.fixed').removeClass('showNav');
    }

    $scope.logOut = function(){
      Session.destroy();
      $('.overlay').removeClass('activeOverlay');
      $location.path('/');
    }

  }]);
