'use strict';

/**
 * @ngdoc function
 * @name wisableApp.controller:FullArticleCtrl
 * @description
 * # FullArticleCtrl
 * Controller of the wisableApp
 */

angular.module('wisableApp')
    .controller('FullArticleController', ['$scope', '$http', '$location', 'Session', 'articlesServerProvider' , function ($scope, $http, $location, Session, articlesServerProvider) {
        
        $scope.articleId = $location.path().slice(9);
        $scope.userId = localStorage.wisableUserId;

    $http.get(articlesServerProvider+'details/'+$scope.userId+'/'+$scope.articleId+'/')
         .then(function(response) {
            $scope.fullArticle = response.data;
         }, function(errResponse) {
            console.error('Error while fetching article' + errResponse);
        });

    // START TRACKING
    mixpanel.track("view", {"article": $scope.articleId});
    ga('send', 'event', 'view', $scope.articleId);
    // END TRACKING

    $scope.likeArticle = function(){

        $http.get(articlesServerProvider+'tastes/like/'+$scope.userId+'/'+$scope.articleId+'/')
            .then(function(response) {

                Materialize.toast('Me gusta este artículo', 2000);

                $scope.likeThisArticle = response.data;

                // START TRACKING
                mixpanel.track("rate-positive", {"article": $scope.articleId});
                ga('send', 'event', 'button', 'rate', 'positive');
                // END TRACKING

                //console.log('service response > '+ JSON.stringify($scope.likeThisArticle));
            }, function(errResponse) {
                console.error('Error while fetching liked article' + errResponse);
            });
    }

    $scope.unlikeArticle = function(){

        $http.get(articlesServerProvider+'tastes/dislike/'+$scope.userId+'/'+$scope.articleId+'/')
            .then(function(response) {

                Materialize.toast('NO me gusta este artículo', 2000);

                $scope.unlikeThisArticle = response.data;

                // START TRACKING
                mixpanel.track("rate-negative", {"article": $scope.articleId});
                ga('send', 'event', 'button', 'rate', 'negative');
                // END TRACKING

                //console.log('service response > '+ JSON.stringify($scope.unlikeThisArticle));
            }, function(errResponse) {
                console.error('Error while fetching liked article' + errResponse);
            });
    }

    $scope.showBack = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);

  }]);