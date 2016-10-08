(function(){
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$q', '$timeout']
function MenuDataService($q, $timeout) {
  var service = this;

  service.getAllCategories = function(){
// - this method should return a promise which is a result of using the $http service, 
// using the following REST API endpoint: https://davids-restaurant.herokuapp.com/categories.json
  }; 

  service.getItemsForCategory = function(categoryShortName){ 
// - this method should return a promise which is a result of using the $http service, using the following REST API
// endpoint: https://davids-restaurant.herokuapp.com/menu_items.json?category=, where, before the call to the server, 
// your code should append whatever categoryShortName value was passed in as an argument into the getItemsForCategory method.

};
};

})();
