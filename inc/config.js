app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl : "templates/main.htm"
	})
	.when("/red", {
		templateUrl : "red.htm"
	})
	.when("/green", {
		templateUrl : "green.htm"
	})
	.when("/blue", {
		templateUrl : "blue.htm"
	});
});