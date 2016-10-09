(function() {
    'use strict';

    angular.module('MenuApp')
        .service('MenuAppService', MenuAppService);


    MenuAppService.$inject = ['$q', '$timeout', '$http']

    function MenuAppService($q, $timeout, $http) {
        var service = this;

       

        // returns categories
        service.getItems = function() {
            var items = [];
            $http({
                url: "https://davids-restaurant.herokuapp.com/categories.json"
            }).then(function(result) {
                // process result and only keep items that match

                var i;
                var menuItems = result.data;
                for (i in menuItems) {
                    var item = menuItems[i];
                  
                    items.push({
                        name: item.name,
                        short_name: item.short_name
                    });
                }
            });

            var deferred = $q.defer();

            // Wait 2 seconds before returning
            $timeout(function() {

                // deferred.reject(items);
                deferred.resolve(items);
            }, 0);

            return deferred.promise;
        };
        service.getItemsForCategory = function(categoryShortName) {
           var itemsForCategory = [];
            $http({
                url: "https://davids-restaurant.herokuapp.com/menu_items.json",
                params: {
                    category: categoryShortName
                }
            }).then(function(result) {
                // process result and only keep items that match
              
                var i;
                var categoryItems = result.data.menu_items;
                for (i in categoryItems) {
                    var item = categoryItems[i];
                    itemsForCategory.push({
                        name: item.name
                    });
                }
            });

            var deferred = $q.defer();

            // Wait 2 seconds before returning
            $timeout(function() {

                // deferred.reject(items);
                deferred.resolve(itemsForCategory);
            }, 0);

            return deferred.promise;
        };
    }

})();