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
  .state('profile', {
    url: '/profile',
    parent: 'admin',
    templateUrl:'admin/templates/profile.html',
    controller:"ProfileController"
  })

  .state('product', {
    url: '/product',
    parent: 'admin',
    templateUrl:'admin/templates/product.html',
    controller:"ProductController"
  })
    .state('newprofile', {
      url: '/newprofile',
      parent: 'admin',
      templateUrl:'admin/templates/newprofile.html',
      controller:"NewProfileController"
  })

  .state('newproduct', {
    url: '/newproduct',
    parent: 'admin',
    templateUrl:'admin/templates/newproduct.html',
    controller:"NewProductController"
})
  });