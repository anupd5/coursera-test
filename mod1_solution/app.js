(function() {
'use strict';
angular.module('LunchCheck', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope', '$filter'];

function MsgController($scope, $filter) {

  $scope.dishes = "";
  $scope.message = "";

  $scope.checkLunch = function(){

  	var dishNumber = $scope.dishes.split(',').filter(function (dish) {
                    return dish.trim().length > 0;
                }).length;
  	if (dishNumber > 0) {
                    $scope.message = dishNumber <= 3 ? "Enjoy!" : "Too much!";
                } else {
                    $scope.message = "Please enter data first";
                }

  }

  }

})();