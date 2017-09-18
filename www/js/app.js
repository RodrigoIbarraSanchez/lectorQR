// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('lectorQR', [
	'ionic', 
	'ngCordova', 
	'lectorQR.controller',
	'lectorQR.service'
	])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    //Aquí Ionic ya ha cargado por completo.

  });
})
