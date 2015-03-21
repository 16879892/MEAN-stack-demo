/**
 * Created by Zida on 2015/3/21.
 */
angular.module('chat').config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/chat', {
            templateUrl: 'chat/views/chat.client.view.html'
        });
}]);
