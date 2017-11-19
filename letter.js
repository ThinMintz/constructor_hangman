/*Letter: Used for each letter in the current word. 
Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), 
depending on whether or not the user has guessed the letter. 
This should contain letter specific logic and data.*/


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


module.exports = LetterGuessed;