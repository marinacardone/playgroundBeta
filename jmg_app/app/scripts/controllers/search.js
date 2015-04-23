'use strict';

/**
 * @ngdoc function
 * @name wisableApp.controller:SearchController
 * @description
 * # SearchController
 * Controller of the wisableApp
 */
angular.module('wisableApp')
  .controller('SearchController', ['$scope', '$http', '$location' , 'Session' , 'articlesServerProvider', function ($scope, $http, $location, Session, articlesServerProvider) {
    var userId = Session.userId;

    //http://python-recommender.herokuapp.com/articles/search/giraldezblack@gmail.com/boca%20juniors/

    var baseURL = articlesServerProvider+'search/';

    $scope.doSearch = function(searchQuery){
        $http.get(baseURL + userId + '/' +encodeURIComponent(searchQuery))
        .then(function(response) {
            $scope.articles = response.data;
        }, function(errResponse) {
          console.error('Error while fetching articles. ' + errResponse);
      });
    }

      

  }]);
