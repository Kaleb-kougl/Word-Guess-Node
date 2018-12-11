const Word = require('./word');
var inquirer = require('inquirer');

const wordArray = [
  'Avengers', 
  'The Dark Knight', 
  'Guardians of the Galaxy', 
  'Wonder Woman', 
  'Deadpool'
];
let guessesLeft = 10;
var letterRegex=/^[a-zA-Z]+$/;
let lettersUsed = [];

let wordString = wordArray[Math.floor(Math.random() * wordArray.length)];
let currentWord = new Word(wordString);

function promptUser(){
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'letterGuessed',
        message: 'Guess a letter!'
      }
    ])
    .then(answers => {
      if (answers.letterGuessed.length > 1) {
        console.log('Please input only one letter');
        promptUser();
      } else if (!(answers.letterGuessed).match(letterRegex)) {
        console.log('Not a letter!');
        promptUser();
      } else {
        if (!lettersUsed.includes(answers.letterGuessed)) {
          lettersUsed.push(answers.letterGuessed);
        } else {
          console.log(`You already guessed: ${answers.letterGuessed}`);
          promptUser();
          return;
        }
        let foundLetter = currentWord.checkForLetter(answers.letterGuessed);
        if (foundLetter) {
          console.log("\x1b[32m", '\nCorrect!\n')
        } else {
          guessesLeft--;
          if (guessesLeft === 0) {
            console.log('\nYou lose!\n');
            return;
          }
          console.log("\x1b[31m",`\nWrong!\n${guessesLeft} guesses remaining!\n`)
        }
        console.log(currentWord.evaluateDisplay());
        let lettersLeftArray = currentWord.wordArray.filter((l)=> !l.guessed);
        if (lettersLeftArray.length !== 0) {
          promptUser();
        } else {
          console.log("\x1b[37m", 'You Win!');
        }
      }
    });
}
console.log("\x1b[37m", currentWord.evaluateDisplay());
promptUser();