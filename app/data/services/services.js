myApp.service('toastservice', ['$rootScope',function($rootScope) {
    $rootScope.toast=false;
    $rootScope.success=false;
    var self = this;
    self.popToast = function(status,message){
      $rootScope.toastMessageInit(status,message);
    }
}]);

myApp.service('buddiesListService',['$http', function($http){
	var self = this;
	self.getBuddies = function(){
		return $http.get('/main/buddies/buddiesList.json')
			.then(function(response){
				return response;
				}).catch(function(error){
					console.error(error);
				});
	}
}]);