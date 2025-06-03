'use strict';

let secret = Math.round(Math.random() * 19 + 1);
let input = document.querySelector('.guess');
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');

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
      if (score.textContent > highscore.textContent) {
        highscore.textContent = score.textContent;
      }
      return;
    }
    score.textContent = Number(score.textContent) - 1;
  } else {
    message.textContent = 'Only #s from 1 to 20 allowed!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secret = Math.round(Math.random() * 19 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
  message.textContent = 'Start guessing...';
  score.textContent = 20;
  document.body.style.backgroundColor = '#222';
});
