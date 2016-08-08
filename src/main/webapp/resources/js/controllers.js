
var simpleChatControllers = angular.module('simpleChatControllers', []);

simpleChatControllers.controller('NewMessageCtrl', ['$scope', 'MessagePost', '$location',
    function NewMessageCtrl($scope, MessagePost, $location) {

        $scope.submit = function () {
            $scope.sub = true;
            var postData = {
                "name": $scope.name,
                "text": $scope.text
            };

            MessagePost.save({}, postData,
                    function success(response) {
                        console.log("Success:" + JSON.stringify(response));
                        $location.path('/');
                    },
                    function error(errorResponse) {
                        console.log("Error:" + JSON.stringify(errorResponse));
                    }
            );

        };

    }]);