/**
 * 
 */
app.controller('UserController', function($scope, $rootScope, $location,
		UserService) {	
	$scope.registerUser = function(user) {
	console.log('entering usercontroller registerUser function in frontend'
				+ user)
		UserService.registerUser(user).then(function(response) {
			console.log('Registered Successfully... please login again..')
			$location.path('/home')
		}, function(response) {
			$scope.error = response.data
		})
	}
	$scope.login = function(user) {
		UserService.login(user).then(function(response) {
			$rootScope.loggedInUser = response.data
			$cookiesStore.put('currentuser', response.data)
			$location.path('/login')
		}, function(response) {
			$scope.error = response.data
			$location.path('/login')
		})
	}
	
	})
