var app = angular.module('MobileAngularUiVC', [
  'ngRoute',
  'mobile-angular-ui',
  'mobile-angular-ui.gestures'
]);

app.constant('ENDPOINT_URI', 'http://localhost:8080/web/')

app.config(function($routeProvider, $httpProvider) {
  $routeProvider.when('/', {
    templateUrl: '/app/home/home.html',
    reloadOnSearch: false
  });
  $routeProvider.when('/timeline', {
    templateUrl: '/app/timeline/timeline.html',
    reloadOnSearch: false
  });
  $routeProvider.when('/center', {
    templateUrl: '/app/center/center.html',
    reloadOnSearch: false
  });
  $routeProvider.when('/login', {
    templateUrl: '/app/login/login.html',
    reloadOnSearch: false
  });
  $routeProvider.when('/mine', {
    templateUrl: '/app/mine/mine.html',
    reloadOnSearch: false
  });
  $routeProvider.when('/swipe', {
    templateUrl: 'swipe.html',
    reloadOnSearch: false
  });
  $routeProvider.when('/notify', {
    templateUrl: '/app/notify/notify.html',
    reloadOnSearch: false
  });
  $routeProvider.when('/surround', {
    templateUrl: '/app/surround/surround.html',
    reloadOnSearch: false
  });
  $routeProvider.when('/register', {
    templateUrl: '/app/register/register.html',
    reloadOnSearch: false
  });

  $httpProvider.interceptors.push('InterceptorService');

});

app.controller('MainController', function($rootScope, $scope, $location) {

  $scope.bottomReached = function() {
    alert('已经到最底部了!');
  };

  $rootScope.$on('authorized', function() {
    $location.path('/');
  });

  $rootScope.$on('unauthorized', function() {
    $location.path('/login');
  });

  // Needed for the loading screen
  $rootScope.$on('$routeChangeStart', function() {
    $rootScope.loading = true;
  });

  $rootScope.$on('$routeChangeSuccess', function() {
    $rootScope.loading = false;
  });

  // Fake text i used here and there.
  $rootScope.lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel explicabo, aliquid eaque soluta nihil eligendi adipisci error, illum corrupti nam fuga omnis quod quaerat mollitia expedita impedit dolores ipsam. Obcaecati.';

});