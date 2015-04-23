'use strict';

/**
 * @ngdoc function
 * @name wisableApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wisableApp
 */
angular.module('wisableApp')
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }])
  .controller('RegistrationController', ['$scope', '$http', '$location', 'Session' , function ($scope, $http, $location, Session) {

  	var baseURL = 'http://python-recommender.herokuapp.com/';

  	$scope.invalidUser = false;

    $scope.createUser = function(userFirstName, userEmail, userPassword){
    	//console.log('registering user > '+ userEmail + ' pass > '+userPassword);
	      $http.get(baseURL +'users/register/' + userEmail + '/'+ userPassword +'/')
	      .then(function(response) {
	        // validate credentials AND go to homepage
	        if(response.data.success === true){
           // register newUser AND go to preferences
            localStorage.setItem('wisableUserId', userEmail);
            //console.log(localStorage.wisableUserId);
        		$location.path('/subjectpreferences');
	        } else {
	          $scope.invalidUser = true
	        }
	        console.log('service response > '+ JSON.stringify(response.data.success));
	      }, function(errResponse) {
	        console.error('Error registering user. ' + errResponse);
	      });

        $scope.userId = localStorage.wisableUserId;
    };

    // START TRACKING
    mixpanel.track("registro-inicio");
    ga('send', 'event', 'signup', 'inicio');
    // END TRACKING

  }]);
