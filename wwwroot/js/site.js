var app = angular.module('app', 
[
  'ui.router',
  'admin.router',
  'admin.controller',
  'admin.service',
  'main.router',
  'main.controller',
  'main.service'
])
.config(function($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.when("", "main/home")
 })

  
  ;