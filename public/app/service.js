angular.module('services', []).
    service('generalItems', function () {
        var domain = 'http://jsonplaceholder.typicode.com/';
        this.options = {
            urlUsers: domain+'users/',
            urlUser: function (id) {
                return domain + 'users/' + id + '/';
            }
            // urlUsers: function (id) {
            //     return domain+'users'
            // }
        }

    }).
    filter ('customFilter',function(){
        return function(input,a){
            return 'Hi!'+input
        }
    });



