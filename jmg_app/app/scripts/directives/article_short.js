'use strict';

angular.module('wisableApp')
.directive('articleShort', function(){
	return {
		restrict : 'E',
		templateUrl : 'views/articles/article_short.html',
		replace: true
	};
});