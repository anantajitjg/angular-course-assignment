(function() {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchList = "";
        $scope.message = "";
        $scope.helpMessage="";
        $scope.checkIfTooMuch = function() {
            var lunchList = $scope.lunchList;
            if (lunchList.length > 0) {
                var count=0;
                var lunchArr = lunchList.split(",");
                var lunchArrSize=lunchArr.length;
                for(var i=0;i<lunchArrSize;i++){
                  if(lunchArr[i].trim().length>0){
                    count++;
                  }
                }
                $scope.helpMessage="";
                $scope.inputStyle={'border-color':'#398439'};
                $scope.mesageStyle={'color':'#398439'};
                if (count > 3) {
                    $scope.message = "Too much!";
                } else {
                    $scope.message = "Enjoy!";
                }
                if(count<lunchArrSize){
                  $scope.helpMessage="I don't consider empty item!";
                }
            } else {
                $scope.inputStyle={'border-color':'#B5555A'};
                $scope.mesageStyle={'color':'#B5555A'};
                $scope.message = "Please enter data first";
            }
        };
    }
})();
