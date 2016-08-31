angular.module('factory', []).
factory('userRestApiFactory', function($http,generalItems){
    return {
        getUsers: function() {
            return $http({
                method: "GET",
                // url: "http://jsonplaceholder.typicode.com/users",
                url: generalItems.options.urlUsers,
                headers: {
                    'Content-Type': 'aplication.json; charset=utf-8'
                }
            });
        },
        getUser: function(id) {
            return $http({
                method: "GET",
                // url: "http://jsonplaceholder.typicode.com/users",
                url: generalItems.options.urlUser(id),
                headers: {
                    'Content-Type': 'aplication.json; charset=utf-8'
                }
            });
        }
    };
});
