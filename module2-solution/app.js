(function() {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.items = ShoppingListCheckOffService.toBuyItems;
        toBuy.checkOff = function(itemIndex) {
            ShoppingListCheckOffService.checkOff(itemIndex);
        }
    }
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.items = ShoppingListCheckOffService.boughtItems;
    }

    function ShoppingListCheckOffService() {
        var service = this;
        service.toBuyItems = [{
            name: "cookies",
            quantity: "5"
        }, {
            name: "cookies",
            quantity: "10"
        }, {
            name: "cookies",
            quantity: "25"
        }, {
            name: "chocolates",
            quantity: "Pack of 5"
        }, {
            name: "chocolates",
            quantity: "Pack of 10"
        }, {
            name: "chocolates",
            quantity: "Pack of 25"
        }, {
            name: "Fruit Juice",
            quantity: "3 Bottles"
        }, {
            name: "Fruit Juice",
            quantity: "5 Bottles"
        }, {
            name: "Fruit Juice",
            quantity: "10 Bottles"
        }];
        service.boughtItems = [];
        service.checkOff = function(itemIndex) {
            service.boughtItems.push(service.toBuyItems[itemIndex]);
            service.toBuyItems.splice(itemIndex, 1);
        };
    }
})();
