myApp.controller('buddiesController', ['$scope','toastservice','buddiesListService', function($scope,toastservice,buddiesListService){
	$scope.deleteThis = function(buddy, ind){
		var deletionConfirmation = confirm("You're about to delete "+buddy.name+" "+buddy.surname+" from your buddies list. Are you sure?")
		if(deletionConfirmation){
			$scope.buddies.splice(ind,1);
			toastservice.popToast('success', "Buddy deletion successful!");
		}
	}
	buddiesListService.getBuddies().then(function(response){
		$scope.buddies = response.data;
		console.log(typeof $scope.buddies)
		console.log($scope.buddies)
	}).catch(function(error){
		console.error(error);
	})
	$scope.addBuddy = function(buddy){
		if(buddy.name==undefined || buddy.surname == undefined){
				toastservice.popToast('error', "First and last name is mandatory!");
				return;
		}
		$scope.buddies.push(buddy);
		$scope.bud={};
		toastservice.popToast('success', "Buddy list has been updated!");
		$(function () {
		   $('#addBuddyModal').modal('toggle');
		});
	}
}]);