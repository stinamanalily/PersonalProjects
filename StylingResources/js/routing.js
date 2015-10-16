var app = angular.module('single-page-app',['ngRoute']);
app.config(function($routeProvider){
      $routeProvider
          .when('/home',{
                templateUrl: 'home.html'
          })
		  .when('/about',{
                templateUrl: 'about.html'
          })
		  .when('/contact',{
                templateUrl: 'contact.html'
          })
		  .when('/portfolio',{
                templateUrl: 'portfolio.html'
          })
		  .otherwise({
				redirectTo: '/home'
		 });
});

