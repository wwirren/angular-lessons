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
    .controller('MainCtrl', function ($rootScope, $state) {
        $rootScope.firstName = 'a';

        ///
        $rootScope.$on('$stateChangeError', function () {
            console.log('error');
            alert('error');
            //$state.go('user')
            // $state.go('dashbord')
        })

    })
    .controller('AppBodyCtrl', function () {

    })
    .controller('UsersCtrl', function($scope, userRestApiFactory, $state, $uibModal, $timeout, $rootScope, getUsersResolve){
        $scope.users = [];
        $scope.users = getUsersResolve; ////вместо закомментированного кода ниже
        //     userRestApiFactory.getUsers().
        //         success(function(data, status, headers, config){
        // //        var token = headers('http-token');
        //             $scope.users = data;
        // //          $scope.users = $filter('filter')(users,{'name': search});
        //         }).
        //         error(function(data){
        //             console.log(data);
        //         });
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

        /////
        $scope.clickk = function (e) {
            var str = angular.element(e.target).text();
            console.log(str);
        };

        $scope.nameT = "nameold";
        // $timeout(function () {
        //     $scope.nameT = "namenew"
        // }, 5000);

        $scope.$watch('nameT', function (newVal, oldVal) {
            console.log(newVal);
            console.log(oldVal)

        });

        //$rootScope.firstName = '11rootScopename1';
        $scope.nameV = 'oldName2';
        setTimeout(function () {

            $scope.nameV = 'newNameV';
            // $scope.$apply();
            $rootScope.firstName = '222rootScopename22';
            $scope.$digest();


        }, 2000);

        ///////
        // $scope.Users = [];
        $scope.addUser = function (user){
            // userRestApiFactory.setUser(params).
            console.log(user,"addddddddddd");
            userRestApiFactory.setUser(user).
                success(function (data) {
                    // alert('user is created');
                    $scope.users.push(data);
                    $scope.addNewUserModal.close();

                    console.log(data, '&&&&')
                }).error(function () {
                    console.log("errrrrrr")
                })
        };


        ///////
        // console.log(myResolve);


        ///////
        $scope.currentPage = 1;
        $scope.totalItems = $scope.users.length;
        $scope.pageSize = 2;


        $scope.openEditModal = function (user, index) {
            console.log("openEditModal");
            $scope.currentUser = user;
            $scope.currentUser.index = index;
            $scope.editUserModal = $uibModal.open({
                templateUrl: 'template/editUser.html',
                scope: $scope,
                size: 'lg',
                animation: true
            });

        };

        $scope.editUser = function (editUser){
            // userRestApiFactory.editCurrentUser(editUser, currentUser.index).
            userRestApiFactory.editCurrentUser(editUser,$scope.currentUser.index).
                success(function (data) {
                    // $scope.users.splice(index, 1, data);
                    $scope.users[index]=data;
                    $scope.addNewUserModal.close();
                    console.log(data, '&&&&')
                }).error(function () {
                    console.log("errrrrrr")
                })
        };

        $scope.deleteUser =function (id, index) {
            userRestApiFactory.deleteCurrentUser(id, index).
                success(function () {
                    $scope.users.splice(index,1);
                    console.log("user deleted")
                }).error(function () {
                    console.log("error user deleted")
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

