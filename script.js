'use strict';

// Selecting elements: Player 1 is index 0(--0), Player 2 is index 1(--1)
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

// Starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// for array of players , index of player 1 = 0, player2 (num is value of score, idexe #'s are the players);
// total scores
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  // 1. Generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for roll of 1, if true ...
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    // dynamicly select the element based which person is playing
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // if not true
  } else {
    // rest the score text of player who just finished
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    //   rest value for next player
    currentScore = 0;
    // switch player( 0 or 1 index) - terany operator
    activePlayer = activePlayer === 0 ? 1 : 0;
    // toggle(add or remove) beteween having or not having active player class
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
