'use strict';

/**
 * @ngdoc function
 * @name wisableApp.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * Controller of the wisableApp
 */

angular.module('wisableApp')
    .controller('ArticleController', ['$scope', '$http', '$location' , 'Session', 'articlesServerURL' , function ($scope, $http, $location, Session, articlesServerURL) {

    $scope.userId = Session.userId;

    $scope.sharearticle = false;

    //Redirect if no user loged in
    if(!$scope.userId){
        $location.path('/');
    } else {

        $http.get(articlesServerURL+'home/'+$scope.userId+'/')
        .then(function(response) {
            $scope.articles = response.data;
        }, function(errResponse) {
            console.error('Error while fetching articles' + errResponse);
        });
    
       
        $scope.likeArticle = function(articleId){

            $http.get(articlesServerURL +'tastes/like/'+$scope.userId+'/'+articleId+'/')
                .then(function(response) {

                    Materialize.toast('Me gusta este artículo', 2000);

                    $scope.likeThisArticle = response.data;

                    // START TRACKING
                    mixpanel.track("rate-positive", {"article": articleId});
                    ga('send', 'event', 'button', 'rate', 'positive');
                    // END TRACKING

                    //console.log('service response > '+ JSON.stringify($scope.likeThisArticle));
                }, function(errResponse) {
                    console.error('Error while fetching liked article' + errResponse);
                });
        }

        $scope.unlikeArticle = function(articleId){

            $http.get(articlesServerURL+'tastes/dislike/'+$scope.userId+'/'+articleId+'/')
                .then(function(response) {

                    Materialize.toast('NO me gusta este artículo', 2000);

                    $scope.unlikeThisArticle = response.data;

                    // START TRACKING
                    mixpanel.track("rate-negative", {"article": articleId});
                    ga('send', 'event', 'button', 'rate', 'negative');
                    // END TRACKING

                    //console.log('service response > '+ JSON.stringify($scope.unlikeThisArticle));
                }, function(errResponse) {
                    console.error('Error while fetching disliked article' + errResponse);
                });
        }

    }


  }]);
