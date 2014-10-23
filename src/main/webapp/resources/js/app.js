'use strict';

/* App Module */

var simpleChat = angular.module('simpleChat', [
    'ngRoute'
]);


simpleChat.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'templates/main.html'
                });

//        $locationProvider.html5Mode(false).hashPrefix('!');
    }]);
