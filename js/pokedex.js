var pokeApp = angular.module('pokedex', ['ngResource'])
.controller('Ctrl', function($scope) {
  $scope.test = [
        {name:'pikachu',id:'1'},
        {name:'miew',id:'2'},
        {name:'Kai',id:'3'},
		{name:'san',id:'4'}
    ];
   $scope.id2;
})
.controller('Ctrl2', ['$scope', '$log', function($scope, $log) {
  $scope.$log = $log;
  $scope.message = 'Hello World!';
}]);

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
 
var pokeApiUrl = "http://pokeapi.co/"

