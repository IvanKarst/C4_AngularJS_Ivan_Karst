const app = angular.module('myApp', [])

app.factory('cars', function () {
	return {
		cars: []
	};
});