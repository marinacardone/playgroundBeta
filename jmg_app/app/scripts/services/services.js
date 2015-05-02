'use strict';

angular.module('wisableApp')
  .service('Session', function () {
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
	.service('Interests', function(){
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
  .factory('webServices', function($http){
    return {
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
      }
    }
  });
