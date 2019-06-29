



angular.module('admin.service', [])
.factory("MessageServices",MessageServices)
.factory("UserServices",UserServices)

.factory("AuthServices",AuthServices)

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

    .factory("ProductService", function ($http, $sce, $q) {
        var service = {};
        service.Datas = [];
        var deffer = $q.defer();

        service.get = function () {

            $http({
                method: 'Get',
                url: '/Product/Get'
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


function UserServices($http, $state, $rootScope) {

    this.token = sessionStorage.getItem("AuthToken");
    function logout() {
        $state.go('login');
    }

    function getToken() {
        return sessionStorage.getItem("AuthToken");
    }

    function getHeaders() {
        if (getToken() == null)
            $state.go('login');
        else

            return { 'Authorization': 'Bearer ' + getToken() }
    }

    function getUser() {
        return sessionStorage.getItem("UserName");
    }

    function getPetugas() {
        $rootScope.DataUser = {};
        $http({
            method: 'Get',
            url: '/Account/PetugasProfile'
        }).then(function (response) {
            $rootScope.DataUser = response.data;

        }, function (error) {
            alert(error.message);

        });
        return $rootScope.DataUser;
    }


    return {
        logout: logout, getToken: getToken, getHeaders: getHeaders, getUser: getUser, getPetugas: getPetugas
    }
}


function AuthServices($http, $state, $rootScope, MessageServices, $q, UserServices) {
    //var def = $q.defer();

    var service = {
        login: login, register: register, getProfile: getProfile
    };


    function login(user) {
        var data = "grant_type=password&username=" + user.Email + "&password=" + user.Password;
      ///  NProgress.start();
        data = {};
        //data.email = user.Email;
        data.username = user.userName;
        data.password = user.password;
        $http({
            method: 'POST',
            url: '/account/login',
            data: data
        }).then(function successCallback(response) {
            var result = response.data;
            sessionStorage.setItem("AuthToken", result.token);
            sessionStorage.setItem("UserRoles", result.roles);
            sessionStorage.setItem("TokenType", "bearer");
            sessionStorage.setItem("UserName", user.Email);
            if (result.roles[0] != null || result.roles[1] != undefined) {
                var state = result.roles[0];
               // NProgress.done();
                $state.go(state);
            } else {
                MessageServices.error("Anda Tidak Memiliki Akses");
              //  NProgress.done();
                $state.go("/");
            }
         
        }, function errorCallback(response) {
            MessageServices.error(response.data);
           // NProgress.done();
        });
    }


    function register(model) {
        var def = $q.defer();
        $http({
            method: 'Post',
            url: '/account/register',
            data: model
        }).then(function successCallback(response) {
            MessageServices.success("Register Success, Silahkan Login");
            def.resolve(response);
        }, function errorCallback(response) {
            MessageServices.error(response.data);
            def.reject();
            });
        return def.promise;
    }


    function getProfile() {
        var def = $q.defer();
        $http({
            method: 'Get',
            url: '/account/PetugasProfile',
            headers: UserServices.getHeaders()
        }).then(function successCallback(response) {
            def.resolve(response.data);
        }, function errorCallback(response) {
            MessageServices.error(response.data);
            def.reject();
            });
        return def.promise;
    }



    return service;
}




function MessageServices() {
    
    function error(message) {
       alert(message);
    }

    function info(message) {
        alert(message);
    }

    function warning(message) {
        alert(message);
    }

    function success(message) {
        alert(message);
    }

    return {
        error: error, success: success, warning: warning, info: info
    }

}


