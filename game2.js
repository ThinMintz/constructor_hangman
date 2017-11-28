// dependency for inquirer npm package
var inquirer = require("inquirer");
var wordBank = ["dog"];

// constructor function used to create programmers objects
function UserGuess(letter) {
  this.letter = letter;
  //is the letter present in the word
  this.present = false;

  //if the letter is present in the word, the letter should replace the underscore
  this.showLetter = function() {
    if (this.letterPresent == false) {
      return "_";
    } else {
      return this.letter;
    }
  };
}
//this function should loop through the first item in the wordBank array and run the userGuess function
function word() {
    return wordBank[Math.floor(Math.random() * wordBank.length)];
}

/*  for (var i = 0; i < wordBank[1].length; i++) 
    UserGuess();*/
}; 

// creates the printInfo method and applies it to all UserGuess objects
UserGuess.prototype.printInfo = function() {
  console.log("You guessed: " + this.letter);
};

// variable we will use to count how many times our questions have been asked
var count = 0;

var askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
  if (count < 3) {
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
        name: "letter",
        message: "Guess a letter?"
      }
    ]).then(function(answers) {
      // initializes the variable newguy to be a programmer object which will take
      // in all of the user's answers to the questions above
      var guessedLetter = new UserGuess(
        answers.letter
        );
      // printInfo method is run to show that the newguy object was successfully created and filled
      guessedLetter.printInfo();
      // add one to count to increment our recursive loop by one
      count++;
      //run the word function
      UserGuess.showLetter();
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which prints "all questions asked" to the console
    // when the code has been run five times
  }
  else {
    console.log("All questions asked");
  }
};

// call askquestion to run the code
askQuestion();