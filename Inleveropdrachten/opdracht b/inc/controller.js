app.controller('myCtrl', function($scope, cars) {
	$scope.cars = angular.copy(cars.cars);
	$scope.sortBy = '';

	$scope.sort = function(prop) {
		if ($scope.sortBy === prop && $scope.reverse == false) {
			$scope.reverse = !$scope.reverse;
		} else {
			$scope.sortBy = prop;
			$scope.reverse = false;
		}
	};
});