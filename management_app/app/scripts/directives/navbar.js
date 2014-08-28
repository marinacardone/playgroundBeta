'use strict';

angular.module('managementApp')
.directive('navbar', function(){
	return {
		restrict : 'E',
		templateUrl : 'views/navbar.html',
		controller: 'mainNav'
	};
});