'use strict';

/**
 * @ngdoc function
 * @name wisableApp.controller:ProfileController
 * @description
 * # ProfileController
 * Controller of the wisableApp
 */
angular.module('wisableApp')
  .controller('ProfileController', [
    '$scope', 
    '$http', 
    '$location', 
    'Session', 
    'serverUrl', 
    function ($scope, $http, $location, Session, serverUrl) {
    
    $scope.userEmail = Session.userId;
    $scope.userPassword = '';

    $scope.updateUser = function(userFirstName, userPassword){
        console.log('registering user > '+ $scope.userEmail + ' pass > '+userPassword);
          $http.get(serverUrl.users +'users/register/' + $scope.userEmail + '/'+ userPassword +'/')
          .then(function(response) {
            // validate credentials AND go to homepage
            if(response.data.success === true){
           // register newUser AND go to preferences
                $location.path('/home');
            } else {
              $scope.invalidUser = true
            }
            console.log('service response > '+ JSON.stringify(response.data.success));
          }, function(errResponse) {
            console.error('Error updating user. ' + errResponse);
          });
    };
    
    $scope.editInterest = function(interest){
        var index = $scope.selectedInterests.indexOf(interest);
        if (index > -1) {
            $scope.selectedInterests.splice(index, 1);
        } else {
            $scope.selectedInterests.push(interest);
        }
        return $scope.selectedInterests;
    };

    $scope.userLikes = [];
  }]);
