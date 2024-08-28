'use strict';
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(strlen, charactersInput) {
  if (!Number.isInteger(strlen) && !(typeof charactersInput === 'string')) {
    return 'Provided values are not correct.';
  }
  let generated = '';
  for (let i = 0; i < strlen; i += 1) {
    generated += charactersInput[Math.floor(Math.random() * strlen)];
  }
  return generated;
}
const key = generateKey(16, characters);
console.log(key);
