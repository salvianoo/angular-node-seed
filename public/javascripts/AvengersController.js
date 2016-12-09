'use strict';

var app = angular.module('myApp', []);
app.controller('AvengersCtrl', function($scope, $http) {

  function Avenger() {
    this.nome = '';
    this.tel = '';
  }

  // $scope.avenger = new Avenger();

  $scope.avengers = [];

  $http.get('http://localhost:8000/api/fretes').success(function(retorno) {
    $scope.avengers = retorno.avengers;
  });

  $scope.adicionaAvenger = function() {
    $http.post('/avenger', $scope.avenger).success(function() {
      $scope.avengers.push($scope.avenger);
    //   console.log($scope.avengers);
      $scope.avenger = new Avenger();
    });
  };
});
