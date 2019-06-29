var app = angular.module('admin.router', ['ui.router']);
app.config(function ($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'admin/templates/login.html',
      controller: "AuthController"
    })

    .state('register', {
      url: '/register',
      templateUrl: 'admin/templates/register.html',
      controller: "AuthController"
    })
    
    .state('admin', {
      url: '/admin',
      templateUrl: 'admin/index.html',
      controller: 'AdminController'
    })

    .state('dashboard', {
      url: '/dashboard',
      parent: 'admin',
      templateUrl: 'admin/templates/dashboard.html'
    })
    .state('profile', {
      url: '/profile',
      parent: 'admin',
      templateUrl: 'admin/templates/profile.html',
      controller: "ProfileController"
    })

    .state('product', {
      url: '/product',
      parent: 'admin',
      templateUrl: 'admin/templates/product.html',
      controller: "ProductController"
    })
    .state('newprofile', {
      url: '/newprofile',
      parent: 'admin',
      templateUrl: 'admin/templates/newprofile.html',
      controller: "NewProfileController"
    })

    .state('editprofile', {
      url: '/editprofile',
      parent: 'admin',
      params: {
        data: null
      },
      templateUrl: 'admin/templates/newprofile.html',
      controller: "EditProfileController"
    })

    .state('editproduct', {
      url: '/editproduct',
      parent: 'admin',
      params: {
        data: null
      },
      templateUrl: 'admin/templates/newproduct.html',
      controller: "EditProductController"
    })

    .state('newproduct', {
      url: '/newproduct',
      parent: 'admin',
      templateUrl: 'admin/templates/newproduct.html',
      controller: "NewProductController"
    })

    .state('galeries', {
      url: '/galeries',
      parent: 'admin',
      templateUrl: 'admin/templates/galeries.html',
      controller: "GaleriesController"
    })
});