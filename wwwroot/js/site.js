
var app = angular.module('app', ['ui.router']);
app.config(function($stateProvider) {

    var helloState = {
        name: 'root',
        url: '/',
        templateUrl:'index.html'
      }

    var helloState = {
      name: 'hello',
      url: '/hello',
      templateUrl:'/index.html'
    }
  
    var aboutState = {
      name: 'about',
      url: '/about',
      template: '<h3>Its the UI-Router hello world app!</h3>'
    }
  
    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
  });