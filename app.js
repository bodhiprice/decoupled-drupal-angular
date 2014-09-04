/**
 * Practice app for decoupled or "Headless" Drupal
 * lots of refactoring needed
 */

// set the URL for Drupal site
var sourceSite = 'http://dev-decoupled-d7.gotpantheon.com/';

/**
 * Initialize app - the dependencies are:
 * ngRoute - handles routing to different 'pages'
 * ngResource - allows stripping out the # from the path. Not used right now, but will be.
 * ngSanitize - allows working with HTML, which we need to print the body field of the node
 */

var decoupledDrupal = angular.module('decoupledDrupal', ['ngRoute', 'ngResource',
  'ngSanitize']);

decoupledDrupal.config(function ($routeProvider) {
  // configure routes
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

	decoupledDrupal.controller('MainController', ['$scope','$http', function($scope, $http) {
		// get the content for node 1
    var node = sourceSite + 'api/node/1.json';
		$http.get(node).success (function(data) {
      $scope.node = data;
    });
	}]);

  decoupledDrupal.controller('AboutController', ['$scope','$http', function($scope, $http) {
    // get the content for node 3
    var node = sourceSite + 'api/node/3.json';
    $http.get(node).success (function(data) {
      $scope.node = data;
    });
  }]);
