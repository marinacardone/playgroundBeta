'use strict';

angular.module('wisableApp')
.directive('shareOptions', function(){
	return {
		restrict : 'E',
		templateUrl : 'views/components/share_options.html',
		controller: 'ArticleController',
		replace: true
	};
});