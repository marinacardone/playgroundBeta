'use strict';

/**
 * @ngdoc function
 * @name wisableApp.controller:ProfileController
 * @description
 * # ProfileController
 * Controller of the wisableApp
 */
angular.module('wisableApp')
  .controller('ProfileController', ['$scope', '$http', '$location' , 'Session' , 'usersServerProvider', function ($scope, $http, $location, Session, usersServerProvider) {
    $scope.userEmail = localStorage.wisableUserId;
    $scope.userPassword = '';

    $scope.updateUser = function(userFirstName, userPassword){
        console.log('registering user > '+ $scope.userEmail + ' pass > '+userPassword);
          $http.get(usersServerProvider +'users/register/' + $scope.userEmail + '/'+ userPassword +'/')
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

        $scope.userId = localStorage.wisableUserId;
    };

    $scope.userInterests = [
        {name: 'Arte',
        id:1,
        isSelected:false}, 
        {name: 'Autos',
        id:2,
        isSelected:false}, 
        {name: 'Música',
        id:3,
        isSelected:true},
        {name: 'Tecnología',
        id:4,
        isSelected:false}, 
        {name: 'Cocina',
        id:5,
        isSelected:true},
        {name: 'Películas',
        id:6,
        isSelected:true},
        {name: 'Series de TV',
        id:7,
        isSelected:false},
        {name: 'Famosos',
        id:8,
        isSelected:false}
    ];

    $scope.editInterest = function(interest){
        var index = $scope.selectedInterests.indexOf(interest);
        if (index > -1) {
            $scope.selectedInterests.splice(index, 1);
        } else {
            $scope.selectedInterests.push(interest);
        }
        return $scope.selectedInterests;
    };

    $scope.userLikes = [
    	{
    		articleId : 2,
    		articleTitle : 'Awesome title', 
    		articleAuthor : 'Jack Something',
    		articleCategory : 'Cine',
    		articleDate : '21/03/2014'
    	},
    	{
    		articleId : 3,
    		articleTitle : 'Best title', 
    		articleAuthor : 'Jane Smith',
    		articleCategory : 'Tecnología',
    		articleDate : '05/10/2013'
    	}
    ];
  }]);
