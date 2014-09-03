// practice app for decoupled or "Headless" Drupal

angular
  .module('decoupled-Drupal', [])
  .controller('MainController', ['$scope', function($scope) {
    // something here
    $scope.title = "This is a title";
  }]);
