app = angular.module('app', [
  'ui.router',   //angular-ui-router
  'templates',   //angular-rails-templates
  'restangular', //restangular
  'ngCookies',    //angular-cookies
  'satellizer'
  ])

$(document).ready(function(){
  if (!$('body').hasClass('ng-scope'))
    angular.bootstrap(document.body, ['app'])
});

app.value('urlToGoToAfterLogin', {url: '/'});

app.config(['$stateProvider','$urlRouterProvider', '$httpProvider',
            'RestangularProvider', '$authProvider',
  function($stateProvider, $urlRouterProvider, $httpProvider,
           RestangularProvider, $authProvider){

    //unmatched routes redirect to root
    $urlRouterProvider.otherwise("/");

    //set up states and routing
    $stateProvider
      .state('homeState',{
        url: '/',
        templateUrl: 'homepage.html',
		    controller: 'AppController'
      })
      //auth
      .state('loginState',{
        url: '/sign_in',
        templateUrl: 'sessions/new.html',
        controller : 'LoginController'
      })
      .state('signUpState',{
        url: '/sign_up',
        templateUrl: 'registrations/new.html',
        controller : 'SignUpController'
      })

    $authProvider.facebook({
      clientId: '100703896938969',
      url: '/users/auth/facebook'
    });

    $authProvider.google({
      clientId: '659045875173-ifd33ar3ihjpvt58qq8n7fb79g764iu4.apps.googleusercontent.com',
    });
    //restangular settings
    RestangularProvider.setBaseUrl('/v1');
  }]);
