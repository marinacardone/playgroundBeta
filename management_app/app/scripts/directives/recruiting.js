'use strict';

angular.module('managementApp')
.directive('upcomingIntreviews', function(){
    return {
        restrict : 'E',
        templateUrl : 'views/recruiting/upcoming_interviews.html',
        controller: 'RecruitingCtrl'
      };
  });
angular.module('managementApp')
  .directive('openPositions', function(){
    return {
        restrict : 'E',
        templateUrl : 'views/recruiting/open_positions.html',
        controller: 'RecruitingCtrl'
      };
  });
angular.module('managementApp')
  .directive('candidateInfo', function(){
    return {
        restrict : 'E',
        templateUrl : 'views/recruiting/candidate_info.html',
        controller: 'RecruitingCtrl'
      };
  });
angular.module('managementApp')
  .directive('candidateTech', function(){
    return {
        restrict : 'E',
        templateUrl : 'views/recruiting/candidate_tech.html',
        controller: 'RecruitingCtrl'
      };
  });
angular.module('managementApp')
  .directive('candidatesDatabase', function(){
    return {
        restrict : 'E',
        templateUrl : 'views/recruiting/candidates_db.html',
        controller: 'RecruitingCtrl'
      };
  });