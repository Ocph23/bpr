var app = angular.module('admin.controller',  ['ui.tinymce'])

.controller('NewProductController', NewProductController)
.controller('ProductController', ProductController)
.controller('NewProfileController',NewProfileController)
.controller('ProfileController',ProfileController);


function NewProfileController($scope, $http,$q){
   
    $scope.Model={};
    $scope.tinymceModel = 'Initial content';
  
    $scope.SaveDraf = function() {
      //  var deffer=$q.defer();
        $scope.Model.Content=$scope.tinymceModel;
        $http({
            method: 'post',
            url: '/Profile/Post',
            data:$scope.Model
          }).then(function successCallback(response) {
             alert("Success");
            }, function errorCallback(response) {
            alert(response.data.Message);
            });
       // return deffer.promise;
    };

    $scope.Publish = function() {
        //  var deffer=$q.defer();
          $scope.Model.Content=$scope.tinymceModel;
          $scope.Model.Status="Publish";
         $scope.SaveDraf();
      };

    $scope.partialDownloadLink = 'http://localhost:8080/download?filename=';
    $scope.filename = '';

    $scope.uploadFile = function() {
        $scope.processQueue();
    };

    $scope.reset = function() {
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


function ProfileController($scope,$http,ProfileService)
{
    $scope.Title="Daftar Profile"
    $scope.Profile=ProfileService;
}


function NewProductController(){}

function ProductController($scope,$http){
$scope.Title="Products";

}

