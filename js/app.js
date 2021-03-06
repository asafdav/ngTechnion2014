angular.module('technion', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'SearchCtrl',
        templateUrl: "views/homepage.html"
      })
      .state('video', {
        url: '/video/{id}',
        controller: 'VideoCtrl',
        templateUrl: 'views/video.html'
      });
  });