angular.module('rbs')
.controller('LoginController',['$scope','$state',function($scope,$state){
    $scope.user = {};
    $scope.login = function(){
        if($scope.user.username && $scope.user.password){
            $state.go('menu.bookings');
           }
    };
}]);