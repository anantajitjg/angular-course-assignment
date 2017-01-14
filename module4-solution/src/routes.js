(function() {
    'use strict';
    angular.module('MenuApp')
        .config(RoutesConfig);
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$uiViewScrollProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider, $uiViewScrollProvider) {
        $uiViewScrollProvider.useAnchorScroll();
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/menu/templates/home.template.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/menu/templates/main-categories.template.html',
                controller: 'MainCategoriesController as mainCategories',
                resolve: {
                    categories: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('items', {
                url: '/list/{shortName}',
                templateUrl: 'src/menu/templates/main-items.template.html',
                controller: 'MainItemsController as mainItems',
                resolve: {
                    items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.shortName);
                    }]
                }
            });
    }
})();
