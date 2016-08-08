
var simpleChatServices = angular.module('simpleChatServices', ['ngResource']);

simpleChatServices.factory('MessagePost', ['$resource',
    function($resource) {
        return $resource("./api/v1/messages", {}, {
            get: {method: 'GET', cache: false, isArray: false},
            save: {method: 'POST', cache: false, isArray: false},
            update: {method: 'PUT', cache: false, isArray: false},
            delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }]);