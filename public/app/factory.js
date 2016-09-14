angular.module('factory', []).
    factory('userRestApiFactory', function($http,generalItems){
        return {
            getUsers: function() {
                return $http({
                    method: "GET",
                    // url: "http://jsonplaceholder.typicode.com/users",
                    url: generalItems.options.urlUsers,
                    headers: {
                        'Content-Type': 'application.json; charset=utf-8'
                    }
                });
            },
            getUser: function(id) {
                return $http({
                    method: "GET",
                    // url: "http://jsonplaceholder.typicode.com/users",
                    url: generalItems.options.urlUser(id),
                    headers: {
                        'Content-Type': 'application.json; charset=utf-8'
                    }
                });
            },
            setUser: function (data) {//setUser: function (data, params) {
                return $http({
                    method: "POST",
                    url: generalItems.options.urlUsers,
                    data: data
                    // params:{
                    //     key1: value1,
                    //     key2: value2
                    // },
                    //?key1 = value1
                    // headers: {
                    //     'Content-Type': 'application.json; charset=utf-8'
                    // }
                });
            },
            editCurrentUser: function (data,id) {
                return $http({
                    method: "PUT",
                    url: generalItems.options.urlUser(id),
                    data: data//data: user,

                });
            }
            ,
            deleteCurrentUser: function (id) {
                return $http({
                    method: "DELETE",
                    //url: generalItems.options.urlUser(id),
                    url: generalItems.options.urlUser(id)
                    //data: data//data: user,
                    // headers: {
                    //     'Content-Type': 'application.json; charset=utf-8'
                    // }
                });
            }
        };
    });
