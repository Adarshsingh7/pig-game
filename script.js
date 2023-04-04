'use strict';
//selecting element
const scorePlayer1 = document.querySelector('#score--0');
const scorePlayer2 = document.getElementById('score--1');
const playerEl1 = document.querySelector('.player--0');
const playerEl2 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
const rollDiceEl = document.querySelector('.btn--roll');
const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');
const holdBtn = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

let current = 0;

//initial value 
scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;
dice.classList.add('hidden');
let winner = false;

//seting score property to zero
let score1 = 0;
let score2 = 0;
const random = function () {
  return Math.floor(Math.random() * 6 + 1);
};

//adding click to roll
rollDiceEl.addEventListener('click', function () {
  const number = random();
  if (number != 1) {
    current += number;

    dice.classList.remove('hidden');
    dice.src = `dice-${number}.png`;

    //adding active property to the player
    if (playerEl1.classList.contains('player--active')) {
      currentScore1.textContent = current;
    } else {
      currentScore2.textContent = current;
    }
  } else {
    //if the player got 1 the reflected properties
    if (playerEl1.classList.contains('player--active')) {
      playerEl1.classList.remove('player--active');
      playerEl2.classList.add('player--active');
      currentScore1.textContent = 0;
      current = 0;
    } else {
      playerEl1.classList.add('player--active');
      playerEl2.classList.remove('player--active');
      currentScore2.textContent = 0;
      current = 0;
    }
  }
});

//changes reflected when player presses the hold button
holdBtn.addEventListener('click', function () {
  if (playerEl1.classList.contains('player--active')) {
    //for player 1
    score1 += current;
    playerEl1.classList.remove('player--active');
    playerEl2.classList.add('player--active');
    scorePlayer1.textContent = score1;
    currentScore1.textContent = 0;
    current = 0;

    //winner functionality
    if (score1 >= 100) {
      playerEl1.classList.add('player--winner');
      document.getElementById('name--0').textContent = 'WINNER';
      rollDiceEl.classList.add('hidden');
    }

  } else {
    //for player 2
    score2 += current;
    playerEl1.classList.add('player--active');
    playerEl2.classList.remove('player--active');
    currentScore2.textContent = 0;
    scorePlayer2.textContent = score2;
    current = 0;

    //winner winner chicken dinner
    if (score2 >= 100) {
      playerEl2.classList.add('player--winner');
      document.getElementById('name--1').textContent = 'WINNER';
      rollDiceEl.classList.add('hidden');
    }
  }
});

//adding new game feature to our application
newGame.addEventListener('click', function () {
  score1 = 0;
  score2 = 0;

  scorePlayer1.textContent = score1;
  currentScore1.textContent = 0;

  currentScore2.textContent = 0;
  scorePlayer2.textContent = score2;
  rollDiceEl.classList.remove('hidden');

  //removing winner stuff
  playerEl1.classList.remove('player--winner');
  playerEl2.classList.remove('player--winner');
  document.getElementById('name--0').textContent = 'PLAYER 1';
  document.getElementById('name--1').textContent = 'PLAYER 2';

  if (!playerEl1.classList.contains('player--active'))
    playerEl1.classList.add('player--active');
  playerEl2.classList.remove('player--active');
  rollDiceEl.classList.remove('hidden');
});
