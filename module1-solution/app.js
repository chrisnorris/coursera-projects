(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', function($scope) {

            $scope.cssColor = "red";
            $scope.menuItems = "";
            $scope.message = "";
            $scope.setCss = function() {
                if ($scope.menuItems != "") {
                    $scope.cssColor = "green";
                } else {
                    $scope.cssColor = "red";
                }
            }
            $scope.checkMeal = function() {
                if ($scope.menuItems != "") {
                    var items = $scope.menuItems.split(",");
                    var realCount = 0;
                    items.forEach(function(item, index) {
                        if (item.trim().length > 0) {
                            realCount += 1;
                        };
                    })
                    if (realCount <= 3 && realCount > 0) {
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

