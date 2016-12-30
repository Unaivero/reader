app.factory('books', ['$http', function($http) {
  return $http.get('https://unaivero.github.io/reader/readerbookapi.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
