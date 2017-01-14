(function() {
    'use strict';
    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('APIBasePath', 'https://davids-restaurant.herokuapp.com');
    MenuDataService.$inject = ['$http', 'APIBasePath'];

    function MenuDataService($http, APIBasePath) {
        var service = this;
        service.getAllCategories = function() {
            return $http({
                method: 'GET',
                url: (APIBasePath + '/categories.json')
            }).then(function success(result) {
                return result.data;
            }, function error(response) {
                throw new Error('Fail to fetch details!');
            });
        };
        service.getItemsForCategory = function(categoryShortName) {
            return $http({
                method: 'GET',
                url: (APIBasePath + '/menu_items.json'),
                params: {
                    category: categoryShortName
                }
            }).then(function success(result) {
                return result.data;
            }, function error(response) {
                throw new Error('Fail to fetch details!');
            });
        };
    }
})();
