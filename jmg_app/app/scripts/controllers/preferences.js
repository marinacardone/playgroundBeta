'use strict';

/**
 * @ngdoc function
 * @name wisableApp.controller:PreferencesController
 * @description
 * # PreferencesController
 * Controller of the wisableApp
 */
 angular.module('wisableApp')
 .controller('PreferencesController', [
  '$scope', 
  '$http', 
  '$location', 
  'Session', 
  'Interests', 
  'baseServerURL',
  'webServices' , 
  function ($scope, $http, $location, Session, Interests, baseServerURL, webServices) {

    var userId = Session.userId;
    var selectedInterests;

    //Redirect if no user loged in
    if(!userId){
      $location.path('/');
    } else {

      $scope.interests = Interests;

      $scope.finishRegistration = function(){
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

      // interests

      webServices.getUserInterests(userId)
      .then(function(response){
        selectedInterests = response.data.tags;
        updateInterests();
      }, function(errResponse){
        console.error('Error while fetching interests. ' + errResponse);
      });

      $scope.modifyInterest = function(interest){
        console.log(interest.keyword + ' at '+selectedInterests);
        var index = selectedInterests.indexOf(interest.keyword);
        if (index > -1) {
          // remove
          selectedInterests.splice(index, 1);

          webServices.removeUserInterest(userId, interest.keyword)
          .then(function(response) {
            interest.isSelected = false;
            console.log('removed: ' + response.data);
          }, function(errResponse) {
            console.error('Error while removing tag. ' + errResponse);
          });

        } else {
          // add
          selectedInterests.push(interest.keyword);

          webServices.addUserInterest(userId, interest.keyword)
          .then(function(response) {
           interest.isSelected = true;
            console.log('added: ' + response.data);
          }, function(errResponse) {
            console.error('Error while adding tag. ' + errResponse);
          });

        }
        
      };

      //---

      var updateInterests = function(){
        for(var i=0; i<Interests.length; i++){
          Interests[i].isSelected = false;
          for(var j=0; j<selectedInterests.length; j++){
            if(Interests[i].keyword == selectedInterests[j]){
              Interests[i].isSelected = true;
            }
          }
        }
      }      

      $scope.interestBtnLabel = function(interest){
        if (interest.isSelected) {
          return "Siguiendo"
        } else {
          return "Seguir"
        };
      }

    }

  }]);
