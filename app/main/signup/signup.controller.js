myApp.controller('signUpController',['$scope','toastservice','md5','$state','$timeout', function($scope, toastservice,md5,$state,$timeout){
	var currentDate = new Date();
	$scope.minDate = new Date(currentDate.getFullYear()-150,currentDate.getMonth(),currentDate.getDate());
	$scope.maxDate = new Date(currentDate.getFullYear()-18,currentDate.getMonth(),currentDate.getDate());
	$scope.signUpSubmission = function(){
		if($scope.inputPassword != $scope.inputConfirmPassword){
			toastservice.popToast('error', "Password and confirm password fields don't match.");
			return;
		}
		if (typeof(Storage) !== "undefined") {
			var utc = Date.UTC(
				new Date($scope.ipDOB).getFullYear(),
				new Date($scope.ipDOB).getMonth(),
				new Date($scope.ipDOB).getDate()
			);
			var submitData = {
				"name": $scope.ipFirstName +" "+ $scope.ipLastName,
				"email": $scope.signUpFormEmail,
				"dob": utc,
				"password": md5.createHash($scope.inputPassword)
			};
			localStorage.setItem("submittedData", JSON.stringify(submitData));
			console.log(submitData);
			toastservice.popToast('success', "Form submitted successfully!");
			angular.element(document.querySelector('#resetBtn')).click();
			$timeout(function(){
				$state.go('buddiesList');
			},1500)
		} else {
			toastservice.popToast('error', "Failed to save. Check your browser's web storage.");
		}
	}
}]);