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
            controller: 'UsersCtrl'
        })
        .state('app.user',{
            url: '/users/{id}',
            templateUrl: 'template/user.html',
            controller: 'UserCtrl'
        });

})

