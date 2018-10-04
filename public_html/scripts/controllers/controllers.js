'use strict';

/* Controllers */

var appCtrl = angular.module('goodsPrice.controllers', []);


// Clear browser cache (in development mode)
//
// http://stackoverflow.com/questions/14718826/angularjs-disable-partial-caching-on-dev-machine
appCtrl.run(function ($rootScope, $templateCache) {
  $rootScope.$on('$viewContentLoaded', function () {
    $templateCache.removeAll();
  });
});


appCtrl.controller('DummyCtrl', ['$scope', 'DummyFactory', function ($scope, DummyFactory) {
  $scope.bla = 'bla bla bla from controller';
  DummyFactory.query({}, function (data) {
    $scope.foo = data;
  });
}]);

appCtrl.controller('GoodListCtrl', ['$scope', 'GoodsFactory', 'GoodFactory', '$location',
  function ($scope, GoodsFactory, GoodFactory, $location) {

    /* callback for ng-click 'editUser': */
    $scope.editGood = function (goodId) {
      $location.path('/good-detail/' + goodId);
    };

    /* callback for ng-click 'deleteUser': */
    $scope.deleteGood = function (goodId) {
      GoodFactory.delete({ id: goodId });
      //$location.path('/goods-list');
      //$scope.goods = GoodsFactory.query();
      $location.path('/goods-after');
    };

    /* callback for ng-click 'createUser': */
    $scope.createNewGood = function () {
      $location.path('/good-creation');
    };

    $scope.goods = GoodsFactory.query();
  }]);

appCtrl.controller('GoodDetailCtrl', ['$scope', '$routeParams', 'GoodFactory', '$location',
  function ($scope, $routeParams, GoodFactory, $location) {

    /* callback for ng-click 'updateUser': */
    $scope.updateGood = function () {
      GoodFactory.update($scope.good);
      $location.path('/goods-list');
    };

    /* callback for ng-click 'cancel': */
    $scope.cancel = function () {
      $location.path('/goods-list');
    };

    $scope.good = GoodFactory.show({id: $routeParams.id});
  }]);

appCtrl.controller('GoodCreationCtrl', ['$scope', 'GoodsFactory', '$location',
  function ($scope, GoodsFactory, $location) {

    /* callback for ng-click 'createNewUser': */
    $scope.createNewGood = function () {
      GoodsFactory.create($scope.good);
      $location.path('/goods-list');
    };
  }]);



