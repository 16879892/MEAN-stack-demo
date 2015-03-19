/**
 * Created by Zida on 2015/3/19.
 */
angular.module('example').controller('ExampleController', ['$scope', 'Authentication',
    function($scope, Authentication) {
        $scope.name = Authentication.user ? Authentication.user.fullName : 'MEAN Application';
    }
]);