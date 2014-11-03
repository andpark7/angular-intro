/*
    app.js: main application script
    this is an Angular application
 */

"use strict";

//create new angular module
//chaining stuff together put semicolon after chain ends
//parameter for controller always have to be $scope, creates a scope object
//hands it in to the angular object, what the views will be able to see
angular.module('MovieApp', [])
    .controller('MoviesController', function($scope){
        $scope.movies = movies;
        $scope.searchString = '';
        $scope.sortCol = 'rank';
        $scope.sortReverse = false;

        $scope.sortBy = function (colName) {
            if ($scope.sortCol == colName) {
                $scope.sortReverse = !$scope.sortReverse;
            }
            else {
                $scope.sortReverse = false;
            }
            $scope.sortCol = colName;
        }
    });