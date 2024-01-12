app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
	  templateUrl : "templates/home.htm"
	})
	.when("/alter_data", {
	  templateUrl : "templates/alter_data.htm"
	})
	.when("/add_person", {
	  templateUrl : "templates/add_person.htm"
	});
});