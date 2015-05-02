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
      '$location' , 
      'Session' , 
      'articlesServerURL', 
      'Interests',
      'webServices', 
    function ($scope, $http, $location, Session, articlesServerURL, Interests, webServices) {
    
    var userId = Session.userId;
    var baseURL = articlesServerURL+'search/';

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
