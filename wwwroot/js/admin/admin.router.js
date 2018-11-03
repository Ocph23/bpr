var app = angular.module('admin.router', ['ui.router']);
app.config(function($stateProvider) {
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl:'admin/templates/login.html'
})
  .state('admin', {
      url: '/admin',
      templateUrl:'admin/index.html'
  })

  .state('dashboard', {
      url: '/dashboard',
      parent: 'admin',
      templateUrl:'admin/templates/dashboard.html'
  })
  .state('blog', {
    url: '/blog',
    parent: 'admin',
    templateUrl:'admin/templates/blog.html'
  })
    .state('newblog', {
      url: '/newblog',
      parent: 'admin',
      templateUrl:'admin/templates/newpost.html'
  })
  });