(function() {
    'use strict';

    angular.module('Loader')
        .component('loader', {
            templateUrl: 'src/loader/loader.template.html',
            controller: LoaderController
        });


    LoaderController.$inject = ['$rootScope']

    function LoaderController($rootScope) {
        var $ctrl = this;
        var cancellers = [];

        $ctrl.$onInit = function() {
            var cancel = $rootScope.$on('$stateChangeStart',
                function(event, toState, toParams, fromState, fromParams, options) {
                    $ctrl.loaderStatus = true;
                });
            cancellers.push(cancel);

            cancel = $rootScope.$on('$stateChangeSuccess',
                function(event, toState, toParams, fromState, fromParams) {
                    $ctrl.loaderStatus = false;
                });
            cancellers.push(cancel);

            cancel = $rootScope.$on('$stateChangeError',
                function(event, toState, toParams, fromState, fromParams, error) {
                    $ctrl.loaderStatus = false;
                });
            cancellers.push(cancel);
        };

        $ctrl.$onDestroy = function() {
            cancellers.forEach(function(item) {
                item();
            });
        };

    };

})();
