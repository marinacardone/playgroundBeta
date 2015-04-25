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
    function ($scope, $http, $location, Session, articlesServerURL, Interests) {
    
    var userId = Session.userId;
    var baseURL = articlesServerURL+'search/';

    /*'http://python-recommender.herokuapp.com/articles/search/marina@wisable.com/ios/'*/

    $scope.doSearch = function(searchQuery){
      $scope.activesearch = true;
      var searchURL = baseURL + userId + '/' + encodeURIComponent(searchQuery);
        $http.get(searchURL)
        .then(function(response) {
            $scope.searchresults = response.data;
        }, function(errResponse) {
          console.error('Error while fetching articles. ' + errResponse);
      });
    }

    //http://python-recommender.herokuapp.com/tags/interests/list/giraldezblack@gmail.com/

    var getSelectedInterests = function(userId){
      $http.get('http://python-recommender.herokuapp.com/tags/interests/list/'+userId+'/')
      .then(function(response){
        $scope.userInterests = response.data.tags;
        interestList(); 
      }, function(errResponse){
        console.error('Error while fetching interests. ' + errResponse);
      })
    }

    var interestList = function(){
      var userInterests = $scope.userInterests;
      for(var i=0; i<Interests.length; i++){
        Interests[i].isSelected = false;
        for(var j=0; j<userInterests.length; j++){
          if(Interests[i].keyword == userInterests[j]){
            Interests[i].isSelected = true;
          }
        }
      }
    }

    getSelectedInterests(userId);

    $scope.interestBtnAction = function(interest){
      if(interest.isSelected){
        return "Siguiendo"
      } else {
        return "Seguir"
      }
    }

  }]);
