var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.render_table = function() {
		const parentElement = document.querySelector('.binder');
		const spanElement = document.createElement('span');
		spanElement.setAttribute('class', 'table_data');
		parentElement.appendChild(spanElement);
	}
});