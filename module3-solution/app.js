(function(){
    'use strict';
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
	.directive('foundItems',FoundItems);
function FoundItems(){
var ddo = {templateUrl: 'foundItems.html',
scope:{item:'<'},
controller: NarrowItDownController
};
return ddo;
}

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrowItDown = this;
	var found=[];
narrowItDown.message="msg";
narrowItDown.removeItem = function (itemIndex) {
    this.found.splice(itemIndex, 1);
    console.log(itemIndex);
  };

 narrowItDown.search = function(){
        var promise = narrowItDown.getMatches = MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm);

	 promise.then(function(result){
 narrowItDown.found = result;
 })};
    };
MenuSearchService.$inject = ['$http'];

    function MenuSearchService($http) {
        var service = this;
        var boughtItems = [];
        var shoppingItems = [];

        service.getMatchedMenuItems = function(searchTerm) {

		return $http( { url:"http://davids-restaurant.herokuapp.com/menu_items.json"}).then(function (result) {
    // process result and only keep items that match
     var foundItems = [];
var i;
var menuItems= result.data.menu_items;
	for(i in menuItems){
		var item=menuItems[i];
		console.log(item);
		if(item.description.indexOf(searchTerm)!=-1){foundItems.push(item)}};
    // return processed items
    return foundItems;
		});
	};
    };
})();
