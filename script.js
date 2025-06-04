'use strict';

let secret = Math.round(Math.random() * 19 + 1); // number that is being guessed by the player
let score = 20; // inital score of the player
let gameOver = false; // inital state of the game

// stores HTML elements for easier access
const input = document.querySelector('.guess');
const message = document.querySelector('.message');
const highscore = document.querySelector('.highscore');

// runs game logic
const runGame = function () {
  let guess = Number(input.value); // stores guess from the input box

  // checks if guess is an integer between 1 and 20
  if (guess in [...Array(21).keys()] && guess != 0) {
    // checks whether the guess is lower, higher or equal to the secret number and displays message accordingly
    if (secret > guess) {
      message.textContent = 'Too low!';
    } else if (secret < guess) {
      message.textContent = 'Too high!';
    } else {
      message.textContent = 'Correct number!';
      document.body.style.backgroundColor = '#6a961e'; // sets background colour to green
      document.querySelector('.number').textContent = secret; // reveals secret number

      // resets highscore if score is higher than highscore
      if (score > highscore.textContent) {
        highscore.textContent = score;
      }
      gameOver = true; // the end of the game is recorded to the user can not keep inputing numbers
      return;
    }

    // score is reduced by 1 after each inputed value that is incorrect
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    message.textContent = 'Only #s from 1 to 20 allowed!'; // displays error message if user input is invalid
  }

  // the player loses the game if score reaches 0
  if (score == 0) {
    message.textContent = 'Game Over!';
    document.body.style.backgroundColor = '#78241e'; // sets background colour to red
    gameOver = true; // the end of the game is recorded to the user can not keep inputing numbers
    return;
  }
};

// runs the game logic each to player clicks the check button if the game is still running
document.querySelector('.check').addEventListener('click', function () {
  if (!gameOver) {
    runGame();
  }
});

// resets all the state variables and HTML elements if the player clicks the again button
document.querySelector('.again').addEventListener('click', function () {
  secret = Math.round(Math.random() * 19 + 1);
  score = 20;
  gameOver = false;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  message.textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.body.style.backgroundColor = '#222';
});
