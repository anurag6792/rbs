angular.module('rbs')
.controller('DashboardController',['$scope','$state',function($scope,$state){
    $scope.logout = function(){
        $state.go('login');
    };
    $scope.calendar = function(){
        $state.go('calendar');
    };
}]);