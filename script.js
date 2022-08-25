'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');


// Starting condition 
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let curentScore = 0;



// Rolling Dice Functionality
btnRoll.addEventListener('click', function(){
    // 1. Generate random dice roll
    const dice =  Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    
    // 2. Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`

    // 3. Check for roll of 1, if true ,
    if(dice !== 1){
        // add dice to current score
        curentScore += dice;
        current0El.textContent = curentScore; //change later

    } else {
     // switch player
     
    }

})

