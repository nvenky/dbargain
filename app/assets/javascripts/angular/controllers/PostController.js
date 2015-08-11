angular.module('app').controller("PostController",
  ['$scope', function ($scope, Restangular) {

    $scope.posts = function () {
      $scope.posts = Restangular.all('posts');
    }
}]);
