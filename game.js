var inquirer = require('inquirer');

// var selectedWord = require("./word.js");
// var processLetter = require("./letter.js");


// ------------- GLOBAL VARIABLES ----------------
// ===============================================
// Arrays and variables for holding data
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;


var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var wordSelected = "";

// function roundComplete() {
//   console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left " + guessesLeft);
//
//   console.log(guessesLeft);
//   console.log(blanksAndSuccesses.join);
//   console.log(wrongLetters);
//
//
//   if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
//     winCount++;
//     alert("You Won!");
//
//     document.getElementById("winCounter").innerHTML = winCount;
//     startGame();
//   } else if (guessesLeft == 0) {
//     lossCount++;
//     alert("You lost. *sad face*");
//     document.getElementById("lossCounter").innerHTML = lossCount;
//
//     startGame();
//   }
// }


// ------------- MAIN PROCESSES ---------------//
// ===============================================
//

inquirer.prompt([

  {
    type: "input",
    name: "userInput",
    message: "Guess a letter!"
  }

]).then(function(letter) {

  selectedWord = new ReadyingForGame.SelectWord();
  console.log(selectedWord);
});


//Create a constructor that selects a word from an array, splits said word into an array and creates a placeholder

var ReadyingForGame = function () {

var wordOptions = ["running", "miles", "intervals", "stretching", "strength", "weights", "sweat", "strong"];

var SelectWord = function () {
          selectedWord = this.wordOptions[Math.floor(Math.random() * this.wordOptions.length)];
          console.log(selectedWord);
  };

//Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.
var SelectLetter = function () {
      //Split the chosen word into individual letters and put into an array.
      lettersInWord = this.selectedWord.split("");
      blanksAndSuccesses = [];
      //Populate blanks and correct guesses with the right number of blanks.
      for (var i = 0; i < this.selectedWord.length; i++) {
      blanksAndSuccesses.push("_");
   }
 };
};

//Constructor for Game Play
function checkLetters(letterGuessed) {

    inputLetter = letterGuessed;
    selectedWord = ReadyingForGame.SelectWord.selectedWord;
    lettersInWord = ;
    blanksAndSuccesses = ;

    numBlanks = ReadyingForGame.SelectWord.selectedWord;


  console.log(newSelectWord.selectedWord);
  console.log(this.inputLetter );


  // for (var i = 0; i < this.numBlanks; i++) {
  //   if (this.selectedWord[i] == this.inputLetter) {
  //     isLetterInWord = true;
  //   }
  // }
  // if (isLetterInWord) {
  //   for (var j = 0; j < this.numBlanks; j++) {
  //     if (this.selectedWord[j] == this.inputLetter) {
  //       blanksAndSuccesses[j] = this.inputLetter;
  //     }
  //   }
  // } else {
  //   wrongLetters.push(this.inputLetter);
  //   guessesLeft--;
  // }
}
