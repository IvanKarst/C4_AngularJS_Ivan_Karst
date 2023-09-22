var app = angular.module('myApp', []);
app.controller('myCtrl', function($data) {
	$data.render = function() {
		// sets row
		const parent = document.querySelector('.binder');
		const child = document.createElement('div');
		child.setAttribute('class', 'data row');
		parent.appendChild(childElement);
		// sets all outcomes
		const table = document.querySelector('.data.row');
		cell = document.createElement('div');
		childElement.setAttribute('class', 'col-1');
		table.appendChild(childElement); 
		
	}

	// Grabs data based on input
	$data.grabber = function() {
		alert(base[firstName]);
	}

	// Validates data requested by the grabber
	$data.validator = function() {

	}
});