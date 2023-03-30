'use strict';

// SELECTORS
const messageSelector = document.querySelector('.message');
const scoreSelector = document.querySelector('.score');
const numberSelector = document.querySelector('.number');
const bodySelector = document.querySelector('body');
const btnCheckSelector = document.querySelector('.check');
const btnAgainSelector = document.querySelector('.again');
const guessSelector = document.querySelector('.guess');
const highScoreSelector = document.querySelector('.highscore');

// VARIABLES
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

// DELETE AFTER DEV PHASE
console.log(secretNumber);

// EVENT LISTENERS
btnCheckSelector.addEventListener('click', () => {
    if (Number(guessSelector.value) === secretNumber) {
        // Correct Number!!!
        bodySelector.style.background = 'rgb(96, 179, 71)';
        messageSelector.textContent = '🎉 Correct Number!';

        if (score > highScore) {
            highScore = score;
            highScoreSelector.textContent = String(highScore);
        }

        numberSelector.textContent = String(secretNumber);
        btnCheckSelector.disabled = true;
    }
    else if (guessSelector.value === '') {
        // Field is empty!!!
        messageSelector.textContent = '⛔️ No number!';
    }
    else if (guessSelector.value < secretNumber && score > 1) {
        // Number too low!!!
        messageSelector.textContent = '📉 Too low!';
        scoreSelector.textContent = String(score = score - 1);
    }
    else if (guessSelector.value > secretNumber && score > 1) {
        // Number too high!!!
        messageSelector.textContent = '📈 Too high!';
        scoreSelector.textContent = String(score = score - 1);
    }
    else if (score <= 1) {
        // GAME OVER
        scoreSelector.textContent = String(score = score - 1);
        messageSelector.textContent = '💥 You lost the game!';
        bodySelector.style.background = 'red';
        btnCheckSelector.disabled = true;
    }
});

btnAgainSelector.addEventListener('click', () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    bodySelector.style.background = '#222';
    numberSelector.textContent = '?';
    messageSelector.textContent = 'Start guessing...';
    score = 20;
    scoreSelector.textContent = score;
    guessSelector.value = '';
    btnCheckSelector.disabled = false;

    // DELETE AFTER DEV PHASE
    console.log(secretNumber);
});
