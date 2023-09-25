var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.render = function() {
		// sets all outcomes
		// const table = document.querySelector('.binder');
		// cell = document.createElement('div');
		// cell.setAttribute('class', 'col-1');
		// table.appendChild(cell); 
		console.log(data)
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