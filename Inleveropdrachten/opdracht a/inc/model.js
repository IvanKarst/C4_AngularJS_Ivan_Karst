const app = angular.module('myApp', [])

app.factory('defaults', function () {
	return {
		defaults: [
			{
				firstName: 'John',
				lastName: 'Doe',
				streetName: 'Homestreet',
				housenumber: '123ab',
				postalCode: '1234 AB',
				residency: 'Cheese',
				emailadress: 'john@example.com',
				pageLoad: ''
			}
		]
	};
});