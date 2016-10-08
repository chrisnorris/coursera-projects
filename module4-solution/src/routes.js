// Create routes.js file and configure your routes and view states in it.
// These routes should be defined in the MenuApp module.
(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/home.template.html'
  })

  // Categories page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/menuapp.categoriestemplate.html',
    controller: 'MenuAppController as mainList'
  })
    // Categories page
  .state('items', {
    url: '/items',
    templateUrl: 'src/menuapp/menuapp.itemstemplate.html',
    controller: 'MenuAppController as mainList'
  });

}

})();
