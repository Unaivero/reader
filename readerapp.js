var app = angular.module('ReaderApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/books', { 
      controller: 'BookshelfController', 
      templateUrl: 'readerbookshelf.html' 
    }) 
    .when('/books/:bookId', { 
      controller: 'BookController', 
      templateUrl: 'readerbook.html' 
    })
    .when('/books/:bookId/chapters/:chapterId',{
        controller: 'ChapterController',
        templateUrl: 'readerchapter.html'
    })
    .otherwise({ 
      redirectTo: '/readerbooks' 
    }); 
});
