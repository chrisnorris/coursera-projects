(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menuapp/menuapp.itemstemplate.html',
  controller: MenuAppController,
  bindings: {
    items: '<',
    myTitle: '@title',
    onRemove: '&'
  }
});

MenuAppController.$inject = ['$rootScope', '$element', '$q', 'MenuDataService']
function menuAppController($rootScope, $element, $q, ) {
  var $ctrl = this;
  var totalItems;

  $ctrl.$onInit = function () {
    totalItems = 0;
  };
  $ctrl.remove = function (myIndex) {
    $ctrl.onRemove({ index: myIndex });
  };
};
})();
