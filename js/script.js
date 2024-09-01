'use strict';

function arithmeticalMean(array) {
  let iterator = 0;
  let sum = 0;
  console.log(array.length);
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      sum += array[i];
      iterator += 1;
    }
  }

  return sum / iterator;
}

const arr = ['apple', 3, 'orange', 5, 8, 'cherry'];

const amean = arithmeticalMean(arr);
console.log(`серендє арифметичне =${amean}`);

console.log('-----------------------------------------');

const x = Number(prompt('введіть перше число'));
const y = Number(prompt('введіть друге число'));
const znak = prompt('введіть оператор');

if (typeof x !== 'number' || typeof y !== 'number') {
  alert('обидва числа мають бути числами');
} else {
  const doMath = function (xx, zznak, yy) {
    if (zznak === '+') {
      return xx + yy;
    }
    if (zznak === '-') {
      return xx - yy;
    }
    if (zznak === '*') {
      return xx * yy;
    }
    if (zznak === '/') {
      return xx / yy;
    }
    if (zznak === '%') {
      return xx % yy;
    }
    if (zznak === '^') {
      return xx ** yy;
    }
    return 'error';
  };
  alert(doMath(x, znak, y));
}
console.log('-----------------------------------------');

const first = prompt('введіть кількісь блоків данних');

const array = [];
let internalLength = 0;
let internal = [];

const inputData = function () {
  for (let i = 0; i < first; i++) {
    internalLength = prompt('введіть кількість айтемів у блоці');
    internal = [];
    for (let j = 0; j < internalLength; j++) {
      internal[j] = prompt(`enter internal data for :${j}`);
    }
    array[i] = internal;
  }
  return array;
};
alert(inputData().join('\n'));
console.log(array);

console.log('-----------------------------------------');

const func = function (string, arr) {
  let str = '';
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
    for (let j = 0; j < arr.length; j++) {
      if (string[i] === arr[j]) {

      }
    }

  }
}

