'use strict';

angular.module('wisableApp')
.directive('preloader', function(){
	return {
		restrict : 'E',
		templateUrl : 'views/preloader.html',
		controller: 'ArticleController',
		replace: true
	};
});