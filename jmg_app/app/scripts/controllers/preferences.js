'use strict';

/**
 * @ngdoc function
 * @name wisableApp.controller:PreferencesController
 * @description
 * # PreferencesController
 * Controller of the wisableApp
 */
angular.module('wisableApp')
  .controller('PreferencesController', ['$scope', '$http', '$location', 'Session', 'Interests', 'baseServerURL' , function ($scope, $http, $location, Session, Interests, baseServerURL) {

    var userId = Session.userId;

    //Redirect if no user loged in
    if(!userId){
        $location.path('/');
    } else {

    	//var baseURL = 'http://python-recommender.herokuapp.com/';

      /*$http.get(baseURL +'tags/interests/random/25/')
        .then(function(response) {
      		$scope.interests = response.data;
        }, function(errResponse) {
          console.error('Error while fetching tags. ' + errResponse);
      });*/

      //Hardcoded interests
      $scope.interests = Interests;

      $scope.addPreferences = function(){
        // START TRACKING
        var d = new Date();
        var n = d.toLocaleString();
        mixpanel.identify("13487");
        mixpanel.people.set({
            "$first_name": "Joe",
            "$last_name": "Doe",
            "$created": n,
            "$email": Session.userId
        });
        mixpanel.track("registro-completo");
        ga('send', 'event', 'sesion', 'signup', userId);
        // END TRACKING

        // go to Home
        $location.path('/home'); 
      };

    	$scope.selectedInterests = [];

    	$scope.modifyInterest = function(interest){
    		var index = $scope.selectedInterests.indexOf(interest);
    		if (index > -1) {
          // remove
  		    $scope.selectedInterests.splice(index, 1);

          $http.get(baseServerURL +'tags/interests/remove/'+userId+'/'+interest+'/')
            .then(function(response) {
              console.log('removed: ' + response.data);
            }, function(errResponse) {
              console.error('Error while removing tag. ' + errResponse);
          });

    		} else {
          // add
    			$scope.selectedInterests.push(interest);

          $http.get(baseServerURL +'tags/interests/add/'+userId+'/'+interest+'/')
            .then(function(response) {
              console.log('added: ' + response.data);
            }, function(errResponse) {
              console.error('Error while adding tag. ' + errResponse);
          });

    		}
        
      	};

      }

  }]);
