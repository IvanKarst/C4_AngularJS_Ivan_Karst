angular.module('myApp').factory('model', function () {
	var info = {
		firstName: 'John',
		lastName: 'Doe',
		housenumber: '123ab',
		postalCode: '',
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