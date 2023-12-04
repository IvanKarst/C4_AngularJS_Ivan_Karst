app.controller('myCtrl', function($scope, defaults) {
	$scope.defaults = angular.copy(defaults.defaults);
	$scope.formData = [];
	$scope.currentData = $scope.defaults;
	$scope.info = $scope.defaults;

	$scope.checkData = function (changed_data, $myCtrl) {
		if (
			$scope.formData.hasOwnProperty(changed_data) && 
			$scope.formData[changed_data] != '' && 
			$scope.formData[changed_data] != undefined && 
			$scope.formData[changed_data].$valid
		) {
			$scope.currentData[changed_data] = $scope.formData[changed_data]
			updateData();
		} else {
			console.log('ham')
		}
	};

	var updateData = function() {
		console.log('test')
		$scope.info = $scope.currentData
	}
});