'use strict';

angular.module('managementApp')
  .directive('systemLogin', function(){
    return {
        restrict : 'E',
        templateUrl : 'views/login.html',
        controller: 'RecruitingCtrl'
      };
  });