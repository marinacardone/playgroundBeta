'use strict';

/**
 * @ngdoc function
 * @name wisableApp.controller:SearchController
 * @description
 * # SearchController
 * Controller of the wisableApp
 */
angular.module('wisableApp')
  .controller('SearchController', ['$scope', '$http', '$location' , 'Session' , 'Interests', function ($scope, $http, $location, Session, Interests) {
    var userId = Session.userId;

  }]);
