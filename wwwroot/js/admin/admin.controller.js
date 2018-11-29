var app = angular.module('admin.controller', ['ui.tinymce'])
  .controller('AdminController', AdminController)
  .controller('NewProductController', NewProductController)
  .controller('ProductController', ProductController)
  .controller('EditProductController', EditProductController)
  .controller('NewProfileController', NewProfileController)
  .controller('EditProfileController', EditProfileController)
  .controller('ProfileController', ProfileController)
  .controller('GaleriesController', GaleriesController)
  .controller('AuthController',AuthController)
  ;

  function AdminController($scope,AuthServices)
  {

   

    $scope.logout=function(){
        alert("Good By");
    }
  }

  function AuthController($scope,AuthServices)
  {
    $scope.login=function(model)
    {
      AuthServices.login(model);
    }

    $scope.register=function(model)
    {
      AuthServices.register(model);
    }

  }

function NewProfileController($scope, $http, $q) {

  $scope.Model = {};
  $scope.tinymceModel = 'Initial content';

  $scope.SaveDraf = function () {
    //  var deffer=$q.defer();
    $scope.Model.Content = $scope.tinymceModel;
    $http({
      method: 'post',
      url: '/Profile/Post',
      data: $scope.Model
    }).then(function successCallback(response) {
      alert("Success");
    }, function errorCallback(response) {
      alert(response.data.Message);
    });
    // return deffer.promise;
  };

  $scope.Publish = function () {
    //  var deffer=$q.defer();
    $scope.Model.Content = $scope.tinymceModel;
    $scope.Model.Status = "Publish";
    $scope.SaveDraf();
  };

  $scope.partialDownloadLink = 'http://localhost:8080/download?filename=';
  $scope.filename = '';

  $scope.uploadFile = function () {
    $scope.processQueue();
  };

  $scope.reset = function () {
    $scope.resetDropzone();
  };


  $scope.tinymceOptions = {

    selector: '#email_b ody',
    themes: "modern",
    height: 300,

    paste_data_images: true,

    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table contextmenu paste code'
    ],
    toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',

  };
}



function EditProfileController($scope, $stateParams, $state, $http, $q) {

  var data = $stateParams.data;
  if (data == null)
    $state.go("profile");
  else {
    $scope.Model = {};
    $scope.Model.ProfileId = data.profileId;
    $scope.Model.Name = data.name;
    $scope.Model.Title = data.title;
    $scope.Model.ShortDescription = data.shortDescription;
    $scope.Model.ImageURL = data.imageURL;
    $scope.Model.Status = "Draf";
    $scope.tinymceModel = data.content;
  }


  $scope.SaveDraf = function (model) {
    //  var deffer=$q.defer();
    model.Content = $scope.tinymceModel;
    $http({
      method: 'Put',
      url: '/Profile/put/' + model.ProfileId,
      contentType: "application/json; charset=utf-8",
      data: model,
    }).then(function successCallback(response) {
      alert("Success");
    }, function errorCallback(response) {
      alert(response.data.Message);
    });
    // return deffer.promise;
  };

  $scope.Publish = function (model) {
    //  var deffer=$q.defer();
    model.Status = "Publish";
    $scope.SaveDraf(model);
  };





  $scope.partialDownloadLink = 'http://localhost:8080/download?filename=';
  $scope.filename = '';

  $scope.uploadFile = function () {
    $scope.processQueue();
  };

  $scope.reset = function () {
    $scope.resetDropzone();
  };


  $scope.tinymceOptions = {

    selector: '#email_b ody',
    themes: "modern",
    height: 300,

    paste_data_images: true,

    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table contextmenu paste code'
    ],
    toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',

  };
}



function ProfileController($scope, $http, ProfileService) {
  $scope.Title = "Daftar Profile"
  $scope.Profile = ProfileService;


  $scope.Delete = function (model) {
    $http({
      method: 'Delete',
      url: '/Profile/Delete/' + model.profileId,
      contentType: "application/json; charset=utf-8"
    }).then(function successCallback(response) {
      var index = $scope.Profile.Datas.indexOf(model);
      $scope.Profile.Datas.splice(index, 1);

      alert("Success");
    }, function errorCallback(response) {
      alert(response.data.Message);
    });
    // return deffer.promise;
  }


}


