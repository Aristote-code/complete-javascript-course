'use strict';

const btn = document.querySelectorAll('.show-modal');
const close = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const modalReveal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const hid = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', modalReveal)
}

close.addEventListener('click', hid);

overlay.addEventListener('click', hid);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !(modal.classList.contains('hidden'))) {
        hid();
    }
})