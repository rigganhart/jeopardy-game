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
