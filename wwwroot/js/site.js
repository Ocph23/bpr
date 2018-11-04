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
 .directive('dropzone', function() {
  return {
      restrict: 'C',
      link: function(scope, element, attrs) {

          var config = {
              url: 'https://localhost:5001/uploadfiles',
              maxFilesize: 30000,
              paramName: "files",
              maxThumbnailFilesize: 10,
              parallelUploads: 10,
              autoProcessQueue: true
          };

          var eventHandlers = {
              'addedfile': function(file) {
                  scope.file = file;
                  if (this.files[1]!=null) {
                      this.removeFile(this.files[0]);
                  }
                  scope.$apply(function() {
                      scope.fileAdded = true;
                  });
              },

              'success': function (file, response) {
              }

          };

          dropzone = new Dropzone(element[0], config);

          angular.forEach(eventHandlers, function(handler, event) {
              dropzone.on(event, handler);
          });

          scope.processDropzone = function() {
              dropzone.processQueue();
          };

          scope.resetDropzone = function() {
              dropzone.removeAllFiles();
          }
      }
  }
});
