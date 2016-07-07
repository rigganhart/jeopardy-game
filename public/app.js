(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let app = angular.module("Jeopardy", ['ngRoute']);
// Router
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/start',
        })
        .when('/start', {
            controller: 'UserController',
            templateUrl: 'templates/start.html',
        })
        .when('/game', {
            controller: 'GameController',
            templateUrl: 'templates/game.html',
        })
        .when('/winner', {
            controller: 'WinController',
            templateUrl: 'templates/winner.html',
        });


}]);


// Controllers
app.controller('UserController', ['$scope', 'UserList', function($scope, UserList) {



}]);


app.controller('GameController', ['$scope', 'UserList', 'QuestionList', function($scope, UserList, QuestionList) {

    QuestionList.getCatergories();
    QuestionList.getClues();

    // $scope.compare = function() {
    //     if ($scope.inputVal === $scope.trivia.answer) {
    //         $scope.trivia.score += $scope.trivia.difficulty;
    //         $scope.trivia.response = "correct";
    //         console.log($scope.trivia.score);
    //     } else {
    //         console.log("wrong");
    //         $scope.trivia.score -= $scope.trivia.difficulty;
    //         $scope.trivia.response = "incorrect";
    //         $scope.trivia.rightAnswer = $scope.trivia.answer;
    //     }
    // };
}]);

app.controller('WinController', ['$scope', 'UserList', function($scope, UserList) {



}]);
//Services
app.factory('UserList', function() {
    let users = [];
    let pass = "";

    return {
        addUser: function(){

        },
        getUser: function() {

        },
    };
});

app.factory('QuestionList', function($http) {
    let unsedQuestions = [];
    let usedQuestions = [];
    let categoriesList = [];
    let clues = [];

    // I want to get a list of 10 categories, then for each category i want to get a list of 10 questions. the categories have 'category ids' that match with 'category id' in the clue objects


    // $http({
    //     method: 'GET',
    //     url: 'http://jservice.io/api/clues',
    // }).then(function(response) {
    //     let questions = response.data;
    //     angular.copy(questions, unusedQuestions);
    // });


    return {
        getCatergories: function() {
            $http({
                method: 'GET',
                url: 'http://http://jservice.io/api/categories?count=10',
            }).then(function(response) {
                let categories = response.data;
                angular.copy(categories, categoriesList);
            });
        },

        getClues: function() {
            categoryList.forEach(function(el) {
                $http({
                    method: 'GET',
                    url: `http://http://jservice.io/api/clues?category=${el.id}`,
                }).then(function(response) {
                    let catClues = response.data;
                    angular.copy(catClue, clues);
                });
            });

        },
        useQuestion: function(question) {

            usedQuestions.push(question);
        },


    };
});

},{}]},{},[1])