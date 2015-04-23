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
        {keyword: 'política'},
        {keyword: 'actualidad'},
        {keyword: 'moda'},
        {keyword: 'deportes'},
        {keyword: 'fútbol'},
        {keyword: 'decoración'},
        {keyword: 'tecnología'},
        {keyword: 'manualidades'},
        {keyword: 'economía'},
        {keyword: 'música'},
        {keyword: 'diseño'},
        {keyword: 'juegos'},
        {keyword: 'maternidad'},
        {keyword: 'cine'}
      ]
	});