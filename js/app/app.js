angular
    .module('app', ['ui.router'])
    .config(function($stateProvider){
      $stateProvider
        .state('home', {
          url:'/',
          templateUrl:'views/home.html'
        })
        .state('home.timeline', {
          templateUrl: 'views/home/timeline.html',
          url: 'timeline'
        })
        .state('home.notifications', {
          templateUrl: 'views/home/notifications.html',
          url: 'notifications'
        })
        .state('home.user', {
          templateUrl:'views/home/user.html',
          url: 'user'
        })
    });
