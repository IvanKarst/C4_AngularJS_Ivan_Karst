angular.module('myApp').factory('model', function () {
	var info = {
	  name: 'John Doe',
	  email: 'john@example.com',
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