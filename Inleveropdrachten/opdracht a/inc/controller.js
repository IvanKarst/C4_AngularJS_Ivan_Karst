angular.module('myApp', []).controller('myCtrl', function($scope, model) {
	$scope.formData = model.getData();
	$scope.editMode = false;

	$scope.toggleEditMode = function () {
		$scope.editMode = !$scope.editMode;
	};

	$scope.saveData = function () {
		// Call the service to save the data
		model.saveData($scope.info);
		$scope.editMode = false;
	};
});