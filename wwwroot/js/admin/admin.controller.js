var app = angular.module('admin.controller',  ['ui.tinymce'])

.controller('NewPostController', NewPostController);


function NewPostController($scope){

    $scope.tinymceModel = 'Initial content';
  
    $scope.getContent = function() {
      console.log('Editor content:', $scope.tinymceModel);
    };
  
    $scope.setContent = function() {
      $scope.tinymceModel = 'Time: ' + (new Date());
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

