(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(x) {
    x.controller('QuestionController', function($scope, $http) {

        $scope.trivia = {
            question: "",
            answer: "",
            category:"",
            difficulty: 0,
            score: 0,
            response: "",
            rightAnswer:"",
        }

        $scope.ask = function() {
            console.log("request from server");
            $http({
                method: 'GET',
                url: 'http://jservice.io/api/random',
            }).then(function(response) {
                let newTrivia = response.data[0];
                console.log(newTrivia);
                $scope.trivia.question = newTrivia.question;
                $scope.trivia.answer = newTrivia.answer;
                $scope.trivia.difficulty = newTrivia.value;
                $scope.trivia.category = newTrivia.category.title
            })
        };

        $scope.compare = function(){
        // console.log("from user:" + $scope.inputVal);
        // console.log("from server:" + $scope.trivia.answer);
        if($scope.inputVal === $scope.trivia.answer){
            $scope.trivia.score += $scope.trivia.difficulty;
            $scope.trivia.response = "correct";
            console.log($scope.trivia.score);
        } else{
          console.log("wrong");
          $scope.trivia.score -= $scope.trivia.difficulty;
          $scope.trivia.response = "incorrect";
          $scope.trivia.rightAnswer = $scope.trivia.answer;
        }
      };

    });
};

},{}],2:[function(require,module,exports){
let app = angular.module("Jeopardy", []);

// Controllers
require('./controllers/questions')(app);

},{"./controllers/questions":1}]},{},[2])