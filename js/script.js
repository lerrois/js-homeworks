'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
console.log(key);

function generateKey(strlen, characters) {
    let generated = '';
    for (let i = 0; i < strlen; i++) {
        generated += characters[Math.floor(Math.random() * strlen)];
    }
    return generated;
}