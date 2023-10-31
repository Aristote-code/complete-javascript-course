'use strict';

let score = 20;
const secreteNumber = Math.trunc(Math.random() * 20) + 1; 
document.querySelector('.number').textContent = secreteNumber;

document.querySelector('.check').addEventListener('click',
    function () {
        const guess = Number(document.querySelector('.guess').value);

        if (score === 0) {
            document.querySelector('.message').textContent = '😔 you lost';
            document.querySelector('body').style.background
        }
        else {
            if (!guess) {
            document.querySelector('.message').textContent = '😶put in a number plz';
            }

            else {
                if (guess === secreteNumber) {
                    document.querySelector('.message').textContent = '😃 you made it';
                    document.querySelector('.highscore').textContent = score;
                    document.querySelector('body').style.backgroundColor = 'green';
                }
                else if (guess > secreteNumber) {
                    document.querySelector('.message').textContent =
                        '🙃 too high calm down';
                    score--;
                    document.querySelector('.score').textContent = score;
                }
                else if (guess < secreteNumber) {
                    document.querySelector('.message').textContent =
                        '😉 too low push up';
                    score--;
                    document.querySelector('.score').textContent = score;
                }
            }
        }
        
    }
)