angular.module('myApp').factory('model', function () {
	var info = {
		firstName: 'John',
		lastName: 'Doe',
		streetName: 'Homestreet',
		housenumber: '123ab',
		postalCode: '1234 AB',
		residency: 'Cheese',
		emailadresss: 'john@example.com',
	};
  
	return {
		getData: function () {
			return info;
		},
		saveData: function (newData) {
			info = angular.copy(newData);
		},
	};
});