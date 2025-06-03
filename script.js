'use strict';

const start = function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.body.style.backgroundColor = '#222';
};

window.addEventListener('load', start());
