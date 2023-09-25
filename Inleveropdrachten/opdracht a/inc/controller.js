var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.render = function() {
		console.log("yes");
		// sets all outcomes
		const table = document.querySelector('.data.row');
		cell = document.createElement('div');
		cell.setAttribute('class', 'col-1');
		table.appendChild(cell); 
		
	}

	// Grabs data based on input
	$scope.grabber = function() {
	}

	// Validates data requested by the grabber
	$scope.validator = function() {

	}
});