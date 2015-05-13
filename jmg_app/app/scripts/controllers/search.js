'use strict';

/**
 * @ngdoc function
 * @name wisableApp.controller:SearchController
 * @description
 * # SearchController
 * Controller of the wisableApp
 */
angular.module('wisableApp')
  .controller('SearchController', [
      '$scope', 
      '$http', 
      'Session' , 
      'serverUrl', 
      'Interests',
      'webServices', 
    function ($scope, $http, Session, serverUrl, Interests, webServices) {
    
    var userId = Session.userId;
    var baseURL = serverUrl.articles+'search/';

    $scope.doSearch = function(searchQuery){
      var searchURL = baseURL + userId + '/' + encodeURIComponent(searchQuery) + '/';
        $http.get(searchURL)
        .then(function(response) {
            $scope.searchresults = response.data;
            $scope.activesearch = true;
        }, function(errResponse) {
          console.error('Error while fetching articles. ' + errResponse);
      });
    }

    

  }]);
