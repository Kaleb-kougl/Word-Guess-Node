function Letter(character, guessed,) {
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
    if (guessedLetter === this.character) {
      this.guessed = true;
    }
  }
}

// Unit tests
// let myLetter = new Letter('L', false);
// console.log(myLetter);
// console.log(myLetter.evaluateDisplay());
// myLetter.checkGuess('L');
// console.log(myLetter.evaluateDisplay());