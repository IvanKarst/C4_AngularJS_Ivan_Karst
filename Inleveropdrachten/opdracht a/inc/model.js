var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.base = Array[
		firstName   	= "John",
		lastName		= "Doe",
		street			= "Streetname",
		housenumber		= "123a",
		postalCode		= "1234 AB",
		place			= "Place",
		emailadress		= "johndoe123@hotmail.com"
	];
});

const regex = Array[
	name_reg		= "/^[A-Z][a-z'-]+$/",
	street_reg		= "/^[A-z-]+$/",
	number_reg		= "/^\d{1,4}(\s?)[a-z]{0,1}",
	postal_reg		= "/^\d{4}\s?([A-Z]{2}|[a-z]{2})$/",
	place_reg		= "/^[A-z\s-]+$/",
	emailadress		= "/^([A-z0-9.-])+@([A-z0-9.-])+\.([A-z0-9.-]){2,4}$/"
];