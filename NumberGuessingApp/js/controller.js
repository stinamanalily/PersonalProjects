angular.module('GuessingApp', []).controller('GuessNumberController', GuessNumberController);
			function GuessNumberController($scope) {	
			
				/* 
					MY EDIT:
					Created a new function that checks whether or not
					the user has picked a number from 1 to 100.
					
					If the user has chosen a number less than 1 or 
					greater than 100, it flags the user's entry as 
					invalid. 
				*/
				$scope.validateGuess = function() {
					if ($scope.guess < 1 || $scope.guess > 100) 
					{
						$scope.invalidEntry = true;
					}
					else 
					{
						$scope.invalidEntry = false;
					}
				}
				/* 
					EDIT: 
					Added validateGuess() function to validate the user's entry
					
					Added an if statement that checks if the entry is invalid.
					If invalidEntry = true, it will not compare the user's guess
					and the original number. 
				*/
				$scope.verifyGuess = function() {
					$scope.validateGuess();
					if ($scope.invalidEntry === false) {
						$scope.deviation = $scope.original - $scope.guess;
						$scope.noOfTries = $scope.noOfTries + 1; 
					}
				}
				$scope.initializeGame = function () {
					$scope.noOfTries = 0;
					$scope.original = Math.floor((Math.random() * 100) + 1);
					$scope.guess = null;
					$scope.deviation = null;
					$scope.invalidEntry = false;
				}
				$scope.initializeGame();
			}