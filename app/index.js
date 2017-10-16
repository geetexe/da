var myApp = angular.module('myApp',['ui.router','angular-md5']);
myApp.controller("toastController",["$scope","$rootScope","toastservice","$timeout",function($scope,$rootScope,toastservice,$timeout) {
	$rootScope.toastMessageInit = function(status,message){
		$scope.toastMessage = message;
		$scope.toast = true;
		$scope.success = status=='success'?true:false;
		$timeout(function () {
	        $scope.toast = false;
	        $scope.success = false;
	    }, 6000);
	}
}]);