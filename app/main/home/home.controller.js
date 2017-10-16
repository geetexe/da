myApp.controller('homeController', ['$scope','toastservice','md5', "$state", function($scope,toastservice,md5,$state){
	$scope.signInSubmission = function(){
		if (typeof(Storage) !== "undefined"){
			if(md5.createHash($scope.inputPassword) == JSON.parse(localStorage.getItem("submittedData")).password
				&& $scope.signInFormEmail == JSON.parse(localStorage.getItem("submittedData")).email){
				toastservice.popToast('success', "Login Successful!");
				$state.go("buddiesList");
			}
			else{
				toastservice.popToast('error', "Login Failed! Invalid Credentials.");
			}
		}
		else{
			toastservice.popToast('error', "Check your browser's web storage.");
		}
	}
}]);