function NewProductController($scope, $http, $q) {

  $scope.Model = {};
  $scope.tinymceModel = 'Initial content';

  $scope.SaveDraf = function () {
    //  var deffer=$q.defer();
    $scope.Model.Content = $scope.tinymceModel;
    $http({
      method: 'post',
      url: '/Product/Post',
      data: $scope.Model
    }).then(function successCallback(response) {
      alert("Success");
    }, function errorCallback(response) {
      alert(response.data.Message);
    });
    // return deffer.promise;
  };

  $scope.Publish = function () {
    //  var deffer=$q.defer();
    $scope.Model.Content = $scope.tinymceModel;
    $scope.Model.Status = "Publish";
    $scope.SaveDraf();
  };

  $scope.partialDownloadLink = 'http://localhost:8080/download?filename=';
  $scope.filename = '';

  $scope.uploadFile = function () {
    $scope.processQueue();
  };

  $scope.reset = function () {
    $scope.resetDropzone();
  };


  $scope.tinymceOptions = {

    selector: '#email_b ody',
    themes: "modern",
    height: 300,

    paste_data_images: true,

    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table contextmenu paste code'
    ],
    toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',

  };
}


function EditProductController($scope, $stateParams, $state, $http, $q) {

  var data = $stateParams.data;
  if (data == null)
    $state.go("product");
  else {
    $scope.Model = {};
    $scope.Model.ProductId = data.productId;
    $scope.Model.Name = data.name;
    $scope.Model.Title = data.title;
    $scope.Model.ShortDescription = data.shortDescription;
    $scope.Model.ImageURL = data.imageURL;
    $scope.Model.Status = "Draf";
    $scope.tinymceModel = data.content;
  }


  $scope.SaveDraf = function (model) {
    //  var deffer=$q.defer();
    model.Content = $scope.tinymceModel;
    $http({
      method: 'Put',
      url: '/product/put/' + model.ProductId,
      contentType: "application/json; charset=utf-8",
      data: model,
    }).then(function successCallback(response) {
      alert("Success");
    }, function errorCallback(response) {
      alert(response.data.Message);
    });
    // return deffer.promise;
  };

  $scope.Publish = function (model) {
    //  var deffer=$q.defer();
    model.Status = "Publish";
    $scope.SaveDraf(model);
  };





  $scope.partialDownloadLink = 'http://localhost:8080/download?filename=';
  $scope.filename = '';

  $scope.uploadFile = function () {
    $scope.processQueue();
  };

  $scope.reset = function () {
    $scope.resetDropzone();
  };


  $scope.tinymceOptions = {

    selector: '#email_b ody',
    themes: "modern",
    height: 300,

    paste_data_images: true,

    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table contextmenu paste code'
    ],
    toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',

  };
}

function ProductController($scope, $http, ProductService) {
  $scope.Title = "Daftar Product"
  $scope.Product = ProductService;


  $scope.Delete = function (model) {
    $http({
      method: 'Delete',
      url: '/Product/Delete/' + model.profileId,
      contentType: "application/json; charset=utf-8"
    }).then(function successCallback(response) {
      alert("Success");
    }, function errorCallback(response) {
      alert(response.data.Message);
    });
    // return deffer.promise;
  }

}



function GaleriesController($scope, PhotoService, $rootScope) {

  $scope.Photos = PhotoService;

  $scope.ctrl = this;
  $scope.gallery = {
    girls: true
  };


  $scope.options2 = {
    "debug": false,
    "loadingImage": "preload.svg",
    "preloadNext": false,
    "preloadDelay": 1200,
    "hashUrl": false,
    "autoplay": {
      "enabled": false,
      "delay": 3800
    },
    "theme": "drakred",
    "modal": {
      "title": "",
      "transition": "zoomInOut",
      "titleFromImage": true,
      "caption": {
        "position": "bottom"
      },
      "thumbnail": {
        "height": 90,
        "index": false,
        "dynamic": true
      }
    },
    "panel": {
      "visible": true,
      "item": {
        "class": "col-md-4 thumbnail",
        "caption": true,
        "index": false
      },
      "click": {
        "select": true,
        "modal": false
      }
    },
    "image": {
      "heightAuto": {
        "initial": true,
        "onresize": true
      },
      "transition": "flipY",
      "placeholder": "panel"
    }
  };

  $scope.files2 = [];

  var filePath = window.location.origin + "/uploads/"
  PhotoService.get().then(function (response) {
    response.forEach(element => {
      var item = {};
      var file = filePath + element.fileName;
      item.source = { modal: file, panel: file, image: file }
      item.title = element.fileName;
      item.description = "description";
      $scope.files2.push(item);
    });
    $scope.update();

  });


  $scope.update = function () {
    $rootScope.$broadcast('ASG-gallery-edit', {
      id: 'girls',
      update: $scope.files2
    });

  }

}
