(function() {
    'use strict';

    angular.module('Data')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$q', '$timeout']

    function MenuDataService($q, $timeout) {
        var service = this;
        service.getAllCategories = function() {
            var service = this;
            var boughtItems = [];
            var shoppingItems = [];

            service.getMatchedMenuItems = function(searchTerm) {

                return $http({
                    url: "https://davids-restaurant.herokuapp.com/menu_items.json"
                }).then(function(result) {
                    // process result and only keep items that match
                    var foundItems = [];
                    var i;
                    var menuItems = result.data.menu_items;
                    for (i in menuItems) {
                        var item = menuItems[i];
                        if (item.description.indexOf(searchTerm) != -1) {
                            foundItems.push(item)
                        }
                    };
                    // return processed items
                    return foundItems;
                });
            };

        };
        service.getItemsForCategory = function(categoryShortName) {
            var itemsForCategory = $http({
                url: "https://davids-restaurant.herokuapp.com/menu_items.json",
                params: {
                    category: categoryShortName
                }
            })
        };
    };

})();