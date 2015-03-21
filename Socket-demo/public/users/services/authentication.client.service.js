/**
 * Created by Zida on 2015/3/19.
 */
angular.module('users').factory('Authentication', [
    function(){
        this.user = window.user;

        return {
            user: this.user
        }
    }
]);