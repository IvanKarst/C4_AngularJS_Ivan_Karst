app.controller('myCtrl', function($scope, defaults) {
	$scope.defaults = angular.copy(defaults.defaults);
	$scope.formData = [];
	$scope.info = $scope.defaults[0];

	$scope.checkData = function (changed_data, $myCtrl) {
		if (
			$scope.formData.hasOwnProperty(changed_data) && 
			$scope.formData[changed_data] != '' && 
			$scope.formData[changed_data] != undefined && 
			!$scope.formData[changed_data].$invalid
		) {
			$currentData = $scope.formData[changed_data]
			$scope.updateData($currentData,changed_data);
		}
	};

	$scope.updateData = function(data, changer) {
		$scope.info[changer] = data
		console.log($scope.info)
	}
});