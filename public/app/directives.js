angular.module('directives', [])
    // .directive ('appHeader', function (){
    //     return {
    //         templateUrl: 'layouts/header.html',
    //         controller: 'HeaderCtrl',
    //     }
    // })
    // .directive ('appFooter', function (){
    //     return {
    //         templateUrl: 'layouts/footer.html',
    //         controller: 'HeaderCtrl',
    //     }
    // })
    .directive ('name', function () {
        return {
            scope: {}, //{} or true
            replace: true, // remove tag name
            restrict:'E', //E A M
            // require: '^^last',
            link: function ($scope, elem, attr) {
                $scope.fullname = attr.first + ' ' + attr.last;
            },
            template: '<div> {{fullname}}</div>'
        }
    })
    ///
    .filter ('startFrom', function () {
    return function (data, start ) {
        return data.slice(start)
    }
});



