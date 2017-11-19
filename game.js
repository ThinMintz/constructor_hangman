var inquirer = require("inquirer");
var userGuess = process.argv [1];
var wordBank = ["Cat", "Dog"];
var blanks = "";

//var lettersToGuess = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var LetterGuessed = function(letter) {
  this.letter = letter;
  
  //was the letter in the word or not
  this.letterPresent = true;

  this.showLetter = function() {
    if (this.letterPresent == true) {
      return this.letter;
    } else {
      return "_";
    }
  };
};


var WordsToGuess = function(word) {
  this.word = word;
}

//how many time to ask the question
var count = 0;


//asking the question to Guess a letter
var askQuestion = function() {

/*if they guess the wrong letter more that 
10 times they have to restart the game*/
//WANT TO TRY THIS BUT SINCE I CAN"T GET REGULAR STUFF WORKING BETTER NOT GET FANCY
//var if (count < 10)

inquirer.prompt([
  {
    type: "input",
    name: "letters",
    message: "Guess a letter?"
  }
  //after the prompt, store the user's response in a variable called
    ]);then(function(userLetter) {
      //if userLetter is equal to a letter in the word, append the letter to the underscore

    //to count the amount of times a questions is asked
      //and count++:
    //to run the function again until the count reaches 10
      //askQuestion();
    })
};


