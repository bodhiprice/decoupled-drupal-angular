// practice app for decoupled or "Headless" Drupal

var decoupledDrupal = angular.module('decoupledDrupal', ['ngRoute']);

decoupledDrupal.config(function ($routeProvider) {
  $routeProvider

    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainController'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutController'
    });
});

  	// create the controller and inject Angular's $scope
	decoupledDrupal.controller('MainController', function($scope) {
		// create a message to display in our view
		$scope.title = 'This is the front page';
	});

	decoupledDrupal.controller('AboutController', function($scope) {
		$scope.title = 'This is the about page.';
	});
