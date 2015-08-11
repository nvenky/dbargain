angular.module('app').controller("LoginController",
  ['$location', '$scope', '$auth', 'AuthService', 'urlToGoToAfterLogin',
  function ($location, $scope, $auth, AuthService, urlToGoToAfterLogin) {
    if(AuthService.isLoggedIn()){
      return $location.path('/');
    }

    $scope.authenticate = function(provider){
      $auth.authenticate(provider);
    };

    $scope.login = function () {
      var credentials = {
        user: {
          email: $scope.email,
          password: $scope.password,
          rememberme: $scope.rememberme
        }
      };

      AuthService.login(credentials,
        function(res) {
          $scope.user.isLoggedIn = true;
          $location.path(urlToGoToAfterLogin.url);
          urlToGoToAfterLogin.url = '/';
        },
        function(err) {
          $scope.errors = [err];
        }
      );
    }
}]);
