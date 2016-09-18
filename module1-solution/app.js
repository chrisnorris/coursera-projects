(function() {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', function($scope) {

            $scope.menuItems = "";
            $scope.message = "";
            $scope.checkMeal = function() {
                if ($scope.menuItems != "") {
                    var items = $scope.menuItems.split(",").length;
                    if (items <= 3 && items > 0) {
                        $scope.message = "Enjoy!"
                    } else {
                        $scope.message = "Too much!";
                    }
                } else {
                    $scope.message = "Please enter data first";
                }
            }
        });
})();
