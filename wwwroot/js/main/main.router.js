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

  .state('mainprofile', {
      url: '/profile',
      parent: 'main',
      templateUrl:'main/profile.html',
      controller:"MainProfileController"
  })
  .state('detailprofile', {
    url: '/detailprofile',
    params:{
        data:null
    },
    parent: 'main',
    templateUrl:'main/detailprofile.html',
    controller:"DetailProfileController"
})




  .state('contact', {
    url: '/contact',
    parent: 'main',
    templateUrl:'main/contact.htm'
  })
    .state('mainproduct', {
      url: '/product',
      parent: 'main',
      templateUrl:'main/product.html'
  })
  });