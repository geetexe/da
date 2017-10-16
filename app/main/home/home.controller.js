myApp.controller('homeController', ['$scope','toastservice','md5', function($scope,toastservice,md5){
	$scope.signInSubmission = function(){
		if (typeof(Storage) !== "undefined"){
			if(md5.createHash($scope.inputPassword) == JSON.parse(localStorage.getItem("submittedData")).password
				&& $scope.signInFormEmail == JSON.parse(localStorage.getItem("submittedData")).email){
					toastservice.popToast('success', "Login Successful!");
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