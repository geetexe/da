myApp.config(function($urlRouterProvider, $locationProvider, $stateProvider){
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise("/");
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'main/home/home.html',
			controller: 'homeController'
		})
		.state('signup', {
			url: '/signup',
			templateUrl: 'main/signup/signup.html',
			controller: 'signUpController'
		})
		.state('buddiesList', {
			url: '/buddiesList',
			templateUrl: 'main/buddies/buddies.html',
			controller: 'buddiesController'
		})
});