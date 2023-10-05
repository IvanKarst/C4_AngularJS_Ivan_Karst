var app = angular.module('myApp', []);
import { regex_check } from "./model";
app.controller('myCtrl', function($scope) {
	$scope.render = function() {
		console.log('test')
		regex_check()
	}
});