angular.module('main.controller', ['main.service'])

.controller('MainProfileController', MainProfileController)
.controller('DetailProfileController',DetailProfileController)

;



function MainProfileController ($scope, ProfileService)
{
    $scope.Title="Profile";
    $scope.Profile=ProfileService;
 
   
}


function DetailProfileController($scope, $stateParams)
{
    $scope.Model=$stateParams.data;
}