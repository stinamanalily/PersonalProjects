var app=angular.module('single-page-app',['ngRoute']);
app.config(function($routeProvider){
      $routeProvider
          .when('/home',{
                templateUrl: '/'
          })
          
		  .when('/portfolio',{
                templateUrl: 'portfolio.html'
          });
		  .otherwise({
				redirectTo: '/'
			});
});
