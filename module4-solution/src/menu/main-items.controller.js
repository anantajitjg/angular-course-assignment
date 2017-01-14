(function() {
    'use strict';
    angular.module('MenuApp')
        .controller('MainItemsController', MainItemsController);
    MainItemsController.$inject = ['items'];

    function MainItemsController(items) {
        var mainItems = this;
        mainItems.categoryShortName=items.category.short_name;
        mainItems.categoryName=items.category.name;
        mainItems.items=items.menu_items;
    }
})();
