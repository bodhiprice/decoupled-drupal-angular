// practice app for decoupled or "Headless" Drupal
// lots of refactoring needed

var sourceSite = 'http://dev-decoupled-d7.gotpantheon.com/';

var decoupledDrupal = angular.module('decoupledDrupal', ['ngRoute', 'ngResource',
  'ngSanitize']);

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

	decoupledDrupal.controller('MainController', ['$scope','$http', function($scope, $http) {
		// get the content for node 1
    var node = sourceSite + 'api/node/1.json';
		$http.get(node).success (function(data){
      $scope.aboutNode = data;
    });
	}]);

  decoupledDrupal.controller('AboutController', ['$scope','$http', function($scope, $http) {
    $http.get('http://decoupled-drupal-d7/api/node/3.json').success (function(data){
      $scope.aboutNode = data;
    });
  }]);
