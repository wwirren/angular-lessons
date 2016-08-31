angular.module('controllers', [])
// .controller('MainCtrl', function($scope, userRestApiFacrtory){
//     $scope.users = [];
//     userRestApiFacrtory.getUser().
//     success(function(data, status, headers, config){
// //        var token = headers('http-token');
//         $scope.users = data;
//         // $scope.users = $filter('filter')(users,{'name':search});
//     }).
//     error(function(data){
//         console.log(data);
//     });
// })
    .controller('MainCtrl', function () {
        
    })
    .controller('AppBodyCtrl', function () {

    })
    .controller('UsersCtrl', function($scope, userRestApiFactory, $state, $uibModal){
        $scope.users = [];
        userRestApiFactory.getUsers().
            success(function(data, status, headers, config){
    //        var token = headers('http-token');
                $scope.users = data;
    //          $scope.users = $filter('filter')(users,{'name': search});
            }).
            error(function(data){
                console.log(data);
            });
        $scope.userInfo = function(id) {
            $state.go('app.user', {id: id});
        };

        ////validation
        $scope.onSubmit = function (object) {
            console.log(object)
        }

        ////add new user
        $scope.openUserModal = function () {
            $scope.addNewUserModal = $uibModal.open({
                templateUrl: 'template/addUser.html',
                scope: $scope,
                size: 'lg',
                animation: true
            })
        }


    })
    .controller('UserCtrl',function($scope, userRestApiFactory, $stateParams){
        $scope.userInfo = [];
        userRestApiFactory.getUser($stateParams.id).
            success(function(data, status, headers, config){
                $scope.userInfo = data;
            }).
            error(function(data){
                console.log(data);
            });
    });

