'use strict';

angular.module('wisableApp')
.directive('navbar', function(){
	return {
		restrict : 'E',
		templateUrl : 'views/components/mainnav.html',
		controller: 'MainNavigationController',
        replace: true
	};
})
