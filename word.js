const Letter = require('./letter.js');
console.log(Letter);

function Word(newWord) {

  this.wordArray = (function constructWordArray(newWord) {
    let wordArray = [];
    for (let i = 0; i < newWord.length; i++) {
      let currentLetter = newWord[i];
      if (currentLetter === ' ') {
        let space = new Letter(currentLetter);
        space.guessed = true;
        wordArray.push(space);
      } else {
        wordArray.push(new Letter(currentLetter));
      }
    }
    return wordArray;
  })(newWord);

  this.evaluateDisplay = function(wordArray) {
    let wordDisplay = [];
    for (let i = 0; i < this.wordArray.length; i++) {
      wordDisplay.push(this.wordArray[i].evaluateDisplay());
    }
    return wordDisplay.join(' ');
  }
  this.checkForLetter = function(char) {
    let letterInWord = false;
    for (let i = 0; i < this.wordArray.length; i++) {
      let letterFound = this.wordArray[i].checkGuess(char);
      if (letterFound) {
        letterInWord = letterFound;
      }
    }
    return letterInWord;
  }
}

// UNIT TESTS
let myWord = new Word("Kaleb");
console.log(myWord);
console.log(myWord.evaluateDisplay());
console.log(myWord.checkForLetter('a'));
console.log(myWord.evaluateDisplay());
console.log(myWord.checkForLetter('z'));
console.log(myWord.evaluateDisplay());
console.log(myWord.checkForLetter('K'));
console.log(myWord.evaluateDisplay());

module.exports = Word;