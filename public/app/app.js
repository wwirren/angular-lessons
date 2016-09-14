var app = angular.module('myapp', [
    'controllers',
    'services',
    'factory',
    'directives',
    'ui.router',
    'ui.bootstrap'
]);
app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/app/users');
    $stateProvider
        .state('app',{
            url: '/app',
            templateUrl: 'template/app-body.html',
            controller: 'AppBodyCtrl'
        })
        .state('app.users',{
            url: '/users',
            templateUrl: 'template/users.html',
            controller: 'UsersCtrl',
            resolve: {
                getUsersResolve: function ($q, userRestApiFactory) {
                    var defer = $q.defer();   //// если нам нужно чтобы код подождал, резолв выполняется до контроллера
                    userRestApiFactory.getUsers()
                        .success(
                        function (data) {
                            defer.resolve(data);
                        })
                        .error(
                        function (data) {
                            defer.reject()
                        })
                    return defer.promise;
                }
            }
            // resolve: {
            //     myResolve: function ($q, $timeout) {
            //         var defer = $q.defer();   //// если нам нужно чтобы код подождал, резолв выполняется до контроллера
            //         $timeout(
            //            function () {
            //                defer.resolve("a");
            //                console.log("a");
            //            }, 4000);
            //         return defer.promise;
            //     }
            // }
        })
        .state('app.user',{
            url: '/users/{id}',
            templateUrl: 'template/user.html',
            controller: 'UserCtrl'
        });

})

