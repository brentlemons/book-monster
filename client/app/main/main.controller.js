'use strict';

angular.module('bookMonsterApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeBooks = [];

    $http.get('/api/books').success(function(awesomeBooks) {
      $scope.awesomeBooks = awesomeBooks;
    });

    $scope.addBook = function() {
      if($scope.newBook === '') {
        return;
      }
      $http.post('/api/books', { name: $scope.newBook });
      $scope.newBook = '';
    };

    $scope.deleteBook = function(book) {
      $http.delete('/api/books/' + book._id);
    };
  });
