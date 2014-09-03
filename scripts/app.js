// practice app for decoupled or "Headless" Drupal

angular
  .module('app', ['ui.router'])
    // set up router
    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('front', {
        url: '/',
        templateUrl: 'views/front.html',
        controller: 'frontCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'aboutCtrl'
      });
  }]);
