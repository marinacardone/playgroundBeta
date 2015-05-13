'use strict';

/**
 * @ngdoc overview
 * @name wisableApp
 * @description
 * # wisableApp
 *
 * Main module of the application.
 */

angular.module('wisableApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.materialize',
    'socialLinks',
    'infinite-scroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/registration', {
        templateUrl: 'views/registration/registration.html',
        controller: 'RegistrationController'
      })
      .when('/subjectpreferences', {
        templateUrl: 'views/registration/subjectpreferences.html',
        controller: 'PreferencesController'
      })
      .when('/login', {
        templateUrl: 'views/registration/login.html',
        controller: 'LoginController'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'ArticleController'
      })
      .when('/article/:articleId', {
        templateUrl: 'views/articles/article.html',
        controller: 'FullArticleController'
      })
      .when('/search', {
        templateUrl: 'views/menuoptions/search.html',
        controller: 'SearchController'
      })
      .when('/profile', {
        templateUrl: 'views/menuoptions/profile.html',
        controller: 'ProfileController'
      })
      .when('/notifications', {
        templateUrl: 'views/menuoptions/notifications.html'
      })
      .when('/social', {
        templateUrl: 'views/menuoptions/social.html'
      })
      .when('/interests', {
        templateUrl: 'views/menuoptions/interests.html',
        controller: 'PreferencesController'
      })
      .when('/likes', {
        templateUrl: 'views/menuoptions/likes.html',
        controller: 'ProfileController'
      })
      .when('/configuration', {
        templateUrl: 'views/menuoptions/configuration.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }])
  .constant('serverUrl', {
      base: 'http://python-recommender.herokuapp.com/',
      articles: 'http://python-recommender.herokuapp.com/articles/',
      users: 'http://python-recommender.herokuapp.com/users/',
      interests: 'http://python-recommender.herokuapp.com/tags/interests/',
      tastes: 'http://python-recommender.herokuapp.com/articles/tastes/'})
  .constant("toastConfig", {
            duration: 3000,
            rounded: "rounded"
        });

