app.controller('myCtrl', function($scope, $http, $routeParams, $location) {
	$http.get("php/auto.php").then(
		function (response) {
			$scope.names = response.data.records;
		}
	);
});