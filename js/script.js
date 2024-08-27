'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i

function generateKey(strlen, characters) {
    let generated = '';
    for (let i = 0; i < strlen; i++) {
        generated += characters[Math.floor(Math.random() * strlen)];
    }
    return generated;
}