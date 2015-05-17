'use strict';

/**
 * @ngdoc function
 * @name wisableApp.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * Controller of the wisableApp
 */

angular.module('wisableApp')
    .controller('ArticleController', 
        ['$scope', 
        '$location', 
        'Session', 
        'webServices', 
        function ($scope, $location, Session, webServices) {

    var userId = Session.userId;
    var pageNum = 1;

    $scope.appBusy = false;

    $scope.sharearticle = false;

    //Redirect if no user loged in
    if(!userId){

        $location.path('/');

    } else {

        $scope.articles = [];

        webServices.getHomeArticles(pageNum)
            .then(function(homeArticles){
                $scope.articles = homeArticles;
                $scope.appBusy = false;
                pageNum++;
            }, function(data){
                console.log('fallo al recibir articulos')
            });
       
        $scope.likeArticle = function(articleId){

            webServices.likeArticle(articleId);
        }

        $scope.unlikeArticle = function(articleId){

            webServices.dislikeArticle(articleId);
        }

        //console.log('controller',$scope.appBusy);

        $scope.loadMoreArticles = function(){

            //console.log('loadMore',$scope.appBusy, 'pageNum',pageNum);
            //console.log('loadMore')
            if ($scope.appBusy) return;
            
            //console.log('calling page',pageNum);
            $scope.appBusy = true;

              webServices.getHomeArticles(pageNum)
                .then(function(homeArticles){
                    //console.log('then',$scope.appBusy, 'pageNum',pageNum);
                    //console.log(JSON.stringify(homeArticles));
                    if(homeArticles.length == 0) return;

                    angular.forEach(homeArticles, function(value, key){
                        //console.log('sasa',value);
                        $scope.articles.push(value);
                    })
                    
                    $scope.appBusy = false;
                    pageNum++;

                }, function(data){
                    console.log('fallo al recibir articulos')
                });
        }

    }


  }]);
