var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.render = function() {
		const parentElement = document.querySelector('.binder');
		const childElement = document.createElement('div');
		childElement.setAttribute('class', 'data row');
		parentElement.appendChild(childElement);
	}
});

render()