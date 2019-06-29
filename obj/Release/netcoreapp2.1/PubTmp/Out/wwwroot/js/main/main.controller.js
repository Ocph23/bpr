angular.module('main.controller', ['main.service'])
.controller('HomeController',HomeController)
    .controller('MainProfileController', MainProfileController)
    .controller('DetailProfileController', DetailProfileController)

    .controller('MainProductController', MainProductController)
    .controller('DetailProductController', DetailProductController)
    ;


function HomeController($scope, PhotoService, $rootScope) {

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
            "enabled": true,
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
            "visible": false,
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

function MainProfileController($scope, ProfileService) {
    $scope.Title = "Profile";
    $scope.Profile = ProfileService;


}


function DetailProfileController($scope, $stateParams,$state) {
    $scope.Model = $stateParams.data;
    if($scope.Model==null)
    {
        $state.go("mainprofile");
    }

}




function MainProductController($scope, ProductService) {
    $scope.Title = "Product";
    $scope.Product = ProductService;
}


function DetailProductController($scope, $stateParams) {
    $scope.Model = $stateParams.data;
}