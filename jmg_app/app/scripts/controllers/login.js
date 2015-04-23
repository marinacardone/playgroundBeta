'use strict';

/**
 * @ngdoc function
 * @name wisableApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the wisableApp
 */

angular.module('wisableApp')
  .controller('LoginController', ['$scope', '$http', '$location' , 'Session' , 'usersServerProvider' , function ($scope, $http, $location, Session, usersServerProvider) {

    $scope.invalidCredentials = false;

    $scope.userLogin = function(userEmail, userPassword){

      //console.log('user > '+ userEmail + ' pass > '+userPassword);
      
      $http.get(usersServerProvider +'login/' + userEmail + '/'+ userPassword +'/')
      .then(function(response) {
        // validate credentials AND go to homepage
        if(response.data.success === true){
          Session.create(userEmail);
          //localStorage.setItem('wisableUserId', userEmail);
          //console.log('user id '+localStorage.wisableUserId);

          // START TRACKING
          mixpanel.track("login", {"user": userEmail});
          ga('set', '&uid', userEmail); 
          ga('send', 'event', 'sesion', 'login', userEmail);
          // END TRACKING

          $location.path('/home');
          
        } else {
          $scope.invalidCredentials = true;
          console.log('invalid credentials');
        }
        console.log('service response > '+ JSON.stringify(response.data.success));
      }, function(errResponse) {
        console.error('Error while fetching liked article' + errResponse);
      });
       
    };

}]);