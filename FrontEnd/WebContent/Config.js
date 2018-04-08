var app = angular.module('myApp', ['ngRoute','ngCookies']);

//configure our routes
app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'index.html'
        })
        
		.when('/blog', {
			templateUrl : 'Blog/Blog.html',
			controller  : 'BlogController'
		})
		// route for the about page
		.when('/forum', {
			templateUrl : 'Forum/Forum.html',
			controller  : 'ForumController'
		})
	
	    .when('/adminBlog', {
		templateUrl : 'Blog/AdminBlog.html',
		controller  : 'AdminBlogController'
	})
	 .when('/adminForum', {
		templateUrl : 'Forum/adminForum.html',
		controller  : 'adminForumController'
	})
	 .when('/register', {
			templateUrl : 'views/register.html',
			controller  : 'UserController'
		})
		
	 .when('/login', {
				templateUrl : 'views/login.html',
				controller  : 'UserController'
			})
	.when('/UserHome', {
			templateUrl : 'Blog/Blog.html'
        })
        	
	 .when('/friend', {
				templateUrl : 'Friend/Friend.html',
				controller  : 'friendController'
			})
	.when('/job', {
			   templateUrl : 'Job/Job.html',
			   controller  : 'JobController'
		   })
	.when('/showjob', {
		   templateUrl : 'Job/showjob.html',
		   controller  : 'JobController'
	   })
    .when('/showfriend', {
		   templateUrl : 'Friend/ShowFriend.html',
		   controller  : 'FriendController'
	   })
    .when('/logout', {
			templateUrl : 'User/logout.html',
			controller  : 'userController'
		})
		
	.when('/chat', {
			templateUrl : 'Chat/Chat.html',
			controller  : 'ChatController'
		})
	.when('/profilepic', {
		templateUrl : 'User/Profilepic.html',

	})
	.when('/home', {
		templateUrl : 'home.html',

	})
	 .when('/friend', {
		   templateUrl : 'Friend/Friend.html',
		   controller  : 'FriendController'
	   });
	
app.run(function($rootScope,$cookieStore)
			{
		console.log("I am in run function");
		console.log($rootScope.currentUser);
		if($rootScope.currentUser==undefined)
			{
			$rootScope.currentUser=$cookieStore.get("user");
			}
		else
			{
			console.log($rootScope.currentUser.userName);
			console.log($rootScope.currentUser.role);
			}
		
		
		
			})
		
			
});