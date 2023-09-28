var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.render = function() {
		
	}

	// Grabs data based on input
	$scope.grabber = function() {
		if($scope.base[firstName] != ''){
			alert('test')
		}
	}

	// Validates data requested by the grabber
	$scope.validator = function() {

	}
});