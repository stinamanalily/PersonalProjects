var app=angular.module('single-page-app',['ngRoute']);
app.config(function($routeProvider){
      $routeProvider
          .when('/home',{
                templateUrl: 'home.html'
          })
		  .when('/portfolio',{
                templateUrl: 'portfolio.html'
          })
		  .when( '/', {
				redirectTo: 'home.html'
			});
});

