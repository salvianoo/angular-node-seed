var app = angular.module('myApp', []);

app.controller('AvengersCtrl', function($scope, $http) {

  function Avenger() {
    this.nome = '';
    this.tel = '';
  }

  $scope.avenger = new Avenger();

  $scope.avengers = [];

  $http.get('/avengers').success(function(retorno) {
    $scope.avengers = retorno.avengers;
  });

  $scope.adicionaAvenger = function() {
    $http.post('/avenger', $scope.avenger).success(function() {
      $scope.avengers.push($scope.avenger);
      $scope.avenger = new Avenger();
    });
  };

});
