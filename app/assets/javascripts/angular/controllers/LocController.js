angular.module('app').controller("LocController",
  ['$location', '$scope', 'Restangular', 'AuthService',
  function ($location, $scope, Restangular, AuthService){
    if(!AuthService.isLoggedIn()){
      AuthService.setPageTryingToAccess();
      return $location.path('/sign_in');
    }

    $scope.locations = Restangular.all('locations').getList().$object;
  }
]);
