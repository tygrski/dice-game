'use strict';

// Selecting elements: Player 1 is index 0(--0), Player 2 is index 1(--1)
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

let scores,currentScore,activePlayer, playing;

const init = function(){

    // Starting condition
    // for array of players , index of player 1 = 0, player2 (num is value of score, index #'s are the players);
    // total scores
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');
    // Reset winner CSS for players
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    // add' active' to player 0 , bec player 0 starts in the game 1st.
    player0El.classList.add('player--active');
    //  Remove 'active' if player 1 was winner
    player1El.classList.remove('player--active');
}

init(); 

const switchPlayer = function () {
  // rest the score text of player who just finished
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  //   rest value for next player
  currentScore = 0;

  // switch player( 0 or 1 index) - terany operator
  activePlayer = activePlayer === 0 ? 1 : 0;

  // toggle(add or remove) beteween having or not having active player class
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling Dice  Button 🎲  Functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //   console.log(dice);

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
      //  Switch Player
      switchPlayer();
    }
  }
});

//  HOLD Button 📥 ( Adds Current Score to PLayer's Total Score)
btnHold.addEventListener('click', function () {
    if(playing) {
  //   console.log('Hold button');
  //  1. Add current score to the score array for active player's index
  scores[activePlayer] += currentScore;
  //   console.log(scores[activePlayer]);
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  // 2. Check to see if score is  >= 100
  if (scores[activePlayer] >= 100) {
    // Finish the game
    playing = false;
    diceEl.classList.add('hidden');

    // Finsh Game (add winner css  winner--class to active player)
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    // 3. Switch player
    switchPlayer();
    }
  }
});

// New Game Buutton 🔄 
btnNew.addEventListener('click', init);
