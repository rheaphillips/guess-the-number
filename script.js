'use strict';

let secret = Math.round(Math.random() * 19 + 1);
let input = document.querySelector('.guess');
let message = document.querySelector('.message');
let highscore = document.querySelector('.highscore');

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(input.value);

  if (guess in [...Array(21).keys()] && guess != 0) {
    if (secret > guess) {
      message.textContent = 'Too low!';
    } else if (secret < guess) {
      message.textContent = 'Too high!';
    } else {
      message.textContent = 'Correct number!';
      document.body.style.backgroundColor = '#6a961e';
      document.querySelector('.number').textContent = secret;
      if (score > highscore.textContent) {
        highscore.textContent = score;
      }
      return;
    }
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    message.textContent = 'Only #s from 1 to 20 allowed!';
  }

  if (score == 0) {
    message.textContent = 'Game Over!';
    document.body.style.backgroundColor = '#78241e';
    return;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secret = Math.round(Math.random() * 19 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
  message.textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.body.style.backgroundColor = '#222';
});
