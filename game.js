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

  var letterGuessed = letter.userInput;
  checkLetters(letterGuessed);
});


//Create a constructor that selects a word from an array, splits said word into an array and creates a placeholder
var SelectWord = function () {
  var wordOptions = ["running", "miles", "intervals", "stretching", "strength", "weights", "sweat", "strong"];

  selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
  lettersInWord = selectedWord.split("");

  blanksAndSuccesses = [];

  //Populate blanks and correct guesses with the right number of blanks.
  for (var i = 0; i < selectedWord.length; i++) {
    blanksAndSuccesses.push("_");
  }
  //TESTERS
  console.log(selectedWord);
  console.log(lettersInWord);
  console.log(blanksAndSuccesses);
};

// selectWord();

function checkLetters(letterGuessed) {

  var newSelectWord = new SelectWord(selectedWord, lettersInWord, blanksAndSuccesses);

  this.inputLetter = letterGuessed;
  this.selectedWord = newSelectWord.selectedWord;
  // this.lettersInWord = newSelectWord.lettersInWord;
  // this.blanksAndSuccesses = newSelectWord.blanksAndSuccesses;

  // this.numBlanks = this.selectedWord.length;


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
