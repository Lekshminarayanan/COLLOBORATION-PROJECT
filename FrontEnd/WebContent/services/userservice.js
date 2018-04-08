/**
 * UserService-to make server side calls
 */
app.factory('UserService',function($http){
	var userService={}
	alert("inside the register user js");
	userService.registerUser=function(user){
		console.log('in userservice -> register')
		console.log(user)
		return $http.post("http://localhost:9090/CollaborationMiddleware/registeruser",user)
	}
	
	userService.login=function(user){
		console.log('userservice -> login')
		console.log(user)
		return $http.post("http://localhost:9090/CollaborationMiddleware/login",user)
	}
	userService.logout=function(){
		return $http.put("http://localhost:9090/CollaborationMiddleware/logout")	
	}
	userService.getUser=function(){
		return $http.get("http://localhost:9090/CollaborationMiddleware/getuser")
	}
	userService.updateUser=function(user){
		return $http.put("http://localhost:9090/CollaborationMiddleware/updateuser",user)
	}
	return userService;
})	