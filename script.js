'use strict';

let secret = Math.round(Math.random() * 19 + 1);

let message = document.querySelector('.message');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');

const start = function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.body.style.backgroundColor = '#222';
};

window.addEventListener('load', start());

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (guess in [...Array(21).keys()] && guess != 0) {
    if (secret > guess) {
      message.textContent = 'Too low!';
    } else if (secret < guess) {
      message.textContent = 'Too high!';
    } else {
      message.textContent = 'Correct number!';
      if (score.textContent > highscore.textContent) {
        highscore.textContent = score.textContent;
      }
      return;
    }
    score.textContent = Number(score.textContent) - 1;
  } else {
    message = 'Only #s from 1 to 20 allowed!';
  }
});
