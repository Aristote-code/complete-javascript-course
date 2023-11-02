'use strict';

const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const restart = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');
const current0 = document.querySelector('#current--0')
const current1 = document.querySelector('#current--1')
const prayer0 = document.querySelector('.player--0');
const prayer1 = document.querySelector('.player--1');
const prayerScore0 = document.querySelector('#score--0');
const prayerScore1 = document.querySelector('#score--1');

let score = [0, 0];
let currentScore = 0;
let active = 0;
let ingame = true;

const shift = function () {
    prayer0.classList.toggle('player--active');
    prayer1.classList.toggle('player--active');
    currentScore = 0;
    current0.textContent = currentScore;
    document.querySelector(`#current--${active}`).textContent = currentScore;
    if (active === 0) {
        active = 1;
    } else {
        active = 0;
    }
}

roll.addEventListener('click', function () {
    if (ingame) {

    let diceNum = Math.trunc(Math.random() * 6) + 1;

    dice.src = `dice-${diceNum}.png`;
    dice.classList.remove('hidden')

    if (diceNum !== 1) {
        currentScore += diceNum;
        document.querySelector(`#current--${active}`).textContent = currentScore;
    }
    else {
        shift();
        }
    }
})

hold.addEventListener('click', function () {
    if (ingame) {
        
    
        score[active] += currentScore;
        document.querySelector(`#score--${active}`).textContent = score[active];
        

        if (score[active] > 19) {
            ingame = false;
            document
            .querySelector(`.player--${active}`)
            .classList.add('player--winner');
            
            document
            .querySelector(`.player--${active}`)
            .classList.remove('player--active');
        }

        else {
            shift();
            }
    }
})

restart.addEventListener('click', function () {
    dice.classList.add('hidden');
    current0.textContent = 0;
    current1.textContent = 0;
    prayerScore0.textContent = 0;
    prayerScore1.textContent = 0;
    document
      .querySelector(`.player--0`)
        .classList.remove('player--winner');
    document
      .querySelector(`.player--${active}`)
        .classList.add('player--active');
    
    ingame = true;
})