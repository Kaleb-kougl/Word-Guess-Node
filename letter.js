function Letter(character, guessed=false) {
  this.character = character;
  this.guessed = guessed;
  this.evaluateDisplay = function() {
    if(this.guessed) {
      return this.character;
    } else {
      return '_';
    }
  };
  this.checkGuess = function(guessedLetter){
    if (guessedLetter.toLowerCase() === this.character.toLowerCase()) {
      this.guessed = true;
      return true;
    }
    return false;
  }
}

module.exports = Letter;

// Unit tests
// let myLetter = new Letter('L', false);
// console.log(myLetter);
// console.log(myLetter.evaluateDisplay());
// myLetter.checkGuess('L');
// console.log(myLetter.evaluateDisplay());