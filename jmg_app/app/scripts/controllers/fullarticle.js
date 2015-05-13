'use strict';

/**
 * @ngdoc function
 * @name wisableApp.controller:FullArticleCtrl
 * @description
 * # FullArticleCtrl
 * Controller of the wisableApp
 */

angular.module('wisableApp')
    .controller('FullArticleController', 
        ['$scope', 
        '$http', 
        '$location', 
        'Session', 
        'webServices',
        function ($scope, $http, $location, Session, webServices) {
        
        var articleId = $location.path().slice(9);

        console.log('articleId', articleId)

        $scope.fullArticle = {};

        webServices.getFullArticle(articleId)
            .then(function(fullArticle){
                $scope.fullArticle = fullArticle;
            }, function(data){
                console.log('fallo al recibir el articulo')
            });

    // START TRACKING
    mixpanel.track("view", {"article": $scope.articleId});
    ga('send', 'event', 'view', $scope.articleId);
    // END TRACKING

   

    $scope.likeArticle = function(articleId){

        webServices.likeArticle(articleId);
    }

    $scope.unlikeArticle = function(articleId){

        webServices.dislikeArticle(articleId);
    }

    $scope.showBack = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);

  }]);