//------------------------------------ AngularJS ---------------------------------------
var app = angular.module("myApp", ["ngMap","ngRoute","ngDialog"]);
app.config(function($routeProvider,$locationProvider) {
	$routeProvider
	.when("/signin", {
		templateUrl : "signin/signin.html",
		controller : "signinCtrl"
	})
	.when("/signup", {
		templateUrl : "signup/signup.html",
		controller : "signupCtrl"
	})
	.when("/home/create", {
		templateUrl : "create/create.html",
		controller : "createCtrl"
	})
	.when("/home/pasttravel", {
		templateUrl : "pasttravel/pasttravel.html",
		controller : "pasttravelCtrl"
	})
	.when("/home/profile", {
		templateUrl : "profile/profile.html",
		controller : "profileCtrl"
	})
	.otherwise({ redirectTo: '/signup' });
});
//--------------------------------------------------------------------------------------




