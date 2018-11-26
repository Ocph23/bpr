angular.module('admin.service', [])
    .factory("ProfileService", function ($http, $sce, $q) {
        var service = {};
        service.Datas = [];
        var deffer = $q.defer();

        service.get = function () {

            $http({
                method: 'Get',
                url: '/Profile/Get'
            }).then(function successCallback(response) {
                response.data.forEach(element => {
                    element.content = $sce.trustAsHtml(element.content);
                    service.Datas.push(element);
                });;
                deffer.resolve(service.Datas);
            }, function errorCallback(response) {
                deffer.reject();
                alert(response.data.Message);
            });
            return deffer.promise;
        }
        service.get();
        return service;

    })

    .factory("PhotoService", function ($http, $sce, $q) {
        var service = {};
        service.Datas = [];
        var deffer = $q.defer();

        service.get = function () {

            $http({
                method: 'Get',
                url: '/Photo/Get'
            }).then(function successCallback(response) {
                response.data.forEach(element => {
                    element.content = $sce.trustAsHtml(element.content);
                    service.Datas.push(element);
                });;
                deffer.resolve(service.Datas);
            }, function errorCallback(response) {
                deffer.reject();
                alert(response.data.Message);
            });
            return deffer.promise;
        }
        return service;

    })





    ;


