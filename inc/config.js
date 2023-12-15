app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
	  templateUrl : "templates/main.htm"
	})
	.when("/update", {
	  templateUrl : "templates/update.htm"
	})
	.when("/green", {
	  templateUrl : "templates/green.htm"
	})
	.when("/blue", {
	  templateUrl : "templates/blue.htm"
	});
  });