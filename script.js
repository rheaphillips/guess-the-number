'use strict';

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
  if (guess in [...Array(21).keys()] && guess != 0) {
    document.querySelector('.message').textContent = 'Correct input!';
  } else {
    document.querySelector('.message').textContent =
      'Only #s from 1 to 20 allowed!';
  }
});
