app.controller('myCtrl', function($scope, cars) {
    $scope.updateTable = function(newCar) {
        // Add the new car to the cars array
        $scope.cars.push(angular.copy(newCar));

        // Clear the form after submission
        $scope.newCar = {};
        // You can also save this data to your backend or update your model.js file if needed
    };
});