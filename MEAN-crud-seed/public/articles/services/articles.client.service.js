/**
 * Created by Zida on 2015/3/20.
 */
angular.module('articles').factory('Articles', ['$resource', function($resource){
    return $resource('api/articles/:articleId', {
        articleId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    })
}]);