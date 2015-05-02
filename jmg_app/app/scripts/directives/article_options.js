'use strict';

angular.module('wisableApp')
.directive('articleOptions', function(){
	return {
		restrict : 'E',
		templateUrl : 'views/components/article_options.html',
		replace: true
	};
});