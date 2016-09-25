(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;
        alreadyBought.getBoughtItems = ShoppingListCheckOffService.getBoughtItems();
        alreadyBought.showEmptyBasket = function() {
            return this.getBoughtItems.length == 0;
        };
    };

    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.getShoppingItems = ShoppingListCheckOffService.getShoppingItems();
        toBuy.buyItem = function(item) {
            ShoppingListCheckOffService.buyItem(item)
        };

        toBuy.showBought = function() {
            return this.getShoppingItems.length == 0;
        };

    };

    function ShoppingListCheckOffService() {
        var service = this;
        var boughtItems = [];
        var shoppingItems = [{
            name: "cookies",
            quantity: 23
        }, {
            name: "apple cupcakes",
            quantity: 18
        }, {
            name: "hot cross buns",
            quantity: 12
        }, {
            name: "low-fat spam fritters",
            quantity: 2
        }];
        service.buyItem = function(i) {
            boughtItems.push(shoppingItems[i]);
            shoppingItems.splice(i, 1);
        };
        service.getShoppingItems = function() {
            return shoppingItems;
        };
        service.getBoughtItems = function() {
            return boughtItems;
        };
    };
})();

