'use strict';

let secret = Math.round(Math.random() * 19 + 1);

const start = function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.body.style.backgroundColor = '#222';
};

window.addEventListener('load', start());

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  const message = document.querySelector('.message').textContent;
  if (guess in [...Array(21).keys()] && guess != 0) {
    message = 'Correct input!';
  } else {
    message = 'Only #s from 1 to 20 allowed!';
  }
});
