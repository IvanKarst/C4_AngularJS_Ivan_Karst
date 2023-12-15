app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl : "templates/main.htm"
	})
	.when("/red", {
		templateUrl : "templates/red.htm"
	})
	.when("/green", {
		templateUrl : "templates/green.htm"
	})
	.when("/blue", {
		templateUrl : "templates/blue.htm"
	})
	.otherwise({
		redirectTo: "/"
	});
});