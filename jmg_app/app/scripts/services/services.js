'use strict';

angular.module('wisableApp')
  .factory('Session', function () {
	  this.create = function (userId) {
	    this.userId = userId;
	    localStorage.wisableUserId = userId;
	  };
	  this.destroy = function () {
	    this.userId = null;
	    localStorage.removeItem('wisableUserId');
	  };
	  this.userId = localStorage.wisableUserId;
	  return this;
  })
	.factory('Interests', function(){
		return [
        {keyword: 'política',
        isSelected: false},
        {keyword: 'actualidad',
        isSelected: false},
        {keyword: 'moda',
        isSelected: false},
        {keyword: 'deportes',
        isSelected: false},
        {keyword: 'fútbol',
        isSelected: false},
        {keyword: 'decoración',
        isSelected: false},
        {keyword: 'tecnología',
        isSelected: false},
        {keyword: 'manualidades',
        isSelected: false},
        {keyword: 'economía',
        isSelected: false},
        {keyword: 'música',
        isSelected: false},
        {keyword: 'diseño',
        isSelected: false},
        {keyword: 'juegos',
        isSelected: false},
        {keyword: 'maternidad',
        isSelected: false},
        {keyword: 'cine',
        isSelected: false}
      ]
  })
  .factory('webServices', ['$http', '$q', 'serverUrl', 'Session', function($http, $q, serverUrl, Session){

    var service = {
      homeArticles : [],
      getHomeArticles : getHomeArticles,
      userInterests : [],
      getUserInterests : getUserInterests,
      addUserInterest : addUserInterest,
      removeUserInterest : removeUserInterest,
      likeArticle: likeArticle,
      dislikeArticle : dislikeArticle,
      fullArticle : {},
      getFullArticle : getFullArticle,
      search: search
    };

    return service;

   function getHomeArticles(pageNumber){
      var def = $q.defer();

      $http.get(serverUrl.articles+'homepaged/'+Session.userId+'/'+pageNumber+'/')
        .success(function(data){
          service.homeArticles = data;
          def.resolve(data);
        })
        .error(function(){
          def.reject('No se pudieron traer los artículos')
        });

        return def.promise;

    };

    function getUserInterests(){
      var def = $q.defer();

      $http.get(serverUrl.interests+'list/'+Session.userId+'/')
        .success(function(data){
          service.userInterests = data;
          def.resolve(data);
        })
        .error(function(){
          def.reject('No se pudieron traer los intereses')
        });

        return def.promise;
    };

    function addUserInterest(interest){
      var def = $q.defer();

      $http.get(serverUrl.interests+'add/'+Session.userId+'/'+interest+'/')
        .success(function(data){
          def.resolve(data);
        })
        .error(function(){
          def.reject('No se pudo agregar el interes')
        });

        return def.promise;
    };

    function removeUserInterest(interest){
      var def = $q.defer();

      $http.get(serverUrl.interests+'remove/'+Session.userId+'/'+interest+'/')
        .success(function(data){
          def.resolve(data);
        })
        .error(function(){
          def.reject('No se pudo eliminar el interes')
        });

        return def.promise;
    };

    function likeArticle(articleId){
      var def = $q.defer();

      $http.get(serverUrl.tastes+'like/'+Session.userId+'/'+articleId+'/')
        .success(function(data){
          def.resolve(data);
          Materialize.toast('Me gusta este artículo', 2000);
          // START TRACKING
          mixpanel.track("rate-positive", {"article": articleId});
          ga('send', 'event', 'button', 'rate', 'positive');
          // END TRACKING
        })
        .error(function(){
          def.reject('No se pudo agregar el articulo')
        });

        return def.promise;
    };

    function dislikeArticle(articleId){
      var def = $q.defer();

      $http.get(serverUrl.tastes+'dislike/'+Session.userId+'/'+articleId+'/')
        .success(function(data){
          def.resolve(data);
          Materialize.toast('NO me gusta este artículo', 2000);
          // START TRACKING
          mixpanel.track("rate-negative", {"article": articleId});
          ga('send', 'event', 'button', 'rate', 'negative');
          // END TRACKING
        })
        .error(function(){
          def.reject('No se pudo agregar el articulo')
        });

        return def.promise;
    };

    function getFullArticle(articleId){
      var def = $q.defer();

      $http.get(serverUrl.articles+'details/'+Session.userId+'/'+articleId+'/')
        .success(function(data){
          service.fullArticle = data;
          def.resolve(data);
        })
        .error(function(){
          def.reject('No se pudo traer el artículo')
        });

        return def.promise;

    };

    function search(query){
      var def = $q.defer();

      $http.get(serverUrl.articles+'details/'+Session.userId+'/'+articleId+'/')
        .success(function(data){
          service.fullArticle = data;
          def.resolve(data);
        })
        .error(function(){
          def.reject('No se pudo traer el artículo')
        });

        return def.promise;

    };

    /*return {
      getArticles: function(userId){
        return $http.get('http://python-recommender.herokuapp.com/articles/home/'+userId+'/');
      },
      getUserInterests : function(userId){
        return $http.get('http://python-recommender.herokuapp.com/tags/interests/list/'+userId+'/');
      },
      addUserInterest : function(userId, interest){
        return $http.get('http://python-recommender.herokuapp.com/tags/interests/add/'+userId+'/'+interest+'/');
      },
      removeUserInterest : function(userId, interest){
        return $http.get('http://python-recommender.herokuapp.com/tags/interests/remove/'+userId+'/'+interest+'/');
      },
      getHomeArticles: function(userId, pageNumber){
        return $http.get('http://python-recommender.herokuapp.com/articles/homepaged/'+userId+'/'+pageNumber+'/');
      }
    }*/
  }]);
