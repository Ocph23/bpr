angular.module('main.controller', ['main.service'])

.controller('MainProfileController', MainProfileController)

;



function MainProfileController ($scope, ProfileService)
{
    $scope.Title="Profile";
    $scope.Profile=ProfileService;
 
   
}