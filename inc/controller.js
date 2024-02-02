app.controller("myCtrl", function ($scope, $http, $routeParams, $location) {
  $scope.alt_data = {};
  $http.get("php/auto.php").then(function (response) {
    $scope.names = response.data.records;
  });

  $scope.alter_data = function () {
    $http({
      method: "POST",
      url: "../php/auto.php",
      data: $scope.alt_data, // Data to be sent (automatically JSON-encoded by AngularJS)
      headers: {
        "Content-Type": "application/json",
      },
    }).then(
      function successCallback(response) {
        // Handle success, if needed
        console.log("Data successfully sent to server:", response.data);
      },
      function errorCallback(response) {
        // Handle error, if needed
        console.error("Error sending data to server:", response.status, response.statusText);
      }
    );
  };
});
