var app = angular.module('main.router',[]);
app.config(function($stateProvider) {
  $stateProvider
  .state('main', {
      url: '/main',
      templateUrl:'main/index.html'
  })

  .state('home', {
    url: '/home',
    parent: 'main',
    templateUrl:'main/home.htm'
})

  .state('about', {
      url: '/about',
      parent: 'main',
      templateUrl:'main/about.html'
  })
  .state('contact', {
    url: '/contact',
    parent: 'main',
    templateUrl:'main/contact.htm'
  })
    .state('mainmainnewblog', {
      url: '/blog',
      parent: 'main',
     // templateUrl:'templates/newpost.html'
  })
  });