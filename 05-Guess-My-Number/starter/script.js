'use strict';

let score = 20;
let highscore = 0;
let secreteNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click',
    function () {
        const guess = Number(document.querySelector('.guess').value);

        if (score === 0) {
            document.querySelector('.message').textContent = '😔 you lost';
            document.querySelector('body').style.backgroundColor = '#ff0000';
        }
        else {
            if (!guess) {
            document.querySelector('.message').textContent = '😶put in a number plz';
            }

            else if(guess > 20) {
               document.querySelector('.message').textContent =
                 '😶get back in the range and relax';
            }

            else {
                if (guess === secreteNumber) {
                    document.querySelector('.message').textContent = '😃 you made it';
                    document.querySelector('.number').textContent =
                        secreteNumber;
                    document.querySelector('body').style.backgroundColor =
                      'green';
                    if (score > highscore) {
                        highscore = score;
                        document.querySelector('.highscore').textContent = highscore;
                    }
                    
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

document.querySelector('.again').addEventListener('click',
    function () {
        score = 20;
        secreteNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = 'Start guessing...';
    }
)