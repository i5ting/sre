// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers','clock.no320.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html"
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "templates/browse.html"
        }
      }
    })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.index', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/index.html",
          controller: 'HomeCtrl'
        }
      }
    })
		
		/***** home *****/
		
    .state('app.create_role', {
      url: "/create_role",
      views: {
        'menuContent' :{
          templateUrl: "templates/home/create_role.html",
          controller: 'CreateRoleCtrl'
        }
      }
    })
		
		/***** other *****/
    .state('app.second', {
      url: "/second",
      views: {
        'menuContent' :{
          templateUrl: "templates/second.html",
          controller: 'SecondCtrl'
        }
      }
    })
		/***** other *****/
    .state('app.user_info', {
      url: "/user_info",
      views: {
        'menuContent' :{
          templateUrl: "templates/user_info.html",
          controller: 'UserInfoCtrl'
        }
      }
    })

		/***** other *****/
    .state('app.three', {
      url: "/three",
      views: {
        'menuContent' :{
          templateUrl: "templates/three.html",
          controller: 'ThreeCtrl'
        }
      }
    })
		
    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
//
app.factory('$lt_ionicViewServicesss', [
	function() {
		return function(){
	    this.getMagicNumber = function() {
	        return magicNumber;
	    };

	}

}]);

//
// app.service('lt_nav_service', LTNavigationService);
