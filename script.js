'use strict';
let secretScore = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

// console.log(secretScore);
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No number');
  } else if (guess === secretScore) {
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretScore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretScore && score > 1) {
    displayMessage(guess > secretScore ? 'Too High' : 'Too Low');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('you lost the game');
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretScore = Math.trunc(Math.random() * 20 + 1);

  displayMessage('Start Guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
