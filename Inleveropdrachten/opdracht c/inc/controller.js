app.controller('myCtrl', function($scope, myFty) {
	$scope.factory = angular.copy(myFty);
	$scope.initialize = function(){
		console.log($scope.factory);
	}
});