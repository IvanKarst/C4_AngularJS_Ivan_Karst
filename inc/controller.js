app.controller("myCtrl", function ($scope, $http, $routeParams, $location) {
  $scope.alt_data = {};
  $http.get("php/auto.php").then(function (response) {
    $scope.names = response.data.records;
  });

  $scope.alter_loader = function () {
    var selectedName = $scope.names.find(function (name) {
      return name.id === $scope.alt_data.id;
    });

    // Set the initial values for alt_data based on the selectedName
    if (selectedName) {
      $scope.alt_data.firstname = selectedName.firstname;
      $scope.alt_data.lastname = selectedName.lastname;
      $scope.alt_data.street = selectedName.street;
      $scope.alt_data.housenumber = selectedName.housenumber;
      $scope.alt_data.postalcode = selectedName.postalcode;
      $scope.alt_data.residency = selectedName.residency;
      $scope.alt_data.phonenumber = selectedName.phonenumber;
    }
  };

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

  $scope.add_person = function () {
    $http({
      method: "POST",
      url: "../php/auto.php",
      data: $scope.add_person, // Data to be sent (automatically JSON-encoded by AngularJS)
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
