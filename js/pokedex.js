var pokeApp = angular.module('pokedex', ['ngResource'])
.controller('Ctrl', function($scope,$log,$http,$resource) {
  $scope.test = [
        {name:'pikachu',id:'1'},
        {name:'miew',id:'2'},
        {name:'Kai',id:'3'},
		{name:'san',id:'4'}
    ];
	$scope.$log = $log;
    
	$resource("http://pokeapi.co/api/v1/type/:id/")
 
	var Pok = $resource('http://pokeapi.co/api/v1/type/:id/');
	function recupPokemonById(idPokemon, callback) {
		 var res = Pok.get({id: idPokemon}, function() {
			callback(res);
		 });
	 }
	 
	 $scope.goSearch = function() {
		recupPokemonById($scope.name2, function(res) {
			$log.info(res);
		});
	 };

  
});
pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
 
var pokeApiUrl = "http://pokeapi.co/"

