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
var letter = "";

var wordSelected = "";


// Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.
var selectWord = function () {

      var wordOptions = ["running", "miles", "intervals", "stretching", "strength", "weights", "sweat", "strong"];

      this.selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
      console.log(this.selectedWord);

      //Create blanks and Split the chosen word into individual letters and put into an array.
      this.numBlanks = this.selectedWord.length;
      this.lettersInWord = this.selectedWord.split("");

      //Resetters guesses left;
      this.guessesLeft = 9;
      this.blanksAndSuccesses = [];


      //Populate blanks and correct guesses with the right number of blanks.
      for (var i = 0; i < this.selectedWord.length; i++) {
      this.blanksAndSuccesses.push("_");
   }
      console.log(this.blanksAndSuccesses);
 };

// CreateLetter();

var CheckLetters = function(letter) {
// function checkLetters(letter) {
  //Check to see if the letter is even in the wordToGuess
   var gameWord = new selectWord();

  this.isLetterInWord = false;
  this.letter = letter;
  this.wrongLetters = [];

    console.log(this.letter);

    this.lettersInWord = gameWord.lettersInWord;
    this.guessesLeft = gameWord.guessesLeft;

  for (var i = 0; i < gameWord.numBlanks; i++) {
      if (gameWord.selectedWord[i] == this.letter) {
      this.isLetterInWord = true;
      console.log("You guessed " + this.letter + "!");
      }
  }
  if (this.isLetterInWord) {
      for (var j = 0; j < gameWord.numBlanks; j++) {
          if (gameWord.selectedWord[j] == this.letter) {
              gameWord.blanksAndSuccesses[j] = this.letter;
              console.log(gameWord.blanksAndSuccesses);
      }
    }
  } else {
      this.wrongLetters.push(this.letter);
      this.guessesLeft--;
      console.log("Your guess of " + this.isLetterInWord + " was incorrect! You have " + this.guessesLeft + " guesses left!")
  }
console.log(this.wrongLetters);
}

// CheckLetters("e");

function roundComplete(letter) {
  var gameOn = new CheckLetters(letter);
  
  if (gameOn.lettersInWord == gameOn.blanksAndSuccesses) {
    winCount++;
    console.log("You Won!");
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left " + gameOn.guessesLeft);
    // console.log(winCount);

    CheckLetters(letter);

  } else if (gameOn.guessesLeft == 0) {
    lossCount++;
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left " + gameOn.guessesLeft);
    console.log("You lost. *sad face*");
    // console.log(lossCount);

    CheckLetters(letter);
  }
}

// roundComplete("e");


inquirer.prompt([

  {
    type: "input",
    name: "userInput",
    message: "Guess a letter!"
  }

]).then(function(letter) {
// CheckLetters(letter.userInput);
roundComplete(letter.userInput);

});


